const xn = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(xn);
const kn = 2, G = !1;
var Tn = Array.prototype.indexOf;
const w = 2, gn = 4, Z = 8, K = 16, b = 32, L = 64, I = 128, N = 256, y = 512, d = 1024, T = 2048, R = 4096, nn = 8192, A = 16384, Fn = 32768, Cn = 1 << 19, rn = 1 << 20;
function tn(n) {
  return n === this.v;
}
function Dn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Nn() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Rn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let An = !1;
function On(n, r) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: tn,
    rv: 0,
    wv: 0
  };
  return t;
}
function Sn(n) {
  return /* @__PURE__ */ bn(On(n));
}
// @__NO_SIDE_EFFECTS__
function bn(n) {
  return _ !== null && !C && _.f & w && (m === null ? jn([n]) : m.push(n)), n;
}
function qn(n, r) {
  return _ !== null && !C && pn() && _.f & (w | K) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (m === null || !m.includes(n)) && Rn(), In(n, r);
}
function In(n, r) {
  return n.equals(r) || (n.v, n.v = r, n.wv = hn(), ln(n, T), v !== null && v.f & d && !(v.f & (b | L)) && (x === null ? $n([n]) : x.push(n))), r;
}
function ln(n, r) {
  var t = n.reactions;
  if (t !== null)
    for (var l = t.length, e = 0; e < l; e++) {
      var u = t[e], s = u.f;
      s & T || (k(u, r), s & (d | N) && (s & w ? ln(
        /** @type {Derived} */
        u,
        R
      ) : En(
        /** @type {Effect} */
        u
      )));
    }
}
var yn, Mn;
// @__NO_SIDE_EFFECTS__
function un(n) {
  return yn.call(n);
}
// @__NO_SIDE_EFFECTS__
function Vn(n) {
  return Mn.call(n);
}
function Bn(n, r) {
  return /* @__PURE__ */ un(n);
}
// @__NO_SIDE_EFFECTS__
function Ln(n) {
  var r = w | T;
  v === null ? r |= N : v.f |= rn;
  var t = _ !== null && _.f & w ? (
    /** @type {Derived} */
    _
  ) : null;
  const l = {
    children: null,
    ctx: D,
    deps: null,
    equals: tn,
    f: r,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: t ?? v
  };
  return t !== null && (t.children ?? (t.children = [])).push(l), l;
}
function en(n) {
  var r = n.children;
  if (r !== null) {
    n.children = null;
    for (var t = 0; t < r.length; t += 1) {
      var l = r[t];
      l.f & w ? W(
        /** @type {Derived} */
        l
      ) : U(
        /** @type {Effect} */
        l
      );
    }
  }
}
function Un(n) {
  for (var r = n.parent; r !== null; ) {
    if (!(r.f & w))
      return (
        /** @type {Effect} */
        r
      );
    r = r.parent;
  }
  return null;
}
function sn(n) {
  var r, t = v;
  X(Un(n));
  try {
    en(n), r = dn(n);
  } finally {
    X(t);
  }
  return r;
}
function on(n) {
  var r = sn(n), t = (g || n.f & N) && n.deps !== null ? R : d;
  k(n, t), n.equals(r) || (n.v = r, n.wv = hn());
}
function W(n) {
  en(n), S(n, 0), k(n, A), n.v = n.children = n.deps = n.ctx = n.reactions = null;
}
function Yn(n, r) {
  var t = r.last;
  t === null ? r.last = r.first = n : (t.next = n, n.prev = t, r.last = n);
}
function Hn(n, r, t, l = !0) {
  var e = (n & L) !== 0, u = v, s = {
    ctx: D,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: n | T,
    first: null,
    fn: r,
    last: null,
    next: null,
    parent: e ? null : u,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  {
    var o = F;
    try {
      J(!0), j(s), s.f |= Fn;
    } catch (E) {
      throw U(s), E;
    } finally {
      J(o);
    }
  }
  var a = s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (rn | I)) === 0;
  if (!a && !e && l && (u !== null && Yn(s, u), _ !== null && _.f & w)) {
    var f = (
      /** @type {Derived} */
      _
    );
    (f.children ?? (f.children = [])).push(s);
  }
  return s;
}
function Pn(n, r = [], t = Ln) {
  const l = r.map(t);
  return Kn(() => n(...l.map($)));
}
function Kn(n, r = 0) {
  return Hn(Z | K | r, n);
}
function an(n) {
  var r = n.teardown;
  if (r !== null) {
    const t = _;
    Q(null);
    try {
      r.call(null);
    } finally {
      Q(t);
    }
  }
}
function fn(n) {
  var r = n.deriveds;
  if (r !== null) {
    n.deriveds = null;
    for (var t = 0; t < r.length; t += 1)
      W(r[t]);
  }
}
function _n(n, r = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    var l = t.next;
    U(t, r), t = l;
  }
}
function Wn(n) {
  for (var r = n.first; r !== null; ) {
    var t = r.next;
    r.f & b || U(r), r = t;
  }
}
function U(n, r = !0) {
  var t = !1;
  if ((r || n.f & Cn) && n.nodes_start !== null) {
    for (var l = n.nodes_start, e = n.nodes_end; l !== null; ) {
      var u = l === e ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Vn(l)
      );
      l.remove(), l = u;
    }
    t = !0;
  }
  _n(n, r && !t), fn(n), S(n, 0), k(n, A);
  var s = n.transitions;
  if (s !== null)
    for (const a of s)
      a.stop();
  an(n);
  var o = n.parent;
  o !== null && o.first !== null && vn(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes_start = n.nodes_end = null;
}
function vn(n) {
  var r = n.parent, t = n.prev, l = n.next;
  t !== null && (t.next = l), l !== null && (l.prev = t), r !== null && (r.first === n && (r.first = l), r.last === n && (r.last = t));
}
let q = !1, M = !1, V = null, F = !1;
function J(n) {
  F = n;
}
let P = [], O = 0;
let _ = null, C = !1;
function Q(n) {
  _ = n;
}
let v = null;
function X(n) {
  v = n;
}
let m = null;
function jn(n) {
  m = n;
}
let c = null, p = 0, x = null;
function $n(n) {
  x = n;
}
let cn = 1, B = 0, g = !1, D = null;
function hn() {
  return ++cn;
}
function pn() {
  return !0;
}
function Y(n) {
  var f;
  var r = n.f;
  if (r & T)
    return !0;
  if (r & R) {
    var t = n.deps, l = (r & N) !== 0;
    if (t !== null) {
      var e, u, s = (r & y) !== 0, o = l && v !== null && !g, a = t.length;
      if (s || o) {
        for (e = 0; e < a; e++)
          u = t[e], (s || !((f = u == null ? void 0 : u.reactions) != null && f.includes(n))) && (u.reactions ?? (u.reactions = [])).push(n);
        s && (n.f ^= y);
      }
      for (e = 0; e < a; e++)
        if (u = t[e], Y(
          /** @type {Derived} */
          u
        ) && on(
          /** @type {Derived} */
          u
        ), u.wv > n.wv)
          return !0;
    }
    (!l || v !== null && !g) && k(n, d);
  }
  return !1;
}
function zn(n, r) {
  for (var t = r; t !== null; ) {
    if (t.f & I)
      try {
        t.fn(n);
        return;
      } catch {
        t.f ^= I;
      }
    t = t.parent;
  }
  throw q = !1, n;
}
function Gn(n) {
  return (n.f & A) === 0 && (n.parent === null || (n.parent.f & I) === 0);
}
function H(n, r, t, l) {
  if (q) {
    if (t === null && (q = !1), Gn(r))
      throw n;
    return;
  }
  t !== null && (q = !0);
  {
    zn(n, r);
    return;
  }
}
function wn(n, r, t = 0) {
  var l = n.reactions;
  if (l !== null)
    for (var e = 0; e < l.length; e++) {
      var u = l[e];
      u.f & w ? wn(
        /** @type {Derived} */
        u,
        r,
        t + 1
      ) : r === u && (t === 0 ? k(u, T) : u.f & d && k(u, R), En(
        /** @type {Effect} */
        u
      ));
    }
}
function dn(n) {
  var z;
  var r = c, t = p, l = x, e = _, u = g, s = m, o = D, a = C, f = n.f;
  c = /** @type {null | Value[]} */
  null, p = 0, x = null, _ = f & (b | L) ? null : n, g = !F && (f & N) !== 0, m = null, D = n.ctx, C = !1, B++;
  try {
    var E = (
      /** @type {Function} */
      (0, n.fn)()
    ), i = n.deps;
    if (c !== null) {
      var h;
      if (S(n, p), i !== null && p > 0)
        for (i.length = p + c.length, h = 0; h < c.length; h++)
          i[p + h] = c[h];
      else
        n.deps = i = c;
      if (!g)
        for (h = p; h < i.length; h++)
          ((z = i[h]).reactions ?? (z.reactions = [])).push(n);
    } else i !== null && p < i.length && (S(n, p), i.length = p);
    if (pn() && x !== null && !(n.f & (w | R | T)))
      for (h = 0; h < /** @type {Source[]} */
      x.length; h++)
        wn(
          x[h],
          /** @type {Effect} */
          n
        );
    return e !== null && B++, E;
  } finally {
    c = r, p = t, x = l, _ = e, g = u, m = s, D = o, C = a;
  }
}
function Jn(n, r) {
  let t = r.reactions;
  if (t !== null) {
    var l = Tn.call(t, n);
    if (l !== -1) {
      var e = t.length - 1;
      e === 0 ? t = r.reactions = null : (t[l] = t[e], t.pop());
    }
  }
  t === null && r.f & w && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (c === null || !c.includes(r)) && (k(r, R), r.f & (N | y) || (r.f ^= y), S(
    /** @type {Derived} **/
    r,
    0
  ));
}
function S(n, r) {
  var t = n.deps;
  if (t !== null)
    for (var l = r; l < t.length; l++)
      Jn(n, t[l]);
}
function j(n) {
  var r = n.f;
  if (!(r & A)) {
    k(n, d);
    var t = v, l = D;
    v = n;
    try {
      r & K ? Wn(n) : _n(n), fn(n), an(n);
      var e = dn(n);
      n.teardown = typeof e == "function" ? e : null, n.wv = cn;
      var u = n.deps, s;
      G && An && n.f & T;
    } catch (o) {
      H(o, n, t, l || n.ctx);
    } finally {
      v = t;
    }
  }
}
function Qn() {
  if (O > 1e3) {
    O = 0;
    try {
      Dn();
    } catch (n) {
      if (V !== null)
        H(n, V, null);
      else
        throw n;
    }
  }
  O++;
}
function Xn(n) {
  var r = n.length;
  if (r !== 0) {
    Qn();
    var t = F;
    F = !0;
    try {
      for (var l = 0; l < r; l++) {
        var e = n[l];
        e.f & d || (e.f ^= d);
        var u = [];
        mn(e, u), Zn(u);
      }
    } finally {
      F = t;
    }
  }
}
function Zn(n) {
  var r = n.length;
  if (r !== 0)
    for (var t = 0; t < r; t++) {
      var l = n[t];
      if (!(l.f & (A | nn)))
        try {
          Y(l) && (j(l), l.deps === null && l.first === null && l.nodes_start === null && (l.teardown === null ? vn(l) : l.fn = null));
        } catch (e) {
          H(e, l, null, l.ctx);
        }
    }
}
function nr() {
  if (M = !1, O > 1001)
    return;
  const n = P;
  P = [], Xn(n), M || (O = 0, V = null);
}
function En(n) {
  M || (M = !0, queueMicrotask(nr)), V = n;
  for (var r = n; r.parent !== null; ) {
    r = r.parent;
    var t = r.f;
    if (t & (L | b)) {
      if (!(t & d)) return;
      r.f ^= d;
    }
  }
  P.push(r);
}
function mn(n, r) {
  var t = n.first, l = [];
  n: for (; t !== null; ) {
    var e = t.f, u = (e & b) !== 0, s = u && (e & d) !== 0, o = t.next;
    if (!s && !(e & nn))
      if (e & Z) {
        if (u)
          t.f ^= d;
        else
          try {
            Y(t) && j(t);
          } catch (i) {
            H(i, t, null, t.ctx);
          }
        var a = t.first;
        if (a !== null) {
          t = a;
          continue;
        }
      } else e & gn && l.push(t);
    if (o === null) {
      let i = t.parent;
      for (; i !== null; ) {
        if (n === i)
          break n;
        var f = i.next;
        if (f !== null) {
          t = f;
          continue n;
        }
        i = i.parent;
      }
    }
    t = o;
  }
  for (var E = 0; E < l.length; E++)
    a = l[E], r.push(a), mn(a, r);
}
function $(n) {
  var E;
  var r = n.f, t = (r & w) !== 0;
  if (t && r & A) {
    var l = sn(
      /** @type {Derived} */
      n
    );
    return W(
      /** @type {Derived} */
      n
    ), l;
  }
  if (_ !== null && !C) {
    m !== null && m.includes(n) && Nn();
    var e = _.deps;
    n.rv < B && (n.rv = B, c === null && e !== null && e[p] === n ? p++ : c === null ? c = [n] : c.push(n));
  } else if (t && /** @type {Derived} */
  n.deps === null)
    for (var u = (
      /** @type {Derived} */
      n
    ), s = u.parent, o = u; s !== null; )
      if (s.f & w) {
        var a = (
          /** @type {Derived} */
          s
        );
        o = a, s = a.parent;
      } else {
        var f = (
          /** @type {Effect} */
          s
        );
        (E = f.deriveds) != null && E.includes(o) || (f.deriveds ?? (f.deriveds = [])).push(o);
        break;
      }
  return t && (u = /** @type {Derived} */
  n, Y(u) && on(u)), n.v;
}
const rr = -7169;
function k(n, r) {
  n.f = n.f & rr | r;
}
const tr = /* @__PURE__ */ new Set(), lr = /* @__PURE__ */ new Set();
function ur(n) {
  for (var r = 0; r < n.length; r++)
    tr.add(n[r]);
  for (var t of lr)
    t(n);
}
function er(n) {
  var r = document.createElement("template");
  return r.innerHTML = n, r.content;
}
function sr(n, r) {
  var t = (
    /** @type {Effect} */
    v
  );
  t.nodes_start === null && (t.nodes_start = n, t.nodes_end = r);
}
// @__NO_SIDE_EFFECTS__
function or(n, r) {
  var t = (r & kn) !== 0, l, e = !n.startsWith("<!>");
  return () => {
    l === void 0 && (l = er(e ? n : "<!>" + n), l = /** @type {Node} */
    /* @__PURE__ */ un(l));
    var u = (
      /** @type {TemplateNode} */
      t ? document.importNode(l, !0) : l.cloneNode(!0)
    );
    return sr(u, u), u;
  };
}
function ar(n, r) {
  n !== null && n.before(
    /** @type {Node} */
    r
  );
}
function fr(n, r) {
  var t = r == null ? "" : typeof r == "object" ? r + "" : r;
  t !== (n.__t ?? (n.__t = n.nodeValue)) && (n.__t = t, n.nodeValue = t == null ? "" : t + "");
}
const ir = (n, r) => {
  qn(r, $(r) + 1);
};
var _r = /* @__PURE__ */ or("<button> </button>");
function vr(n) {
  let r = Sn(0);
  var t = _r();
  t.__click = [ir, r];
  var l = Bn(t);
  Pn(() => fr(l, `count is ${$(r) ?? ""}`)), ar(n, t);
}
ur(["click"]);
export {
  vr as Counter
};
