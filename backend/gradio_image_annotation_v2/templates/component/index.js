const {
  SvelteComponent: x_,
  assign: ec,
  create_slot: tc,
  detach: nc,
  element: ic,
  get_all_dirty_from_scope: lc,
  get_slot_changes: oc,
  get_spread_update: sc,
  init: ac,
  insert: rc,
  safe_not_equal: _c,
  set_dynamic_element_data: us,
  set_style: $e,
  toggle_class: Ct,
  transition_in: pr,
  transition_out: br,
  update_slot_base: cc
} = window.__gradio__svelte__internal;
function fc(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[18].default
  ), o = tc(
    l,
    i,
    /*$$scope*/
    i[17],
    null
  );
  let s = [
    { "data-testid": (
      /*test_id*/
      i[7]
    ) },
    { id: (
      /*elem_id*/
      i[2]
    ) },
    {
      class: t = "block " + /*elem_classes*/
      i[3].join(" ") + " svelte-nl1om8"
    }
  ], r = {};
  for (let a = 0; a < s.length; a += 1)
    r = ec(r, s[a]);
  return {
    c() {
      e = ic(
        /*tag*/
        i[14]
      ), o && o.c(), us(
        /*tag*/
        i[14]
      )(e, r), Ct(
        e,
        "hidden",
        /*visible*/
        i[10] === !1
      ), Ct(
        e,
        "padded",
        /*padding*/
        i[6]
      ), Ct(
        e,
        "border_focus",
        /*border_mode*/
        i[5] === "focus"
      ), Ct(
        e,
        "border_contrast",
        /*border_mode*/
        i[5] === "contrast"
      ), Ct(e, "hide-container", !/*explicit_call*/
      i[8] && !/*container*/
      i[9]), $e(
        e,
        "height",
        /*get_dimension*/
        i[15](
          /*height*/
          i[0]
        )
      ), $e(e, "width", typeof /*width*/
      i[1] == "number" ? `calc(min(${/*width*/
      i[1]}px, 100%))` : (
        /*get_dimension*/
        i[15](
          /*width*/
          i[1]
        )
      )), $e(
        e,
        "border-style",
        /*variant*/
        i[4]
      ), $e(
        e,
        "overflow",
        /*allow_overflow*/
        i[11] ? "visible" : "hidden"
      ), $e(
        e,
        "flex-grow",
        /*scale*/
        i[12]
      ), $e(e, "min-width", `calc(min(${/*min_width*/
      i[13]}px, 100%))`), $e(e, "border-width", "var(--block-border-width)");
    },
    m(a, _) {
      rc(a, e, _), o && o.m(e, null), n = !0;
    },
    p(a, _) {
      o && o.p && (!n || _ & /*$$scope*/
      131072) && cc(
        o,
        l,
        a,
        /*$$scope*/
        a[17],
        n ? oc(
          l,
          /*$$scope*/
          a[17],
          _,
          null
        ) : lc(
          /*$$scope*/
          a[17]
        ),
        null
      ), us(
        /*tag*/
        a[14]
      )(e, r = sc(s, [
        (!n || _ & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          a[7]
        ) },
        (!n || _ & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          a[2]
        ) },
        (!n || _ & /*elem_classes*/
        8 && t !== (t = "block " + /*elem_classes*/
        a[3].join(" ") + " svelte-nl1om8")) && { class: t }
      ])), Ct(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), Ct(
        e,
        "padded",
        /*padding*/
        a[6]
      ), Ct(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), Ct(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), Ct(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), _ & /*height*/
      1 && $e(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), _ & /*width*/
      2 && $e(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), _ & /*variant*/
      16 && $e(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), _ & /*allow_overflow*/
      2048 && $e(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), _ & /*scale*/
      4096 && $e(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), _ & /*min_width*/
      8192 && $e(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (pr(o, a), n = !0);
    },
    o(a) {
      br(o, a), n = !1;
    },
    d(a) {
      a && nc(e), o && o.d(a);
    }
  };
}
function uc(i) {
  let e, t = (
    /*tag*/
    i[14] && fc(i)
  );
  return {
    c() {
      t && t.c();
    },
    m(n, l) {
      t && t.m(n, l), e = !0;
    },
    p(n, [l]) {
      /*tag*/
      n[14] && t.p(n, l);
    },
    i(n) {
      e || (pr(t, n), e = !0);
    },
    o(n) {
      br(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function dc(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { height: o = void 0 } = e, { width: s = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: _ = "solid" } = e, { border_mode: c = "base" } = e, { padding: u = !0 } = e, { type: d = "normal" } = e, { test_id: h = void 0 } = e, { explicit_call: p = !1 } = e, { container: f = !0 } = e, { visible: m = !0 } = e, { allow_overflow: g = !0 } = e, { scale: v = null } = e, { min_width: b = 0 } = e, q = d === "fieldset" ? "fieldset" : "div";
  const S = (C) => {
    if (C !== void 0) {
      if (typeof C == "number")
        return C + "px";
      if (typeof C == "string")
        return C;
    }
  };
  return i.$$set = (C) => {
    "height" in C && t(0, o = C.height), "width" in C && t(1, s = C.width), "elem_id" in C && t(2, r = C.elem_id), "elem_classes" in C && t(3, a = C.elem_classes), "variant" in C && t(4, _ = C.variant), "border_mode" in C && t(5, c = C.border_mode), "padding" in C && t(6, u = C.padding), "type" in C && t(16, d = C.type), "test_id" in C && t(7, h = C.test_id), "explicit_call" in C && t(8, p = C.explicit_call), "container" in C && t(9, f = C.container), "visible" in C && t(10, m = C.visible), "allow_overflow" in C && t(11, g = C.allow_overflow), "scale" in C && t(12, v = C.scale), "min_width" in C && t(13, b = C.min_width), "$$scope" in C && t(17, l = C.$$scope);
  }, [
    o,
    s,
    r,
    a,
    _,
    c,
    u,
    h,
    p,
    f,
    m,
    g,
    v,
    b,
    q,
    S,
    d,
    l,
    n
  ];
}
class hc extends x_ {
  constructor(e) {
    super(), ac(this, e, dc, uc, _c, {
      height: 0,
      width: 1,
      elem_id: 2,
      elem_classes: 3,
      variant: 4,
      border_mode: 5,
      padding: 6,
      type: 16,
      test_id: 7,
      explicit_call: 8,
      container: 9,
      visible: 10,
      allow_overflow: 11,
      scale: 12,
      min_width: 13
    });
  }
}
const {
  SvelteComponent: mc,
  attr: gc,
  create_slot: pc,
  detach: bc,
  element: wc,
  get_all_dirty_from_scope: vc,
  get_slot_changes: kc,
  init: Cc,
  insert: yc,
  safe_not_equal: Sc,
  transition_in: qc,
  transition_out: zc,
  update_slot_base: Dc
} = window.__gradio__svelte__internal;
function Bc(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), l = pc(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = wc("div"), l && l.c(), gc(e, "class", "svelte-1hnfib2");
    },
    m(o, s) {
      yc(o, e, s), l && l.m(e, null), t = !0;
    },
    p(o, [s]) {
      l && l.p && (!t || s & /*$$scope*/
      1) && Dc(
        l,
        n,
        o,
        /*$$scope*/
        o[0],
        t ? kc(
          n,
          /*$$scope*/
          o[0],
          s,
          null
        ) : vc(
          /*$$scope*/
          o[0]
        ),
        null
      );
    },
    i(o) {
      t || (qc(l, o), t = !0);
    },
    o(o) {
      zc(l, o), t = !1;
    },
    d(o) {
      o && bc(e), l && l.d(o);
    }
  };
}
function Mc(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  return i.$$set = (o) => {
    "$$scope" in o && t(0, l = o.$$scope);
  }, [l, n];
}
class Ec extends mc {
  constructor(e) {
    super(), Cc(this, e, Mc, Bc, Sc, {});
  }
}
const {
  SvelteComponent: Lc,
  attr: ds,
  check_outros: Wc,
  create_component: Rc,
  create_slot: Xc,
  destroy_component: Yc,
  detach: Ji,
  element: Ac,
  empty: Ic,
  get_all_dirty_from_scope: jc,
  get_slot_changes: Hc,
  group_outros: Tc,
  init: Fc,
  insert: Qi,
  mount_component: Pc,
  safe_not_equal: Uc,
  set_data: Oc,
  space: Vc,
  text: Nc,
  toggle_class: Yn,
  transition_in: gi,
  transition_out: xi,
  update_slot_base: $c
} = window.__gradio__svelte__internal;
function hs(i) {
  let e, t;
  return e = new Ec({
    props: {
      $$slots: { default: [Kc] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Rc(e.$$.fragment);
    },
    m(n, l) {
      Pc(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l & /*$$scope, info*/
      10 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (gi(e.$$.fragment, n), t = !0);
    },
    o(n) {
      xi(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Yc(e, n);
    }
  };
}
function Kc(i) {
  let e;
  return {
    c() {
      e = Nc(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      Qi(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && Oc(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && Ji(e);
    }
  };
}
function Zc(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[2].default
  ), s = Xc(
    o,
    i,
    /*$$scope*/
    i[3],
    null
  );
  let r = (
    /*info*/
    i[1] && hs(i)
  );
  return {
    c() {
      e = Ac("span"), s && s.c(), t = Vc(), r && r.c(), n = Ic(), ds(e, "data-testid", "block-info"), ds(e, "class", "svelte-22c38v"), Yn(e, "sr-only", !/*show_label*/
      i[0]), Yn(e, "hide", !/*show_label*/
      i[0]), Yn(
        e,
        "has-info",
        /*info*/
        i[1] != null
      );
    },
    m(a, _) {
      Qi(a, e, _), s && s.m(e, null), Qi(a, t, _), r && r.m(a, _), Qi(a, n, _), l = !0;
    },
    p(a, [_]) {
      s && s.p && (!l || _ & /*$$scope*/
      8) && $c(
        s,
        o,
        a,
        /*$$scope*/
        a[3],
        l ? Hc(
          o,
          /*$$scope*/
          a[3],
          _,
          null
        ) : jc(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!l || _ & /*show_label*/
      1) && Yn(e, "sr-only", !/*show_label*/
      a[0]), (!l || _ & /*show_label*/
      1) && Yn(e, "hide", !/*show_label*/
      a[0]), (!l || _ & /*info*/
      2) && Yn(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, _), _ & /*info*/
      2 && gi(r, 1)) : (r = hs(a), r.c(), gi(r, 1), r.m(n.parentNode, n)) : r && (Tc(), xi(r, 1, 1, () => {
        r = null;
      }), Wc());
    },
    i(a) {
      l || (gi(s, a), gi(r), l = !0);
    },
    o(a) {
      xi(s, a), xi(r), l = !1;
    },
    d(a) {
      a && (Ji(e), Ji(t), Ji(n)), s && s.d(a), r && r.d(a);
    }
  };
}
function Gc(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { show_label: o = !0 } = e, { info: s = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, o = r.show_label), "info" in r && t(1, s = r.info), "$$scope" in r && t(3, l = r.$$scope);
  }, [o, s, n, l];
}
class wr extends Lc {
  constructor(e) {
    super(), Fc(this, e, Gc, Zc, Uc, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: Jc,
  append: Xl,
  attr: Wi,
  create_component: Qc,
  destroy_component: xc,
  detach: ef,
  element: ms,
  init: tf,
  insert: nf,
  mount_component: lf,
  safe_not_equal: of,
  set_data: sf,
  space: af,
  text: rf,
  toggle_class: Jt,
  transition_in: _f,
  transition_out: cf
} = window.__gradio__svelte__internal;
function ff(i) {
  let e, t, n, l, o, s;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = ms("label"), t = ms("span"), Qc(n.$$.fragment), l = af(), o = rf(
        /*label*/
        i[0]
      ), Wi(t, "class", "svelte-9gxdi0"), Wi(e, "for", ""), Wi(e, "data-testid", "block-label"), Wi(e, "class", "svelte-9gxdi0"), Jt(e, "hide", !/*show_label*/
      i[2]), Jt(e, "sr-only", !/*show_label*/
      i[2]), Jt(
        e,
        "float",
        /*float*/
        i[4]
      ), Jt(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      nf(r, e, a), Xl(e, t), lf(n, t, null), Xl(e, l), Xl(e, o), s = !0;
    },
    p(r, [a]) {
      (!s || a & /*label*/
      1) && sf(
        o,
        /*label*/
        r[0]
      ), (!s || a & /*show_label*/
      4) && Jt(e, "hide", !/*show_label*/
      r[2]), (!s || a & /*show_label*/
      4) && Jt(e, "sr-only", !/*show_label*/
      r[2]), (!s || a & /*float*/
      16) && Jt(
        e,
        "float",
        /*float*/
        r[4]
      ), (!s || a & /*disable*/
      8) && Jt(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      s || (_f(n.$$.fragment, r), s = !0);
    },
    o(r) {
      cf(n.$$.fragment, r), s = !1;
    },
    d(r) {
      r && ef(e), xc(n);
    }
  };
}
function uf(i, e, t) {
  let { label: n = null } = e, { Icon: l } = e, { show_label: o = !0 } = e, { disable: s = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, l = a.Icon), "show_label" in a && t(2, o = a.show_label), "disable" in a && t(3, s = a.disable), "float" in a && t(4, r = a.float);
  }, [n, l, o, s, r];
}
class df extends Jc {
  constructor(e) {
    super(), tf(this, e, uf, ff, of, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: hf,
  append: Bo,
  attr: Pt,
  bubble: mf,
  create_component: gf,
  destroy_component: pf,
  detach: vr,
  element: Mo,
  init: bf,
  insert: kr,
  listen: wf,
  mount_component: vf,
  safe_not_equal: kf,
  set_data: Cf,
  set_style: An,
  space: yf,
  text: Sf,
  toggle_class: Ae,
  transition_in: qf,
  transition_out: zf
} = window.__gradio__svelte__internal;
function gs(i) {
  let e, t;
  return {
    c() {
      e = Mo("span"), t = Sf(
        /*label*/
        i[1]
      ), Pt(e, "class", "svelte-1lrphxw");
    },
    m(n, l) {
      kr(n, e, l), Bo(e, t);
    },
    p(n, l) {
      l & /*label*/
      2 && Cf(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && vr(e);
    }
  };
}
function Df(i) {
  let e, t, n, l, o, s, r, a = (
    /*show_label*/
    i[2] && gs(i)
  );
  return l = new /*Icon*/
  i[0]({}), {
    c() {
      e = Mo("button"), a && a.c(), t = yf(), n = Mo("div"), gf(l.$$.fragment), Pt(n, "class", "svelte-1lrphxw"), Ae(
        n,
        "small",
        /*size*/
        i[4] === "small"
      ), Ae(
        n,
        "large",
        /*size*/
        i[4] === "large"
      ), Ae(
        n,
        "medium",
        /*size*/
        i[4] === "medium"
      ), e.disabled = /*disabled*/
      i[7], Pt(
        e,
        "aria-label",
        /*label*/
        i[1]
      ), Pt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        i[8]
      ), Pt(
        e,
        "title",
        /*label*/
        i[1]
      ), Pt(e, "class", "svelte-1lrphxw"), Ae(
        e,
        "pending",
        /*pending*/
        i[3]
      ), Ae(
        e,
        "padded",
        /*padded*/
        i[5]
      ), Ae(
        e,
        "highlight",
        /*highlight*/
        i[6]
      ), Ae(
        e,
        "transparent",
        /*transparent*/
        i[9]
      ), An(e, "color", !/*disabled*/
      i[7] && /*_color*/
      i[12] ? (
        /*_color*/
        i[12]
      ) : "var(--block-label-text-color)"), An(e, "--bg-color", /*disabled*/
      i[7] ? "auto" : (
        /*background*/
        i[10]
      )), An(
        e,
        "margin-left",
        /*offset*/
        i[11] + "px"
      );
    },
    m(_, c) {
      kr(_, e, c), a && a.m(e, null), Bo(e, t), Bo(e, n), vf(l, n, null), o = !0, s || (r = wf(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), s = !0);
    },
    p(_, [c]) {
      /*show_label*/
      _[2] ? a ? a.p(_, c) : (a = gs(_), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!o || c & /*size*/
      16) && Ae(
        n,
        "small",
        /*size*/
        _[4] === "small"
      ), (!o || c & /*size*/
      16) && Ae(
        n,
        "large",
        /*size*/
        _[4] === "large"
      ), (!o || c & /*size*/
      16) && Ae(
        n,
        "medium",
        /*size*/
        _[4] === "medium"
      ), (!o || c & /*disabled*/
      128) && (e.disabled = /*disabled*/
      _[7]), (!o || c & /*label*/
      2) && Pt(
        e,
        "aria-label",
        /*label*/
        _[1]
      ), (!o || c & /*hasPopup*/
      256) && Pt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        _[8]
      ), (!o || c & /*label*/
      2) && Pt(
        e,
        "title",
        /*label*/
        _[1]
      ), (!o || c & /*pending*/
      8) && Ae(
        e,
        "pending",
        /*pending*/
        _[3]
      ), (!o || c & /*padded*/
      32) && Ae(
        e,
        "padded",
        /*padded*/
        _[5]
      ), (!o || c & /*highlight*/
      64) && Ae(
        e,
        "highlight",
        /*highlight*/
        _[6]
      ), (!o || c & /*transparent*/
      512) && Ae(
        e,
        "transparent",
        /*transparent*/
        _[9]
      ), c & /*disabled, _color*/
      4224 && An(e, "color", !/*disabled*/
      _[7] && /*_color*/
      _[12] ? (
        /*_color*/
        _[12]
      ) : "var(--block-label-text-color)"), c & /*disabled, background*/
      1152 && An(e, "--bg-color", /*disabled*/
      _[7] ? "auto" : (
        /*background*/
        _[10]
      )), c & /*offset*/
      2048 && An(
        e,
        "margin-left",
        /*offset*/
        _[11] + "px"
      );
    },
    i(_) {
      o || (qf(l.$$.fragment, _), o = !0);
    },
    o(_) {
      zf(l.$$.fragment, _), o = !1;
    },
    d(_) {
      _ && vr(e), a && a.d(), pf(l), s = !1, r();
    }
  };
}
function Bf(i, e, t) {
  let n, { Icon: l } = e, { label: o = "" } = e, { show_label: s = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: _ = !0 } = e, { highlight: c = !1 } = e, { disabled: u = !1 } = e, { hasPopup: d = !1 } = e, { color: h = "var(--block-label-text-color)" } = e, { transparent: p = !1 } = e, { background: f = "var(--background-fill-primary)" } = e, { offset: m = 0 } = e;
  function g(v) {
    mf.call(this, i, v);
  }
  return i.$$set = (v) => {
    "Icon" in v && t(0, l = v.Icon), "label" in v && t(1, o = v.label), "show_label" in v && t(2, s = v.show_label), "pending" in v && t(3, r = v.pending), "size" in v && t(4, a = v.size), "padded" in v && t(5, _ = v.padded), "highlight" in v && t(6, c = v.highlight), "disabled" in v && t(7, u = v.disabled), "hasPopup" in v && t(8, d = v.hasPopup), "color" in v && t(13, h = v.color), "transparent" in v && t(9, p = v.transparent), "background" in v && t(10, f = v.background), "offset" in v && t(11, m = v.offset);
  }, i.$$.update = () => {
    i.$$.dirty & /*highlight, color*/
    8256 && t(12, n = c ? "var(--color-accent)" : h);
  }, [
    l,
    o,
    s,
    r,
    a,
    _,
    c,
    u,
    d,
    p,
    f,
    m,
    n,
    h,
    g
  ];
}
class bl extends hf {
  constructor(e) {
    super(), bf(this, e, Bf, Df, kf, {
      Icon: 0,
      label: 1,
      show_label: 2,
      pending: 3,
      size: 4,
      padded: 5,
      highlight: 6,
      disabled: 7,
      hasPopup: 8,
      color: 13,
      transparent: 9,
      background: 10,
      offset: 11
    });
  }
}
const {
  SvelteComponent: Mf,
  append: Ef,
  attr: Yl,
  binding_callbacks: Lf,
  create_slot: Wf,
  detach: Rf,
  element: ps,
  get_all_dirty_from_scope: Xf,
  get_slot_changes: Yf,
  init: Af,
  insert: If,
  safe_not_equal: jf,
  toggle_class: Qt,
  transition_in: Hf,
  transition_out: Tf,
  update_slot_base: Ff
} = window.__gradio__svelte__internal;
function Pf(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[5].default
  ), o = Wf(
    l,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = ps("div"), t = ps("div"), o && o.c(), Yl(t, "class", "icon svelte-3w3rth"), Yl(e, "class", "empty svelte-3w3rth"), Yl(e, "aria-label", "Empty value"), Qt(
        e,
        "small",
        /*size*/
        i[0] === "small"
      ), Qt(
        e,
        "large",
        /*size*/
        i[0] === "large"
      ), Qt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        i[1]
      ), Qt(
        e,
        "small_parent",
        /*parent_height*/
        i[3]
      );
    },
    m(s, r) {
      If(s, e, r), Ef(e, t), o && o.m(t, null), i[6](e), n = !0;
    },
    p(s, [r]) {
      o && o.p && (!n || r & /*$$scope*/
      16) && Ff(
        o,
        l,
        s,
        /*$$scope*/
        s[4],
        n ? Yf(
          l,
          /*$$scope*/
          s[4],
          r,
          null
        ) : Xf(
          /*$$scope*/
          s[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && Qt(
        e,
        "small",
        /*size*/
        s[0] === "small"
      ), (!n || r & /*size*/
      1) && Qt(
        e,
        "large",
        /*size*/
        s[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && Qt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        s[1]
      ), (!n || r & /*parent_height*/
      8) && Qt(
        e,
        "small_parent",
        /*parent_height*/
        s[3]
      );
    },
    i(s) {
      n || (Hf(o, s), n = !0);
    },
    o(s) {
      Tf(o, s), n = !1;
    },
    d(s) {
      s && Rf(e), o && o.d(s), i[6](null);
    }
  };
}
function Uf(i, e, t) {
  let n, { $$slots: l = {}, $$scope: o } = e, { size: s = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function _(u) {
    var d;
    if (!u) return !1;
    const { height: h } = u.getBoundingClientRect(), { height: p } = ((d = u.parentElement) === null || d === void 0 ? void 0 : d.getBoundingClientRect()) || { height: h };
    return h > p + 2;
  }
  function c(u) {
    Lf[u ? "unshift" : "push"](() => {
      a = u, t(2, a);
    });
  }
  return i.$$set = (u) => {
    "size" in u && t(0, s = u.size), "unpadded_box" in u && t(1, r = u.unpadded_box), "$$scope" in u && t(4, o = u.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty & /*el*/
    4 && t(3, n = _(a));
  }, [s, r, a, n, o, l, c];
}
class Of extends Mf {
  constructor(e) {
    super(), Af(this, e, Uf, Pf, jf, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: yb,
  append: Sb,
  attr: qb,
  detach: zb,
  init: Db,
  insert: Bb,
  noop: Mb,
  safe_not_equal: Eb,
  svg_element: Lb
} = window.__gradio__svelte__internal, {
  SvelteComponent: Wb,
  append: Rb,
  attr: Xb,
  detach: Yb,
  init: Ab,
  insert: Ib,
  noop: jb,
  safe_not_equal: Hb,
  svg_element: Tb
} = window.__gradio__svelte__internal, {
  SvelteComponent: Fb,
  append: Pb,
  attr: Ub,
  detach: Ob,
  init: Vb,
  insert: Nb,
  noop: $b,
  safe_not_equal: Kb,
  svg_element: Zb
} = window.__gradio__svelte__internal, {
  SvelteComponent: Vf,
  append: bs,
  attr: Ie,
  detach: Nf,
  init: $f,
  insert: Kf,
  noop: Al,
  safe_not_equal: Zf,
  svg_element: Il
} = window.__gradio__svelte__internal;
function Gf(i) {
  let e, t, n;
  return {
    c() {
      e = Il("svg"), t = Il("path"), n = Il("circle"), Ie(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), Ie(n, "cx", "12"), Ie(n, "cy", "13"), Ie(n, "r", "4"), Ie(e, "xmlns", "http://www.w3.org/2000/svg"), Ie(e, "width", "100%"), Ie(e, "height", "100%"), Ie(e, "viewBox", "0 0 24 24"), Ie(e, "fill", "none"), Ie(e, "stroke", "currentColor"), Ie(e, "stroke-width", "1.5"), Ie(e, "stroke-linecap", "round"), Ie(e, "stroke-linejoin", "round"), Ie(e, "class", "feather feather-camera");
    },
    m(l, o) {
      Kf(l, e, o), bs(e, t), bs(e, n);
    },
    p: Al,
    i: Al,
    o: Al,
    d(l) {
      l && Nf(e);
    }
  };
}
class Jf extends Vf {
  constructor(e) {
    super(), $f(this, e, null, Gf, Zf, {});
  }
}
const {
  SvelteComponent: Gb,
  append: Jb,
  attr: Qb,
  detach: xb,
  init: e2,
  insert: t2,
  noop: n2,
  safe_not_equal: i2,
  svg_element: l2
} = window.__gradio__svelte__internal, {
  SvelteComponent: o2,
  append: s2,
  attr: a2,
  detach: r2,
  init: _2,
  insert: c2,
  noop: f2,
  safe_not_equal: u2,
  svg_element: d2
} = window.__gradio__svelte__internal, {
  SvelteComponent: h2,
  append: m2,
  attr: g2,
  detach: p2,
  init: b2,
  insert: w2,
  noop: v2,
  safe_not_equal: k2,
  svg_element: C2
} = window.__gradio__svelte__internal, {
  SvelteComponent: Qf,
  append: xf,
  attr: _t,
  detach: eu,
  init: tu,
  insert: nu,
  noop: jl,
  safe_not_equal: iu,
  svg_element: ws
} = window.__gradio__svelte__internal;
function lu(i) {
  let e, t;
  return {
    c() {
      e = ws("svg"), t = ws("circle"), _t(t, "cx", "12"), _t(t, "cy", "12"), _t(t, "r", "10"), _t(e, "xmlns", "http://www.w3.org/2000/svg"), _t(e, "width", "100%"), _t(e, "height", "100%"), _t(e, "viewBox", "0 0 24 24"), _t(e, "stroke-width", "1.5"), _t(e, "stroke-linecap", "round"), _t(e, "stroke-linejoin", "round"), _t(e, "class", "feather feather-circle");
    },
    m(n, l) {
      nu(n, e, l), xf(e, t);
    },
    p: jl,
    i: jl,
    o: jl,
    d(n) {
      n && eu(e);
    }
  };
}
class ou extends Qf {
  constructor(e) {
    super(), tu(this, e, null, lu, iu, {});
  }
}
const {
  SvelteComponent: su,
  append: Hl,
  attr: ct,
  detach: au,
  init: ru,
  insert: _u,
  noop: Tl,
  safe_not_equal: cu,
  set_style: yt,
  svg_element: Ri
} = window.__gradio__svelte__internal;
function fu(i) {
  let e, t, n, l;
  return {
    c() {
      e = Ri("svg"), t = Ri("g"), n = Ri("path"), l = Ri("path"), ct(n, "d", "M18,6L6.087,17.913"), yt(n, "fill", "none"), yt(n, "fill-rule", "nonzero"), yt(n, "stroke-width", "2px"), ct(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), ct(l, "d", "M4.364,4.364L19.636,19.636"), yt(l, "fill", "none"), yt(l, "fill-rule", "nonzero"), yt(l, "stroke-width", "2px"), ct(e, "width", "100%"), ct(e, "height", "100%"), ct(e, "viewBox", "0 0 24 24"), ct(e, "version", "1.1"), ct(e, "xmlns", "http://www.w3.org/2000/svg"), ct(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ct(e, "xml:space", "preserve"), ct(e, "stroke", "currentColor"), yt(e, "fill-rule", "evenodd"), yt(e, "clip-rule", "evenodd"), yt(e, "stroke-linecap", "round"), yt(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      _u(o, e, s), Hl(e, t), Hl(t, n), Hl(e, l);
    },
    p: Tl,
    i: Tl,
    o: Tl,
    d(o) {
      o && au(e);
    }
  };
}
class Cr extends su {
  constructor(e) {
    super(), ru(this, e, null, fu, cu, {});
  }
}
const {
  SvelteComponent: y2,
  append: S2,
  attr: q2,
  detach: z2,
  init: D2,
  insert: B2,
  noop: M2,
  safe_not_equal: E2,
  svg_element: L2
} = window.__gradio__svelte__internal, {
  SvelteComponent: W2,
  append: R2,
  attr: X2,
  detach: Y2,
  init: A2,
  insert: I2,
  noop: j2,
  safe_not_equal: H2,
  svg_element: T2
} = window.__gradio__svelte__internal, {
  SvelteComponent: uu,
  append: du,
  attr: ri,
  detach: hu,
  init: mu,
  insert: gu,
  noop: Fl,
  safe_not_equal: pu,
  svg_element: vs
} = window.__gradio__svelte__internal;
function bu(i) {
  let e, t;
  return {
    c() {
      e = vs("svg"), t = vs("path"), ri(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), ri(t, "fill", "currentColor"), ri(e, "id", "icon"), ri(e, "xmlns", "http://www.w3.org/2000/svg"), ri(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      gu(n, e, l), du(e, t);
    },
    p: Fl,
    i: Fl,
    o: Fl,
    d(n) {
      n && hu(e);
    }
  };
}
class wu extends uu {
  constructor(e) {
    super(), mu(this, e, null, bu, pu, {});
  }
}
const {
  SvelteComponent: F2,
  append: P2,
  attr: U2,
  detach: O2,
  init: V2,
  insert: N2,
  noop: $2,
  safe_not_equal: K2,
  svg_element: Z2
} = window.__gradio__svelte__internal, {
  SvelteComponent: G2,
  append: J2,
  attr: Q2,
  detach: x2,
  init: ew,
  insert: tw,
  noop: nw,
  safe_not_equal: iw,
  svg_element: lw
} = window.__gradio__svelte__internal, {
  SvelteComponent: ow,
  append: sw,
  attr: aw,
  detach: rw,
  init: _w,
  insert: cw,
  noop: fw,
  safe_not_equal: uw,
  svg_element: dw
} = window.__gradio__svelte__internal, {
  SvelteComponent: vu,
  append: ku,
  attr: In,
  detach: Cu,
  init: yu,
  insert: Su,
  noop: Pl,
  safe_not_equal: qu,
  svg_element: ks
} = window.__gradio__svelte__internal;
function zu(i) {
  let e, t;
  return {
    c() {
      e = ks("svg"), t = ks("path"), In(t, "fill", "currentColor"), In(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), In(e, "xmlns", "http://www.w3.org/2000/svg"), In(e, "width", "100%"), In(e, "height", "100%"), In(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      Su(n, e, l), ku(e, t);
    },
    p: Pl,
    i: Pl,
    o: Pl,
    d(n) {
      n && Cu(e);
    }
  };
}
class Du extends vu {
  constructor(e) {
    super(), yu(this, e, null, zu, qu, {});
  }
}
const {
  SvelteComponent: Bu,
  append: Mu,
  attr: jn,
  detach: Eu,
  init: Lu,
  insert: Wu,
  noop: Ul,
  safe_not_equal: Ru,
  svg_element: Cs
} = window.__gradio__svelte__internal;
function Xu(i) {
  let e, t;
  return {
    c() {
      e = Cs("svg"), t = Cs("path"), jn(t, "d", "M5 8l4 4 4-4z"), jn(e, "class", "dropdown-arrow svelte-145leq6"), jn(e, "xmlns", "http://www.w3.org/2000/svg"), jn(e, "width", "100%"), jn(e, "height", "100%"), jn(e, "viewBox", "0 0 18 18");
    },
    m(n, l) {
      Wu(n, e, l), Mu(e, t);
    },
    p: Ul,
    i: Ul,
    o: Ul,
    d(n) {
      n && Eu(e);
    }
  };
}
class Zo extends Bu {
  constructor(e) {
    super(), Lu(this, e, null, Xu, Ru, {});
  }
}
const {
  SvelteComponent: hw,
  append: mw,
  attr: gw,
  detach: pw,
  init: bw,
  insert: ww,
  noop: vw,
  safe_not_equal: kw,
  svg_element: Cw
} = window.__gradio__svelte__internal, {
  SvelteComponent: yw,
  append: Sw,
  attr: qw,
  detach: zw,
  init: Dw,
  insert: Bw,
  noop: Mw,
  safe_not_equal: Ew,
  svg_element: Lw
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ww,
  append: Rw,
  attr: Xw,
  detach: Yw,
  init: Aw,
  insert: Iw,
  noop: jw,
  safe_not_equal: Hw,
  svg_element: Tw
} = window.__gradio__svelte__internal, {
  SvelteComponent: Fw,
  append: Pw,
  attr: Uw,
  detach: Ow,
  init: Vw,
  insert: Nw,
  noop: $w,
  safe_not_equal: Kw,
  svg_element: Zw
} = window.__gradio__svelte__internal, {
  SvelteComponent: Gw,
  append: Jw,
  attr: Qw,
  detach: xw,
  init: ev,
  insert: tv,
  noop: nv,
  safe_not_equal: iv,
  svg_element: lv
} = window.__gradio__svelte__internal, {
  SvelteComponent: ov,
  append: sv,
  attr: av,
  detach: rv,
  init: _v,
  insert: cv,
  noop: fv,
  safe_not_equal: uv,
  svg_element: dv
} = window.__gradio__svelte__internal, {
  SvelteComponent: hv,
  append: mv,
  attr: gv,
  detach: pv,
  init: bv,
  insert: wv,
  noop: vv,
  safe_not_equal: kv,
  svg_element: Cv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Yu,
  append: Ol,
  attr: we,
  detach: Au,
  init: Iu,
  insert: ju,
  noop: Vl,
  safe_not_equal: Hu,
  svg_element: Xi
} = window.__gradio__svelte__internal;
function Tu(i) {
  let e, t, n, l;
  return {
    c() {
      e = Xi("svg"), t = Xi("rect"), n = Xi("circle"), l = Xi("polyline"), we(t, "x", "3"), we(t, "y", "3"), we(t, "width", "18"), we(t, "height", "18"), we(t, "rx", "2"), we(t, "ry", "2"), we(n, "cx", "8.5"), we(n, "cy", "8.5"), we(n, "r", "1.5"), we(l, "points", "21 15 16 10 5 21"), we(e, "xmlns", "http://www.w3.org/2000/svg"), we(e, "width", "100%"), we(e, "height", "100%"), we(e, "viewBox", "0 0 24 24"), we(e, "fill", "none"), we(e, "stroke", "currentColor"), we(e, "stroke-width", "1.5"), we(e, "stroke-linecap", "round"), we(e, "stroke-linejoin", "round"), we(e, "class", "feather feather-image");
    },
    m(o, s) {
      ju(o, e, s), Ol(e, t), Ol(e, n), Ol(e, l);
    },
    p: Vl,
    i: Vl,
    o: Vl,
    d(o) {
      o && Au(e);
    }
  };
}
let yr = class extends Yu {
  constructor(e) {
    super(), Iu(this, e, null, Tu, Hu, {});
  }
};
const {
  SvelteComponent: Fu,
  append: Pu,
  attr: Yi,
  detach: Uu,
  init: Ou,
  insert: Vu,
  noop: Nl,
  safe_not_equal: Nu,
  svg_element: ys
} = window.__gradio__svelte__internal;
function $u(i) {
  let e, t;
  return {
    c() {
      e = ys("svg"), t = ys("path"), Yi(t, "fill", "currentColor"), Yi(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Yi(e, "xmlns", "http://www.w3.org/2000/svg"), Yi(e, "viewBox", "0 0 24 24");
    },
    m(n, l) {
      Vu(n, e, l), Pu(e, t);
    },
    p: Nl,
    i: Nl,
    o: Nl,
    d(n) {
      n && Uu(e);
    }
  };
}
class Sr extends Fu {
  constructor(e) {
    super(), Ou(this, e, null, $u, Nu, {});
  }
}
const {
  SvelteComponent: Sv,
  append: qv,
  attr: zv,
  detach: Dv,
  init: Bv,
  insert: Mv,
  noop: Ev,
  safe_not_equal: Lv,
  svg_element: Wv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Rv,
  append: Xv,
  attr: Yv,
  detach: Av,
  init: Iv,
  insert: jv,
  noop: Hv,
  safe_not_equal: Tv,
  svg_element: Fv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Pv,
  append: Uv,
  attr: Ov,
  detach: Vv,
  init: Nv,
  insert: $v,
  noop: Kv,
  safe_not_equal: Zv,
  svg_element: Gv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Jv,
  append: Qv,
  attr: xv,
  detach: e3,
  init: t3,
  insert: n3,
  noop: i3,
  safe_not_equal: l3,
  svg_element: o3
} = window.__gradio__svelte__internal, {
  SvelteComponent: s3,
  append: a3,
  attr: r3,
  detach: _3,
  init: c3,
  insert: f3,
  noop: u3,
  safe_not_equal: d3,
  svg_element: h3
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ku,
  append: Ai,
  attr: ve,
  detach: Zu,
  init: Gu,
  insert: Ju,
  noop: $l,
  safe_not_equal: Qu,
  svg_element: _i
} = window.__gradio__svelte__internal;
function xu(i) {
  let e, t, n, l, o;
  return {
    c() {
      e = _i("svg"), t = _i("path"), n = _i("path"), l = _i("line"), o = _i("line"), ve(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), ve(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), ve(l, "x1", "12"), ve(l, "y1", "19"), ve(l, "x2", "12"), ve(l, "y2", "23"), ve(o, "x1", "8"), ve(o, "y1", "23"), ve(o, "x2", "16"), ve(o, "y2", "23"), ve(e, "xmlns", "http://www.w3.org/2000/svg"), ve(e, "width", "100%"), ve(e, "height", "100%"), ve(e, "viewBox", "0 0 24 24"), ve(e, "fill", "none"), ve(e, "stroke", "currentColor"), ve(e, "stroke-width", "2"), ve(e, "stroke-linecap", "round"), ve(e, "stroke-linejoin", "round"), ve(e, "class", "feather feather-mic");
    },
    m(s, r) {
      Ju(s, e, r), Ai(e, t), Ai(e, n), Ai(e, l), Ai(e, o);
    },
    p: $l,
    i: $l,
    o: $l,
    d(s) {
      s && Zu(e);
    }
  };
}
class ed extends Ku {
  constructor(e) {
    super(), Gu(this, e, null, xu, Qu, {});
  }
}
const {
  SvelteComponent: m3,
  append: g3,
  attr: p3,
  detach: b3,
  init: w3,
  insert: v3,
  noop: k3,
  safe_not_equal: C3,
  svg_element: y3
} = window.__gradio__svelte__internal, {
  SvelteComponent: S3,
  append: q3,
  attr: z3,
  detach: D3,
  init: B3,
  insert: M3,
  noop: E3,
  safe_not_equal: L3,
  svg_element: W3
} = window.__gradio__svelte__internal, {
  SvelteComponent: R3,
  append: X3,
  attr: Y3,
  detach: A3,
  init: I3,
  insert: j3,
  noop: H3,
  safe_not_equal: T3,
  svg_element: F3
} = window.__gradio__svelte__internal, {
  SvelteComponent: P3,
  append: U3,
  attr: O3,
  detach: V3,
  init: N3,
  insert: $3,
  noop: K3,
  safe_not_equal: Z3,
  svg_element: G3
} = window.__gradio__svelte__internal, {
  SvelteComponent: J3,
  append: Q3,
  attr: x3,
  detach: e4,
  init: t4,
  insert: n4,
  noop: i4,
  safe_not_equal: l4,
  svg_element: o4
} = window.__gradio__svelte__internal, {
  SvelteComponent: s4,
  append: a4,
  attr: r4,
  detach: _4,
  init: c4,
  insert: f4,
  noop: u4,
  safe_not_equal: d4,
  svg_element: h4
} = window.__gradio__svelte__internal, {
  SvelteComponent: td,
  append: Ss,
  attr: tt,
  detach: nd,
  init: id,
  insert: ld,
  noop: Kl,
  safe_not_equal: od,
  set_style: sd,
  svg_element: Zl
} = window.__gradio__svelte__internal;
function ad(i) {
  let e, t, n;
  return {
    c() {
      e = Zl("svg"), t = Zl("polyline"), n = Zl("path"), tt(t, "points", "1 4 1 10 7 10"), tt(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), tt(e, "xmlns", "http://www.w3.org/2000/svg"), tt(e, "width", "100%"), tt(e, "height", "100%"), tt(e, "viewBox", "0 0 24 24"), tt(e, "fill", "none"), tt(e, "stroke", "currentColor"), tt(e, "stroke-width", "2"), tt(e, "stroke-linecap", "round"), tt(e, "stroke-linejoin", "round"), tt(e, "class", "feather feather-rotate-ccw"), sd(e, "transform", "rotateY(180deg)");
    },
    m(l, o) {
      ld(l, e, o), Ss(e, t), Ss(e, n);
    },
    p: Kl,
    i: Kl,
    o: Kl,
    d(l) {
      l && nd(e);
    }
  };
}
class rd extends td {
  constructor(e) {
    super(), id(this, e, null, ad, od, {});
  }
}
const {
  SvelteComponent: m4,
  append: g4,
  attr: p4,
  detach: b4,
  init: w4,
  insert: v4,
  noop: k4,
  safe_not_equal: C4,
  svg_element: y4
} = window.__gradio__svelte__internal, {
  SvelteComponent: S4,
  append: q4,
  attr: z4,
  detach: D4,
  init: B4,
  insert: M4,
  noop: E4,
  safe_not_equal: L4,
  svg_element: W4
} = window.__gradio__svelte__internal, {
  SvelteComponent: R4,
  append: X4,
  attr: Y4,
  detach: A4,
  init: I4,
  insert: j4,
  noop: H4,
  safe_not_equal: T4,
  svg_element: F4
} = window.__gradio__svelte__internal, {
  SvelteComponent: P4,
  append: U4,
  attr: O4,
  detach: V4,
  init: N4,
  insert: $4,
  noop: K4,
  safe_not_equal: Z4,
  svg_element: G4
} = window.__gradio__svelte__internal, {
  SvelteComponent: J4,
  append: Q4,
  attr: x4,
  detach: e5,
  init: t5,
  insert: n5,
  noop: i5,
  safe_not_equal: l5,
  svg_element: o5
} = window.__gradio__svelte__internal, {
  SvelteComponent: _d,
  append: cd,
  attr: je,
  detach: fd,
  init: ud,
  insert: dd,
  noop: Gl,
  safe_not_equal: hd,
  svg_element: qs
} = window.__gradio__svelte__internal;
function md(i) {
  let e, t;
  return {
    c() {
      e = qs("svg"), t = qs("rect"), je(t, "x", "3"), je(t, "y", "3"), je(t, "width", "18"), je(t, "height", "18"), je(t, "rx", "2"), je(t, "ry", "2"), je(e, "xmlns", "http://www.w3.org/2000/svg"), je(e, "width", "100%"), je(e, "height", "100%"), je(e, "viewBox", "0 0 24 24"), je(e, "stroke-width", "1.5"), je(e, "stroke-linecap", "round"), je(e, "stroke-linejoin", "round"), je(e, "class", "feather feather-square");
    },
    m(n, l) {
      dd(n, e, l), cd(e, t);
    },
    p: Gl,
    i: Gl,
    o: Gl,
    d(n) {
      n && fd(e);
    }
  };
}
class gd extends _d {
  constructor(e) {
    super(), ud(this, e, null, md, hd, {});
  }
}
const {
  SvelteComponent: s5,
  append: a5,
  attr: r5,
  detach: _5,
  init: c5,
  insert: f5,
  noop: u5,
  safe_not_equal: d5,
  svg_element: h5
} = window.__gradio__svelte__internal, {
  SvelteComponent: m5,
  append: g5,
  attr: p5,
  detach: b5,
  init: w5,
  insert: v5,
  noop: k5,
  safe_not_equal: C5,
  svg_element: y5
} = window.__gradio__svelte__internal, {
  SvelteComponent: S5,
  append: q5,
  attr: z5,
  detach: D5,
  init: B5,
  insert: M5,
  noop: E5,
  safe_not_equal: L5,
  svg_element: W5,
  text: R5
} = window.__gradio__svelte__internal, {
  SvelteComponent: X5,
  append: Y5,
  attr: A5,
  detach: I5,
  init: j5,
  insert: H5,
  noop: T5,
  safe_not_equal: F5,
  svg_element: P5
} = window.__gradio__svelte__internal, {
  SvelteComponent: U5,
  append: O5,
  attr: V5,
  detach: N5,
  init: $5,
  insert: K5,
  noop: Z5,
  safe_not_equal: G5,
  svg_element: J5
} = window.__gradio__svelte__internal, {
  SvelteComponent: pd,
  append: zs,
  attr: nt,
  detach: bd,
  init: wd,
  insert: vd,
  noop: Jl,
  safe_not_equal: kd,
  svg_element: Ql
} = window.__gradio__svelte__internal;
function Cd(i) {
  let e, t, n;
  return {
    c() {
      e = Ql("svg"), t = Ql("polyline"), n = Ql("path"), nt(t, "points", "1 4 1 10 7 10"), nt(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), nt(e, "xmlns", "http://www.w3.org/2000/svg"), nt(e, "width", "100%"), nt(e, "height", "100%"), nt(e, "viewBox", "0 0 24 24"), nt(e, "fill", "none"), nt(e, "stroke", "currentColor"), nt(e, "stroke-width", "2"), nt(e, "stroke-linecap", "round"), nt(e, "stroke-linejoin", "round"), nt(e, "class", "feather feather-rotate-ccw");
    },
    m(l, o) {
      vd(l, e, o), zs(e, t), zs(e, n);
    },
    p: Jl,
    i: Jl,
    o: Jl,
    d(l) {
      l && bd(e);
    }
  };
}
class yd extends pd {
  constructor(e) {
    super(), wd(this, e, null, Cd, kd, {});
  }
}
const {
  SvelteComponent: Sd,
  append: xl,
  attr: Be,
  detach: qd,
  init: zd,
  insert: Dd,
  noop: eo,
  safe_not_equal: Bd,
  svg_element: Ii
} = window.__gradio__svelte__internal;
function Md(i) {
  let e, t, n, l;
  return {
    c() {
      e = Ii("svg"), t = Ii("path"), n = Ii("polyline"), l = Ii("line"), Be(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), Be(n, "points", "17 8 12 3 7 8"), Be(l, "x1", "12"), Be(l, "y1", "3"), Be(l, "x2", "12"), Be(l, "y2", "15"), Be(e, "xmlns", "http://www.w3.org/2000/svg"), Be(e, "width", "90%"), Be(e, "height", "90%"), Be(e, "viewBox", "0 0 24 24"), Be(e, "fill", "none"), Be(e, "stroke", "currentColor"), Be(e, "stroke-width", "2"), Be(e, "stroke-linecap", "round"), Be(e, "stroke-linejoin", "round"), Be(e, "class", "feather feather-upload");
    },
    m(o, s) {
      Dd(o, e, s), xl(e, t), xl(e, n), xl(e, l);
    },
    p: eo,
    i: eo,
    o: eo,
    d(o) {
      o && qd(e);
    }
  };
}
let qr = class extends Sd {
  constructor(e) {
    super(), zd(this, e, null, Md, Bd, {});
  }
};
const {
  SvelteComponent: x5,
  append: ek,
  attr: tk,
  detach: nk,
  init: ik,
  insert: lk,
  noop: ok,
  safe_not_equal: sk,
  svg_element: ak
} = window.__gradio__svelte__internal, {
  SvelteComponent: rk,
  append: _k,
  attr: ck,
  detach: fk,
  init: uk,
  insert: dk,
  noop: hk,
  safe_not_equal: mk,
  svg_element: gk,
  text: pk
} = window.__gradio__svelte__internal, {
  SvelteComponent: bk,
  append: wk,
  attr: vk,
  detach: kk,
  init: Ck,
  insert: yk,
  noop: Sk,
  safe_not_equal: qk,
  svg_element: zk,
  text: Dk
} = window.__gradio__svelte__internal, {
  SvelteComponent: Bk,
  append: Mk,
  attr: Ek,
  detach: Lk,
  init: Wk,
  insert: Rk,
  noop: Xk,
  safe_not_equal: Yk,
  svg_element: Ak,
  text: Ik
} = window.__gradio__svelte__internal, {
  SvelteComponent: jk,
  append: Hk,
  attr: Tk,
  detach: Fk,
  init: Pk,
  insert: Uk,
  noop: Ok,
  safe_not_equal: Vk,
  svg_element: Nk
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ed,
  append: Ds,
  attr: xt,
  detach: Ld,
  init: Wd,
  insert: Rd,
  noop: to,
  safe_not_equal: Xd,
  svg_element: no
} = window.__gradio__svelte__internal;
function Yd(i) {
  let e, t, n;
  return {
    c() {
      e = no("svg"), t = no("path"), n = no("path"), xt(t, "fill", "currentColor"), xt(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), xt(n, "fill", "currentColor"), xt(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), xt(e, "xmlns", "http://www.w3.org/2000/svg"), xt(e, "width", "100%"), xt(e, "height", "100%"), xt(e, "viewBox", "0 0 24 24");
    },
    m(l, o) {
      Rd(l, e, o), Ds(e, t), Ds(e, n);
    },
    p: to,
    i: to,
    o: to,
    d(l) {
      l && Ld(e);
    }
  };
}
let zr = class extends Ed {
  constructor(e) {
    super(), Wd(this, e, null, Yd, Xd, {});
  }
};
const Ad = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], Bs = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
Ad.reduce((i, { color: e, primary: t, secondary: n }) => ({
  ...i,
  [e]: {
    primary: Bs[e][t],
    secondary: Bs[e][n]
  }
}), {});
class el extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function Id(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new el("Must be on Spaces to share.");
  let t, n, l;
  t = jd(i), n = i.split(";")[0].split(":")[1], l = "file" + n.split("/")[1];
  const o = new File([t], l, { type: n }), s = await fetch("https://huggingface.co/uploads", {
    method: "POST",
    body: o,
    headers: {
      "Content-Type": o.type,
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  if (!s.ok) {
    if ((a = s.headers.get("content-type")) != null && a.includes("application/json")) {
      const _ = await s.json();
      throw new el(`Upload failed: ${_.error}`);
    }
    throw new el("Upload failed.");
  }
  return await s.text();
}
function jd(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), l = n.length, o = new Uint8Array(l); l--; )
    o[l] = n.charCodeAt(l);
  return new Blob([o], { type: t });
}
const {
  SvelteComponent: Hd,
  create_component: Td,
  destroy_component: Fd,
  init: Pd,
  mount_component: Ud,
  safe_not_equal: Od,
  transition_in: Vd,
  transition_out: Nd
} = window.__gradio__svelte__internal, { createEventDispatcher: $d } = window.__gradio__svelte__internal;
function Kd(i) {
  let e, t;
  return e = new bl({
    props: {
      Icon: wu,
      label: (
        /*i18n*/
        i[2]("common.share")
      ),
      pending: (
        /*pending*/
        i[3]
      )
    }
  }), e.$on(
    "click",
    /*click_handler*/
    i[5]
  ), {
    c() {
      Td(e.$$.fragment);
    },
    m(n, l) {
      Ud(e, n, l), t = !0;
    },
    p(n, [l]) {
      const o = {};
      l & /*i18n*/
      4 && (o.label = /*i18n*/
      n[2]("common.share")), l & /*pending*/
      8 && (o.pending = /*pending*/
      n[3]), e.$set(o);
    },
    i(n) {
      t || (Vd(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Nd(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Fd(e, n);
    }
  };
}
function Zd(i, e, t) {
  const n = $d();
  let { formatter: l } = e, { value: o } = e, { i18n: s } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const _ = await l(o);
      n("share", { description: _ });
    } catch (_) {
      console.error(_);
      let c = _ instanceof el ? _.message : "Share failed.";
      n("error", c);
    } finally {
      t(3, r = !1);
    }
  };
  return i.$$set = (_) => {
    "formatter" in _ && t(0, l = _.formatter), "value" in _ && t(1, o = _.value), "i18n" in _ && t(2, s = _.i18n);
  }, [l, o, s, r, n, a];
}
class Gd extends Hd {
  constructor(e) {
    super(), Pd(this, e, Zd, Kd, Od, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: Jd,
  append: yn,
  attr: Eo,
  check_outros: Qd,
  create_component: Dr,
  destroy_component: Br,
  detach: tl,
  element: Lo,
  group_outros: xd,
  init: e1,
  insert: nl,
  mount_component: Mr,
  safe_not_equal: t1,
  set_data: Wo,
  space: Ro,
  text: pi,
  toggle_class: Ms,
  transition_in: ol,
  transition_out: sl
} = window.__gradio__svelte__internal;
function n1(i) {
  let e, t;
  return e = new qr({}), {
    c() {
      Dr(e.$$.fragment);
    },
    m(n, l) {
      Mr(e, n, l), t = !0;
    },
    i(n) {
      t || (ol(e.$$.fragment, n), t = !0);
    },
    o(n) {
      sl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Br(e, n);
    }
  };
}
function i1(i) {
  let e, t;
  return e = new Sr({}), {
    c() {
      Dr(e.$$.fragment);
    },
    m(n, l) {
      Mr(e, n, l), t = !0;
    },
    i(n) {
      t || (ol(e.$$.fragment, n), t = !0);
    },
    o(n) {
      sl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Br(e, n);
    }
  };
}
function Es(i) {
  let e, t, n = (
    /*i18n*/
    i[1]("common.or") + ""
  ), l, o, s, r = (
    /*message*/
    (i[2] || /*i18n*/
    i[1]("upload_text.click_to_upload")) + ""
  ), a;
  return {
    c() {
      e = Lo("span"), t = pi("- "), l = pi(n), o = pi(" -"), s = Ro(), a = pi(r), Eo(e, "class", "or svelte-kzcjhc");
    },
    m(_, c) {
      nl(_, e, c), yn(e, t), yn(e, l), yn(e, o), nl(_, s, c), nl(_, a, c);
    },
    p(_, c) {
      c & /*i18n*/
      2 && n !== (n = /*i18n*/
      _[1]("common.or") + "") && Wo(l, n), c & /*message, i18n*/
      6 && r !== (r = /*message*/
      (_[2] || /*i18n*/
      _[1]("upload_text.click_to_upload")) + "") && Wo(a, r);
    },
    d(_) {
      _ && (tl(e), tl(s), tl(a));
    }
  };
}
function l1(i) {
  let e, t, n, l, o, s = (
    /*i18n*/
    i[1](
      /*defs*/
      i[5][
        /*type*/
        i[0]
      ] || /*defs*/
      i[5].file
    ) + ""
  ), r, a, _;
  const c = [i1, n1], u = [];
  function d(p, f) {
    return (
      /*type*/
      p[0] === "clipboard" ? 0 : 1
    );
  }
  n = d(i), l = u[n] = c[n](i);
  let h = (
    /*mode*/
    i[3] !== "short" && Es(i)
  );
  return {
    c() {
      e = Lo("div"), t = Lo("span"), l.c(), o = Ro(), r = pi(s), a = Ro(), h && h.c(), Eo(t, "class", "icon-wrap svelte-kzcjhc"), Ms(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), Eo(e, "class", "wrap svelte-kzcjhc");
    },
    m(p, f) {
      nl(p, e, f), yn(e, t), u[n].m(t, null), yn(e, o), yn(e, r), yn(e, a), h && h.m(e, null), _ = !0;
    },
    p(p, [f]) {
      let m = n;
      n = d(p), n !== m && (xd(), sl(u[m], 1, 1, () => {
        u[m] = null;
      }), Qd(), l = u[n], l || (l = u[n] = c[n](p), l.c()), ol(l, 1), l.m(t, null)), (!_ || f & /*hovered*/
      16) && Ms(
        t,
        "hovered",
        /*hovered*/
        p[4]
      ), (!_ || f & /*i18n, type*/
      3) && s !== (s = /*i18n*/
      p[1](
        /*defs*/
        p[5][
          /*type*/
          p[0]
        ] || /*defs*/
        p[5].file
      ) + "") && Wo(r, s), /*mode*/
      p[3] !== "short" ? h ? h.p(p, f) : (h = Es(p), h.c(), h.m(e, null)) : h && (h.d(1), h = null);
    },
    i(p) {
      _ || (ol(l), _ = !0);
    },
    o(p) {
      sl(l), _ = !1;
    },
    d(p) {
      p && tl(e), u[n].d(), h && h.d();
    }
  };
}
function o1(i, e, t) {
  let { type: n = "file" } = e, { i18n: l } = e, { message: o = void 0 } = e, { mode: s = "full" } = e, { hovered: r = !1 } = e;
  const a = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv",
    gallery: "upload_text.drop_gallery",
    clipboard: "upload_text.paste_clipboard"
  };
  return i.$$set = (_) => {
    "type" in _ && t(0, n = _.type), "i18n" in _ && t(1, l = _.i18n), "message" in _ && t(2, o = _.message), "mode" in _ && t(3, s = _.mode), "hovered" in _ && t(4, r = _.hovered);
  }, [n, l, o, s, r, a];
}
class Er extends Jd {
  constructor(e) {
    super(), e1(this, e, o1, l1, t1, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: Kk,
  attr: Zk,
  create_slot: Gk,
  detach: Jk,
  element: Qk,
  get_all_dirty_from_scope: xk,
  get_slot_changes: e6,
  init: t6,
  insert: n6,
  safe_not_equal: i6,
  toggle_class: l6,
  transition_in: o6,
  transition_out: s6,
  update_slot_base: a6
} = window.__gradio__svelte__internal, {
  SvelteComponent: s1,
  append: io,
  attr: Xt,
  check_outros: bi,
  create_component: wl,
  destroy_component: vl,
  detach: xn,
  element: Bi,
  empty: a1,
  group_outros: wi,
  init: r1,
  insert: ei,
  listen: kl,
  mount_component: Cl,
  safe_not_equal: _1,
  space: lo,
  toggle_class: dn,
  transition_in: ye,
  transition_out: Te
} = window.__gradio__svelte__internal;
function Ls(i) {
  let e, t = (
    /*sources*/
    i[1].includes("upload")
  ), n, l = (
    /*sources*/
    i[1].includes("microphone")
  ), o, s = (
    /*sources*/
    i[1].includes("webcam")
  ), r, a = (
    /*sources*/
    i[1].includes("clipboard")
  ), _, c = t && Ws(i), u = l && Rs(i), d = s && Xs(i), h = a && Ys(i);
  return {
    c() {
      e = Bi("span"), c && c.c(), n = lo(), u && u.c(), o = lo(), d && d.c(), r = lo(), h && h.c(), Xt(e, "class", "source-selection svelte-1jp3vgd"), Xt(e, "data-testid", "source-select");
    },
    m(p, f) {
      ei(p, e, f), c && c.m(e, null), io(e, n), u && u.m(e, null), io(e, o), d && d.m(e, null), io(e, r), h && h.m(e, null), _ = !0;
    },
    p(p, f) {
      f & /*sources*/
      2 && (t = /*sources*/
      p[1].includes("upload")), t ? c ? (c.p(p, f), f & /*sources*/
      2 && ye(c, 1)) : (c = Ws(p), c.c(), ye(c, 1), c.m(e, n)) : c && (wi(), Te(c, 1, 1, () => {
        c = null;
      }), bi()), f & /*sources*/
      2 && (l = /*sources*/
      p[1].includes("microphone")), l ? u ? (u.p(p, f), f & /*sources*/
      2 && ye(u, 1)) : (u = Rs(p), u.c(), ye(u, 1), u.m(e, o)) : u && (wi(), Te(u, 1, 1, () => {
        u = null;
      }), bi()), f & /*sources*/
      2 && (s = /*sources*/
      p[1].includes("webcam")), s ? d ? (d.p(p, f), f & /*sources*/
      2 && ye(d, 1)) : (d = Xs(p), d.c(), ye(d, 1), d.m(e, r)) : d && (wi(), Te(d, 1, 1, () => {
        d = null;
      }), bi()), f & /*sources*/
      2 && (a = /*sources*/
      p[1].includes("clipboard")), a ? h ? (h.p(p, f), f & /*sources*/
      2 && ye(h, 1)) : (h = Ys(p), h.c(), ye(h, 1), h.m(e, null)) : h && (wi(), Te(h, 1, 1, () => {
        h = null;
      }), bi());
    },
    i(p) {
      _ || (ye(c), ye(u), ye(d), ye(h), _ = !0);
    },
    o(p) {
      Te(c), Te(u), Te(d), Te(h), _ = !1;
    },
    d(p) {
      p && xn(e), c && c.d(), u && u.d(), d && d.d(), h && h.d();
    }
  };
}
function Ws(i) {
  let e, t, n, l, o;
  return t = new qr({}), {
    c() {
      e = Bi("button"), wl(t.$$.fragment), Xt(e, "class", "icon svelte-1jp3vgd"), Xt(e, "aria-label", "Upload file"), dn(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(s, r) {
      ei(s, e, r), Cl(t, e, null), n = !0, l || (o = kl(
        e,
        "click",
        /*click_handler*/
        i[6]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && dn(
        e,
        "selected",
        /*active_source*/
        s[0] === "upload" || !/*active_source*/
        s[0]
      );
    },
    i(s) {
      n || (ye(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Te(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && xn(e), vl(t), l = !1, o();
    }
  };
}
function Rs(i) {
  let e, t, n, l, o;
  return t = new ed({}), {
    c() {
      e = Bi("button"), wl(t.$$.fragment), Xt(e, "class", "icon svelte-1jp3vgd"), Xt(e, "aria-label", "Record audio"), dn(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(s, r) {
      ei(s, e, r), Cl(t, e, null), n = !0, l || (o = kl(
        e,
        "click",
        /*click_handler_1*/
        i[7]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && dn(
        e,
        "selected",
        /*active_source*/
        s[0] === "microphone"
      );
    },
    i(s) {
      n || (ye(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Te(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && xn(e), vl(t), l = !1, o();
    }
  };
}
function Xs(i) {
  let e, t, n, l, o;
  return t = new zr({}), {
    c() {
      e = Bi("button"), wl(t.$$.fragment), Xt(e, "class", "icon svelte-1jp3vgd"), Xt(e, "aria-label", "Capture from camera"), dn(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(s, r) {
      ei(s, e, r), Cl(t, e, null), n = !0, l || (o = kl(
        e,
        "click",
        /*click_handler_2*/
        i[8]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && dn(
        e,
        "selected",
        /*active_source*/
        s[0] === "webcam"
      );
    },
    i(s) {
      n || (ye(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Te(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && xn(e), vl(t), l = !1, o();
    }
  };
}
function Ys(i) {
  let e, t, n, l, o;
  return t = new Sr({}), {
    c() {
      e = Bi("button"), wl(t.$$.fragment), Xt(e, "class", "icon svelte-1jp3vgd"), Xt(e, "aria-label", "Paste from clipboard"), dn(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(s, r) {
      ei(s, e, r), Cl(t, e, null), n = !0, l || (o = kl(
        e,
        "click",
        /*click_handler_3*/
        i[9]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && dn(
        e,
        "selected",
        /*active_source*/
        s[0] === "clipboard"
      );
    },
    i(s) {
      n || (ye(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Te(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && xn(e), vl(t), l = !1, o();
    }
  };
}
function c1(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && Ls(i)
  );
  return {
    c() {
      n && n.c(), e = a1();
    },
    m(l, o) {
      n && n.m(l, o), ei(l, e, o), t = !0;
    },
    p(l, [o]) {
      /*unique_sources*/
      l[2].length > 1 ? n ? (n.p(l, o), o & /*unique_sources*/
      4 && ye(n, 1)) : (n = Ls(l), n.c(), ye(n, 1), n.m(e.parentNode, e)) : n && (wi(), Te(n, 1, 1, () => {
        n = null;
      }), bi());
    },
    i(l) {
      t || (ye(n), t = !0);
    },
    o(l) {
      Te(n), t = !1;
    },
    d(l) {
      l && xn(e), n && n.d(l);
    }
  };
}
function f1(i, e, t) {
  let n;
  var l = this && this.__awaiter || function(p, f, m, g) {
    function v(b) {
      return b instanceof m ? b : new m(function(q) {
        q(b);
      });
    }
    return new (m || (m = Promise))(function(b, q) {
      function S(z) {
        try {
          y(g.next(z));
        } catch (L) {
          q(L);
        }
      }
      function C(z) {
        try {
          y(g.throw(z));
        } catch (L) {
          q(L);
        }
      }
      function y(z) {
        z.done ? b(z.value) : v(z.value).then(S, C);
      }
      y((g = g.apply(p, f || [])).next());
    });
  };
  let { sources: o } = e, { active_source: s } = e, { handle_clear: r = () => {
  } } = e, { handle_select: a = () => {
  } } = e;
  function _(p) {
    return l(this, void 0, void 0, function* () {
      r(), t(0, s = p), a(p);
    });
  }
  const c = () => _("upload"), u = () => _("microphone"), d = () => _("webcam"), h = () => _("clipboard");
  return i.$$set = (p) => {
    "sources" in p && t(1, o = p.sources), "active_source" in p && t(0, s = p.active_source), "handle_clear" in p && t(4, r = p.handle_clear), "handle_select" in p && t(5, a = p.handle_select);
  }, i.$$.update = () => {
    i.$$.dirty & /*sources*/
    2 && t(2, n = [...new Set(o)]);
  }, [
    s,
    o,
    n,
    _,
    r,
    a,
    c,
    u,
    d,
    h
  ];
}
class u1 extends s1 {
  constructor(e) {
    super(), r1(this, e, f1, c1, _1, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Vn(i) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; i > 1e3 && t < e.length - 1; )
    i /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(i) ? i : i.toFixed(1)) + n;
}
function il() {
}
const d1 = (i) => i;
function As(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [i, "px"];
}
const Lr = typeof window < "u";
let Is = Lr ? () => window.performance.now() : () => Date.now(), Wr = Lr ? (i) => requestAnimationFrame(i) : il;
const Qn = /* @__PURE__ */ new Set();
function Rr(i) {
  Qn.forEach((e) => {
    e.c(i) || (Qn.delete(e), e.f());
  }), Qn.size !== 0 && Wr(Rr);
}
function h1(i) {
  let e;
  return Qn.size === 0 && Wr(Rr), { promise: new Promise((t) => {
    Qn.add(e = { c: i, f: t });
  }), abort() {
    Qn.delete(e);
  } };
}
function m1(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function g1(i, { delay: e = 0, duration: t = 400, easing: n = d1 } = {}) {
  const l = +getComputedStyle(i).opacity;
  return { delay: e, duration: t, easing: n, css: (o) => "opacity: " + o * l };
}
function js(i, { delay: e = 0, duration: t = 400, easing: n = m1, x: l = 0, y: o = 0, opacity: s = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, _ = r.transform === "none" ? "" : r.transform, c = a * (1 - s), [u, d] = As(l), [h, p] = As(o);
  return { delay: e, duration: t, easing: n, css: (f, m) => `
			transform: ${_} translate(${(1 - f) * u}${d}, ${(1 - f) * h}${p});
			opacity: ${a - c * m}` };
}
const Hn = [];
function p1(i, e = il) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function l(s) {
    if (a = s, ((r = i) != r ? a == a : r !== a || r && typeof r == "object" || typeof r == "function") && (i = s, t)) {
      const _ = !Hn.length;
      for (const c of n) c[1](), Hn.push(c, i);
      if (_) {
        for (let c = 0; c < Hn.length; c += 2) Hn[c][0](Hn[c + 1]);
        Hn.length = 0;
      }
    }
    var r, a;
  }
  function o(s) {
    l(s(i));
  }
  return { set: l, update: o, subscribe: function(s, r = il) {
    const a = [s, r];
    return n.add(a), n.size === 1 && (t = e(l, o) || il), s(i), () => {
      n.delete(a), n.size === 0 && t && (t(), t = null);
    };
  } };
}
function Hs(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function Xo(i, e, t, n) {
  if (typeof t == "number" || Hs(t)) {
    const l = n - t, o = (t - e) / (i.dt || 1 / 60), s = (o + (i.opts.stiffness * l - i.opts.damping * o) * i.inv_mass) * i.dt;
    return Math.abs(s) < i.opts.precision && Math.abs(l) < i.opts.precision ? n : (i.settled = !1, Hs(t) ? new Date(t.getTime() + s) : t + s);
  }
  if (Array.isArray(t)) return t.map((l, o) => Xo(i, e[o], t[o], n[o]));
  if (typeof t == "object") {
    const l = {};
    for (const o in t) l[o] = Xo(i, e[o], t[o], n[o]);
    return l;
  }
  throw new Error(`Cannot spring ${typeof t} values`);
}
function Ts(i, e = {}) {
  const t = p1(i), { stiffness: n = 0.15, damping: l = 0.8, precision: o = 0.01 } = e;
  let s, r, a, _ = i, c = i, u = 1, d = 0, h = !1;
  function p(m, g = {}) {
    c = m;
    const v = a = {};
    return i == null || g.hard || f.stiffness >= 1 && f.damping >= 1 ? (h = !0, s = Is(), _ = m, t.set(i = c), Promise.resolve()) : (g.soft && (d = 1 / (60 * (g.soft === !0 ? 0.5 : +g.soft)), u = 0), r || (s = Is(), h = !1, r = h1((b) => {
      if (h) return h = !1, r = null, !1;
      u = Math.min(u + d, 1);
      const q = { inv_mass: u, opts: f, settled: !0, dt: 60 * (b - s) / 1e3 }, S = Xo(q, _, i, c);
      return s = b, _ = i, t.set(i = S), q.settled && (r = null), !q.settled;
    })), new Promise((b) => {
      r.promise.then(() => {
        v === a && b();
      });
    }));
  }
  const f = { set: p, update: (m, g) => p(m(c, i), g), subscribe: t.subscribe, stiffness: n, damping: l, precision: o };
  return f;
}
const {
  SvelteComponent: b1,
  append: ft,
  attr: J,
  component_subscribe: Fs,
  detach: w1,
  element: v1,
  init: k1,
  insert: C1,
  noop: Ps,
  safe_not_equal: y1,
  set_style: ji,
  svg_element: ut,
  toggle_class: Us
} = window.__gradio__svelte__internal, { onMount: S1 } = window.__gradio__svelte__internal;
function q1(i) {
  let e, t, n, l, o, s, r, a, _, c, u, d;
  return {
    c() {
      e = v1("div"), t = ut("svg"), n = ut("g"), l = ut("path"), o = ut("path"), s = ut("path"), r = ut("path"), a = ut("g"), _ = ut("path"), c = ut("path"), u = ut("path"), d = ut("path"), J(l, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), J(l, "fill", "#FF7C00"), J(l, "fill-opacity", "0.4"), J(l, "class", "svelte-43sxxs"), J(o, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), J(o, "fill", "#FF7C00"), J(o, "class", "svelte-43sxxs"), J(s, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), J(s, "fill", "#FF7C00"), J(s, "fill-opacity", "0.4"), J(s, "class", "svelte-43sxxs"), J(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), J(r, "fill", "#FF7C00"), J(r, "class", "svelte-43sxxs"), ji(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), J(_, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), J(_, "fill", "#FF7C00"), J(_, "fill-opacity", "0.4"), J(_, "class", "svelte-43sxxs"), J(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), J(c, "fill", "#FF7C00"), J(c, "class", "svelte-43sxxs"), J(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), J(u, "fill", "#FF7C00"), J(u, "fill-opacity", "0.4"), J(u, "class", "svelte-43sxxs"), J(d, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), J(d, "fill", "#FF7C00"), J(d, "class", "svelte-43sxxs"), ji(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), J(t, "viewBox", "-1200 -1200 3000 3000"), J(t, "fill", "none"), J(t, "xmlns", "http://www.w3.org/2000/svg"), J(t, "class", "svelte-43sxxs"), J(e, "class", "svelte-43sxxs"), Us(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(h, p) {
      C1(h, e, p), ft(e, t), ft(t, n), ft(n, l), ft(n, o), ft(n, s), ft(n, r), ft(t, a), ft(a, _), ft(a, c), ft(a, u), ft(a, d);
    },
    p(h, [p]) {
      p & /*$top*/
      2 && ji(n, "transform", "translate(" + /*$top*/
      h[1][0] + "px, " + /*$top*/
      h[1][1] + "px)"), p & /*$bottom*/
      4 && ji(a, "transform", "translate(" + /*$bottom*/
      h[2][0] + "px, " + /*$bottom*/
      h[2][1] + "px)"), p & /*margin*/
      1 && Us(
        e,
        "margin",
        /*margin*/
        h[0]
      );
    },
    i: Ps,
    o: Ps,
    d(h) {
      h && w1(e);
    }
  };
}
function z1(i, e, t) {
  let n, l;
  var o = this && this.__awaiter || function(h, p, f, m) {
    function g(v) {
      return v instanceof f ? v : new f(function(b) {
        b(v);
      });
    }
    return new (f || (f = Promise))(function(v, b) {
      function q(y) {
        try {
          C(m.next(y));
        } catch (z) {
          b(z);
        }
      }
      function S(y) {
        try {
          C(m.throw(y));
        } catch (z) {
          b(z);
        }
      }
      function C(y) {
        y.done ? v(y.value) : g(y.value).then(q, S);
      }
      C((m = m.apply(h, p || [])).next());
    });
  };
  let { margin: s = !0 } = e;
  const r = Ts([0, 0]);
  Fs(i, r, (h) => t(1, n = h));
  const a = Ts([0, 0]);
  Fs(i, a, (h) => t(2, l = h));
  let _;
  function c() {
    return o(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 140]), a.set([-125, -140])]), yield Promise.all([r.set([-125, 140]), a.set([125, -140])]), yield Promise.all([r.set([-125, 0]), a.set([125, -0])]), yield Promise.all([r.set([125, 0]), a.set([-125, 0])]);
    });
  }
  function u() {
    return o(this, void 0, void 0, function* () {
      yield c(), _ || u();
    });
  }
  function d() {
    return o(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 0]), a.set([-125, 0])]), u();
    });
  }
  return S1(() => (d(), () => _ = !0)), i.$$set = (h) => {
    "margin" in h && t(0, s = h.margin);
  }, [s, n, l, r, a];
}
class D1 extends b1 {
  constructor(e) {
    super(), k1(this, e, z1, q1, y1, { margin: 0 });
  }
}
const {
  SvelteComponent: B1,
  append: Sn,
  attr: pt,
  binding_callbacks: Os,
  check_outros: Yo,
  create_component: Xr,
  create_slot: Yr,
  destroy_component: Ar,
  destroy_each: Ir,
  detach: U,
  element: Et,
  empty: ti,
  ensure_array_like: al,
  get_all_dirty_from_scope: jr,
  get_slot_changes: Hr,
  group_outros: Ao,
  init: M1,
  insert: O,
  mount_component: Tr,
  noop: Io,
  safe_not_equal: E1,
  set_data: at,
  set_style: fn,
  space: st,
  text: pe,
  toggle_class: ot,
  transition_in: gt,
  transition_out: Lt,
  update_slot_base: Fr
} = window.__gradio__svelte__internal, { tick: L1 } = window.__gradio__svelte__internal, { onDestroy: W1 } = window.__gradio__svelte__internal, { createEventDispatcher: R1 } = window.__gradio__svelte__internal, X1 = (i) => ({}), Vs = (i) => ({}), Y1 = (i) => ({}), Ns = (i) => ({});
function $s(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function Ks(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function A1(i) {
  let e, t, n, l, o = (
    /*i18n*/
    i[1]("common.error") + ""
  ), s, r, a;
  t = new bl({
    props: {
      Icon: Cr,
      label: (
        /*i18n*/
        i[1]("common.clear")
      ),
      disabled: !1
    }
  }), t.$on(
    "click",
    /*click_handler*/
    i[32]
  );
  const _ = (
    /*#slots*/
    i[30].error
  ), c = Yr(
    _,
    i,
    /*$$scope*/
    i[29],
    Vs
  );
  return {
    c() {
      e = Et("div"), Xr(t.$$.fragment), n = st(), l = Et("span"), s = pe(o), r = st(), c && c.c(), pt(e, "class", "clear-status svelte-16nch4a"), pt(l, "class", "error svelte-16nch4a");
    },
    m(u, d) {
      O(u, e, d), Tr(t, e, null), O(u, n, d), O(u, l, d), Sn(l, s), O(u, r, d), c && c.m(u, d), a = !0;
    },
    p(u, d) {
      const h = {};
      d[0] & /*i18n*/
      2 && (h.label = /*i18n*/
      u[1]("common.clear")), t.$set(h), (!a || d[0] & /*i18n*/
      2) && o !== (o = /*i18n*/
      u[1]("common.error") + "") && at(s, o), c && c.p && (!a || d[0] & /*$$scope*/
      536870912) && Fr(
        c,
        _,
        u,
        /*$$scope*/
        u[29],
        a ? Hr(
          _,
          /*$$scope*/
          u[29],
          d,
          X1
        ) : jr(
          /*$$scope*/
          u[29]
        ),
        Vs
      );
    },
    i(u) {
      a || (gt(t.$$.fragment, u), gt(c, u), a = !0);
    },
    o(u) {
      Lt(t.$$.fragment, u), Lt(c, u), a = !1;
    },
    d(u) {
      u && (U(e), U(n), U(l), U(r)), Ar(t), c && c.d(u);
    }
  };
}
function I1(i) {
  let e, t, n, l, o, s, r, a, _, c = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && Zs(i)
  );
  function u(b, q) {
    if (
      /*progress*/
      b[7]
    ) return T1;
    if (
      /*queue_position*/
      b[2] !== null && /*queue_size*/
      b[3] !== void 0 && /*queue_position*/
      b[2] >= 0
    ) return H1;
    if (
      /*queue_position*/
      b[2] === 0
    ) return j1;
  }
  let d = u(i), h = d && d(i), p = (
    /*timer*/
    i[5] && Qs(i)
  );
  const f = [O1, U1], m = [];
  function g(b, q) {
    return (
      /*last_progress_level*/
      b[15] != null ? 0 : (
        /*show_progress*/
        b[6] === "full" ? 1 : -1
      )
    );
  }
  ~(o = g(i)) && (s = m[o] = f[o](i));
  let v = !/*timer*/
  i[5] && oa(i);
  return {
    c() {
      c && c.c(), e = st(), t = Et("div"), h && h.c(), n = st(), p && p.c(), l = st(), s && s.c(), r = st(), v && v.c(), a = ti(), pt(t, "class", "progress-text svelte-16nch4a"), ot(
        t,
        "meta-text-center",
        /*variant*/
        i[8] === "center"
      ), ot(
        t,
        "meta-text",
        /*variant*/
        i[8] === "default"
      );
    },
    m(b, q) {
      c && c.m(b, q), O(b, e, q), O(b, t, q), h && h.m(t, null), Sn(t, n), p && p.m(t, null), O(b, l, q), ~o && m[o].m(b, q), O(b, r, q), v && v.m(b, q), O(b, a, q), _ = !0;
    },
    p(b, q) {
      /*variant*/
      b[8] === "default" && /*show_eta_bar*/
      b[18] && /*show_progress*/
      b[6] === "full" ? c ? c.p(b, q) : (c = Zs(b), c.c(), c.m(e.parentNode, e)) : c && (c.d(1), c = null), d === (d = u(b)) && h ? h.p(b, q) : (h && h.d(1), h = d && d(b), h && (h.c(), h.m(t, n))), /*timer*/
      b[5] ? p ? p.p(b, q) : (p = Qs(b), p.c(), p.m(t, null)) : p && (p.d(1), p = null), (!_ || q[0] & /*variant*/
      256) && ot(
        t,
        "meta-text-center",
        /*variant*/
        b[8] === "center"
      ), (!_ || q[0] & /*variant*/
      256) && ot(
        t,
        "meta-text",
        /*variant*/
        b[8] === "default"
      );
      let S = o;
      o = g(b), o === S ? ~o && m[o].p(b, q) : (s && (Ao(), Lt(m[S], 1, 1, () => {
        m[S] = null;
      }), Yo()), ~o ? (s = m[o], s ? s.p(b, q) : (s = m[o] = f[o](b), s.c()), gt(s, 1), s.m(r.parentNode, r)) : s = null), /*timer*/
      b[5] ? v && (Ao(), Lt(v, 1, 1, () => {
        v = null;
      }), Yo()) : v ? (v.p(b, q), q[0] & /*timer*/
      32 && gt(v, 1)) : (v = oa(b), v.c(), gt(v, 1), v.m(a.parentNode, a));
    },
    i(b) {
      _ || (gt(s), gt(v), _ = !0);
    },
    o(b) {
      Lt(s), Lt(v), _ = !1;
    },
    d(b) {
      b && (U(e), U(t), U(l), U(r), U(a)), c && c.d(b), h && h.d(), p && p.d(), ~o && m[o].d(b), v && v.d(b);
    }
  };
}
function Zs(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = Et("div"), pt(e, "class", "eta-bar svelte-16nch4a"), fn(e, "transform", t);
    },
    m(n, l) {
      O(n, e, l);
    },
    p(n, l) {
      l[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && fn(e, "transform", t);
    },
    d(n) {
      n && U(e);
    }
  };
}
function j1(i) {
  let e;
  return {
    c() {
      e = pe("processing |");
    },
    m(t, n) {
      O(t, e, n);
    },
    p: Io,
    d(t) {
      t && U(e);
    }
  };
}
function H1(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, l, o, s;
  return {
    c() {
      e = pe("queue: "), n = pe(t), l = pe("/"), o = pe(
        /*queue_size*/
        i[3]
      ), s = pe(" |");
    },
    m(r, a) {
      O(r, e, a), O(r, n, a), O(r, l, a), O(r, o, a), O(r, s, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && at(n, t), a[0] & /*queue_size*/
      8 && at(
        o,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (U(e), U(n), U(l), U(o), U(s));
    }
  };
}
function T1(i) {
  let e, t = al(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = Js(Ks(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = ti();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      O(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*progress*/
      128) {
        t = al(
          /*progress*/
          l[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = Ks(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = Js(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && U(e), Ir(n, l);
    }
  };
}
function Gs(i) {
  let e, t = (
    /*p*/
    i[41].unit + ""
  ), n, l, o = " ", s;
  function r(c, u) {
    return (
      /*p*/
      c[41].length != null ? P1 : F1
    );
  }
  let a = r(i), _ = a(i);
  return {
    c() {
      _.c(), e = st(), n = pe(t), l = pe(" | "), s = pe(o);
    },
    m(c, u) {
      _.m(c, u), O(c, e, u), O(c, n, u), O(c, l, u), O(c, s, u);
    },
    p(c, u) {
      a === (a = r(c)) && _ ? _.p(c, u) : (_.d(1), _ = a(c), _ && (_.c(), _.m(e.parentNode, e))), u[0] & /*progress*/
      128 && t !== (t = /*p*/
      c[41].unit + "") && at(n, t);
    },
    d(c) {
      c && (U(e), U(n), U(l), U(s)), _.d(c);
    }
  };
}
function F1(i) {
  let e = Vn(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = pe(e);
    },
    m(n, l) {
      O(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = Vn(
        /*p*/
        n[41].index || 0
      ) + "") && at(t, e);
    },
    d(n) {
      n && U(t);
    }
  };
}
function P1(i) {
  let e = Vn(
    /*p*/
    i[41].index || 0
  ) + "", t, n, l = Vn(
    /*p*/
    i[41].length
  ) + "", o;
  return {
    c() {
      t = pe(e), n = pe("/"), o = pe(l);
    },
    m(s, r) {
      O(s, t, r), O(s, n, r), O(s, o, r);
    },
    p(s, r) {
      r[0] & /*progress*/
      128 && e !== (e = Vn(
        /*p*/
        s[41].index || 0
      ) + "") && at(t, e), r[0] & /*progress*/
      128 && l !== (l = Vn(
        /*p*/
        s[41].length
      ) + "") && at(o, l);
    },
    d(s) {
      s && (U(t), U(n), U(o));
    }
  };
}
function Js(i) {
  let e, t = (
    /*p*/
    i[41].index != null && Gs(i)
  );
  return {
    c() {
      t && t.c(), e = ti();
    },
    m(n, l) {
      t && t.m(n, l), O(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].index != null ? t ? t.p(n, l) : (t = Gs(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && U(e), t && t.d(n);
    }
  };
}
function Qs(i) {
  let e, t = (
    /*eta*/
    i[0] ? `/${/*formatted_eta*/
    i[19]}` : ""
  ), n, l;
  return {
    c() {
      e = pe(
        /*formatted_timer*/
        i[20]
      ), n = pe(t), l = pe("s");
    },
    m(o, s) {
      O(o, e, s), O(o, n, s), O(o, l, s);
    },
    p(o, s) {
      s[0] & /*formatted_timer*/
      1048576 && at(
        e,
        /*formatted_timer*/
        o[20]
      ), s[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      o[0] ? `/${/*formatted_eta*/
      o[19]}` : "") && at(n, t);
    },
    d(o) {
      o && (U(e), U(n), U(l));
    }
  };
}
function U1(i) {
  let e, t;
  return e = new D1({
    props: { margin: (
      /*variant*/
      i[8] === "default"
    ) }
  }), {
    c() {
      Xr(e.$$.fragment);
    },
    m(n, l) {
      Tr(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*variant*/
      256 && (o.margin = /*variant*/
      n[8] === "default"), e.$set(o);
    },
    i(n) {
      t || (gt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Lt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ar(e, n);
    }
  };
}
function O1(i) {
  let e, t, n, l, o, s = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && xs(i)
  );
  return {
    c() {
      e = Et("div"), t = Et("div"), r && r.c(), n = st(), l = Et("div"), o = Et("div"), pt(t, "class", "progress-level-inner svelte-16nch4a"), pt(o, "class", "progress-bar svelte-16nch4a"), fn(o, "width", s), pt(l, "class", "progress-bar-wrap svelte-16nch4a"), pt(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, _) {
      O(a, e, _), Sn(e, t), r && r.m(t, null), Sn(e, n), Sn(e, l), Sn(l, o), i[31](o);
    },
    p(a, _) {
      /*progress*/
      a[7] != null ? r ? r.p(a, _) : (r = xs(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), _[0] & /*last_progress_level*/
      32768 && s !== (s = `${/*last_progress_level*/
      a[15] * 100}%`) && fn(o, "width", s);
    },
    i: Io,
    o: Io,
    d(a) {
      a && U(e), r && r.d(), i[31](null);
    }
  };
}
function xs(i) {
  let e, t = al(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = la($s(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = ti();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      O(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*progress_level, progress*/
      16512) {
        t = al(
          /*progress*/
          l[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = $s(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = la(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && U(e), Ir(n, l);
    }
  };
}
function ea(i) {
  let e, t, n, l, o = (
    /*i*/
    i[43] !== 0 && V1()
  ), s = (
    /*p*/
    i[41].desc != null && ta(i)
  ), r = (
    /*p*/
    i[41].desc != null && /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null && na()
  ), a = (
    /*progress_level*/
    i[14] != null && ia(i)
  );
  return {
    c() {
      o && o.c(), e = st(), s && s.c(), t = st(), r && r.c(), n = st(), a && a.c(), l = ti();
    },
    m(_, c) {
      o && o.m(_, c), O(_, e, c), s && s.m(_, c), O(_, t, c), r && r.m(_, c), O(_, n, c), a && a.m(_, c), O(_, l, c);
    },
    p(_, c) {
      /*p*/
      _[41].desc != null ? s ? s.p(_, c) : (s = ta(_), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null), /*p*/
      _[41].desc != null && /*progress_level*/
      _[14] && /*progress_level*/
      _[14][
        /*i*/
        _[43]
      ] != null ? r || (r = na(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      _[14] != null ? a ? a.p(_, c) : (a = ia(_), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null);
    },
    d(_) {
      _ && (U(e), U(t), U(n), U(l)), o && o.d(_), s && s.d(_), r && r.d(_), a && a.d(_);
    }
  };
}
function V1(i) {
  let e;
  return {
    c() {
      e = pe(" /");
    },
    m(t, n) {
      O(t, e, n);
    },
    d(t) {
      t && U(e);
    }
  };
}
function ta(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = pe(e);
    },
    m(n, l) {
      O(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && at(t, e);
    },
    d(n) {
      n && U(t);
    }
  };
}
function na(i) {
  let e;
  return {
    c() {
      e = pe("-");
    },
    m(t, n) {
      O(t, e, n);
    },
    d(t) {
      t && U(e);
    }
  };
}
function ia(i) {
  let e = (100 * /*progress_level*/
  (i[14][
    /*i*/
    i[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = pe(e), n = pe("%");
    },
    m(l, o) {
      O(l, t, o), O(l, n, o);
    },
    p(l, o) {
      o[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (l[14][
        /*i*/
        l[43]
      ] || 0)).toFixed(1) + "") && at(t, e);
    },
    d(l) {
      l && (U(t), U(n));
    }
  };
}
function la(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && ea(i)
  );
  return {
    c() {
      t && t.c(), e = ti();
    },
    m(n, l) {
      t && t.m(n, l), O(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, l) : (t = ea(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && U(e), t && t.d(n);
    }
  };
}
function oa(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), s = Yr(
    o,
    i,
    /*$$scope*/
    i[29],
    Ns
  );
  return {
    c() {
      e = Et("p"), t = pe(
        /*loading_text*/
        i[9]
      ), n = st(), s && s.c(), pt(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      O(r, e, a), Sn(e, t), O(r, n, a), s && s.m(r, a), l = !0;
    },
    p(r, a) {
      (!l || a[0] & /*loading_text*/
      512) && at(
        t,
        /*loading_text*/
        r[9]
      ), s && s.p && (!l || a[0] & /*$$scope*/
      536870912) && Fr(
        s,
        o,
        r,
        /*$$scope*/
        r[29],
        l ? Hr(
          o,
          /*$$scope*/
          r[29],
          a,
          Y1
        ) : jr(
          /*$$scope*/
          r[29]
        ),
        Ns
      );
    },
    i(r) {
      l || (gt(s, r), l = !0);
    },
    o(r) {
      Lt(s, r), l = !1;
    },
    d(r) {
      r && (U(e), U(n)), s && s.d(r);
    }
  };
}
function N1(i) {
  let e, t, n, l, o;
  const s = [I1, A1], r = [];
  function a(_, c) {
    return (
      /*status*/
      _[4] === "pending" ? 0 : (
        /*status*/
        _[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(t = a(i)) && (n = r[t] = s[t](i)), {
    c() {
      e = Et("div"), n && n.c(), pt(e, "class", l = "wrap " + /*variant*/
      i[8] + " " + /*show_progress*/
      i[6] + " svelte-16nch4a"), ot(e, "hide", !/*status*/
      i[4] || /*status*/
      i[4] === "complete" || /*show_progress*/
      i[6] === "hidden"), ot(
        e,
        "translucent",
        /*variant*/
        i[8] === "center" && /*status*/
        (i[4] === "pending" || /*status*/
        i[4] === "error") || /*translucent*/
        i[11] || /*show_progress*/
        i[6] === "minimal"
      ), ot(
        e,
        "generating",
        /*status*/
        i[4] === "generating"
      ), ot(
        e,
        "border",
        /*border*/
        i[12]
      ), fn(
        e,
        "position",
        /*absolute*/
        i[10] ? "absolute" : "static"
      ), fn(
        e,
        "padding",
        /*absolute*/
        i[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(_, c) {
      O(_, e, c), ~t && r[t].m(e, null), i[33](e), o = !0;
    },
    p(_, c) {
      let u = t;
      t = a(_), t === u ? ~t && r[t].p(_, c) : (n && (Ao(), Lt(r[u], 1, 1, () => {
        r[u] = null;
      }), Yo()), ~t ? (n = r[t], n ? n.p(_, c) : (n = r[t] = s[t](_), n.c()), gt(n, 1), n.m(e, null)) : n = null), (!o || c[0] & /*variant, show_progress*/
      320 && l !== (l = "wrap " + /*variant*/
      _[8] + " " + /*show_progress*/
      _[6] + " svelte-16nch4a")) && pt(e, "class", l), (!o || c[0] & /*variant, show_progress, status, show_progress*/
      336) && ot(e, "hide", !/*status*/
      _[4] || /*status*/
      _[4] === "complete" || /*show_progress*/
      _[6] === "hidden"), (!o || c[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && ot(
        e,
        "translucent",
        /*variant*/
        _[8] === "center" && /*status*/
        (_[4] === "pending" || /*status*/
        _[4] === "error") || /*translucent*/
        _[11] || /*show_progress*/
        _[6] === "minimal"
      ), (!o || c[0] & /*variant, show_progress, status*/
      336) && ot(
        e,
        "generating",
        /*status*/
        _[4] === "generating"
      ), (!o || c[0] & /*variant, show_progress, border*/
      4416) && ot(
        e,
        "border",
        /*border*/
        _[12]
      ), c[0] & /*absolute*/
      1024 && fn(
        e,
        "position",
        /*absolute*/
        _[10] ? "absolute" : "static"
      ), c[0] & /*absolute*/
      1024 && fn(
        e,
        "padding",
        /*absolute*/
        _[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(_) {
      o || (gt(n), o = !0);
    },
    o(_) {
      Lt(n), o = !1;
    },
    d(_) {
      _ && U(e), ~t && r[t].d(), i[33](null);
    }
  };
}
var $1 = function(i, e, t, n) {
  function l(o) {
    return o instanceof t ? o : new t(function(s) {
      s(o);
    });
  }
  return new (t || (t = Promise))(function(o, s) {
    function r(c) {
      try {
        _(n.next(c));
      } catch (u) {
        s(u);
      }
    }
    function a(c) {
      try {
        _(n.throw(c));
      } catch (u) {
        s(u);
      }
    }
    function _(c) {
      c.done ? o(c.value) : l(c.value).then(r, a);
    }
    _((n = n.apply(i, e || [])).next());
  });
};
let Hi = [], oo = !1;
function K1(i) {
  return $1(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Hi.push(e), !oo) oo = !0;
      else return;
      yield L1(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let l = 0; l < Hi.length; l++) {
          const s = Hi[l].getBoundingClientRect();
          (l === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = l);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), oo = !1, Hi = [];
      });
    }
  });
}
function Z1(i, e, t) {
  let n, { $$slots: l = {}, $$scope: o } = e;
  this && this.__awaiter;
  const s = R1();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: _ } = e, { queue_size: c } = e, { status: u } = e, { scroll_to_output: d = !1 } = e, { timer: h = !0 } = e, { show_progress: p = "full" } = e, { message: f = null } = e, { progress: m = null } = e, { variant: g = "default" } = e, { loading_text: v = "Loading..." } = e, { absolute: b = !0 } = e, { translucent: q = !1 } = e, { border: S = !1 } = e, { autoscroll: C } = e, y, z = !1, L = 0, w = 0, I = null, R = null, V = 0, F = null, $, Z = null, de = !0;
  const Y = () => {
    t(0, a = t(27, I = t(19, N = null))), t(25, L = performance.now()), t(26, w = 0), z = !0, E();
  };
  function E() {
    requestAnimationFrame(() => {
      t(26, w = (performance.now() - L) / 1e3), z && E();
    });
  }
  function A() {
    t(26, w = 0), t(0, a = t(27, I = t(19, N = null))), z && (z = !1);
  }
  W1(() => {
    z && A();
  });
  let N = null;
  function ie(X) {
    Os[X ? "unshift" : "push"](() => {
      Z = X, t(16, Z), t(7, m), t(14, F), t(15, $);
    });
  }
  const x = () => {
    s("clear_status");
  };
  function re(X) {
    Os[X ? "unshift" : "push"](() => {
      y = X, t(13, y);
    });
  }
  return i.$$set = (X) => {
    "i18n" in X && t(1, r = X.i18n), "eta" in X && t(0, a = X.eta), "queue_position" in X && t(2, _ = X.queue_position), "queue_size" in X && t(3, c = X.queue_size), "status" in X && t(4, u = X.status), "scroll_to_output" in X && t(22, d = X.scroll_to_output), "timer" in X && t(5, h = X.timer), "show_progress" in X && t(6, p = X.show_progress), "message" in X && t(23, f = X.message), "progress" in X && t(7, m = X.progress), "variant" in X && t(8, g = X.variant), "loading_text" in X && t(9, v = X.loading_text), "absolute" in X && t(10, b = X.absolute), "translucent" in X && t(11, q = X.translucent), "border" in X && t(12, S = X.border), "autoscroll" in X && t(24, C = X.autoscroll), "$$scope" in X && t(29, o = X.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = I), a != null && I !== a && (t(28, R = (performance.now() - L) / 1e3 + a), t(19, N = R.toFixed(1)), t(27, I = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, V = R === null || R <= 0 || !w ? null : Math.min(w / R, 1)), i.$$.dirty[0] & /*progress*/
    128 && m != null && t(18, de = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (m != null ? t(14, F = m.map((X) => {
      if (X.index != null && X.length != null)
        return X.index / X.length;
      if (X.progress != null)
        return X.progress;
    })) : t(14, F = null), F ? (t(15, $ = F[F.length - 1]), Z && ($ === 0 ? t(16, Z.style.transition = "0", Z) : t(16, Z.style.transition = "150ms", Z))) : t(15, $ = void 0)), i.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? Y() : A()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && y && d && (u === "pending" || u === "complete") && K1(y, C), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = w.toFixed(1));
  }, [
    a,
    r,
    _,
    c,
    u,
    h,
    p,
    m,
    g,
    v,
    b,
    q,
    S,
    y,
    F,
    $,
    Z,
    V,
    de,
    N,
    n,
    s,
    d,
    f,
    C,
    L,
    w,
    I,
    R,
    o,
    l,
    ie,
    x,
    re
  ];
}
class G1 extends B1 {
  constructor(e) {
    super(), M1(
      this,
      e,
      Z1,
      N1,
      E1,
      {
        i18n: 1,
        eta: 0,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 22,
        timer: 5,
        show_progress: 6,
        message: 23,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 24
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: r6,
  add_render_callback: _6,
  append: c6,
  attr: f6,
  bubble: u6,
  check_outros: d6,
  create_component: h6,
  create_in_transition: m6,
  create_out_transition: g6,
  destroy_component: p6,
  detach: b6,
  element: w6,
  group_outros: v6,
  init: k6,
  insert: C6,
  listen: y6,
  mount_component: S6,
  run_all: q6,
  safe_not_equal: z6,
  set_data: D6,
  space: B6,
  stop_propagation: M6,
  text: E6,
  transition_in: L6,
  transition_out: W6
} = window.__gradio__svelte__internal, { createEventDispatcher: R6, onMount: X6 } = window.__gradio__svelte__internal, {
  SvelteComponent: Y6,
  append: A6,
  attr: I6,
  bubble: j6,
  check_outros: H6,
  create_animation: T6,
  create_component: F6,
  destroy_component: P6,
  detach: U6,
  element: O6,
  ensure_array_like: V6,
  fix_and_outro_and_destroy_block: N6,
  fix_position: $6,
  group_outros: K6,
  init: Z6,
  insert: G6,
  mount_component: J6,
  noop: Q6,
  safe_not_equal: x6,
  set_style: e8,
  space: t8,
  transition_in: n8,
  transition_out: i8,
  update_keyed_each: l8
} = window.__gradio__svelte__internal, { setContext: o8, getContext: J1 } = window.__gradio__svelte__internal, Q1 = "WORKER_PROXY_CONTEXT_KEY";
function Pr() {
  return J1(Q1);
}
function x1(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function Ur(i, e) {
  const t = e.toLowerCase();
  for (const [n, l] of Object.entries(i))
    if (n.toLowerCase() === t)
      return l;
}
function Or(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!x1(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function eh(i) {
  if (i == null || !Or(i))
    return i;
  const e = Pr();
  if (e == null)
    return i;
  const n = new URL(i, window.location.href).pathname;
  return e.httpRequest({
    method: "GET",
    path: n,
    headers: {},
    query_string: ""
  }).then((l) => {
    if (l.status !== 200)
      throw new Error(`Failed to get file ${n} from the Wasm worker.`);
    const o = new Blob([l.body], {
      type: Ur(l.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: th,
  assign: rl,
  check_outros: Vr,
  compute_rest_props: sa,
  create_slot: Go,
  detach: yl,
  element: Nr,
  empty: $r,
  exclude_internal_props: nh,
  get_all_dirty_from_scope: Jo,
  get_slot_changes: Qo,
  get_spread_update: Kr,
  group_outros: Zr,
  init: ih,
  insert: Sl,
  listen: Gr,
  prevent_default: lh,
  safe_not_equal: oh,
  set_attributes: _l,
  transition_in: Bn,
  transition_out: Mn,
  update_slot_base: xo
} = window.__gradio__svelte__internal, { createEventDispatcher: sh } = window.__gradio__svelte__internal;
function ah(i) {
  let e, t, n, l, o;
  const s = (
    /*#slots*/
    i[8].default
  ), r = Go(
    s,
    i,
    /*$$scope*/
    i[7],
    null
  );
  let a = [
    { href: (
      /*href*/
      i[0]
    ) },
    {
      target: t = typeof window < "u" && window.__is_colab__ ? "_blank" : null
    },
    { rel: "noopener noreferrer" },
    { download: (
      /*download*/
      i[1]
    ) },
    /*$$restProps*/
    i[6]
  ], _ = {};
  for (let c = 0; c < a.length; c += 1)
    _ = rl(_, a[c]);
  return {
    c() {
      e = Nr("a"), r && r.c(), _l(e, _);
    },
    m(c, u) {
      Sl(c, e, u), r && r.m(e, null), n = !0, l || (o = Gr(
        e,
        "click",
        /*dispatch*/
        i[3].bind(null, "click")
      ), l = !0);
    },
    p(c, u) {
      r && r.p && (!n || u & /*$$scope*/
      128) && xo(
        r,
        s,
        c,
        /*$$scope*/
        c[7],
        n ? Qo(
          s,
          /*$$scope*/
          c[7],
          u,
          null
        ) : Jo(
          /*$$scope*/
          c[7]
        ),
        null
      ), _l(e, _ = Kr(a, [
        (!n || u & /*href*/
        1) && { href: (
          /*href*/
          c[0]
        ) },
        { target: t },
        { rel: "noopener noreferrer" },
        (!n || u & /*download*/
        2) && { download: (
          /*download*/
          c[1]
        ) },
        u & /*$$restProps*/
        64 && /*$$restProps*/
        c[6]
      ]));
    },
    i(c) {
      n || (Bn(r, c), n = !0);
    },
    o(c) {
      Mn(r, c), n = !1;
    },
    d(c) {
      c && yl(e), r && r.d(c), l = !1, o();
    }
  };
}
function rh(i) {
  let e, t, n, l;
  const o = [ch, _h], s = [];
  function r(a, _) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = $r();
    },
    m(a, _) {
      s[e].m(a, _), Sl(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (Zr(), Mn(s[c], 1, 1, () => {
        s[c] = null;
      }), Vr(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), Bn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Bn(t), l = !0);
    },
    o(a) {
      Mn(t), l = !1;
    },
    d(a) {
      a && yl(n), s[e].d(a);
    }
  };
}
function _h(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[8].default
  ), s = Go(
    o,
    i,
    /*$$scope*/
    i[7],
    null
  );
  let r = [
    /*$$restProps*/
    i[6],
    { href: (
      /*href*/
      i[0]
    ) }
  ], a = {};
  for (let _ = 0; _ < r.length; _ += 1)
    a = rl(a, r[_]);
  return {
    c() {
      e = Nr("a"), s && s.c(), _l(e, a);
    },
    m(_, c) {
      Sl(_, e, c), s && s.m(e, null), t = !0, n || (l = Gr(e, "click", lh(
        /*wasm_click_handler*/
        i[5]
      )), n = !0);
    },
    p(_, c) {
      s && s.p && (!t || c & /*$$scope*/
      128) && xo(
        s,
        o,
        _,
        /*$$scope*/
        _[7],
        t ? Qo(
          o,
          /*$$scope*/
          _[7],
          c,
          null
        ) : Jo(
          /*$$scope*/
          _[7]
        ),
        null
      ), _l(e, a = Kr(r, [
        c & /*$$restProps*/
        64 && /*$$restProps*/
        _[6],
        (!t || c & /*href*/
        1) && { href: (
          /*href*/
          _[0]
        ) }
      ]));
    },
    i(_) {
      t || (Bn(s, _), t = !0);
    },
    o(_) {
      Mn(s, _), t = !1;
    },
    d(_) {
      _ && yl(e), s && s.d(_), n = !1, l();
    }
  };
}
function ch(i) {
  let e;
  const t = (
    /*#slots*/
    i[8].default
  ), n = Go(
    t,
    i,
    /*$$scope*/
    i[7],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(l, o) {
      n && n.m(l, o), e = !0;
    },
    p(l, o) {
      n && n.p && (!e || o & /*$$scope*/
      128) && xo(
        n,
        t,
        l,
        /*$$scope*/
        l[7],
        e ? Qo(
          t,
          /*$$scope*/
          l[7],
          o,
          null
        ) : Jo(
          /*$$scope*/
          l[7]
        ),
        null
      );
    },
    i(l) {
      e || (Bn(n, l), e = !0);
    },
    o(l) {
      Mn(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function fh(i) {
  let e, t, n, l, o;
  const s = [rh, ah], r = [];
  function a(_, c) {
    return c & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (_[4] && Or(
      /*href*/
      _[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = s[t](i), {
    c() {
      n.c(), l = $r();
    },
    m(_, c) {
      r[t].m(_, c), Sl(_, l, c), o = !0;
    },
    p(_, [c]) {
      let u = t;
      t = a(_, c), t === u ? r[t].p(_, c) : (Zr(), Mn(r[u], 1, 1, () => {
        r[u] = null;
      }), Vr(), n = r[t], n ? n.p(_, c) : (n = r[t] = s[t](_), n.c()), Bn(n, 1), n.m(l.parentNode, l));
    },
    i(_) {
      o || (Bn(n), o = !0);
    },
    o(_) {
      Mn(n), o = !1;
    },
    d(_) {
      _ && yl(l), r[t].d(_);
    }
  };
}
function uh(i, e, t) {
  const n = ["href", "download"];
  let l = sa(e, n), { $$slots: o = {}, $$scope: s } = e;
  var r = this && this.__awaiter || function(p, f, m, g) {
    function v(b) {
      return b instanceof m ? b : new m(function(q) {
        q(b);
      });
    }
    return new (m || (m = Promise))(function(b, q) {
      function S(z) {
        try {
          y(g.next(z));
        } catch (L) {
          q(L);
        }
      }
      function C(z) {
        try {
          y(g.throw(z));
        } catch (L) {
          q(L);
        }
      }
      function y(z) {
        z.done ? b(z.value) : v(z.value).then(S, C);
      }
      y((g = g.apply(p, f || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: _ } = e;
  const c = sh();
  let u = !1;
  const d = Pr();
  function h() {
    return r(this, void 0, void 0, function* () {
      if (u)
        return;
      if (c("click"), a == null)
        throw new Error("href is not defined.");
      if (d == null)
        throw new Error("Wasm worker proxy is not available.");
      const f = new URL(a, window.location.href).pathname;
      t(2, u = !0), d.httpRequest({
        method: "GET",
        path: f,
        headers: {},
        query_string: ""
      }).then((m) => {
        if (m.status !== 200)
          throw new Error(`Failed to get file ${f} from the Wasm worker.`);
        const g = new Blob(
          [m.body],
          {
            type: Ur(m.headers, "content-type")
          }
        ), v = URL.createObjectURL(g), b = document.createElement("a");
        b.href = v, b.download = _, b.click(), URL.revokeObjectURL(v);
      }).finally(() => {
        t(2, u = !1);
      });
    });
  }
  return i.$$set = (p) => {
    e = rl(rl({}, e), nh(p)), t(6, l = sa(e, n)), "href" in p && t(0, a = p.href), "download" in p && t(1, _ = p.download), "$$scope" in p && t(7, s = p.$$scope);
  }, [
    a,
    _,
    u,
    c,
    d,
    h,
    l,
    s,
    o
  ];
}
class dh extends th {
  constructor(e) {
    super(), ih(this, e, uh, fh, oh, { href: 0, download: 1 });
  }
}
var hh = Object.defineProperty, mh = (i, e, t) => e in i ? hh(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, jt = (i, e, t) => (mh(i, typeof e != "symbol" ? e + "" : e, t), t), Jr = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, ci = (i, e, t) => (Jr(i, e, "read from private field"), e.get(i)), gh = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, ph = (i, e, t, n) => (Jr(i, e, "write to private field"), e.set(i, t), t), an;
new Intl.Collator(0, { numeric: 1 }).compare;
async function Qr(i, e) {
  return i.map(
    (t) => new bh({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class bh {
  constructor({
    path: e,
    url: t,
    orig_name: n,
    size: l,
    blob: o,
    is_stream: s,
    mime_type: r,
    alt_text: a
  }) {
    jt(this, "path"), jt(this, "url"), jt(this, "orig_name"), jt(this, "size"), jt(this, "blob"), jt(this, "is_stream"), jt(this, "mime_type"), jt(this, "alt_text"), jt(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = l, this.blob = t ? void 0 : o, this.is_stream = s, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class s8 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = ci(this, an) + t; ; ) {
          const l = t.indexOf(`
`), o = e.allowCR ? t.indexOf("\r") : -1;
          if (o !== -1 && o !== t.length - 1 && (l === -1 || l - 1 > o)) {
            n.enqueue(t.slice(0, o)), t = t.slice(o + 1);
            continue;
          }
          if (l === -1)
            break;
          const s = t[l - 1] === "\r" ? l - 1 : l;
          n.enqueue(t.slice(0, s)), t = t.slice(l + 1);
        }
        ph(this, an, t);
      },
      flush: (t) => {
        if (ci(this, an) === "")
          return;
        const n = e.allowCR && ci(this, an).endsWith("\r") ? ci(this, an).slice(0, -1) : ci(this, an);
        t.enqueue(n);
      }
    }), gh(this, an, "");
  }
}
an = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: wh,
  append: Pe,
  attr: kn,
  detach: xr,
  element: Cn,
  init: vh,
  insert: e_,
  noop: aa,
  safe_not_equal: kh,
  set_data: cl,
  set_style: so,
  space: jo,
  text: Nn,
  toggle_class: ra
} = window.__gradio__svelte__internal, { onMount: Ch, createEventDispatcher: yh, onDestroy: Sh } = window.__gradio__svelte__internal;
function _a(i) {
  let e, t, n, l, o = vi(
    /*file_to_display*/
    i[2]
  ) + "", s, r, a, _, c = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), u;
  return {
    c() {
      e = Cn("div"), t = Cn("span"), n = Cn("div"), l = Cn("progress"), s = Nn(o), a = jo(), _ = Cn("span"), u = Nn(c), so(l, "visibility", "hidden"), so(l, "height", "0"), so(l, "width", "0"), l.value = r = vi(
        /*file_to_display*/
        i[2]
      ), kn(l, "max", "100"), kn(l, "class", "svelte-cr2edf"), kn(n, "class", "progress-bar svelte-cr2edf"), kn(_, "class", "file-name svelte-cr2edf"), kn(e, "class", "file svelte-cr2edf");
    },
    m(d, h) {
      e_(d, e, h), Pe(e, t), Pe(t, n), Pe(n, l), Pe(l, s), Pe(e, a), Pe(e, _), Pe(_, u);
    },
    p(d, h) {
      h & /*file_to_display*/
      4 && o !== (o = vi(
        /*file_to_display*/
        d[2]
      ) + "") && cl(s, o), h & /*file_to_display*/
      4 && r !== (r = vi(
        /*file_to_display*/
        d[2]
      )) && (l.value = r), h & /*file_to_display*/
      4 && c !== (c = /*file_to_display*/
      d[2].orig_name + "") && cl(u, c);
    },
    d(d) {
      d && xr(e);
    }
  };
}
function qh(i) {
  let e, t, n, l = (
    /*files_with_progress*/
    i[0].length + ""
  ), o, s, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, _, c, u = (
    /*file_to_display*/
    i[2] && _a(i)
  );
  return {
    c() {
      e = Cn("div"), t = Cn("span"), n = Nn("Uploading "), o = Nn(l), s = jo(), a = Nn(r), _ = Nn("..."), c = jo(), u && u.c(), kn(t, "class", "uploading svelte-cr2edf"), kn(e, "class", "wrap svelte-cr2edf"), ra(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(d, h) {
      e_(d, e, h), Pe(e, t), Pe(t, n), Pe(t, o), Pe(t, s), Pe(t, a), Pe(t, _), Pe(e, c), u && u.m(e, null);
    },
    p(d, [h]) {
      h & /*files_with_progress*/
      1 && l !== (l = /*files_with_progress*/
      d[0].length + "") && cl(o, l), h & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      d[0].length > 1 ? "files" : "file") && cl(a, r), /*file_to_display*/
      d[2] ? u ? u.p(d, h) : (u = _a(d), u.c(), u.m(e, null)) : u && (u.d(1), u = null), h & /*progress*/
      2 && ra(
        e,
        "progress",
        /*progress*/
        d[1]
      );
    },
    i: aa,
    o: aa,
    d(d) {
      d && xr(e), u && u.d();
    }
  };
}
function vi(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function zh(i) {
  let e = 0;
  return i.forEach((t) => {
    e += vi(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function Dh(i, e, t) {
  var n = this && this.__awaiter || function(f, m, g, v) {
    function b(q) {
      return q instanceof g ? q : new g(function(S) {
        S(q);
      });
    }
    return new (g || (g = Promise))(function(q, S) {
      function C(L) {
        try {
          z(v.next(L));
        } catch (w) {
          S(w);
        }
      }
      function y(L) {
        try {
          z(v.throw(L));
        } catch (w) {
          S(w);
        }
      }
      function z(L) {
        L.done ? q(L.value) : b(L.value).then(C, y);
      }
      z((v = v.apply(f, m || [])).next());
    });
  };
  let { upload_id: l } = e, { root: o } = e, { files: s } = e, { stream_handler: r } = e, a, _ = !1, c, u, d = s.map((f) => Object.assign(Object.assign({}, f), { progress: 0 }));
  const h = yh();
  function p(f, m) {
    t(0, d = d.map((g) => (g.orig_name === f && (g.progress += m), g)));
  }
  return Ch(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${o}/upload_progress?upload_id=${l}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(f) {
      return n(this, void 0, void 0, function* () {
        const m = JSON.parse(f.data);
        _ || t(1, _ = !0), m.msg === "done" ? (a == null || a.close(), h("done")) : (t(7, c = m), p(m.orig_name, m.chunk_size));
      });
    };
  })), Sh(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (f) => {
    "upload_id" in f && t(3, l = f.upload_id), "root" in f && t(4, o = f.root), "files" in f && t(5, s = f.files), "stream_handler" in f && t(6, r = f.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && zh(d), i.$$.dirty & /*current_file_upload, files_with_progress*/
    129 && t(2, u = c || d[0]);
  }, [
    d,
    _,
    u,
    l,
    o,
    s,
    r,
    c
  ];
}
class Bh extends wh {
  constructor(e) {
    super(), vh(this, e, Dh, qh, kh, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: Mh,
  append: ca,
  attr: Me,
  binding_callbacks: Eh,
  bubble: mn,
  check_outros: t_,
  create_component: Lh,
  create_slot: n_,
  destroy_component: Wh,
  detach: ql,
  element: Ho,
  empty: i_,
  get_all_dirty_from_scope: l_,
  get_slot_changes: o_,
  group_outros: s_,
  init: Rh,
  insert: zl,
  listen: Ke,
  mount_component: Xh,
  prevent_default: gn,
  run_all: Yh,
  safe_not_equal: Ah,
  set_style: a_,
  space: Ih,
  stop_propagation: pn,
  toggle_class: qe,
  transition_in: un,
  transition_out: En,
  update_slot_base: r_
} = window.__gradio__svelte__internal, { createEventDispatcher: jh, tick: Hh } = window.__gradio__svelte__internal;
function Th(i) {
  let e, t, n, l, o, s, r, a, _, c, u;
  const d = (
    /*#slots*/
    i[26].default
  ), h = n_(
    d,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Ho("button"), h && h.c(), t = Ih(), n = Ho("input"), Me(n, "aria-label", "file upload"), Me(n, "data-testid", "file-upload"), Me(n, "type", "file"), Me(n, "accept", l = /*accept_file_types*/
      i[16] || void 0), n.multiple = o = /*file_count*/
      i[6] === "multiple" || void 0, Me(n, "webkitdirectory", s = /*file_count*/
      i[6] === "directory" || void 0), Me(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), Me(n, "class", "svelte-1s26xmt"), Me(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), Me(e, "class", "svelte-1s26xmt"), qe(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), qe(
        e,
        "center",
        /*center*/
        i[4]
      ), qe(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), qe(
        e,
        "flex",
        /*flex*/
        i[5]
      ), qe(
        e,
        "disable_click",
        /*disable_click*/
        i[7]
      ), a_(e, "height", "100%");
    },
    m(p, f) {
      zl(p, e, f), h && h.m(e, null), ca(e, t), ca(e, n), i[34](n), _ = !0, c || (u = [
        Ke(
          n,
          "change",
          /*load_files_from_upload*/
          i[18]
        ),
        Ke(e, "drag", pn(gn(
          /*drag_handler*/
          i[27]
        ))),
        Ke(e, "dragstart", pn(gn(
          /*dragstart_handler*/
          i[28]
        ))),
        Ke(e, "dragend", pn(gn(
          /*dragend_handler*/
          i[29]
        ))),
        Ke(e, "dragover", pn(gn(
          /*dragover_handler*/
          i[30]
        ))),
        Ke(e, "dragenter", pn(gn(
          /*dragenter_handler*/
          i[31]
        ))),
        Ke(e, "dragleave", pn(gn(
          /*dragleave_handler*/
          i[32]
        ))),
        Ke(e, "drop", pn(gn(
          /*drop_handler*/
          i[33]
        ))),
        Ke(
          e,
          "click",
          /*open_file_upload*/
          i[13]
        ),
        Ke(
          e,
          "drop",
          /*loadFilesFromDrop*/
          i[19]
        ),
        Ke(
          e,
          "dragenter",
          /*updateDragging*/
          i[17]
        ),
        Ke(
          e,
          "dragleave",
          /*updateDragging*/
          i[17]
        )
      ], c = !0);
    },
    p(p, f) {
      h && h.p && (!_ || f[0] & /*$$scope*/
      33554432) && r_(
        h,
        d,
        p,
        /*$$scope*/
        p[25],
        _ ? o_(
          d,
          /*$$scope*/
          p[25],
          f,
          null
        ) : l_(
          /*$$scope*/
          p[25]
        ),
        null
      ), (!_ || f[0] & /*accept_file_types*/
      65536 && l !== (l = /*accept_file_types*/
      p[16] || void 0)) && Me(n, "accept", l), (!_ || f[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      p[6] === "multiple" || void 0)) && (n.multiple = o), (!_ || f[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      p[6] === "directory" || void 0)) && Me(n, "webkitdirectory", s), (!_ || f[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      p[6] === "directory" || void 0)) && Me(n, "mozdirectory", r), (!_ || f[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      p[9] ? -1 : 0)) && Me(e, "tabindex", a), (!_ || f[0] & /*hidden*/
      512) && qe(
        e,
        "hidden",
        /*hidden*/
        p[9]
      ), (!_ || f[0] & /*center*/
      16) && qe(
        e,
        "center",
        /*center*/
        p[4]
      ), (!_ || f[0] & /*boundedheight*/
      8) && qe(
        e,
        "boundedheight",
        /*boundedheight*/
        p[3]
      ), (!_ || f[0] & /*flex*/
      32) && qe(
        e,
        "flex",
        /*flex*/
        p[5]
      ), (!_ || f[0] & /*disable_click*/
      128) && qe(
        e,
        "disable_click",
        /*disable_click*/
        p[7]
      );
    },
    i(p) {
      _ || (un(h, p), _ = !0);
    },
    o(p) {
      En(h, p), _ = !1;
    },
    d(p) {
      p && ql(e), h && h.d(p), i[34](null), c = !1, Yh(u);
    }
  };
}
function Fh(i) {
  let e, t, n = !/*hidden*/
  i[9] && fa(i);
  return {
    c() {
      n && n.c(), e = i_();
    },
    m(l, o) {
      n && n.m(l, o), zl(l, e, o), t = !0;
    },
    p(l, o) {
      /*hidden*/
      l[9] ? n && (s_(), En(n, 1, 1, () => {
        n = null;
      }), t_()) : n ? (n.p(l, o), o[0] & /*hidden*/
      512 && un(n, 1)) : (n = fa(l), n.c(), un(n, 1), n.m(e.parentNode, e));
    },
    i(l) {
      t || (un(n), t = !0);
    },
    o(l) {
      En(n), t = !1;
    },
    d(l) {
      l && ql(e), n && n.d(l);
    }
  };
}
function Ph(i) {
  let e, t, n, l, o;
  const s = (
    /*#slots*/
    i[26].default
  ), r = n_(
    s,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Ho("button"), r && r.c(), Me(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), Me(e, "class", "svelte-1s26xmt"), qe(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), qe(
        e,
        "center",
        /*center*/
        i[4]
      ), qe(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), qe(
        e,
        "flex",
        /*flex*/
        i[5]
      ), a_(e, "height", "100%");
    },
    m(a, _) {
      zl(a, e, _), r && r.m(e, null), n = !0, l || (o = Ke(
        e,
        "click",
        /*paste_clipboard*/
        i[12]
      ), l = !0);
    },
    p(a, _) {
      r && r.p && (!n || _[0] & /*$$scope*/
      33554432) && r_(
        r,
        s,
        a,
        /*$$scope*/
        a[25],
        n ? o_(
          s,
          /*$$scope*/
          a[25],
          _,
          null
        ) : l_(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || _[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && Me(e, "tabindex", t), (!n || _[0] & /*hidden*/
      512) && qe(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || _[0] & /*center*/
      16) && qe(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || _[0] & /*boundedheight*/
      8) && qe(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || _[0] & /*flex*/
      32) && qe(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (un(r, a), n = !0);
    },
    o(a) {
      En(r, a), n = !1;
    },
    d(a) {
      a && ql(e), r && r.d(a), l = !1, o();
    }
  };
}
function fa(i) {
  let e, t;
  return e = new Bh({
    props: {
      root: (
        /*root*/
        i[8]
      ),
      upload_id: (
        /*upload_id*/
        i[14]
      ),
      files: (
        /*file_data*/
        i[15]
      ),
      stream_handler: (
        /*stream_handler*/
        i[11]
      )
    }
  }), {
    c() {
      Lh(e.$$.fragment);
    },
    m(n, l) {
      Xh(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*root*/
      256 && (o.root = /*root*/
      n[8]), l[0] & /*upload_id*/
      16384 && (o.upload_id = /*upload_id*/
      n[14]), l[0] & /*file_data*/
      32768 && (o.files = /*file_data*/
      n[15]), l[0] & /*stream_handler*/
      2048 && (o.stream_handler = /*stream_handler*/
      n[11]), e.$set(o);
    },
    i(n) {
      t || (un(e.$$.fragment, n), t = !0);
    },
    o(n) {
      En(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Wh(e, n);
    }
  };
}
function Uh(i) {
  let e, t, n, l;
  const o = [Ph, Fh, Th], s = [];
  function r(a, _) {
    return (
      /*filetype*/
      a[0] === "clipboard" ? 0 : (
        /*uploading*/
        a[1] && /*show_progress*/
        a[10] ? 1 : 2
      )
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = i_();
    },
    m(a, _) {
      s[e].m(a, _), zl(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (s_(), En(s[c], 1, 1, () => {
        s[c] = null;
      }), t_(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), un(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (un(t), l = !0);
    },
    o(a) {
      En(t), l = !1;
    },
    d(a) {
      a && ql(n), s[e].d(a);
    }
  };
}
function Oh(i, e, t) {
  if (!i || i === "*" || i === "file/*" || Array.isArray(i) && i.some((l) => l === "*" || l === "file/*"))
    return !0;
  let n;
  if (typeof i == "string")
    n = i.split(",").map((l) => l.trim());
  else if (Array.isArray(i))
    n = i;
  else
    return !1;
  return n.includes(e) || n.some((l) => {
    const [o] = l.split("/").map((s) => s.trim());
    return l.endsWith("/*") && t.startsWith(o + "/");
  });
}
function Vh(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var o = this && this.__awaiter || function(M, P, le, se) {
    function _e(D) {
      return D instanceof le ? D : new le(function(Ve) {
        Ve(D);
      });
    }
    return new (le || (le = Promise))(function(D, Ve) {
      function et(ne) {
        try {
          fe(se.next(ne));
        } catch (bt) {
          Ve(bt);
        }
      }
      function ce(ne) {
        try {
          fe(se.throw(ne));
        } catch (bt) {
          Ve(bt);
        }
      }
      function fe(ne) {
        ne.done ? D(ne.value) : _e(ne.value).then(et, ce);
      }
      fe((se = se.apply(M, P || [])).next());
    });
  };
  let { filetype: s = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: _ = !0 } = e, { flex: c = !0 } = e, { file_count: u = "single" } = e, { disable_click: d = !1 } = e, { root: h } = e, { hidden: p = !1 } = e, { format: f = "file" } = e, { uploading: m = !1 } = e, { hidden_upload: g = null } = e, { show_progress: v = !0 } = e, { max_file_size: b = null } = e, { upload: q } = e, { stream_handler: S } = e, C, y, z;
  const L = jh(), w = ["image", "video", "audio", "text", "file"], I = (M) => M.startsWith(".") || M.endsWith("/*") ? M : w.includes(M) ? M + "/*" : "." + M;
  function R() {
    t(20, r = !r);
  }
  function V() {
    navigator.clipboard.read().then((M) => o(this, void 0, void 0, function* () {
      for (let P = 0; P < M.length; P++) {
        const le = M[P].types.find((se) => se.startsWith("image/"));
        if (le) {
          M[P].getType(le).then((se) => o(this, void 0, void 0, function* () {
            const _e = new File([se], `clipboard.${le.replace("image/", "")}`);
            yield Z([_e]);
          }));
          break;
        }
      }
    }));
  }
  function F() {
    d || g && (t(2, g.value = "", g), g.click());
  }
  function $(M) {
    return o(this, void 0, void 0, function* () {
      yield Hh(), t(14, C = Math.random().toString(36).substring(2, 15)), t(1, m = !0);
      try {
        const P = yield q(M, h, C, b ?? 1 / 0);
        return L("load", u === "single" ? P == null ? void 0 : P[0] : P), t(1, m = !1), P || [];
      } catch (P) {
        return L("error", P.message), t(1, m = !1), [];
      }
    });
  }
  function Z(M) {
    return o(this, void 0, void 0, function* () {
      if (!M.length)
        return;
      let P = M.map((le) => new File([le], le instanceof File ? le.name : "file", { type: le.type }));
      return t(15, y = yield Qr(P)), yield $(y);
    });
  }
  function de(M) {
    return o(this, void 0, void 0, function* () {
      const P = M.target;
      if (P.files)
        if (f != "blob")
          yield Z(Array.from(P.files));
        else {
          if (u === "single") {
            L("load", P.files[0]);
            return;
          }
          L("load", P.files);
        }
    });
  }
  function Y(M) {
    return o(this, void 0, void 0, function* () {
      var P;
      if (t(20, r = !1), !(!((P = M.dataTransfer) === null || P === void 0) && P.files)) return;
      const le = Array.from(M.dataTransfer.files).filter((se) => {
        const _e = "." + se.name.split(".").pop();
        return _e && Oh(z, _e, se.type) || (_e && Array.isArray(s) ? s.includes(_e) : _e === s) ? !0 : (L("error", `Invalid file type only ${s} allowed.`), !1);
      });
      yield Z(le);
    });
  }
  function E(M) {
    mn.call(this, i, M);
  }
  function A(M) {
    mn.call(this, i, M);
  }
  function N(M) {
    mn.call(this, i, M);
  }
  function ie(M) {
    mn.call(this, i, M);
  }
  function x(M) {
    mn.call(this, i, M);
  }
  function re(M) {
    mn.call(this, i, M);
  }
  function X(M) {
    mn.call(this, i, M);
  }
  function te(M) {
    Eh[M ? "unshift" : "push"](() => {
      g = M, t(2, g);
    });
  }
  return i.$$set = (M) => {
    "filetype" in M && t(0, s = M.filetype), "dragging" in M && t(20, r = M.dragging), "boundedheight" in M && t(3, a = M.boundedheight), "center" in M && t(4, _ = M.center), "flex" in M && t(5, c = M.flex), "file_count" in M && t(6, u = M.file_count), "disable_click" in M && t(7, d = M.disable_click), "root" in M && t(8, h = M.root), "hidden" in M && t(9, p = M.hidden), "format" in M && t(21, f = M.format), "uploading" in M && t(1, m = M.uploading), "hidden_upload" in M && t(2, g = M.hidden_upload), "show_progress" in M && t(10, v = M.show_progress), "max_file_size" in M && t(22, b = M.max_file_size), "upload" in M && t(23, q = M.upload), "stream_handler" in M && t(11, S = M.stream_handler), "$$scope" in M && t(25, l = M.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*filetype*/
    1 && (s == null ? t(16, z = null) : typeof s == "string" ? t(16, z = I(s)) : (t(0, s = s.map(I)), t(16, z = s.join(", "))));
  }, [
    s,
    m,
    g,
    a,
    _,
    c,
    u,
    d,
    h,
    p,
    v,
    S,
    V,
    F,
    C,
    y,
    z,
    R,
    de,
    Y,
    r,
    f,
    b,
    q,
    Z,
    l,
    n,
    E,
    A,
    N,
    ie,
    x,
    re,
    X,
    te
  ];
}
class Nh extends Mh {
  constructor(e) {
    super(), Rh(
      this,
      e,
      Vh,
      Uh,
      Ah,
      {
        filetype: 0,
        dragging: 20,
        boundedheight: 3,
        center: 4,
        flex: 5,
        file_count: 6,
        disable_click: 7,
        root: 8,
        hidden: 9,
        format: 21,
        uploading: 1,
        hidden_upload: 2,
        show_progress: 10,
        max_file_size: 22,
        upload: 23,
        stream_handler: 11,
        paste_clipboard: 12,
        open_file_upload: 13,
        load_files: 24
      },
      null,
      [-1, -1]
    );
  }
  get paste_clipboard() {
    return this.$$.ctx[12];
  }
  get open_file_upload() {
    return this.$$.ctx[13];
  }
  get load_files() {
    return this.$$.ctx[24];
  }
}
const {
  SvelteComponent: a8,
  append: r8,
  attr: _8,
  check_outros: c8,
  create_component: f8,
  destroy_component: u8,
  detach: d8,
  element: h8,
  group_outros: m8,
  init: g8,
  insert: p8,
  mount_component: b8,
  safe_not_equal: w8,
  set_style: v8,
  space: k8,
  toggle_class: C8,
  transition_in: y8,
  transition_out: S8
} = window.__gradio__svelte__internal, { createEventDispatcher: q8 } = window.__gradio__svelte__internal, {
  SvelteComponent: z8,
  assign: D8,
  compute_rest_props: B8,
  detach: M8,
  element: E8,
  exclude_internal_props: L8,
  get_spread_update: W8,
  init: R8,
  insert: X8,
  noop: Y8,
  safe_not_equal: A8,
  set_attributes: I8,
  src_url_equal: j8,
  toggle_class: H8
} = window.__gradio__svelte__internal, {
  SvelteComponent: T8,
  append: F8,
  attr: P8,
  bubble: U8,
  check_outros: O8,
  create_component: V8,
  destroy_component: N8,
  detach: $8,
  element: K8,
  empty: Z8,
  group_outros: G8,
  init: J8,
  insert: Q8,
  listen: x8,
  mount_component: e7,
  safe_not_equal: t7,
  space: n7,
  toggle_class: i7,
  transition_in: l7,
  transition_out: o7
} = window.__gradio__svelte__internal, { createEventDispatcher: s7 } = window.__gradio__svelte__internal, {
  SvelteComponent: $h,
  append: Ti,
  attr: ao,
  create_component: Kh,
  destroy_component: Zh,
  detach: Gh,
  element: ro,
  init: Jh,
  insert: Qh,
  listen: xh,
  mount_component: em,
  noop: tm,
  safe_not_equal: nm,
  set_style: im,
  space: lm,
  text: om,
  transition_in: sm,
  transition_out: am
} = window.__gradio__svelte__internal, { createEventDispatcher: rm } = window.__gradio__svelte__internal;
function _m(i) {
  let e, t, n, l, o, s = "Click to Access Webcam", r, a, _, c;
  return l = new zr({}), {
    c() {
      e = ro("button"), t = ro("div"), n = ro("span"), Kh(l.$$.fragment), o = lm(), r = om(s), ao(n, "class", "icon-wrap svelte-fjcd9c"), ao(t, "class", "wrap svelte-fjcd9c"), ao(e, "class", "svelte-fjcd9c"), im(e, "height", "100%");
    },
    m(u, d) {
      Qh(u, e, d), Ti(e, t), Ti(t, n), em(l, n, null), Ti(t, o), Ti(t, r), a = !0, _ || (c = xh(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), _ = !0);
    },
    p: tm,
    i(u) {
      a || (sm(l.$$.fragment, u), a = !0);
    },
    o(u) {
      am(l.$$.fragment, u), a = !1;
    },
    d(u) {
      u && Gh(e), Zh(l), _ = !1, c();
    }
  };
}
function cm(i) {
  const e = rm();
  return [e, () => e("click")];
}
class fm extends $h {
  constructor(e) {
    super(), Jh(this, e, cm, _m, nm, {});
  }
}
function um() {
  return navigator.mediaDevices.enumerateDevices();
}
function dm(i, e) {
  e.srcObject = i, e.muted = !0, e.play();
}
async function ua(i, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, l = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: i
  };
  return navigator.mediaDevices.getUserMedia(l).then((o) => (dm(o, e), o));
}
function hm(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: mm,
  action_destroyer: gm,
  add_render_callback: pm,
  append: Ut,
  attr: ke,
  binding_callbacks: bm,
  check_outros: Ci,
  create_component: ni,
  create_in_transition: wm,
  destroy_component: ii,
  destroy_each: vm,
  detach: Ue,
  element: xe,
  empty: es,
  ensure_array_like: da,
  group_outros: yi,
  init: km,
  insert: Oe,
  listen: fl,
  mount_component: li,
  noop: ts,
  run_all: Cm,
  safe_not_equal: ym,
  set_data: __,
  set_input_value: To,
  space: zi,
  stop_propagation: Sm,
  text: c_,
  toggle_class: Fi,
  transition_in: ze,
  transition_out: Ee
} = window.__gradio__svelte__internal, { createEventDispatcher: qm, onMount: zm } = window.__gradio__svelte__internal;
function ha(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function Dm(i) {
  let e, t, n, l, o, s, r, a, _, c, u;
  const d = [Em, Mm], h = [];
  function p(g, v) {
    return (
      /*mode*/
      g[1] === "video" || /*streaming*/
      g[0] ? 0 : 1
    );
  }
  n = p(i), l = h[n] = d[n](i);
  let f = !/*recording*/
  i[8] && ma(i), m = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && ga(i)
  );
  return {
    c() {
      e = xe("div"), t = xe("button"), l.c(), s = zi(), f && f.c(), r = zi(), m && m.c(), a = es(), ke(t, "aria-label", o = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), ke(t, "class", "svelte-8hqvb6"), ke(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(g, v) {
      Oe(g, e, v), Ut(e, t), h[n].m(t, null), Ut(e, s), f && f.m(e, null), Oe(g, r, v), m && m.m(g, v), Oe(g, a, v), _ = !0, c || (u = fl(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), c = !0);
    },
    p(g, v) {
      let b = n;
      n = p(g), n === b ? h[n].p(g, v) : (yi(), Ee(h[b], 1, 1, () => {
        h[b] = null;
      }), Ci(), l = h[n], l ? l.p(g, v) : (l = h[n] = d[n](g), l.c()), ze(l, 1), l.m(t, null)), (!_ || v[0] & /*mode*/
      2 && o !== (o = /*mode*/
      g[1] === "image" ? "capture photo" : "start recording")) && ke(t, "aria-label", o), /*recording*/
      g[8] ? f && (yi(), Ee(f, 1, 1, () => {
        f = null;
      }), Ci()) : f ? (f.p(g, v), v[0] & /*recording*/
      256 && ze(f, 1)) : (f = ma(g), f.c(), ze(f, 1), f.m(e, null)), /*options_open*/
      g[10] && /*selected_device*/
      g[7] ? m ? (m.p(g, v), v[0] & /*options_open, selected_device*/
      1152 && ze(m, 1)) : (m = ga(g), m.c(), ze(m, 1), m.m(a.parentNode, a)) : m && (yi(), Ee(m, 1, 1, () => {
        m = null;
      }), Ci());
    },
    i(g) {
      _ || (ze(l), ze(f), ze(m), _ = !0);
    },
    o(g) {
      Ee(l), Ee(f), Ee(m), _ = !1;
    },
    d(g) {
      g && (Ue(e), Ue(r), Ue(a)), h[n].d(), f && f.d(), m && m.d(g), c = !1, u();
    }
  };
}
function Bm(i) {
  let e, t, n, l;
  return t = new fm({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = xe("div"), ni(t.$$.fragment), ke(e, "title", "grant webcam access");
    },
    m(o, s) {
      Oe(o, e, s), li(t, e, null), l = !0;
    },
    p: ts,
    i(o) {
      l || (ze(t.$$.fragment, o), o && (n || pm(() => {
        n = wm(e, g1, { delay: 100, duration: 200 }), n.start();
      })), l = !0);
    },
    o(o) {
      Ee(t.$$.fragment, o), l = !1;
    },
    d(o) {
      o && Ue(e), ii(t);
    }
  };
}
function Mm(i) {
  let e, t, n;
  return t = new Jf({}), {
    c() {
      e = xe("div"), ni(t.$$.fragment), ke(e, "class", "icon svelte-8hqvb6"), ke(e, "title", "capture photo");
    },
    m(l, o) {
      Oe(l, e, o), li(t, e, null), n = !0;
    },
    p: ts,
    i(l) {
      n || (ze(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Ee(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Ue(e), ii(t);
    }
  };
}
function Em(i) {
  let e, t, n, l;
  const o = [Wm, Lm], s = [];
  function r(a, _) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = es();
    },
    m(a, _) {
      s[e].m(a, _), Oe(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e !== c && (yi(), Ee(s[c], 1, 1, () => {
        s[c] = null;
      }), Ci(), t = s[e], t || (t = s[e] = o[e](a), t.c()), ze(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (ze(t), l = !0);
    },
    o(a) {
      Ee(t), l = !1;
    },
    d(a) {
      a && Ue(n), s[e].d(a);
    }
  };
}
function Lm(i) {
  let e, t, n;
  return t = new ou({}), {
    c() {
      e = xe("div"), ni(t.$$.fragment), ke(e, "class", "icon red svelte-8hqvb6"), ke(e, "title", "start recording");
    },
    m(l, o) {
      Oe(l, e, o), li(t, e, null), n = !0;
    },
    i(l) {
      n || (ze(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Ee(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Ue(e), ii(t);
    }
  };
}
function Wm(i) {
  let e, t, n;
  return t = new gd({}), {
    c() {
      e = xe("div"), ni(t.$$.fragment), ke(e, "class", "icon red svelte-8hqvb6"), ke(e, "title", "stop recording");
    },
    m(l, o) {
      Oe(l, e, o), li(t, e, null), n = !0;
    },
    i(l) {
      n || (ze(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Ee(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Ue(e), ii(t);
    }
  };
}
function ma(i) {
  let e, t, n, l, o;
  return t = new Zo({}), {
    c() {
      e = xe("button"), ni(t.$$.fragment), ke(e, "class", "icon svelte-8hqvb6"), ke(e, "aria-label", "select input source");
    },
    m(s, r) {
      Oe(s, e, r), li(t, e, null), n = !0, l || (o = fl(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), l = !0);
    },
    p: ts,
    i(s) {
      n || (ze(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ee(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Ue(e), ii(t), l = !1, o();
    }
  };
}
function ga(i) {
  let e, t, n, l, o, s, r;
  n = new Zo({});
  function a(u, d) {
    return (
      /*available_video_devices*/
      u[6].length === 0 ? Xm : Rm
    );
  }
  let _ = a(i), c = _(i);
  return {
    c() {
      e = xe("select"), t = xe("button"), ni(n.$$.fragment), l = zi(), c.c(), ke(t, "class", "inset-icon svelte-8hqvb6"), ke(e, "class", "select-wrap svelte-8hqvb6"), ke(e, "aria-label", "select source");
    },
    m(u, d) {
      Oe(u, e, d), Ut(e, t), li(n, t, null), Ut(t, l), c.m(e, null), o = !0, s || (r = [
        fl(t, "click", Sm(
          /*click_handler_2*/
          i[22]
        )),
        gm(ns.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        fl(
          e,
          "change",
          /*handle_device_change*/
          i[11]
        )
      ], s = !0);
    },
    p(u, d) {
      _ === (_ = a(u)) && c ? c.p(u, d) : (c.d(1), c = _(u), c && (c.c(), c.m(e, null)));
    },
    i(u) {
      o || (ze(n.$$.fragment, u), o = !0);
    },
    o(u) {
      Ee(n.$$.fragment, u), o = !1;
    },
    d(u) {
      u && Ue(e), ii(n), c.d(), s = !1, Cm(r);
    }
  };
}
function Rm(i) {
  let e, t = da(
    /*available_video_devices*/
    i[6]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = pa(ha(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = es();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      Oe(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*available_video_devices, selected_device*/
      192) {
        t = da(
          /*available_video_devices*/
          l[6]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = ha(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = pa(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && Ue(e), vm(n, l);
    }
  };
}
function Xm(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = xe("option"), n = c_(t), e.__value = "", To(e, e.__value), ke(e, "class", "svelte-8hqvb6");
    },
    m(l, o) {
      Oe(l, e, o), Ut(e, n);
    },
    p(l, o) {
      o[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      l[3]("common.no_devices") + "") && __(n, t);
    },
    d(l) {
      l && Ue(e);
    }
  };
}
function pa(i) {
  let e, t = (
    /*device*/
    i[32].label + ""
  ), n, l, o, s;
  return {
    c() {
      e = xe("option"), n = c_(t), l = zi(), e.__value = o = /*device*/
      i[32].deviceId, To(e, e.__value), e.selected = s = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, ke(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      Oe(r, e, a), Ut(e, n), Ut(e, l);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && __(n, t), a[0] & /*available_video_devices*/
      64 && o !== (o = /*device*/
      r[32].deviceId) && (e.__value = o, To(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && s !== (s = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = s);
    },
    d(r) {
      r && Ue(e);
    }
  };
}
function Ym(i) {
  let e, t, n, l, o, s;
  const r = [Bm, Dm], a = [];
  function _(c, u) {
    return (
      /*webcam_accessed*/
      c[9] ? 1 : 0
    );
  }
  return l = _(i), o = a[l] = r[l](i), {
    c() {
      e = xe("div"), t = xe("video"), n = zi(), o.c(), ke(t, "class", "svelte-8hqvb6"), Fi(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), Fi(t, "hide", !/*webcam_accessed*/
      i[9]), ke(e, "class", "wrap svelte-8hqvb6");
    },
    m(c, u) {
      Oe(c, e, u), Ut(e, t), i[19](t), Ut(e, n), a[l].m(e, null), s = !0;
    },
    p(c, u) {
      (!s || u[0] & /*mirror_webcam*/
      4) && Fi(
        t,
        "flip",
        /*mirror_webcam*/
        c[2]
      ), (!s || u[0] & /*webcam_accessed*/
      512) && Fi(t, "hide", !/*webcam_accessed*/
      c[9]);
      let d = l;
      l = _(c), l === d ? a[l].p(c, u) : (yi(), Ee(a[d], 1, 1, () => {
        a[d] = null;
      }), Ci(), o = a[l], o ? o.p(c, u) : (o = a[l] = r[l](c), o.c()), ze(o, 1), o.m(e, null));
    },
    i(c) {
      s || (ze(o), s = !0);
    },
    o(c) {
      Ee(o), s = !1;
    },
    d(c) {
      c && Ue(e), i[19](null), a[l].d();
    }
  };
}
function ns(i, e) {
  const t = (n) => {
    i && !i.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function Am(i, e, t) {
  var n = this && this.__awaiter || function(Y, E, A, N) {
    function ie(x) {
      return x instanceof A ? x : new A(function(re) {
        re(x);
      });
    }
    return new (A || (A = Promise))(function(x, re) {
      function X(P) {
        try {
          M(N.next(P));
        } catch (le) {
          re(le);
        }
      }
      function te(P) {
        try {
          M(N.throw(P));
        } catch (le) {
          re(le);
        }
      }
      function M(P) {
        P.done ? x(P.value) : ie(P.value).then(X, te);
      }
      M((N = N.apply(Y, E || [])).next());
    });
  };
  let l, o = [], s = null, r, { streaming: a = !1 } = e, { pending: _ = !1 } = e, { root: c = "" } = e, { mode: u = "image" } = e, { mirror_webcam: d } = e, { include_audio: h } = e, { i18n: p } = e, { upload: f } = e;
  const m = qm();
  zm(() => r = document.createElement("canvas"));
  const g = (Y) => n(void 0, void 0, void 0, function* () {
    const A = Y.target.value;
    yield ua(h, l, A).then((N) => n(void 0, void 0, void 0, function* () {
      C = N, t(7, s = o.find((ie) => ie.deviceId === A) || null), t(10, R = !1);
    }));
  });
  function v() {
    return n(this, void 0, void 0, function* () {
      try {
        ua(h, l).then((Y) => n(this, void 0, void 0, function* () {
          t(9, w = !0), t(6, o = yield um()), C = Y;
        })).then(() => hm(o)).then((Y) => {
          t(6, o = Y);
          const E = C.getTracks().map((A) => {
            var N;
            return (N = A.getSettings()) === null || N === void 0 ? void 0 : N.deviceId;
          })[0];
          t(7, s = E && Y.find((A) => A.deviceId === E) || o[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && m("error", p("image.no_webcam_support"));
      } catch (Y) {
        if (Y instanceof DOMException && Y.name == "NotAllowedError")
          m("error", p("image.allow_webcam_access"));
        else
          throw Y;
      }
    });
  }
  function b() {
    var Y = r.getContext("2d");
    (!a || a && q) && l.videoWidth && l.videoHeight && (r.width = l.videoWidth, r.height = l.videoHeight, Y.drawImage(l, 0, 0, l.videoWidth, l.videoHeight), d && (Y.scale(-1, 1), Y.drawImage(l, -l.videoWidth, 0)), r.toBlob(
      (E) => {
        m(a ? "stream" : "capture", E);
      },
      "image/png",
      0.8
    ));
  }
  let q = !1, S = [], C, y, z;
  function L() {
    if (q) {
      z.stop();
      let Y = new Blob(S, { type: y }), E = new FileReader();
      E.onload = function(A) {
        return n(this, void 0, void 0, function* () {
          var N;
          if (A.target) {
            let ie = new File([Y], "sample." + y.substring(6));
            const x = yield Qr([ie]);
            let re = ((N = yield f(x, c)) === null || N === void 0 ? void 0 : N.filter(Boolean))[0];
            m("capture", re), m("stop_recording");
          }
        });
      }, E.readAsDataURL(Y);
    } else {
      m("start_recording"), S = [];
      let Y = ["video/webm", "video/mp4"];
      for (let E of Y)
        if (MediaRecorder.isTypeSupported(E)) {
          y = E;
          break;
        }
      if (y === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      z = new MediaRecorder(C, { mimeType: y }), z.addEventListener("dataavailable", function(E) {
        S.push(E.data);
      }), z.start(200);
    }
    t(8, q = !q);
  }
  let w = !1;
  function I() {
    u === "image" && a && t(8, q = !q), u === "image" ? b() : L(), !q && C && (C.getTracks().forEach((Y) => Y.stop()), t(5, l.srcObject = null, l), t(9, w = !1));
  }
  a && u === "image" && window.setInterval(
    () => {
      l && !_ && b();
    },
    500
  );
  let R = !1;
  function V(Y) {
    Y.preventDefault(), Y.stopPropagation(), t(10, R = !1);
  }
  function F(Y) {
    bm[Y ? "unshift" : "push"](() => {
      l = Y, t(5, l);
    });
  }
  const $ = async () => v(), Z = () => t(10, R = !0), de = () => t(10, R = !1);
  return i.$$set = (Y) => {
    "streaming" in Y && t(0, a = Y.streaming), "pending" in Y && t(15, _ = Y.pending), "root" in Y && t(16, c = Y.root), "mode" in Y && t(1, u = Y.mode), "mirror_webcam" in Y && t(2, d = Y.mirror_webcam), "include_audio" in Y && t(17, h = Y.include_audio), "i18n" in Y && t(3, p = Y.i18n), "upload" in Y && t(18, f = Y.upload);
  }, [
    a,
    u,
    d,
    p,
    ns,
    l,
    o,
    s,
    q,
    w,
    R,
    g,
    v,
    I,
    V,
    _,
    c,
    h,
    f,
    F,
    $,
    Z,
    de
  ];
}
class Im extends mm {
  constructor(e) {
    super(), km(
      this,
      e,
      Am,
      Ym,
      ym,
      {
        streaming: 0,
        pending: 15,
        root: 16,
        mode: 1,
        mirror_webcam: 2,
        include_audio: 17,
        i18n: 3,
        upload: 18,
        click_outside: 4
      },
      null,
      [-1, -1]
    );
  }
  get click_outside() {
    return ns;
  }
}
const {
  SvelteComponent: a7,
  attr: r7,
  create_component: _7,
  destroy_component: c7,
  detach: f7,
  element: u7,
  init: d7,
  insert: h7,
  mount_component: m7,
  noop: g7,
  safe_not_equal: p7,
  transition_in: b7,
  transition_out: w7
} = window.__gradio__svelte__internal, { createEventDispatcher: v7 } = window.__gradio__svelte__internal, {
  SvelteComponent: k7,
  add_flush_callback: C7,
  append: y7,
  attr: S7,
  bind: q7,
  binding_callbacks: z7,
  bubble: D7,
  check_outros: B7,
  create_component: M7,
  create_slot: E7,
  destroy_component: L7,
  detach: W7,
  element: R7,
  empty: X7,
  get_all_dirty_from_scope: Y7,
  get_slot_changes: A7,
  group_outros: I7,
  init: j7,
  insert: H7,
  listen: T7,
  mount_component: F7,
  noop: P7,
  safe_not_equal: U7,
  space: O7,
  toggle_class: V7,
  transition_in: N7,
  transition_out: $7,
  update_slot_base: K7
} = window.__gradio__svelte__internal, { createEventDispatcher: Z7, tick: G7 } = window.__gradio__svelte__internal, {
  SvelteComponent: J7,
  attr: Q7,
  check_outros: x7,
  create_component: e9,
  destroy_component: t9,
  detach: n9,
  element: i9,
  group_outros: l9,
  init: o9,
  insert: s9,
  mount_component: a9,
  safe_not_equal: r9,
  toggle_class: _9,
  transition_in: c9,
  transition_out: f9
} = window.__gradio__svelte__internal, {
  SvelteComponent: u9,
  add_flush_callback: d9,
  assign: h9,
  bind: m9,
  binding_callbacks: g9,
  check_outros: p9,
  create_component: b9,
  destroy_component: w9,
  detach: v9,
  empty: k9,
  flush: C9,
  get_spread_object: y9,
  get_spread_update: S9,
  group_outros: q9,
  init: z9,
  insert: D9,
  mount_component: B9,
  safe_not_equal: M9,
  space: E9,
  transition_in: L9,
  transition_out: W9
} = window.__gradio__svelte__internal, {
  SvelteComponent: R9,
  append: X9,
  attr: Y9,
  detach: A9,
  init: I9,
  insert: j9,
  noop: H9,
  safe_not_equal: T9,
  set_style: F9,
  svg_element: P9
} = window.__gradio__svelte__internal, {
  SvelteComponent: jm,
  append: en,
  attr: T,
  detach: Hm,
  init: Tm,
  insert: Fm,
  noop: _o,
  safe_not_equal: Pm,
  set_style: tn,
  svg_element: Ht
} = window.__gradio__svelte__internal;
function Um(i) {
  let e, t, n, l, o, s, r, a, _;
  return {
    c() {
      e = Ht("svg"), t = Ht("rect"), n = Ht("rect"), l = Ht("rect"), o = Ht("rect"), s = Ht("line"), r = Ht("line"), a = Ht("line"), _ = Ht("line"), T(t, "x", "2"), T(t, "y", "2"), T(t, "width", "5"), T(t, "height", "5"), T(t, "rx", "1"), T(t, "ry", "1"), T(t, "stroke-width", "2"), T(t, "fill", "none"), T(n, "x", "17"), T(n, "y", "2"), T(n, "width", "5"), T(n, "height", "5"), T(n, "rx", "1"), T(n, "ry", "1"), T(n, "stroke-width", "2"), T(n, "fill", "none"), T(l, "x", "2"), T(l, "y", "17"), T(l, "width", "5"), T(l, "height", "5"), T(l, "rx", "1"), T(l, "ry", "1"), T(l, "stroke-width", "2"), T(l, "fill", "none"), T(o, "x", "17"), T(o, "y", "17"), T(o, "width", "5"), T(o, "height", "5"), T(o, "rx", "1"), T(o, "ry", "1"), T(o, "stroke-width", "2"), T(o, "fill", "none"), T(s, "x1", "7.5"), T(s, "y1", "4.5"), T(s, "x2", "16"), T(s, "y2", "4.5"), tn(s, "stroke-width", "2px"), T(r, "x1", "7.5"), T(r, "y1", "19.5"), T(r, "x2", "16"), T(r, "y2", "19.5"), tn(r, "stroke-width", "2px"), T(a, "x1", "4.5"), T(a, "y1", "8"), T(a, "x2", "4.5"), T(a, "y2", "16"), tn(a, "stroke-width", "2px"), T(_, "x1", "19.5"), T(_, "y1", "8"), T(_, "x2", "19.5"), T(_, "y2", "16"), tn(_, "stroke-width", "2px"), T(e, "width", "100%"), T(e, "height", "100%"), T(e, "viewBox", "0 0 24 24"), T(e, "version", "1.1"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), T(e, "xml:space", "preserve"), T(e, "stroke", "currentColor"), tn(e, "fill-rule", "evenodd"), tn(e, "clip-rule", "evenodd"), tn(e, "stroke-linecap", "round"), tn(e, "stroke-linejoin", "round");
    },
    m(c, u) {
      Fm(c, e, u), en(e, t), en(e, n), en(e, l), en(e, o), en(e, s), en(e, r), en(e, a), en(e, _);
    },
    p: _o,
    i: _o,
    o: _o,
    d(c) {
      c && Hm(e);
    }
  };
}
class Om extends jm {
  constructor(e) {
    super(), Tm(this, e, null, Um, Pm, {});
  }
}
const {
  SvelteComponent: Vm,
  append: Nm,
  attr: Tt,
  detach: $m,
  init: Km,
  insert: Zm,
  noop: co,
  safe_not_equal: Gm,
  set_style: Pi,
  svg_element: ba
} = window.__gradio__svelte__internal;
function Jm(i) {
  let e, t;
  return {
    c() {
      e = ba("svg"), t = ba("path"), Tt(t, "d", "M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"), Tt(e, "width", "100%"), Tt(e, "height", "100%"), Tt(e, "viewBox", "0 0 24 24"), Tt(e, "version", "1.1"), Tt(e, "xmlns", "http://www.w3.org/2000/svg"), Tt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Tt(e, "xml:space", "preserve"), Tt(e, "stroke", "currentColor"), Pi(e, "fill-rule", "evenodd"), Pi(e, "clip-rule", "evenodd"), Pi(e, "stroke-linecap", "round"), Pi(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      Zm(n, e, l), Nm(e, t);
    },
    p: co,
    i: co,
    o: co,
    d(n) {
      n && $m(e);
    }
  };
}
let Qm = class extends Vm {
  constructor(e) {
    super(), Km(this, e, null, Jm, Gm, {});
  }
};
const {
  SvelteComponent: xm,
  append: e0,
  attr: dt,
  detach: t0,
  init: n0,
  insert: i0,
  noop: fo,
  safe_not_equal: l0,
  set_style: Ui,
  svg_element: wa
} = window.__gradio__svelte__internal;
function o0(i) {
  let e, t;
  return {
    c() {
      e = wa("svg"), t = wa("path"), dt(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), dt(t, "fill", "none"), dt(t, "stroke-width", "2"), dt(e, "width", "100%"), dt(e, "height", "100%"), dt(e, "viewBox", "0 0 24 24"), dt(e, "version", "1.1"), dt(e, "xmlns", "http://www.w3.org/2000/svg"), dt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), dt(e, "xml:space", "preserve"), dt(e, "stroke", "currentColor"), Ui(e, "fill-rule", "evenodd"), Ui(e, "clip-rule", "evenodd"), Ui(e, "stroke-linecap", "round"), Ui(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      i0(n, e, l), e0(e, t);
    },
    p: fo,
    i: fo,
    o: fo,
    d(n) {
      n && t0(e);
    }
  };
}
class s0 extends xm {
  constructor(e) {
    super(), n0(this, e, null, o0, l0, {});
  }
}
const {
  SvelteComponent: a0,
  append: r0,
  attr: ht,
  detach: _0,
  init: c0,
  insert: f0,
  noop: uo,
  safe_not_equal: u0,
  set_style: Oi,
  svg_element: va
} = window.__gradio__svelte__internal;
function d0(i) {
  let e, t;
  return {
    c() {
      e = va("svg"), t = va("path"), ht(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), ht(t, "fill", "none"), ht(t, "stroke-width", "2"), ht(e, "width", "100%"), ht(e, "height", "100%"), ht(e, "viewBox", "0 0 24 24"), ht(e, "version", "1.1"), ht(e, "xmlns", "http://www.w3.org/2000/svg"), ht(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), ht(e, "xml:space", "preserve"), ht(e, "stroke", "currentColor"), Oi(e, "fill-rule", "evenodd"), Oi(e, "clip-rule", "evenodd"), Oi(e, "stroke-linecap", "round"), Oi(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      f0(n, e, l), r0(e, t);
    },
    p: uo,
    i: uo,
    o: uo,
    d(n) {
      n && _0(e);
    }
  };
}
class h0 extends a0 {
  constructor(e) {
    super(), c0(this, e, null, d0, u0, {});
  }
}
const {
  SvelteComponent: m0,
  append: ka,
  attr: Ft,
  detach: g0,
  init: p0,
  insert: b0,
  noop: ho,
  safe_not_equal: w0,
  set_style: Vi,
  svg_element: mo
} = window.__gradio__svelte__internal;
function v0(i) {
  let e, t, n;
  return {
    c() {
      e = mo("svg"), t = mo("path"), n = mo("path"), Ft(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), Ft(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), Ft(e, "width", "100%"), Ft(e, "height", "100%"), Ft(e, "viewBox", "0 0 24 24"), Ft(e, "xmlns", "http://www.w3.org/2000/svg"), Ft(e, "fill", "none"), Ft(e, "stroke", "currentColor"), Ft(e, "stroke-width", "2"), Vi(e, "fill-rule", "evenodd"), Vi(e, "clip-rule", "evenodd"), Vi(e, "stroke-linecap", "round"), Vi(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      b0(l, e, o), ka(e, t), ka(e, n);
    },
    p: ho,
    i: ho,
    o: ho,
    d(l) {
      l && g0(e);
    }
  };
}
class k0 extends m0 {
  constructor(e) {
    super(), p0(this, e, null, v0, w0, {});
  }
}
const {
  SvelteComponent: C0,
  append: y0,
  attr: nn,
  detach: S0,
  init: q0,
  insert: z0,
  noop: go,
  safe_not_equal: D0,
  set_style: Ni,
  svg_element: Ca
} = window.__gradio__svelte__internal;
function B0(i) {
  let e, t;
  return {
    c() {
      e = Ca("svg"), t = Ca("path"), nn(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), nn(e, "width", "100%"), nn(e, "height", "100%"), nn(e, "viewBox", "0 0 24 24"), nn(e, "fill", "none"), nn(e, "stroke", "currentColor"), nn(e, "stroke-width", "2"), Ni(e, "fill-rule", "evenodd"), Ni(e, "clip-rule", "evenodd"), Ni(e, "stroke-linecap", "round"), Ni(e, "stroke-linejoin", "round"), nn(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      z0(n, e, l), y0(e, t);
    },
    p: go,
    i: go,
    o: go,
    d(n) {
      n && S0(e);
    }
  };
}
class M0 extends C0 {
  constructor(e) {
    super(), q0(this, e, null, B0, D0, {});
  }
}
const {
  SvelteComponent: E0,
  append: L0,
  attr: ln,
  detach: W0,
  init: R0,
  insert: X0,
  noop: po,
  safe_not_equal: Y0,
  set_style: $i,
  svg_element: ya
} = window.__gradio__svelte__internal;
function A0(i) {
  let e, t;
  return {
    c() {
      e = ya("svg"), t = ya("path"), ln(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), ln(e, "width", "100%"), ln(e, "height", "100%"), ln(e, "viewBox", "0 0 24 24"), ln(e, "fill", "none"), ln(e, "stroke", "currentColor"), ln(e, "stroke-width", "2"), $i(e, "fill-rule", "evenodd"), $i(e, "clip-rule", "evenodd"), $i(e, "stroke-linecap", "round"), $i(e, "stroke-linejoin", "round"), ln(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      X0(n, e, l), L0(e, t);
    },
    p: po,
    i: po,
    o: po,
    d(n) {
      n && W0(e);
    }
  };
}
class I0 extends E0 {
  constructor(e) {
    super(), R0(this, e, null, A0, Y0, {});
  }
}
const {
  SvelteComponent: j0,
  append: Sa,
  attr: bo,
  bubble: qa,
  create_component: H0,
  destroy_component: T0,
  detach: f_,
  element: za,
  init: F0,
  insert: u_,
  listen: wo,
  mount_component: P0,
  run_all: U0,
  safe_not_equal: O0,
  set_data: V0,
  set_input_value: Da,
  space: N0,
  text: $0,
  transition_in: K0,
  transition_out: Z0
} = window.__gradio__svelte__internal, { createEventDispatcher: G0, afterUpdate: J0 } = window.__gradio__svelte__internal;
function Q0(i) {
  let e;
  return {
    c() {
      e = $0(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      u_(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && V0(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && f_(e);
    }
  };
}
function x0(i) {
  let e, t, n, l, o, s, r;
  return t = new wr({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[2]
      ),
      $$slots: { default: [Q0] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = za("label"), H0(t.$$.fragment), n = N0(), l = za("input"), bo(l, "type", "color"), l.disabled = /*disabled*/
      i[3], bo(l, "class", "svelte-16l8u73"), bo(e, "class", "block");
    },
    m(a, _) {
      u_(a, e, _), P0(t, e, null), Sa(e, n), Sa(e, l), Da(
        l,
        /*value*/
        i[0]
      ), o = !0, s || (r = [
        wo(
          l,
          "input",
          /*input_input_handler*/
          i[8]
        ),
        wo(
          l,
          "focus",
          /*focus_handler*/
          i[6]
        ),
        wo(
          l,
          "blur",
          /*blur_handler*/
          i[7]
        )
      ], s = !0);
    },
    p(a, [_]) {
      const c = {};
      _ & /*show_label*/
      16 && (c.show_label = /*show_label*/
      a[4]), _ & /*info*/
      4 && (c.info = /*info*/
      a[2]), _ & /*$$scope, label*/
      2050 && (c.$$scope = { dirty: _, ctx: a }), t.$set(c), (!o || _ & /*disabled*/
      8) && (l.disabled = /*disabled*/
      a[3]), _ & /*value*/
      1 && Da(
        l,
        /*value*/
        a[0]
      );
    },
    i(a) {
      o || (K0(t.$$.fragment, a), o = !0);
    },
    o(a) {
      Z0(t.$$.fragment, a), o = !1;
    },
    d(a) {
      a && f_(e), T0(t), s = !1, U0(r);
    }
  };
}
function eg(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: l = !1 } = e, { label: o } = e, { info: s = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const _ = G0();
  function c() {
    _("change", n), l || _("input");
  }
  J0(() => {
    t(5, l = !1);
  });
  function u(p) {
    qa.call(this, i, p);
  }
  function d(p) {
    qa.call(this, i, p);
  }
  function h() {
    n = this.value, t(0, n);
  }
  return i.$$set = (p) => {
    "value" in p && t(0, n = p.value), "value_is_output" in p && t(5, l = p.value_is_output), "label" in p && t(1, o = p.label), "info" in p && t(2, s = p.info), "disabled" in p && t(3, r = p.disabled), "show_label" in p && t(4, a = p.show_label);
  }, i.$$.update = () => {
    i.$$.dirty & /*value*/
    1 && c();
  }, [
    n,
    o,
    s,
    r,
    a,
    l,
    u,
    d,
    h
  ];
}
class tg extends j0 {
  constructor(e) {
    super(), F0(this, e, eg, x0, O0, {
      value: 0,
      value_is_output: 5,
      label: 1,
      info: 2,
      disabled: 3,
      show_label: 4
    });
  }
}
const {
  SvelteComponent: O9,
  append: V9,
  attr: N9,
  component_subscribe: $9,
  detach: K9,
  element: Z9,
  init: G9,
  insert: J9,
  noop: Q9,
  safe_not_equal: x9,
  set_style: eC,
  svg_element: tC,
  toggle_class: nC
} = window.__gradio__svelte__internal, { onMount: iC } = window.__gradio__svelte__internal, {
  SvelteComponent: lC,
  append: oC,
  attr: sC,
  binding_callbacks: aC,
  check_outros: rC,
  create_component: _C,
  create_slot: cC,
  destroy_component: fC,
  destroy_each: uC,
  detach: dC,
  element: hC,
  empty: mC,
  ensure_array_like: gC,
  get_all_dirty_from_scope: pC,
  get_slot_changes: bC,
  group_outros: wC,
  init: vC,
  insert: kC,
  mount_component: CC,
  noop: yC,
  safe_not_equal: SC,
  set_data: qC,
  set_style: zC,
  space: DC,
  text: BC,
  toggle_class: MC,
  transition_in: EC,
  transition_out: LC,
  update_slot_base: WC
} = window.__gradio__svelte__internal, { tick: RC } = window.__gradio__svelte__internal, { onDestroy: XC } = window.__gradio__svelte__internal, {
  SvelteComponent: YC,
  add_render_callback: AC,
  append: IC,
  attr: jC,
  bubble: HC,
  check_outros: TC,
  create_component: FC,
  create_in_transition: PC,
  create_out_transition: UC,
  destroy_component: OC,
  detach: VC,
  element: NC,
  group_outros: $C,
  init: KC,
  insert: ZC,
  listen: GC,
  mount_component: JC,
  run_all: QC,
  safe_not_equal: xC,
  set_data: ey,
  space: ty,
  stop_propagation: ny,
  text: iy,
  transition_in: ly,
  transition_out: oy
} = window.__gradio__svelte__internal, { createEventDispatcher: sy, onMount: ay } = window.__gradio__svelte__internal, {
  SvelteComponent: ry,
  append: _y,
  attr: cy,
  bubble: fy,
  check_outros: uy,
  create_animation: dy,
  create_component: hy,
  destroy_component: my,
  detach: gy,
  element: py,
  ensure_array_like: by,
  fix_and_outro_and_destroy_block: wy,
  fix_position: vy,
  group_outros: ky,
  init: Cy,
  insert: yy,
  mount_component: Sy,
  noop: qy,
  safe_not_equal: zy,
  set_style: Dy,
  space: By,
  transition_in: My,
  transition_out: Ey,
  update_keyed_each: Ly
} = window.__gradio__svelte__internal, {
  SvelteComponent: Wy,
  attr: Ry,
  detach: Xy,
  element: Yy,
  init: Ay,
  insert: Iy,
  noop: jy,
  safe_not_equal: Hy,
  set_style: Ty,
  toggle_class: Fy
} = window.__gradio__svelte__internal, {
  SvelteComponent: Py,
  add_flush_callback: Uy,
  assign: Oy,
  bind: Vy,
  binding_callbacks: Ny,
  create_component: $y,
  destroy_component: Ky,
  detach: Zy,
  flush: Gy,
  get_spread_object: Jy,
  get_spread_update: Qy,
  init: xy,
  insert: eS,
  mount_component: tS,
  safe_not_equal: nS,
  space: iS,
  transition_in: lS,
  transition_out: oS
} = window.__gradio__svelte__internal;
var d_ = (i) => {
  throw TypeError(i);
}, h_ = (i, e, t) => e.has(i) || d_("Cannot " + t), fi = (i, e, t) => (h_(i, e, "read from private field"), e.get(i)), ng = (i, e, t) => e.has(i) ? d_("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), ig = (i, e, t, n) => (h_(i, e, "write to private field"), e.set(i, t), t);
new Intl.Collator(0, { numeric: 1 }).compare;
typeof process < "u" && process.versions && process.versions.node;
var rn;
class sS extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = fi(this, rn) + t; ; ) {
          const l = t.indexOf(`
`), o = e.allowCR ? t.indexOf("\r") : -1;
          if (o !== -1 && o !== t.length - 1 && (l === -1 || l - 1 > o)) {
            n.enqueue(t.slice(0, o)), t = t.slice(o + 1);
            continue;
          }
          if (l === -1)
            break;
          const s = t[l - 1] === "\r" ? l - 1 : l;
          n.enqueue(t.slice(0, s)), t = t.slice(l + 1);
        }
        ig(this, rn, t);
      },
      flush: (t) => {
        if (fi(this, rn) === "")
          return;
        const n = e.allowCR && fi(this, rn).endsWith("\r") ? fi(this, rn).slice(0, -1) : fi(this, rn);
        t.enqueue(n);
      }
    }), ng(this, rn, "");
  }
}
rn = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: lg,
  append: m_,
  attr: ge,
  bubble: og,
  check_outros: sg,
  create_slot: g_,
  detach: Mi,
  element: Dl,
  empty: ag,
  get_all_dirty_from_scope: p_,
  get_slot_changes: b_,
  group_outros: rg,
  init: _g,
  insert: Ei,
  listen: cg,
  safe_not_equal: fg,
  set_style: Fe,
  space: w_,
  src_url_equal: ul,
  toggle_class: $n,
  transition_in: dl,
  transition_out: hl,
  update_slot_base: v_
} = window.__gradio__svelte__internal;
function ug(i) {
  let e, t, n, l, o, s, r = (
    /*icon*/
    i[7] && Ba(i)
  );
  const a = (
    /*#slots*/
    i[12].default
  ), _ = g_(
    a,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = Dl("button"), r && r.c(), t = w_(), _ && _.c(), ge(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), ge(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), e.disabled = /*disabled*/
      i[8], $n(e, "hidden", !/*visible*/
      i[2]), Fe(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), Fe(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), Fe(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(c, u) {
      Ei(c, e, u), r && r.m(e, null), m_(e, t), _ && _.m(e, null), l = !0, o || (s = cg(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), o = !0);
    },
    p(c, u) {
      /*icon*/
      c[7] ? r ? r.p(c, u) : (r = Ba(c), r.c(), r.m(e, t)) : r && (r.d(1), r = null), _ && _.p && (!l || u & /*$$scope*/
      2048) && v_(
        _,
        a,
        c,
        /*$$scope*/
        c[11],
        l ? b_(
          a,
          /*$$scope*/
          c[11],
          u,
          null
        ) : p_(
          /*$$scope*/
          c[11]
        ),
        null
      ), (!l || u & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      c[4] + " " + /*variant*/
      c[3] + " " + /*elem_classes*/
      c[1].join(" ") + " svelte-8huxfn")) && ge(e, "class", n), (!l || u & /*elem_id*/
      1) && ge(
        e,
        "id",
        /*elem_id*/
        c[0]
      ), (!l || u & /*disabled*/
      256) && (e.disabled = /*disabled*/
      c[8]), (!l || u & /*size, variant, elem_classes, visible*/
      30) && $n(e, "hidden", !/*visible*/
      c[2]), u & /*scale*/
      512 && Fe(
        e,
        "flex-grow",
        /*scale*/
        c[9]
      ), u & /*scale*/
      512 && Fe(
        e,
        "width",
        /*scale*/
        c[9] === 0 ? "fit-content" : null
      ), u & /*min_width*/
      1024 && Fe(e, "min-width", typeof /*min_width*/
      c[10] == "number" ? `calc(min(${/*min_width*/
      c[10]}px, 100%))` : null);
    },
    i(c) {
      l || (dl(_, c), l = !0);
    },
    o(c) {
      hl(_, c), l = !1;
    },
    d(c) {
      c && Mi(e), r && r.d(), _ && _.d(c), o = !1, s();
    }
  };
}
function dg(i) {
  let e, t, n, l, o = (
    /*icon*/
    i[7] && Ma(i)
  );
  const s = (
    /*#slots*/
    i[12].default
  ), r = g_(
    s,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = Dl("a"), o && o.c(), t = w_(), r && r.c(), ge(
        e,
        "href",
        /*link*/
        i[6]
      ), ge(e, "rel", "noopener noreferrer"), ge(
        e,
        "aria-disabled",
        /*disabled*/
        i[8]
      ), ge(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), ge(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), $n(e, "hidden", !/*visible*/
      i[2]), $n(
        e,
        "disabled",
        /*disabled*/
        i[8]
      ), Fe(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), Fe(
        e,
        "pointer-events",
        /*disabled*/
        i[8] ? "none" : null
      ), Fe(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), Fe(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(a, _) {
      Ei(a, e, _), o && o.m(e, null), m_(e, t), r && r.m(e, null), l = !0;
    },
    p(a, _) {
      /*icon*/
      a[7] ? o ? o.p(a, _) : (o = Ma(a), o.c(), o.m(e, t)) : o && (o.d(1), o = null), r && r.p && (!l || _ & /*$$scope*/
      2048) && v_(
        r,
        s,
        a,
        /*$$scope*/
        a[11],
        l ? b_(
          s,
          /*$$scope*/
          a[11],
          _,
          null
        ) : p_(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!l || _ & /*link*/
      64) && ge(
        e,
        "href",
        /*link*/
        a[6]
      ), (!l || _ & /*disabled*/
      256) && ge(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!l || _ & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && ge(e, "class", n), (!l || _ & /*elem_id*/
      1) && ge(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!l || _ & /*size, variant, elem_classes, visible*/
      30) && $n(e, "hidden", !/*visible*/
      a[2]), (!l || _ & /*size, variant, elem_classes, disabled*/
      282) && $n(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), _ & /*scale*/
      512 && Fe(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), _ & /*disabled*/
      256 && Fe(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), _ & /*scale*/
      512 && Fe(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), _ & /*min_width*/
      1024 && Fe(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      l || (dl(r, a), l = !0);
    },
    o(a) {
      hl(r, a), l = !1;
    },
    d(a) {
      a && Mi(e), o && o.d(), r && r.d(a);
    }
  };
}
function Ba(i) {
  let e, t, n;
  return {
    c() {
      e = Dl("img"), ge(e, "class", "button-icon svelte-8huxfn"), ul(e.src, t = /*icon*/
      i[7].url) || ge(e, "src", t), ge(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, o) {
      Ei(l, e, o);
    },
    p(l, o) {
      o & /*icon*/
      128 && !ul(e.src, t = /*icon*/
      l[7].url) && ge(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && ge(e, "alt", n);
    },
    d(l) {
      l && Mi(e);
    }
  };
}
function Ma(i) {
  let e, t, n;
  return {
    c() {
      e = Dl("img"), ge(e, "class", "button-icon svelte-8huxfn"), ul(e.src, t = /*icon*/
      i[7].url) || ge(e, "src", t), ge(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, o) {
      Ei(l, e, o);
    },
    p(l, o) {
      o & /*icon*/
      128 && !ul(e.src, t = /*icon*/
      l[7].url) && ge(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && ge(e, "alt", n);
    },
    d(l) {
      l && Mi(e);
    }
  };
}
function hg(i) {
  let e, t, n, l;
  const o = [dg, ug], s = [];
  function r(a, _) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = ag();
    },
    m(a, _) {
      s[e].m(a, _), Ei(a, n, _), l = !0;
    },
    p(a, [_]) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (rg(), hl(s[c], 1, 1, () => {
        s[c] = null;
      }), sg(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), dl(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (dl(t), l = !0);
    },
    o(a) {
      hl(t), l = !1;
    },
    d(a) {
      a && Mi(n), s[e].d(a);
    }
  };
}
function mg(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { elem_id: o = "" } = e, { elem_classes: s = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: _ = "lg" } = e, { value: c = null } = e, { link: u = null } = e, { icon: d = null } = e, { disabled: h = !1 } = e, { scale: p = null } = e, { min_width: f = void 0 } = e;
  function m(g) {
    og.call(this, i, g);
  }
  return i.$$set = (g) => {
    "elem_id" in g && t(0, o = g.elem_id), "elem_classes" in g && t(1, s = g.elem_classes), "visible" in g && t(2, r = g.visible), "variant" in g && t(3, a = g.variant), "size" in g && t(4, _ = g.size), "value" in g && t(5, c = g.value), "link" in g && t(6, u = g.link), "icon" in g && t(7, d = g.icon), "disabled" in g && t(8, h = g.disabled), "scale" in g && t(9, p = g.scale), "min_width" in g && t(10, f = g.min_width), "$$scope" in g && t(11, l = g.$$scope);
  }, [
    o,
    s,
    r,
    a,
    _,
    c,
    u,
    d,
    h,
    p,
    f,
    l,
    n,
    m
  ];
}
class Fo extends lg {
  constructor(e) {
    super(), _g(this, e, mg, hg, fg, {
      elem_id: 0,
      elem_classes: 1,
      visible: 2,
      variant: 3,
      size: 4,
      value: 5,
      link: 6,
      icon: 7,
      disabled: 8,
      scale: 9,
      min_width: 10
    });
  }
}
const {
  SvelteComponent: aS,
  create_component: rS,
  destroy_component: _S,
  detach: cS,
  init: fS,
  insert: uS,
  mount_component: dS,
  safe_not_equal: hS,
  set_data: mS,
  text: gS,
  transition_in: pS,
  transition_out: bS
} = window.__gradio__svelte__internal, {
  SvelteComponent: gg,
  add_render_callback: k_,
  append: Ki,
  attr: Ge,
  binding_callbacks: Ea,
  check_outros: pg,
  create_bidirectional_transition: La,
  destroy_each: bg,
  detach: Si,
  element: ml,
  empty: wg,
  ensure_array_like: Wa,
  group_outros: vg,
  init: kg,
  insert: qi,
  listen: Po,
  prevent_default: Cg,
  run_all: yg,
  safe_not_equal: Sg,
  set_data: qg,
  set_style: Tn,
  space: Uo,
  text: zg,
  toggle_class: St,
  transition_in: vo,
  transition_out: Ra
} = window.__gradio__svelte__internal, { createEventDispatcher: Dg } = window.__gradio__svelte__internal;
function Xa(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function Ya(i) {
  let e, t, n, l, o, s = Wa(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < s.length; a += 1)
    r[a] = Aa(Xa(i, s, a));
  return {
    c() {
      e = ml("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Ge(e, "class", "options svelte-yuohum"), Ge(e, "role", "listbox"), Tn(
        e,
        "bottom",
        /*bottom*/
        i[9]
      ), Tn(e, "max-height", `calc(${/*max_height*/
      i[10]}px - var(--window-padding))`), Tn(
        e,
        "width",
        /*input_width*/
        i[8] + "px"
      );
    },
    m(a, _) {
      qi(a, e, _);
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(e, null);
      i[22](e), n = !0, l || (o = Po(e, "mousedown", Cg(
        /*mousedown_handler*/
        i[21]
      )), l = !0);
    },
    p(a, _) {
      if (_ & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        s = Wa(
          /*filtered_indices*/
          a[1]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const u = Xa(a, s, c);
          r[c] ? r[c].p(u, _) : (r[c] = Aa(u), r[c].c(), r[c].m(e, null));
        }
        for (; c < r.length; c += 1)
          r[c].d(1);
        r.length = s.length;
      }
      _ & /*bottom*/
      512 && Tn(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), _ & /*max_height*/
      1024 && Tn(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), _ & /*input_width*/
      256 && Tn(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && k_(() => {
        n && (t || (t = La(e, js, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = La(e, js, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && Si(e), bg(r, a), i[22](null), a && t && t.end(), l = !1, o();
    }
  };
}
function Aa(i) {
  let e, t, n, l = (
    /*choices*/
    i[0][
      /*index*/
      i[26]
    ][0] + ""
  ), o, s, r, a, _;
  return {
    c() {
      e = ml("li"), t = ml("span"), t.textContent = "✓", n = Uo(), o = zg(l), s = Uo(), Ge(t, "class", "inner-item svelte-yuohum"), St(t, "hide", !/*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), Ge(e, "class", "item svelte-yuohum"), Ge(e, "data-index", r = /*index*/
      i[26]), Ge(e, "aria-label", a = /*choices*/
      i[0][
        /*index*/
        i[26]
      ][0]), Ge(e, "data-testid", "dropdown-option"), Ge(e, "role", "option"), Ge(e, "aria-selected", _ = /*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), St(
        e,
        "selected",
        /*selected_indices*/
        i[4].includes(
          /*index*/
          i[26]
        )
      ), St(
        e,
        "active",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), St(
        e,
        "bg-gray-100",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), St(
        e,
        "dark:bg-gray-600",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      );
    },
    m(c, u) {
      qi(c, e, u), Ki(e, t), Ki(e, n), Ki(e, o), Ki(e, s);
    },
    p(c, u) {
      u & /*selected_indices, filtered_indices*/
      18 && St(t, "hide", !/*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )), u & /*choices, filtered_indices*/
      3 && l !== (l = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0] + "") && qg(o, l), u & /*filtered_indices*/
      2 && r !== (r = /*index*/
      c[26]) && Ge(e, "data-index", r), u & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0]) && Ge(e, "aria-label", a), u & /*selected_indices, filtered_indices*/
      18 && _ !== (_ = /*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )) && Ge(e, "aria-selected", _), u & /*selected_indices, filtered_indices*/
      18 && St(
        e,
        "selected",
        /*selected_indices*/
        c[4].includes(
          /*index*/
          c[26]
        )
      ), u & /*filtered_indices, active_index*/
      34 && St(
        e,
        "active",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), u & /*filtered_indices, active_index*/
      34 && St(
        e,
        "bg-gray-100",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), u & /*filtered_indices, active_index*/
      34 && St(
        e,
        "dark:bg-gray-600",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      );
    },
    d(c) {
      c && Si(e);
    }
  };
}
function Bg(i) {
  let e, t, n, l, o;
  k_(
    /*onwindowresize*/
    i[19]
  );
  let s = (
    /*show_options*/
    i[2] && !/*disabled*/
    i[3] && Ya(i)
  );
  return {
    c() {
      e = ml("div"), t = Uo(), s && s.c(), n = wg(), Ge(e, "class", "reference");
    },
    m(r, a) {
      qi(r, e, a), i[20](e), qi(r, t, a), s && s.m(r, a), qi(r, n, a), l || (o = [
        Po(
          window,
          "scroll",
          /*scroll_listener*/
          i[12]
        ),
        Po(
          window,
          "resize",
          /*onwindowresize*/
          i[19]
        )
      ], l = !0);
    },
    p(r, [a]) {
      /*show_options*/
      r[2] && !/*disabled*/
      r[3] ? s ? (s.p(r, a), a & /*show_options, disabled*/
      12 && vo(s, 1)) : (s = Ya(r), s.c(), vo(s, 1), s.m(n.parentNode, n)) : s && (vg(), Ra(s, 1, 1, () => {
        s = null;
      }), pg());
    },
    i(r) {
      vo(s);
    },
    o(r) {
      Ra(s);
    },
    d(r) {
      r && (Si(e), Si(t), Si(n)), i[20](null), s && s.d(r), l = !1, yg(o);
    }
  };
}
function Mg(i, e, t) {
  var n, l;
  let { choices: o } = e, { filtered_indices: s } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: _ = [] } = e, { active_index: c = null } = e, u, d, h, p, f, m, g, v, b;
  function q() {
    const { top: R, bottom: V } = f.getBoundingClientRect();
    t(16, u = R), t(17, d = b - V);
  }
  let S = null;
  function C() {
    r && (S !== null && clearTimeout(S), S = setTimeout(
      () => {
        q(), S = null;
      },
      10
    ));
  }
  const y = Dg();
  function z() {
    t(11, b = window.innerHeight);
  }
  function L(R) {
    Ea[R ? "unshift" : "push"](() => {
      f = R, t(6, f);
    });
  }
  const w = (R) => y("change", R);
  function I(R) {
    Ea[R ? "unshift" : "push"](() => {
      m = R, t(7, m);
    });
  }
  return i.$$set = (R) => {
    "choices" in R && t(0, o = R.choices), "filtered_indices" in R && t(1, s = R.filtered_indices), "show_options" in R && t(2, r = R.show_options), "disabled" in R && t(3, a = R.disabled), "selected_indices" in R && t(4, _ = R.selected_indices), "active_index" in R && t(5, c = R.active_index);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && f) {
        if (m && _.length > 0) {
          let V = m.querySelectorAll("li");
          for (const F of Array.from(V))
            if (F.getAttribute("data-index") === _[0].toString()) {
              t(14, n = m == null ? void 0 : m.scrollTo) === null || n === void 0 || n.call(m, 0, F.offsetTop);
              break;
            }
        }
        q();
        const R = t(15, l = f.parentElement) === null || l === void 0 ? void 0 : l.getBoundingClientRect();
        t(18, h = (R == null ? void 0 : R.height) || 0), t(8, p = (R == null ? void 0 : R.width) || 0);
      }
      d > u ? (t(10, v = d), t(9, g = null)) : (t(9, g = `${d + h}px`), t(10, v = u - h));
    }
  }, [
    o,
    s,
    r,
    a,
    _,
    c,
    f,
    m,
    p,
    g,
    v,
    b,
    C,
    y,
    n,
    l,
    u,
    d,
    h,
    z,
    L,
    w,
    I
  ];
}
class Eg extends gg {
  constructor(e) {
    super(), kg(this, e, Mg, Bg, Sg, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function Lg(i, e) {
  return (i % e + e) % e;
}
function Ia(i, e) {
  return i.reduce((t, n, l) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(l), t), []);
}
function Wg(i, e, t) {
  i("change", e), t || i("input");
}
function Rg(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), l = i.key === "ArrowUp" ? -1 : 1;
      e = t[Lg(n + l, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: wS,
  append: vS,
  attr: kS,
  binding_callbacks: CS,
  check_outros: yS,
  create_component: SS,
  destroy_component: qS,
  destroy_each: zS,
  detach: DS,
  element: BS,
  ensure_array_like: MS,
  group_outros: ES,
  init: LS,
  insert: WS,
  listen: RS,
  mount_component: XS,
  prevent_default: YS,
  run_all: AS,
  safe_not_equal: IS,
  set_data: jS,
  set_input_value: HS,
  space: TS,
  text: FS,
  toggle_class: PS,
  transition_in: US,
  transition_out: OS
} = window.__gradio__svelte__internal, { afterUpdate: VS, createEventDispatcher: NS } = window.__gradio__svelte__internal, {
  SvelteComponent: Xg,
  append: bn,
  attr: Ze,
  binding_callbacks: Yg,
  check_outros: Ag,
  create_component: Oo,
  destroy_component: Vo,
  detach: is,
  element: Un,
  group_outros: Ig,
  init: jg,
  insert: ls,
  listen: ui,
  mount_component: No,
  run_all: Hg,
  safe_not_equal: Tg,
  set_data: Fg,
  set_input_value: ja,
  space: ko,
  text: Pg,
  toggle_class: Fn,
  transition_in: On,
  transition_out: ki
} = window.__gradio__svelte__internal, { onMount: Ug } = window.__gradio__svelte__internal, { createEventDispatcher: Og, afterUpdate: Vg } = window.__gradio__svelte__internal;
function Ng(i) {
  let e;
  return {
    c() {
      e = Pg(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      ls(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && Fg(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && is(e);
    }
  };
}
function Ha(i) {
  let e, t, n;
  return t = new Zo({}), {
    c() {
      e = Un("div"), Oo(t.$$.fragment), Ze(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(l, o) {
      ls(l, e, o), No(t, e, null), n = !0;
    },
    i(l) {
      n || (On(t.$$.fragment, l), n = !0);
    },
    o(l) {
      ki(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && is(e), Vo(t);
    }
  };
}
function $g(i) {
  let e, t, n, l, o, s, r, a, _, c, u, d, h, p;
  t = new wr({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[1]
      ),
      $$slots: { default: [Ng] },
      $$scope: { ctx: i }
    }
  });
  let f = !/*disabled*/
  i[3] && Ha();
  return u = new Eg({
    props: {
      show_options: (
        /*show_options*/
        i[12]
      ),
      choices: (
        /*choices*/
        i[2]
      ),
      filtered_indices: (
        /*filtered_indices*/
        i[10]
      ),
      disabled: (
        /*disabled*/
        i[3]
      ),
      selected_indices: (
        /*selected_index*/
        i[11] === null ? [] : [
          /*selected_index*/
          i[11]
        ]
      ),
      active_index: (
        /*active_index*/
        i[14]
      )
    }
  }), u.$on(
    "change",
    /*handle_option_selected*/
    i[16]
  ), {
    c() {
      e = Un("div"), Oo(t.$$.fragment), n = ko(), l = Un("div"), o = Un("div"), s = Un("div"), r = Un("input"), _ = ko(), f && f.c(), c = ko(), Oo(u.$$.fragment), Ze(r, "role", "listbox"), Ze(r, "aria-controls", "dropdown-options"), Ze(
        r,
        "aria-expanded",
        /*show_options*/
        i[12]
      ), Ze(
        r,
        "aria-label",
        /*label*/
        i[0]
      ), Ze(r, "class", "border-none svelte-1m1zvyj"), r.disabled = /*disabled*/
      i[3], Ze(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      i[7], Fn(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), Ze(s, "class", "secondary-wrap svelte-1m1zvyj"), Ze(o, "class", "wrap-inner svelte-1m1zvyj"), Fn(
        o,
        "show_options",
        /*show_options*/
        i[12]
      ), Ze(l, "class", "wrap svelte-1m1zvyj"), Ze(e, "class", "svelte-1m1zvyj"), Fn(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(m, g) {
      ls(m, e, g), No(t, e, null), bn(e, n), bn(e, l), bn(l, o), bn(o, s), bn(s, r), ja(
        r,
        /*input_text*/
        i[9]
      ), i[29](r), bn(s, _), f && f.m(s, null), bn(l, c), No(u, l, null), d = !0, h || (p = [
        ui(
          r,
          "input",
          /*input_input_handler*/
          i[28]
        ),
        ui(
          r,
          "keydown",
          /*handle_key_down*/
          i[19]
        ),
        ui(
          r,
          "keyup",
          /*keyup_handler*/
          i[30]
        ),
        ui(
          r,
          "blur",
          /*handle_blur*/
          i[18]
        ),
        ui(
          r,
          "focus",
          /*handle_focus*/
          i[17]
        )
      ], h = !0);
    },
    p(m, g) {
      const v = {};
      g[0] & /*show_label*/
      16 && (v.show_label = /*show_label*/
      m[4]), g[0] & /*info*/
      2 && (v.info = /*info*/
      m[1]), g[0] & /*label*/
      1 | g[1] & /*$$scope*/
      4 && (v.$$scope = { dirty: g, ctx: m }), t.$set(v), (!d || g[0] & /*show_options*/
      4096) && Ze(
        r,
        "aria-expanded",
        /*show_options*/
        m[12]
      ), (!d || g[0] & /*label*/
      1) && Ze(
        r,
        "aria-label",
        /*label*/
        m[0]
      ), (!d || g[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      m[3]), (!d || g[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      m[7])) && (r.readOnly = a), g[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      m[9] && ja(
        r,
        /*input_text*/
        m[9]
      ), (!d || g[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && Fn(r, "subdued", !/*choices_names*/
      m[13].includes(
        /*input_text*/
        m[9]
      ) && !/*allow_custom_value*/
      m[6]), /*disabled*/
      m[3] ? f && (Ig(), ki(f, 1, 1, () => {
        f = null;
      }), Ag()) : f ? g[0] & /*disabled*/
      8 && On(f, 1) : (f = Ha(), f.c(), On(f, 1), f.m(s, null)), (!d || g[0] & /*show_options*/
      4096) && Fn(
        o,
        "show_options",
        /*show_options*/
        m[12]
      );
      const b = {};
      g[0] & /*show_options*/
      4096 && (b.show_options = /*show_options*/
      m[12]), g[0] & /*choices*/
      4 && (b.choices = /*choices*/
      m[2]), g[0] & /*filtered_indices*/
      1024 && (b.filtered_indices = /*filtered_indices*/
      m[10]), g[0] & /*disabled*/
      8 && (b.disabled = /*disabled*/
      m[3]), g[0] & /*selected_index*/
      2048 && (b.selected_indices = /*selected_index*/
      m[11] === null ? [] : [
        /*selected_index*/
        m[11]
      ]), g[0] & /*active_index*/
      16384 && (b.active_index = /*active_index*/
      m[14]), u.$set(b), (!d || g[0] & /*container*/
      32) && Fn(
        e,
        "container",
        /*container*/
        m[5]
      );
    },
    i(m) {
      d || (On(t.$$.fragment, m), On(f), On(u.$$.fragment, m), d = !0);
    },
    o(m) {
      ki(t.$$.fragment, m), ki(f), ki(u.$$.fragment, m), d = !1;
    },
    d(m) {
      m && is(e), Vo(t), i[29](null), f && f.d(), Vo(u), h = !1, Hg(p);
    }
  };
}
function Kg(i, e, t) {
  let { label: n } = e, { info: l = void 0 } = e, { value: o = [] } = e, s = [], { value_is_output: r = !1 } = e, { choices: a } = e, _, { disabled: c = !1 } = e, { show_label: u } = e, { container: d = !0 } = e, { allow_custom_value: h = !1 } = e, { filterable: p = !0 } = e, f, m = !1, g, v, b = "", q = "", S = !1, C = [], y = null, z = null, L;
  const w = Og();
  o ? (L = a.map((A) => A[1]).indexOf(o), z = L, z === -1 ? (s = o, z = null) : ([b, s] = a[z], q = b), R()) : a.length > 0 && (L = 0, z = 0, [b, o] = a[z], s = o, q = b);
  function I() {
    t(13, g = a.map((A) => A[0])), t(24, v = a.map((A) => A[1]));
  }
  function R() {
    I(), o === void 0 || Array.isArray(o) && o.length === 0 ? (t(9, b = ""), t(11, z = null)) : v.includes(o) ? (t(9, b = g[v.indexOf(o)]), t(11, z = v.indexOf(o))) : h ? (t(9, b = o), t(11, z = null)) : (t(9, b = ""), t(11, z = null)), t(27, L = z);
  }
  function V(A) {
    if (t(11, z = parseInt(A.detail.target.dataset.index)), isNaN(z)) {
      t(11, z = null);
      return;
    }
    t(12, m = !1), t(14, y = null), f.blur();
  }
  function F(A) {
    t(10, C = a.map((N, ie) => ie)), t(12, m = !0), w("focus");
  }
  function $() {
    h ? t(20, o = b) : t(9, b = g[v.indexOf(o)]), t(12, m = !1), t(14, y = null), w("blur");
  }
  function Z(A) {
    t(12, [m, y] = Rg(A, y, C), m, (t(14, y), t(2, a), t(23, _), t(6, h), t(9, b), t(10, C), t(8, f), t(25, q), t(11, z), t(27, L), t(26, S), t(24, v))), A.key === "Enter" && (y !== null ? (t(11, z = y), t(12, m = !1), f.blur(), t(14, y = null)) : g.includes(b) ? (t(11, z = g.indexOf(b)), t(12, m = !1), t(14, y = null), f.blur()) : h && (t(20, o = b), t(11, z = null), t(12, m = !1), t(14, y = null), f.blur()), w("enter", o));
  }
  Vg(() => {
    t(21, r = !1), t(26, S = !0);
  }), Ug(() => {
    f.focus();
  });
  function de() {
    b = this.value, t(9, b), t(11, z), t(27, L), t(26, S), t(2, a), t(24, v);
  }
  function Y(A) {
    Yg[A ? "unshift" : "push"](() => {
      f = A, t(8, f);
    });
  }
  const E = (A) => w("key_up", { key: A.key, input_value: b });
  return i.$$set = (A) => {
    "label" in A && t(0, n = A.label), "info" in A && t(1, l = A.info), "value" in A && t(20, o = A.value), "value_is_output" in A && t(21, r = A.value_is_output), "choices" in A && t(2, a = A.choices), "disabled" in A && t(3, c = A.disabled), "show_label" in A && t(4, u = A.show_label), "container" in A && t(5, d = A.container), "allow_custom_value" in A && t(6, h = A.allow_custom_value), "filterable" in A && t(7, p = A.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && z !== L && z !== null && S && (t(9, [b, o] = a[z], b, (t(20, o), t(11, z), t(27, L), t(26, S), t(2, a), t(24, v))), t(27, L = z), w("select", {
      index: z,
      value: v[z],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && o != s && (R(), Wg(w, o, r), t(22, s = o)), i.$$.dirty[0] & /*choices*/
    4 && I(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== _ && (h || R(), t(23, _ = a), t(10, C = Ia(a, b)), !h && C.length > 0 && t(14, y = C[0]), f == document.activeElement && t(12, m = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && b !== q && (t(10, C = Ia(a, b)), t(25, q = b), !h && C.length > 0 && t(14, y = C[0]));
  }, [
    n,
    l,
    a,
    c,
    u,
    d,
    h,
    p,
    f,
    b,
    C,
    z,
    m,
    g,
    y,
    w,
    V,
    F,
    $,
    Z,
    o,
    r,
    s,
    _,
    v,
    q,
    S,
    L,
    de,
    Y,
    E
  ];
}
class Zg extends Xg {
  constructor(e) {
    super(), jg(
      this,
      e,
      Kg,
      $g,
      Tg,
      {
        label: 0,
        info: 1,
        value: 20,
        value_is_output: 21,
        choices: 2,
        disabled: 3,
        show_label: 4,
        container: 5,
        allow_custom_value: 6,
        filterable: 7
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: $S,
  attr: KS,
  detach: ZS,
  element: GS,
  init: JS,
  insert: QS,
  noop: xS,
  safe_not_equal: eq,
  toggle_class: tq
} = window.__gradio__svelte__internal, {
  SvelteComponent: nq,
  add_flush_callback: iq,
  assign: lq,
  bind: oq,
  binding_callbacks: sq,
  check_outros: aq,
  create_component: rq,
  destroy_component: _q,
  detach: cq,
  empty: fq,
  get_spread_object: uq,
  get_spread_update: dq,
  group_outros: hq,
  init: mq,
  insert: gq,
  mount_component: pq,
  safe_not_equal: bq,
  space: wq,
  transition_in: vq,
  transition_out: kq
} = window.__gradio__svelte__internal, {
  SvelteComponent: Gg,
  append: lt,
  attr: Kn,
  check_outros: $o,
  create_component: qn,
  destroy_component: zn,
  detach: oi,
  element: qt,
  group_outros: Ko,
  init: Jg,
  insert: si,
  listen: Qg,
  mount_component: Dn,
  safe_not_equal: xg,
  set_style: Zn,
  space: di,
  text: os,
  toggle_class: Ta,
  transition_in: We,
  transition_out: Je
} = window.__gradio__svelte__internal, { createEventDispatcher: ep } = window.__gradio__svelte__internal, { onMount: tp } = window.__gradio__svelte__internal;
function Fa(i) {
  let e, t, n, l, o, s, r;
  const a = [ip, np], _ = [];
  function c(u, d) {
    return (
      /*labelDetailLock*/
      u[2] ? 0 : 1
    );
  }
  return n = c(i), l = _[n] = a[n](i), {
    c() {
      e = qt("div"), t = qt("button"), l.c(), Kn(t, "class", "icon svelte-d9x7u0"), Kn(t, "aria-label", "Lock label detail"), Ta(
        t,
        "selected",
        /*labelDetailLock*/
        i[2] === !0
      ), Zn(e, "margin-right", "8px");
    },
    m(u, d) {
      si(u, e, d), lt(e, t), _[n].m(t, null), o = !0, s || (r = Qg(
        t,
        "click",
        /*onLockClick*/
        i[9]
      ), s = !0);
    },
    p(u, d) {
      let h = n;
      n = c(u), n !== h && (Ko(), Je(_[h], 1, 1, () => {
        _[h] = null;
      }), $o(), l = _[n], l || (l = _[n] = a[n](u), l.c()), We(l, 1), l.m(t, null)), (!o || d & /*labelDetailLock*/
      4) && Ta(
        t,
        "selected",
        /*labelDetailLock*/
        u[2] === !0
      );
    },
    i(u) {
      o || (We(l), o = !0);
    },
    o(u) {
      Je(l), o = !1;
    },
    d(u) {
      u && oi(e), _[n].d(), s = !1, r();
    }
  };
}
function np(i) {
  let e, t;
  return e = new I0({}), {
    c() {
      qn(e.$$.fragment);
    },
    m(n, l) {
      Dn(e, n, l), t = !0;
    },
    i(n) {
      t || (We(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Je(e.$$.fragment, n), t = !1;
    },
    d(n) {
      zn(e, n);
    }
  };
}
function ip(i) {
  let e, t;
  return e = new M0({}), {
    c() {
      qn(e.$$.fragment);
    },
    m(n, l) {
      Dn(e, n, l), t = !0;
    },
    i(n) {
      t || (We(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Je(e.$$.fragment, n), t = !1;
    },
    d(n) {
      zn(e, n);
    }
  };
}
function lp(i) {
  let e;
  return {
    c() {
      e = os("Cancel");
    },
    m(t, n) {
      si(t, e, n);
    },
    d(t) {
      t && oi(e);
    }
  };
}
function Pa(i) {
  let e, t, n;
  return t = new Fo({
    props: {
      variant: "stop",
      $$slots: { default: [op] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[14]
  ), {
    c() {
      e = qt("div"), qn(t.$$.fragment), Zn(e, "margin-right", "8px");
    },
    m(l, o) {
      si(l, e, o), Dn(t, e, null), n = !0;
    },
    p(l, o) {
      const s = {};
      o & /*$$scope*/
      262144 && (s.$$scope = { dirty: o, ctx: l }), t.$set(s);
    },
    i(l) {
      n || (We(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Je(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && oi(e), zn(t);
    }
  };
}
function op(i) {
  let e;
  return {
    c() {
      e = os("Remove");
    },
    m(t, n) {
      si(t, e, n);
    },
    d(t) {
      t && oi(e);
    }
  };
}
function sp(i) {
  let e;
  return {
    c() {
      e = os("OK");
    },
    m(t, n) {
      si(t, e, n);
    },
    d(t) {
      t && oi(e);
    }
  };
}
function ap(i) {
  let e, t, n, l, o, s, r, a, _, c, u, d, h, p, f, m, g, v = !/*showRemove*/
  i[4] && Fa(i);
  s = new Zg({
    props: {
      value: (
        /*currentLabel*/
        i[0]
      ),
      label: "Label",
      choices: (
        /*choices*/
        i[3]
      ),
      show_label: !1,
      allow_custom_value: !0
    }
  }), s.$on(
    "change",
    /*onDropDownChange*/
    i[6]
  ), s.$on(
    "enter",
    /*onDropDownEnter*/
    i[8]
  ), _ = new tg({
    props: {
      value: (
        /*currentColor*/
        i[1]
      ),
      label: "Color",
      show_label: !1
    }
  }), _.$on(
    "change",
    /*onColorChange*/
    i[7]
  ), d = new Fo({
    props: {
      $$slots: { default: [lp] },
      $$scope: { ctx: i }
    }
  }), d.$on(
    "click",
    /*click_handler*/
    i[13]
  );
  let b = (
    /*showRemove*/
    i[4] && Pa(i)
  );
  return m = new Fo({
    props: {
      variant: "primary",
      $$slots: { default: [sp] },
      $$scope: { ctx: i }
    }
  }), m.$on(
    "click",
    /*click_handler_2*/
    i[15]
  ), {
    c() {
      e = qt("div"), t = qt("div"), n = qt("span"), v && v.c(), l = di(), o = qt("div"), qn(s.$$.fragment), r = di(), a = qt("div"), qn(_.$$.fragment), c = di(), u = qt("div"), qn(d.$$.fragment), h = di(), b && b.c(), p = di(), f = qt("div"), qn(m.$$.fragment), Zn(o, "margin-right", "10px"), Zn(a, "margin-right", "40px"), Zn(a, "margin-bottom", "8px"), Zn(u, "margin-right", "8px"), Kn(n, "class", "model-content svelte-d9x7u0"), Kn(t, "class", "modal-container svelte-d9x7u0"), Kn(e, "class", "modal svelte-d9x7u0"), Kn(e, "id", "model-box-edit");
    },
    m(q, S) {
      si(q, e, S), lt(e, t), lt(t, n), v && v.m(n, null), lt(n, l), lt(n, o), Dn(s, o, null), lt(n, r), lt(n, a), Dn(_, a, null), lt(n, c), lt(n, u), Dn(d, u, null), lt(n, h), b && b.m(n, null), lt(n, p), lt(n, f), Dn(m, f, null), g = !0;
    },
    p(q, [S]) {
      /*showRemove*/
      q[4] ? v && (Ko(), Je(v, 1, 1, () => {
        v = null;
      }), $o()) : v ? (v.p(q, S), S & /*showRemove*/
      16 && We(v, 1)) : (v = Fa(q), v.c(), We(v, 1), v.m(n, l));
      const C = {};
      S & /*currentLabel*/
      1 && (C.value = /*currentLabel*/
      q[0]), S & /*choices*/
      8 && (C.choices = /*choices*/
      q[3]), s.$set(C);
      const y = {};
      S & /*currentColor*/
      2 && (y.value = /*currentColor*/
      q[1]), _.$set(y);
      const z = {};
      S & /*$$scope*/
      262144 && (z.$$scope = { dirty: S, ctx: q }), d.$set(z), /*showRemove*/
      q[4] ? b ? (b.p(q, S), S & /*showRemove*/
      16 && We(b, 1)) : (b = Pa(q), b.c(), We(b, 1), b.m(n, p)) : b && (Ko(), Je(b, 1, 1, () => {
        b = null;
      }), $o());
      const L = {};
      S & /*$$scope*/
      262144 && (L.$$scope = { dirty: S, ctx: q }), m.$set(L);
    },
    i(q) {
      g || (We(v), We(s.$$.fragment, q), We(_.$$.fragment, q), We(d.$$.fragment, q), We(b), We(m.$$.fragment, q), g = !0);
    },
    o(q) {
      Je(v), Je(s.$$.fragment, q), Je(_.$$.fragment, q), Je(d.$$.fragment, q), Je(b), Je(m.$$.fragment, q), g = !1;
    },
    d(q) {
      q && oi(e), v && v.d(), zn(s), zn(_), zn(d), b && b.d(), zn(m);
    }
  };
}
function rp(i, e, t) {
  let { label: n = "" } = e, { currentLabel: l = "" } = e, { choices: o = [] } = e, { choicesColors: s = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: _ = !0 } = e, { labelDetailLock: c = !1 } = e;
  const u = ep();
  function d(S) {
    u("change", {
      label: l,
      color: a,
      lock: c,
      ret: S
      // -1: remove, 0: cancel, 1: change
    });
  }
  function h(S) {
    const { detail: C } = S;
    let y = C;
    Number.isInteger(y) ? (Array.isArray(s) && y < s.length && t(1, a = s[y]), Array.isArray(o) && y < o.length && t(0, l = o[y][0])) : t(0, l = y);
  }
  function p(S) {
    const { detail: C } = S;
    t(1, a = C);
  }
  function f(S) {
    h(S), d(1);
  }
  function m(S) {
    t(2, c = !c);
  }
  function g(S) {
    switch (S.key.toLowerCase()) {
      case "enter":
        d(1);
        break;
      case "escape":
        d(0);
        break;
    }
  }
  tp(() => (document.addEventListener("keydown", g), t(0, l = n), t(1, a = r), () => {
    document.removeEventListener("keydown", g);
  }));
  const v = () => d(0), b = () => d(-1), q = () => d(1);
  return i.$$set = (S) => {
    "label" in S && t(10, n = S.label), "currentLabel" in S && t(0, l = S.currentLabel), "choices" in S && t(3, o = S.choices), "choicesColors" in S && t(11, s = S.choicesColors), "color" in S && t(12, r = S.color), "currentColor" in S && t(1, a = S.currentColor), "showRemove" in S && t(4, _ = S.showRemove), "labelDetailLock" in S && t(2, c = S.labelDetailLock);
  }, [
    l,
    a,
    c,
    o,
    _,
    d,
    h,
    p,
    f,
    m,
    n,
    s,
    r,
    v,
    b,
    q
  ];
}
class ss extends Gg {
  constructor(e) {
    super(), Jg(this, e, rp, ap, xg, {
      label: 10,
      currentLabel: 0,
      choices: 3,
      choicesColors: 11,
      color: 12,
      currentColor: 1,
      showRemove: 4,
      labelDetailLock: 2
    });
  }
}
const Se = (i, e, t) => Math.min(Math.max(i, e), t);
function Co(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, l, o] = t;
  return `rgba(${n}, ${l}, ${o}, ${e})`;
}
class yo {
  constructor(e, t, n, l, o, s, r, a, _, c, u, d, h, p = "rgb(255, 255, 255)", f = 0.5, m = 25, g = 8, v = 2, b = 4, q = 1) {
    this.resizeHandles = [], this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (S) => {
      if (this.isDragging && this.pointersCache.size === 1) {
        let C = (S.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, y = (S.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const z = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, L = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        C = Se(C, -this._xmin, z - this._xmax), y = Se(y, -this._ymin, L - this._ymax), this._xmin += C, this._ymin += y, this._xmax += C, this._ymax += y, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (S) => {
      if (this.isCreating && this.pointersCache.size === 1) {
        let [C, y] = this.toBoxCoordinates(S.clientX, S.clientY);
        C = (C - this.offsetMouseX) / this.canvasWindow.scale, y = (y - this.offsetMouseY) / this.canvasWindow.scale, C > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = C, this.creatingAnchorX = "xmin") : C > this._xmin && C < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = C : C > this._xmin && C < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = C : C < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = C, this.creatingAnchorX = "xmax"), y > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = y, this.creatingAnchorY = "ymin") : y > this._ymin && y < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = y : y > this._ymin && y < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = y : y < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = y, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (S) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const C = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, y = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = Se(this._xmin, 0, C), this._ymin = Se(this._ymin, 0, y), this._xmax = Se(this._xmax, 0, C), this._ymax = Se(this._ymax, 0, y), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (S) => {
      if (this.isResizing && this.pointersCache.size === 1) {
        const C = S.clientX, y = S.clientY, z = (C - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, L = (y - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, w = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, I = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += z, this._ymin += L, this._xmin = Se(this._xmin, 0, this._xmax), this._ymin = Se(this._ymin, 0, this._ymax);
            break;
          case 1:
            this._xmax += z, this._ymin += L, this._xmax = Se(this._xmax, this._xmin, w), this._ymin = Se(this._ymin, 0, this._ymax);
            break;
          case 2:
            this._xmax += z, this._ymax += L, this._xmax = Se(this._xmax, this._xmin, w), this._ymax = Se(this._ymax, this._ymin, I);
            break;
          case 3:
            this._xmin += z, this._ymax += L, this._xmin = Se(this._xmin, 0, this._xmax), this._ymax = Se(this._ymax, this._ymin, I);
            break;
          case 4:
            this._ymin += L, this._ymin = Se(this._ymin, 0, this._ymax);
            break;
          case 5:
            this._xmax += z, this._xmax = Se(this._xmax, this._xmin, w);
            break;
          case 6:
            this._ymax += L, this._ymax = Se(this._ymax, this._ymin, I);
            break;
          case 7:
            this._xmin += z, this._xmin = Se(this._xmin, 0, this._xmax);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.pointersCache = l, this.canvasXmin = o, this.canvasYmin = s, this.canvasXmax = r, this.canvasYmax = a, this.scaleFactor = q, this.label = _, this.isDragging = !1, this.isCreating = !1, this._xmin = c, this._ymin = u, this._xmax = d, this._ymax = h, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = g, this.thickness = v, this.selectedThickness = b, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = m, this.color = p, this.alpha = f, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
  }
  toJSON() {
    return {
      label: this.label,
      xmin: this._xmin,
      ymin: this._ymin,
      xmax: this._xmax,
      ymax: this._ymax,
      color: this.color,
      scaleFactor: this.scaleFactor
    };
  }
  setSelected(e) {
    this.isSelected = e;
  }
  setScaleFactor(e) {
    const t = e / this.scaleFactor;
    this._xmin = Math.round(this._xmin * t), this._ymin = Math.round(this._ymin * t), this._xmax = Math.round(this._xmax * t), this._ymax = Math.round(this._ymax * t), this.applyUserScale(), this.scaleFactor = e;
  }
  updateHandles() {
    const e = this.resizeHandleSize / 2, t = this.getWidth(), n = this.getHeight();
    this.resizeHandles = [
      {
        // Top left
        xmin: this.xmin - e,
        ymin: this.ymin - e,
        xmax: this.xmin + e,
        ymax: this.ymin + e,
        cursor: "nwse-resize"
      },
      {
        // Top right
        xmin: this.xmax - e,
        ymin: this.ymin - e,
        xmax: this.xmax + e,
        ymax: this.ymin + e,
        cursor: "nesw-resize"
      },
      {
        // Bottom right
        xmin: this.xmax - e,
        ymin: this.ymax - e,
        xmax: this.xmax + e,
        ymax: this.ymax + e,
        cursor: "nwse-resize"
      },
      {
        // Bottom left
        xmin: this.xmin - e,
        ymin: this.ymax - e,
        xmax: this.xmin + e,
        ymax: this.ymax + e,
        cursor: "nesw-resize"
      },
      {
        // Top center
        xmin: this.xmin + t / 2 - e,
        ymin: this.ymin - e,
        xmax: this.xmin + t / 2 + e,
        ymax: this.ymin + e,
        cursor: "ns-resize"
      },
      {
        // Right center
        xmin: this.xmax - e,
        ymin: this.ymin + n / 2 - e,
        xmax: this.xmax + e,
        ymax: this.ymin + n / 2 + e,
        cursor: "ew-resize"
      },
      {
        // Bottom center
        xmin: this.xmin + t / 2 - e,
        ymin: this.ymax - e,
        xmax: this.xmin + t / 2 + e,
        ymax: this.ymax + e,
        cursor: "ns-resize"
      },
      {
        // Left center
        xmin: this.xmin - e,
        ymin: this.ymin + n / 2 - e,
        xmax: this.xmin + e,
        ymax: this.ymin + n / 2 + e,
        cursor: "ew-resize"
      }
    ];
  }
  getWidth() {
    return this.xmax - this.xmin;
  }
  getHeight() {
    return this.ymax - this.ymin;
  }
  getArea() {
    return this.getWidth() * this.getHeight();
  }
  toCanvasCoordinates(e, t) {
    return e = e + this.canvasXmin, t = t + this.canvasYmin, [e, t];
  }
  toBoxCoordinates(e, t) {
    return e = e - this.canvasXmin, t = t - this.canvasYmin, [e, t];
  }
  applyUserScale() {
    this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.updateHandles();
  }
  updateOffset() {
    this.canvasXmin = this.canvasWindow.offsetX, this.canvasYmin = this.canvasWindow.offsetY, this.canvasXmax = this.canvasWindow.offsetX + this.canvasWindow.imageWidth * this.canvasWindow.scale, this.canvasYmax = this.canvasWindow.offsetY + this.canvasWindow.imageHeight * this.canvasWindow.scale, this.applyUserScale();
  }
  render(e) {
    let t, n;
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = Co(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = Co(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const l = e.measureText(this.label).width + 10, o = 20;
      let s = this.xmin, r = this.ymin - o;
      e.fillStyle = "white", [s, r] = this.toCanvasCoordinates(s, r), e.fillRect(s, r, l, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(s, r, l, o), e.fillStyle = "black", e.fillText(this.label, s + 5, r + 15);
    }
    e.fillStyle = Co(this.color, 1);
    for (const l of this.resizeHandles)
      [t, n] = this.toCanvasCoordinates(l.xmin, l.ymin), e.fillRect(
        t,
        n,
        l.xmax - l.xmin,
        l.ymax - l.ymin
      );
  }
  startDrag(e) {
    this.isDragging = !0, this.offsetMouseX = e.clientX - this._xmin * this.canvasWindow.scale, this.offsetMouseY = e.clientY - this._ymin * this.canvasWindow.scale, document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  isPointInsideBox(e, t) {
    return [e, t] = this.toBoxCoordinates(e, t), e >= this.xmin && e <= this.xmax && t >= this.ymin && t <= this.ymax;
  }
  indexOfPointInsideHandle(e, t) {
    [e, t] = this.toBoxCoordinates(e, t);
    for (let n = 0; n < this.resizeHandles.length; n++) {
      const l = this.resizeHandles[n];
      if (e >= l.xmin && e <= l.xmax && t >= l.ymin && t <= l.ymax)
        return this.resizingHandleIndex = n, n;
    }
    return -1;
  }
  startCreating(e, t, n) {
    this.isCreating = !0, this.offsetMouseX = t, this.offsetMouseY = n, document.addEventListener("pointermove", this.handleCreating), document.addEventListener("pointerup", this.stopCreating);
  }
  startResize(e, t) {
    this.resizingHandleIndex = e, this.isResizing = !0, this.offsetMouseX = t.clientX - this.resizeHandles[e].xmin, this.offsetMouseY = t.clientY - this.resizeHandles[e].ymin, document.addEventListener("pointermove", this.handleResize), document.addEventListener("pointerup", this.stopResize);
  }
  onRotate(e) {
    const [t, n, l, o] = [
      this._xmin,
      this._xmax,
      this._ymin,
      this._ymax
    ];
    switch (e) {
      case 1:
        this._xmin = this.canvasWindow.imageWidth - o, this._xmax = this.canvasWindow.imageWidth - l, this._ymin = t, this._ymax = n;
        break;
      case -1:
        this._xmin = l, this._xmax = o, this._ymin = this.canvasWindow.imageHeight - n, this._ymax = this.canvasWindow.imageHeight - t;
        break;
    }
    this.applyUserScale();
  }
}
const Ua = (i, e, t) => Math.min(Math.max(i, e), t);
function Oa(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, l, o] = t;
  return `rgba(${n}, ${l}, ${o}, ${e})`;
}
class So {
  constructor(e, t, n, l, o, s, r, a, _, c, u = "rgb(255, 255, 255)", d = 0.6, h = 6, p = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (f) => {
      if (this.isDragging && this.pointersCache.size === 1) {
        let m = (f.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._x, g = (f.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._y;
        const v = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, b = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale, q = this.radius / this.canvasWindow.scale;
        m = Ua(m, -this._x + q, v - this._x - q), g = Ua(g, -this._y + q, b - this._y - q), this._x += m, this._y += g, this.applyUserScale(), this.renderCallBack();
      }
    }, this.renderCallBack = e, this.canvasWindow = t, this.pointersCache = n, this.canvasXmin = l, this.canvasYmin = o, this.canvasXmax = s, this.canvasYmax = r, this.scaleFactor = p, this.label = a, this.isDragging = !1, this.isSelected = !1, this._x = _, this._y = c, this.x = this._x * this.canvasWindow.scale, this.y = this._y * this.canvasWindow.scale, this.color = u, this.alpha = d, this.radius = h, this.offsetMouseX = 0, this.offsetMouseY = 0;
  }
  toJSON() {
    return {
      label: this.label,
      x: this._x,
      y: this._y,
      color: this.color,
      scaleFactor: this.scaleFactor
    };
  }
  setSelected(e) {
    this.isSelected = e;
  }
  setScaleFactor(e) {
    const t = e / this.scaleFactor;
    this._x = Math.round(this._x * t), this._y = Math.round(this._y * t), this.applyUserScale(), this.scaleFactor = e;
  }
  applyUserScale() {
    this.x = this._x * this.canvasWindow.scale, this.y = this._y * this.canvasWindow.scale;
  }
  updateOffset() {
    this.canvasXmin = this.canvasWindow.offsetX, this.canvasYmin = this.canvasWindow.offsetY, this.canvasXmax = this.canvasWindow.offsetX + this.canvasWindow.imageWidth * this.canvasWindow.scale, this.canvasYmax = this.canvasWindow.offsetY + this.canvasWindow.imageHeight * this.canvasWindow.scale, this.applyUserScale();
  }
  toCanvasCoordinates(e, t) {
    return e = e + this.canvasXmin, t = t + this.canvasYmin, [e, t];
  }
  toPointCoordinates(e, t) {
    return e = e - this.canvasXmin, t = t - this.canvasYmin, [e, t];
  }
  isPointInsidePoint(e, t) {
    [e, t] = this.toPointCoordinates(e, t);
    const n = this.radius * (this.isSelected ? 1.4 : 1), l = e - this.x, o = t - this.y;
    return l * l + o * o <= n * n;
  }
  render(e) {
    this.updateOffset();
    const [t, n] = this.toCanvasCoordinates(this.x, this.y), l = this.radius * (this.isSelected ? 1.4 : 1);
    if (e.beginPath(), e.arc(t, n, l, 0, Math.PI * 2), e.fillStyle = Oa(this.color, this.alpha), e.fill(), e.lineWidth = this.isSelected ? 2 : 1, e.strokeStyle = Oa(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      e.font = this.isSelected ? "bold 14px Arial" : "12px Arial";
      const o = e.measureText(this.label).width + 10, s = 20, r = t - o / 2, a = n - l - s - 4;
      e.fillStyle = "white", e.fillRect(r, a, o, s), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(r, a, o, s), e.fillStyle = "black", e.fillText(this.label, r + 5, a + 15);
    }
  }
  startDrag(e) {
    this.isDragging = !0, this.offsetMouseX = e.clientX - this._x * this.canvasWindow.scale, this.offsetMouseY = e.clientY - this._y * this.canvasWindow.scale, document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  onRotate(e) {
    const [t, n] = [this._x, this._y];
    switch (e) {
      case 1:
        this._x = this.canvasWindow.imageWidth - n, this._y = t;
        break;
      case -1:
        this._x = n, this._y = this.canvasWindow.imageHeight - t;
        break;
    }
    this.applyUserScale();
  }
}
const it = [
  "rgb(255, 168, 77)",
  "rgb(92, 172, 238)",
  "rgb(255, 99, 71)",
  "rgb(118, 238, 118)",
  "rgb(255, 145, 164)",
  "rgb(0, 191, 255)",
  "rgb(255, 218, 185)",
  "rgb(255, 69, 0)",
  "rgb(34, 139, 34)",
  "rgb(255, 240, 245)",
  "rgb(255, 193, 37)",
  "rgb(255, 193, 7)",
  "rgb(255, 250, 138)"
], Zi = (i, e, t) => Math.min(Math.max(i, e), t);
class _p {
  constructor(e, t) {
    this.stopDrag = () => {
      this.pointersCache.size === 0 ? (this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag)) : this.pointersCache.size === 1 && (this.isDragging = !0, this.startDragX = this.pointersCache.values().next().value.clientX, this.startDragY = this.pointersCache.values().next().value.clientY);
    }, this.handleDrag = (n) => {
      if (this.isDragging && this.pointersCache.size === 1) {
        if (this.scale == 1) {
          this.offsetX = (this.canvasWidth - this.imageWidth) / 2, this.offsetY = 0, this.renderCallBack();
          return;
        }
        let l = n.clientX - this.startDragX, o = n.clientY - this.startDragY;
        this.imageWidth * this.scale > this.canvasWidth ? l = Zi(l, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : l = Zi(l, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? o = Zi(o, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : o = Zi(o, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += l, this.offsetY += o, this.startDragX = n.clientX, this.startDragY = n.clientY, this.renderCallBack();
      }
    }, this.renderCallBack = e, this.pointersCache = t, this.scale = 1, this.offsetX = 0, this.offsetY = 0, this.canvasWidth = 0, this.canvasHeight = 0, this.imageWidth = 0, this.imageHeight = 0, this.imageRotatedWidth = 0, this.imageRotatedHeight = 0, this.isDragging = !1, this.startDragX = 0, this.startDragY = 0, this.orientation = 0;
  }
  startDrag(e) {
    this.isDragging = !0, this.startDragX = e.clientX, this.startDragY = e.clientY, document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  setRotatedImage(e) {
    e !== null && (this.orientation == 0 || this.orientation == 2 ? (this.imageRotatedWidth = e.width, this.imageRotatedHeight = e.height) : (this.imageRotatedWidth = e.height, this.imageRotatedHeight = e.width));
  }
  resize(e, t, n = 0, l = 0) {
    this.canvasWidth == e && this.canvasHeight == t || (this.canvasWidth = e, this.canvasHeight = t, this.scale = 1, this.offsetX = n, this.offsetY = l);
  }
}
const {
  SvelteComponent: cp,
  append: He,
  attr: ae,
  binding_callbacks: Va,
  bubble: qo,
  check_outros: Gn,
  create_component: Dt,
  destroy_component: Bt,
  detach: _n,
  element: mt,
  empty: fp,
  group_outros: Jn,
  init: up,
  insert: cn,
  listen: Re,
  mount_component: Mt,
  noop: C_,
  run_all: y_,
  safe_not_equal: dp,
  set_style: Gi,
  space: zt,
  toggle_class: Pn,
  transition_in: oe,
  transition_out: be
} = window.__gradio__svelte__internal, { onMount: hp, createEventDispatcher: mp } = window.__gradio__svelte__internal;
function Na(i) {
  let e, t, n, l, o, s, r, a, _, c, u, d, h, p, f, m, g, v, b, q;
  n = new Om({}), s = new Qm({}), _ = new s0({});
  let S = (
    /*showRemoveButton*/
    i[0] && $a(i)
  ), C = !/*disableEditBoxes*/
  i[4] && /*labelDetailLock*/
  i[14] && Ka(i);
  return p = new yd({}), g = new rd({}), {
    c() {
      e = mt("span"), t = mt("button"), Dt(n.$$.fragment), l = zt(), o = mt("button"), Dt(s.$$.fragment), r = zt(), a = mt("button"), Dt(_.$$.fragment), c = zt(), S && S.c(), u = zt(), C && C.c(), d = zt(), h = mt("button"), Dt(p.$$.fragment), f = zt(), m = mt("button"), Dt(g.$$.fragment), ae(t, "class", "icon svelte-5zxnwp"), ae(t, "aria-label", "Create box"), ae(t, "title", "Create box (C)"), Pn(
        t,
        "selected",
        /*mode*/
        i[10] === /*Mode*/
        i[7].creation
      ), ae(o, "class", "icon svelte-5zxnwp"), ae(o, "aria-label", "Create point"), ae(o, "title", "Create point (C)"), Pn(
        o,
        "selected",
        /*mode*/
        i[10] === /*Mode*/
        i[7].point
      ), ae(a, "class", "icon svelte-5zxnwp"), ae(a, "aria-label", "Drag boxes"), ae(a, "title", "Drag boxes (D)"), Pn(
        a,
        "selected",
        /*mode*/
        i[10] === /*Mode*/
        i[7].drag
      ), ae(h, "class", "icon svelte-5zxnwp"), ae(h, "aria-label", "Rotate counterclockwise"), ae(h, "title", "Rotate counterclockwise"), ae(m, "class", "icon svelte-5zxnwp"), ae(m, "aria-label", "Rotate clockwise"), ae(m, "title", "Rotate clockwise"), ae(e, "class", "canvas-control svelte-5zxnwp");
    },
    m(y, z) {
      cn(y, e, z), He(e, t), Mt(n, t, null), He(e, l), He(e, o), Mt(s, o, null), He(e, r), He(e, a), Mt(_, a, null), He(e, c), S && S.m(e, null), He(e, u), C && C.m(e, null), He(e, d), He(e, h), Mt(p, h, null), He(e, f), He(e, m), Mt(g, m, null), v = !0, b || (q = [
        Re(
          t,
          "click",
          /*click_handler*/
          i[52]
        ),
        Re(
          o,
          "click",
          /*click_handler_1*/
          i[53]
        ),
        Re(
          a,
          "click",
          /*click_handler_2*/
          i[54]
        ),
        Re(
          h,
          "click",
          /*click_handler_5*/
          i[57]
        ),
        Re(
          m,
          "click",
          /*click_handler_6*/
          i[58]
        )
      ], b = !0);
    },
    p(y, z) {
      (!v || z[0] & /*mode, Mode*/
      1152) && Pn(
        t,
        "selected",
        /*mode*/
        y[10] === /*Mode*/
        y[7].creation
      ), (!v || z[0] & /*mode, Mode*/
      1152) && Pn(
        o,
        "selected",
        /*mode*/
        y[10] === /*Mode*/
        y[7].point
      ), (!v || z[0] & /*mode, Mode*/
      1152) && Pn(
        a,
        "selected",
        /*mode*/
        y[10] === /*Mode*/
        y[7].drag
      ), /*showRemoveButton*/
      y[0] ? S ? (S.p(y, z), z[0] & /*showRemoveButton*/
      1 && oe(S, 1)) : (S = $a(y), S.c(), oe(S, 1), S.m(e, u)) : S && (Jn(), be(S, 1, 1, () => {
        S = null;
      }), Gn()), !/*disableEditBoxes*/
      y[4] && /*labelDetailLock*/
      y[14] ? C ? (C.p(y, z), z[0] & /*disableEditBoxes, labelDetailLock*/
      16400 && oe(C, 1)) : (C = Ka(y), C.c(), oe(C, 1), C.m(e, d)) : C && (Jn(), be(C, 1, 1, () => {
        C = null;
      }), Gn());
    },
    i(y) {
      v || (oe(n.$$.fragment, y), oe(s.$$.fragment, y), oe(_.$$.fragment, y), oe(S), oe(C), oe(p.$$.fragment, y), oe(g.$$.fragment, y), v = !0);
    },
    o(y) {
      be(n.$$.fragment, y), be(s.$$.fragment, y), be(_.$$.fragment, y), be(S), be(C), be(p.$$.fragment, y), be(g.$$.fragment, y), v = !1;
    },
    d(y) {
      y && _n(e), Bt(n), Bt(s), Bt(_), S && S.d(), C && C.d(), Bt(p), Bt(g), b = !1, y_(q);
    }
  };
}
function $a(i) {
  let e, t, n, l, o;
  return t = new h0({}), {
    c() {
      e = mt("button"), Dt(t.$$.fragment), ae(e, "class", "icon svelte-5zxnwp"), ae(e, "aria-label", "Remove box"), ae(e, "title", "Remove box (Del)");
    },
    m(s, r) {
      cn(s, e, r), Mt(t, e, null), n = !0, l || (o = Re(
        e,
        "click",
        /*click_handler_3*/
        i[55]
      ), l = !0);
    },
    p: C_,
    i(s) {
      n || (oe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      be(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && _n(e), Bt(t), l = !1, o();
    }
  };
}
function Ka(i) {
  let e, t, n, l, o;
  return t = new k0({}), {
    c() {
      e = mt("button"), Dt(t.$$.fragment), ae(e, "class", "icon svelte-5zxnwp"), ae(e, "aria-label", "Edit label"), ae(e, "title", "Edit label");
    },
    m(s, r) {
      cn(s, e, r), Mt(t, e, null), n = !0, l || (o = Re(
        e,
        "click",
        /*click_handler_4*/
        i[56]
      ), l = !0);
    },
    p: C_,
    i(s) {
      n || (oe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      be(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && _n(e), Bt(t), l = !1, o();
    }
  };
}
function Za(i) {
  let e, t;
  return e = new ss({
    props: {
      choices: (
        /*choices*/
        i[2]
      ),
      choicesColors: (
        /*choicesColors*/
        i[3]
      ),
      label: (
        /*selectedLabel*/
        i[16]
      ),
      color: (
        /*selectedColor*/
        i[17]
      )
    }
  }), e.$on(
    "change",
    /*onModalEditChange*/
    i[28]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    i[61]
  ), {
    c() {
      Dt(e.$$.fragment);
    },
    m(n, l) {
      Mt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*choices*/
      4 && (o.choices = /*choices*/
      n[2]), l[0] & /*choicesColors*/
      8 && (o.choicesColors = /*choicesColors*/
      n[3]), l[0] & /*selectedLabel*/
      65536 && (o.label = /*selectedLabel*/
      n[16]), l[0] & /*selectedColor*/
      131072 && (o.color = /*selectedColor*/
      n[17]), e.$set(o);
    },
    i(n) {
      t || (oe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      be(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(e, n);
    }
  };
}
function Ga(i) {
  let e, t;
  return e = new ss({
    props: {
      choices: (
        /*choices*/
        i[2]
      ),
      showRemove: !1,
      choicesColors: (
        /*choicesColors*/
        i[3]
      ),
      label: (
        /*selectedLabel*/
        i[16]
      ),
      color: (
        /*selectedColor*/
        i[17]
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        i[14]
      )
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    i[29]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    i[62]
  ), {
    c() {
      Dt(e.$$.fragment);
    },
    m(n, l) {
      Mt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*choices*/
      4 && (o.choices = /*choices*/
      n[2]), l[0] & /*choicesColors*/
      8 && (o.choicesColors = /*choicesColors*/
      n[3]), l[0] & /*selectedLabel*/
      65536 && (o.label = /*selectedLabel*/
      n[16]), l[0] & /*selectedColor*/
      131072 && (o.color = /*selectedColor*/
      n[17]), l[0] & /*labelDetailLock*/
      16384 && (o.labelDetailLock = /*labelDetailLock*/
      n[14]), e.$set(o);
    },
    i(n) {
      t || (oe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      be(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(e, n);
    }
  };
}
function Ja(i) {
  let e, t;
  return e = new ss({
    props: {
      choices: (
        /*choices*/
        i[2]
      ),
      showRemove: !1,
      choicesColors: (
        /*choicesColors*/
        i[3]
      ),
      label: (
        /*defaultLabelCache*/
        i[15].label
      ),
      color: (
        /*defaultLabelCache*/
        i[15].color
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        i[14]
      )
    }
  }), e.$on(
    "change",
    /*onDefaultLabelEditChange*/
    i[30]
  ), e.$on(
    "enter{onDefaultLabelEditChange}",
    /*enter_onDefaultLabelEditChange_handler*/
    i[63]
  ), {
    c() {
      Dt(e.$$.fragment);
    },
    m(n, l) {
      Mt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*choices*/
      4 && (o.choices = /*choices*/
      n[2]), l[0] & /*choicesColors*/
      8 && (o.choicesColors = /*choicesColors*/
      n[3]), l[0] & /*defaultLabelCache*/
      32768 && (o.label = /*defaultLabelCache*/
      n[15].label), l[0] & /*defaultLabelCache*/
      32768 && (o.color = /*defaultLabelCache*/
      n[15].color), l[0] & /*labelDetailLock*/
      16384 && (o.labelDetailLock = /*labelDetailLock*/
      n[14]), e.$set(o);
    },
    i(n) {
      t || (oe(e.$$.fragment, n), t = !0);
    },
    o(n) {
      be(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(e, n);
    }
  };
}
function gp(i) {
  let e, t, n, l, o, s, r, a, _, c, u, d = (
    /*interactive*/
    i[1] && Na(i)
  ), h = (
    /*editModalVisible*/
    i[11] && Za(i)
  ), p = (
    /*newModalVisible*/
    i[12] && Ga(i)
  ), f = (
    /*editDefaultLabelVisible*/
    i[13] && Ja(i)
  );
  return {
    c() {
      e = mt("div"), t = mt("div"), n = mt("canvas"), l = zt(), d && d.c(), o = zt(), h && h.c(), s = zt(), p && p.c(), r = zt(), f && f.c(), a = fp(), Gi(
        n,
        "height",
        /*height*/
        i[5]
      ), Gi(
        n,
        "width",
        /*width*/
        i[6]
      ), ae(n, "class", "canvas-annotator svelte-5zxnwp"), ae(t, "class", "canvas-container svelte-5zxnwp"), ae(e, "class", "annotator-container"), ae(e, "tabindex", "0");
    },
    m(m, g) {
      cn(m, e, g), He(e, t), He(t, n), i[51](n), He(e, l), d && d.m(e, null), i[59](e), cn(m, o, g), h && h.m(m, g), cn(m, s, g), p && p.m(m, g), cn(m, r, g), f && f.m(m, g), cn(m, a, g), _ = !0, c || (u = [
        Re(
          n,
          "pointerdown",
          /*handlePointerDown*/
          i[18]
        ),
        Re(
          n,
          "pointerup",
          /*handlePointerUp*/
          i[19]
        ),
        Re(
          n,
          "pointermove",
          /*handlePointerMove*/
          i[21]
        ),
        Re(
          n,
          "pointercancel",
          /*handlePointerCancel*/
          i[20]
        ),
        Re(
          n,
          "dblclick",
          /*handleDoubleClick*/
          i[27]
        ),
        Re(
          n,
          "wheel",
          /*handleMouseWheel*/
          i[23]
        ),
        Re(
          e,
          "keydown",
          /*handleKeyPress*/
          i[22]
        ),
        Re(
          e,
          "click",
          /*click_handler_7*/
          i[60]
        )
      ], c = !0);
    },
    p(m, g) {
      (!_ || g[0] & /*height*/
      32) && Gi(
        n,
        "height",
        /*height*/
        m[5]
      ), (!_ || g[0] & /*width*/
      64) && Gi(
        n,
        "width",
        /*width*/
        m[6]
      ), /*interactive*/
      m[1] ? d ? (d.p(m, g), g[0] & /*interactive*/
      2 && oe(d, 1)) : (d = Na(m), d.c(), oe(d, 1), d.m(e, null)) : d && (Jn(), be(d, 1, 1, () => {
        d = null;
      }), Gn()), /*editModalVisible*/
      m[11] ? h ? (h.p(m, g), g[0] & /*editModalVisible*/
      2048 && oe(h, 1)) : (h = Za(m), h.c(), oe(h, 1), h.m(s.parentNode, s)) : h && (Jn(), be(h, 1, 1, () => {
        h = null;
      }), Gn()), /*newModalVisible*/
      m[12] ? p ? (p.p(m, g), g[0] & /*newModalVisible*/
      4096 && oe(p, 1)) : (p = Ga(m), p.c(), oe(p, 1), p.m(r.parentNode, r)) : p && (Jn(), be(p, 1, 1, () => {
        p = null;
      }), Gn()), /*editDefaultLabelVisible*/
      m[13] ? f ? (f.p(m, g), g[0] & /*editDefaultLabelVisible*/
      8192 && oe(f, 1)) : (f = Ja(m), f.c(), oe(f, 1), f.m(a.parentNode, a)) : f && (Jn(), be(f, 1, 1, () => {
        f = null;
      }), Gn());
    },
    i(m) {
      _ || (oe(d), oe(h), oe(p), oe(f), _ = !0);
    },
    o(m) {
      be(d), be(h), be(p), be(f), _ = !1;
    },
    d(m) {
      m && (_n(e), _n(o), _n(s), _n(r), _n(a)), i[51](null), d && d.d(), i[59](null), h && h.d(m), p && p.d(m), f && f.d(m), c = !1, y_(u);
    }
  };
}
const Qa = 100;
function on(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function zo(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), l = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | l).toString(16).slice(1);
}
function pp(i, e, t) {
  var n, l, o, s, r;
  (function(k) {
    k[k.creation = 0] = "creation", k[k.point = 1] = "point", k[k.drag = 2] = "drag";
  })(r || (r = {}));
  let { imageUrl: a = null } = e, { interactive: _ } = e, { boxAlpha: c = 0.5 } = e, { boxMinSize: u = 10 } = e, { handleSize: d } = e, { boxThickness: h } = e, { boxSelectedThickness: p } = e, { value: f } = e, { choices: m = [] } = e, { choicesColors: g = [] } = e, { disableEditBoxes: v = !1 } = e, { height: b = "100%" } = e, { width: q = "100%" } = e, { singleBox: S = !1 } = e, { showRemoveButton: C = null } = e, { handlesCursor: y = !0 } = e, { useDefaultLabel: z = !1 } = e, { enableKeyboardShortcuts: L = !0 } = e;
  C === null && (C = v);
  let w, I, R, V = null, F = -1, $ = -1, Z = null, de = r.drag, Y = /* @__PURE__ */ new Map(), E = new _p(ne, Y);
  f !== null && f.boxes.length == 0 && f.points.length == 0 && (de = r.creation);
  let A = 0, N = 0, ie = 0, x = 0, re = 1, X = 0, te = 0, M = !1, P = !1, le = !1, se = !1, _e = z, D = { label: "", color: "" }, Ve = "", et = "", ce = { x: 0, y: 0, distance: 0 };
  const fe = mp();
  function ne() {
    if (R) {
      if (R.clearRect(0, 0, w.width, w.height), R.save(), R.translate(E.offsetX, E.offsetY), R.scale(E.scale, E.scale), V !== null) {
        switch (f.orientation) {
          case 0:
            R.drawImage(V, 0, 0, X, te);
            break;
          case 1:
            R.translate(X, 0), R.rotate(Math.PI / 2), R.drawImage(V, 0, 0, te, X);
            break;
          case 2:
            R.translate(X, te), R.rotate(Math.PI), R.drawImage(V, 0, 0, X, te);
            break;
          case 3:
            R.translate(0, te), R.rotate(-Math.PI / 2), R.drawImage(V, 0, 0, te, X);
            break;
        }
        R.restore();
      }
      for (const k of f.boxes.slice().reverse())
        k.render(R);
      for (const k of f.points.slice().reverse())
        k.render(R);
    }
  }
  function bt() {
    ne(), fe("change");
  }
  function Zt(k) {
    t(50, Z = k >= 0 ? "box" : null), t(48, F = k), t(49, $ = -1), f.boxes.forEach((W) => {
      W.setSelected(!1);
    }), f.points.forEach((W) => {
      W.setSelected(!1);
    }), k >= 0 && k < f.boxes.length && f.boxes[k].setSelected(!0), ne();
  }
  function hn(k) {
    t(50, Z = k >= 0 ? "point" : null), t(49, $ = k), t(48, F = -1), f.boxes.forEach((W) => {
      W.setSelected(!1);
    }), f.points.forEach((W) => {
      W.setSelected(!1);
    }), k >= 0 && k < f.points.length && f.points[k].setSelected(!0), ne();
  }
  const Li = (k, W) => {
    const j = Math.sqrt(Math.pow(k.clientX - W.clientX, 2) + Math.pow(k.clientY - W.clientY, 2));
    return j < Qa ? Qa : j;
  };
  function Bl(k) {
    if (_) {
      if (k.preventDefault(), w.setPointerCapture(k.pointerId), Y.set(k.pointerId, k), Y.size == 1)
        de === r.creation ? Xn(k) : de === r.point ? Ll(k) : de === r.drag && Wl(k);
      else if (Y.size == 2) {
        E.isDragging = !1, f.boxes.forEach((kt) => {
          kt.isCreating = !1, kt.isDragging = !1, kt.isResizing = !1;
        }), f.points.forEach((kt) => {
          kt.isDragging = !1;
        });
        const W = Array.from(Y.values()), j = W[0], H = W[1], K = Li(j, H), G = w.getBoundingClientRect(), ue = (j.clientX + H.clientX) / 2 - G.left, It = (j.clientY + H.clientY) / 2 - G.top;
        ce.distance = K, ce.x = ue, ce.y = It;
      }
    }
  }
  function Ml(k) {
    const W = w.getBoundingClientRect(), j = k.clientX - W.left, H = k.clientY - W.top;
    let K = !1;
    for (const [G, ue] of f.boxes.entries()) {
      const It = ue.indexOfPointInsideHandle(j, H);
      if (It >= 0)
        return K = !0, Zt(G), ue.startResize(It, k), !0;
    }
    for (const [G, ue] of f.boxes.entries())
      if (ue.isPointInsideBox(j, H))
        return K = !0, Zt(G), ue.startDrag(k), !0;
    return K;
  }
  function El(k) {
    _ && (Y.delete(k.pointerId), w.releasePointerCapture(k.pointerId), E.isDragging && E.stopDrag(), se && (se = !1, E_()), fe("change"));
  }
  function B(k) {
    _ && (Y.delete(k.pointerId), w.releasePointerCapture(k.pointerId), E.isDragging && E.stopDrag(), fe("change"));
  }
  function wt(k) {
    if (_)
      if (k.preventDefault(), k.pointerType === "mouse") {
        if (!y || f === null || de !== r.drag)
          return;
        const W = w.getBoundingClientRect(), j = k.clientX - W.left, H = k.clientY - W.top;
        for (const [K, G] of f.boxes.entries()) {
          const ue = G.indexOfPointInsideHandle(j, H);
          if (ue >= 0) {
            t(8, w.style.cursor = G.resizeHandles[ue].cursor, w);
            return;
          }
        }
        t(8, w.style.cursor = "default", w);
      } else {
        if (!Y.has(k.pointerId))
          return;
        if (Y.set(k.pointerId, k), Y.size === 2) {
          const W = Array.from(Y.values()), j = W[0], H = W[1], K = Li(j, H), G = w.getBoundingClientRect(), ue = (j.clientX + H.clientX) / 2 - G.left, It = (j.clientY + H.clientY) / 2 - G.top, kt = parseFloat((E.scale * (K / ce.distance)).toFixed(2)), Ye = kt < 1 ? 1 : kt, fs = Ye / E.scale;
          E.offsetX = ce.x - (ce.x - E.offsetX) * fs, E.offsetY = ce.y - (ce.y - E.offsetY) * fs;
          const J_ = ue - ce.x, Q_ = It - ce.y;
          E.offsetX += J_, E.offsetY += Q_, E.scale = Ye, ce.x = ue, ce.y = It, ce.distance = K, ne();
        }
      }
  }
  function Ce() {
    const k = w.width / X, W = w.height / te, j = Math.min(k, W);
    E.scale = j, E.offsetX = (w.width - X * j) / 2, E.offsetY = (w.height - te * j) / 2, ne();
  }
  function vt(k) {
    if (!L || k.target !== I || !_)
      return;
    const W = k.key.toLowerCase();
    switch ((/* @__PURE__ */ new Set(["delete", "b", "d", "e", "p", " "])).has(W) && (k.preventDefault(), k.stopPropagation()), W) {
      case "delete":
        Gt();
        break;
      case "b":
        Yt();
        break;
      case "p":
        rt();
        break;
      case "d":
        At();
        break;
      case "e":
        rs();
        break;
      case " ":
        Ce();
        break;
    }
  }
  function Ne() {
    setTimeout(
      () => {
        I == null || I.focus();
      },
      0
    );
  }
  function Le(k) {
    if (!_)
      return;
    k.preventDefault();
    const W = 1 / (1 + k.deltaY / 1e3 * 0.5), j = parseFloat((E.scale * W).toFixed(2)), H = j < 1 ? 1 : j, K = w.getBoundingClientRect(), G = k.clientX - K.left, ue = k.clientY - K.top, It = (G - E.offsetX) / E.scale, kt = (ue - E.offsetY) / E.scale;
    if (E.offsetX = G - It * H, E.offsetY = ue - kt * H, f !== null) {
      for (const Ye of f.boxes)
        Ye.isDragging && (Ye.offsetMouseX = k.clientX - Ye._xmin * H, Ye.offsetMouseY = k.clientY - Ye._ymin * H);
      for (const Ye of f.points)
        Ye.isDragging && (Ye.offsetMouseX = k.clientX - Ye._x * H, Ye.offsetMouseY = k.clientY - Ye._y * H);
    }
    E.scale = H, ne();
  }
  function Xn(k) {
    const W = w.getBoundingClientRect(), j = (k.clientX - W.left - E.offsetX) / re / E.scale, H = (k.clientY - W.top - E.offsetY) / re / E.scale;
    let K;
    g.length > 0 ? K = on(g[0]) : S ? f.boxes.length > 0 ? K = f.boxes[0].color : K = it[0] : K = it[f.boxes.length % it.length];
    let G = new yo(bt, as, E, Y, A, N, ie, x, "", j, H, j, H, K, c, u, d, h, p);
    G.startCreating(k, W.left, W.top), S ? t(33, f.boxes = [G], f) : t(33, f.boxes = [G, ...f.boxes], f), Zt(0), ne(), fe("change");
  }
  function Ll(k) {
    const W = w.getBoundingClientRect(), j = (k.clientX - W.left - E.offsetX) / E.scale, H = (k.clientY - W.top - E.offsetY) / E.scale;
    let K;
    g.length > 0 ? K = on(g[0]) : S ? f.points.length > 0 ? K = f.points[0].color : K = it[0] : K = it[f.points.length % it.length];
    const G = new So(bt, E, Y, A, N, ie, x, "", j, H, K, 0.7, Math.max(4, d / 2), re);
    S ? t(33, f.points = [G], f) : t(33, f.points = [G, ...f.points], f), hn(0), G.startDrag(k), se = !0, ne(), fe("change");
  }
  function Wl(k) {
    if (Ml(k))
      return;
    S || Zt(-1);
    const j = w.getBoundingClientRect(), H = k.clientX - j.left, K = k.clientY - j.top;
    for (const [G, ue] of f.points.entries())
      if (ue.isPointInsidePoint(H, K)) {
        hn(G), ue.startDrag(k);
        return;
      }
    S || hn(-1), E.startDrag(k);
  }
  function Yt() {
    t(10, de = r.creation), t(8, w.style.cursor = "crosshair", w);
  }
  function rt() {
    t(10, de = r.point), t(8, w.style.cursor = "crosshair", w);
  }
  function At() {
    t(10, de = r.drag), t(8, w.style.cursor = "default", w);
  }
  function as() {
    F >= 0 && F < f.boxes.length && (f.boxes[F].getArea() < 1 ? Gt() : (v || (_e ? _s() : t(12, P = !0)), S && At()));
  }
  function E_() {
    $ >= 0 && $ < f.points.length && (v || (_e ? _s() : t(12, P = !0)), S && At());
  }
  function rs() {
    v || (Z === "box" ? F >= 0 && F < f.boxes.length && t(11, M = !0) : Z === "point" && $ >= 0 && $ < f.points.length && t(11, M = !0));
  }
  function L_(k) {
    _ && rs();
  }
  function W_(k) {
    t(11, M = !1), Ne();
    const { detail: W } = k, j = W.label, H = W.color, K = W.ret;
    if (Z === "box") {
      if (F >= 0 && F < f.boxes.length) {
        const G = f.boxes[F];
        K == 1 ? (G.label = j, G.color = on(H), ne(), fe("change")) : K == -1 && Gt();
      }
    } else if (Z === "point" && $ >= 0 && $ < f.points.length) {
      const G = f.points[$];
      K == 1 ? (G.label = j, G.color = on(H), ne(), fe("change")) : K == -1 && Gt();
    }
  }
  function R_(k) {
    t(12, P = !1), Ne();
    const { detail: W } = k, j = W.label, H = W.color, K = W.ret, G = W.lock;
    if (Z === "box") {
      if (F >= 0 && F < f.boxes.length) {
        const ue = f.boxes[F];
        K == 1 ? (t(14, _e = G), t(15, D.label = j, D), t(15, D.color = H, D), ue.label = j, ue.color = on(H), ne(), fe("change")) : Gt();
      }
    } else if (Z === "point" && $ >= 0 && $ < f.points.length) {
      const ue = f.points[$];
      K == 1 ? (t(14, _e = G), t(15, D.label = j, D), t(15, D.color = H, D), ue.label = j, ue.color = on(H), ne(), fe("change")) : Gt();
    }
  }
  function X_(k) {
    t(13, le = !1), Ne();
    const { detail: W } = k;
    let j = W.label, H = W.color, K = W.ret, G = W.lock;
    K == 1 && (t(14, _e = G), t(15, D.label = j, D), t(15, D.color = H, D));
  }
  function _s() {
    if (Z === "box") {
      if (F >= 0 && F < f.boxes.length) {
        const k = f.boxes[F];
        k.label = D.label, D.color !== "" && (k.color = on(D.color)), ne(), fe("change");
      }
    } else if (Z === "point" && $ >= 0 && $ < f.points.length) {
      const k = f.points[$];
      k.label = D.label, D.color !== "" && (k.color = on(D.color)), ne(), fe("change");
    }
  }
  function Gt() {
    Z === "box" ? F >= 0 && F < f.boxes.length && (f.boxes.splice(F, 1), Zt(-1), S && Yt(), fe("change")) : Z === "point" && $ >= 0 && $ < f.points.length && (f.points.splice($, 1), hn(-1), S && Yt(), fe("change"));
  }
  function Rl(k) {
    t(33, f.orientation = ((f.orientation + k) % 4 + 4) % 4, f), E.orientation = f.orientation, ai();
    for (const W of f.boxes)
      W.onRotate(k);
    for (const W of f.points)
      W.onRotate(k);
    ne(), fe("change");
  }
  function ai() {
    if (w) {
      if (re = 1, t(8, w.width = w.clientWidth, w), E.setRotatedImage(V), V !== null) {
        if (E.imageRotatedWidth > w.width)
          re = w.width / E.imageRotatedWidth, X = Math.round(E.imageRotatedWidth * re), te = Math.round(E.imageRotatedHeight * re), A = 0, N = 0, ie = X, x = te, t(8, w.height = te, w);
        else {
          X = E.imageRotatedWidth, te = E.imageRotatedHeight;
          var k = (w.width - X) / 2;
          A = k, N = 0, ie = k + X, x = te, t(8, w.height = te, w);
        }
        E.imageWidth = X, E.imageHeight = te;
      } else
        A = 0, N = 0, ie = w.width, x = w.height, t(8, w.height = w.clientHeight, w);
      if (E.resize(w.width, w.height, A, N), ie > 0 && x > 0) {
        for (const W of f.boxes)
          W.canvasXmin = A, W.canvasYmin = N, W.canvasXmax = ie, W.canvasYmax = x, W.setScaleFactor(re);
        for (const W of f.points)
          W.canvasXmin = A, W.canvasYmin = N, W.canvasXmax = ie, W.canvasYmax = x, W.setScaleFactor(re);
      }
      ne(), fe("change");
    }
  }
  const Y_ = new ResizeObserver(ai);
  function A_() {
    for (let k = 0; k < f.boxes.length; k++) {
      let W = f.boxes[k];
      if (!(W instanceof yo)) {
        const j = W;
        let H = "", K = "";
        Object.prototype.hasOwnProperty.call(j, "color") ? (H = j.color, Array.isArray(H) && H.length === 3 && (H = `rgb(${H[0]}, ${H[1]}, ${H[2]})`)) : H = it[k % it.length], Object.prototype.hasOwnProperty.call(j, "label") && (K = j.label), W = new yo(bt, as, E, Y, A, N, ie, x, K, j.xmin, j.ymin, j.xmax, j.ymax, H, c, u, d, h, p), t(33, f.boxes[k] = W, f);
      }
    }
  }
  function I_() {
    for (let k = 0; k < f.points.length; k++) {
      let W = f.points[k];
      if (!(W instanceof So)) {
        const j = W;
        let H = "", K = "";
        Object.prototype.hasOwnProperty.call(j, "color") ? (H = j.color, Array.isArray(H) && H.length === 3 && (H = `rgb(${H[0]}, ${H[1]}, ${H[2]})`)) : H = it[k % it.length], Object.prototype.hasOwnProperty.call(j, "label") && (K = j.label), W = new So(bt, E, Y, A, N, ie, x, K, j.x, j.y, H, 0.7, Math.max(4, d / 2), re), t(33, f.points[k] = W, f);
      }
    }
  }
  function cs() {
    a !== null && (V === null || V.src != a) && (V = new Image(), V.src = a, V.onload = function() {
      ai(), ne();
    });
  }
  hp(() => {
    if (Array.isArray(m) && m.length > 0) {
      if (!Array.isArray(g) || g.length == 0)
        for (let k = 0; k < m.length; k++) {
          let W = it[k % it.length];
          g.push(zo(W));
        }
      t(15, D.label = m[0][0], D), t(15, D.color = g[0], D);
    }
    R = w.getContext("2d"), Y_.observe(w), F < 0 && f !== null && f.boxes.length > 0 && Zt(0), $ < 0 && f !== null && f.points.length > 0 && hn(0), cs(), ai(), ne();
  });
  function j_(k) {
    Va[k ? "unshift" : "push"](() => {
      w = k, t(8, w);
    });
  }
  const H_ = () => Yt(), T_ = () => rt(), F_ = () => At(), P_ = () => Gt(), U_ = () => t(13, le = !0), O_ = () => Rl(-1), V_ = () => Rl(1);
  function N_(k) {
    Va[k ? "unshift" : "push"](() => {
      I = k, t(9, I);
    });
  }
  const $_ = () => I.focus();
  function K_(k) {
    qo.call(this, i, k);
  }
  function Z_(k) {
    qo.call(this, i, k);
  }
  function G_(k) {
    qo.call(this, i, k);
  }
  return i.$$set = (k) => {
    "imageUrl" in k && t(34, a = k.imageUrl), "interactive" in k && t(1, _ = k.interactive), "boxAlpha" in k && t(35, c = k.boxAlpha), "boxMinSize" in k && t(36, u = k.boxMinSize), "handleSize" in k && t(37, d = k.handleSize), "boxThickness" in k && t(38, h = k.boxThickness), "boxSelectedThickness" in k && t(39, p = k.boxSelectedThickness), "value" in k && t(33, f = k.value), "choices" in k && t(2, m = k.choices), "choicesColors" in k && t(3, g = k.choicesColors), "disableEditBoxes" in k && t(4, v = k.disableEditBoxes), "height" in k && t(5, b = k.height), "width" in k && t(6, q = k.width), "singleBox" in k && t(40, S = k.singleBox), "showRemoveButton" in k && t(0, C = k.showRemoveButton), "handlesCursor" in k && t(41, y = k.handlesCursor), "useDefaultLabel" in k && t(42, z = k.useDefaultLabel), "enableKeyboardShortcuts" in k && t(43, L = k.enableKeyboardShortcuts);
  }, i.$$.update = () => {
    i.$$.dirty[1] & /*selectedTarget, selectedBox, value, _a, _b, selectedPoint, _c, _d*/
    1040388 && (Z === "box" && F >= 0 ? (t(16, Ve = t(45, l = t(44, n = f.boxes[F]) === null || n === void 0 ? void 0 : n.label) !== null && l !== void 0 ? l : ""), t(17, et = f.boxes[F] ? zo(f.boxes[F].color) : "")) : Z === "point" && $ >= 0 ? (t(16, Ve = t(47, s = t(46, o = f.points[$]) === null || o === void 0 ? void 0 : o.label) !== null && s !== void 0 ? s : ""), t(17, et = f.points[$] ? zo(f.points[$].color) : "")) : (t(16, Ve = ""), t(17, et = ""))), i.$$.dirty[1] & /*value*/
    4 && (E.orientation = f.orientation, cs(), A_(), I_(), ai(), ne());
  }, [
    C,
    _,
    m,
    g,
    v,
    b,
    q,
    r,
    w,
    I,
    de,
    M,
    P,
    le,
    _e,
    D,
    Ve,
    et,
    Bl,
    El,
    B,
    wt,
    vt,
    Le,
    Yt,
    rt,
    At,
    L_,
    W_,
    R_,
    X_,
    Gt,
    Rl,
    f,
    a,
    c,
    u,
    d,
    h,
    p,
    S,
    y,
    z,
    L,
    n,
    l,
    o,
    s,
    F,
    $,
    Z,
    j_,
    H_,
    T_,
    F_,
    P_,
    U_,
    O_,
    V_,
    N_,
    $_,
    K_,
    Z_,
    G_
  ];
}
class bp extends cp {
  constructor(e) {
    super(), up(
      this,
      e,
      pp,
      gp,
      dp,
      {
        imageUrl: 34,
        interactive: 1,
        boxAlpha: 35,
        boxMinSize: 36,
        handleSize: 37,
        boxThickness: 38,
        boxSelectedThickness: 39,
        value: 33,
        choices: 2,
        choicesColors: 3,
        disableEditBoxes: 4,
        height: 5,
        width: 6,
        singleBox: 40,
        showRemoveButton: 0,
        handlesCursor: 41,
        useDefaultLabel: 42,
        enableKeyboardShortcuts: 43
      },
      null,
      [-1, -1, -1, -1]
    );
  }
}
const {
  SvelteComponent: wp,
  add_flush_callback: vp,
  bind: kp,
  binding_callbacks: Cp,
  create_component: yp,
  destroy_component: Sp,
  init: qp,
  mount_component: zp,
  safe_not_equal: Dp,
  transition_in: Bp,
  transition_out: Mp
} = window.__gradio__svelte__internal, { createEventDispatcher: Ep } = window.__gradio__svelte__internal;
function Lp(i) {
  let e, t, n;
  function l(s) {
    i[21](s);
  }
  let o = {
    interactive: (
      /*interactive*/
      i[1]
    ),
    boxAlpha: (
      /*boxesAlpha*/
      i[2]
    ),
    choices: (
      /*labelList*/
      i[3]
    ),
    choicesColors: (
      /*labelColors*/
      i[4]
    ),
    height: (
      /*height*/
      i[8]
    ),
    width: (
      /*width*/
      i[9]
    ),
    boxMinSize: (
      /*boxMinSize*/
      i[5]
    ),
    handleSize: (
      /*handleSize*/
      i[6]
    ),
    boxThickness: (
      /*boxThickness*/
      i[7]
    ),
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      i[10]
    ),
    disableEditBoxes: (
      /*disableEditBoxes*/
      i[11]
    ),
    singleBox: (
      /*singleBox*/
      i[12]
    ),
    showRemoveButton: (
      /*showRemoveButton*/
      i[13]
    ),
    handlesCursor: (
      /*handlesCursor*/
      i[14]
    ),
    useDefaultLabel: (
      /*useDefaultLabel*/
      i[15]
    ),
    enableKeyboardShortcuts: (
      /*enableKeyboardShortcuts*/
      i[16]
    ),
    imageUrl: (
      /*resolved_src*/
      i[17]
    )
  };
  return (
    /*value*/
    i[0] !== void 0 && (o.value = /*value*/
    i[0]), e = new bp({ props: o }), Cp.push(() => kp(e, "value", l)), e.$on(
      "change",
      /*change_handler*/
      i[22]
    ), {
      c() {
        yp(e.$$.fragment);
      },
      m(s, r) {
        zp(e, s, r), n = !0;
      },
      p(s, [r]) {
        const a = {};
        r & /*interactive*/
        2 && (a.interactive = /*interactive*/
        s[1]), r & /*boxesAlpha*/
        4 && (a.boxAlpha = /*boxesAlpha*/
        s[2]), r & /*labelList*/
        8 && (a.choices = /*labelList*/
        s[3]), r & /*labelColors*/
        16 && (a.choicesColors = /*labelColors*/
        s[4]), r & /*height*/
        256 && (a.height = /*height*/
        s[8]), r & /*width*/
        512 && (a.width = /*width*/
        s[9]), r & /*boxMinSize*/
        32 && (a.boxMinSize = /*boxMinSize*/
        s[5]), r & /*handleSize*/
        64 && (a.handleSize = /*handleSize*/
        s[6]), r & /*boxThickness*/
        128 && (a.boxThickness = /*boxThickness*/
        s[7]), r & /*boxSelectedThickness*/
        1024 && (a.boxSelectedThickness = /*boxSelectedThickness*/
        s[10]), r & /*disableEditBoxes*/
        2048 && (a.disableEditBoxes = /*disableEditBoxes*/
        s[11]), r & /*singleBox*/
        4096 && (a.singleBox = /*singleBox*/
        s[12]), r & /*showRemoveButton*/
        8192 && (a.showRemoveButton = /*showRemoveButton*/
        s[13]), r & /*handlesCursor*/
        16384 && (a.handlesCursor = /*handlesCursor*/
        s[14]), r & /*useDefaultLabel*/
        32768 && (a.useDefaultLabel = /*useDefaultLabel*/
        s[15]), r & /*enableKeyboardShortcuts*/
        65536 && (a.enableKeyboardShortcuts = /*enableKeyboardShortcuts*/
        s[16]), r & /*resolved_src*/
        131072 && (a.imageUrl = /*resolved_src*/
        s[17]), !t && r & /*value*/
        1 && (t = !0, a.value = /*value*/
        s[0], vp(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (Bp(e.$$.fragment, s), n = !0);
      },
      o(s) {
        Mp(e.$$.fragment, s), n = !1;
      },
      d(s) {
        Sp(e, s);
      }
    }
  );
}
function Wp(i, e, t) {
  let { src: n = void 0 } = e, { interactive: l } = e, { boxesAlpha: o } = e, { labelList: s } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: _ } = e, { boxThickness: c } = e, { height: u } = e, { width: d } = e, { boxSelectedThickness: h } = e, { value: p } = e, { disableEditBoxes: f } = e, { singleBox: m } = e, { showRemoveButton: g } = e, { handlesCursor: v } = e, { useDefaultLabel: b } = e, { enableKeyboardShortcuts: q } = e, S, C;
  const y = Ep();
  function z(w) {
    p = w, t(0, p);
  }
  const L = () => y("change");
  return i.$$set = (w) => {
    "src" in w && t(19, n = w.src), "interactive" in w && t(1, l = w.interactive), "boxesAlpha" in w && t(2, o = w.boxesAlpha), "labelList" in w && t(3, s = w.labelList), "labelColors" in w && t(4, r = w.labelColors), "boxMinSize" in w && t(5, a = w.boxMinSize), "handleSize" in w && t(6, _ = w.handleSize), "boxThickness" in w && t(7, c = w.boxThickness), "height" in w && t(8, u = w.height), "width" in w && t(9, d = w.width), "boxSelectedThickness" in w && t(10, h = w.boxSelectedThickness), "value" in w && t(0, p = w.value), "disableEditBoxes" in w && t(11, f = w.disableEditBoxes), "singleBox" in w && t(12, m = w.singleBox), "showRemoveButton" in w && t(13, g = w.showRemoveButton), "handlesCursor" in w && t(14, v = w.handlesCursor), "useDefaultLabel" in w && t(15, b = w.useDefaultLabel), "enableKeyboardShortcuts" in w && t(16, q = w.enableKeyboardShortcuts);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    1572864) {
      t(17, S = n), t(20, C = n);
      const w = n;
      eh(w).then((I) => {
        C === w && t(17, S = I);
      });
    }
  }, [
    p,
    l,
    o,
    s,
    r,
    a,
    _,
    c,
    u,
    d,
    h,
    f,
    m,
    g,
    v,
    b,
    q,
    S,
    y,
    n,
    C,
    z,
    L
  ];
}
class Rp extends wp {
  constructor(e) {
    super(), qp(this, e, Wp, Lp, Dp, {
      src: 19,
      interactive: 1,
      boxesAlpha: 2,
      labelList: 3,
      labelColors: 4,
      boxMinSize: 5,
      handleSize: 6,
      boxThickness: 7,
      height: 8,
      width: 9,
      boxSelectedThickness: 10,
      value: 0,
      disableEditBoxes: 11,
      singleBox: 12,
      showRemoveButton: 13,
      handlesCursor: 14,
      useDefaultLabel: 15,
      enableKeyboardShortcuts: 16
    });
  }
}
class xa {
  constructor() {
    this.boxes = [], this.points = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: Xp,
  add_flush_callback: gl,
  append: me,
  attr: De,
  bind: pl,
  binding_callbacks: Di,
  bubble: hi,
  check_outros: wn,
  create_component: Ot,
  create_slot: Yp,
  destroy_component: Vt,
  destroy_each: Ap,
  detach: Wt,
  element: Xe,
  empty: Ip,
  ensure_array_like: er,
  get_all_dirty_from_scope: jp,
  get_slot_changes: Hp,
  group_outros: vn,
  init: Tp,
  insert: Rt,
  mount_component: Nt,
  noop: S_,
  safe_not_equal: Fp,
  set_data: Do,
  space: Qe,
  text: mi,
  toggle_class: tr,
  transition_in: ee,
  transition_out: he,
  update_slot_base: Pp
} = window.__gradio__svelte__internal, { createEventDispatcher: Up, tick: Op } = window.__gradio__svelte__internal;
function nr(i, e, t) {
  const n = i.slice();
  return n[58] = e[t], n;
}
function ir(i) {
  let e, t;
  return e = new dh({
    props: {
      href: (
        /*value*/
        i[0].image.url
      ),
      download: (
        /*value*/
        i[0].image.orig_name || "image"
      ),
      $$slots: { default: [Vp] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Ot(e.$$.fragment);
    },
    m(n, l) {
      Nt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*value*/
      1 && (o.href = /*value*/
      n[0].image.url), l[0] & /*value*/
      1 && (o.download = /*value*/
      n[0].image.orig_name || "image"), l[0] & /*i18n*/
      256 | l[1] & /*$$scope*/
      16777216 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (ee(e.$$.fragment, n), t = !0);
    },
    o(n) {
      he(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Vt(e, n);
    }
  };
}
function Vp(i) {
  let e, t;
  return e = new bl({
    props: {
      Icon: Du,
      label: (
        /*i18n*/
        i[8]("common.download")
      )
    }
  }), {
    c() {
      Ot(e.$$.fragment);
    },
    m(n, l) {
      Nt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*i18n*/
      256 && (o.label = /*i18n*/
      n[8]("common.download")), e.$set(o);
    },
    i(n) {
      t || (ee(e.$$.fragment, n), t = !0);
    },
    o(n) {
      he(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Vt(e, n);
    }
  };
}
function lr(i) {
  let e, t;
  return e = new Gd({
    props: {
      i18n: (
        /*i18n*/
        i[8]
      ),
      formatter: (
        /*func*/
        i[41]
      ),
      value: (
        /*value*/
        i[0]
      )
    }
  }), e.$on(
    "share",
    /*share_handler*/
    i[42]
  ), e.$on(
    "error",
    /*error_handler*/
    i[43]
  ), {
    c() {
      Ot(e.$$.fragment);
    },
    m(n, l) {
      Nt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*i18n*/
      256 && (o.i18n = /*i18n*/
      n[8]), l[0] & /*value*/
      1 && (o.value = /*value*/
      n[0]), e.$set(o);
    },
    i(n) {
      t || (ee(e.$$.fragment, n), t = !0);
    },
    o(n) {
      he(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Vt(e, n);
    }
  };
}
function or(i) {
  let e, t, n;
  return t = new bl({
    props: { Icon: Cr, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[38]
  ), {
    c() {
      e = Xe("div"), Ot(t.$$.fragment);
    },
    m(l, o) {
      Rt(l, e, o), Nt(t, e, null), n = !0;
    },
    p: S_,
    i(l) {
      n || (ee(t.$$.fragment, l), n = !0);
    },
    o(l) {
      he(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Wt(e), Vt(t);
    }
  };
}
function sr(i) {
  let e;
  const t = (
    /*#slots*/
    i[40].default
  ), n = Yp(
    t,
    i,
    /*$$scope*/
    i[55],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(l, o) {
      n && n.m(l, o), e = !0;
    },
    p(l, o) {
      n && n.p && (!e || o[1] & /*$$scope*/
      16777216) && Pp(
        n,
        t,
        l,
        /*$$scope*/
        l[55],
        e ? Hp(
          t,
          /*$$scope*/
          l[55],
          o,
          null
        ) : jp(
          /*$$scope*/
          l[55]
        ),
        null
      );
    },
    i(l) {
      e || (ee(n, l), e = !0);
    },
    o(l) {
      he(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function Np(i) {
  let e, t, n = (
    /*value*/
    i[0] === null && sr(i)
  );
  return {
    c() {
      n && n.c(), e = Ip();
    },
    m(l, o) {
      n && n.m(l, o), Rt(l, e, o), t = !0;
    },
    p(l, o) {
      /*value*/
      l[0] === null ? n ? (n.p(l, o), o[0] & /*value*/
      1 && ee(n, 1)) : (n = sr(l), n.c(), ee(n, 1), n.m(e.parentNode, e)) : n && (vn(), he(n, 1, 1, () => {
        n = null;
      }), wn());
    },
    i(l) {
      t || (ee(n), t = !0);
    },
    o(l) {
      he(n), t = !1;
    },
    d(l) {
      l && Wt(e), n && n.d(l);
    }
  };
}
function ar(i) {
  let e, t;
  return e = new Im({
    props: {
      root: (
        /*root*/
        i[6]
      ),
      mode: "image",
      include_audio: !1,
      i18n: (
        /*i18n*/
        i[8]
      ),
      upload: (
        /*upload*/
        i[33]
      )
    }
  }), e.$on(
    "capture",
    /*capture_handler*/
    i[48]
  ), e.$on(
    "stream",
    /*stream_handler_1*/
    i[49]
  ), e.$on(
    "error",
    /*error_handler_2*/
    i[50]
  ), e.$on(
    "drag",
    /*drag_handler*/
    i[51]
  ), e.$on(
    "upload",
    /*upload_handler*/
    i[52]
  ), {
    c() {
      Ot(e.$$.fragment);
    },
    m(n, l) {
      Nt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*root*/
      64 && (o.root = /*root*/
      n[6]), l[0] & /*i18n*/
      256 && (o.i18n = /*i18n*/
      n[8]), l[1] & /*upload*/
      4 && (o.upload = /*upload*/
      n[33]), e.$set(o);
    },
    i(n) {
      t || (ee(e.$$.fragment, n), t = !0);
    },
    o(n) {
      he(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Vt(e, n);
    }
  };
}
function rr(i) {
  let e, t, n, l, o, s, r, a, _;
  function c(f) {
    i[53](f);
  }
  let u = {
    height: (
      /*height*/
      i[17]
    ),
    width: (
      /*width*/
      i[18]
    ),
    boxesAlpha: (
      /*boxesAlpha*/
      i[12]
    ),
    labelList: (
      /*labelList*/
      i[13]
    ),
    labelColors: (
      /*labelColors*/
      i[14]
    ),
    boxMinSize: (
      /*boxMinSize*/
      i[15]
    ),
    interactive: (
      /*interactive*/
      i[7]
    ),
    handleSize: (
      /*handleSize*/
      i[16]
    ),
    boxThickness: (
      /*boxThickness*/
      i[19]
    ),
    singleBox: (
      /*singleBox*/
      i[21]
    ),
    disableEditBoxes: (
      /*disableEditBoxes*/
      i[20]
    ),
    showRemoveButton: (
      /*showRemoveButton*/
      i[22]
    ),
    handlesCursor: (
      /*handlesCursor*/
      i[23]
    ),
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      i[24]
    ),
    useDefaultLabel: (
      /*useDefaultLabel*/
      i[28]
    ),
    enableKeyboardShortcuts: (
      /*enableKeyboardShortcuts*/
      i[29]
    ),
    src: (
      /*value*/
      i[0].image.url
    )
  };
  /*value*/
  i[0] !== void 0 && (u.value = /*value*/
  i[0]), n = new Rp({ props: u }), Di.push(() => pl(n, "value", c)), n.$on(
    "change",
    /*handleCanvasChange*/
    i[37]
  );
  function d(f, m) {
    return (
      /*annotationItems*/
      f[32].length === 0 ? Kp : $p
    );
  }
  let h = d(i), p = h(i);
  return {
    c() {
      e = Xe("div"), t = Xe("div"), Ot(n.$$.fragment), o = Qe(), s = Xe("aside"), r = Xe("div"), r.textContent = "Annotations", a = Qe(), p.c(), De(t, "class", "image-frame svelte-fk3dj1"), tr(
        t,
        "selectable",
        /*selectable*/
        i[5]
      ), De(r, "class", "annotation-panel__header svelte-fk3dj1"), De(s, "class", "annotation-panel svelte-fk3dj1"), De(s, "aria-label", "Annotations list"), De(e, "class", "annotator-layout svelte-fk3dj1");
    },
    m(f, m) {
      Rt(f, e, m), me(e, t), Nt(n, t, null), me(e, o), me(e, s), me(s, r), me(s, a), p.m(s, null), _ = !0;
    },
    p(f, m) {
      const g = {};
      m[0] & /*height*/
      131072 && (g.height = /*height*/
      f[17]), m[0] & /*width*/
      262144 && (g.width = /*width*/
      f[18]), m[0] & /*boxesAlpha*/
      4096 && (g.boxesAlpha = /*boxesAlpha*/
      f[12]), m[0] & /*labelList*/
      8192 && (g.labelList = /*labelList*/
      f[13]), m[0] & /*labelColors*/
      16384 && (g.labelColors = /*labelColors*/
      f[14]), m[0] & /*boxMinSize*/
      32768 && (g.boxMinSize = /*boxMinSize*/
      f[15]), m[0] & /*interactive*/
      128 && (g.interactive = /*interactive*/
      f[7]), m[0] & /*handleSize*/
      65536 && (g.handleSize = /*handleSize*/
      f[16]), m[0] & /*boxThickness*/
      524288 && (g.boxThickness = /*boxThickness*/
      f[19]), m[0] & /*singleBox*/
      2097152 && (g.singleBox = /*singleBox*/
      f[21]), m[0] & /*disableEditBoxes*/
      1048576 && (g.disableEditBoxes = /*disableEditBoxes*/
      f[20]), m[0] & /*showRemoveButton*/
      4194304 && (g.showRemoveButton = /*showRemoveButton*/
      f[22]), m[0] & /*handlesCursor*/
      8388608 && (g.handlesCursor = /*handlesCursor*/
      f[23]), m[0] & /*boxSelectedThickness*/
      16777216 && (g.boxSelectedThickness = /*boxSelectedThickness*/
      f[24]), m[0] & /*useDefaultLabel*/
      268435456 && (g.useDefaultLabel = /*useDefaultLabel*/
      f[28]), m[0] & /*enableKeyboardShortcuts*/
      536870912 && (g.enableKeyboardShortcuts = /*enableKeyboardShortcuts*/
      f[29]), m[0] & /*value*/
      1 && (g.src = /*value*/
      f[0].image.url), !l && m[0] & /*value*/
      1 && (l = !0, g.value = /*value*/
      f[0], gl(() => l = !1)), n.$set(g), (!_ || m[0] & /*selectable*/
      32) && tr(
        t,
        "selectable",
        /*selectable*/
        f[5]
      ), h === (h = d(f)) && p ? p.p(f, m) : (p.d(1), p = h(f), p && (p.c(), p.m(s, null)));
    },
    i(f) {
      _ || (ee(n.$$.fragment, f), _ = !0);
    },
    o(f) {
      he(n.$$.fragment, f), _ = !1;
    },
    d(f) {
      f && Wt(e), Vt(n), p.d();
    }
  };
}
function $p(i) {
  let e, t = er(
    /*annotationItems*/
    i[32]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = _r(nr(i, t, l));
  return {
    c() {
      e = Xe("ul");
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      De(e, "class", "annotation-list svelte-fk3dj1");
    },
    m(l, o) {
      Rt(l, e, o);
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(e, null);
    },
    p(l, o) {
      if (o[1] & /*annotationItems*/
      2) {
        t = er(
          /*annotationItems*/
          l[32]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = nr(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = _r(r), n[s].c(), n[s].m(e, null));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && Wt(e), Ap(n, l);
    }
  };
}
function Kp(i) {
  let e;
  return {
    c() {
      e = Xe("div"), e.textContent = "No annotations yet.", De(e, "class", "annotation-panel__empty svelte-fk3dj1");
    },
    m(t, n) {
      Rt(t, e, n);
    },
    p: S_,
    d(t) {
      t && Wt(e);
    }
  };
}
function _r(i) {
  let e, t, n, l, o, s = (
    /*item*/
    i[58].label + ""
  ), r, a, _, c, u = (
    /*item*/
    i[58].shape + ""
  ), d, h, p, f, m = (
    /*item*/
    i[58].coords + ""
  ), g, v;
  return {
    c() {
      e = Xe("li"), t = Xe("div"), n = Xe("span"), o = Qe(), r = mi(s), a = Qe(), _ = Xe("div"), c = mi("Shape: "), d = mi(u), h = Qe(), p = Xe("div"), f = mi("Coords: "), g = mi(m), v = Qe(), De(n, "class", "annotation-item__swatch svelte-fk3dj1"), De(n, "style", l = `background-color: ${/*item*/
      i[58].color};`), De(t, "class", "annotation-item__title svelte-fk3dj1"), De(_, "class", "annotation-item__meta svelte-fk3dj1"), De(p, "class", "annotation-item__coords svelte-fk3dj1"), De(e, "class", "annotation-item svelte-fk3dj1");
    },
    m(b, q) {
      Rt(b, e, q), me(e, t), me(t, n), me(t, o), me(t, r), me(e, a), me(e, _), me(_, c), me(_, d), me(e, h), me(e, p), me(p, f), me(p, g), me(e, v);
    },
    p(b, q) {
      q[1] & /*annotationItems*/
      2 && l !== (l = `background-color: ${/*item*/
      b[58].color};`) && De(n, "style", l), q[1] & /*annotationItems*/
      2 && s !== (s = /*item*/
      b[58].label + "") && Do(r, s), q[1] & /*annotationItems*/
      2 && u !== (u = /*item*/
      b[58].shape + "") && Do(d, u), q[1] & /*annotationItems*/
      2 && m !== (m = /*item*/
      b[58].coords + "") && Do(g, m);
    },
    d(b) {
      b && Wt(e);
    }
  };
}
function cr(i) {
  let e, t, n;
  function l(s) {
    i[54](s);
  }
  let o = {
    sources: (
      /*sources*/
      i[4]
    ),
    handle_clear: (
      /*clear*/
      i[38]
    ),
    handle_select: (
      /*handle_select_source*/
      i[36]
    )
  };
  return (
    /*active_source*/
    i[1] !== void 0 && (o.active_source = /*active_source*/
    i[1]), e = new u1({ props: o }), Di.push(() => pl(e, "active_source", l)), {
      c() {
        Ot(e.$$.fragment);
      },
      m(s, r) {
        Nt(e, s, r), n = !0;
      },
      p(s, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        s[4]), !t && r[0] & /*active_source*/
        2 && (t = !0, a.active_source = /*active_source*/
        s[1], gl(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (ee(e.$$.fragment, s), n = !0);
      },
      o(s) {
        he(e.$$.fragment, s), n = !1;
      },
      d(s) {
        Vt(e, s);
      }
    }
  );
}
function Zp(i) {
  let e, t, n, l, o, s, r, a, _, c, u, d, h, p, f = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[0] === null && /*interactive*/
    i[7]
  ), m;
  e = new df({
    props: {
      show_label: (
        /*show_label*/
        i[3]
      ),
      Icon: yr,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let g = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[0] !== null && ir(i)
  ), v = (
    /*showShareButton*/
    i[9] && /*value*/
    i[0] !== null && lr(i)
  ), b = (
    /*showClearButton*/
    i[11] && /*value*/
    i[0] !== null && /*interactive*/
    i[7] && or(i)
  );
  function q(w) {
    i[45](w);
  }
  function S(w) {
    i[46](w);
  }
  let C = {
    hidden: (
      /*value*/
      i[0] !== null || /*active_source*/
      i[1] === "webcam"
    ),
    filetype: (
      /*active_source*/
      i[1] === "clipboard" ? "clipboard" : "image/*"
    ),
    root: (
      /*root*/
      i[6]
    ),
    max_file_size: (
      /*max_file_size*/
      i[25]
    ),
    disable_click: !/*sources*/
    i[4].includes("upload"),
    upload: (
      /*cli_upload*/
      i[26]
    ),
    stream_handler: (
      /*stream_handler*/
      i[27]
    ),
    $$slots: { default: [Np] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[30] !== void 0 && (C.uploading = /*uploading*/
  i[30]), /*dragging*/
  i[31] !== void 0 && (C.dragging = /*dragging*/
  i[31]), _ = new Nh({ props: C }), i[44](_), Di.push(() => pl(_, "uploading", q)), Di.push(() => pl(_, "dragging", S)), _.$on(
    "load",
    /*handle_upload*/
    i[34]
  ), _.$on(
    "error",
    /*error_handler_1*/
    i[47]
  );
  let y = (
    /*value*/
    i[0] === null && /*active_source*/
    i[1] === "webcam" && ar(i)
  ), z = (
    /*value*/
    i[0] !== null && rr(i)
  ), L = f && cr(i);
  return {
    c() {
      Ot(e.$$.fragment), t = Qe(), n = Xe("div"), g && g.c(), l = Qe(), v && v.c(), o = Qe(), b && b.c(), s = Qe(), r = Xe("div"), a = Xe("div"), Ot(_.$$.fragment), d = Qe(), y && y.c(), h = Qe(), z && z.c(), p = Qe(), L && L.c(), De(n, "class", "icon-buttons svelte-fk3dj1"), De(a, "class", "upload-container svelte-fk3dj1"), De(r, "data-testid", "image"), De(r, "class", "image-container svelte-fk3dj1");
    },
    m(w, I) {
      Nt(e, w, I), Rt(w, t, I), Rt(w, n, I), g && g.m(n, null), me(n, l), v && v.m(n, null), me(n, o), b && b.m(n, null), Rt(w, s, I), Rt(w, r, I), me(r, a), Nt(_, a, null), me(a, d), y && y.m(a, null), me(a, h), z && z.m(a, null), me(r, p), L && L.m(r, null), m = !0;
    },
    p(w, I) {
      const R = {};
      I[0] & /*show_label*/
      8 && (R.show_label = /*show_label*/
      w[3]), I[0] & /*label*/
      4 && (R.label = /*label*/
      w[2] || "Image Annotator"), e.$set(R), /*showDownloadButton*/
      w[10] && /*value*/
      w[0] !== null ? g ? (g.p(w, I), I[0] & /*showDownloadButton, value*/
      1025 && ee(g, 1)) : (g = ir(w), g.c(), ee(g, 1), g.m(n, l)) : g && (vn(), he(g, 1, 1, () => {
        g = null;
      }), wn()), /*showShareButton*/
      w[9] && /*value*/
      w[0] !== null ? v ? (v.p(w, I), I[0] & /*showShareButton, value*/
      513 && ee(v, 1)) : (v = lr(w), v.c(), ee(v, 1), v.m(n, o)) : v && (vn(), he(v, 1, 1, () => {
        v = null;
      }), wn()), /*showClearButton*/
      w[11] && /*value*/
      w[0] !== null && /*interactive*/
      w[7] ? b ? (b.p(w, I), I[0] & /*showClearButton, value, interactive*/
      2177 && ee(b, 1)) : (b = or(w), b.c(), ee(b, 1), b.m(n, null)) : b && (vn(), he(b, 1, 1, () => {
        b = null;
      }), wn());
      const V = {};
      I[0] & /*value, active_source*/
      3 && (V.hidden = /*value*/
      w[0] !== null || /*active_source*/
      w[1] === "webcam"), I[0] & /*active_source*/
      2 && (V.filetype = /*active_source*/
      w[1] === "clipboard" ? "clipboard" : "image/*"), I[0] & /*root*/
      64 && (V.root = /*root*/
      w[6]), I[0] & /*max_file_size*/
      33554432 && (V.max_file_size = /*max_file_size*/
      w[25]), I[0] & /*sources*/
      16 && (V.disable_click = !/*sources*/
      w[4].includes("upload")), I[0] & /*cli_upload*/
      67108864 && (V.upload = /*cli_upload*/
      w[26]), I[0] & /*stream_handler*/
      134217728 && (V.stream_handler = /*stream_handler*/
      w[27]), I[0] & /*value*/
      1 | I[1] & /*$$scope*/
      16777216 && (V.$$scope = { dirty: I, ctx: w }), !c && I[0] & /*uploading*/
      1073741824 && (c = !0, V.uploading = /*uploading*/
      w[30], gl(() => c = !1)), !u && I[1] & /*dragging*/
      1 && (u = !0, V.dragging = /*dragging*/
      w[31], gl(() => u = !1)), _.$set(V), /*value*/
      w[0] === null && /*active_source*/
      w[1] === "webcam" ? y ? (y.p(w, I), I[0] & /*value, active_source*/
      3 && ee(y, 1)) : (y = ar(w), y.c(), ee(y, 1), y.m(a, h)) : y && (vn(), he(y, 1, 1, () => {
        y = null;
      }), wn()), /*value*/
      w[0] !== null ? z ? (z.p(w, I), I[0] & /*value*/
      1 && ee(z, 1)) : (z = rr(w), z.c(), ee(z, 1), z.m(a, null)) : z && (vn(), he(z, 1, 1, () => {
        z = null;
      }), wn()), I[0] & /*sources, value, interactive*/
      145 && (f = /*sources*/
      (w[4].length > 1 || /*sources*/
      w[4].includes("clipboard")) && /*value*/
      w[0] === null && /*interactive*/
      w[7]), f ? L ? (L.p(w, I), I[0] & /*sources, value, interactive*/
      145 && ee(L, 1)) : (L = cr(w), L.c(), ee(L, 1), L.m(r, null)) : L && (vn(), he(L, 1, 1, () => {
        L = null;
      }), wn());
    },
    i(w) {
      m || (ee(e.$$.fragment, w), ee(g), ee(v), ee(b), ee(_.$$.fragment, w), ee(y), ee(z), ee(L), m = !0);
    },
    o(w) {
      he(e.$$.fragment, w), he(g), he(v), he(b), he(_.$$.fragment, w), he(y), he(z), he(L), m = !1;
    },
    d(w) {
      w && (Wt(t), Wt(n), Wt(s), Wt(r)), Vt(e, w), g && g.d(), v && v.d(), b && b.d(), i[44](null), Vt(_), y && y.d(), z && z.d(), L && L.d();
    }
  };
}
function Gp(i) {
  var e, t, n, l, o, s, r, a;
  const _ = Math.round((t = (e = i._xmin) !== null && e !== void 0 ? e : i.xmin) !== null && t !== void 0 ? t : 0), c = Math.round((l = (n = i._ymin) !== null && n !== void 0 ? n : i.ymin) !== null && l !== void 0 ? l : 0), u = Math.round((s = (o = i._xmax) !== null && o !== void 0 ? o : i.xmax) !== null && s !== void 0 ? s : 0), d = Math.round((a = (r = i._ymax) !== null && r !== void 0 ? r : i.ymax) !== null && a !== void 0 ? a : 0);
  return `xmin:${_}, ymin:${c}, xmax:${u}, ymax:${d}`;
}
function Jp(i) {
  var e, t, n, l;
  const o = Math.round((t = (e = i._x) !== null && e !== void 0 ? e : i.x) !== null && t !== void 0 ? t : 0), s = Math.round((l = (n = i._y) !== null && n !== void 0 ? n : i.y) !== null && l !== void 0 ? l : 0);
  return `x:${o}, y:${s}`;
}
function Qp(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var o = this && this.__awaiter || function(B, wt, Ce, vt) {
    function Ne(Le) {
      return Le instanceof Ce ? Le : new Ce(function(Xn) {
        Xn(Le);
      });
    }
    return new (Ce || (Ce = Promise))(function(Le, Xn) {
      function Ll(rt) {
        try {
          Yt(vt.next(rt));
        } catch (At) {
          Xn(At);
        }
      }
      function Wl(rt) {
        try {
          Yt(vt.throw(rt));
        } catch (At) {
          Xn(At);
        }
      }
      function Yt(rt) {
        rt.done ? Le(rt.value) : Ne(rt.value).then(Ll, Wl);
      }
      Yt((vt = vt.apply(B, wt || [])).next());
    });
  };
  let { value: s } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: _ = ["upload", "webcam", "clipboard"] } = e, { selectable: c = !1 } = e, { root: u } = e, { interactive: d } = e, { i18n: h } = e, { showShareButton: p } = e, { showDownloadButton: f } = e, { showClearButton: m } = e, { boxesAlpha: g } = e, { labelList: v } = e, { labelColors: b } = e, { boxMinSize: q } = e, { handleSize: S } = e, { height: C } = e, { width: y } = e, { boxThickness: z } = e, { disableEditBoxes: L } = e, { singleBox: w } = e, { showRemoveButton: I } = e, { handlesCursor: R } = e, { boxSelectedThickness: V } = e, { max_file_size: F = null } = e, { cli_upload: $ } = e, { stream_handler: Z } = e, { useDefaultLabel: de } = e, { enableKeyboardShortcuts: Y } = e, E = [], A = 0, N, ie = !1, { active_source: x = null } = e;
  function re({ detail: B }) {
    t(0, s = new xa()), t(0, s.image = B, s), te("upload", void 0);
  }
  function X(B) {
    return o(this, void 0, void 0, function* () {
      const wt = yield N.load_files([new File([B], "webcam.png")]), Ce = (wt == null ? void 0 : wt[0]) || null;
      Ce ? (t(0, s = new xa()), t(0, s.image = Ce, s)) : t(0, s = null), yield Op(), te("change");
    });
  }
  const te = Up();
  let M = !1;
  function P(B) {
    return o(this, void 0, void 0, function* () {
      switch (B) {
        case "clipboard":
          N.paste_clipboard();
          break;
      }
    });
  }
  function le() {
    t(39, A += 1), te("change");
  }
  function se() {
    t(0, s = null), te("clear"), te("change");
  }
  const _e = async (B) => B === null ? "" : `<img src="${await Id(B.image)}" />`;
  function D(B) {
    hi.call(this, i, B);
  }
  function Ve(B) {
    hi.call(this, i, B);
  }
  function et(B) {
    Di[B ? "unshift" : "push"](() => {
      N = B, t(33, N);
    });
  }
  function ce(B) {
    ie = B, t(30, ie);
  }
  function fe(B) {
    M = B, t(31, M);
  }
  function ne(B) {
    hi.call(this, i, B);
  }
  const bt = (B) => X(B.detail), Zt = (B) => X(B.detail);
  function hn(B) {
    hi.call(this, i, B);
  }
  function Li(B) {
    hi.call(this, i, B);
  }
  const Bl = (B) => X(B.detail);
  function Ml(B) {
    s = B, t(0, s);
  }
  function El(B) {
    x = B, t(1, x), t(4, _);
  }
  return i.$$set = (B) => {
    "value" in B && t(0, s = B.value), "label" in B && t(2, r = B.label), "show_label" in B && t(3, a = B.show_label), "sources" in B && t(4, _ = B.sources), "selectable" in B && t(5, c = B.selectable), "root" in B && t(6, u = B.root), "interactive" in B && t(7, d = B.interactive), "i18n" in B && t(8, h = B.i18n), "showShareButton" in B && t(9, p = B.showShareButton), "showDownloadButton" in B && t(10, f = B.showDownloadButton), "showClearButton" in B && t(11, m = B.showClearButton), "boxesAlpha" in B && t(12, g = B.boxesAlpha), "labelList" in B && t(13, v = B.labelList), "labelColors" in B && t(14, b = B.labelColors), "boxMinSize" in B && t(15, q = B.boxMinSize), "handleSize" in B && t(16, S = B.handleSize), "height" in B && t(17, C = B.height), "width" in B && t(18, y = B.width), "boxThickness" in B && t(19, z = B.boxThickness), "disableEditBoxes" in B && t(20, L = B.disableEditBoxes), "singleBox" in B && t(21, w = B.singleBox), "showRemoveButton" in B && t(22, I = B.showRemoveButton), "handlesCursor" in B && t(23, R = B.handlesCursor), "boxSelectedThickness" in B && t(24, V = B.boxSelectedThickness), "max_file_size" in B && t(25, F = B.max_file_size), "cli_upload" in B && t(26, $ = B.cli_upload), "stream_handler" in B && t(27, Z = B.stream_handler), "useDefaultLabel" in B && t(28, de = B.useDefaultLabel), "enableKeyboardShortcuts" in B && t(29, Y = B.enableKeyboardShortcuts), "active_source" in B && t(1, x = B.active_source), "$$scope" in B && t(55, l = B.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*value*/
    1 | i.$$.dirty[1] & /*annotationTick*/
    256)
      if (!s)
        t(32, E = []);
      else {
        const B = s.boxes.map((Ce, vt) => {
          var Ne, Le;
          return {
            id: `box-${vt}`,
            label: !((Ne = Ce.label) === null || Ne === void 0) && Ne.trim() ? Ce.label : "(No label)",
            shape: "box",
            coords: Gp(Ce),
            color: (Le = Ce.color) !== null && Le !== void 0 ? Le : "transparent",
            isSelected: !1
          };
        }), wt = s.points.map((Ce, vt) => {
          var Ne, Le;
          return {
            id: `point-${vt}`,
            label: !((Ne = Ce.label) === null || Ne === void 0) && Ne.trim() ? Ce.label : "(No label)",
            shape: "point",
            coords: Jp(Ce),
            color: (Le = Ce.color) !== null && Le !== void 0 ? Le : "transparent",
            isSelected: !1
          };
        });
        t(32, E = [...B, ...wt]);
      }
    i.$$.dirty[0] & /*uploading*/
    1073741824 && ie && se(), i.$$.dirty[1] & /*dragging*/
    1 && te("drag", M), i.$$.dirty[0] & /*active_source, sources*/
    18 && !x && _ && t(1, x = _[0]);
  }, [
    s,
    x,
    r,
    a,
    _,
    c,
    u,
    d,
    h,
    p,
    f,
    m,
    g,
    v,
    b,
    q,
    S,
    C,
    y,
    z,
    L,
    w,
    I,
    R,
    V,
    F,
    $,
    Z,
    de,
    Y,
    ie,
    M,
    E,
    N,
    re,
    X,
    P,
    le,
    se,
    A,
    n,
    _e,
    D,
    Ve,
    et,
    ce,
    fe,
    ne,
    bt,
    Zt,
    hn,
    Li,
    Bl,
    Ml,
    El,
    l
  ];
}
class xp extends Xp {
  constructor(e) {
    super(), Tp(
      this,
      e,
      Qp,
      Zp,
      Fp,
      {
        value: 0,
        label: 2,
        show_label: 3,
        sources: 4,
        selectable: 5,
        root: 6,
        interactive: 7,
        i18n: 8,
        showShareButton: 9,
        showDownloadButton: 10,
        showClearButton: 11,
        boxesAlpha: 12,
        labelList: 13,
        labelColors: 14,
        boxMinSize: 15,
        handleSize: 16,
        height: 17,
        width: 18,
        boxThickness: 19,
        disableEditBoxes: 20,
        singleBox: 21,
        showRemoveButton: 22,
        handlesCursor: 23,
        boxSelectedThickness: 24,
        max_file_size: 25,
        cli_upload: 26,
        stream_handler: 27,
        useDefaultLabel: 28,
        enableKeyboardShortcuts: 29,
        active_source: 1
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: eb,
  attr: ll,
  detach: q_,
  element: z_,
  init: tb,
  insert: D_,
  noop: fr,
  safe_not_equal: nb,
  src_url_equal: ur,
  toggle_class: sn
} = window.__gradio__svelte__internal;
function dr(i) {
  let e, t;
  return {
    c() {
      e = z_("img"), ur(e.src, t = /*value*/
      i[0].url) || ll(e, "src", t), ll(e, "alt", "");
    },
    m(n, l) {
      D_(n, e, l);
    },
    p(n, l) {
      l & /*value*/
      1 && !ur(e.src, t = /*value*/
      n[0].url) && ll(e, "src", t);
    },
    d(n) {
      n && q_(e);
    }
  };
}
function ib(i) {
  let e, t = (
    /*value*/
    i[0] && dr(i)
  );
  return {
    c() {
      e = z_("div"), t && t.c(), ll(e, "class", "container svelte-1sgcyba"), sn(
        e,
        "table",
        /*type*/
        i[1] === "table"
      ), sn(
        e,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), sn(
        e,
        "selected",
        /*selected*/
        i[2]
      ), sn(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    m(n, l) {
      D_(n, e, l), t && t.m(e, null);
    },
    p(n, [l]) {
      /*value*/
      n[0] ? t ? t.p(n, l) : (t = dr(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), l & /*type*/
      2 && sn(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), l & /*type*/
      2 && sn(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), l & /*selected*/
      4 && sn(
        e,
        "selected",
        /*selected*/
        n[2]
      ), l & /*value*/
      1 && sn(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: fr,
    o: fr,
    d(n) {
      n && q_(e), t && t.d();
    }
  };
}
function lb(i, e, t) {
  let { value: n } = e, { type: l } = e, { selected: o = !1 } = e;
  return i.$$set = (s) => {
    "value" in s && t(0, n = s.value), "type" in s && t(1, l = s.type), "selected" in s && t(2, o = s.selected);
  }, [n, l, o];
}
class Cq extends eb {
  constructor(e) {
    super(), tb(this, e, lb, ib, nb, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: ob,
  add_flush_callback: hr,
  assign: sb,
  bind: mr,
  binding_callbacks: gr,
  check_outros: ab,
  create_component: Ln,
  destroy_component: Wn,
  detach: B_,
  empty: rb,
  flush: Q,
  get_spread_object: _b,
  get_spread_update: cb,
  group_outros: fb,
  init: ub,
  insert: M_,
  mount_component: Rn,
  safe_not_equal: db,
  space: hb,
  transition_in: $t,
  transition_out: Kt
} = window.__gradio__svelte__internal;
function mb(i) {
  let e, t;
  return e = new Of({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [bb] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Ln(e.$$.fragment);
    },
    m(n, l) {
      Rn(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*$$scope*/
      16384 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || ($t(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Kt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Wn(e, n);
    }
  };
}
function gb(i) {
  let e, t;
  return e = new Er({
    props: {
      i18n: (
        /*gradio*/
        i[32].i18n
      ),
      type: "clipboard",
      mode: "short"
    }
  }), {
    c() {
      Ln(e.$$.fragment);
    },
    m(n, l) {
      Rn(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*gradio*/
      2 && (o.i18n = /*gradio*/
      n[32].i18n), e.$set(o);
    },
    i(n) {
      t || ($t(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Kt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Wn(e, n);
    }
  };
}
function pb(i) {
  let e, t;
  return e = new Er({
    props: {
      i18n: (
        /*gradio*/
        i[32].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      Ln(e.$$.fragment);
    },
    m(n, l) {
      Rn(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*gradio*/
      2 && (o.i18n = /*gradio*/
      n[32].i18n), e.$set(o);
    },
    i(n) {
      t || ($t(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Kt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Wn(e, n);
    }
  };
}
function bb(i) {
  let e, t;
  return e = new yr({}), {
    c() {
      Ln(e.$$.fragment);
    },
    m(n, l) {
      Rn(e, n, l), t = !0;
    },
    i(n) {
      t || ($t(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Kt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Wn(e, n);
    }
  };
}
function wb(i) {
  let e, t, n, l;
  const o = [pb, gb, mb], s = [];
  function r(a, _) {
    return (
      /*active_source*/
      a[34] === "upload" ? 0 : (
        /*active_source*/
        a[34] === "clipboard" ? 1 : 2
      )
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = rb();
    },
    m(a, _) {
      s[e].m(a, _), M_(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (fb(), Kt(s[c], 1, 1, () => {
        s[c] = null;
      }), ab(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), $t(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || ($t(t), l = !0);
    },
    o(a) {
      Kt(t), l = !1;
    },
    d(a) {
      a && B_(n), s[e].d(a);
    }
  };
}
function vb(i) {
  let e, t, n, l, o, s;
  const r = [
    {
      autoscroll: (
        /*gradio*/
        i[32].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      i[32].i18n
    ) },
    /*loading_status*/
    i[1]
  ];
  let a = {};
  for (let d = 0; d < r.length; d += 1)
    a = sb(a, r[d]);
  e = new G1({ props: a });
  function _(d) {
    i[35](d);
  }
  function c(d) {
    i[36](d);
  }
  let u = {
    selectable: (
      /*_selectable*/
      i[10]
    ),
    root: (
      /*root*/
      i[7]
    ),
    sources: (
      /*sources*/
      i[14]
    ),
    interactive: (
      /*interactive*/
      i[18]
    ),
    showDownloadButton: (
      /*show_download_button*/
      i[15]
    ),
    showShareButton: (
      /*show_share_button*/
      i[16]
    ),
    showClearButton: (
      /*show_clear_button*/
      i[17]
    ),
    i18n: (
      /*gradio*/
      i[32].i18n
    ),
    boxesAlpha: (
      /*boxes_alpha*/
      i[19]
    ),
    height: (
      /*height*/
      i[8]
    ),
    width: (
      /*width*/
      i[9]
    ),
    labelList: (
      /*label_list*/
      i[20]
    ),
    labelColors: (
      /*label_colors*/
      i[21]
    ),
    boxMinSize: (
      /*box_min_size*/
      i[22]
    ),
    label: (
      /*label*/
      i[5]
    ),
    show_label: (
      /*show_label*/
      i[6]
    ),
    max_file_size: (
      /*gradio*/
      i[32].max_file_size
    ),
    cli_upload: (
      /*gradio*/
      i[32].client.upload
    ),
    stream_handler: (
      /*gradio*/
      i[32].client.stream
    ),
    handleSize: (
      /*handle_size*/
      i[23]
    ),
    boxThickness: (
      /*box_thickness*/
      i[24]
    ),
    boxSelectedThickness: (
      /*box_selected_thickness*/
      i[25]
    ),
    disableEditBoxes: (
      /*disable_edit_boxes*/
      i[26]
    ),
    singleBox: (
      /*single_box*/
      i[27]
    ),
    showRemoveButton: (
      /*show_remove_button*/
      i[28]
    ),
    handlesCursor: (
      /*handles_cursor*/
      i[29]
    ),
    useDefaultLabel: (
      /*use_default_label*/
      i[30]
    ),
    enableKeyboardShortcuts: (
      /*enable_keyboard_shortcuts*/
      i[31]
    ),
    $$slots: { default: [wb] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[34] !== void 0 && (u.active_source = /*active_source*/
    i[34]), /*value*/
    i[0] !== void 0 && (u.value = /*value*/
    i[0]), n = new xp({ props: u }), gr.push(() => mr(n, "active_source", _)), gr.push(() => mr(n, "value", c)), n.$on(
      "change",
      /*change_handler*/
      i[37]
    ), n.$on(
      "edit",
      /*edit_handler*/
      i[38]
    ), n.$on(
      "clear",
      /*clear_handler*/
      i[39]
    ), n.$on(
      "drag",
      /*drag_handler*/
      i[40]
    ), n.$on(
      "upload",
      /*upload_handler*/
      i[41]
    ), n.$on(
      "select",
      /*select_handler*/
      i[42]
    ), n.$on(
      "share",
      /*share_handler*/
      i[43]
    ), n.$on(
      "error",
      /*error_handler*/
      i[44]
    ), {
      c() {
        Ln(e.$$.fragment), t = hb(), Ln(n.$$.fragment);
      },
      m(d, h) {
        Rn(e, d, h), M_(d, t, h), Rn(n, d, h), s = !0;
      },
      p(d, h) {
        const p = h[0] & /*loading_status*/
        2 | h[1] & /*gradio*/
        2 ? cb(r, [
          h[1] & /*gradio*/
          2 && {
            autoscroll: (
              /*gradio*/
              d[32].autoscroll
            )
          },
          h[1] & /*gradio*/
          2 && { i18n: (
            /*gradio*/
            d[32].i18n
          ) },
          h[0] & /*loading_status*/
          2 && _b(
            /*loading_status*/
            d[1]
          )
        ]) : {};
        e.$set(p);
        const f = {};
        h[0] & /*_selectable*/
        1024 && (f.selectable = /*_selectable*/
        d[10]), h[0] & /*root*/
        128 && (f.root = /*root*/
        d[7]), h[0] & /*sources*/
        16384 && (f.sources = /*sources*/
        d[14]), h[0] & /*interactive*/
        262144 && (f.interactive = /*interactive*/
        d[18]), h[0] & /*show_download_button*/
        32768 && (f.showDownloadButton = /*show_download_button*/
        d[15]), h[0] & /*show_share_button*/
        65536 && (f.showShareButton = /*show_share_button*/
        d[16]), h[0] & /*show_clear_button*/
        131072 && (f.showClearButton = /*show_clear_button*/
        d[17]), h[1] & /*gradio*/
        2 && (f.i18n = /*gradio*/
        d[32].i18n), h[0] & /*boxes_alpha*/
        524288 && (f.boxesAlpha = /*boxes_alpha*/
        d[19]), h[0] & /*height*/
        256 && (f.height = /*height*/
        d[8]), h[0] & /*width*/
        512 && (f.width = /*width*/
        d[9]), h[0] & /*label_list*/
        1048576 && (f.labelList = /*label_list*/
        d[20]), h[0] & /*label_colors*/
        2097152 && (f.labelColors = /*label_colors*/
        d[21]), h[0] & /*box_min_size*/
        4194304 && (f.boxMinSize = /*box_min_size*/
        d[22]), h[0] & /*label*/
        32 && (f.label = /*label*/
        d[5]), h[0] & /*show_label*/
        64 && (f.show_label = /*show_label*/
        d[6]), h[1] & /*gradio*/
        2 && (f.max_file_size = /*gradio*/
        d[32].max_file_size), h[1] & /*gradio*/
        2 && (f.cli_upload = /*gradio*/
        d[32].client.upload), h[1] & /*gradio*/
        2 && (f.stream_handler = /*gradio*/
        d[32].client.stream), h[0] & /*handle_size*/
        8388608 && (f.handleSize = /*handle_size*/
        d[23]), h[0] & /*box_thickness*/
        16777216 && (f.boxThickness = /*box_thickness*/
        d[24]), h[0] & /*box_selected_thickness*/
        33554432 && (f.boxSelectedThickness = /*box_selected_thickness*/
        d[25]), h[0] & /*disable_edit_boxes*/
        67108864 && (f.disableEditBoxes = /*disable_edit_boxes*/
        d[26]), h[0] & /*single_box*/
        134217728 && (f.singleBox = /*single_box*/
        d[27]), h[0] & /*show_remove_button*/
        268435456 && (f.showRemoveButton = /*show_remove_button*/
        d[28]), h[0] & /*handles_cursor*/
        536870912 && (f.handlesCursor = /*handles_cursor*/
        d[29]), h[0] & /*use_default_label*/
        1073741824 && (f.useDefaultLabel = /*use_default_label*/
        d[30]), h[1] & /*enable_keyboard_shortcuts*/
        1 && (f.enableKeyboardShortcuts = /*enable_keyboard_shortcuts*/
        d[31]), h[1] & /*$$scope, gradio, active_source*/
        16394 && (f.$$scope = { dirty: h, ctx: d }), !l && h[1] & /*active_source*/
        8 && (l = !0, f.active_source = /*active_source*/
        d[34], hr(() => l = !1)), !o && h[0] & /*value*/
        1 && (o = !0, f.value = /*value*/
        d[0], hr(() => o = !1)), n.$set(f);
      },
      i(d) {
        s || ($t(e.$$.fragment, d), $t(n.$$.fragment, d), s = !0);
      },
      o(d) {
        Kt(e.$$.fragment, d), Kt(n.$$.fragment, d), s = !1;
      },
      d(d) {
        d && B_(t), Wn(e, d), Wn(n, d);
      }
    }
  );
}
function kb(i) {
  let e, t;
  return e = new hc({
    props: {
      visible: (
        /*visible*/
        i[4]
      ),
      variant: "solid",
      border_mode: (
        /*dragging*/
        i[33] ? "focus" : "base"
      ),
      padding: !1,
      elem_id: (
        /*elem_id*/
        i[2]
      ),
      elem_classes: (
        /*elem_classes*/
        i[3]
      ),
      width: (
        /*width*/
        i[9]
      ),
      allow_overflow: !1,
      container: (
        /*container*/
        i[11]
      ),
      scale: (
        /*scale*/
        i[12]
      ),
      min_width: (
        /*min_width*/
        i[13]
      ),
      $$slots: { default: [vb] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Ln(e.$$.fragment);
    },
    m(n, l) {
      Rn(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*visible*/
      16 && (o.visible = /*visible*/
      n[4]), l[1] & /*dragging*/
      4 && (o.border_mode = /*dragging*/
      n[33] ? "focus" : "base"), l[0] & /*elem_id*/
      4 && (o.elem_id = /*elem_id*/
      n[2]), l[0] & /*elem_classes*/
      8 && (o.elem_classes = /*elem_classes*/
      n[3]), l[0] & /*width*/
      512 && (o.width = /*width*/
      n[9]), l[0] & /*container*/
      2048 && (o.container = /*container*/
      n[11]), l[0] & /*scale*/
      4096 && (o.scale = /*scale*/
      n[12]), l[0] & /*min_width*/
      8192 && (o.min_width = /*min_width*/
      n[13]), l[0] & /*_selectable, root, sources, interactive, show_download_button, show_share_button, show_clear_button, boxes_alpha, height, width, label_list, label_colors, box_min_size, label, show_label, handle_size, box_thickness, box_selected_thickness, disable_edit_boxes, single_box, show_remove_button, handles_cursor, use_default_label, value, loading_status*/
      2147469283 | l[1] & /*$$scope, gradio, enable_keyboard_shortcuts, active_source, dragging*/
      16399 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || ($t(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Kt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Wn(e, n);
    }
  };
}
function Cb(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: l = [] } = e, { visible: o = !0 } = e, { value: s = null } = e, { label: r } = e, { show_label: a } = e, { root: _ } = e, { height: c } = e, { width: u } = e, { _selectable: d = !1 } = e, { container: h = !0 } = e, { scale: p = null } = e, { min_width: f = void 0 } = e, { loading_status: m } = e, { sources: g = ["upload", "webcam", "clipboard"] } = e, { show_download_button: v } = e, { show_share_button: b } = e, { show_clear_button: q } = e, { interactive: S } = e, { boxes_alpha: C } = e, { label_list: y } = e, { label_colors: z } = e, { box_min_size: L } = e, { handle_size: w } = e, { box_thickness: I } = e, { box_selected_thickness: R } = e, { disable_edit_boxes: V } = e, { single_box: F } = e, { show_remove_button: $ } = e, { handles_cursor: Z } = e, { use_default_label: de } = e, { enable_keyboard_shortcuts: Y } = e, { gradio: E } = e, A, N = null;
  function ie(D) {
    N = D, t(34, N);
  }
  function x(D) {
    s = D, t(0, s);
  }
  const re = () => E.dispatch("change"), X = () => E.dispatch("edit"), te = () => {
    E.dispatch("clear");
  }, M = ({ detail: D }) => t(33, A = D), P = () => E.dispatch("upload"), le = ({ detail: D }) => E.dispatch("select", D), se = ({ detail: D }) => E.dispatch("share", D), _e = ({ detail: D }) => {
    t(1, m = m || {}), t(1, m.status = "error", m), E.dispatch("error", D);
  };
  return i.$$set = (D) => {
    "elem_id" in D && t(2, n = D.elem_id), "elem_classes" in D && t(3, l = D.elem_classes), "visible" in D && t(4, o = D.visible), "value" in D && t(0, s = D.value), "label" in D && t(5, r = D.label), "show_label" in D && t(6, a = D.show_label), "root" in D && t(7, _ = D.root), "height" in D && t(8, c = D.height), "width" in D && t(9, u = D.width), "_selectable" in D && t(10, d = D._selectable), "container" in D && t(11, h = D.container), "scale" in D && t(12, p = D.scale), "min_width" in D && t(13, f = D.min_width), "loading_status" in D && t(1, m = D.loading_status), "sources" in D && t(14, g = D.sources), "show_download_button" in D && t(15, v = D.show_download_button), "show_share_button" in D && t(16, b = D.show_share_button), "show_clear_button" in D && t(17, q = D.show_clear_button), "interactive" in D && t(18, S = D.interactive), "boxes_alpha" in D && t(19, C = D.boxes_alpha), "label_list" in D && t(20, y = D.label_list), "label_colors" in D && t(21, z = D.label_colors), "box_min_size" in D && t(22, L = D.box_min_size), "handle_size" in D && t(23, w = D.handle_size), "box_thickness" in D && t(24, I = D.box_thickness), "box_selected_thickness" in D && t(25, R = D.box_selected_thickness), "disable_edit_boxes" in D && t(26, V = D.disable_edit_boxes), "single_box" in D && t(27, F = D.single_box), "show_remove_button" in D && t(28, $ = D.show_remove_button), "handles_cursor" in D && t(29, Z = D.handles_cursor), "use_default_label" in D && t(30, de = D.use_default_label), "enable_keyboard_shortcuts" in D && t(31, Y = D.enable_keyboard_shortcuts), "gradio" in D && t(32, E = D.gradio);
  }, [
    s,
    m,
    n,
    l,
    o,
    r,
    a,
    _,
    c,
    u,
    d,
    h,
    p,
    f,
    g,
    v,
    b,
    q,
    S,
    C,
    y,
    z,
    L,
    w,
    I,
    R,
    V,
    F,
    $,
    Z,
    de,
    Y,
    E,
    A,
    N,
    ie,
    x,
    re,
    X,
    te,
    M,
    P,
    le,
    se,
    _e
  ];
}
class yq extends ob {
  constructor(e) {
    super(), ub(
      this,
      e,
      Cb,
      kb,
      db,
      {
        elem_id: 2,
        elem_classes: 3,
        visible: 4,
        value: 0,
        label: 5,
        show_label: 6,
        root: 7,
        height: 8,
        width: 9,
        _selectable: 10,
        container: 11,
        scale: 12,
        min_width: 13,
        loading_status: 1,
        sources: 14,
        show_download_button: 15,
        show_share_button: 16,
        show_clear_button: 17,
        interactive: 18,
        boxes_alpha: 19,
        label_list: 20,
        label_colors: 21,
        box_min_size: 22,
        handle_size: 23,
        box_thickness: 24,
        box_selected_thickness: 25,
        disable_edit_boxes: 26,
        single_box: 27,
        show_remove_button: 28,
        handles_cursor: 29,
        use_default_label: 30,
        enable_keyboard_shortcuts: 31,
        gradio: 32
      },
      null,
      [-1, -1]
    );
  }
  get elem_id() {
    return this.$$.ctx[2];
  }
  set elem_id(e) {
    this.$$set({ elem_id: e }), Q();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), Q();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), Q();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), Q();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), Q();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), Q();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), Q();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), Q();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), Q();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), Q();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), Q();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), Q();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), Q();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), Q();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), Q();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), Q();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), Q();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), Q();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), Q();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), Q();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), Q();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), Q();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), Q();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), Q();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), Q();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), Q();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), Q();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), Q();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), Q();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), Q();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), Q();
  }
  get enable_keyboard_shortcuts() {
    return this.$$.ctx[31];
  }
  set enable_keyboard_shortcuts(e) {
    this.$$set({ enable_keyboard_shortcuts: e }), Q();
  }
  get gradio() {
    return this.$$.ctx[32];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), Q();
  }
}
export {
  Cq as BaseExample,
  yq as default
};
