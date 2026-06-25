/* KLIT Hero — "de um nó a uma rede"
   Vanilla canvas animation: a single node grows, in ordered concentric rings,
   into a mature network, holds healthy, then collapses back to the single node.
   Calm, premium motion. Respects prefers-reduced-motion. */
(function () {
  'use strict';

  var ACCENT = '#A3C5F1';
  var ACCENT_2 = '#7EB3FF';
  var EDGE = 'rgba(163,197,241,0.22)';

  // Easing
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
  function easeInCubic(t) { return t * t * t; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, t) { return a + (b - a) * t; }

  // ---- Timeline (ms) ----
  var GROW_START   = 1050;  // single point holds lit briefly before it sprouts
  var APPEAR_DUR   = 520;
  var STAGGER      = 72;    // delay between successive nodes appearing
  var HOLD_EXTRA   = 2300;  // hold after fully grown
  var COLLAPSE_DUR = 520;   // per-node collapse
  var COLLAPSE_STAG= 70;

  function buildLayout() {
    // Returns nodes (fixed target positions in unit space, center = 0,0)
    // and edges (parent index -> child index). Reveal order is encoded.
    var nodes = [];
    var edges = [];

    // ring 0 — center hub
    nodes.push({ x: 0, y: 0, ring: 0, parent: -1, hub: true, r: 10 });

    // ring 1 — 6 nodes, evenly spaced (ordem, anéis concêntricos)
    var n1 = 6, R1 = 0.34;
    var ring1 = [];
    for (var i = 0; i < n1; i++) {
      var a = (-Math.PI / 2) + (i / n1) * Math.PI * 2;
      var idx = nodes.length;
      var isHub = (i % 2 === 0); // alternating larger hubs
      nodes.push({ x: Math.cos(a) * R1, y: Math.sin(a) * R1, ring: 1, parent: 0, hub: isHub, r: isHub ? 7.5 : 5.4, ang: a });
      edges.push({ p: 0, c: idx });
      ring1.push(idx);
    }

    // ring 2 — children fanned around each ring-1 node, balanced
    var R2 = 0.70;
    var ring2 = [];
    for (var j = 0; j < ring1.length; j++) {
      var parent = nodes[ring1[j]];
      var kids = parent.hub ? 3 : 2; // hubs branch more
      var spread = 0.52; // angular spread around parent's angle
      for (var k = 0; k < kids; k++) {
        var frac = kids === 1 ? 0 : (k / (kids - 1)) - 0.5;
        var a2 = parent.ang + frac * spread;
        var idx2 = nodes.length;
        var isHub2 = parent.hub && k === Math.floor(kids / 2);
        nodes.push({ x: Math.cos(a2) * R2, y: Math.sin(a2) * R2, ring: 2, parent: ring1[j], hub: isHub2, r: isHub2 ? 5.4 : 4.4, ang: a2 });
        edges.push({ p: ring1[j], c: idx2 });
        ring2.push(idx2);
      }
    }

    // ring 3 — outer rim, only some ring-2 nodes branch (fills the section)
    var R3 = 1.06;
    for (var m = 0; m < ring2.length; m++) {
      var p2 = nodes[ring2[m]];
      var kids3 = p2.hub ? 2 : (m % 2 === 0 ? 1 : 0);
      for (var q = 0; q < kids3; q++) {
        var frac3 = kids3 === 1 ? 0 : (q / (kids3 - 1)) - 0.5;
        var a3 = p2.ang + frac3 * 0.38;
        var idx3 = nodes.length;
        nodes.push({ x: Math.cos(a3) * R3, y: Math.sin(a3) * R3, ring: 3, parent: ring2[m], hub: false, r: 3.5, ang: a3 });
        edges.push({ p: ring2[m], c: idx3 });
      }
    }

    // Reveal order: by ring, then by index — ordered outward growth.
    var order = nodes.map(function (n, i) { return i; })
      .filter(function (i) { return i !== 0; })
      .sort(function (a, b) {
        if (nodes[a].ring !== nodes[b].ring) return nodes[a].ring - nodes[b].ring;
        return a - b;
      });
    order.forEach(function (nodeIdx, seq) {
      nodes[nodeIdx].appearAt = GROW_START + seq * STAGGER;
      // collapse reverse: outermost / last appears collapse first
      nodes[nodeIdx]._seq = seq;
    });
    nodes[0].appearAt = 0; // center always present

    var count = order.length;
    var fullyGrown = GROW_START + (count - 1) * STAGGER + APPEAR_DUR;
    var collapseStart = fullyGrown + HOLD_EXTRA;
    order.forEach(function (nodeIdx) {
      var seq = nodes[nodeIdx]._seq;
      // reverse order — last in collapses first
      nodes[nodeIdx].collapseAt = collapseStart + (count - 1 - seq) * COLLAPSE_STAG;
    });
    var cycle = collapseStart + (count - 1) * COLLAPSE_STAG + COLLAPSE_DUR + 600;

    // map edges by child for quick scale lookup
    var edgeByChild = {};
    edges.forEach(function (e) { edgeByChild[e.c] = e; });

    return { nodes: nodes, edges: edges, edgeByChild: edgeByChild, collapseStart: collapseStart, cycle: cycle };
  }

  function nodeScale(node, t, layout) {
    if (node.parent === -1) return 1; // center persists
    var ap = clamp((t - node.appearAt) / APPEAR_DUR, 0, 1);
    var appear = easeOutCubic(ap);
    if (t < node.collapseAt) return appear;
    var d = clamp((t - node.collapseAt) / COLLAPSE_DUR, 0, 1);
    return appear * (1 - easeInCubic(d));
  }

  window.KLITNetwork = { init: init };

  function init(canvas) {
    var ctx = canvas.getContext('2d');
    var dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
    var W = 0, H = 0, unit = 0, cx = 0, cy = 0;
    var layout = buildLayout();
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var start = null;
    var raf = null;

    function resize() {
      var rect = canvas.getBoundingClientRect();
      W = rect.width; H = rect.height;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = W / 2;
      cy = H / 2;
      // span the whole section — the network grows to fill section 1
      unit = Math.max(Math.min(W, H) * 0.5, Math.hypot(W, H) * 0.31);
    }

    function toPx(nx, ny) { return [cx + nx * unit, cy + ny * unit]; }

    function drawNode(px, py, r, scale, glow, breathe) {
      var rad = r * scale * (1 + 0.06 * breathe);
      if (rad < 0.3) return;
      // glow
      var g = ctx.createRadialGradient(px, py, 0, px, py, rad * 4.5);
      g.addColorStop(0, 'rgba(163,197,241,' + (0.42 * glow) + ')');
      g.addColorStop(1, 'rgba(163,197,241,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(px, py, rad * 4.5, 0, Math.PI * 2);
      ctx.fill();
      // core
      ctx.fillStyle = ACCENT;
      ctx.beginPath();
      ctx.arc(px, py, rad, 0, Math.PI * 2);
      ctx.fill();
      // bright center dot
      ctx.fillStyle = 'rgba(255,255,255,0.85)';
      ctx.beginPath();
      ctx.arc(px, py, rad * 0.34, 0, Math.PI * 2);
      ctx.fill();
    }

    function frame(now) {
      if (start === null) start = now;
      var t = (now - start) % layout.cycle;
      var elapsedAbs = now - start;   // never wraps — used to ignite the first point
      ctx.clearRect(0, 0, W, H);

      // global healthy breathing during mature phase
      var breathe = Math.sin(now / 1100) * 0.5 + 0.5;

      var nodes = layout.nodes;
      var edges = layout.edges;

      // 1) edges (behind nodes)
      ctx.lineWidth = 1;
      for (var e = 0; e < edges.length; e++) {
        var ed = edges[e];
        var child = nodes[ed.c];
        var sc = nodeScale(child, t, layout);
        if (sc <= 0.01) continue;
        var pp = toPx(nodes[ed.p].x, nodes[ed.p].y);
        var cp = toPx(child.x, child.y);
        var ex = lerp(pp[0], cp[0], sc);
        var ey = lerp(pp[1], cp[1], sc);
        ctx.strokeStyle = 'rgba(163,197,241,' + (0.22 * sc) + ')';
        ctx.beginPath();
        ctx.moveTo(pp[0], pp[1]);
        ctx.lineTo(ex, ey);
        ctx.stroke();
      }

      // 2) data pulses along fully-drawn edges (calm rhythm)
      for (var e2 = 0; e2 < edges.length; e2++) {
        var ed2 = edges[e2];
        var child2 = nodes[ed2.c];
        var sc2 = nodeScale(child2, t, layout);
        if (sc2 < 0.96) continue;
        if (ed2.c % 2 !== 0) continue; // only some edges carry pulses
        var pp2 = toPx(nodes[ed2.p].x, nodes[ed2.p].y);
        var cp2 = toPx(child2.x, child2.y);
        var period = 2600;
        var offset = (ed2.c * 0.37) % 1;
        var prog = ((now / period) + offset) % 1;
        var pxp = lerp(pp2[0], cp2[0], prog);
        var pyp = lerp(pp2[1], cp2[1], prog);
        var fade = Math.sin(prog * Math.PI); // fade in/out at ends
        ctx.fillStyle = 'rgba(126,179,255,' + (0.9 * fade) + ')';
        ctx.beginPath();
        ctx.arc(pxp, pyp, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3) nodes
      for (var n = 0; n < nodes.length; n++) {
        var node = nodes[n];
        var s;
        var glow = 0.55 + 0.45 * breathe;
        if (node.parent === -1) {
          // the very first point ignites from nothing, then stays lit
          s = easeOutCubic(clamp(elapsedAbs / 1000, 0, 1));
          var alonePulse = Math.sin(now / 520) * 0.5 + 0.5;
          glow = (0.7 + 0.3 * alonePulse) * s;
        } else {
          s = nodeScale(node, t, layout);
        }
        if (s <= 0.01) continue;
        var p = toPx(node.x, node.y);
        drawNode(p[0], p[1], node.r, s, glow, breathe);
      }

      raf = requestAnimationFrame(frame);
    }

    function drawStatic() {
      // mature network, no motion
      ctx.clearRect(0, 0, W, H);
      var nodes = layout.nodes, edges = layout.edges;
      ctx.lineWidth = 1;
      ctx.strokeStyle = EDGE;
      for (var e = 0; e < edges.length; e++) {
        var pp = toPx(nodes[edges[e].p].x, nodes[edges[e].p].y);
        var cp = toPx(nodes[edges[e].c].x, nodes[edges[e].c].y);
        ctx.beginPath(); ctx.moveTo(pp[0], pp[1]); ctx.lineTo(cp[0], cp[1]); ctx.stroke();
      }
      for (var n = 0; n < nodes.length; n++) {
        var p = toPx(nodes[n].x, nodes[n].y);
        drawNode(p[0], p[1], nodes[n].r, 1, 0.7, 0.5);
      }
    }

    resize();
    var ro = new ResizeObserver(function () {
      resize();
      if (reduced) drawStatic();
    });
    ro.observe(canvas);

    if (reduced) {
      drawStatic();
    } else {
      raf = requestAnimationFrame(frame);
    }
  }
})();
