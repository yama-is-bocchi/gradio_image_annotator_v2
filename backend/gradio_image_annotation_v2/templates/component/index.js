const {
  SvelteComponent: N_,
  assign: $_,
  create_slot: K_,
  detach: Z_,
  element: G_,
  get_all_dirty_from_scope: J_,
  get_slot_changes: Q_,
  get_spread_update: x_,
  init: ec,
  insert: tc,
  safe_not_equal: nc,
  set_dynamic_element_data: _s,
  set_style: Fe,
  toggle_class: ut,
  transition_in: fr,
  transition_out: ur,
  update_slot_base: ic
} = window.__gradio__svelte__internal;
function lc(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[18].default
  ), o = K_(
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
    r = $_(r, s[a]);
  return {
    c() {
      e = G_(
        /*tag*/
        i[14]
      ), o && o.c(), _s(
        /*tag*/
        i[14]
      )(e, r), ut(
        e,
        "hidden",
        /*visible*/
        i[10] === !1
      ), ut(
        e,
        "padded",
        /*padding*/
        i[6]
      ), ut(
        e,
        "border_focus",
        /*border_mode*/
        i[5] === "focus"
      ), ut(
        e,
        "border_contrast",
        /*border_mode*/
        i[5] === "contrast"
      ), ut(e, "hide-container", !/*explicit_call*/
      i[8] && !/*container*/
      i[9]), Fe(
        e,
        "height",
        /*get_dimension*/
        i[15](
          /*height*/
          i[0]
        )
      ), Fe(e, "width", typeof /*width*/
      i[1] == "number" ? `calc(min(${/*width*/
      i[1]}px, 100%))` : (
        /*get_dimension*/
        i[15](
          /*width*/
          i[1]
        )
      )), Fe(
        e,
        "border-style",
        /*variant*/
        i[4]
      ), Fe(
        e,
        "overflow",
        /*allow_overflow*/
        i[11] ? "visible" : "hidden"
      ), Fe(
        e,
        "flex-grow",
        /*scale*/
        i[12]
      ), Fe(e, "min-width", `calc(min(${/*min_width*/
      i[13]}px, 100%))`), Fe(e, "border-width", "var(--block-border-width)");
    },
    m(a, _) {
      tc(a, e, _), o && o.m(e, null), n = !0;
    },
    p(a, _) {
      o && o.p && (!n || _ & /*$$scope*/
      131072) && ic(
        o,
        l,
        a,
        /*$$scope*/
        a[17],
        n ? Q_(
          l,
          /*$$scope*/
          a[17],
          _,
          null
        ) : J_(
          /*$$scope*/
          a[17]
        ),
        null
      ), _s(
        /*tag*/
        a[14]
      )(e, r = x_(s, [
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
      ])), ut(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), ut(
        e,
        "padded",
        /*padding*/
        a[6]
      ), ut(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), ut(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), ut(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), _ & /*height*/
      1 && Fe(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), _ & /*width*/
      2 && Fe(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), _ & /*variant*/
      16 && Fe(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), _ & /*allow_overflow*/
      2048 && Fe(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), _ & /*scale*/
      4096 && Fe(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), _ & /*min_width*/
      8192 && Fe(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (fr(o, a), n = !0);
    },
    o(a) {
      ur(o, a), n = !1;
    },
    d(a) {
      a && Z_(e), o && o.d(a);
    }
  };
}
function oc(i) {
  let e, t = (
    /*tag*/
    i[14] && lc(i)
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
      e || (fr(t, n), e = !0);
    },
    o(n) {
      ur(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function sc(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { height: o = void 0 } = e, { width: s = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: _ = "solid" } = e, { border_mode: c = "base" } = e, { padding: u = !0 } = e, { type: d = "normal" } = e, { test_id: h = void 0 } = e, { explicit_call: g = !1 } = e, { container: f = !0 } = e, { visible: m = !0 } = e, { allow_overflow: p = !0 } = e, { scale: v = null } = e, { min_width: b = 0 } = e, z = d === "fieldset" ? "fieldset" : "div";
  const S = (C) => {
    if (C !== void 0) {
      if (typeof C == "number")
        return C + "px";
      if (typeof C == "string")
        return C;
    }
  };
  return i.$$set = (C) => {
    "height" in C && t(0, o = C.height), "width" in C && t(1, s = C.width), "elem_id" in C && t(2, r = C.elem_id), "elem_classes" in C && t(3, a = C.elem_classes), "variant" in C && t(4, _ = C.variant), "border_mode" in C && t(5, c = C.border_mode), "padding" in C && t(6, u = C.padding), "type" in C && t(16, d = C.type), "test_id" in C && t(7, h = C.test_id), "explicit_call" in C && t(8, g = C.explicit_call), "container" in C && t(9, f = C.container), "visible" in C && t(10, m = C.visible), "allow_overflow" in C && t(11, p = C.allow_overflow), "scale" in C && t(12, v = C.scale), "min_width" in C && t(13, b = C.min_width), "$$scope" in C && t(17, l = C.$$scope);
  }, [
    o,
    s,
    r,
    a,
    _,
    c,
    u,
    h,
    g,
    f,
    m,
    p,
    v,
    b,
    z,
    S,
    d,
    l,
    n
  ];
}
class ac extends N_ {
  constructor(e) {
    super(), ec(this, e, sc, oc, nc, {
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
  SvelteComponent: rc,
  attr: _c,
  create_slot: cc,
  detach: fc,
  element: uc,
  get_all_dirty_from_scope: dc,
  get_slot_changes: hc,
  init: mc,
  insert: gc,
  safe_not_equal: pc,
  transition_in: bc,
  transition_out: wc,
  update_slot_base: vc
} = window.__gradio__svelte__internal;
function kc(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), l = cc(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = uc("div"), l && l.c(), _c(e, "class", "svelte-1hnfib2");
    },
    m(o, s) {
      gc(o, e, s), l && l.m(e, null), t = !0;
    },
    p(o, [s]) {
      l && l.p && (!t || s & /*$$scope*/
      1) && vc(
        l,
        n,
        o,
        /*$$scope*/
        o[0],
        t ? hc(
          n,
          /*$$scope*/
          o[0],
          s,
          null
        ) : dc(
          /*$$scope*/
          o[0]
        ),
        null
      );
    },
    i(o) {
      t || (bc(l, o), t = !0);
    },
    o(o) {
      wc(l, o), t = !1;
    },
    d(o) {
      o && fc(e), l && l.d(o);
    }
  };
}
function Cc(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  return i.$$set = (o) => {
    "$$scope" in o && t(0, l = o.$$scope);
  }, [l, n];
}
class yc extends rc {
  constructor(e) {
    super(), mc(this, e, Cc, kc, pc, {});
  }
}
const {
  SvelteComponent: Sc,
  attr: cs,
  check_outros: qc,
  create_component: zc,
  create_slot: Dc,
  destroy_component: Bc,
  detach: Ki,
  element: Mc,
  empty: Ec,
  get_all_dirty_from_scope: Lc,
  get_slot_changes: Wc,
  group_outros: Rc,
  init: Xc,
  insert: Zi,
  mount_component: Yc,
  safe_not_equal: Ac,
  set_data: Ic,
  space: Hc,
  text: Tc,
  toggle_class: Bn,
  transition_in: fi,
  transition_out: Gi,
  update_slot_base: jc
} = window.__gradio__svelte__internal;
function fs(i) {
  let e, t;
  return e = new yc({
    props: {
      $$slots: { default: [Fc] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      zc(e.$$.fragment);
    },
    m(n, l) {
      Yc(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l & /*$$scope, info*/
      10 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (fi(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Gi(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Bc(e, n);
    }
  };
}
function Fc(i) {
  let e;
  return {
    c() {
      e = Tc(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      Zi(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && Ic(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && Ki(e);
    }
  };
}
function Pc(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[2].default
  ), s = Dc(
    o,
    i,
    /*$$scope*/
    i[3],
    null
  );
  let r = (
    /*info*/
    i[1] && fs(i)
  );
  return {
    c() {
      e = Mc("span"), s && s.c(), t = Hc(), r && r.c(), n = Ec(), cs(e, "data-testid", "block-info"), cs(e, "class", "svelte-22c38v"), Bn(e, "sr-only", !/*show_label*/
      i[0]), Bn(e, "hide", !/*show_label*/
      i[0]), Bn(
        e,
        "has-info",
        /*info*/
        i[1] != null
      );
    },
    m(a, _) {
      Zi(a, e, _), s && s.m(e, null), Zi(a, t, _), r && r.m(a, _), Zi(a, n, _), l = !0;
    },
    p(a, [_]) {
      s && s.p && (!l || _ & /*$$scope*/
      8) && jc(
        s,
        o,
        a,
        /*$$scope*/
        a[3],
        l ? Wc(
          o,
          /*$$scope*/
          a[3],
          _,
          null
        ) : Lc(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!l || _ & /*show_label*/
      1) && Bn(e, "sr-only", !/*show_label*/
      a[0]), (!l || _ & /*show_label*/
      1) && Bn(e, "hide", !/*show_label*/
      a[0]), (!l || _ & /*info*/
      2) && Bn(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, _), _ & /*info*/
      2 && fi(r, 1)) : (r = fs(a), r.c(), fi(r, 1), r.m(n.parentNode, n)) : r && (Rc(), Gi(r, 1, 1, () => {
        r = null;
      }), qc());
    },
    i(a) {
      l || (fi(s, a), fi(r), l = !0);
    },
    o(a) {
      Gi(s, a), Gi(r), l = !1;
    },
    d(a) {
      a && (Ki(e), Ki(t), Ki(n)), s && s.d(a), r && r.d(a);
    }
  };
}
function Uc(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { show_label: o = !0 } = e, { info: s = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, o = r.show_label), "info" in r && t(1, s = r.info), "$$scope" in r && t(3, l = r.$$scope);
  }, [o, s, n, l];
}
class dr extends Sc {
  constructor(e) {
    super(), Xc(this, e, Uc, Pc, Ac, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: Oc,
  append: Ll,
  attr: Mi,
  create_component: Vc,
  destroy_component: Nc,
  detach: $c,
  element: us,
  init: Kc,
  insert: Zc,
  mount_component: Gc,
  safe_not_equal: Jc,
  set_data: Qc,
  space: xc,
  text: ef,
  toggle_class: Tt,
  transition_in: tf,
  transition_out: nf
} = window.__gradio__svelte__internal;
function lf(i) {
  let e, t, n, l, o, s;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = us("label"), t = us("span"), Vc(n.$$.fragment), l = xc(), o = ef(
        /*label*/
        i[0]
      ), Mi(t, "class", "svelte-9gxdi0"), Mi(e, "for", ""), Mi(e, "data-testid", "block-label"), Mi(e, "class", "svelte-9gxdi0"), Tt(e, "hide", !/*show_label*/
      i[2]), Tt(e, "sr-only", !/*show_label*/
      i[2]), Tt(
        e,
        "float",
        /*float*/
        i[4]
      ), Tt(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      Zc(r, e, a), Ll(e, t), Gc(n, t, null), Ll(e, l), Ll(e, o), s = !0;
    },
    p(r, [a]) {
      (!s || a & /*label*/
      1) && Qc(
        o,
        /*label*/
        r[0]
      ), (!s || a & /*show_label*/
      4) && Tt(e, "hide", !/*show_label*/
      r[2]), (!s || a & /*show_label*/
      4) && Tt(e, "sr-only", !/*show_label*/
      r[2]), (!s || a & /*float*/
      16) && Tt(
        e,
        "float",
        /*float*/
        r[4]
      ), (!s || a & /*disable*/
      8) && Tt(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      s || (tf(n.$$.fragment, r), s = !0);
    },
    o(r) {
      nf(n.$$.fragment, r), s = !1;
    },
    d(r) {
      r && $c(e), Nc(n);
    }
  };
}
function of(i, e, t) {
  let { label: n = null } = e, { Icon: l } = e, { show_label: o = !0 } = e, { disable: s = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, l = a.Icon), "show_label" in a && t(2, o = a.show_label), "disable" in a && t(3, s = a.disable), "float" in a && t(4, r = a.float);
  }, [n, l, o, s, r];
}
class sf extends Oc {
  constructor(e) {
    super(), Kc(this, e, of, lf, Jc, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: af,
  append: So,
  attr: Et,
  bubble: rf,
  create_component: _f,
  destroy_component: cf,
  detach: hr,
  element: qo,
  init: ff,
  insert: mr,
  listen: uf,
  mount_component: df,
  safe_not_equal: hf,
  set_data: mf,
  set_style: Mn,
  space: gf,
  text: pf,
  toggle_class: Ee,
  transition_in: bf,
  transition_out: wf
} = window.__gradio__svelte__internal;
function ds(i) {
  let e, t;
  return {
    c() {
      e = qo("span"), t = pf(
        /*label*/
        i[1]
      ), Et(e, "class", "svelte-1lrphxw");
    },
    m(n, l) {
      mr(n, e, l), So(e, t);
    },
    p(n, l) {
      l & /*label*/
      2 && mf(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && hr(e);
    }
  };
}
function vf(i) {
  let e, t, n, l, o, s, r, a = (
    /*show_label*/
    i[2] && ds(i)
  );
  return l = new /*Icon*/
  i[0]({}), {
    c() {
      e = qo("button"), a && a.c(), t = gf(), n = qo("div"), _f(l.$$.fragment), Et(n, "class", "svelte-1lrphxw"), Ee(
        n,
        "small",
        /*size*/
        i[4] === "small"
      ), Ee(
        n,
        "large",
        /*size*/
        i[4] === "large"
      ), Ee(
        n,
        "medium",
        /*size*/
        i[4] === "medium"
      ), e.disabled = /*disabled*/
      i[7], Et(
        e,
        "aria-label",
        /*label*/
        i[1]
      ), Et(
        e,
        "aria-haspopup",
        /*hasPopup*/
        i[8]
      ), Et(
        e,
        "title",
        /*label*/
        i[1]
      ), Et(e, "class", "svelte-1lrphxw"), Ee(
        e,
        "pending",
        /*pending*/
        i[3]
      ), Ee(
        e,
        "padded",
        /*padded*/
        i[5]
      ), Ee(
        e,
        "highlight",
        /*highlight*/
        i[6]
      ), Ee(
        e,
        "transparent",
        /*transparent*/
        i[9]
      ), Mn(e, "color", !/*disabled*/
      i[7] && /*_color*/
      i[12] ? (
        /*_color*/
        i[12]
      ) : "var(--block-label-text-color)"), Mn(e, "--bg-color", /*disabled*/
      i[7] ? "auto" : (
        /*background*/
        i[10]
      )), Mn(
        e,
        "margin-left",
        /*offset*/
        i[11] + "px"
      );
    },
    m(_, c) {
      mr(_, e, c), a && a.m(e, null), So(e, t), So(e, n), df(l, n, null), o = !0, s || (r = uf(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), s = !0);
    },
    p(_, [c]) {
      /*show_label*/
      _[2] ? a ? a.p(_, c) : (a = ds(_), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!o || c & /*size*/
      16) && Ee(
        n,
        "small",
        /*size*/
        _[4] === "small"
      ), (!o || c & /*size*/
      16) && Ee(
        n,
        "large",
        /*size*/
        _[4] === "large"
      ), (!o || c & /*size*/
      16) && Ee(
        n,
        "medium",
        /*size*/
        _[4] === "medium"
      ), (!o || c & /*disabled*/
      128) && (e.disabled = /*disabled*/
      _[7]), (!o || c & /*label*/
      2) && Et(
        e,
        "aria-label",
        /*label*/
        _[1]
      ), (!o || c & /*hasPopup*/
      256) && Et(
        e,
        "aria-haspopup",
        /*hasPopup*/
        _[8]
      ), (!o || c & /*label*/
      2) && Et(
        e,
        "title",
        /*label*/
        _[1]
      ), (!o || c & /*pending*/
      8) && Ee(
        e,
        "pending",
        /*pending*/
        _[3]
      ), (!o || c & /*padded*/
      32) && Ee(
        e,
        "padded",
        /*padded*/
        _[5]
      ), (!o || c & /*highlight*/
      64) && Ee(
        e,
        "highlight",
        /*highlight*/
        _[6]
      ), (!o || c & /*transparent*/
      512) && Ee(
        e,
        "transparent",
        /*transparent*/
        _[9]
      ), c & /*disabled, _color*/
      4224 && Mn(e, "color", !/*disabled*/
      _[7] && /*_color*/
      _[12] ? (
        /*_color*/
        _[12]
      ) : "var(--block-label-text-color)"), c & /*disabled, background*/
      1152 && Mn(e, "--bg-color", /*disabled*/
      _[7] ? "auto" : (
        /*background*/
        _[10]
      )), c & /*offset*/
      2048 && Mn(
        e,
        "margin-left",
        /*offset*/
        _[11] + "px"
      );
    },
    i(_) {
      o || (bf(l.$$.fragment, _), o = !0);
    },
    o(_) {
      wf(l.$$.fragment, _), o = !1;
    },
    d(_) {
      _ && hr(e), a && a.d(), cf(l), s = !1, r();
    }
  };
}
function kf(i, e, t) {
  let n, { Icon: l } = e, { label: o = "" } = e, { show_label: s = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: _ = !0 } = e, { highlight: c = !1 } = e, { disabled: u = !1 } = e, { hasPopup: d = !1 } = e, { color: h = "var(--block-label-text-color)" } = e, { transparent: g = !1 } = e, { background: f = "var(--background-fill-primary)" } = e, { offset: m = 0 } = e;
  function p(v) {
    rf.call(this, i, v);
  }
  return i.$$set = (v) => {
    "Icon" in v && t(0, l = v.Icon), "label" in v && t(1, o = v.label), "show_label" in v && t(2, s = v.show_label), "pending" in v && t(3, r = v.pending), "size" in v && t(4, a = v.size), "padded" in v && t(5, _ = v.padded), "highlight" in v && t(6, c = v.highlight), "disabled" in v && t(7, u = v.disabled), "hasPopup" in v && t(8, d = v.hasPopup), "color" in v && t(13, h = v.color), "transparent" in v && t(9, g = v.transparent), "background" in v && t(10, f = v.background), "offset" in v && t(11, m = v.offset);
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
    g,
    f,
    m,
    n,
    h,
    p
  ];
}
class ml extends af {
  constructor(e) {
    super(), ff(this, e, kf, vf, hf, {
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
  SvelteComponent: Cf,
  append: yf,
  attr: Wl,
  binding_callbacks: Sf,
  create_slot: qf,
  detach: zf,
  element: hs,
  get_all_dirty_from_scope: Df,
  get_slot_changes: Bf,
  init: Mf,
  insert: Ef,
  safe_not_equal: Lf,
  toggle_class: jt,
  transition_in: Wf,
  transition_out: Rf,
  update_slot_base: Xf
} = window.__gradio__svelte__internal;
function Yf(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[5].default
  ), o = qf(
    l,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = hs("div"), t = hs("div"), o && o.c(), Wl(t, "class", "icon svelte-3w3rth"), Wl(e, "class", "empty svelte-3w3rth"), Wl(e, "aria-label", "Empty value"), jt(
        e,
        "small",
        /*size*/
        i[0] === "small"
      ), jt(
        e,
        "large",
        /*size*/
        i[0] === "large"
      ), jt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        i[1]
      ), jt(
        e,
        "small_parent",
        /*parent_height*/
        i[3]
      );
    },
    m(s, r) {
      Ef(s, e, r), yf(e, t), o && o.m(t, null), i[6](e), n = !0;
    },
    p(s, [r]) {
      o && o.p && (!n || r & /*$$scope*/
      16) && Xf(
        o,
        l,
        s,
        /*$$scope*/
        s[4],
        n ? Bf(
          l,
          /*$$scope*/
          s[4],
          r,
          null
        ) : Df(
          /*$$scope*/
          s[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && jt(
        e,
        "small",
        /*size*/
        s[0] === "small"
      ), (!n || r & /*size*/
      1) && jt(
        e,
        "large",
        /*size*/
        s[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && jt(
        e,
        "unpadded_box",
        /*unpadded_box*/
        s[1]
      ), (!n || r & /*parent_height*/
      8) && jt(
        e,
        "small_parent",
        /*parent_height*/
        s[3]
      );
    },
    i(s) {
      n || (Wf(o, s), n = !0);
    },
    o(s) {
      Rf(o, s), n = !1;
    },
    d(s) {
      s && zf(e), o && o.d(s), i[6](null);
    }
  };
}
function Af(i, e, t) {
  let n, { $$slots: l = {}, $$scope: o } = e, { size: s = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function _(u) {
    var d;
    if (!u) return !1;
    const { height: h } = u.getBoundingClientRect(), { height: g } = ((d = u.parentElement) === null || d === void 0 ? void 0 : d.getBoundingClientRect()) || { height: h };
    return h > g + 2;
  }
  function c(u) {
    Sf[u ? "unshift" : "push"](() => {
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
class If extends Cf {
  constructor(e) {
    super(), Mf(this, e, Af, Yf, Lf, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: ub,
  append: db,
  attr: hb,
  detach: mb,
  init: gb,
  insert: pb,
  noop: bb,
  safe_not_equal: wb,
  svg_element: vb
} = window.__gradio__svelte__internal, {
  SvelteComponent: kb,
  append: Cb,
  attr: yb,
  detach: Sb,
  init: qb,
  insert: zb,
  noop: Db,
  safe_not_equal: Bb,
  svg_element: Mb
} = window.__gradio__svelte__internal, {
  SvelteComponent: Eb,
  append: Lb,
  attr: Wb,
  detach: Rb,
  init: Xb,
  insert: Yb,
  noop: Ab,
  safe_not_equal: Ib,
  svg_element: Hb
} = window.__gradio__svelte__internal, {
  SvelteComponent: Hf,
  append: ms,
  attr: Le,
  detach: Tf,
  init: jf,
  insert: Ff,
  noop: Rl,
  safe_not_equal: Pf,
  svg_element: Xl
} = window.__gradio__svelte__internal;
function Uf(i) {
  let e, t, n;
  return {
    c() {
      e = Xl("svg"), t = Xl("path"), n = Xl("circle"), Le(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), Le(n, "cx", "12"), Le(n, "cy", "13"), Le(n, "r", "4"), Le(e, "xmlns", "http://www.w3.org/2000/svg"), Le(e, "width", "100%"), Le(e, "height", "100%"), Le(e, "viewBox", "0 0 24 24"), Le(e, "fill", "none"), Le(e, "stroke", "currentColor"), Le(e, "stroke-width", "1.5"), Le(e, "stroke-linecap", "round"), Le(e, "stroke-linejoin", "round"), Le(e, "class", "feather feather-camera");
    },
    m(l, o) {
      Ff(l, e, o), ms(e, t), ms(e, n);
    },
    p: Rl,
    i: Rl,
    o: Rl,
    d(l) {
      l && Tf(e);
    }
  };
}
class Of extends Hf {
  constructor(e) {
    super(), jf(this, e, null, Uf, Pf, {});
  }
}
const {
  SvelteComponent: Tb,
  append: jb,
  attr: Fb,
  detach: Pb,
  init: Ub,
  insert: Ob,
  noop: Vb,
  safe_not_equal: Nb,
  svg_element: $b
} = window.__gradio__svelte__internal, {
  SvelteComponent: Kb,
  append: Zb,
  attr: Gb,
  detach: Jb,
  init: Qb,
  insert: xb,
  noop: e2,
  safe_not_equal: t2,
  svg_element: n2
} = window.__gradio__svelte__internal, {
  SvelteComponent: i2,
  append: l2,
  attr: o2,
  detach: s2,
  init: a2,
  insert: r2,
  noop: _2,
  safe_not_equal: c2,
  svg_element: f2
} = window.__gradio__svelte__internal, {
  SvelteComponent: Vf,
  append: Nf,
  attr: nt,
  detach: $f,
  init: Kf,
  insert: Zf,
  noop: Yl,
  safe_not_equal: Gf,
  svg_element: gs
} = window.__gradio__svelte__internal;
function Jf(i) {
  let e, t;
  return {
    c() {
      e = gs("svg"), t = gs("circle"), nt(t, "cx", "12"), nt(t, "cy", "12"), nt(t, "r", "10"), nt(e, "xmlns", "http://www.w3.org/2000/svg"), nt(e, "width", "100%"), nt(e, "height", "100%"), nt(e, "viewBox", "0 0 24 24"), nt(e, "stroke-width", "1.5"), nt(e, "stroke-linecap", "round"), nt(e, "stroke-linejoin", "round"), nt(e, "class", "feather feather-circle");
    },
    m(n, l) {
      Zf(n, e, l), Nf(e, t);
    },
    p: Yl,
    i: Yl,
    o: Yl,
    d(n) {
      n && $f(e);
    }
  };
}
class Qf extends Vf {
  constructor(e) {
    super(), Kf(this, e, null, Jf, Gf, {});
  }
}
const {
  SvelteComponent: xf,
  append: Al,
  attr: it,
  detach: eu,
  init: tu,
  insert: nu,
  noop: Il,
  safe_not_equal: iu,
  set_style: dt,
  svg_element: Ei
} = window.__gradio__svelte__internal;
function lu(i) {
  let e, t, n, l;
  return {
    c() {
      e = Ei("svg"), t = Ei("g"), n = Ei("path"), l = Ei("path"), it(n, "d", "M18,6L6.087,17.913"), dt(n, "fill", "none"), dt(n, "fill-rule", "nonzero"), dt(n, "stroke-width", "2px"), it(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), it(l, "d", "M4.364,4.364L19.636,19.636"), dt(l, "fill", "none"), dt(l, "fill-rule", "nonzero"), dt(l, "stroke-width", "2px"), it(e, "width", "100%"), it(e, "height", "100%"), it(e, "viewBox", "0 0 24 24"), it(e, "version", "1.1"), it(e, "xmlns", "http://www.w3.org/2000/svg"), it(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), it(e, "xml:space", "preserve"), it(e, "stroke", "currentColor"), dt(e, "fill-rule", "evenodd"), dt(e, "clip-rule", "evenodd"), dt(e, "stroke-linecap", "round"), dt(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      nu(o, e, s), Al(e, t), Al(t, n), Al(e, l);
    },
    p: Il,
    i: Il,
    o: Il,
    d(o) {
      o && eu(e);
    }
  };
}
class gr extends xf {
  constructor(e) {
    super(), tu(this, e, null, lu, iu, {});
  }
}
const {
  SvelteComponent: u2,
  append: d2,
  attr: h2,
  detach: m2,
  init: g2,
  insert: p2,
  noop: b2,
  safe_not_equal: w2,
  svg_element: v2
} = window.__gradio__svelte__internal, {
  SvelteComponent: k2,
  append: C2,
  attr: y2,
  detach: S2,
  init: q2,
  insert: z2,
  noop: D2,
  safe_not_equal: B2,
  svg_element: M2
} = window.__gradio__svelte__internal, {
  SvelteComponent: ou,
  append: su,
  attr: li,
  detach: au,
  init: ru,
  insert: _u,
  noop: Hl,
  safe_not_equal: cu,
  svg_element: ps
} = window.__gradio__svelte__internal;
function fu(i) {
  let e, t;
  return {
    c() {
      e = ps("svg"), t = ps("path"), li(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), li(t, "fill", "currentColor"), li(e, "id", "icon"), li(e, "xmlns", "http://www.w3.org/2000/svg"), li(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      _u(n, e, l), su(e, t);
    },
    p: Hl,
    i: Hl,
    o: Hl,
    d(n) {
      n && au(e);
    }
  };
}
class uu extends ou {
  constructor(e) {
    super(), ru(this, e, null, fu, cu, {});
  }
}
const {
  SvelteComponent: E2,
  append: L2,
  attr: W2,
  detach: R2,
  init: X2,
  insert: Y2,
  noop: A2,
  safe_not_equal: I2,
  svg_element: H2
} = window.__gradio__svelte__internal, {
  SvelteComponent: T2,
  append: j2,
  attr: F2,
  detach: P2,
  init: U2,
  insert: O2,
  noop: V2,
  safe_not_equal: N2,
  svg_element: $2
} = window.__gradio__svelte__internal, {
  SvelteComponent: K2,
  append: Z2,
  attr: G2,
  detach: J2,
  init: Q2,
  insert: x2,
  noop: ew,
  safe_not_equal: tw,
  svg_element: nw
} = window.__gradio__svelte__internal, {
  SvelteComponent: du,
  append: hu,
  attr: En,
  detach: mu,
  init: gu,
  insert: pu,
  noop: Tl,
  safe_not_equal: bu,
  svg_element: bs
} = window.__gradio__svelte__internal;
function wu(i) {
  let e, t;
  return {
    c() {
      e = bs("svg"), t = bs("path"), En(t, "fill", "currentColor"), En(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), En(e, "xmlns", "http://www.w3.org/2000/svg"), En(e, "width", "100%"), En(e, "height", "100%"), En(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      pu(n, e, l), hu(e, t);
    },
    p: Tl,
    i: Tl,
    o: Tl,
    d(n) {
      n && mu(e);
    }
  };
}
class vu extends du {
  constructor(e) {
    super(), gu(this, e, null, wu, bu, {});
  }
}
const {
  SvelteComponent: ku,
  append: Cu,
  attr: Ln,
  detach: yu,
  init: Su,
  insert: qu,
  noop: jl,
  safe_not_equal: zu,
  svg_element: ws
} = window.__gradio__svelte__internal;
function Du(i) {
  let e, t;
  return {
    c() {
      e = ws("svg"), t = ws("path"), Ln(t, "d", "M5 8l4 4 4-4z"), Ln(e, "class", "dropdown-arrow svelte-145leq6"), Ln(e, "xmlns", "http://www.w3.org/2000/svg"), Ln(e, "width", "100%"), Ln(e, "height", "100%"), Ln(e, "viewBox", "0 0 18 18");
    },
    m(n, l) {
      qu(n, e, l), Cu(e, t);
    },
    p: jl,
    i: jl,
    o: jl,
    d(n) {
      n && yu(e);
    }
  };
}
class Vo extends ku {
  constructor(e) {
    super(), Su(this, e, null, Du, zu, {});
  }
}
const {
  SvelteComponent: iw,
  append: lw,
  attr: ow,
  detach: sw,
  init: aw,
  insert: rw,
  noop: _w,
  safe_not_equal: cw,
  svg_element: fw
} = window.__gradio__svelte__internal, {
  SvelteComponent: uw,
  append: dw,
  attr: hw,
  detach: mw,
  init: gw,
  insert: pw,
  noop: bw,
  safe_not_equal: ww,
  svg_element: vw
} = window.__gradio__svelte__internal, {
  SvelteComponent: kw,
  append: Cw,
  attr: yw,
  detach: Sw,
  init: qw,
  insert: zw,
  noop: Dw,
  safe_not_equal: Bw,
  svg_element: Mw
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ew,
  append: Lw,
  attr: Ww,
  detach: Rw,
  init: Xw,
  insert: Yw,
  noop: Aw,
  safe_not_equal: Iw,
  svg_element: Hw
} = window.__gradio__svelte__internal, {
  SvelteComponent: Tw,
  append: jw,
  attr: Fw,
  detach: Pw,
  init: Uw,
  insert: Ow,
  noop: Vw,
  safe_not_equal: Nw,
  svg_element: $w
} = window.__gradio__svelte__internal, {
  SvelteComponent: Kw,
  append: Zw,
  attr: Gw,
  detach: Jw,
  init: Qw,
  insert: xw,
  noop: ev,
  safe_not_equal: tv,
  svg_element: nv
} = window.__gradio__svelte__internal, {
  SvelteComponent: iv,
  append: lv,
  attr: ov,
  detach: sv,
  init: av,
  insert: rv,
  noop: _v,
  safe_not_equal: cv,
  svg_element: fv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Bu,
  append: Fl,
  attr: be,
  detach: Mu,
  init: Eu,
  insert: Lu,
  noop: Pl,
  safe_not_equal: Wu,
  svg_element: Li
} = window.__gradio__svelte__internal;
function Ru(i) {
  let e, t, n, l;
  return {
    c() {
      e = Li("svg"), t = Li("rect"), n = Li("circle"), l = Li("polyline"), be(t, "x", "3"), be(t, "y", "3"), be(t, "width", "18"), be(t, "height", "18"), be(t, "rx", "2"), be(t, "ry", "2"), be(n, "cx", "8.5"), be(n, "cy", "8.5"), be(n, "r", "1.5"), be(l, "points", "21 15 16 10 5 21"), be(e, "xmlns", "http://www.w3.org/2000/svg"), be(e, "width", "100%"), be(e, "height", "100%"), be(e, "viewBox", "0 0 24 24"), be(e, "fill", "none"), be(e, "stroke", "currentColor"), be(e, "stroke-width", "1.5"), be(e, "stroke-linecap", "round"), be(e, "stroke-linejoin", "round"), be(e, "class", "feather feather-image");
    },
    m(o, s) {
      Lu(o, e, s), Fl(e, t), Fl(e, n), Fl(e, l);
    },
    p: Pl,
    i: Pl,
    o: Pl,
    d(o) {
      o && Mu(e);
    }
  };
}
let pr = class extends Bu {
  constructor(e) {
    super(), Eu(this, e, null, Ru, Wu, {});
  }
};
const {
  SvelteComponent: Xu,
  append: Yu,
  attr: Wi,
  detach: Au,
  init: Iu,
  insert: Hu,
  noop: Ul,
  safe_not_equal: Tu,
  svg_element: vs
} = window.__gradio__svelte__internal;
function ju(i) {
  let e, t;
  return {
    c() {
      e = vs("svg"), t = vs("path"), Wi(t, "fill", "currentColor"), Wi(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Wi(e, "xmlns", "http://www.w3.org/2000/svg"), Wi(e, "viewBox", "0 0 24 24");
    },
    m(n, l) {
      Hu(n, e, l), Yu(e, t);
    },
    p: Ul,
    i: Ul,
    o: Ul,
    d(n) {
      n && Au(e);
    }
  };
}
class br extends Xu {
  constructor(e) {
    super(), Iu(this, e, null, ju, Tu, {});
  }
}
const {
  SvelteComponent: dv,
  append: hv,
  attr: mv,
  detach: gv,
  init: pv,
  insert: bv,
  noop: wv,
  safe_not_equal: vv,
  svg_element: kv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Cv,
  append: yv,
  attr: Sv,
  detach: qv,
  init: zv,
  insert: Dv,
  noop: Bv,
  safe_not_equal: Mv,
  svg_element: Ev
} = window.__gradio__svelte__internal, {
  SvelteComponent: Lv,
  append: Wv,
  attr: Rv,
  detach: Xv,
  init: Yv,
  insert: Av,
  noop: Iv,
  safe_not_equal: Hv,
  svg_element: Tv
} = window.__gradio__svelte__internal, {
  SvelteComponent: jv,
  append: Fv,
  attr: Pv,
  detach: Uv,
  init: Ov,
  insert: Vv,
  noop: Nv,
  safe_not_equal: $v,
  svg_element: Kv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Zv,
  append: Gv,
  attr: Jv,
  detach: Qv,
  init: xv,
  insert: e3,
  noop: t3,
  safe_not_equal: n3,
  svg_element: i3
} = window.__gradio__svelte__internal, {
  SvelteComponent: Fu,
  append: Ri,
  attr: we,
  detach: Pu,
  init: Uu,
  insert: Ou,
  noop: Ol,
  safe_not_equal: Vu,
  svg_element: oi
} = window.__gradio__svelte__internal;
function Nu(i) {
  let e, t, n, l, o;
  return {
    c() {
      e = oi("svg"), t = oi("path"), n = oi("path"), l = oi("line"), o = oi("line"), we(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), we(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), we(l, "x1", "12"), we(l, "y1", "19"), we(l, "x2", "12"), we(l, "y2", "23"), we(o, "x1", "8"), we(o, "y1", "23"), we(o, "x2", "16"), we(o, "y2", "23"), we(e, "xmlns", "http://www.w3.org/2000/svg"), we(e, "width", "100%"), we(e, "height", "100%"), we(e, "viewBox", "0 0 24 24"), we(e, "fill", "none"), we(e, "stroke", "currentColor"), we(e, "stroke-width", "2"), we(e, "stroke-linecap", "round"), we(e, "stroke-linejoin", "round"), we(e, "class", "feather feather-mic");
    },
    m(s, r) {
      Ou(s, e, r), Ri(e, t), Ri(e, n), Ri(e, l), Ri(e, o);
    },
    p: Ol,
    i: Ol,
    o: Ol,
    d(s) {
      s && Pu(e);
    }
  };
}
class $u extends Fu {
  constructor(e) {
    super(), Uu(this, e, null, Nu, Vu, {});
  }
}
const {
  SvelteComponent: l3,
  append: o3,
  attr: s3,
  detach: a3,
  init: r3,
  insert: _3,
  noop: c3,
  safe_not_equal: f3,
  svg_element: u3
} = window.__gradio__svelte__internal, {
  SvelteComponent: d3,
  append: h3,
  attr: m3,
  detach: g3,
  init: p3,
  insert: b3,
  noop: w3,
  safe_not_equal: v3,
  svg_element: k3
} = window.__gradio__svelte__internal, {
  SvelteComponent: C3,
  append: y3,
  attr: S3,
  detach: q3,
  init: z3,
  insert: D3,
  noop: B3,
  safe_not_equal: M3,
  svg_element: E3
} = window.__gradio__svelte__internal, {
  SvelteComponent: L3,
  append: W3,
  attr: R3,
  detach: X3,
  init: Y3,
  insert: A3,
  noop: I3,
  safe_not_equal: H3,
  svg_element: T3
} = window.__gradio__svelte__internal, {
  SvelteComponent: j3,
  append: F3,
  attr: P3,
  detach: U3,
  init: O3,
  insert: V3,
  noop: N3,
  safe_not_equal: $3,
  svg_element: K3
} = window.__gradio__svelte__internal, {
  SvelteComponent: Z3,
  append: G3,
  attr: J3,
  detach: Q3,
  init: x3,
  insert: e4,
  noop: t4,
  safe_not_equal: n4,
  svg_element: i4
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ku,
  append: ks,
  attr: Ze,
  detach: Zu,
  init: Gu,
  insert: Ju,
  noop: Vl,
  safe_not_equal: Qu,
  set_style: xu,
  svg_element: Nl
} = window.__gradio__svelte__internal;
function ed(i) {
  let e, t, n;
  return {
    c() {
      e = Nl("svg"), t = Nl("polyline"), n = Nl("path"), Ze(t, "points", "1 4 1 10 7 10"), Ze(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Ze(e, "xmlns", "http://www.w3.org/2000/svg"), Ze(e, "width", "100%"), Ze(e, "height", "100%"), Ze(e, "viewBox", "0 0 24 24"), Ze(e, "fill", "none"), Ze(e, "stroke", "currentColor"), Ze(e, "stroke-width", "2"), Ze(e, "stroke-linecap", "round"), Ze(e, "stroke-linejoin", "round"), Ze(e, "class", "feather feather-rotate-ccw"), xu(e, "transform", "rotateY(180deg)");
    },
    m(l, o) {
      Ju(l, e, o), ks(e, t), ks(e, n);
    },
    p: Vl,
    i: Vl,
    o: Vl,
    d(l) {
      l && Zu(e);
    }
  };
}
class td extends Ku {
  constructor(e) {
    super(), Gu(this, e, null, ed, Qu, {});
  }
}
const {
  SvelteComponent: l4,
  append: o4,
  attr: s4,
  detach: a4,
  init: r4,
  insert: _4,
  noop: c4,
  safe_not_equal: f4,
  svg_element: u4
} = window.__gradio__svelte__internal, {
  SvelteComponent: d4,
  append: h4,
  attr: m4,
  detach: g4,
  init: p4,
  insert: b4,
  noop: w4,
  safe_not_equal: v4,
  svg_element: k4
} = window.__gradio__svelte__internal, {
  SvelteComponent: C4,
  append: y4,
  attr: S4,
  detach: q4,
  init: z4,
  insert: D4,
  noop: B4,
  safe_not_equal: M4,
  svg_element: E4
} = window.__gradio__svelte__internal, {
  SvelteComponent: L4,
  append: W4,
  attr: R4,
  detach: X4,
  init: Y4,
  insert: A4,
  noop: I4,
  safe_not_equal: H4,
  svg_element: T4
} = window.__gradio__svelte__internal, {
  SvelteComponent: j4,
  append: F4,
  attr: P4,
  detach: U4,
  init: O4,
  insert: V4,
  noop: N4,
  safe_not_equal: $4,
  svg_element: K4
} = window.__gradio__svelte__internal, {
  SvelteComponent: nd,
  append: id,
  attr: We,
  detach: ld,
  init: od,
  insert: sd,
  noop: $l,
  safe_not_equal: ad,
  svg_element: Cs
} = window.__gradio__svelte__internal;
function rd(i) {
  let e, t;
  return {
    c() {
      e = Cs("svg"), t = Cs("rect"), We(t, "x", "3"), We(t, "y", "3"), We(t, "width", "18"), We(t, "height", "18"), We(t, "rx", "2"), We(t, "ry", "2"), We(e, "xmlns", "http://www.w3.org/2000/svg"), We(e, "width", "100%"), We(e, "height", "100%"), We(e, "viewBox", "0 0 24 24"), We(e, "stroke-width", "1.5"), We(e, "stroke-linecap", "round"), We(e, "stroke-linejoin", "round"), We(e, "class", "feather feather-square");
    },
    m(n, l) {
      sd(n, e, l), id(e, t);
    },
    p: $l,
    i: $l,
    o: $l,
    d(n) {
      n && ld(e);
    }
  };
}
class _d extends nd {
  constructor(e) {
    super(), od(this, e, null, rd, ad, {});
  }
}
const {
  SvelteComponent: Z4,
  append: G4,
  attr: J4,
  detach: Q4,
  init: x4,
  insert: e5,
  noop: t5,
  safe_not_equal: n5,
  svg_element: i5
} = window.__gradio__svelte__internal, {
  SvelteComponent: l5,
  append: o5,
  attr: s5,
  detach: a5,
  init: r5,
  insert: _5,
  noop: c5,
  safe_not_equal: f5,
  svg_element: u5
} = window.__gradio__svelte__internal, {
  SvelteComponent: d5,
  append: h5,
  attr: m5,
  detach: g5,
  init: p5,
  insert: b5,
  noop: w5,
  safe_not_equal: v5,
  svg_element: k5,
  text: C5
} = window.__gradio__svelte__internal, {
  SvelteComponent: y5,
  append: S5,
  attr: q5,
  detach: z5,
  init: D5,
  insert: B5,
  noop: M5,
  safe_not_equal: E5,
  svg_element: L5
} = window.__gradio__svelte__internal, {
  SvelteComponent: W5,
  append: R5,
  attr: X5,
  detach: Y5,
  init: A5,
  insert: I5,
  noop: H5,
  safe_not_equal: T5,
  svg_element: j5
} = window.__gradio__svelte__internal, {
  SvelteComponent: cd,
  append: ys,
  attr: Ge,
  detach: fd,
  init: ud,
  insert: dd,
  noop: Kl,
  safe_not_equal: hd,
  svg_element: Zl
} = window.__gradio__svelte__internal;
function md(i) {
  let e, t, n;
  return {
    c() {
      e = Zl("svg"), t = Zl("polyline"), n = Zl("path"), Ge(t, "points", "1 4 1 10 7 10"), Ge(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Ge(e, "xmlns", "http://www.w3.org/2000/svg"), Ge(e, "width", "100%"), Ge(e, "height", "100%"), Ge(e, "viewBox", "0 0 24 24"), Ge(e, "fill", "none"), Ge(e, "stroke", "currentColor"), Ge(e, "stroke-width", "2"), Ge(e, "stroke-linecap", "round"), Ge(e, "stroke-linejoin", "round"), Ge(e, "class", "feather feather-rotate-ccw");
    },
    m(l, o) {
      dd(l, e, o), ys(e, t), ys(e, n);
    },
    p: Kl,
    i: Kl,
    o: Kl,
    d(l) {
      l && fd(e);
    }
  };
}
class gd extends cd {
  constructor(e) {
    super(), ud(this, e, null, md, hd, {});
  }
}
const {
  SvelteComponent: pd,
  append: Gl,
  attr: qe,
  detach: bd,
  init: wd,
  insert: vd,
  noop: Jl,
  safe_not_equal: kd,
  svg_element: Xi
} = window.__gradio__svelte__internal;
function Cd(i) {
  let e, t, n, l;
  return {
    c() {
      e = Xi("svg"), t = Xi("path"), n = Xi("polyline"), l = Xi("line"), qe(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), qe(n, "points", "17 8 12 3 7 8"), qe(l, "x1", "12"), qe(l, "y1", "3"), qe(l, "x2", "12"), qe(l, "y2", "15"), qe(e, "xmlns", "http://www.w3.org/2000/svg"), qe(e, "width", "90%"), qe(e, "height", "90%"), qe(e, "viewBox", "0 0 24 24"), qe(e, "fill", "none"), qe(e, "stroke", "currentColor"), qe(e, "stroke-width", "2"), qe(e, "stroke-linecap", "round"), qe(e, "stroke-linejoin", "round"), qe(e, "class", "feather feather-upload");
    },
    m(o, s) {
      vd(o, e, s), Gl(e, t), Gl(e, n), Gl(e, l);
    },
    p: Jl,
    i: Jl,
    o: Jl,
    d(o) {
      o && bd(e);
    }
  };
}
let wr = class extends pd {
  constructor(e) {
    super(), wd(this, e, null, Cd, kd, {});
  }
};
const {
  SvelteComponent: P5,
  append: U5,
  attr: O5,
  detach: V5,
  init: N5,
  insert: $5,
  noop: K5,
  safe_not_equal: Z5,
  svg_element: G5
} = window.__gradio__svelte__internal, {
  SvelteComponent: J5,
  append: Q5,
  attr: x5,
  detach: ek,
  init: tk,
  insert: nk,
  noop: ik,
  safe_not_equal: lk,
  svg_element: ok,
  text: sk
} = window.__gradio__svelte__internal, {
  SvelteComponent: ak,
  append: rk,
  attr: _k,
  detach: ck,
  init: fk,
  insert: uk,
  noop: dk,
  safe_not_equal: hk,
  svg_element: mk,
  text: gk
} = window.__gradio__svelte__internal, {
  SvelteComponent: pk,
  append: bk,
  attr: wk,
  detach: vk,
  init: kk,
  insert: Ck,
  noop: yk,
  safe_not_equal: Sk,
  svg_element: qk,
  text: zk
} = window.__gradio__svelte__internal, {
  SvelteComponent: Dk,
  append: Bk,
  attr: Mk,
  detach: Ek,
  init: Lk,
  insert: Wk,
  noop: Rk,
  safe_not_equal: Xk,
  svg_element: Yk
} = window.__gradio__svelte__internal, {
  SvelteComponent: yd,
  append: Ss,
  attr: Ft,
  detach: Sd,
  init: qd,
  insert: zd,
  noop: Ql,
  safe_not_equal: Dd,
  svg_element: xl
} = window.__gradio__svelte__internal;
function Bd(i) {
  let e, t, n;
  return {
    c() {
      e = xl("svg"), t = xl("path"), n = xl("path"), Ft(t, "fill", "currentColor"), Ft(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), Ft(n, "fill", "currentColor"), Ft(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), Ft(e, "xmlns", "http://www.w3.org/2000/svg"), Ft(e, "width", "100%"), Ft(e, "height", "100%"), Ft(e, "viewBox", "0 0 24 24");
    },
    m(l, o) {
      zd(l, e, o), Ss(e, t), Ss(e, n);
    },
    p: Ql,
    i: Ql,
    o: Ql,
    d(l) {
      l && Sd(e);
    }
  };
}
let vr = class extends yd {
  constructor(e) {
    super(), qd(this, e, null, Bd, Dd, {});
  }
};
const Md = [
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
], qs = {
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
Md.reduce((i, { color: e, primary: t, secondary: n }) => ({
  ...i,
  [e]: {
    primary: qs[e][t],
    secondary: qs[e][n]
  }
}), {});
class Ji extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function Ed(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new Ji("Must be on Spaces to share.");
  let t, n, l;
  t = Ld(i), n = i.split(";")[0].split(":")[1], l = "file" + n.split("/")[1];
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
      throw new Ji(`Upload failed: ${_.error}`);
    }
    throw new Ji("Upload failed.");
  }
  return await s.text();
}
function Ld(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), l = n.length, o = new Uint8Array(l); l--; )
    o[l] = n.charCodeAt(l);
  return new Blob([o], { type: t });
}
const {
  SvelteComponent: Wd,
  create_component: Rd,
  destroy_component: Xd,
  init: Yd,
  mount_component: Ad,
  safe_not_equal: Id,
  transition_in: Hd,
  transition_out: Td
} = window.__gradio__svelte__internal, { createEventDispatcher: jd } = window.__gradio__svelte__internal;
function Fd(i) {
  let e, t;
  return e = new ml({
    props: {
      Icon: uu,
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
      Rd(e.$$.fragment);
    },
    m(n, l) {
      Ad(e, n, l), t = !0;
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
      t || (Hd(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Td(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Xd(e, n);
    }
  };
}
function Pd(i, e, t) {
  const n = jd();
  let { formatter: l } = e, { value: o } = e, { i18n: s } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const _ = await l(o);
      n("share", { description: _ });
    } catch (_) {
      console.error(_);
      let c = _ instanceof Ji ? _.message : "Share failed.";
      n("error", c);
    } finally {
      t(3, r = !1);
    }
  };
  return i.$$set = (_) => {
    "formatter" in _ && t(0, l = _.formatter), "value" in _ && t(1, o = _.value), "i18n" in _ && t(2, s = _.i18n);
  }, [l, o, s, r, n, a];
}
class Ud extends Wd {
  constructor(e) {
    super(), Yd(this, e, Pd, Fd, Id, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: Od,
  append: dn,
  attr: zo,
  check_outros: Vd,
  create_component: kr,
  destroy_component: Cr,
  detach: Qi,
  element: Do,
  group_outros: Nd,
  init: $d,
  insert: xi,
  mount_component: yr,
  safe_not_equal: Kd,
  set_data: Bo,
  space: Mo,
  text: ui,
  toggle_class: zs,
  transition_in: nl,
  transition_out: il
} = window.__gradio__svelte__internal;
function Zd(i) {
  let e, t;
  return e = new wr({}), {
    c() {
      kr(e.$$.fragment);
    },
    m(n, l) {
      yr(e, n, l), t = !0;
    },
    i(n) {
      t || (nl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      il(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cr(e, n);
    }
  };
}
function Gd(i) {
  let e, t;
  return e = new br({}), {
    c() {
      kr(e.$$.fragment);
    },
    m(n, l) {
      yr(e, n, l), t = !0;
    },
    i(n) {
      t || (nl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      il(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Cr(e, n);
    }
  };
}
function Ds(i) {
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
      e = Do("span"), t = ui("- "), l = ui(n), o = ui(" -"), s = Mo(), a = ui(r), zo(e, "class", "or svelte-kzcjhc");
    },
    m(_, c) {
      xi(_, e, c), dn(e, t), dn(e, l), dn(e, o), xi(_, s, c), xi(_, a, c);
    },
    p(_, c) {
      c & /*i18n*/
      2 && n !== (n = /*i18n*/
      _[1]("common.or") + "") && Bo(l, n), c & /*message, i18n*/
      6 && r !== (r = /*message*/
      (_[2] || /*i18n*/
      _[1]("upload_text.click_to_upload")) + "") && Bo(a, r);
    },
    d(_) {
      _ && (Qi(e), Qi(s), Qi(a));
    }
  };
}
function Jd(i) {
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
  const c = [Gd, Zd], u = [];
  function d(g, f) {
    return (
      /*type*/
      g[0] === "clipboard" ? 0 : 1
    );
  }
  n = d(i), l = u[n] = c[n](i);
  let h = (
    /*mode*/
    i[3] !== "short" && Ds(i)
  );
  return {
    c() {
      e = Do("div"), t = Do("span"), l.c(), o = Mo(), r = ui(s), a = Mo(), h && h.c(), zo(t, "class", "icon-wrap svelte-kzcjhc"), zs(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), zo(e, "class", "wrap svelte-kzcjhc");
    },
    m(g, f) {
      xi(g, e, f), dn(e, t), u[n].m(t, null), dn(e, o), dn(e, r), dn(e, a), h && h.m(e, null), _ = !0;
    },
    p(g, [f]) {
      let m = n;
      n = d(g), n !== m && (Nd(), il(u[m], 1, 1, () => {
        u[m] = null;
      }), Vd(), l = u[n], l || (l = u[n] = c[n](g), l.c()), nl(l, 1), l.m(t, null)), (!_ || f & /*hovered*/
      16) && zs(
        t,
        "hovered",
        /*hovered*/
        g[4]
      ), (!_ || f & /*i18n, type*/
      3) && s !== (s = /*i18n*/
      g[1](
        /*defs*/
        g[5][
          /*type*/
          g[0]
        ] || /*defs*/
        g[5].file
      ) + "") && Bo(r, s), /*mode*/
      g[3] !== "short" ? h ? h.p(g, f) : (h = Ds(g), h.c(), h.m(e, null)) : h && (h.d(1), h = null);
    },
    i(g) {
      _ || (nl(l), _ = !0);
    },
    o(g) {
      il(l), _ = !1;
    },
    d(g) {
      g && Qi(e), u[n].d(), h && h.d();
    }
  };
}
function Qd(i, e, t) {
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
class Sr extends Od {
  constructor(e) {
    super(), $d(this, e, Qd, Jd, Kd, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: Ik,
  attr: Hk,
  create_slot: Tk,
  detach: jk,
  element: Fk,
  get_all_dirty_from_scope: Pk,
  get_slot_changes: Uk,
  init: Ok,
  insert: Vk,
  safe_not_equal: Nk,
  toggle_class: $k,
  transition_in: Kk,
  transition_out: Zk,
  update_slot_base: Gk
} = window.__gradio__svelte__internal, {
  SvelteComponent: xd,
  append: eo,
  attr: Ct,
  check_outros: di,
  create_component: gl,
  destroy_component: pl,
  detach: $n,
  element: qi,
  empty: e1,
  group_outros: hi,
  init: t1,
  insert: Kn,
  listen: bl,
  mount_component: wl,
  safe_not_equal: n1,
  space: to,
  toggle_class: en,
  transition_in: ke,
  transition_out: Xe
} = window.__gradio__svelte__internal;
function Bs(i) {
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
  ), _, c = t && Ms(i), u = l && Es(i), d = s && Ls(i), h = a && Ws(i);
  return {
    c() {
      e = qi("span"), c && c.c(), n = to(), u && u.c(), o = to(), d && d.c(), r = to(), h && h.c(), Ct(e, "class", "source-selection svelte-1jp3vgd"), Ct(e, "data-testid", "source-select");
    },
    m(g, f) {
      Kn(g, e, f), c && c.m(e, null), eo(e, n), u && u.m(e, null), eo(e, o), d && d.m(e, null), eo(e, r), h && h.m(e, null), _ = !0;
    },
    p(g, f) {
      f & /*sources*/
      2 && (t = /*sources*/
      g[1].includes("upload")), t ? c ? (c.p(g, f), f & /*sources*/
      2 && ke(c, 1)) : (c = Ms(g), c.c(), ke(c, 1), c.m(e, n)) : c && (hi(), Xe(c, 1, 1, () => {
        c = null;
      }), di()), f & /*sources*/
      2 && (l = /*sources*/
      g[1].includes("microphone")), l ? u ? (u.p(g, f), f & /*sources*/
      2 && ke(u, 1)) : (u = Es(g), u.c(), ke(u, 1), u.m(e, o)) : u && (hi(), Xe(u, 1, 1, () => {
        u = null;
      }), di()), f & /*sources*/
      2 && (s = /*sources*/
      g[1].includes("webcam")), s ? d ? (d.p(g, f), f & /*sources*/
      2 && ke(d, 1)) : (d = Ls(g), d.c(), ke(d, 1), d.m(e, r)) : d && (hi(), Xe(d, 1, 1, () => {
        d = null;
      }), di()), f & /*sources*/
      2 && (a = /*sources*/
      g[1].includes("clipboard")), a ? h ? (h.p(g, f), f & /*sources*/
      2 && ke(h, 1)) : (h = Ws(g), h.c(), ke(h, 1), h.m(e, null)) : h && (hi(), Xe(h, 1, 1, () => {
        h = null;
      }), di());
    },
    i(g) {
      _ || (ke(c), ke(u), ke(d), ke(h), _ = !0);
    },
    o(g) {
      Xe(c), Xe(u), Xe(d), Xe(h), _ = !1;
    },
    d(g) {
      g && $n(e), c && c.d(), u && u.d(), d && d.d(), h && h.d();
    }
  };
}
function Ms(i) {
  let e, t, n, l, o;
  return t = new wr({}), {
    c() {
      e = qi("button"), gl(t.$$.fragment), Ct(e, "class", "icon svelte-1jp3vgd"), Ct(e, "aria-label", "Upload file"), en(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(s, r) {
      Kn(s, e, r), wl(t, e, null), n = !0, l || (o = bl(
        e,
        "click",
        /*click_handler*/
        i[6]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && en(
        e,
        "selected",
        /*active_source*/
        s[0] === "upload" || !/*active_source*/
        s[0]
      );
    },
    i(s) {
      n || (ke(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Xe(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && $n(e), pl(t), l = !1, o();
    }
  };
}
function Es(i) {
  let e, t, n, l, o;
  return t = new $u({}), {
    c() {
      e = qi("button"), gl(t.$$.fragment), Ct(e, "class", "icon svelte-1jp3vgd"), Ct(e, "aria-label", "Record audio"), en(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(s, r) {
      Kn(s, e, r), wl(t, e, null), n = !0, l || (o = bl(
        e,
        "click",
        /*click_handler_1*/
        i[7]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && en(
        e,
        "selected",
        /*active_source*/
        s[0] === "microphone"
      );
    },
    i(s) {
      n || (ke(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Xe(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && $n(e), pl(t), l = !1, o();
    }
  };
}
function Ls(i) {
  let e, t, n, l, o;
  return t = new vr({}), {
    c() {
      e = qi("button"), gl(t.$$.fragment), Ct(e, "class", "icon svelte-1jp3vgd"), Ct(e, "aria-label", "Capture from camera"), en(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(s, r) {
      Kn(s, e, r), wl(t, e, null), n = !0, l || (o = bl(
        e,
        "click",
        /*click_handler_2*/
        i[8]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && en(
        e,
        "selected",
        /*active_source*/
        s[0] === "webcam"
      );
    },
    i(s) {
      n || (ke(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Xe(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && $n(e), pl(t), l = !1, o();
    }
  };
}
function Ws(i) {
  let e, t, n, l, o;
  return t = new br({}), {
    c() {
      e = qi("button"), gl(t.$$.fragment), Ct(e, "class", "icon svelte-1jp3vgd"), Ct(e, "aria-label", "Paste from clipboard"), en(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(s, r) {
      Kn(s, e, r), wl(t, e, null), n = !0, l || (o = bl(
        e,
        "click",
        /*click_handler_3*/
        i[9]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && en(
        e,
        "selected",
        /*active_source*/
        s[0] === "clipboard"
      );
    },
    i(s) {
      n || (ke(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Xe(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && $n(e), pl(t), l = !1, o();
    }
  };
}
function i1(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && Bs(i)
  );
  return {
    c() {
      n && n.c(), e = e1();
    },
    m(l, o) {
      n && n.m(l, o), Kn(l, e, o), t = !0;
    },
    p(l, [o]) {
      /*unique_sources*/
      l[2].length > 1 ? n ? (n.p(l, o), o & /*unique_sources*/
      4 && ke(n, 1)) : (n = Bs(l), n.c(), ke(n, 1), n.m(e.parentNode, e)) : n && (hi(), Xe(n, 1, 1, () => {
        n = null;
      }), di());
    },
    i(l) {
      t || (ke(n), t = !0);
    },
    o(l) {
      Xe(n), t = !1;
    },
    d(l) {
      l && $n(e), n && n.d(l);
    }
  };
}
function l1(i, e, t) {
  let n;
  var l = this && this.__awaiter || function(g, f, m, p) {
    function v(b) {
      return b instanceof m ? b : new m(function(z) {
        z(b);
      });
    }
    return new (m || (m = Promise))(function(b, z) {
      function S(q) {
        try {
          y(p.next(q));
        } catch (L) {
          z(L);
        }
      }
      function C(q) {
        try {
          y(p.throw(q));
        } catch (L) {
          z(L);
        }
      }
      function y(q) {
        q.done ? b(q.value) : v(q.value).then(S, C);
      }
      y((p = p.apply(g, f || [])).next());
    });
  };
  let { sources: o } = e, { active_source: s } = e, { handle_clear: r = () => {
  } } = e, { handle_select: a = () => {
  } } = e;
  function _(g) {
    return l(this, void 0, void 0, function* () {
      r(), t(0, s = g), a(g);
    });
  }
  const c = () => _("upload"), u = () => _("microphone"), d = () => _("webcam"), h = () => _("clipboard");
  return i.$$set = (g) => {
    "sources" in g && t(1, o = g.sources), "active_source" in g && t(0, s = g.active_source), "handle_clear" in g && t(4, r = g.handle_clear), "handle_select" in g && t(5, a = g.handle_select);
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
class o1 extends xd {
  constructor(e) {
    super(), t1(this, e, l1, i1, n1, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function Tn(i) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; i > 1e3 && t < e.length - 1; )
    i /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(i) ? i : i.toFixed(1)) + n;
}
function el() {
}
const s1 = (i) => i;
function Rs(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [i, "px"];
}
const qr = typeof window < "u";
let Xs = qr ? () => window.performance.now() : () => Date.now(), zr = qr ? (i) => requestAnimationFrame(i) : el;
const Nn = /* @__PURE__ */ new Set();
function Dr(i) {
  Nn.forEach((e) => {
    e.c(i) || (Nn.delete(e), e.f());
  }), Nn.size !== 0 && zr(Dr);
}
function a1(i) {
  let e;
  return Nn.size === 0 && zr(Dr), { promise: new Promise((t) => {
    Nn.add(e = { c: i, f: t });
  }), abort() {
    Nn.delete(e);
  } };
}
function r1(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function _1(i, { delay: e = 0, duration: t = 400, easing: n = s1 } = {}) {
  const l = +getComputedStyle(i).opacity;
  return { delay: e, duration: t, easing: n, css: (o) => "opacity: " + o * l };
}
function Ys(i, { delay: e = 0, duration: t = 400, easing: n = r1, x: l = 0, y: o = 0, opacity: s = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, _ = r.transform === "none" ? "" : r.transform, c = a * (1 - s), [u, d] = Rs(l), [h, g] = Rs(o);
  return { delay: e, duration: t, easing: n, css: (f, m) => `
			transform: ${_} translate(${(1 - f) * u}${d}, ${(1 - f) * h}${g});
			opacity: ${a - c * m}` };
}
const Wn = [];
function c1(i, e = el) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function l(s) {
    if (a = s, ((r = i) != r ? a == a : r !== a || r && typeof r == "object" || typeof r == "function") && (i = s, t)) {
      const _ = !Wn.length;
      for (const c of n) c[1](), Wn.push(c, i);
      if (_) {
        for (let c = 0; c < Wn.length; c += 2) Wn[c][0](Wn[c + 1]);
        Wn.length = 0;
      }
    }
    var r, a;
  }
  function o(s) {
    l(s(i));
  }
  return { set: l, update: o, subscribe: function(s, r = el) {
    const a = [s, r];
    return n.add(a), n.size === 1 && (t = e(l, o) || el), s(i), () => {
      n.delete(a), n.size === 0 && t && (t(), t = null);
    };
  } };
}
function As(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function Eo(i, e, t, n) {
  if (typeof t == "number" || As(t)) {
    const l = n - t, o = (t - e) / (i.dt || 1 / 60), s = (o + (i.opts.stiffness * l - i.opts.damping * o) * i.inv_mass) * i.dt;
    return Math.abs(s) < i.opts.precision && Math.abs(l) < i.opts.precision ? n : (i.settled = !1, As(t) ? new Date(t.getTime() + s) : t + s);
  }
  if (Array.isArray(t)) return t.map((l, o) => Eo(i, e[o], t[o], n[o]));
  if (typeof t == "object") {
    const l = {};
    for (const o in t) l[o] = Eo(i, e[o], t[o], n[o]);
    return l;
  }
  throw new Error(`Cannot spring ${typeof t} values`);
}
function Is(i, e = {}) {
  const t = c1(i), { stiffness: n = 0.15, damping: l = 0.8, precision: o = 0.01 } = e;
  let s, r, a, _ = i, c = i, u = 1, d = 0, h = !1;
  function g(m, p = {}) {
    c = m;
    const v = a = {};
    return i == null || p.hard || f.stiffness >= 1 && f.damping >= 1 ? (h = !0, s = Xs(), _ = m, t.set(i = c), Promise.resolve()) : (p.soft && (d = 1 / (60 * (p.soft === !0 ? 0.5 : +p.soft)), u = 0), r || (s = Xs(), h = !1, r = a1((b) => {
      if (h) return h = !1, r = null, !1;
      u = Math.min(u + d, 1);
      const z = { inv_mass: u, opts: f, settled: !0, dt: 60 * (b - s) / 1e3 }, S = Eo(z, _, i, c);
      return s = b, _ = i, t.set(i = S), z.settled && (r = null), !z.settled;
    })), new Promise((b) => {
      r.promise.then(() => {
        v === a && b();
      });
    }));
  }
  const f = { set: g, update: (m, p) => g(m(c, i), p), subscribe: t.subscribe, stiffness: n, damping: l, precision: o };
  return f;
}
const {
  SvelteComponent: f1,
  append: lt,
  attr: Q,
  component_subscribe: Hs,
  detach: u1,
  element: d1,
  init: h1,
  insert: m1,
  noop: Ts,
  safe_not_equal: g1,
  set_style: Yi,
  svg_element: ot,
  toggle_class: js
} = window.__gradio__svelte__internal, { onMount: p1 } = window.__gradio__svelte__internal;
function b1(i) {
  let e, t, n, l, o, s, r, a, _, c, u, d;
  return {
    c() {
      e = d1("div"), t = ot("svg"), n = ot("g"), l = ot("path"), o = ot("path"), s = ot("path"), r = ot("path"), a = ot("g"), _ = ot("path"), c = ot("path"), u = ot("path"), d = ot("path"), Q(l, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), Q(l, "fill", "#FF7C00"), Q(l, "fill-opacity", "0.4"), Q(l, "class", "svelte-43sxxs"), Q(o, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), Q(o, "fill", "#FF7C00"), Q(o, "class", "svelte-43sxxs"), Q(s, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), Q(s, "fill", "#FF7C00"), Q(s, "fill-opacity", "0.4"), Q(s, "class", "svelte-43sxxs"), Q(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), Q(r, "fill", "#FF7C00"), Q(r, "class", "svelte-43sxxs"), Yi(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), Q(_, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), Q(_, "fill", "#FF7C00"), Q(_, "fill-opacity", "0.4"), Q(_, "class", "svelte-43sxxs"), Q(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), Q(c, "fill", "#FF7C00"), Q(c, "class", "svelte-43sxxs"), Q(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), Q(u, "fill", "#FF7C00"), Q(u, "fill-opacity", "0.4"), Q(u, "class", "svelte-43sxxs"), Q(d, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), Q(d, "fill", "#FF7C00"), Q(d, "class", "svelte-43sxxs"), Yi(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), Q(t, "viewBox", "-1200 -1200 3000 3000"), Q(t, "fill", "none"), Q(t, "xmlns", "http://www.w3.org/2000/svg"), Q(t, "class", "svelte-43sxxs"), Q(e, "class", "svelte-43sxxs"), js(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(h, g) {
      m1(h, e, g), lt(e, t), lt(t, n), lt(n, l), lt(n, o), lt(n, s), lt(n, r), lt(t, a), lt(a, _), lt(a, c), lt(a, u), lt(a, d);
    },
    p(h, [g]) {
      g & /*$top*/
      2 && Yi(n, "transform", "translate(" + /*$top*/
      h[1][0] + "px, " + /*$top*/
      h[1][1] + "px)"), g & /*$bottom*/
      4 && Yi(a, "transform", "translate(" + /*$bottom*/
      h[2][0] + "px, " + /*$bottom*/
      h[2][1] + "px)"), g & /*margin*/
      1 && js(
        e,
        "margin",
        /*margin*/
        h[0]
      );
    },
    i: Ts,
    o: Ts,
    d(h) {
      h && u1(e);
    }
  };
}
function w1(i, e, t) {
  let n, l;
  var o = this && this.__awaiter || function(h, g, f, m) {
    function p(v) {
      return v instanceof f ? v : new f(function(b) {
        b(v);
      });
    }
    return new (f || (f = Promise))(function(v, b) {
      function z(y) {
        try {
          C(m.next(y));
        } catch (q) {
          b(q);
        }
      }
      function S(y) {
        try {
          C(m.throw(y));
        } catch (q) {
          b(q);
        }
      }
      function C(y) {
        y.done ? v(y.value) : p(y.value).then(z, S);
      }
      C((m = m.apply(h, g || [])).next());
    });
  };
  let { margin: s = !0 } = e;
  const r = Is([0, 0]);
  Hs(i, r, (h) => t(1, n = h));
  const a = Is([0, 0]);
  Hs(i, a, (h) => t(2, l = h));
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
  return p1(() => (d(), () => _ = !0)), i.$$set = (h) => {
    "margin" in h && t(0, s = h.margin);
  }, [s, n, l, r, a];
}
class v1 extends f1 {
  constructor(e) {
    super(), h1(this, e, w1, b1, g1, { margin: 0 });
  }
}
const {
  SvelteComponent: k1,
  append: hn,
  attr: ct,
  binding_callbacks: Fs,
  check_outros: Lo,
  create_component: Br,
  create_slot: Mr,
  destroy_component: Er,
  destroy_each: Lr,
  detach: O,
  element: vt,
  empty: Zn,
  ensure_array_like: ll,
  get_all_dirty_from_scope: Wr,
  get_slot_changes: Rr,
  group_outros: Wo,
  init: C1,
  insert: V,
  mount_component: Xr,
  noop: Ro,
  safe_not_equal: y1,
  set_data: tt,
  set_style: Qt,
  space: et,
  text: ge,
  toggle_class: xe,
  transition_in: _t,
  transition_out: kt,
  update_slot_base: Yr
} = window.__gradio__svelte__internal, { tick: S1 } = window.__gradio__svelte__internal, { onDestroy: q1 } = window.__gradio__svelte__internal, { createEventDispatcher: z1 } = window.__gradio__svelte__internal, D1 = (i) => ({}), Ps = (i) => ({}), B1 = (i) => ({}), Us = (i) => ({});
function Os(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function Vs(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function M1(i) {
  let e, t, n, l, o = (
    /*i18n*/
    i[1]("common.error") + ""
  ), s, r, a;
  t = new ml({
    props: {
      Icon: gr,
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
  ), c = Mr(
    _,
    i,
    /*$$scope*/
    i[29],
    Ps
  );
  return {
    c() {
      e = vt("div"), Br(t.$$.fragment), n = et(), l = vt("span"), s = ge(o), r = et(), c && c.c(), ct(e, "class", "clear-status svelte-16nch4a"), ct(l, "class", "error svelte-16nch4a");
    },
    m(u, d) {
      V(u, e, d), Xr(t, e, null), V(u, n, d), V(u, l, d), hn(l, s), V(u, r, d), c && c.m(u, d), a = !0;
    },
    p(u, d) {
      const h = {};
      d[0] & /*i18n*/
      2 && (h.label = /*i18n*/
      u[1]("common.clear")), t.$set(h), (!a || d[0] & /*i18n*/
      2) && o !== (o = /*i18n*/
      u[1]("common.error") + "") && tt(s, o), c && c.p && (!a || d[0] & /*$$scope*/
      536870912) && Yr(
        c,
        _,
        u,
        /*$$scope*/
        u[29],
        a ? Rr(
          _,
          /*$$scope*/
          u[29],
          d,
          D1
        ) : Wr(
          /*$$scope*/
          u[29]
        ),
        Ps
      );
    },
    i(u) {
      a || (_t(t.$$.fragment, u), _t(c, u), a = !0);
    },
    o(u) {
      kt(t.$$.fragment, u), kt(c, u), a = !1;
    },
    d(u) {
      u && (O(e), O(n), O(l), O(r)), Er(t), c && c.d(u);
    }
  };
}
function E1(i) {
  let e, t, n, l, o, s, r, a, _, c = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && Ns(i)
  );
  function u(b, z) {
    if (
      /*progress*/
      b[7]
    ) return R1;
    if (
      /*queue_position*/
      b[2] !== null && /*queue_size*/
      b[3] !== void 0 && /*queue_position*/
      b[2] >= 0
    ) return W1;
    if (
      /*queue_position*/
      b[2] === 0
    ) return L1;
  }
  let d = u(i), h = d && d(i), g = (
    /*timer*/
    i[5] && Zs(i)
  );
  const f = [I1, A1], m = [];
  function p(b, z) {
    return (
      /*last_progress_level*/
      b[15] != null ? 0 : (
        /*show_progress*/
        b[6] === "full" ? 1 : -1
      )
    );
  }
  ~(o = p(i)) && (s = m[o] = f[o](i));
  let v = !/*timer*/
  i[5] && na(i);
  return {
    c() {
      c && c.c(), e = et(), t = vt("div"), h && h.c(), n = et(), g && g.c(), l = et(), s && s.c(), r = et(), v && v.c(), a = Zn(), ct(t, "class", "progress-text svelte-16nch4a"), xe(
        t,
        "meta-text-center",
        /*variant*/
        i[8] === "center"
      ), xe(
        t,
        "meta-text",
        /*variant*/
        i[8] === "default"
      );
    },
    m(b, z) {
      c && c.m(b, z), V(b, e, z), V(b, t, z), h && h.m(t, null), hn(t, n), g && g.m(t, null), V(b, l, z), ~o && m[o].m(b, z), V(b, r, z), v && v.m(b, z), V(b, a, z), _ = !0;
    },
    p(b, z) {
      /*variant*/
      b[8] === "default" && /*show_eta_bar*/
      b[18] && /*show_progress*/
      b[6] === "full" ? c ? c.p(b, z) : (c = Ns(b), c.c(), c.m(e.parentNode, e)) : c && (c.d(1), c = null), d === (d = u(b)) && h ? h.p(b, z) : (h && h.d(1), h = d && d(b), h && (h.c(), h.m(t, n))), /*timer*/
      b[5] ? g ? g.p(b, z) : (g = Zs(b), g.c(), g.m(t, null)) : g && (g.d(1), g = null), (!_ || z[0] & /*variant*/
      256) && xe(
        t,
        "meta-text-center",
        /*variant*/
        b[8] === "center"
      ), (!_ || z[0] & /*variant*/
      256) && xe(
        t,
        "meta-text",
        /*variant*/
        b[8] === "default"
      );
      let S = o;
      o = p(b), o === S ? ~o && m[o].p(b, z) : (s && (Wo(), kt(m[S], 1, 1, () => {
        m[S] = null;
      }), Lo()), ~o ? (s = m[o], s ? s.p(b, z) : (s = m[o] = f[o](b), s.c()), _t(s, 1), s.m(r.parentNode, r)) : s = null), /*timer*/
      b[5] ? v && (Wo(), kt(v, 1, 1, () => {
        v = null;
      }), Lo()) : v ? (v.p(b, z), z[0] & /*timer*/
      32 && _t(v, 1)) : (v = na(b), v.c(), _t(v, 1), v.m(a.parentNode, a));
    },
    i(b) {
      _ || (_t(s), _t(v), _ = !0);
    },
    o(b) {
      kt(s), kt(v), _ = !1;
    },
    d(b) {
      b && (O(e), O(t), O(l), O(r), O(a)), c && c.d(b), h && h.d(), g && g.d(), ~o && m[o].d(b), v && v.d(b);
    }
  };
}
function Ns(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = vt("div"), ct(e, "class", "eta-bar svelte-16nch4a"), Qt(e, "transform", t);
    },
    m(n, l) {
      V(n, e, l);
    },
    p(n, l) {
      l[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && Qt(e, "transform", t);
    },
    d(n) {
      n && O(e);
    }
  };
}
function L1(i) {
  let e;
  return {
    c() {
      e = ge("processing |");
    },
    m(t, n) {
      V(t, e, n);
    },
    p: Ro,
    d(t) {
      t && O(e);
    }
  };
}
function W1(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, l, o, s;
  return {
    c() {
      e = ge("queue: "), n = ge(t), l = ge("/"), o = ge(
        /*queue_size*/
        i[3]
      ), s = ge(" |");
    },
    m(r, a) {
      V(r, e, a), V(r, n, a), V(r, l, a), V(r, o, a), V(r, s, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && tt(n, t), a[0] & /*queue_size*/
      8 && tt(
        o,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (O(e), O(n), O(l), O(o), O(s));
    }
  };
}
function R1(i) {
  let e, t = ll(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = Ks(Vs(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Zn();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      V(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*progress*/
      128) {
        t = ll(
          /*progress*/
          l[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = Vs(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = Ks(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && O(e), Lr(n, l);
    }
  };
}
function $s(i) {
  let e, t = (
    /*p*/
    i[41].unit + ""
  ), n, l, o = " ", s;
  function r(c, u) {
    return (
      /*p*/
      c[41].length != null ? Y1 : X1
    );
  }
  let a = r(i), _ = a(i);
  return {
    c() {
      _.c(), e = et(), n = ge(t), l = ge(" | "), s = ge(o);
    },
    m(c, u) {
      _.m(c, u), V(c, e, u), V(c, n, u), V(c, l, u), V(c, s, u);
    },
    p(c, u) {
      a === (a = r(c)) && _ ? _.p(c, u) : (_.d(1), _ = a(c), _ && (_.c(), _.m(e.parentNode, e))), u[0] & /*progress*/
      128 && t !== (t = /*p*/
      c[41].unit + "") && tt(n, t);
    },
    d(c) {
      c && (O(e), O(n), O(l), O(s)), _.d(c);
    }
  };
}
function X1(i) {
  let e = Tn(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = ge(e);
    },
    m(n, l) {
      V(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = Tn(
        /*p*/
        n[41].index || 0
      ) + "") && tt(t, e);
    },
    d(n) {
      n && O(t);
    }
  };
}
function Y1(i) {
  let e = Tn(
    /*p*/
    i[41].index || 0
  ) + "", t, n, l = Tn(
    /*p*/
    i[41].length
  ) + "", o;
  return {
    c() {
      t = ge(e), n = ge("/"), o = ge(l);
    },
    m(s, r) {
      V(s, t, r), V(s, n, r), V(s, o, r);
    },
    p(s, r) {
      r[0] & /*progress*/
      128 && e !== (e = Tn(
        /*p*/
        s[41].index || 0
      ) + "") && tt(t, e), r[0] & /*progress*/
      128 && l !== (l = Tn(
        /*p*/
        s[41].length
      ) + "") && tt(o, l);
    },
    d(s) {
      s && (O(t), O(n), O(o));
    }
  };
}
function Ks(i) {
  let e, t = (
    /*p*/
    i[41].index != null && $s(i)
  );
  return {
    c() {
      t && t.c(), e = Zn();
    },
    m(n, l) {
      t && t.m(n, l), V(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].index != null ? t ? t.p(n, l) : (t = $s(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && O(e), t && t.d(n);
    }
  };
}
function Zs(i) {
  let e, t = (
    /*eta*/
    i[0] ? `/${/*formatted_eta*/
    i[19]}` : ""
  ), n, l;
  return {
    c() {
      e = ge(
        /*formatted_timer*/
        i[20]
      ), n = ge(t), l = ge("s");
    },
    m(o, s) {
      V(o, e, s), V(o, n, s), V(o, l, s);
    },
    p(o, s) {
      s[0] & /*formatted_timer*/
      1048576 && tt(
        e,
        /*formatted_timer*/
        o[20]
      ), s[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      o[0] ? `/${/*formatted_eta*/
      o[19]}` : "") && tt(n, t);
    },
    d(o) {
      o && (O(e), O(n), O(l));
    }
  };
}
function A1(i) {
  let e, t;
  return e = new v1({
    props: { margin: (
      /*variant*/
      i[8] === "default"
    ) }
  }), {
    c() {
      Br(e.$$.fragment);
    },
    m(n, l) {
      Xr(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*variant*/
      256 && (o.margin = /*variant*/
      n[8] === "default"), e.$set(o);
    },
    i(n) {
      t || (_t(e.$$.fragment, n), t = !0);
    },
    o(n) {
      kt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Er(e, n);
    }
  };
}
function I1(i) {
  let e, t, n, l, o, s = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && Gs(i)
  );
  return {
    c() {
      e = vt("div"), t = vt("div"), r && r.c(), n = et(), l = vt("div"), o = vt("div"), ct(t, "class", "progress-level-inner svelte-16nch4a"), ct(o, "class", "progress-bar svelte-16nch4a"), Qt(o, "width", s), ct(l, "class", "progress-bar-wrap svelte-16nch4a"), ct(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, _) {
      V(a, e, _), hn(e, t), r && r.m(t, null), hn(e, n), hn(e, l), hn(l, o), i[31](o);
    },
    p(a, _) {
      /*progress*/
      a[7] != null ? r ? r.p(a, _) : (r = Gs(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), _[0] & /*last_progress_level*/
      32768 && s !== (s = `${/*last_progress_level*/
      a[15] * 100}%`) && Qt(o, "width", s);
    },
    i: Ro,
    o: Ro,
    d(a) {
      a && O(e), r && r.d(), i[31](null);
    }
  };
}
function Gs(i) {
  let e, t = ll(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = ta(Os(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Zn();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      V(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*progress_level, progress*/
      16512) {
        t = ll(
          /*progress*/
          l[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = Os(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = ta(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && O(e), Lr(n, l);
    }
  };
}
function Js(i) {
  let e, t, n, l, o = (
    /*i*/
    i[43] !== 0 && H1()
  ), s = (
    /*p*/
    i[41].desc != null && Qs(i)
  ), r = (
    /*p*/
    i[41].desc != null && /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null && xs()
  ), a = (
    /*progress_level*/
    i[14] != null && ea(i)
  );
  return {
    c() {
      o && o.c(), e = et(), s && s.c(), t = et(), r && r.c(), n = et(), a && a.c(), l = Zn();
    },
    m(_, c) {
      o && o.m(_, c), V(_, e, c), s && s.m(_, c), V(_, t, c), r && r.m(_, c), V(_, n, c), a && a.m(_, c), V(_, l, c);
    },
    p(_, c) {
      /*p*/
      _[41].desc != null ? s ? s.p(_, c) : (s = Qs(_), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null), /*p*/
      _[41].desc != null && /*progress_level*/
      _[14] && /*progress_level*/
      _[14][
        /*i*/
        _[43]
      ] != null ? r || (r = xs(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      _[14] != null ? a ? a.p(_, c) : (a = ea(_), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null);
    },
    d(_) {
      _ && (O(e), O(t), O(n), O(l)), o && o.d(_), s && s.d(_), r && r.d(_), a && a.d(_);
    }
  };
}
function H1(i) {
  let e;
  return {
    c() {
      e = ge(" /");
    },
    m(t, n) {
      V(t, e, n);
    },
    d(t) {
      t && O(e);
    }
  };
}
function Qs(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = ge(e);
    },
    m(n, l) {
      V(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && tt(t, e);
    },
    d(n) {
      n && O(t);
    }
  };
}
function xs(i) {
  let e;
  return {
    c() {
      e = ge("-");
    },
    m(t, n) {
      V(t, e, n);
    },
    d(t) {
      t && O(e);
    }
  };
}
function ea(i) {
  let e = (100 * /*progress_level*/
  (i[14][
    /*i*/
    i[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = ge(e), n = ge("%");
    },
    m(l, o) {
      V(l, t, o), V(l, n, o);
    },
    p(l, o) {
      o[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (l[14][
        /*i*/
        l[43]
      ] || 0)).toFixed(1) + "") && tt(t, e);
    },
    d(l) {
      l && (O(t), O(n));
    }
  };
}
function ta(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && Js(i)
  );
  return {
    c() {
      t && t.c(), e = Zn();
    },
    m(n, l) {
      t && t.m(n, l), V(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, l) : (t = Js(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && O(e), t && t.d(n);
    }
  };
}
function na(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), s = Mr(
    o,
    i,
    /*$$scope*/
    i[29],
    Us
  );
  return {
    c() {
      e = vt("p"), t = ge(
        /*loading_text*/
        i[9]
      ), n = et(), s && s.c(), ct(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      V(r, e, a), hn(e, t), V(r, n, a), s && s.m(r, a), l = !0;
    },
    p(r, a) {
      (!l || a[0] & /*loading_text*/
      512) && tt(
        t,
        /*loading_text*/
        r[9]
      ), s && s.p && (!l || a[0] & /*$$scope*/
      536870912) && Yr(
        s,
        o,
        r,
        /*$$scope*/
        r[29],
        l ? Rr(
          o,
          /*$$scope*/
          r[29],
          a,
          B1
        ) : Wr(
          /*$$scope*/
          r[29]
        ),
        Us
      );
    },
    i(r) {
      l || (_t(s, r), l = !0);
    },
    o(r) {
      kt(s, r), l = !1;
    },
    d(r) {
      r && (O(e), O(n)), s && s.d(r);
    }
  };
}
function T1(i) {
  let e, t, n, l, o;
  const s = [E1, M1], r = [];
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
      e = vt("div"), n && n.c(), ct(e, "class", l = "wrap " + /*variant*/
      i[8] + " " + /*show_progress*/
      i[6] + " svelte-16nch4a"), xe(e, "hide", !/*status*/
      i[4] || /*status*/
      i[4] === "complete" || /*show_progress*/
      i[6] === "hidden"), xe(
        e,
        "translucent",
        /*variant*/
        i[8] === "center" && /*status*/
        (i[4] === "pending" || /*status*/
        i[4] === "error") || /*translucent*/
        i[11] || /*show_progress*/
        i[6] === "minimal"
      ), xe(
        e,
        "generating",
        /*status*/
        i[4] === "generating"
      ), xe(
        e,
        "border",
        /*border*/
        i[12]
      ), Qt(
        e,
        "position",
        /*absolute*/
        i[10] ? "absolute" : "static"
      ), Qt(
        e,
        "padding",
        /*absolute*/
        i[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(_, c) {
      V(_, e, c), ~t && r[t].m(e, null), i[33](e), o = !0;
    },
    p(_, c) {
      let u = t;
      t = a(_), t === u ? ~t && r[t].p(_, c) : (n && (Wo(), kt(r[u], 1, 1, () => {
        r[u] = null;
      }), Lo()), ~t ? (n = r[t], n ? n.p(_, c) : (n = r[t] = s[t](_), n.c()), _t(n, 1), n.m(e, null)) : n = null), (!o || c[0] & /*variant, show_progress*/
      320 && l !== (l = "wrap " + /*variant*/
      _[8] + " " + /*show_progress*/
      _[6] + " svelte-16nch4a")) && ct(e, "class", l), (!o || c[0] & /*variant, show_progress, status, show_progress*/
      336) && xe(e, "hide", !/*status*/
      _[4] || /*status*/
      _[4] === "complete" || /*show_progress*/
      _[6] === "hidden"), (!o || c[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && xe(
        e,
        "translucent",
        /*variant*/
        _[8] === "center" && /*status*/
        (_[4] === "pending" || /*status*/
        _[4] === "error") || /*translucent*/
        _[11] || /*show_progress*/
        _[6] === "minimal"
      ), (!o || c[0] & /*variant, show_progress, status*/
      336) && xe(
        e,
        "generating",
        /*status*/
        _[4] === "generating"
      ), (!o || c[0] & /*variant, show_progress, border*/
      4416) && xe(
        e,
        "border",
        /*border*/
        _[12]
      ), c[0] & /*absolute*/
      1024 && Qt(
        e,
        "position",
        /*absolute*/
        _[10] ? "absolute" : "static"
      ), c[0] & /*absolute*/
      1024 && Qt(
        e,
        "padding",
        /*absolute*/
        _[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(_) {
      o || (_t(n), o = !0);
    },
    o(_) {
      kt(n), o = !1;
    },
    d(_) {
      _ && O(e), ~t && r[t].d(), i[33](null);
    }
  };
}
var j1 = function(i, e, t, n) {
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
let Ai = [], no = !1;
function F1(i) {
  return j1(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Ai.push(e), !no) no = !0;
      else return;
      yield S1(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let l = 0; l < Ai.length; l++) {
          const s = Ai[l].getBoundingClientRect();
          (l === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = l);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), no = !1, Ai = [];
      });
    }
  });
}
function P1(i, e, t) {
  let n, { $$slots: l = {}, $$scope: o } = e;
  this && this.__awaiter;
  const s = z1();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: _ } = e, { queue_size: c } = e, { status: u } = e, { scroll_to_output: d = !1 } = e, { timer: h = !0 } = e, { show_progress: g = "full" } = e, { message: f = null } = e, { progress: m = null } = e, { variant: p = "default" } = e, { loading_text: v = "Loading..." } = e, { absolute: b = !0 } = e, { translucent: z = !1 } = e, { border: S = !1 } = e, { autoscroll: C } = e, y, q = !1, L = 0, w = 0, I = null, R = null, N = 0, F = null, $, Z = null, ue = !0;
  const A = () => {
    t(0, a = t(27, I = t(19, U = null))), t(25, L = performance.now()), t(26, w = 0), q = !0, M();
  };
  function M() {
    requestAnimationFrame(() => {
      t(26, w = (performance.now() - L) / 1e3), q && M();
    });
  }
  function X() {
    t(26, w = 0), t(0, a = t(27, I = t(19, U = null))), q && (q = !1);
  }
  q1(() => {
    q && X();
  });
  let U = null;
  function oe(Y) {
    Fs[Y ? "unshift" : "push"](() => {
      Z = Y, t(16, Z), t(7, m), t(14, F), t(15, $);
    });
  }
  const te = () => {
    s("clear_status");
  };
  function ne(Y) {
    Fs[Y ? "unshift" : "push"](() => {
      y = Y, t(13, y);
    });
  }
  return i.$$set = (Y) => {
    "i18n" in Y && t(1, r = Y.i18n), "eta" in Y && t(0, a = Y.eta), "queue_position" in Y && t(2, _ = Y.queue_position), "queue_size" in Y && t(3, c = Y.queue_size), "status" in Y && t(4, u = Y.status), "scroll_to_output" in Y && t(22, d = Y.scroll_to_output), "timer" in Y && t(5, h = Y.timer), "show_progress" in Y && t(6, g = Y.show_progress), "message" in Y && t(23, f = Y.message), "progress" in Y && t(7, m = Y.progress), "variant" in Y && t(8, p = Y.variant), "loading_text" in Y && t(9, v = Y.loading_text), "absolute" in Y && t(10, b = Y.absolute), "translucent" in Y && t(11, z = Y.translucent), "border" in Y && t(12, S = Y.border), "autoscroll" in Y && t(24, C = Y.autoscroll), "$$scope" in Y && t(29, o = Y.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = I), a != null && I !== a && (t(28, R = (performance.now() - L) / 1e3 + a), t(19, U = R.toFixed(1)), t(27, I = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, N = R === null || R <= 0 || !w ? null : Math.min(w / R, 1)), i.$$.dirty[0] & /*progress*/
    128 && m != null && t(18, ue = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (m != null ? t(14, F = m.map((Y) => {
      if (Y.index != null && Y.length != null)
        return Y.index / Y.length;
      if (Y.progress != null)
        return Y.progress;
    })) : t(14, F = null), F ? (t(15, $ = F[F.length - 1]), Z && ($ === 0 ? t(16, Z.style.transition = "0", Z) : t(16, Z.style.transition = "150ms", Z))) : t(15, $ = void 0)), i.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? A() : X()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && y && d && (u === "pending" || u === "complete") && F1(y, C), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = w.toFixed(1));
  }, [
    a,
    r,
    _,
    c,
    u,
    h,
    g,
    m,
    p,
    v,
    b,
    z,
    S,
    y,
    F,
    $,
    Z,
    N,
    ue,
    U,
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
    oe,
    te,
    ne
  ];
}
class U1 extends k1 {
  constructor(e) {
    super(), C1(
      this,
      e,
      P1,
      T1,
      y1,
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
  SvelteComponent: Jk,
  add_render_callback: Qk,
  append: xk,
  attr: e8,
  bubble: t8,
  check_outros: n8,
  create_component: i8,
  create_in_transition: l8,
  create_out_transition: o8,
  destroy_component: s8,
  detach: a8,
  element: r8,
  group_outros: _8,
  init: c8,
  insert: f8,
  listen: u8,
  mount_component: d8,
  run_all: h8,
  safe_not_equal: m8,
  set_data: g8,
  space: p8,
  stop_propagation: b8,
  text: w8,
  transition_in: v8,
  transition_out: k8
} = window.__gradio__svelte__internal, { createEventDispatcher: C8, onMount: y8 } = window.__gradio__svelte__internal, {
  SvelteComponent: S8,
  append: q8,
  attr: z8,
  bubble: D8,
  check_outros: B8,
  create_animation: M8,
  create_component: E8,
  destroy_component: L8,
  detach: W8,
  element: R8,
  ensure_array_like: X8,
  fix_and_outro_and_destroy_block: Y8,
  fix_position: A8,
  group_outros: I8,
  init: H8,
  insert: T8,
  mount_component: j8,
  noop: F8,
  safe_not_equal: P8,
  set_style: U8,
  space: O8,
  transition_in: V8,
  transition_out: N8,
  update_keyed_each: $8
} = window.__gradio__svelte__internal, { setContext: K8, getContext: O1 } = window.__gradio__svelte__internal, V1 = "WORKER_PROXY_CONTEXT_KEY";
function Ar() {
  return O1(V1);
}
function N1(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function Ir(i, e) {
  const t = e.toLowerCase();
  for (const [n, l] of Object.entries(i))
    if (n.toLowerCase() === t)
      return l;
}
function Hr(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!N1(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function $1(i) {
  if (i == null || !Hr(i))
    return i;
  const e = Ar();
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
      type: Ir(l.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: K1,
  assign: ol,
  check_outros: Tr,
  compute_rest_props: ia,
  create_slot: No,
  detach: vl,
  element: jr,
  empty: Fr,
  exclude_internal_props: Z1,
  get_all_dirty_from_scope: $o,
  get_slot_changes: Ko,
  get_spread_update: Pr,
  group_outros: Ur,
  init: G1,
  insert: kl,
  listen: Or,
  prevent_default: J1,
  safe_not_equal: Q1,
  set_attributes: sl,
  transition_in: vn,
  transition_out: kn,
  update_slot_base: Zo
} = window.__gradio__svelte__internal, { createEventDispatcher: x1 } = window.__gradio__svelte__internal;
function eh(i) {
  let e, t, n, l, o;
  const s = (
    /*#slots*/
    i[8].default
  ), r = No(
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
    _ = ol(_, a[c]);
  return {
    c() {
      e = jr("a"), r && r.c(), sl(e, _);
    },
    m(c, u) {
      kl(c, e, u), r && r.m(e, null), n = !0, l || (o = Or(
        e,
        "click",
        /*dispatch*/
        i[3].bind(null, "click")
      ), l = !0);
    },
    p(c, u) {
      r && r.p && (!n || u & /*$$scope*/
      128) && Zo(
        r,
        s,
        c,
        /*$$scope*/
        c[7],
        n ? Ko(
          s,
          /*$$scope*/
          c[7],
          u,
          null
        ) : $o(
          /*$$scope*/
          c[7]
        ),
        null
      ), sl(e, _ = Pr(a, [
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
      n || (vn(r, c), n = !0);
    },
    o(c) {
      kn(r, c), n = !1;
    },
    d(c) {
      c && vl(e), r && r.d(c), l = !1, o();
    }
  };
}
function th(i) {
  let e, t, n, l;
  const o = [ih, nh], s = [];
  function r(a, _) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = Fr();
    },
    m(a, _) {
      s[e].m(a, _), kl(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (Ur(), kn(s[c], 1, 1, () => {
        s[c] = null;
      }), Tr(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), vn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (vn(t), l = !0);
    },
    o(a) {
      kn(t), l = !1;
    },
    d(a) {
      a && vl(n), s[e].d(a);
    }
  };
}
function nh(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[8].default
  ), s = No(
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
    a = ol(a, r[_]);
  return {
    c() {
      e = jr("a"), s && s.c(), sl(e, a);
    },
    m(_, c) {
      kl(_, e, c), s && s.m(e, null), t = !0, n || (l = Or(e, "click", J1(
        /*wasm_click_handler*/
        i[5]
      )), n = !0);
    },
    p(_, c) {
      s && s.p && (!t || c & /*$$scope*/
      128) && Zo(
        s,
        o,
        _,
        /*$$scope*/
        _[7],
        t ? Ko(
          o,
          /*$$scope*/
          _[7],
          c,
          null
        ) : $o(
          /*$$scope*/
          _[7]
        ),
        null
      ), sl(e, a = Pr(r, [
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
      t || (vn(s, _), t = !0);
    },
    o(_) {
      kn(s, _), t = !1;
    },
    d(_) {
      _ && vl(e), s && s.d(_), n = !1, l();
    }
  };
}
function ih(i) {
  let e;
  const t = (
    /*#slots*/
    i[8].default
  ), n = No(
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
      128) && Zo(
        n,
        t,
        l,
        /*$$scope*/
        l[7],
        e ? Ko(
          t,
          /*$$scope*/
          l[7],
          o,
          null
        ) : $o(
          /*$$scope*/
          l[7]
        ),
        null
      );
    },
    i(l) {
      e || (vn(n, l), e = !0);
    },
    o(l) {
      kn(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function lh(i) {
  let e, t, n, l, o;
  const s = [th, eh], r = [];
  function a(_, c) {
    return c & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (_[4] && Hr(
      /*href*/
      _[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = s[t](i), {
    c() {
      n.c(), l = Fr();
    },
    m(_, c) {
      r[t].m(_, c), kl(_, l, c), o = !0;
    },
    p(_, [c]) {
      let u = t;
      t = a(_, c), t === u ? r[t].p(_, c) : (Ur(), kn(r[u], 1, 1, () => {
        r[u] = null;
      }), Tr(), n = r[t], n ? n.p(_, c) : (n = r[t] = s[t](_), n.c()), vn(n, 1), n.m(l.parentNode, l));
    },
    i(_) {
      o || (vn(n), o = !0);
    },
    o(_) {
      kn(n), o = !1;
    },
    d(_) {
      _ && vl(l), r[t].d(_);
    }
  };
}
function oh(i, e, t) {
  const n = ["href", "download"];
  let l = ia(e, n), { $$slots: o = {}, $$scope: s } = e;
  var r = this && this.__awaiter || function(g, f, m, p) {
    function v(b) {
      return b instanceof m ? b : new m(function(z) {
        z(b);
      });
    }
    return new (m || (m = Promise))(function(b, z) {
      function S(q) {
        try {
          y(p.next(q));
        } catch (L) {
          z(L);
        }
      }
      function C(q) {
        try {
          y(p.throw(q));
        } catch (L) {
          z(L);
        }
      }
      function y(q) {
        q.done ? b(q.value) : v(q.value).then(S, C);
      }
      y((p = p.apply(g, f || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: _ } = e;
  const c = x1();
  let u = !1;
  const d = Ar();
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
        const p = new Blob(
          [m.body],
          {
            type: Ir(m.headers, "content-type")
          }
        ), v = URL.createObjectURL(p), b = document.createElement("a");
        b.href = v, b.download = _, b.click(), URL.revokeObjectURL(v);
      }).finally(() => {
        t(2, u = !1);
      });
    });
  }
  return i.$$set = (g) => {
    e = ol(ol({}, e), Z1(g)), t(6, l = ia(e, n)), "href" in g && t(0, a = g.href), "download" in g && t(1, _ = g.download), "$$scope" in g && t(7, s = g.$$scope);
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
class sh extends K1 {
  constructor(e) {
    super(), G1(this, e, oh, lh, Q1, { href: 0, download: 1 });
  }
}
var ah = Object.defineProperty, rh = (i, e, t) => e in i ? ah(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, zt = (i, e, t) => (rh(i, typeof e != "symbol" ? e + "" : e, t), t), Vr = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, si = (i, e, t) => (Vr(i, e, "read from private field"), e.get(i)), _h = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, ch = (i, e, t, n) => (Vr(i, e, "write to private field"), e.set(i, t), t), Kt;
new Intl.Collator(0, { numeric: 1 }).compare;
async function Nr(i, e) {
  return i.map(
    (t) => new fh({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class fh {
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
    zt(this, "path"), zt(this, "url"), zt(this, "orig_name"), zt(this, "size"), zt(this, "blob"), zt(this, "is_stream"), zt(this, "mime_type"), zt(this, "alt_text"), zt(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = l, this.blob = t ? void 0 : o, this.is_stream = s, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class Z8 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = si(this, Kt) + t; ; ) {
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
        ch(this, Kt, t);
      },
      flush: (t) => {
        if (si(this, Kt) === "")
          return;
        const n = e.allowCR && si(this, Kt).endsWith("\r") ? si(this, Kt).slice(0, -1) : si(this, Kt);
        t.enqueue(n);
      }
    }), _h(this, Kt, "");
  }
}
Kt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: uh,
  append: Ae,
  attr: fn,
  detach: $r,
  element: un,
  init: dh,
  insert: Kr,
  noop: la,
  safe_not_equal: hh,
  set_data: al,
  set_style: io,
  space: Xo,
  text: jn,
  toggle_class: oa
} = window.__gradio__svelte__internal, { onMount: mh, createEventDispatcher: gh, onDestroy: ph } = window.__gradio__svelte__internal;
function sa(i) {
  let e, t, n, l, o = mi(
    /*file_to_display*/
    i[2]
  ) + "", s, r, a, _, c = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), u;
  return {
    c() {
      e = un("div"), t = un("span"), n = un("div"), l = un("progress"), s = jn(o), a = Xo(), _ = un("span"), u = jn(c), io(l, "visibility", "hidden"), io(l, "height", "0"), io(l, "width", "0"), l.value = r = mi(
        /*file_to_display*/
        i[2]
      ), fn(l, "max", "100"), fn(l, "class", "svelte-cr2edf"), fn(n, "class", "progress-bar svelte-cr2edf"), fn(_, "class", "file-name svelte-cr2edf"), fn(e, "class", "file svelte-cr2edf");
    },
    m(d, h) {
      Kr(d, e, h), Ae(e, t), Ae(t, n), Ae(n, l), Ae(l, s), Ae(e, a), Ae(e, _), Ae(_, u);
    },
    p(d, h) {
      h & /*file_to_display*/
      4 && o !== (o = mi(
        /*file_to_display*/
        d[2]
      ) + "") && al(s, o), h & /*file_to_display*/
      4 && r !== (r = mi(
        /*file_to_display*/
        d[2]
      )) && (l.value = r), h & /*file_to_display*/
      4 && c !== (c = /*file_to_display*/
      d[2].orig_name + "") && al(u, c);
    },
    d(d) {
      d && $r(e);
    }
  };
}
function bh(i) {
  let e, t, n, l = (
    /*files_with_progress*/
    i[0].length + ""
  ), o, s, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, _, c, u = (
    /*file_to_display*/
    i[2] && sa(i)
  );
  return {
    c() {
      e = un("div"), t = un("span"), n = jn("Uploading "), o = jn(l), s = Xo(), a = jn(r), _ = jn("..."), c = Xo(), u && u.c(), fn(t, "class", "uploading svelte-cr2edf"), fn(e, "class", "wrap svelte-cr2edf"), oa(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(d, h) {
      Kr(d, e, h), Ae(e, t), Ae(t, n), Ae(t, o), Ae(t, s), Ae(t, a), Ae(t, _), Ae(e, c), u && u.m(e, null);
    },
    p(d, [h]) {
      h & /*files_with_progress*/
      1 && l !== (l = /*files_with_progress*/
      d[0].length + "") && al(o, l), h & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      d[0].length > 1 ? "files" : "file") && al(a, r), /*file_to_display*/
      d[2] ? u ? u.p(d, h) : (u = sa(d), u.c(), u.m(e, null)) : u && (u.d(1), u = null), h & /*progress*/
      2 && oa(
        e,
        "progress",
        /*progress*/
        d[1]
      );
    },
    i: la,
    o: la,
    d(d) {
      d && $r(e), u && u.d();
    }
  };
}
function mi(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function wh(i) {
  let e = 0;
  return i.forEach((t) => {
    e += mi(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function vh(i, e, t) {
  var n = this && this.__awaiter || function(f, m, p, v) {
    function b(z) {
      return z instanceof p ? z : new p(function(S) {
        S(z);
      });
    }
    return new (p || (p = Promise))(function(z, S) {
      function C(L) {
        try {
          q(v.next(L));
        } catch (w) {
          S(w);
        }
      }
      function y(L) {
        try {
          q(v.throw(L));
        } catch (w) {
          S(w);
        }
      }
      function q(L) {
        L.done ? z(L.value) : b(L.value).then(C, y);
      }
      q((v = v.apply(f, m || [])).next());
    });
  };
  let { upload_id: l } = e, { root: o } = e, { files: s } = e, { stream_handler: r } = e, a, _ = !1, c, u, d = s.map((f) => Object.assign(Object.assign({}, f), { progress: 0 }));
  const h = gh();
  function g(f, m) {
    t(0, d = d.map((p) => (p.orig_name === f && (p.progress += m), p)));
  }
  return mh(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${o}/upload_progress?upload_id=${l}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(f) {
      return n(this, void 0, void 0, function* () {
        const m = JSON.parse(f.data);
        _ || t(1, _ = !0), m.msg === "done" ? (a == null || a.close(), h("done")) : (t(7, c = m), g(m.orig_name, m.chunk_size));
      });
    };
  })), ph(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (f) => {
    "upload_id" in f && t(3, l = f.upload_id), "root" in f && t(4, o = f.root), "files" in f && t(5, s = f.files), "stream_handler" in f && t(6, r = f.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && wh(d), i.$$.dirty & /*current_file_upload, files_with_progress*/
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
class kh extends uh {
  constructor(e) {
    super(), dh(this, e, vh, bh, hh, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: Ch,
  append: aa,
  attr: ze,
  binding_callbacks: yh,
  bubble: ln,
  check_outros: Zr,
  create_component: Sh,
  create_slot: Gr,
  destroy_component: qh,
  detach: Cl,
  element: Yo,
  empty: Jr,
  get_all_dirty_from_scope: Qr,
  get_slot_changes: xr,
  group_outros: e_,
  init: zh,
  insert: yl,
  listen: Pe,
  mount_component: Dh,
  prevent_default: on,
  run_all: Bh,
  safe_not_equal: Mh,
  set_style: t_,
  space: Eh,
  stop_propagation: sn,
  toggle_class: ye,
  transition_in: xt,
  transition_out: Cn,
  update_slot_base: n_
} = window.__gradio__svelte__internal, { createEventDispatcher: Lh, tick: Wh } = window.__gradio__svelte__internal;
function Rh(i) {
  let e, t, n, l, o, s, r, a, _, c, u;
  const d = (
    /*#slots*/
    i[26].default
  ), h = Gr(
    d,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Yo("button"), h && h.c(), t = Eh(), n = Yo("input"), ze(n, "aria-label", "file upload"), ze(n, "data-testid", "file-upload"), ze(n, "type", "file"), ze(n, "accept", l = /*accept_file_types*/
      i[16] || void 0), n.multiple = o = /*file_count*/
      i[6] === "multiple" || void 0, ze(n, "webkitdirectory", s = /*file_count*/
      i[6] === "directory" || void 0), ze(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), ze(n, "class", "svelte-1s26xmt"), ze(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), ze(e, "class", "svelte-1s26xmt"), ye(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), ye(
        e,
        "center",
        /*center*/
        i[4]
      ), ye(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), ye(
        e,
        "flex",
        /*flex*/
        i[5]
      ), ye(
        e,
        "disable_click",
        /*disable_click*/
        i[7]
      ), t_(e, "height", "100%");
    },
    m(g, f) {
      yl(g, e, f), h && h.m(e, null), aa(e, t), aa(e, n), i[34](n), _ = !0, c || (u = [
        Pe(
          n,
          "change",
          /*load_files_from_upload*/
          i[18]
        ),
        Pe(e, "drag", sn(on(
          /*drag_handler*/
          i[27]
        ))),
        Pe(e, "dragstart", sn(on(
          /*dragstart_handler*/
          i[28]
        ))),
        Pe(e, "dragend", sn(on(
          /*dragend_handler*/
          i[29]
        ))),
        Pe(e, "dragover", sn(on(
          /*dragover_handler*/
          i[30]
        ))),
        Pe(e, "dragenter", sn(on(
          /*dragenter_handler*/
          i[31]
        ))),
        Pe(e, "dragleave", sn(on(
          /*dragleave_handler*/
          i[32]
        ))),
        Pe(e, "drop", sn(on(
          /*drop_handler*/
          i[33]
        ))),
        Pe(
          e,
          "click",
          /*open_file_upload*/
          i[13]
        ),
        Pe(
          e,
          "drop",
          /*loadFilesFromDrop*/
          i[19]
        ),
        Pe(
          e,
          "dragenter",
          /*updateDragging*/
          i[17]
        ),
        Pe(
          e,
          "dragleave",
          /*updateDragging*/
          i[17]
        )
      ], c = !0);
    },
    p(g, f) {
      h && h.p && (!_ || f[0] & /*$$scope*/
      33554432) && n_(
        h,
        d,
        g,
        /*$$scope*/
        g[25],
        _ ? xr(
          d,
          /*$$scope*/
          g[25],
          f,
          null
        ) : Qr(
          /*$$scope*/
          g[25]
        ),
        null
      ), (!_ || f[0] & /*accept_file_types*/
      65536 && l !== (l = /*accept_file_types*/
      g[16] || void 0)) && ze(n, "accept", l), (!_ || f[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      g[6] === "multiple" || void 0)) && (n.multiple = o), (!_ || f[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      g[6] === "directory" || void 0)) && ze(n, "webkitdirectory", s), (!_ || f[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      g[6] === "directory" || void 0)) && ze(n, "mozdirectory", r), (!_ || f[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      g[9] ? -1 : 0)) && ze(e, "tabindex", a), (!_ || f[0] & /*hidden*/
      512) && ye(
        e,
        "hidden",
        /*hidden*/
        g[9]
      ), (!_ || f[0] & /*center*/
      16) && ye(
        e,
        "center",
        /*center*/
        g[4]
      ), (!_ || f[0] & /*boundedheight*/
      8) && ye(
        e,
        "boundedheight",
        /*boundedheight*/
        g[3]
      ), (!_ || f[0] & /*flex*/
      32) && ye(
        e,
        "flex",
        /*flex*/
        g[5]
      ), (!_ || f[0] & /*disable_click*/
      128) && ye(
        e,
        "disable_click",
        /*disable_click*/
        g[7]
      );
    },
    i(g) {
      _ || (xt(h, g), _ = !0);
    },
    o(g) {
      Cn(h, g), _ = !1;
    },
    d(g) {
      g && Cl(e), h && h.d(g), i[34](null), c = !1, Bh(u);
    }
  };
}
function Xh(i) {
  let e, t, n = !/*hidden*/
  i[9] && ra(i);
  return {
    c() {
      n && n.c(), e = Jr();
    },
    m(l, o) {
      n && n.m(l, o), yl(l, e, o), t = !0;
    },
    p(l, o) {
      /*hidden*/
      l[9] ? n && (e_(), Cn(n, 1, 1, () => {
        n = null;
      }), Zr()) : n ? (n.p(l, o), o[0] & /*hidden*/
      512 && xt(n, 1)) : (n = ra(l), n.c(), xt(n, 1), n.m(e.parentNode, e));
    },
    i(l) {
      t || (xt(n), t = !0);
    },
    o(l) {
      Cn(n), t = !1;
    },
    d(l) {
      l && Cl(e), n && n.d(l);
    }
  };
}
function Yh(i) {
  let e, t, n, l, o;
  const s = (
    /*#slots*/
    i[26].default
  ), r = Gr(
    s,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = Yo("button"), r && r.c(), ze(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), ze(e, "class", "svelte-1s26xmt"), ye(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), ye(
        e,
        "center",
        /*center*/
        i[4]
      ), ye(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), ye(
        e,
        "flex",
        /*flex*/
        i[5]
      ), t_(e, "height", "100%");
    },
    m(a, _) {
      yl(a, e, _), r && r.m(e, null), n = !0, l || (o = Pe(
        e,
        "click",
        /*paste_clipboard*/
        i[12]
      ), l = !0);
    },
    p(a, _) {
      r && r.p && (!n || _[0] & /*$$scope*/
      33554432) && n_(
        r,
        s,
        a,
        /*$$scope*/
        a[25],
        n ? xr(
          s,
          /*$$scope*/
          a[25],
          _,
          null
        ) : Qr(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || _[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && ze(e, "tabindex", t), (!n || _[0] & /*hidden*/
      512) && ye(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || _[0] & /*center*/
      16) && ye(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || _[0] & /*boundedheight*/
      8) && ye(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || _[0] & /*flex*/
      32) && ye(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (xt(r, a), n = !0);
    },
    o(a) {
      Cn(r, a), n = !1;
    },
    d(a) {
      a && Cl(e), r && r.d(a), l = !1, o();
    }
  };
}
function ra(i) {
  let e, t;
  return e = new kh({
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
      Sh(e.$$.fragment);
    },
    m(n, l) {
      Dh(e, n, l), t = !0;
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
      t || (xt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Cn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      qh(e, n);
    }
  };
}
function Ah(i) {
  let e, t, n, l;
  const o = [Yh, Xh, Rh], s = [];
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
      t.c(), n = Jr();
    },
    m(a, _) {
      s[e].m(a, _), yl(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (e_(), Cn(s[c], 1, 1, () => {
        s[c] = null;
      }), Zr(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), xt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (xt(t), l = !0);
    },
    o(a) {
      Cn(t), l = !1;
    },
    d(a) {
      a && Cl(n), s[e].d(a);
    }
  };
}
function Ih(i, e, t) {
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
function Hh(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var o = this && this.__awaiter || function(E, P, ie, re) {
    function _e(D) {
      return D instanceof ie ? D : new ie(function(Te) {
        Te(D);
      });
    }
    return new (ie || (ie = Promise))(function(D, Te) {
      function $e(J) {
        try {
          he(re.next(J));
        } catch (Ke) {
          Te(Ke);
        }
      }
      function ce(J) {
        try {
          he(re.throw(J));
        } catch (Ke) {
          Te(Ke);
        }
      }
      function he(J) {
        J.done ? D(J.value) : _e(J.value).then($e, ce);
      }
      he((re = re.apply(E, P || [])).next());
    });
  };
  let { filetype: s = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: _ = !0 } = e, { flex: c = !0 } = e, { file_count: u = "single" } = e, { disable_click: d = !1 } = e, { root: h } = e, { hidden: g = !1 } = e, { format: f = "file" } = e, { uploading: m = !1 } = e, { hidden_upload: p = null } = e, { show_progress: v = !0 } = e, { max_file_size: b = null } = e, { upload: z } = e, { stream_handler: S } = e, C, y, q;
  const L = Lh(), w = ["image", "video", "audio", "text", "file"], I = (E) => E.startsWith(".") || E.endsWith("/*") ? E : w.includes(E) ? E + "/*" : "." + E;
  function R() {
    t(20, r = !r);
  }
  function N() {
    navigator.clipboard.read().then((E) => o(this, void 0, void 0, function* () {
      for (let P = 0; P < E.length; P++) {
        const ie = E[P].types.find((re) => re.startsWith("image/"));
        if (ie) {
          E[P].getType(ie).then((re) => o(this, void 0, void 0, function* () {
            const _e = new File([re], `clipboard.${ie.replace("image/", "")}`);
            yield Z([_e]);
          }));
          break;
        }
      }
    }));
  }
  function F() {
    d || p && (t(2, p.value = "", p), p.click());
  }
  function $(E) {
    return o(this, void 0, void 0, function* () {
      yield Wh(), t(14, C = Math.random().toString(36).substring(2, 15)), t(1, m = !0);
      try {
        const P = yield z(E, h, C, b ?? 1 / 0);
        return L("load", u === "single" ? P == null ? void 0 : P[0] : P), t(1, m = !1), P || [];
      } catch (P) {
        return L("error", P.message), t(1, m = !1), [];
      }
    });
  }
  function Z(E) {
    return o(this, void 0, void 0, function* () {
      if (!E.length)
        return;
      let P = E.map((ie) => new File([ie], ie instanceof File ? ie.name : "file", { type: ie.type }));
      return t(15, y = yield Nr(P)), yield $(y);
    });
  }
  function ue(E) {
    return o(this, void 0, void 0, function* () {
      const P = E.target;
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
  function A(E) {
    return o(this, void 0, void 0, function* () {
      var P;
      if (t(20, r = !1), !(!((P = E.dataTransfer) === null || P === void 0) && P.files)) return;
      const ie = Array.from(E.dataTransfer.files).filter((re) => {
        const _e = "." + re.name.split(".").pop();
        return _e && Ih(q, _e, re.type) || (_e && Array.isArray(s) ? s.includes(_e) : _e === s) ? !0 : (L("error", `Invalid file type only ${s} allowed.`), !1);
      });
      yield Z(ie);
    });
  }
  function M(E) {
    ln.call(this, i, E);
  }
  function X(E) {
    ln.call(this, i, E);
  }
  function U(E) {
    ln.call(this, i, E);
  }
  function oe(E) {
    ln.call(this, i, E);
  }
  function te(E) {
    ln.call(this, i, E);
  }
  function ne(E) {
    ln.call(this, i, E);
  }
  function Y(E) {
    ln.call(this, i, E);
  }
  function ae(E) {
    yh[E ? "unshift" : "push"](() => {
      p = E, t(2, p);
    });
  }
  return i.$$set = (E) => {
    "filetype" in E && t(0, s = E.filetype), "dragging" in E && t(20, r = E.dragging), "boundedheight" in E && t(3, a = E.boundedheight), "center" in E && t(4, _ = E.center), "flex" in E && t(5, c = E.flex), "file_count" in E && t(6, u = E.file_count), "disable_click" in E && t(7, d = E.disable_click), "root" in E && t(8, h = E.root), "hidden" in E && t(9, g = E.hidden), "format" in E && t(21, f = E.format), "uploading" in E && t(1, m = E.uploading), "hidden_upload" in E && t(2, p = E.hidden_upload), "show_progress" in E && t(10, v = E.show_progress), "max_file_size" in E && t(22, b = E.max_file_size), "upload" in E && t(23, z = E.upload), "stream_handler" in E && t(11, S = E.stream_handler), "$$scope" in E && t(25, l = E.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*filetype*/
    1 && (s == null ? t(16, q = null) : typeof s == "string" ? t(16, q = I(s)) : (t(0, s = s.map(I)), t(16, q = s.join(", "))));
  }, [
    s,
    m,
    p,
    a,
    _,
    c,
    u,
    d,
    h,
    g,
    v,
    S,
    N,
    F,
    C,
    y,
    q,
    R,
    ue,
    A,
    r,
    f,
    b,
    z,
    Z,
    l,
    n,
    M,
    X,
    U,
    oe,
    te,
    ne,
    Y,
    ae
  ];
}
class Th extends Ch {
  constructor(e) {
    super(), zh(
      this,
      e,
      Hh,
      Ah,
      Mh,
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
  SvelteComponent: G8,
  append: J8,
  attr: Q8,
  check_outros: x8,
  create_component: e6,
  destroy_component: t6,
  detach: n6,
  element: i6,
  group_outros: l6,
  init: o6,
  insert: s6,
  mount_component: a6,
  safe_not_equal: r6,
  set_style: _6,
  space: c6,
  toggle_class: f6,
  transition_in: u6,
  transition_out: d6
} = window.__gradio__svelte__internal, { createEventDispatcher: h6 } = window.__gradio__svelte__internal, {
  SvelteComponent: m6,
  assign: g6,
  compute_rest_props: p6,
  detach: b6,
  element: w6,
  exclude_internal_props: v6,
  get_spread_update: k6,
  init: C6,
  insert: y6,
  noop: S6,
  safe_not_equal: q6,
  set_attributes: z6,
  src_url_equal: D6,
  toggle_class: B6
} = window.__gradio__svelte__internal, {
  SvelteComponent: M6,
  append: E6,
  attr: L6,
  bubble: W6,
  check_outros: R6,
  create_component: X6,
  destroy_component: Y6,
  detach: A6,
  element: I6,
  empty: H6,
  group_outros: T6,
  init: j6,
  insert: F6,
  listen: P6,
  mount_component: U6,
  safe_not_equal: O6,
  space: V6,
  toggle_class: N6,
  transition_in: $6,
  transition_out: K6
} = window.__gradio__svelte__internal, { createEventDispatcher: Z6 } = window.__gradio__svelte__internal, {
  SvelteComponent: jh,
  append: Ii,
  attr: lo,
  create_component: Fh,
  destroy_component: Ph,
  detach: Uh,
  element: oo,
  init: Oh,
  insert: Vh,
  listen: Nh,
  mount_component: $h,
  noop: Kh,
  safe_not_equal: Zh,
  set_style: Gh,
  space: Jh,
  text: Qh,
  transition_in: xh,
  transition_out: em
} = window.__gradio__svelte__internal, { createEventDispatcher: tm } = window.__gradio__svelte__internal;
function nm(i) {
  let e, t, n, l, o, s = "Click to Access Webcam", r, a, _, c;
  return l = new vr({}), {
    c() {
      e = oo("button"), t = oo("div"), n = oo("span"), Fh(l.$$.fragment), o = Jh(), r = Qh(s), lo(n, "class", "icon-wrap svelte-fjcd9c"), lo(t, "class", "wrap svelte-fjcd9c"), lo(e, "class", "svelte-fjcd9c"), Gh(e, "height", "100%");
    },
    m(u, d) {
      Vh(u, e, d), Ii(e, t), Ii(t, n), $h(l, n, null), Ii(t, o), Ii(t, r), a = !0, _ || (c = Nh(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), _ = !0);
    },
    p: Kh,
    i(u) {
      a || (xh(l.$$.fragment, u), a = !0);
    },
    o(u) {
      em(l.$$.fragment, u), a = !1;
    },
    d(u) {
      u && Uh(e), Ph(l), _ = !1, c();
    }
  };
}
function im(i) {
  const e = tm();
  return [e, () => e("click")];
}
class lm extends jh {
  constructor(e) {
    super(), Oh(this, e, im, nm, Zh, {});
  }
}
function om() {
  return navigator.mediaDevices.enumerateDevices();
}
function sm(i, e) {
  e.srcObject = i, e.muted = !0, e.play();
}
async function _a(i, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, l = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: i
  };
  return navigator.mediaDevices.getUserMedia(l).then((o) => (sm(o, e), o));
}
function am(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: rm,
  action_destroyer: _m,
  add_render_callback: cm,
  append: Lt,
  attr: ve,
  binding_callbacks: fm,
  check_outros: bi,
  create_component: Gn,
  create_in_transition: um,
  destroy_component: Jn,
  destroy_each: dm,
  detach: Ie,
  element: Ne,
  empty: Go,
  ensure_array_like: ca,
  group_outros: wi,
  init: hm,
  insert: He,
  listen: rl,
  mount_component: Qn,
  noop: Jo,
  run_all: mm,
  safe_not_equal: gm,
  set_data: i_,
  set_input_value: Ao,
  space: yi,
  stop_propagation: pm,
  text: l_,
  toggle_class: Hi,
  transition_in: Se,
  transition_out: De
} = window.__gradio__svelte__internal, { createEventDispatcher: bm, onMount: wm } = window.__gradio__svelte__internal;
function fa(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function vm(i) {
  let e, t, n, l, o, s, r, a, _, c, u;
  const d = [ym, Cm], h = [];
  function g(p, v) {
    return (
      /*mode*/
      p[1] === "video" || /*streaming*/
      p[0] ? 0 : 1
    );
  }
  n = g(i), l = h[n] = d[n](i);
  let f = !/*recording*/
  i[8] && ua(i), m = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && da(i)
  );
  return {
    c() {
      e = Ne("div"), t = Ne("button"), l.c(), s = yi(), f && f.c(), r = yi(), m && m.c(), a = Go(), ve(t, "aria-label", o = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), ve(t, "class", "svelte-8hqvb6"), ve(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(p, v) {
      He(p, e, v), Lt(e, t), h[n].m(t, null), Lt(e, s), f && f.m(e, null), He(p, r, v), m && m.m(p, v), He(p, a, v), _ = !0, c || (u = rl(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), c = !0);
    },
    p(p, v) {
      let b = n;
      n = g(p), n === b ? h[n].p(p, v) : (wi(), De(h[b], 1, 1, () => {
        h[b] = null;
      }), bi(), l = h[n], l ? l.p(p, v) : (l = h[n] = d[n](p), l.c()), Se(l, 1), l.m(t, null)), (!_ || v[0] & /*mode*/
      2 && o !== (o = /*mode*/
      p[1] === "image" ? "capture photo" : "start recording")) && ve(t, "aria-label", o), /*recording*/
      p[8] ? f && (wi(), De(f, 1, 1, () => {
        f = null;
      }), bi()) : f ? (f.p(p, v), v[0] & /*recording*/
      256 && Se(f, 1)) : (f = ua(p), f.c(), Se(f, 1), f.m(e, null)), /*options_open*/
      p[10] && /*selected_device*/
      p[7] ? m ? (m.p(p, v), v[0] & /*options_open, selected_device*/
      1152 && Se(m, 1)) : (m = da(p), m.c(), Se(m, 1), m.m(a.parentNode, a)) : m && (wi(), De(m, 1, 1, () => {
        m = null;
      }), bi());
    },
    i(p) {
      _ || (Se(l), Se(f), Se(m), _ = !0);
    },
    o(p) {
      De(l), De(f), De(m), _ = !1;
    },
    d(p) {
      p && (Ie(e), Ie(r), Ie(a)), h[n].d(), f && f.d(), m && m.d(p), c = !1, u();
    }
  };
}
function km(i) {
  let e, t, n, l;
  return t = new lm({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = Ne("div"), Gn(t.$$.fragment), ve(e, "title", "grant webcam access");
    },
    m(o, s) {
      He(o, e, s), Qn(t, e, null), l = !0;
    },
    p: Jo,
    i(o) {
      l || (Se(t.$$.fragment, o), o && (n || cm(() => {
        n = um(e, _1, { delay: 100, duration: 200 }), n.start();
      })), l = !0);
    },
    o(o) {
      De(t.$$.fragment, o), l = !1;
    },
    d(o) {
      o && Ie(e), Jn(t);
    }
  };
}
function Cm(i) {
  let e, t, n;
  return t = new Of({}), {
    c() {
      e = Ne("div"), Gn(t.$$.fragment), ve(e, "class", "icon svelte-8hqvb6"), ve(e, "title", "capture photo");
    },
    m(l, o) {
      He(l, e, o), Qn(t, e, null), n = !0;
    },
    p: Jo,
    i(l) {
      n || (Se(t.$$.fragment, l), n = !0);
    },
    o(l) {
      De(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Ie(e), Jn(t);
    }
  };
}
function ym(i) {
  let e, t, n, l;
  const o = [qm, Sm], s = [];
  function r(a, _) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = Go();
    },
    m(a, _) {
      s[e].m(a, _), He(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e !== c && (wi(), De(s[c], 1, 1, () => {
        s[c] = null;
      }), bi(), t = s[e], t || (t = s[e] = o[e](a), t.c()), Se(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Se(t), l = !0);
    },
    o(a) {
      De(t), l = !1;
    },
    d(a) {
      a && Ie(n), s[e].d(a);
    }
  };
}
function Sm(i) {
  let e, t, n;
  return t = new Qf({}), {
    c() {
      e = Ne("div"), Gn(t.$$.fragment), ve(e, "class", "icon red svelte-8hqvb6"), ve(e, "title", "start recording");
    },
    m(l, o) {
      He(l, e, o), Qn(t, e, null), n = !0;
    },
    i(l) {
      n || (Se(t.$$.fragment, l), n = !0);
    },
    o(l) {
      De(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Ie(e), Jn(t);
    }
  };
}
function qm(i) {
  let e, t, n;
  return t = new _d({}), {
    c() {
      e = Ne("div"), Gn(t.$$.fragment), ve(e, "class", "icon red svelte-8hqvb6"), ve(e, "title", "stop recording");
    },
    m(l, o) {
      He(l, e, o), Qn(t, e, null), n = !0;
    },
    i(l) {
      n || (Se(t.$$.fragment, l), n = !0);
    },
    o(l) {
      De(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Ie(e), Jn(t);
    }
  };
}
function ua(i) {
  let e, t, n, l, o;
  return t = new Vo({}), {
    c() {
      e = Ne("button"), Gn(t.$$.fragment), ve(e, "class", "icon svelte-8hqvb6"), ve(e, "aria-label", "select input source");
    },
    m(s, r) {
      He(s, e, r), Qn(t, e, null), n = !0, l || (o = rl(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), l = !0);
    },
    p: Jo,
    i(s) {
      n || (Se(t.$$.fragment, s), n = !0);
    },
    o(s) {
      De(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Ie(e), Jn(t), l = !1, o();
    }
  };
}
function da(i) {
  let e, t, n, l, o, s, r;
  n = new Vo({});
  function a(u, d) {
    return (
      /*available_video_devices*/
      u[6].length === 0 ? Dm : zm
    );
  }
  let _ = a(i), c = _(i);
  return {
    c() {
      e = Ne("select"), t = Ne("button"), Gn(n.$$.fragment), l = yi(), c.c(), ve(t, "class", "inset-icon svelte-8hqvb6"), ve(e, "class", "select-wrap svelte-8hqvb6"), ve(e, "aria-label", "select source");
    },
    m(u, d) {
      He(u, e, d), Lt(e, t), Qn(n, t, null), Lt(t, l), c.m(e, null), o = !0, s || (r = [
        rl(t, "click", pm(
          /*click_handler_2*/
          i[22]
        )),
        _m(Qo.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        rl(
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
      o || (Se(n.$$.fragment, u), o = !0);
    },
    o(u) {
      De(n.$$.fragment, u), o = !1;
    },
    d(u) {
      u && Ie(e), Jn(n), c.d(), s = !1, mm(r);
    }
  };
}
function zm(i) {
  let e, t = ca(
    /*available_video_devices*/
    i[6]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = ha(fa(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = Go();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      He(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*available_video_devices, selected_device*/
      192) {
        t = ca(
          /*available_video_devices*/
          l[6]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = fa(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = ha(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && Ie(e), dm(n, l);
    }
  };
}
function Dm(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = Ne("option"), n = l_(t), e.__value = "", Ao(e, e.__value), ve(e, "class", "svelte-8hqvb6");
    },
    m(l, o) {
      He(l, e, o), Lt(e, n);
    },
    p(l, o) {
      o[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      l[3]("common.no_devices") + "") && i_(n, t);
    },
    d(l) {
      l && Ie(e);
    }
  };
}
function ha(i) {
  let e, t = (
    /*device*/
    i[32].label + ""
  ), n, l, o, s;
  return {
    c() {
      e = Ne("option"), n = l_(t), l = yi(), e.__value = o = /*device*/
      i[32].deviceId, Ao(e, e.__value), e.selected = s = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, ve(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      He(r, e, a), Lt(e, n), Lt(e, l);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && i_(n, t), a[0] & /*available_video_devices*/
      64 && o !== (o = /*device*/
      r[32].deviceId) && (e.__value = o, Ao(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && s !== (s = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = s);
    },
    d(r) {
      r && Ie(e);
    }
  };
}
function Bm(i) {
  let e, t, n, l, o, s;
  const r = [km, vm], a = [];
  function _(c, u) {
    return (
      /*webcam_accessed*/
      c[9] ? 1 : 0
    );
  }
  return l = _(i), o = a[l] = r[l](i), {
    c() {
      e = Ne("div"), t = Ne("video"), n = yi(), o.c(), ve(t, "class", "svelte-8hqvb6"), Hi(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), Hi(t, "hide", !/*webcam_accessed*/
      i[9]), ve(e, "class", "wrap svelte-8hqvb6");
    },
    m(c, u) {
      He(c, e, u), Lt(e, t), i[19](t), Lt(e, n), a[l].m(e, null), s = !0;
    },
    p(c, u) {
      (!s || u[0] & /*mirror_webcam*/
      4) && Hi(
        t,
        "flip",
        /*mirror_webcam*/
        c[2]
      ), (!s || u[0] & /*webcam_accessed*/
      512) && Hi(t, "hide", !/*webcam_accessed*/
      c[9]);
      let d = l;
      l = _(c), l === d ? a[l].p(c, u) : (wi(), De(a[d], 1, 1, () => {
        a[d] = null;
      }), bi(), o = a[l], o ? o.p(c, u) : (o = a[l] = r[l](c), o.c()), Se(o, 1), o.m(e, null));
    },
    i(c) {
      s || (Se(o), s = !0);
    },
    o(c) {
      De(o), s = !1;
    },
    d(c) {
      c && Ie(e), i[19](null), a[l].d();
    }
  };
}
function Qo(i, e) {
  const t = (n) => {
    i && !i.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function Mm(i, e, t) {
  var n = this && this.__awaiter || function(A, M, X, U) {
    function oe(te) {
      return te instanceof X ? te : new X(function(ne) {
        ne(te);
      });
    }
    return new (X || (X = Promise))(function(te, ne) {
      function Y(P) {
        try {
          E(U.next(P));
        } catch (ie) {
          ne(ie);
        }
      }
      function ae(P) {
        try {
          E(U.throw(P));
        } catch (ie) {
          ne(ie);
        }
      }
      function E(P) {
        P.done ? te(P.value) : oe(P.value).then(Y, ae);
      }
      E((U = U.apply(A, M || [])).next());
    });
  };
  let l, o = [], s = null, r, { streaming: a = !1 } = e, { pending: _ = !1 } = e, { root: c = "" } = e, { mode: u = "image" } = e, { mirror_webcam: d } = e, { include_audio: h } = e, { i18n: g } = e, { upload: f } = e;
  const m = bm();
  wm(() => r = document.createElement("canvas"));
  const p = (A) => n(void 0, void 0, void 0, function* () {
    const X = A.target.value;
    yield _a(h, l, X).then((U) => n(void 0, void 0, void 0, function* () {
      C = U, t(7, s = o.find((oe) => oe.deviceId === X) || null), t(10, R = !1);
    }));
  });
  function v() {
    return n(this, void 0, void 0, function* () {
      try {
        _a(h, l).then((A) => n(this, void 0, void 0, function* () {
          t(9, w = !0), t(6, o = yield om()), C = A;
        })).then(() => am(o)).then((A) => {
          t(6, o = A);
          const M = C.getTracks().map((X) => {
            var U;
            return (U = X.getSettings()) === null || U === void 0 ? void 0 : U.deviceId;
          })[0];
          t(7, s = M && A.find((X) => X.deviceId === M) || o[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && m("error", g("image.no_webcam_support"));
      } catch (A) {
        if (A instanceof DOMException && A.name == "NotAllowedError")
          m("error", g("image.allow_webcam_access"));
        else
          throw A;
      }
    });
  }
  function b() {
    var A = r.getContext("2d");
    (!a || a && z) && l.videoWidth && l.videoHeight && (r.width = l.videoWidth, r.height = l.videoHeight, A.drawImage(l, 0, 0, l.videoWidth, l.videoHeight), d && (A.scale(-1, 1), A.drawImage(l, -l.videoWidth, 0)), r.toBlob(
      (M) => {
        m(a ? "stream" : "capture", M);
      },
      "image/png",
      0.8
    ));
  }
  let z = !1, S = [], C, y, q;
  function L() {
    if (z) {
      q.stop();
      let A = new Blob(S, { type: y }), M = new FileReader();
      M.onload = function(X) {
        return n(this, void 0, void 0, function* () {
          var U;
          if (X.target) {
            let oe = new File([A], "sample." + y.substring(6));
            const te = yield Nr([oe]);
            let ne = ((U = yield f(te, c)) === null || U === void 0 ? void 0 : U.filter(Boolean))[0];
            m("capture", ne), m("stop_recording");
          }
        });
      }, M.readAsDataURL(A);
    } else {
      m("start_recording"), S = [];
      let A = ["video/webm", "video/mp4"];
      for (let M of A)
        if (MediaRecorder.isTypeSupported(M)) {
          y = M;
          break;
        }
      if (y === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      q = new MediaRecorder(C, { mimeType: y }), q.addEventListener("dataavailable", function(M) {
        S.push(M.data);
      }), q.start(200);
    }
    t(8, z = !z);
  }
  let w = !1;
  function I() {
    u === "image" && a && t(8, z = !z), u === "image" ? b() : L(), !z && C && (C.getTracks().forEach((A) => A.stop()), t(5, l.srcObject = null, l), t(9, w = !1));
  }
  a && u === "image" && window.setInterval(
    () => {
      l && !_ && b();
    },
    500
  );
  let R = !1;
  function N(A) {
    A.preventDefault(), A.stopPropagation(), t(10, R = !1);
  }
  function F(A) {
    fm[A ? "unshift" : "push"](() => {
      l = A, t(5, l);
    });
  }
  const $ = async () => v(), Z = () => t(10, R = !0), ue = () => t(10, R = !1);
  return i.$$set = (A) => {
    "streaming" in A && t(0, a = A.streaming), "pending" in A && t(15, _ = A.pending), "root" in A && t(16, c = A.root), "mode" in A && t(1, u = A.mode), "mirror_webcam" in A && t(2, d = A.mirror_webcam), "include_audio" in A && t(17, h = A.include_audio), "i18n" in A && t(3, g = A.i18n), "upload" in A && t(18, f = A.upload);
  }, [
    a,
    u,
    d,
    g,
    Qo,
    l,
    o,
    s,
    z,
    w,
    R,
    p,
    v,
    I,
    N,
    _,
    c,
    h,
    f,
    F,
    $,
    Z,
    ue
  ];
}
class Em extends rm {
  constructor(e) {
    super(), hm(
      this,
      e,
      Mm,
      Bm,
      gm,
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
    return Qo;
  }
}
const {
  SvelteComponent: G6,
  attr: J6,
  create_component: Q6,
  destroy_component: x6,
  detach: e7,
  element: t7,
  init: n7,
  insert: i7,
  mount_component: l7,
  noop: o7,
  safe_not_equal: s7,
  transition_in: a7,
  transition_out: r7
} = window.__gradio__svelte__internal, { createEventDispatcher: _7 } = window.__gradio__svelte__internal, {
  SvelteComponent: c7,
  add_flush_callback: f7,
  append: u7,
  attr: d7,
  bind: h7,
  binding_callbacks: m7,
  bubble: g7,
  check_outros: p7,
  create_component: b7,
  create_slot: w7,
  destroy_component: v7,
  detach: k7,
  element: C7,
  empty: y7,
  get_all_dirty_from_scope: S7,
  get_slot_changes: q7,
  group_outros: z7,
  init: D7,
  insert: B7,
  listen: M7,
  mount_component: E7,
  noop: L7,
  safe_not_equal: W7,
  space: R7,
  toggle_class: X7,
  transition_in: Y7,
  transition_out: A7,
  update_slot_base: I7
} = window.__gradio__svelte__internal, { createEventDispatcher: H7, tick: T7 } = window.__gradio__svelte__internal, {
  SvelteComponent: j7,
  attr: F7,
  check_outros: P7,
  create_component: U7,
  destroy_component: O7,
  detach: V7,
  element: N7,
  group_outros: $7,
  init: K7,
  insert: Z7,
  mount_component: G7,
  safe_not_equal: J7,
  toggle_class: Q7,
  transition_in: x7,
  transition_out: e9
} = window.__gradio__svelte__internal, {
  SvelteComponent: t9,
  add_flush_callback: n9,
  assign: i9,
  bind: l9,
  binding_callbacks: o9,
  check_outros: s9,
  create_component: a9,
  destroy_component: r9,
  detach: _9,
  empty: c9,
  flush: f9,
  get_spread_object: u9,
  get_spread_update: d9,
  group_outros: h9,
  init: m9,
  insert: g9,
  mount_component: p9,
  safe_not_equal: b9,
  space: w9,
  transition_in: v9,
  transition_out: k9
} = window.__gradio__svelte__internal, {
  SvelteComponent: C9,
  append: y9,
  attr: S9,
  detach: q9,
  init: z9,
  insert: D9,
  noop: B9,
  safe_not_equal: M9,
  set_style: E9,
  svg_element: L9
} = window.__gradio__svelte__internal, {
  SvelteComponent: Lm,
  append: Pt,
  attr: T,
  detach: Wm,
  init: Rm,
  insert: Xm,
  noop: so,
  safe_not_equal: Ym,
  set_style: Ut,
  svg_element: Dt
} = window.__gradio__svelte__internal;
function Am(i) {
  let e, t, n, l, o, s, r, a, _;
  return {
    c() {
      e = Dt("svg"), t = Dt("rect"), n = Dt("rect"), l = Dt("rect"), o = Dt("rect"), s = Dt("line"), r = Dt("line"), a = Dt("line"), _ = Dt("line"), T(t, "x", "2"), T(t, "y", "2"), T(t, "width", "5"), T(t, "height", "5"), T(t, "rx", "1"), T(t, "ry", "1"), T(t, "stroke-width", "2"), T(t, "fill", "none"), T(n, "x", "17"), T(n, "y", "2"), T(n, "width", "5"), T(n, "height", "5"), T(n, "rx", "1"), T(n, "ry", "1"), T(n, "stroke-width", "2"), T(n, "fill", "none"), T(l, "x", "2"), T(l, "y", "17"), T(l, "width", "5"), T(l, "height", "5"), T(l, "rx", "1"), T(l, "ry", "1"), T(l, "stroke-width", "2"), T(l, "fill", "none"), T(o, "x", "17"), T(o, "y", "17"), T(o, "width", "5"), T(o, "height", "5"), T(o, "rx", "1"), T(o, "ry", "1"), T(o, "stroke-width", "2"), T(o, "fill", "none"), T(s, "x1", "7.5"), T(s, "y1", "4.5"), T(s, "x2", "16"), T(s, "y2", "4.5"), Ut(s, "stroke-width", "2px"), T(r, "x1", "7.5"), T(r, "y1", "19.5"), T(r, "x2", "16"), T(r, "y2", "19.5"), Ut(r, "stroke-width", "2px"), T(a, "x1", "4.5"), T(a, "y1", "8"), T(a, "x2", "4.5"), T(a, "y2", "16"), Ut(a, "stroke-width", "2px"), T(_, "x1", "19.5"), T(_, "y1", "8"), T(_, "x2", "19.5"), T(_, "y2", "16"), Ut(_, "stroke-width", "2px"), T(e, "width", "100%"), T(e, "height", "100%"), T(e, "viewBox", "0 0 24 24"), T(e, "version", "1.1"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), T(e, "xml:space", "preserve"), T(e, "stroke", "currentColor"), Ut(e, "fill-rule", "evenodd"), Ut(e, "clip-rule", "evenodd"), Ut(e, "stroke-linecap", "round"), Ut(e, "stroke-linejoin", "round");
    },
    m(c, u) {
      Xm(c, e, u), Pt(e, t), Pt(e, n), Pt(e, l), Pt(e, o), Pt(e, s), Pt(e, r), Pt(e, a), Pt(e, _);
    },
    p: so,
    i: so,
    o: so,
    d(c) {
      c && Wm(e);
    }
  };
}
class Im extends Lm {
  constructor(e) {
    super(), Rm(this, e, null, Am, Ym, {});
  }
}
const {
  SvelteComponent: Hm,
  append: Tm,
  attr: Bt,
  detach: jm,
  init: Fm,
  insert: Pm,
  noop: ao,
  safe_not_equal: Um,
  set_style: Ti,
  svg_element: ma
} = window.__gradio__svelte__internal;
function Om(i) {
  let e, t;
  return {
    c() {
      e = ma("svg"), t = ma("path"), Bt(t, "d", "M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"), Bt(e, "width", "100%"), Bt(e, "height", "100%"), Bt(e, "viewBox", "0 0 24 24"), Bt(e, "version", "1.1"), Bt(e, "xmlns", "http://www.w3.org/2000/svg"), Bt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Bt(e, "xml:space", "preserve"), Bt(e, "stroke", "currentColor"), Ti(e, "fill-rule", "evenodd"), Ti(e, "clip-rule", "evenodd"), Ti(e, "stroke-linecap", "round"), Ti(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      Pm(n, e, l), Tm(e, t);
    },
    p: ao,
    i: ao,
    o: ao,
    d(n) {
      n && jm(e);
    }
  };
}
let Vm = class extends Hm {
  constructor(e) {
    super(), Fm(this, e, null, Om, Um, {});
  }
};
const {
  SvelteComponent: Nm,
  append: $m,
  attr: st,
  detach: Km,
  init: Zm,
  insert: Gm,
  noop: ro,
  safe_not_equal: Jm,
  set_style: ji,
  svg_element: ga
} = window.__gradio__svelte__internal;
function Qm(i) {
  let e, t;
  return {
    c() {
      e = ga("svg"), t = ga("path"), st(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), st(t, "fill", "none"), st(t, "stroke-width", "2"), st(e, "width", "100%"), st(e, "height", "100%"), st(e, "viewBox", "0 0 24 24"), st(e, "version", "1.1"), st(e, "xmlns", "http://www.w3.org/2000/svg"), st(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), st(e, "xml:space", "preserve"), st(e, "stroke", "currentColor"), ji(e, "fill-rule", "evenodd"), ji(e, "clip-rule", "evenodd"), ji(e, "stroke-linecap", "round"), ji(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      Gm(n, e, l), $m(e, t);
    },
    p: ro,
    i: ro,
    o: ro,
    d(n) {
      n && Km(e);
    }
  };
}
class xm extends Nm {
  constructor(e) {
    super(), Zm(this, e, null, Qm, Jm, {});
  }
}
const {
  SvelteComponent: e0,
  append: t0,
  attr: at,
  detach: n0,
  init: i0,
  insert: l0,
  noop: _o,
  safe_not_equal: o0,
  set_style: Fi,
  svg_element: pa
} = window.__gradio__svelte__internal;
function s0(i) {
  let e, t;
  return {
    c() {
      e = pa("svg"), t = pa("path"), at(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), at(t, "fill", "none"), at(t, "stroke-width", "2"), at(e, "width", "100%"), at(e, "height", "100%"), at(e, "viewBox", "0 0 24 24"), at(e, "version", "1.1"), at(e, "xmlns", "http://www.w3.org/2000/svg"), at(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), at(e, "xml:space", "preserve"), at(e, "stroke", "currentColor"), Fi(e, "fill-rule", "evenodd"), Fi(e, "clip-rule", "evenodd"), Fi(e, "stroke-linecap", "round"), Fi(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      l0(n, e, l), t0(e, t);
    },
    p: _o,
    i: _o,
    o: _o,
    d(n) {
      n && n0(e);
    }
  };
}
class a0 extends e0 {
  constructor(e) {
    super(), i0(this, e, null, s0, o0, {});
  }
}
const {
  SvelteComponent: r0,
  append: ba,
  attr: Mt,
  detach: _0,
  init: c0,
  insert: f0,
  noop: co,
  safe_not_equal: u0,
  set_style: Pi,
  svg_element: fo
} = window.__gradio__svelte__internal;
function d0(i) {
  let e, t, n;
  return {
    c() {
      e = fo("svg"), t = fo("path"), n = fo("path"), Mt(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), Mt(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), Mt(e, "width", "100%"), Mt(e, "height", "100%"), Mt(e, "viewBox", "0 0 24 24"), Mt(e, "xmlns", "http://www.w3.org/2000/svg"), Mt(e, "fill", "none"), Mt(e, "stroke", "currentColor"), Mt(e, "stroke-width", "2"), Pi(e, "fill-rule", "evenodd"), Pi(e, "clip-rule", "evenodd"), Pi(e, "stroke-linecap", "round"), Pi(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      f0(l, e, o), ba(e, t), ba(e, n);
    },
    p: co,
    i: co,
    o: co,
    d(l) {
      l && _0(e);
    }
  };
}
class h0 extends r0 {
  constructor(e) {
    super(), c0(this, e, null, d0, u0, {});
  }
}
const {
  SvelteComponent: m0,
  append: g0,
  attr: Ot,
  detach: p0,
  init: b0,
  insert: w0,
  noop: uo,
  safe_not_equal: v0,
  set_style: Ui,
  svg_element: wa
} = window.__gradio__svelte__internal;
function k0(i) {
  let e, t;
  return {
    c() {
      e = wa("svg"), t = wa("path"), Ot(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), Ot(e, "width", "100%"), Ot(e, "height", "100%"), Ot(e, "viewBox", "0 0 24 24"), Ot(e, "fill", "none"), Ot(e, "stroke", "currentColor"), Ot(e, "stroke-width", "2"), Ui(e, "fill-rule", "evenodd"), Ui(e, "clip-rule", "evenodd"), Ui(e, "stroke-linecap", "round"), Ui(e, "stroke-linejoin", "round"), Ot(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      w0(n, e, l), g0(e, t);
    },
    p: uo,
    i: uo,
    o: uo,
    d(n) {
      n && p0(e);
    }
  };
}
class C0 extends m0 {
  constructor(e) {
    super(), b0(this, e, null, k0, v0, {});
  }
}
const {
  SvelteComponent: y0,
  append: S0,
  attr: Vt,
  detach: q0,
  init: z0,
  insert: D0,
  noop: ho,
  safe_not_equal: B0,
  set_style: Oi,
  svg_element: va
} = window.__gradio__svelte__internal;
function M0(i) {
  let e, t;
  return {
    c() {
      e = va("svg"), t = va("path"), Vt(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), Vt(e, "width", "100%"), Vt(e, "height", "100%"), Vt(e, "viewBox", "0 0 24 24"), Vt(e, "fill", "none"), Vt(e, "stroke", "currentColor"), Vt(e, "stroke-width", "2"), Oi(e, "fill-rule", "evenodd"), Oi(e, "clip-rule", "evenodd"), Oi(e, "stroke-linecap", "round"), Oi(e, "stroke-linejoin", "round"), Vt(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      D0(n, e, l), S0(e, t);
    },
    p: ho,
    i: ho,
    o: ho,
    d(n) {
      n && q0(e);
    }
  };
}
class E0 extends y0 {
  constructor(e) {
    super(), z0(this, e, null, M0, B0, {});
  }
}
const {
  SvelteComponent: L0,
  append: ka,
  attr: mo,
  bubble: Ca,
  create_component: W0,
  destroy_component: R0,
  detach: o_,
  element: ya,
  init: X0,
  insert: s_,
  listen: go,
  mount_component: Y0,
  run_all: A0,
  safe_not_equal: I0,
  set_data: H0,
  set_input_value: Sa,
  space: T0,
  text: j0,
  transition_in: F0,
  transition_out: P0
} = window.__gradio__svelte__internal, { createEventDispatcher: U0, afterUpdate: O0 } = window.__gradio__svelte__internal;
function V0(i) {
  let e;
  return {
    c() {
      e = j0(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      s_(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && H0(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && o_(e);
    }
  };
}
function N0(i) {
  let e, t, n, l, o, s, r;
  return t = new dr({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[2]
      ),
      $$slots: { default: [V0] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = ya("label"), W0(t.$$.fragment), n = T0(), l = ya("input"), mo(l, "type", "color"), l.disabled = /*disabled*/
      i[3], mo(l, "class", "svelte-16l8u73"), mo(e, "class", "block");
    },
    m(a, _) {
      s_(a, e, _), Y0(t, e, null), ka(e, n), ka(e, l), Sa(
        l,
        /*value*/
        i[0]
      ), o = !0, s || (r = [
        go(
          l,
          "input",
          /*input_input_handler*/
          i[8]
        ),
        go(
          l,
          "focus",
          /*focus_handler*/
          i[6]
        ),
        go(
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
      1 && Sa(
        l,
        /*value*/
        a[0]
      );
    },
    i(a) {
      o || (F0(t.$$.fragment, a), o = !0);
    },
    o(a) {
      P0(t.$$.fragment, a), o = !1;
    },
    d(a) {
      a && o_(e), R0(t), s = !1, A0(r);
    }
  };
}
function $0(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: l = !1 } = e, { label: o } = e, { info: s = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const _ = U0();
  function c() {
    _("change", n), l || _("input");
  }
  O0(() => {
    t(5, l = !1);
  });
  function u(g) {
    Ca.call(this, i, g);
  }
  function d(g) {
    Ca.call(this, i, g);
  }
  function h() {
    n = this.value, t(0, n);
  }
  return i.$$set = (g) => {
    "value" in g && t(0, n = g.value), "value_is_output" in g && t(5, l = g.value_is_output), "label" in g && t(1, o = g.label), "info" in g && t(2, s = g.info), "disabled" in g && t(3, r = g.disabled), "show_label" in g && t(4, a = g.show_label);
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
class K0 extends L0 {
  constructor(e) {
    super(), X0(this, e, $0, N0, I0, {
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
  SvelteComponent: R9,
  append: X9,
  attr: Y9,
  component_subscribe: A9,
  detach: I9,
  element: H9,
  init: T9,
  insert: j9,
  noop: F9,
  safe_not_equal: P9,
  set_style: U9,
  svg_element: O9,
  toggle_class: V9
} = window.__gradio__svelte__internal, { onMount: N9 } = window.__gradio__svelte__internal, {
  SvelteComponent: $9,
  append: K9,
  attr: Z9,
  binding_callbacks: G9,
  check_outros: J9,
  create_component: Q9,
  create_slot: x9,
  destroy_component: eC,
  destroy_each: tC,
  detach: nC,
  element: iC,
  empty: lC,
  ensure_array_like: oC,
  get_all_dirty_from_scope: sC,
  get_slot_changes: aC,
  group_outros: rC,
  init: _C,
  insert: cC,
  mount_component: fC,
  noop: uC,
  safe_not_equal: dC,
  set_data: hC,
  set_style: mC,
  space: gC,
  text: pC,
  toggle_class: bC,
  transition_in: wC,
  transition_out: vC,
  update_slot_base: kC
} = window.__gradio__svelte__internal, { tick: CC } = window.__gradio__svelte__internal, { onDestroy: yC } = window.__gradio__svelte__internal, {
  SvelteComponent: SC,
  add_render_callback: qC,
  append: zC,
  attr: DC,
  bubble: BC,
  check_outros: MC,
  create_component: EC,
  create_in_transition: LC,
  create_out_transition: WC,
  destroy_component: RC,
  detach: XC,
  element: YC,
  group_outros: AC,
  init: IC,
  insert: HC,
  listen: TC,
  mount_component: jC,
  run_all: FC,
  safe_not_equal: PC,
  set_data: UC,
  space: OC,
  stop_propagation: VC,
  text: NC,
  transition_in: $C,
  transition_out: KC
} = window.__gradio__svelte__internal, { createEventDispatcher: ZC, onMount: GC } = window.__gradio__svelte__internal, {
  SvelteComponent: JC,
  append: QC,
  attr: xC,
  bubble: ey,
  check_outros: ty,
  create_animation: ny,
  create_component: iy,
  destroy_component: ly,
  detach: oy,
  element: sy,
  ensure_array_like: ay,
  fix_and_outro_and_destroy_block: ry,
  fix_position: _y,
  group_outros: cy,
  init: fy,
  insert: uy,
  mount_component: dy,
  noop: hy,
  safe_not_equal: my,
  set_style: gy,
  space: py,
  transition_in: by,
  transition_out: wy,
  update_keyed_each: vy
} = window.__gradio__svelte__internal, {
  SvelteComponent: ky,
  attr: Cy,
  detach: yy,
  element: Sy,
  init: qy,
  insert: zy,
  noop: Dy,
  safe_not_equal: By,
  set_style: My,
  toggle_class: Ey
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ly,
  add_flush_callback: Wy,
  assign: Ry,
  bind: Xy,
  binding_callbacks: Yy,
  create_component: Ay,
  destroy_component: Iy,
  detach: Hy,
  flush: Ty,
  get_spread_object: jy,
  get_spread_update: Fy,
  init: Py,
  insert: Uy,
  mount_component: Oy,
  safe_not_equal: Vy,
  space: Ny,
  transition_in: $y,
  transition_out: Ky
} = window.__gradio__svelte__internal;
var a_ = (i) => {
  throw TypeError(i);
}, r_ = (i, e, t) => e.has(i) || a_("Cannot " + t), ai = (i, e, t) => (r_(i, e, "read from private field"), e.get(i)), Z0 = (i, e, t) => e.has(i) ? a_("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), G0 = (i, e, t, n) => (r_(i, e, "write to private field"), e.set(i, t), t);
new Intl.Collator(0, { numeric: 1 }).compare;
typeof process < "u" && process.versions && process.versions.node;
var Zt;
class Zy extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = ai(this, Zt) + t; ; ) {
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
        G0(this, Zt, t);
      },
      flush: (t) => {
        if (ai(this, Zt) === "")
          return;
        const n = e.allowCR && ai(this, Zt).endsWith("\r") ? ai(this, Zt).slice(0, -1) : ai(this, Zt);
        t.enqueue(n);
      }
    }), Z0(this, Zt, "");
  }
}
Zt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: J0,
  append: __,
  attr: me,
  bubble: Q0,
  check_outros: x0,
  create_slot: c_,
  detach: zi,
  element: Sl,
  empty: eg,
  get_all_dirty_from_scope: f_,
  get_slot_changes: u_,
  group_outros: tg,
  init: ng,
  insert: Di,
  listen: ig,
  safe_not_equal: lg,
  set_style: Ye,
  space: d_,
  src_url_equal: _l,
  toggle_class: Fn,
  transition_in: cl,
  transition_out: fl,
  update_slot_base: h_
} = window.__gradio__svelte__internal;
function og(i) {
  let e, t, n, l, o, s, r = (
    /*icon*/
    i[7] && qa(i)
  );
  const a = (
    /*#slots*/
    i[12].default
  ), _ = c_(
    a,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = Sl("button"), r && r.c(), t = d_(), _ && _.c(), me(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), me(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), e.disabled = /*disabled*/
      i[8], Fn(e, "hidden", !/*visible*/
      i[2]), Ye(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), Ye(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), Ye(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(c, u) {
      Di(c, e, u), r && r.m(e, null), __(e, t), _ && _.m(e, null), l = !0, o || (s = ig(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), o = !0);
    },
    p(c, u) {
      /*icon*/
      c[7] ? r ? r.p(c, u) : (r = qa(c), r.c(), r.m(e, t)) : r && (r.d(1), r = null), _ && _.p && (!l || u & /*$$scope*/
      2048) && h_(
        _,
        a,
        c,
        /*$$scope*/
        c[11],
        l ? u_(
          a,
          /*$$scope*/
          c[11],
          u,
          null
        ) : f_(
          /*$$scope*/
          c[11]
        ),
        null
      ), (!l || u & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      c[4] + " " + /*variant*/
      c[3] + " " + /*elem_classes*/
      c[1].join(" ") + " svelte-8huxfn")) && me(e, "class", n), (!l || u & /*elem_id*/
      1) && me(
        e,
        "id",
        /*elem_id*/
        c[0]
      ), (!l || u & /*disabled*/
      256) && (e.disabled = /*disabled*/
      c[8]), (!l || u & /*size, variant, elem_classes, visible*/
      30) && Fn(e, "hidden", !/*visible*/
      c[2]), u & /*scale*/
      512 && Ye(
        e,
        "flex-grow",
        /*scale*/
        c[9]
      ), u & /*scale*/
      512 && Ye(
        e,
        "width",
        /*scale*/
        c[9] === 0 ? "fit-content" : null
      ), u & /*min_width*/
      1024 && Ye(e, "min-width", typeof /*min_width*/
      c[10] == "number" ? `calc(min(${/*min_width*/
      c[10]}px, 100%))` : null);
    },
    i(c) {
      l || (cl(_, c), l = !0);
    },
    o(c) {
      fl(_, c), l = !1;
    },
    d(c) {
      c && zi(e), r && r.d(), _ && _.d(c), o = !1, s();
    }
  };
}
function sg(i) {
  let e, t, n, l, o = (
    /*icon*/
    i[7] && za(i)
  );
  const s = (
    /*#slots*/
    i[12].default
  ), r = c_(
    s,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = Sl("a"), o && o.c(), t = d_(), r && r.c(), me(
        e,
        "href",
        /*link*/
        i[6]
      ), me(e, "rel", "noopener noreferrer"), me(
        e,
        "aria-disabled",
        /*disabled*/
        i[8]
      ), me(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), me(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), Fn(e, "hidden", !/*visible*/
      i[2]), Fn(
        e,
        "disabled",
        /*disabled*/
        i[8]
      ), Ye(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), Ye(
        e,
        "pointer-events",
        /*disabled*/
        i[8] ? "none" : null
      ), Ye(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), Ye(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(a, _) {
      Di(a, e, _), o && o.m(e, null), __(e, t), r && r.m(e, null), l = !0;
    },
    p(a, _) {
      /*icon*/
      a[7] ? o ? o.p(a, _) : (o = za(a), o.c(), o.m(e, t)) : o && (o.d(1), o = null), r && r.p && (!l || _ & /*$$scope*/
      2048) && h_(
        r,
        s,
        a,
        /*$$scope*/
        a[11],
        l ? u_(
          s,
          /*$$scope*/
          a[11],
          _,
          null
        ) : f_(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!l || _ & /*link*/
      64) && me(
        e,
        "href",
        /*link*/
        a[6]
      ), (!l || _ & /*disabled*/
      256) && me(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!l || _ & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && me(e, "class", n), (!l || _ & /*elem_id*/
      1) && me(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!l || _ & /*size, variant, elem_classes, visible*/
      30) && Fn(e, "hidden", !/*visible*/
      a[2]), (!l || _ & /*size, variant, elem_classes, disabled*/
      282) && Fn(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), _ & /*scale*/
      512 && Ye(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), _ & /*disabled*/
      256 && Ye(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), _ & /*scale*/
      512 && Ye(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), _ & /*min_width*/
      1024 && Ye(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      l || (cl(r, a), l = !0);
    },
    o(a) {
      fl(r, a), l = !1;
    },
    d(a) {
      a && zi(e), o && o.d(), r && r.d(a);
    }
  };
}
function qa(i) {
  let e, t, n;
  return {
    c() {
      e = Sl("img"), me(e, "class", "button-icon svelte-8huxfn"), _l(e.src, t = /*icon*/
      i[7].url) || me(e, "src", t), me(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, o) {
      Di(l, e, o);
    },
    p(l, o) {
      o & /*icon*/
      128 && !_l(e.src, t = /*icon*/
      l[7].url) && me(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && me(e, "alt", n);
    },
    d(l) {
      l && zi(e);
    }
  };
}
function za(i) {
  let e, t, n;
  return {
    c() {
      e = Sl("img"), me(e, "class", "button-icon svelte-8huxfn"), _l(e.src, t = /*icon*/
      i[7].url) || me(e, "src", t), me(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, o) {
      Di(l, e, o);
    },
    p(l, o) {
      o & /*icon*/
      128 && !_l(e.src, t = /*icon*/
      l[7].url) && me(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && me(e, "alt", n);
    },
    d(l) {
      l && zi(e);
    }
  };
}
function ag(i) {
  let e, t, n, l;
  const o = [sg, og], s = [];
  function r(a, _) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = eg();
    },
    m(a, _) {
      s[e].m(a, _), Di(a, n, _), l = !0;
    },
    p(a, [_]) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (tg(), fl(s[c], 1, 1, () => {
        s[c] = null;
      }), x0(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), cl(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (cl(t), l = !0);
    },
    o(a) {
      fl(t), l = !1;
    },
    d(a) {
      a && zi(n), s[e].d(a);
    }
  };
}
function rg(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { elem_id: o = "" } = e, { elem_classes: s = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: _ = "lg" } = e, { value: c = null } = e, { link: u = null } = e, { icon: d = null } = e, { disabled: h = !1 } = e, { scale: g = null } = e, { min_width: f = void 0 } = e;
  function m(p) {
    Q0.call(this, i, p);
  }
  return i.$$set = (p) => {
    "elem_id" in p && t(0, o = p.elem_id), "elem_classes" in p && t(1, s = p.elem_classes), "visible" in p && t(2, r = p.visible), "variant" in p && t(3, a = p.variant), "size" in p && t(4, _ = p.size), "value" in p && t(5, c = p.value), "link" in p && t(6, u = p.link), "icon" in p && t(7, d = p.icon), "disabled" in p && t(8, h = p.disabled), "scale" in p && t(9, g = p.scale), "min_width" in p && t(10, f = p.min_width), "$$scope" in p && t(11, l = p.$$scope);
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
    g,
    f,
    l,
    n,
    m
  ];
}
class Io extends J0 {
  constructor(e) {
    super(), ng(this, e, rg, ag, lg, {
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
  SvelteComponent: Gy,
  create_component: Jy,
  destroy_component: Qy,
  detach: xy,
  init: eS,
  insert: tS,
  mount_component: nS,
  safe_not_equal: iS,
  set_data: lS,
  text: oS,
  transition_in: sS,
  transition_out: aS
} = window.__gradio__svelte__internal, {
  SvelteComponent: _g,
  add_render_callback: m_,
  append: Vi,
  attr: Oe,
  binding_callbacks: Da,
  check_outros: cg,
  create_bidirectional_transition: Ba,
  destroy_each: fg,
  detach: vi,
  element: ul,
  empty: ug,
  ensure_array_like: Ma,
  group_outros: dg,
  init: hg,
  insert: ki,
  listen: Ho,
  prevent_default: mg,
  run_all: gg,
  safe_not_equal: pg,
  set_data: bg,
  set_style: Rn,
  space: To,
  text: wg,
  toggle_class: ht,
  transition_in: po,
  transition_out: Ea
} = window.__gradio__svelte__internal, { createEventDispatcher: vg } = window.__gradio__svelte__internal;
function La(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function Wa(i) {
  let e, t, n, l, o, s = Ma(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < s.length; a += 1)
    r[a] = Ra(La(i, s, a));
  return {
    c() {
      e = ul("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Oe(e, "class", "options svelte-yuohum"), Oe(e, "role", "listbox"), Rn(
        e,
        "bottom",
        /*bottom*/
        i[9]
      ), Rn(e, "max-height", `calc(${/*max_height*/
      i[10]}px - var(--window-padding))`), Rn(
        e,
        "width",
        /*input_width*/
        i[8] + "px"
      );
    },
    m(a, _) {
      ki(a, e, _);
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(e, null);
      i[22](e), n = !0, l || (o = Ho(e, "mousedown", mg(
        /*mousedown_handler*/
        i[21]
      )), l = !0);
    },
    p(a, _) {
      if (_ & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        s = Ma(
          /*filtered_indices*/
          a[1]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const u = La(a, s, c);
          r[c] ? r[c].p(u, _) : (r[c] = Ra(u), r[c].c(), r[c].m(e, null));
        }
        for (; c < r.length; c += 1)
          r[c].d(1);
        r.length = s.length;
      }
      _ & /*bottom*/
      512 && Rn(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), _ & /*max_height*/
      1024 && Rn(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), _ & /*input_width*/
      256 && Rn(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && m_(() => {
        n && (t || (t = Ba(e, Ys, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = Ba(e, Ys, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && vi(e), fg(r, a), i[22](null), a && t && t.end(), l = !1, o();
    }
  };
}
function Ra(i) {
  let e, t, n, l = (
    /*choices*/
    i[0][
      /*index*/
      i[26]
    ][0] + ""
  ), o, s, r, a, _;
  return {
    c() {
      e = ul("li"), t = ul("span"), t.textContent = "✓", n = To(), o = wg(l), s = To(), Oe(t, "class", "inner-item svelte-yuohum"), ht(t, "hide", !/*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), Oe(e, "class", "item svelte-yuohum"), Oe(e, "data-index", r = /*index*/
      i[26]), Oe(e, "aria-label", a = /*choices*/
      i[0][
        /*index*/
        i[26]
      ][0]), Oe(e, "data-testid", "dropdown-option"), Oe(e, "role", "option"), Oe(e, "aria-selected", _ = /*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), ht(
        e,
        "selected",
        /*selected_indices*/
        i[4].includes(
          /*index*/
          i[26]
        )
      ), ht(
        e,
        "active",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), ht(
        e,
        "bg-gray-100",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), ht(
        e,
        "dark:bg-gray-600",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      );
    },
    m(c, u) {
      ki(c, e, u), Vi(e, t), Vi(e, n), Vi(e, o), Vi(e, s);
    },
    p(c, u) {
      u & /*selected_indices, filtered_indices*/
      18 && ht(t, "hide", !/*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )), u & /*choices, filtered_indices*/
      3 && l !== (l = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0] + "") && bg(o, l), u & /*filtered_indices*/
      2 && r !== (r = /*index*/
      c[26]) && Oe(e, "data-index", r), u & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0]) && Oe(e, "aria-label", a), u & /*selected_indices, filtered_indices*/
      18 && _ !== (_ = /*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )) && Oe(e, "aria-selected", _), u & /*selected_indices, filtered_indices*/
      18 && ht(
        e,
        "selected",
        /*selected_indices*/
        c[4].includes(
          /*index*/
          c[26]
        )
      ), u & /*filtered_indices, active_index*/
      34 && ht(
        e,
        "active",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), u & /*filtered_indices, active_index*/
      34 && ht(
        e,
        "bg-gray-100",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), u & /*filtered_indices, active_index*/
      34 && ht(
        e,
        "dark:bg-gray-600",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      );
    },
    d(c) {
      c && vi(e);
    }
  };
}
function kg(i) {
  let e, t, n, l, o;
  m_(
    /*onwindowresize*/
    i[19]
  );
  let s = (
    /*show_options*/
    i[2] && !/*disabled*/
    i[3] && Wa(i)
  );
  return {
    c() {
      e = ul("div"), t = To(), s && s.c(), n = ug(), Oe(e, "class", "reference");
    },
    m(r, a) {
      ki(r, e, a), i[20](e), ki(r, t, a), s && s.m(r, a), ki(r, n, a), l || (o = [
        Ho(
          window,
          "scroll",
          /*scroll_listener*/
          i[12]
        ),
        Ho(
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
      12 && po(s, 1)) : (s = Wa(r), s.c(), po(s, 1), s.m(n.parentNode, n)) : s && (dg(), Ea(s, 1, 1, () => {
        s = null;
      }), cg());
    },
    i(r) {
      po(s);
    },
    o(r) {
      Ea(s);
    },
    d(r) {
      r && (vi(e), vi(t), vi(n)), i[20](null), s && s.d(r), l = !1, gg(o);
    }
  };
}
function Cg(i, e, t) {
  var n, l;
  let { choices: o } = e, { filtered_indices: s } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: _ = [] } = e, { active_index: c = null } = e, u, d, h, g, f, m, p, v, b;
  function z() {
    const { top: R, bottom: N } = f.getBoundingClientRect();
    t(16, u = R), t(17, d = b - N);
  }
  let S = null;
  function C() {
    r && (S !== null && clearTimeout(S), S = setTimeout(
      () => {
        z(), S = null;
      },
      10
    ));
  }
  const y = vg();
  function q() {
    t(11, b = window.innerHeight);
  }
  function L(R) {
    Da[R ? "unshift" : "push"](() => {
      f = R, t(6, f);
    });
  }
  const w = (R) => y("change", R);
  function I(R) {
    Da[R ? "unshift" : "push"](() => {
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
          let N = m.querySelectorAll("li");
          for (const F of Array.from(N))
            if (F.getAttribute("data-index") === _[0].toString()) {
              t(14, n = m == null ? void 0 : m.scrollTo) === null || n === void 0 || n.call(m, 0, F.offsetTop);
              break;
            }
        }
        z();
        const R = t(15, l = f.parentElement) === null || l === void 0 ? void 0 : l.getBoundingClientRect();
        t(18, h = (R == null ? void 0 : R.height) || 0), t(8, g = (R == null ? void 0 : R.width) || 0);
      }
      d > u ? (t(10, v = d), t(9, p = null)) : (t(9, p = `${d + h}px`), t(10, v = u - h));
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
    g,
    p,
    v,
    b,
    C,
    y,
    n,
    l,
    u,
    d,
    h,
    q,
    L,
    w,
    I
  ];
}
class yg extends _g {
  constructor(e) {
    super(), hg(this, e, Cg, kg, pg, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function Sg(i, e) {
  return (i % e + e) % e;
}
function Xa(i, e) {
  return i.reduce((t, n, l) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(l), t), []);
}
function qg(i, e, t) {
  i("change", e), t || i("input");
}
function zg(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), l = i.key === "ArrowUp" ? -1 : 1;
      e = t[Sg(n + l, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: rS,
  append: _S,
  attr: cS,
  binding_callbacks: fS,
  check_outros: uS,
  create_component: dS,
  destroy_component: hS,
  destroy_each: mS,
  detach: gS,
  element: pS,
  ensure_array_like: bS,
  group_outros: wS,
  init: vS,
  insert: kS,
  listen: CS,
  mount_component: yS,
  prevent_default: SS,
  run_all: qS,
  safe_not_equal: zS,
  set_data: DS,
  set_input_value: BS,
  space: MS,
  text: ES,
  toggle_class: LS,
  transition_in: WS,
  transition_out: RS
} = window.__gradio__svelte__internal, { afterUpdate: XS, createEventDispatcher: YS } = window.__gradio__svelte__internal, {
  SvelteComponent: Dg,
  append: an,
  attr: Ue,
  binding_callbacks: Bg,
  check_outros: Mg,
  create_component: jo,
  destroy_component: Fo,
  detach: xo,
  element: In,
  group_outros: Eg,
  init: Lg,
  insert: es,
  listen: ri,
  mount_component: Po,
  run_all: Wg,
  safe_not_equal: Rg,
  set_data: Xg,
  set_input_value: Ya,
  space: bo,
  text: Yg,
  toggle_class: Xn,
  transition_in: Hn,
  transition_out: gi
} = window.__gradio__svelte__internal, { onMount: Ag } = window.__gradio__svelte__internal, { createEventDispatcher: Ig, afterUpdate: Hg } = window.__gradio__svelte__internal;
function Tg(i) {
  let e;
  return {
    c() {
      e = Yg(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      es(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && Xg(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && xo(e);
    }
  };
}
function Aa(i) {
  let e, t, n;
  return t = new Vo({}), {
    c() {
      e = In("div"), jo(t.$$.fragment), Ue(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(l, o) {
      es(l, e, o), Po(t, e, null), n = !0;
    },
    i(l) {
      n || (Hn(t.$$.fragment, l), n = !0);
    },
    o(l) {
      gi(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && xo(e), Fo(t);
    }
  };
}
function jg(i) {
  let e, t, n, l, o, s, r, a, _, c, u, d, h, g;
  t = new dr({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[1]
      ),
      $$slots: { default: [Tg] },
      $$scope: { ctx: i }
    }
  });
  let f = !/*disabled*/
  i[3] && Aa();
  return u = new yg({
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
      e = In("div"), jo(t.$$.fragment), n = bo(), l = In("div"), o = In("div"), s = In("div"), r = In("input"), _ = bo(), f && f.c(), c = bo(), jo(u.$$.fragment), Ue(r, "role", "listbox"), Ue(r, "aria-controls", "dropdown-options"), Ue(
        r,
        "aria-expanded",
        /*show_options*/
        i[12]
      ), Ue(
        r,
        "aria-label",
        /*label*/
        i[0]
      ), Ue(r, "class", "border-none svelte-1m1zvyj"), r.disabled = /*disabled*/
      i[3], Ue(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      i[7], Xn(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), Ue(s, "class", "secondary-wrap svelte-1m1zvyj"), Ue(o, "class", "wrap-inner svelte-1m1zvyj"), Xn(
        o,
        "show_options",
        /*show_options*/
        i[12]
      ), Ue(l, "class", "wrap svelte-1m1zvyj"), Ue(e, "class", "svelte-1m1zvyj"), Xn(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(m, p) {
      es(m, e, p), Po(t, e, null), an(e, n), an(e, l), an(l, o), an(o, s), an(s, r), Ya(
        r,
        /*input_text*/
        i[9]
      ), i[29](r), an(s, _), f && f.m(s, null), an(l, c), Po(u, l, null), d = !0, h || (g = [
        ri(
          r,
          "input",
          /*input_input_handler*/
          i[28]
        ),
        ri(
          r,
          "keydown",
          /*handle_key_down*/
          i[19]
        ),
        ri(
          r,
          "keyup",
          /*keyup_handler*/
          i[30]
        ),
        ri(
          r,
          "blur",
          /*handle_blur*/
          i[18]
        ),
        ri(
          r,
          "focus",
          /*handle_focus*/
          i[17]
        )
      ], h = !0);
    },
    p(m, p) {
      const v = {};
      p[0] & /*show_label*/
      16 && (v.show_label = /*show_label*/
      m[4]), p[0] & /*info*/
      2 && (v.info = /*info*/
      m[1]), p[0] & /*label*/
      1 | p[1] & /*$$scope*/
      4 && (v.$$scope = { dirty: p, ctx: m }), t.$set(v), (!d || p[0] & /*show_options*/
      4096) && Ue(
        r,
        "aria-expanded",
        /*show_options*/
        m[12]
      ), (!d || p[0] & /*label*/
      1) && Ue(
        r,
        "aria-label",
        /*label*/
        m[0]
      ), (!d || p[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      m[3]), (!d || p[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      m[7])) && (r.readOnly = a), p[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      m[9] && Ya(
        r,
        /*input_text*/
        m[9]
      ), (!d || p[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && Xn(r, "subdued", !/*choices_names*/
      m[13].includes(
        /*input_text*/
        m[9]
      ) && !/*allow_custom_value*/
      m[6]), /*disabled*/
      m[3] ? f && (Eg(), gi(f, 1, 1, () => {
        f = null;
      }), Mg()) : f ? p[0] & /*disabled*/
      8 && Hn(f, 1) : (f = Aa(), f.c(), Hn(f, 1), f.m(s, null)), (!d || p[0] & /*show_options*/
      4096) && Xn(
        o,
        "show_options",
        /*show_options*/
        m[12]
      );
      const b = {};
      p[0] & /*show_options*/
      4096 && (b.show_options = /*show_options*/
      m[12]), p[0] & /*choices*/
      4 && (b.choices = /*choices*/
      m[2]), p[0] & /*filtered_indices*/
      1024 && (b.filtered_indices = /*filtered_indices*/
      m[10]), p[0] & /*disabled*/
      8 && (b.disabled = /*disabled*/
      m[3]), p[0] & /*selected_index*/
      2048 && (b.selected_indices = /*selected_index*/
      m[11] === null ? [] : [
        /*selected_index*/
        m[11]
      ]), p[0] & /*active_index*/
      16384 && (b.active_index = /*active_index*/
      m[14]), u.$set(b), (!d || p[0] & /*container*/
      32) && Xn(
        e,
        "container",
        /*container*/
        m[5]
      );
    },
    i(m) {
      d || (Hn(t.$$.fragment, m), Hn(f), Hn(u.$$.fragment, m), d = !0);
    },
    o(m) {
      gi(t.$$.fragment, m), gi(f), gi(u.$$.fragment, m), d = !1;
    },
    d(m) {
      m && xo(e), Fo(t), i[29](null), f && f.d(), Fo(u), h = !1, Wg(g);
    }
  };
}
function Fg(i, e, t) {
  let { label: n } = e, { info: l = void 0 } = e, { value: o = [] } = e, s = [], { value_is_output: r = !1 } = e, { choices: a } = e, _, { disabled: c = !1 } = e, { show_label: u } = e, { container: d = !0 } = e, { allow_custom_value: h = !1 } = e, { filterable: g = !0 } = e, f, m = !1, p, v, b = "", z = "", S = !1, C = [], y = null, q = null, L;
  const w = Ig();
  o ? (L = a.map((X) => X[1]).indexOf(o), q = L, q === -1 ? (s = o, q = null) : ([b, s] = a[q], z = b), R()) : a.length > 0 && (L = 0, q = 0, [b, o] = a[q], s = o, z = b);
  function I() {
    t(13, p = a.map((X) => X[0])), t(24, v = a.map((X) => X[1]));
  }
  function R() {
    I(), o === void 0 || Array.isArray(o) && o.length === 0 ? (t(9, b = ""), t(11, q = null)) : v.includes(o) ? (t(9, b = p[v.indexOf(o)]), t(11, q = v.indexOf(o))) : h ? (t(9, b = o), t(11, q = null)) : (t(9, b = ""), t(11, q = null)), t(27, L = q);
  }
  function N(X) {
    if (t(11, q = parseInt(X.detail.target.dataset.index)), isNaN(q)) {
      t(11, q = null);
      return;
    }
    t(12, m = !1), t(14, y = null), f.blur();
  }
  function F(X) {
    t(10, C = a.map((U, oe) => oe)), t(12, m = !0), w("focus");
  }
  function $() {
    h ? t(20, o = b) : t(9, b = p[v.indexOf(o)]), t(12, m = !1), t(14, y = null), w("blur");
  }
  function Z(X) {
    t(12, [m, y] = zg(X, y, C), m, (t(14, y), t(2, a), t(23, _), t(6, h), t(9, b), t(10, C), t(8, f), t(25, z), t(11, q), t(27, L), t(26, S), t(24, v))), X.key === "Enter" && (y !== null ? (t(11, q = y), t(12, m = !1), f.blur(), t(14, y = null)) : p.includes(b) ? (t(11, q = p.indexOf(b)), t(12, m = !1), t(14, y = null), f.blur()) : h && (t(20, o = b), t(11, q = null), t(12, m = !1), t(14, y = null), f.blur()), w("enter", o));
  }
  Hg(() => {
    t(21, r = !1), t(26, S = !0);
  }), Ag(() => {
    f.focus();
  });
  function ue() {
    b = this.value, t(9, b), t(11, q), t(27, L), t(26, S), t(2, a), t(24, v);
  }
  function A(X) {
    Bg[X ? "unshift" : "push"](() => {
      f = X, t(8, f);
    });
  }
  const M = (X) => w("key_up", { key: X.key, input_value: b });
  return i.$$set = (X) => {
    "label" in X && t(0, n = X.label), "info" in X && t(1, l = X.info), "value" in X && t(20, o = X.value), "value_is_output" in X && t(21, r = X.value_is_output), "choices" in X && t(2, a = X.choices), "disabled" in X && t(3, c = X.disabled), "show_label" in X && t(4, u = X.show_label), "container" in X && t(5, d = X.container), "allow_custom_value" in X && t(6, h = X.allow_custom_value), "filterable" in X && t(7, g = X.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && q !== L && q !== null && S && (t(9, [b, o] = a[q], b, (t(20, o), t(11, q), t(27, L), t(26, S), t(2, a), t(24, v))), t(27, L = q), w("select", {
      index: q,
      value: v[q],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && o != s && (R(), qg(w, o, r), t(22, s = o)), i.$$.dirty[0] & /*choices*/
    4 && I(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== _ && (h || R(), t(23, _ = a), t(10, C = Xa(a, b)), !h && C.length > 0 && t(14, y = C[0]), f == document.activeElement && t(12, m = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && b !== z && (t(10, C = Xa(a, b)), t(25, z = b), !h && C.length > 0 && t(14, y = C[0]));
  }, [
    n,
    l,
    a,
    c,
    u,
    d,
    h,
    g,
    f,
    b,
    C,
    q,
    m,
    p,
    y,
    w,
    N,
    F,
    $,
    Z,
    o,
    r,
    s,
    _,
    v,
    z,
    S,
    L,
    ue,
    A,
    M
  ];
}
class Pg extends Dg {
  constructor(e) {
    super(), Lg(
      this,
      e,
      Fg,
      jg,
      Rg,
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
  SvelteComponent: AS,
  attr: IS,
  detach: HS,
  element: TS,
  init: jS,
  insert: FS,
  noop: PS,
  safe_not_equal: US,
  toggle_class: OS
} = window.__gradio__svelte__internal, {
  SvelteComponent: VS,
  add_flush_callback: NS,
  assign: $S,
  bind: KS,
  binding_callbacks: ZS,
  check_outros: GS,
  create_component: JS,
  destroy_component: QS,
  detach: xS,
  empty: eq,
  get_spread_object: tq,
  get_spread_update: nq,
  group_outros: iq,
  init: lq,
  insert: oq,
  mount_component: sq,
  safe_not_equal: aq,
  space: rq,
  transition_in: _q,
  transition_out: cq
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ug,
  append: Qe,
  attr: Pn,
  check_outros: Uo,
  create_component: mn,
  destroy_component: gn,
  detach: xn,
  element: mt,
  group_outros: Oo,
  init: Og,
  insert: ei,
  listen: Vg,
  mount_component: pn,
  safe_not_equal: Ng,
  set_style: Un,
  space: _i,
  text: ts,
  toggle_class: Ia,
  transition_in: Be,
  transition_out: Ve
} = window.__gradio__svelte__internal, { createEventDispatcher: $g } = window.__gradio__svelte__internal, { onMount: Kg } = window.__gradio__svelte__internal;
function Ha(i) {
  let e, t, n, l, o, s, r;
  const a = [Gg, Zg], _ = [];
  function c(u, d) {
    return (
      /*labelDetailLock*/
      u[2] ? 0 : 1
    );
  }
  return n = c(i), l = _[n] = a[n](i), {
    c() {
      e = mt("div"), t = mt("button"), l.c(), Pn(t, "class", "icon svelte-d9x7u0"), Pn(t, "aria-label", "Lock label detail"), Ia(
        t,
        "selected",
        /*labelDetailLock*/
        i[2] === !0
      ), Un(e, "margin-right", "8px");
    },
    m(u, d) {
      ei(u, e, d), Qe(e, t), _[n].m(t, null), o = !0, s || (r = Vg(
        t,
        "click",
        /*onLockClick*/
        i[9]
      ), s = !0);
    },
    p(u, d) {
      let h = n;
      n = c(u), n !== h && (Oo(), Ve(_[h], 1, 1, () => {
        _[h] = null;
      }), Uo(), l = _[n], l || (l = _[n] = a[n](u), l.c()), Be(l, 1), l.m(t, null)), (!o || d & /*labelDetailLock*/
      4) && Ia(
        t,
        "selected",
        /*labelDetailLock*/
        u[2] === !0
      );
    },
    i(u) {
      o || (Be(l), o = !0);
    },
    o(u) {
      Ve(l), o = !1;
    },
    d(u) {
      u && xn(e), _[n].d(), s = !1, r();
    }
  };
}
function Zg(i) {
  let e, t;
  return e = new E0({}), {
    c() {
      mn(e.$$.fragment);
    },
    m(n, l) {
      pn(e, n, l), t = !0;
    },
    i(n) {
      t || (Be(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ve(e.$$.fragment, n), t = !1;
    },
    d(n) {
      gn(e, n);
    }
  };
}
function Gg(i) {
  let e, t;
  return e = new C0({}), {
    c() {
      mn(e.$$.fragment);
    },
    m(n, l) {
      pn(e, n, l), t = !0;
    },
    i(n) {
      t || (Be(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Ve(e.$$.fragment, n), t = !1;
    },
    d(n) {
      gn(e, n);
    }
  };
}
function Jg(i) {
  let e;
  return {
    c() {
      e = ts("Cancel");
    },
    m(t, n) {
      ei(t, e, n);
    },
    d(t) {
      t && xn(e);
    }
  };
}
function Ta(i) {
  let e, t, n;
  return t = new Io({
    props: {
      variant: "stop",
      $$slots: { default: [Qg] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[14]
  ), {
    c() {
      e = mt("div"), mn(t.$$.fragment), Un(e, "margin-right", "8px");
    },
    m(l, o) {
      ei(l, e, o), pn(t, e, null), n = !0;
    },
    p(l, o) {
      const s = {};
      o & /*$$scope*/
      262144 && (s.$$scope = { dirty: o, ctx: l }), t.$set(s);
    },
    i(l) {
      n || (Be(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Ve(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && xn(e), gn(t);
    }
  };
}
function Qg(i) {
  let e;
  return {
    c() {
      e = ts("Remove");
    },
    m(t, n) {
      ei(t, e, n);
    },
    d(t) {
      t && xn(e);
    }
  };
}
function xg(i) {
  let e;
  return {
    c() {
      e = ts("OK");
    },
    m(t, n) {
      ei(t, e, n);
    },
    d(t) {
      t && xn(e);
    }
  };
}
function ep(i) {
  let e, t, n, l, o, s, r, a, _, c, u, d, h, g, f, m, p, v = !/*showRemove*/
  i[4] && Ha(i);
  s = new Pg({
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
  ), _ = new K0({
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
  ), d = new Io({
    props: {
      $$slots: { default: [Jg] },
      $$scope: { ctx: i }
    }
  }), d.$on(
    "click",
    /*click_handler*/
    i[13]
  );
  let b = (
    /*showRemove*/
    i[4] && Ta(i)
  );
  return m = new Io({
    props: {
      variant: "primary",
      $$slots: { default: [xg] },
      $$scope: { ctx: i }
    }
  }), m.$on(
    "click",
    /*click_handler_2*/
    i[15]
  ), {
    c() {
      e = mt("div"), t = mt("div"), n = mt("span"), v && v.c(), l = _i(), o = mt("div"), mn(s.$$.fragment), r = _i(), a = mt("div"), mn(_.$$.fragment), c = _i(), u = mt("div"), mn(d.$$.fragment), h = _i(), b && b.c(), g = _i(), f = mt("div"), mn(m.$$.fragment), Un(o, "margin-right", "10px"), Un(a, "margin-right", "40px"), Un(a, "margin-bottom", "8px"), Un(u, "margin-right", "8px"), Pn(n, "class", "model-content svelte-d9x7u0"), Pn(t, "class", "modal-container svelte-d9x7u0"), Pn(e, "class", "modal svelte-d9x7u0"), Pn(e, "id", "model-box-edit");
    },
    m(z, S) {
      ei(z, e, S), Qe(e, t), Qe(t, n), v && v.m(n, null), Qe(n, l), Qe(n, o), pn(s, o, null), Qe(n, r), Qe(n, a), pn(_, a, null), Qe(n, c), Qe(n, u), pn(d, u, null), Qe(n, h), b && b.m(n, null), Qe(n, g), Qe(n, f), pn(m, f, null), p = !0;
    },
    p(z, [S]) {
      /*showRemove*/
      z[4] ? v && (Oo(), Ve(v, 1, 1, () => {
        v = null;
      }), Uo()) : v ? (v.p(z, S), S & /*showRemove*/
      16 && Be(v, 1)) : (v = Ha(z), v.c(), Be(v, 1), v.m(n, l));
      const C = {};
      S & /*currentLabel*/
      1 && (C.value = /*currentLabel*/
      z[0]), S & /*choices*/
      8 && (C.choices = /*choices*/
      z[3]), s.$set(C);
      const y = {};
      S & /*currentColor*/
      2 && (y.value = /*currentColor*/
      z[1]), _.$set(y);
      const q = {};
      S & /*$$scope*/
      262144 && (q.$$scope = { dirty: S, ctx: z }), d.$set(q), /*showRemove*/
      z[4] ? b ? (b.p(z, S), S & /*showRemove*/
      16 && Be(b, 1)) : (b = Ta(z), b.c(), Be(b, 1), b.m(n, g)) : b && (Oo(), Ve(b, 1, 1, () => {
        b = null;
      }), Uo());
      const L = {};
      S & /*$$scope*/
      262144 && (L.$$scope = { dirty: S, ctx: z }), m.$set(L);
    },
    i(z) {
      p || (Be(v), Be(s.$$.fragment, z), Be(_.$$.fragment, z), Be(d.$$.fragment, z), Be(b), Be(m.$$.fragment, z), p = !0);
    },
    o(z) {
      Ve(v), Ve(s.$$.fragment, z), Ve(_.$$.fragment, z), Ve(d.$$.fragment, z), Ve(b), Ve(m.$$.fragment, z), p = !1;
    },
    d(z) {
      z && xn(e), v && v.d(), gn(s), gn(_), gn(d), b && b.d(), gn(m);
    }
  };
}
function tp(i, e, t) {
  let { label: n = "" } = e, { currentLabel: l = "" } = e, { choices: o = [] } = e, { choicesColors: s = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: _ = !0 } = e, { labelDetailLock: c = !1 } = e;
  const u = $g();
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
  function g(S) {
    const { detail: C } = S;
    t(1, a = C);
  }
  function f(S) {
    h(S), d(1);
  }
  function m(S) {
    t(2, c = !c);
  }
  function p(S) {
    switch (S.key.toLowerCase()) {
      case "enter":
        d(1);
        break;
      case "escape":
        d(0);
        break;
    }
  }
  Kg(() => (document.addEventListener("keydown", p), t(0, l = n), t(1, a = r), () => {
    document.removeEventListener("keydown", p);
  }));
  const v = () => d(0), b = () => d(-1), z = () => d(1);
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
    g,
    f,
    m,
    n,
    s,
    r,
    v,
    b,
    z
  ];
}
class ns extends Ug {
  constructor(e) {
    super(), Og(this, e, tp, ep, Ng, {
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
const Ce = (i, e, t) => Math.min(Math.max(i, e), t);
function wo(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, l, o] = t;
  return `rgba(${n}, ${l}, ${o}, ${e})`;
}
class vo {
  constructor(e, t, n, l, o, s, r, a, _, c, u, d, h, g = "rgb(255, 255, 255)", f = 0.5, m = 25, p = 8, v = 2, b = 4, z = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (S) => {
      if (this.isDragging && this.pointersCache.size === 1) {
        let C = (S.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, y = (S.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const q = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, L = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        C = Ce(C, -this._xmin, q - this._xmax), y = Ce(y, -this._ymin, L - this._ymax), this._xmin += C, this._ymin += y, this._xmax += C, this._ymax += y, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (S) => {
      if (this.isCreating && this.pointersCache.size === 1) {
        let [C, y] = this.toBoxCoordinates(S.clientX, S.clientY);
        C = (C - this.offsetMouseX) / this.canvasWindow.scale, y = (y - this.offsetMouseY) / this.canvasWindow.scale, C > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = C, this.creatingAnchorX = "xmin") : C > this._xmin && C < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = C : C > this._xmin && C < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = C : C < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = C, this.creatingAnchorX = "xmax"), y > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = y, this.creatingAnchorY = "ymin") : y > this._ymin && y < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = y : y > this._ymin && y < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = y : y < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = y, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (S) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const C = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, y = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = Ce(this._xmin, 0, C - this.minSize), this._ymin = Ce(this._ymin, 0, y - this.minSize), this._xmax = Ce(this._xmax, this.minSize, C), this._ymax = Ce(this._ymax, this.minSize, y), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > C ? (this._xmin -= this._xmax - C, this._xmax = C) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > y ? (this._ymin -= this._ymax - y, this._ymax = y) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (S) => {
      if (this.isResizing && this.pointersCache.size === 1) {
        const C = S.clientX, y = S.clientY, q = (C - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, L = (y - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, w = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, I = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += q, this._ymin += L, this._xmin = Ce(this._xmin, 0, this._xmax - this.minSize), this._ymin = Ce(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += q, this._ymin += L, this._xmax = Ce(this._xmax, this._xmin + this.minSize, w), this._ymin = Ce(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += q, this._ymax += L, this._xmax = Ce(this._xmax, this._xmin + this.minSize, w), this._ymax = Ce(this._ymax, this._ymin + this.minSize, I);
            break;
          case 3:
            this._xmin += q, this._ymax += L, this._xmin = Ce(this._xmin, 0, this._xmax - this.minSize), this._ymax = Ce(this._ymax, this._ymin + this.minSize, I);
            break;
          case 4:
            this._ymin += L, this._ymin = Ce(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += q, this._xmax = Ce(this._xmax, this._xmin + this.minSize, w);
            break;
          case 6:
            this._ymax += L, this._ymax = Ce(this._ymax, this._ymin + this.minSize, I);
            break;
          case 7:
            this._xmin += q, this._xmin = Ce(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.pointersCache = l, this.canvasXmin = o, this.canvasYmin = s, this.canvasXmax = r, this.canvasYmax = a, this.scaleFactor = z, this.label = _, this.isDragging = !1, this.isCreating = !1, this._xmin = c, this._ymin = u, this._xmax = d, this._ymax = h, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = p, this.thickness = v, this.selectedThickness = b, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = m, this.color = g, this.alpha = f, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
    let t = e / this.scaleFactor;
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
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = wo(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = wo(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const l = e.measureText(this.label).width + 10, o = 20;
      let s = this.xmin, r = this.ymin - o;
      e.fillStyle = "white", [s, r] = this.toCanvasCoordinates(s, r), e.fillRect(s, r, l, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(s, r, l, o), e.fillStyle = "black", e.fillText(this.label, s + 5, r + 15);
    }
    e.fillStyle = wo(this.color, 1);
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
    const [t, n, l, o] = [this._xmin, this._xmax, this._ymin, this._ymax];
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
const ja = (i, e, t) => Math.min(Math.max(i, e), t);
function Fa(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, l, o] = t;
  return `rgba(${n}, ${l}, ${o}, ${e})`;
}
class ko {
  constructor(e, t, n, l, o, s, r, a, _, c, u = "rgb(255, 255, 255)", d = 0.6, h = 6, g = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (f) => {
      if (this.isDragging && this.pointersCache.size === 1) {
        let m = (f.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._x, p = (f.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._y;
        const v = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, b = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale, z = this.radius / this.canvasWindow.scale;
        m = ja(m, -this._x + z, v - this._x - z), p = ja(p, -this._y + z, b - this._y - z), this._x += m, this._y += p, this.applyUserScale(), this.renderCallBack();
      }
    }, this.renderCallBack = e, this.canvasWindow = t, this.pointersCache = n, this.canvasXmin = l, this.canvasYmin = o, this.canvasXmax = s, this.canvasYmax = r, this.scaleFactor = g, this.label = a, this.isDragging = !1, this.isSelected = !1, this._x = _, this._y = c, this.x = this._x * this.canvasWindow.scale, this.y = this._y * this.canvasWindow.scale, this.color = u, this.alpha = d, this.radius = h, this.offsetMouseX = 0, this.offsetMouseY = 0;
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
    if (e.beginPath(), e.arc(t, n, l, 0, Math.PI * 2), e.fillStyle = Fa(this.color, this.alpha), e.fill(), e.lineWidth = this.isSelected ? 2 : 1, e.strokeStyle = Fa(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
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
const Je = [
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
], Ni = (i, e, t) => Math.min(Math.max(i, e), t);
class np {
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
        this.imageWidth * this.scale > this.canvasWidth ? l = Ni(l, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : l = Ni(l, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? o = Ni(o, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : o = Ni(o, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += l, this.offsetY += o, this.startDragX = n.clientX, this.startDragY = n.clientY, this.renderCallBack();
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
  SvelteComponent: ip,
  append: Re,
  attr: se,
  binding_callbacks: Pa,
  bubble: Co,
  check_outros: On,
  create_component: pt,
  destroy_component: bt,
  detach: Gt,
  element: rt,
  empty: lp,
  group_outros: Vn,
  init: op,
  insert: Jt,
  listen: Me,
  mount_component: wt,
  noop: g_,
  run_all: p_,
  safe_not_equal: sp,
  set_style: $i,
  space: gt,
  toggle_class: Yn,
  transition_in: le,
  transition_out: pe
} = window.__gradio__svelte__internal, { onMount: ap, createEventDispatcher: rp } = window.__gradio__svelte__internal;
function Ua(i) {
  let e, t, n, l, o, s, r, a, _, c, u, d, h, g, f, m, p, v, b, z;
  n = new Im({}), s = new Vm({}), _ = new xm({});
  let S = (
    /*showRemoveButton*/
    i[0] && Oa(i)
  ), C = !/*disableEditBoxes*/
  i[4] && /*labelDetailLock*/
  i[14] && Va(i);
  return g = new gd({}), p = new td({}), {
    c() {
      e = rt("span"), t = rt("button"), pt(n.$$.fragment), l = gt(), o = rt("button"), pt(s.$$.fragment), r = gt(), a = rt("button"), pt(_.$$.fragment), c = gt(), S && S.c(), u = gt(), C && C.c(), d = gt(), h = rt("button"), pt(g.$$.fragment), f = gt(), m = rt("button"), pt(p.$$.fragment), se(t, "class", "icon svelte-5zxnwp"), se(t, "aria-label", "Create box"), se(t, "title", "Create box (C)"), Yn(
        t,
        "selected",
        /*mode*/
        i[10] === /*Mode*/
        i[7].creation
      ), se(o, "class", "icon svelte-5zxnwp"), se(o, "aria-label", "Create point"), se(o, "title", "Create point (C)"), Yn(
        o,
        "selected",
        /*mode*/
        i[10] === /*Mode*/
        i[7].point
      ), se(a, "class", "icon svelte-5zxnwp"), se(a, "aria-label", "Drag boxes"), se(a, "title", "Drag boxes (D)"), Yn(
        a,
        "selected",
        /*mode*/
        i[10] === /*Mode*/
        i[7].drag
      ), se(h, "class", "icon svelte-5zxnwp"), se(h, "aria-label", "Rotate counterclockwise"), se(h, "title", "Rotate counterclockwise"), se(m, "class", "icon svelte-5zxnwp"), se(m, "aria-label", "Rotate clockwise"), se(m, "title", "Rotate clockwise"), se(e, "class", "canvas-control svelte-5zxnwp");
    },
    m(y, q) {
      Jt(y, e, q), Re(e, t), wt(n, t, null), Re(e, l), Re(e, o), wt(s, o, null), Re(e, r), Re(e, a), wt(_, a, null), Re(e, c), S && S.m(e, null), Re(e, u), C && C.m(e, null), Re(e, d), Re(e, h), wt(g, h, null), Re(e, f), Re(e, m), wt(p, m, null), v = !0, b || (z = [
        Me(
          t,
          "click",
          /*click_handler*/
          i[52]
        ),
        Me(
          o,
          "click",
          /*click_handler_1*/
          i[53]
        ),
        Me(
          a,
          "click",
          /*click_handler_2*/
          i[54]
        ),
        Me(
          h,
          "click",
          /*click_handler_5*/
          i[57]
        ),
        Me(
          m,
          "click",
          /*click_handler_6*/
          i[58]
        )
      ], b = !0);
    },
    p(y, q) {
      (!v || q[0] & /*mode, Mode*/
      1152) && Yn(
        t,
        "selected",
        /*mode*/
        y[10] === /*Mode*/
        y[7].creation
      ), (!v || q[0] & /*mode, Mode*/
      1152) && Yn(
        o,
        "selected",
        /*mode*/
        y[10] === /*Mode*/
        y[7].point
      ), (!v || q[0] & /*mode, Mode*/
      1152) && Yn(
        a,
        "selected",
        /*mode*/
        y[10] === /*Mode*/
        y[7].drag
      ), /*showRemoveButton*/
      y[0] ? S ? (S.p(y, q), q[0] & /*showRemoveButton*/
      1 && le(S, 1)) : (S = Oa(y), S.c(), le(S, 1), S.m(e, u)) : S && (Vn(), pe(S, 1, 1, () => {
        S = null;
      }), On()), !/*disableEditBoxes*/
      y[4] && /*labelDetailLock*/
      y[14] ? C ? (C.p(y, q), q[0] & /*disableEditBoxes, labelDetailLock*/
      16400 && le(C, 1)) : (C = Va(y), C.c(), le(C, 1), C.m(e, d)) : C && (Vn(), pe(C, 1, 1, () => {
        C = null;
      }), On());
    },
    i(y) {
      v || (le(n.$$.fragment, y), le(s.$$.fragment, y), le(_.$$.fragment, y), le(S), le(C), le(g.$$.fragment, y), le(p.$$.fragment, y), v = !0);
    },
    o(y) {
      pe(n.$$.fragment, y), pe(s.$$.fragment, y), pe(_.$$.fragment, y), pe(S), pe(C), pe(g.$$.fragment, y), pe(p.$$.fragment, y), v = !1;
    },
    d(y) {
      y && Gt(e), bt(n), bt(s), bt(_), S && S.d(), C && C.d(), bt(g), bt(p), b = !1, p_(z);
    }
  };
}
function Oa(i) {
  let e, t, n, l, o;
  return t = new a0({}), {
    c() {
      e = rt("button"), pt(t.$$.fragment), se(e, "class", "icon svelte-5zxnwp"), se(e, "aria-label", "Remove box"), se(e, "title", "Remove box (Del)");
    },
    m(s, r) {
      Jt(s, e, r), wt(t, e, null), n = !0, l || (o = Me(
        e,
        "click",
        /*click_handler_3*/
        i[55]
      ), l = !0);
    },
    p: g_,
    i(s) {
      n || (le(t.$$.fragment, s), n = !0);
    },
    o(s) {
      pe(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Gt(e), bt(t), l = !1, o();
    }
  };
}
function Va(i) {
  let e, t, n, l, o;
  return t = new h0({}), {
    c() {
      e = rt("button"), pt(t.$$.fragment), se(e, "class", "icon svelte-5zxnwp"), se(e, "aria-label", "Edit label"), se(e, "title", "Edit label");
    },
    m(s, r) {
      Jt(s, e, r), wt(t, e, null), n = !0, l || (o = Me(
        e,
        "click",
        /*click_handler_4*/
        i[56]
      ), l = !0);
    },
    p: g_,
    i(s) {
      n || (le(t.$$.fragment, s), n = !0);
    },
    o(s) {
      pe(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Gt(e), bt(t), l = !1, o();
    }
  };
}
function Na(i) {
  let e, t;
  return e = new ns({
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
      pt(e.$$.fragment);
    },
    m(n, l) {
      wt(e, n, l), t = !0;
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
      t || (le(e.$$.fragment, n), t = !0);
    },
    o(n) {
      pe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      bt(e, n);
    }
  };
}
function $a(i) {
  let e, t;
  return e = new ns({
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
      pt(e.$$.fragment);
    },
    m(n, l) {
      wt(e, n, l), t = !0;
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
      t || (le(e.$$.fragment, n), t = !0);
    },
    o(n) {
      pe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      bt(e, n);
    }
  };
}
function Ka(i) {
  let e, t;
  return e = new ns({
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
      pt(e.$$.fragment);
    },
    m(n, l) {
      wt(e, n, l), t = !0;
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
      t || (le(e.$$.fragment, n), t = !0);
    },
    o(n) {
      pe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      bt(e, n);
    }
  };
}
function _p(i) {
  let e, t, n, l, o, s, r, a, _, c, u, d = (
    /*interactive*/
    i[1] && Ua(i)
  ), h = (
    /*editModalVisible*/
    i[11] && Na(i)
  ), g = (
    /*newModalVisible*/
    i[12] && $a(i)
  ), f = (
    /*editDefaultLabelVisible*/
    i[13] && Ka(i)
  );
  return {
    c() {
      e = rt("div"), t = rt("div"), n = rt("canvas"), l = gt(), d && d.c(), o = gt(), h && h.c(), s = gt(), g && g.c(), r = gt(), f && f.c(), a = lp(), $i(
        n,
        "height",
        /*height*/
        i[5]
      ), $i(
        n,
        "width",
        /*width*/
        i[6]
      ), se(n, "class", "canvas-annotator svelte-5zxnwp"), se(t, "class", "canvas-container svelte-5zxnwp"), se(e, "class", "annotator-container"), se(e, "tabindex", "0");
    },
    m(m, p) {
      Jt(m, e, p), Re(e, t), Re(t, n), i[51](n), Re(e, l), d && d.m(e, null), i[59](e), Jt(m, o, p), h && h.m(m, p), Jt(m, s, p), g && g.m(m, p), Jt(m, r, p), f && f.m(m, p), Jt(m, a, p), _ = !0, c || (u = [
        Me(
          n,
          "pointerdown",
          /*handlePointerDown*/
          i[18]
        ),
        Me(
          n,
          "pointerup",
          /*handlePointerUp*/
          i[19]
        ),
        Me(
          n,
          "pointermove",
          /*handlePointerMove*/
          i[21]
        ),
        Me(
          n,
          "pointercancel",
          /*handlePointerCancel*/
          i[20]
        ),
        Me(
          n,
          "dblclick",
          /*handleDoubleClick*/
          i[27]
        ),
        Me(
          n,
          "wheel",
          /*handleMouseWheel*/
          i[23]
        ),
        Me(
          e,
          "keydown",
          /*handleKeyPress*/
          i[22]
        ),
        Me(
          e,
          "click",
          /*click_handler_7*/
          i[60]
        )
      ], c = !0);
    },
    p(m, p) {
      (!_ || p[0] & /*height*/
      32) && $i(
        n,
        "height",
        /*height*/
        m[5]
      ), (!_ || p[0] & /*width*/
      64) && $i(
        n,
        "width",
        /*width*/
        m[6]
      ), /*interactive*/
      m[1] ? d ? (d.p(m, p), p[0] & /*interactive*/
      2 && le(d, 1)) : (d = Ua(m), d.c(), le(d, 1), d.m(e, null)) : d && (Vn(), pe(d, 1, 1, () => {
        d = null;
      }), On()), /*editModalVisible*/
      m[11] ? h ? (h.p(m, p), p[0] & /*editModalVisible*/
      2048 && le(h, 1)) : (h = Na(m), h.c(), le(h, 1), h.m(s.parentNode, s)) : h && (Vn(), pe(h, 1, 1, () => {
        h = null;
      }), On()), /*newModalVisible*/
      m[12] ? g ? (g.p(m, p), p[0] & /*newModalVisible*/
      4096 && le(g, 1)) : (g = $a(m), g.c(), le(g, 1), g.m(r.parentNode, r)) : g && (Vn(), pe(g, 1, 1, () => {
        g = null;
      }), On()), /*editDefaultLabelVisible*/
      m[13] ? f ? (f.p(m, p), p[0] & /*editDefaultLabelVisible*/
      8192 && le(f, 1)) : (f = Ka(m), f.c(), le(f, 1), f.m(a.parentNode, a)) : f && (Vn(), pe(f, 1, 1, () => {
        f = null;
      }), On());
    },
    i(m) {
      _ || (le(d), le(h), le(g), le(f), _ = !0);
    },
    o(m) {
      pe(d), pe(h), pe(g), pe(f), _ = !1;
    },
    d(m) {
      m && (Gt(e), Gt(o), Gt(s), Gt(r), Gt(a)), i[51](null), d && d.d(), i[59](null), h && h.d(m), g && g.d(m), f && f.d(m), c = !1, p_(u);
    }
  };
}
const Za = 100;
function Nt(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function yo(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), l = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | l).toString(16).slice(1);
}
function cp(i, e, t) {
  var n, l, o, s, r;
  (function(k) {
    k[k.creation = 0] = "creation", k[k.point = 1] = "point", k[k.drag = 2] = "drag";
  })(r || (r = {}));
  let { imageUrl: a = null } = e, { interactive: _ } = e, { boxAlpha: c = 0.5 } = e, { boxMinSize: u = 10 } = e, { handleSize: d } = e, { boxThickness: h } = e, { boxSelectedThickness: g } = e, { value: f } = e, { choices: m = [] } = e, { choicesColors: p = [] } = e, { disableEditBoxes: v = !1 } = e, { height: b = "100%" } = e, { width: z = "100%" } = e, { singleBox: S = !1 } = e, { showRemoveButton: C = null } = e, { handlesCursor: y = !0 } = e, { useDefaultLabel: q = !1 } = e, { enableKeyboardShortcuts: L = !0 } = e;
  C === null && (C = v);
  let w, I, R, N = null, F = -1, $ = -1, Z = null, ue = r.drag, A = /* @__PURE__ */ new Map(), M = new np(J, A);
  f !== null && f.boxes.length == 0 && f.points.length == 0 && (ue = r.creation);
  let X = 0, U = 0, oe = 0, te = 0, ne = 1, Y = 0, ae = 0, E = !1, P = !1, ie = !1, re = !1, _e = q, D = { label: "", color: "" }, Te = "", $e = "", ce = { x: 0, y: 0, distance: 0 };
  const he = rp();
  function J() {
    if (R) {
      if (R.clearRect(0, 0, w.width, w.height), R.save(), R.translate(M.offsetX, M.offsetY), R.scale(M.scale, M.scale), N !== null) {
        switch (f.orientation) {
          case 0:
            R.drawImage(N, 0, 0, Y, ae);
            break;
          case 1:
            R.translate(Y, 0), R.rotate(Math.PI / 2), R.drawImage(N, 0, 0, ae, Y);
            break;
          case 2:
            R.translate(Y, ae), R.rotate(Math.PI), R.drawImage(N, 0, 0, Y, ae);
            break;
          case 3:
            R.translate(0, ae), R.rotate(-Math.PI / 2), R.drawImage(N, 0, 0, ae, Y);
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
  function Ke(k) {
    t(50, Z = k >= 0 ? "box" : null), t(48, F = k), t(49, $ = -1), f.boxes.forEach((W) => {
      W.setSelected(!1);
    }), f.points.forEach((W) => {
      W.setSelected(!1);
    }), k >= 0 && k < f.boxes.length && f.boxes[k].setSelected(!0), J();
  }
  function tn(k) {
    t(50, Z = k >= 0 ? "point" : null), t(49, $ = k), t(48, F = -1), f.boxes.forEach((W) => {
      W.setSelected(!1);
    }), f.points.forEach((W) => {
      W.setSelected(!1);
    }), k >= 0 && k < f.points.length && f.points[k].setSelected(!0), J();
  }
  const Bi = (k, W) => {
    const H = Math.sqrt(Math.pow(k.clientX - W.clientX, 2) + Math.pow(k.clientY - W.clientY, 2));
    return H < Za ? Za : H;
  };
  function ql(k) {
    if (_) {
      if (k.preventDefault(), w.setPointerCapture(k.pointerId), A.set(k.pointerId, k), A.size == 1)
        ue === r.creation ? Bl(k) : ue === r.point ? Ml(k) : ue === r.drag && ti(k);
      else if (A.size == 2) {
        M.isDragging = !1, f.boxes.forEach((ft) => {
          ft.isCreating = !1, ft.isDragging = !1, ft.isResizing = !1;
        }), f.points.forEach((ft) => {
          ft.isDragging = !1;
        });
        const W = Array.from(A.values()), H = W[0], j = W[1], K = Bi(H, j), G = w.getBoundingClientRect(), fe = (H.clientX + j.clientX) / 2 - G.left, qt = (H.clientY + j.clientY) / 2 - G.top;
        ce.distance = K, ce.x = fe, ce.y = qt;
      }
    }
  }
  function zl(k) {
    const W = w.getBoundingClientRect(), H = k.clientX - W.left, j = k.clientY - W.top;
    let K = !1;
    for (const [G, fe] of f.boxes.entries()) {
      const qt = fe.indexOfPointInsideHandle(H, j);
      if (qt >= 0)
        return K = !0, Ke(G), fe.startResize(qt, k), !0;
    }
    for (const [G, fe] of f.boxes.entries())
      if (fe.isPointInsideBox(H, j))
        return K = !0, Ke(G), fe.startDrag(k), !0;
    return K;
  }
  function B(k) {
    _ && (A.delete(k.pointerId), w.releasePointerCapture(k.pointerId), M.isDragging && M.stopDrag(), re && (re = !1, y_()), he("change"));
  }
  function It(k) {
    _ && (A.delete(k.pointerId), w.releasePointerCapture(k.pointerId), M.isDragging && M.stopDrag(), he("change"));
  }
  function yt(k) {
    if (_)
      if (k.preventDefault(), k.pointerType === "mouse") {
        if (!y || f === null || ue !== r.drag)
          return;
        const W = w.getBoundingClientRect(), H = k.clientX - W.left, j = k.clientY - W.top;
        for (const [K, G] of f.boxes.entries()) {
          const fe = G.indexOfPointInsideHandle(H, j);
          if (fe >= 0) {
            t(8, w.style.cursor = G.resizeHandles[fe].cursor, w);
            return;
          }
        }
        t(8, w.style.cursor = "default", w);
      } else {
        if (!A.has(k.pointerId))
          return;
        if (A.set(k.pointerId, k), A.size === 2) {
          const W = Array.from(A.values()), H = W[0], j = W[1], K = Bi(H, j), G = w.getBoundingClientRect(), fe = (H.clientX + j.clientX) / 2 - G.left, qt = (H.clientY + j.clientY) / 2 - G.top, ft = parseFloat((M.scale * (K / ce.distance)).toFixed(2)), as = ft < 1 ? 1 : ft, rs = as / M.scale;
          M.offsetX = ce.x - (ce.x - M.offsetX) * rs, M.offsetY = ce.y - (ce.y - M.offsetY) * rs;
          const O_ = fe - ce.x, V_ = qt - ce.y;
          M.offsetX += O_, M.offsetY += V_, M.scale = as, ce.x = fe, ce.y = qt, ce.distance = K, J();
        }
      }
  }
  function zn() {
    const k = w.width / Y, W = w.height / ae, H = Math.min(k, W);
    M.scale = H, M.offsetX = (w.width - Y * H) / 2, M.offsetY = (w.height - ae * H) / 2, J();
  }
  function Dl(k) {
    if (!L || k.target !== I || !_)
      return;
    const W = k.key.toLowerCase();
    switch ((/* @__PURE__ */ new Set(["delete", "c", "d", "e", "p", " "])).has(W) && (k.preventDefault(), k.stopPropagation()), W) {
      case "delete":
        Ht();
        break;
      case "c":
        je();
        break;
      case "p":
        nn();
        break;
      case "d":
        ni();
        break;
      case "e":
        ls();
        break;
      case " ":
        zn();
        break;
    }
  }
  function St() {
    setTimeout(
      () => {
        I == null || I.focus();
      },
      0
    );
  }
  function Dn(k) {
    if (!_)
      return;
    k.preventDefault();
    const W = 1 / (1 + k.deltaY / 1e3 * 0.5), H = parseFloat((M.scale * W).toFixed(2)), j = H < 1 ? 1 : H, K = w.getBoundingClientRect(), G = k.clientX - K.left, fe = k.clientY - K.top, qt = (G - M.offsetX) / M.scale, ft = (fe - M.offsetY) / M.scale;
    M.offsetX = G - qt * j, M.offsetY = fe - ft * j, M.scale = j, J();
  }
  function Bl(k) {
    const W = w.getBoundingClientRect(), H = (k.clientX - W.left - M.offsetX) / M.scale, j = (k.clientY - W.top - M.offsetY) / M.scale;
    let K;
    p.length > 0 ? K = Nt(p[0]) : S ? f.boxes.length > 0 ? K = f.boxes[0].color : K = Je[0] : K = Je[f.boxes.length % Je.length];
    let G = new vo(J, is, M, A, X, U, oe, te, "", H, j, H, j, K, c, u, d, h, g);
    G.startCreating(k, W.left, W.top), S ? t(33, f.boxes = [G], f) : t(33, f.boxes = [G, ...f.boxes], f), Ke(0), J(), he("change");
  }
  function Ml(k) {
    const W = w.getBoundingClientRect(), H = (k.clientX - W.left - M.offsetX) / M.scale, j = (k.clientY - W.top - M.offsetY) / M.scale;
    let K;
    p.length > 0 ? K = Nt(p[0]) : S ? f.points.length > 0 ? K = f.points[0].color : K = Je[0] : K = Je[f.points.length % Je.length];
    const G = new ko(J, M, A, X, U, oe, te, "", H, j, K, 0.7, Math.max(4, d / 2), ne);
    S ? t(33, f.points = [G], f) : t(33, f.points = [G, ...f.points], f), tn(0), G.startDrag(k), re = !0, J(), he("change");
  }
  function ti(k) {
    if (zl(k))
      return;
    S || Ke(-1);
    const H = w.getBoundingClientRect(), j = k.clientX - H.left, K = k.clientY - H.top;
    for (const [G, fe] of f.points.entries())
      if (fe.isPointInsidePoint(j, K)) {
        tn(G), fe.startDrag(k);
        return;
      }
    S || tn(-1), M.startDrag(k);
  }
  function je() {
    t(10, ue = r.creation), t(8, w.style.cursor = "crosshair", w);
  }
  function nn() {
    t(10, ue = r.point), t(8, w.style.cursor = "crosshair", w);
  }
  function ni() {
    t(10, ue = r.drag), t(8, w.style.cursor = "default", w);
  }
  function is() {
    F >= 0 && F < f.boxes.length && (f.boxes[F].getArea() < 1 ? Ht() : (v || (_e ? os() : t(12, P = !0)), S && ni()));
  }
  function y_() {
    $ >= 0 && $ < f.points.length && (v || (_e ? os() : t(12, P = !0)), S && ni());
  }
  function ls() {
    v || (Z === "box" ? F >= 0 && F < f.boxes.length && t(11, E = !0) : Z === "point" && $ >= 0 && $ < f.points.length && t(11, E = !0));
  }
  function S_(k) {
    _ && ls();
  }
  function q_(k) {
    t(11, E = !1), St();
    const { detail: W } = k, H = W.label, j = W.color, K = W.ret;
    if (Z === "box") {
      if (F >= 0 && F < f.boxes.length) {
        const G = f.boxes[F];
        K == 1 ? (G.label = H, G.color = Nt(j), J(), he("change")) : K == -1 && Ht();
      }
    } else if (Z === "point" && $ >= 0 && $ < f.points.length) {
      const G = f.points[$];
      K == 1 ? (G.label = H, G.color = Nt(j), J(), he("change")) : K == -1 && Ht();
    }
  }
  function z_(k) {
    t(12, P = !1), St();
    const { detail: W } = k, H = W.label, j = W.color, K = W.ret, G = W.lock;
    if (Z === "box") {
      if (F >= 0 && F < f.boxes.length) {
        const fe = f.boxes[F];
        K == 1 ? (t(14, _e = G), t(15, D.label = H, D), t(15, D.color = j, D), fe.label = H, fe.color = Nt(j), J(), he("change")) : Ht();
      }
    } else if (Z === "point" && $ >= 0 && $ < f.points.length) {
      const fe = f.points[$];
      K == 1 ? (t(14, _e = G), t(15, D.label = H, D), t(15, D.color = j, D), fe.label = H, fe.color = Nt(j), J(), he("change")) : Ht();
    }
  }
  function D_(k) {
    t(13, ie = !1), St();
    const { detail: W } = k;
    let H = W.label, j = W.color, K = W.ret, G = W.lock;
    K == 1 && (t(14, _e = G), t(15, D.label = H, D), t(15, D.color = j, D));
  }
  function os() {
    if (Z === "box") {
      if (F >= 0 && F < f.boxes.length) {
        const k = f.boxes[F];
        k.label = D.label, D.color !== "" && (k.color = Nt(D.color)), J(), he("change");
      }
    } else if (Z === "point" && $ >= 0 && $ < f.points.length) {
      const k = f.points[$];
      k.label = D.label, D.color !== "" && (k.color = Nt(D.color)), J(), he("change");
    }
  }
  function Ht() {
    Z === "box" ? F >= 0 && F < f.boxes.length && (f.boxes.splice(F, 1), Ke(-1), S && je(), he("change")) : Z === "point" && $ >= 0 && $ < f.points.length && (f.points.splice($, 1), tn(-1), S && je(), he("change"));
  }
  function El(k) {
    t(33, f.orientation = ((f.orientation + k) % 4 + 4) % 4, f), M.orientation = f.orientation, ii();
    for (const W of f.boxes)
      W.onRotate(k);
    for (const W of f.points)
      W.onRotate(k);
    J();
  }
  function ii() {
    if (w) {
      if (ne = 1, t(8, w.width = w.clientWidth, w), M.setRotatedImage(N), N !== null) {
        if (M.imageRotatedWidth > w.width)
          ne = w.width / M.imageRotatedWidth, Y = Math.round(M.imageRotatedWidth * ne), ae = Math.round(M.imageRotatedHeight * ne), X = 0, U = 0, oe = Y, te = ae, t(8, w.height = ae, w);
        else {
          Y = M.imageRotatedWidth, ae = M.imageRotatedHeight;
          var k = (w.width - Y) / 2;
          X = k, U = 0, oe = k + Y, te = ae, t(8, w.height = ae, w);
        }
        M.imageWidth = Y, M.imageHeight = ae;
      } else
        X = 0, U = 0, oe = w.width, te = w.height, t(8, w.height = w.clientHeight, w);
      if (M.resize(w.width, w.height, X, U), oe > 0 && te > 0) {
        for (const W of f.boxes)
          W.canvasXmin = X, W.canvasYmin = U, W.canvasXmax = oe, W.canvasYmax = te, W.setScaleFactor(ne);
        for (const W of f.points)
          W.canvasXmin = X, W.canvasYmin = U, W.canvasXmax = oe, W.canvasYmax = te, W.setScaleFactor(ne);
      }
      J(), he("change");
    }
  }
  const B_ = new ResizeObserver(ii);
  function M_() {
    for (let k = 0; k < f.boxes.length; k++) {
      let W = f.boxes[k];
      if (!(W instanceof vo)) {
        const H = W;
        let j = "", K = "";
        Object.prototype.hasOwnProperty.call(H, "color") ? (j = H.color, Array.isArray(j) && j.length === 3 && (j = `rgb(${j[0]}, ${j[1]}, ${j[2]})`)) : j = Je[k % Je.length], Object.prototype.hasOwnProperty.call(H, "label") && (K = H.label), W = new vo(J, is, M, A, X, U, oe, te, K, H.xmin, H.ymin, H.xmax, H.ymax, j, c, u, d, h, g), t(33, f.boxes[k] = W, f);
      }
    }
  }
  function E_() {
    for (let k = 0; k < f.points.length; k++) {
      let W = f.points[k];
      if (!(W instanceof ko)) {
        const H = W;
        let j = "", K = "";
        Object.prototype.hasOwnProperty.call(H, "color") ? (j = H.color, Array.isArray(j) && j.length === 3 && (j = `rgb(${j[0]}, ${j[1]}, ${j[2]})`)) : j = Je[k % Je.length], Object.prototype.hasOwnProperty.call(H, "label") && (K = H.label), W = new ko(J, M, A, X, U, oe, te, K, H.x, H.y, j, 0.7, Math.max(4, d / 2), ne), t(33, f.points[k] = W, f);
      }
    }
  }
  function ss() {
    a !== null && (N === null || N.src != a) && (N = new Image(), N.src = a, N.onload = function() {
      ii(), J();
    });
  }
  ap(() => {
    if (Array.isArray(m) && m.length > 0) {
      if (!Array.isArray(p) || p.length == 0)
        for (let k = 0; k < m.length; k++) {
          let W = Je[k % Je.length];
          p.push(yo(W));
        }
      t(15, D.label = m[0][0], D), t(15, D.color = p[0], D);
    }
    R = w.getContext("2d"), B_.observe(w), F < 0 && f !== null && f.boxes.length > 0 && Ke(0), $ < 0 && f !== null && f.points.length > 0 && tn(0), ss(), ii(), J();
  });
  function L_(k) {
    Pa[k ? "unshift" : "push"](() => {
      w = k, t(8, w);
    });
  }
  const W_ = () => je(), R_ = () => nn(), X_ = () => ni(), Y_ = () => Ht(), A_ = () => t(13, ie = !0), I_ = () => El(-1), H_ = () => El(1);
  function T_(k) {
    Pa[k ? "unshift" : "push"](() => {
      I = k, t(9, I);
    });
  }
  const j_ = () => I.focus();
  function F_(k) {
    Co.call(this, i, k);
  }
  function P_(k) {
    Co.call(this, i, k);
  }
  function U_(k) {
    Co.call(this, i, k);
  }
  return i.$$set = (k) => {
    "imageUrl" in k && t(34, a = k.imageUrl), "interactive" in k && t(1, _ = k.interactive), "boxAlpha" in k && t(35, c = k.boxAlpha), "boxMinSize" in k && t(36, u = k.boxMinSize), "handleSize" in k && t(37, d = k.handleSize), "boxThickness" in k && t(38, h = k.boxThickness), "boxSelectedThickness" in k && t(39, g = k.boxSelectedThickness), "value" in k && t(33, f = k.value), "choices" in k && t(2, m = k.choices), "choicesColors" in k && t(3, p = k.choicesColors), "disableEditBoxes" in k && t(4, v = k.disableEditBoxes), "height" in k && t(5, b = k.height), "width" in k && t(6, z = k.width), "singleBox" in k && t(40, S = k.singleBox), "showRemoveButton" in k && t(0, C = k.showRemoveButton), "handlesCursor" in k && t(41, y = k.handlesCursor), "useDefaultLabel" in k && t(42, q = k.useDefaultLabel), "enableKeyboardShortcuts" in k && t(43, L = k.enableKeyboardShortcuts);
  }, i.$$.update = () => {
    i.$$.dirty[1] & /*selectedTarget, selectedBox, value, _a, _b, selectedPoint, _c, _d*/
    1040388 && (Z === "box" && F >= 0 ? (t(16, Te = t(45, l = t(44, n = f.boxes[F]) === null || n === void 0 ? void 0 : n.label) !== null && l !== void 0 ? l : ""), t(17, $e = f.boxes[F] ? yo(f.boxes[F].color) : "")) : Z === "point" && $ >= 0 ? (t(16, Te = t(47, s = t(46, o = f.points[$]) === null || o === void 0 ? void 0 : o.label) !== null && s !== void 0 ? s : ""), t(17, $e = f.points[$] ? yo(f.points[$].color) : "")) : (t(16, Te = ""), t(17, $e = ""))), i.$$.dirty[1] & /*value*/
    4 && (M.orientation = f.orientation, ss(), M_(), E_(), ii(), J());
  }, [
    C,
    _,
    m,
    p,
    v,
    b,
    z,
    r,
    w,
    I,
    ue,
    E,
    P,
    ie,
    _e,
    D,
    Te,
    $e,
    ql,
    B,
    It,
    yt,
    Dl,
    Dn,
    je,
    nn,
    ni,
    S_,
    q_,
    z_,
    D_,
    Ht,
    El,
    f,
    a,
    c,
    u,
    d,
    h,
    g,
    S,
    y,
    q,
    L,
    n,
    l,
    o,
    s,
    F,
    $,
    Z,
    L_,
    W_,
    R_,
    X_,
    Y_,
    A_,
    I_,
    H_,
    T_,
    j_,
    F_,
    P_,
    U_
  ];
}
class fp extends ip {
  constructor(e) {
    super(), op(
      this,
      e,
      cp,
      _p,
      sp,
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
  SvelteComponent: up,
  add_flush_callback: dp,
  bind: hp,
  binding_callbacks: mp,
  create_component: gp,
  destroy_component: pp,
  init: bp,
  mount_component: wp,
  safe_not_equal: vp,
  transition_in: kp,
  transition_out: Cp
} = window.__gradio__svelte__internal, { createEventDispatcher: yp } = window.__gradio__svelte__internal;
function Sp(i) {
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
    i[0]), e = new fp({ props: o }), mp.push(() => hp(e, "value", l)), e.$on(
      "change",
      /*change_handler*/
      i[22]
    ), {
      c() {
        gp(e.$$.fragment);
      },
      m(s, r) {
        wp(e, s, r), n = !0;
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
        s[0], dp(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (kp(e.$$.fragment, s), n = !0);
      },
      o(s) {
        Cp(e.$$.fragment, s), n = !1;
      },
      d(s) {
        pp(e, s);
      }
    }
  );
}
function qp(i, e, t) {
  let { src: n = void 0 } = e, { interactive: l } = e, { boxesAlpha: o } = e, { labelList: s } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: _ } = e, { boxThickness: c } = e, { height: u } = e, { width: d } = e, { boxSelectedThickness: h } = e, { value: g } = e, { disableEditBoxes: f } = e, { singleBox: m } = e, { showRemoveButton: p } = e, { handlesCursor: v } = e, { useDefaultLabel: b } = e, { enableKeyboardShortcuts: z } = e, S, C;
  const y = yp();
  function q(w) {
    g = w, t(0, g);
  }
  const L = () => y("change");
  return i.$$set = (w) => {
    "src" in w && t(19, n = w.src), "interactive" in w && t(1, l = w.interactive), "boxesAlpha" in w && t(2, o = w.boxesAlpha), "labelList" in w && t(3, s = w.labelList), "labelColors" in w && t(4, r = w.labelColors), "boxMinSize" in w && t(5, a = w.boxMinSize), "handleSize" in w && t(6, _ = w.handleSize), "boxThickness" in w && t(7, c = w.boxThickness), "height" in w && t(8, u = w.height), "width" in w && t(9, d = w.width), "boxSelectedThickness" in w && t(10, h = w.boxSelectedThickness), "value" in w && t(0, g = w.value), "disableEditBoxes" in w && t(11, f = w.disableEditBoxes), "singleBox" in w && t(12, m = w.singleBox), "showRemoveButton" in w && t(13, p = w.showRemoveButton), "handlesCursor" in w && t(14, v = w.handlesCursor), "useDefaultLabel" in w && t(15, b = w.useDefaultLabel), "enableKeyboardShortcuts" in w && t(16, z = w.enableKeyboardShortcuts);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    1572864) {
      t(17, S = n), t(20, C = n);
      const w = n;
      $1(w).then((I) => {
        C === w && t(17, S = I);
      });
    }
  }, [
    g,
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
    p,
    v,
    b,
    z,
    S,
    y,
    n,
    C,
    q,
    L
  ];
}
class zp extends up {
  constructor(e) {
    super(), bp(this, e, qp, Sp, vp, {
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
class Ga {
  constructor() {
    this.boxes = [], this.points = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: Dp,
  add_flush_callback: dl,
  append: An,
  attr: pi,
  bind: hl,
  binding_callbacks: Si,
  bubble: ci,
  check_outros: _n,
  create_component: Wt,
  create_slot: Bp,
  destroy_component: Rt,
  detach: bn,
  element: Ci,
  empty: Mp,
  get_all_dirty_from_scope: Ep,
  get_slot_changes: Lp,
  group_outros: cn,
  init: Wp,
  insert: wn,
  mount_component: Xt,
  noop: Rp,
  safe_not_equal: Xp,
  space: rn,
  toggle_class: Ja,
  transition_in: ee,
  transition_out: de,
  update_slot_base: Yp
} = window.__gradio__svelte__internal, { createEventDispatcher: Ap, tick: Ip } = window.__gradio__svelte__internal;
function Qa(i) {
  let e, t;
  return e = new sh({
    props: {
      href: (
        /*value*/
        i[1].image.url
      ),
      download: (
        /*value*/
        i[1].image.orig_name || "image"
      ),
      $$slots: { default: [Hp] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Wt(e.$$.fragment);
    },
    m(n, l) {
      Xt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*value*/
      2 && (o.href = /*value*/
      n[1].image.url), l[0] & /*value*/
      2 && (o.download = /*value*/
      n[1].image.orig_name || "image"), l[0] & /*i18n*/
      256 | l[1] & /*$$scope*/
      8388608 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (ee(e.$$.fragment, n), t = !0);
    },
    o(n) {
      de(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(e, n);
    }
  };
}
function Hp(i) {
  let e, t;
  return e = new ml({
    props: {
      Icon: vu,
      label: (
        /*i18n*/
        i[8]("common.download")
      )
    }
  }), {
    c() {
      Wt(e.$$.fragment);
    },
    m(n, l) {
      Xt(e, n, l), t = !0;
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
      de(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(e, n);
    }
  };
}
function xa(i) {
  let e, t;
  return e = new Ud({
    props: {
      i18n: (
        /*i18n*/
        i[8]
      ),
      formatter: (
        /*func*/
        i[39]
      ),
      value: (
        /*value*/
        i[1]
      )
    }
  }), e.$on(
    "share",
    /*share_handler*/
    i[40]
  ), e.$on(
    "error",
    /*error_handler*/
    i[41]
  ), {
    c() {
      Wt(e.$$.fragment);
    },
    m(n, l) {
      Xt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*i18n*/
      256 && (o.i18n = /*i18n*/
      n[8]), l[0] & /*value*/
      2 && (o.value = /*value*/
      n[1]), e.$set(o);
    },
    i(n) {
      t || (ee(e.$$.fragment, n), t = !0);
    },
    o(n) {
      de(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(e, n);
    }
  };
}
function er(i) {
  let e, t, n;
  return t = new ml({
    props: { Icon: gr, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[37]
  ), {
    c() {
      e = Ci("div"), Wt(t.$$.fragment);
    },
    m(l, o) {
      wn(l, e, o), Xt(t, e, null), n = !0;
    },
    p: Rp,
    i(l) {
      n || (ee(t.$$.fragment, l), n = !0);
    },
    o(l) {
      de(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && bn(e), Rt(t);
    }
  };
}
function tr(i) {
  let e;
  const t = (
    /*#slots*/
    i[38].default
  ), n = Bp(
    t,
    i,
    /*$$scope*/
    i[54],
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
      8388608) && Yp(
        n,
        t,
        l,
        /*$$scope*/
        l[54],
        e ? Lp(
          t,
          /*$$scope*/
          l[54],
          o,
          null
        ) : Ep(
          /*$$scope*/
          l[54]
        ),
        null
      );
    },
    i(l) {
      e || (ee(n, l), e = !0);
    },
    o(l) {
      de(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function Tp(i) {
  let e, t, n = (
    /*value*/
    i[1] === null && tr(i)
  );
  return {
    c() {
      n && n.c(), e = Mp();
    },
    m(l, o) {
      n && n.m(l, o), wn(l, e, o), t = !0;
    },
    p(l, o) {
      /*value*/
      l[1] === null ? n ? (n.p(l, o), o[0] & /*value*/
      2 && ee(n, 1)) : (n = tr(l), n.c(), ee(n, 1), n.m(e.parentNode, e)) : n && (cn(), de(n, 1, 1, () => {
        n = null;
      }), _n());
    },
    i(l) {
      t || (ee(n), t = !0);
    },
    o(l) {
      de(n), t = !1;
    },
    d(l) {
      l && bn(e), n && n.d(l);
    }
  };
}
function nr(i) {
  let e, t;
  return e = new Em({
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
        i[32]
      )
    }
  }), e.$on(
    "capture",
    /*capture_handler*/
    i[46]
  ), e.$on(
    "stream",
    /*stream_handler_1*/
    i[47]
  ), e.$on(
    "error",
    /*error_handler_2*/
    i[48]
  ), e.$on(
    "drag",
    /*drag_handler*/
    i[49]
  ), e.$on(
    "upload",
    /*upload_handler*/
    i[50]
  ), {
    c() {
      Wt(e.$$.fragment);
    },
    m(n, l) {
      Xt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*root*/
      64 && (o.root = /*root*/
      n[6]), l[0] & /*i18n*/
      256 && (o.i18n = /*i18n*/
      n[8]), l[1] & /*upload*/
      2 && (o.upload = /*upload*/
      n[32]), e.$set(o);
    },
    i(n) {
      t || (ee(e.$$.fragment, n), t = !0);
    },
    o(n) {
      de(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Rt(e, n);
    }
  };
}
function ir(i) {
  let e, t, n, l;
  function o(r) {
    i[51](r);
  }
  let s = {
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
      i[1].image.url
    )
  };
  return (
    /*value*/
    i[1] !== void 0 && (s.value = /*value*/
    i[1]), t = new zp({ props: s }), Si.push(() => hl(t, "value", o)), t.$on(
      "change",
      /*change_handler*/
      i[52]
    ), {
      c() {
        e = Ci("div"), Wt(t.$$.fragment), pi(e, "class", "image-frame svelte-1gjdske"), Ja(
          e,
          "selectable",
          /*selectable*/
          i[5]
        );
      },
      m(r, a) {
        wn(r, e, a), Xt(t, e, null), l = !0;
      },
      p(r, a) {
        const _ = {};
        a[0] & /*height*/
        131072 && (_.height = /*height*/
        r[17]), a[0] & /*width*/
        262144 && (_.width = /*width*/
        r[18]), a[0] & /*boxesAlpha*/
        4096 && (_.boxesAlpha = /*boxesAlpha*/
        r[12]), a[0] & /*labelList*/
        8192 && (_.labelList = /*labelList*/
        r[13]), a[0] & /*labelColors*/
        16384 && (_.labelColors = /*labelColors*/
        r[14]), a[0] & /*boxMinSize*/
        32768 && (_.boxMinSize = /*boxMinSize*/
        r[15]), a[0] & /*interactive*/
        128 && (_.interactive = /*interactive*/
        r[7]), a[0] & /*handleSize*/
        65536 && (_.handleSize = /*handleSize*/
        r[16]), a[0] & /*boxThickness*/
        524288 && (_.boxThickness = /*boxThickness*/
        r[19]), a[0] & /*singleBox*/
        2097152 && (_.singleBox = /*singleBox*/
        r[21]), a[0] & /*disableEditBoxes*/
        1048576 && (_.disableEditBoxes = /*disableEditBoxes*/
        r[20]), a[0] & /*showRemoveButton*/
        4194304 && (_.showRemoveButton = /*showRemoveButton*/
        r[22]), a[0] & /*handlesCursor*/
        8388608 && (_.handlesCursor = /*handlesCursor*/
        r[23]), a[0] & /*boxSelectedThickness*/
        16777216 && (_.boxSelectedThickness = /*boxSelectedThickness*/
        r[24]), a[0] & /*useDefaultLabel*/
        268435456 && (_.useDefaultLabel = /*useDefaultLabel*/
        r[28]), a[0] & /*enableKeyboardShortcuts*/
        536870912 && (_.enableKeyboardShortcuts = /*enableKeyboardShortcuts*/
        r[29]), a[0] & /*value*/
        2 && (_.src = /*value*/
        r[1].image.url), !n && a[0] & /*value*/
        2 && (n = !0, _.value = /*value*/
        r[1], dl(() => n = !1)), t.$set(_), (!l || a[0] & /*selectable*/
        32) && Ja(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        l || (ee(t.$$.fragment, r), l = !0);
      },
      o(r) {
        de(t.$$.fragment, r), l = !1;
      },
      d(r) {
        r && bn(e), Rt(t);
      }
    }
  );
}
function lr(i) {
  let e, t, n;
  function l(s) {
    i[53](s);
  }
  let o = {
    sources: (
      /*sources*/
      i[4]
    ),
    handle_clear: (
      /*clear*/
      i[37]
    ),
    handle_select: (
      /*handle_select_source*/
      i[36]
    )
  };
  return (
    /*active_source*/
    i[0] !== void 0 && (o.active_source = /*active_source*/
    i[0]), e = new o1({ props: o }), Si.push(() => hl(e, "active_source", l)), {
      c() {
        Wt(e.$$.fragment);
      },
      m(s, r) {
        Xt(e, s, r), n = !0;
      },
      p(s, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        s[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        s[0], dl(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (ee(e.$$.fragment, s), n = !0);
      },
      o(s) {
        de(e.$$.fragment, s), n = !1;
      },
      d(s) {
        Rt(e, s);
      }
    }
  );
}
function jp(i) {
  let e, t, n, l, o, s, r, a, _, c, u, d, h, g, f = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[1] === null && /*interactive*/
    i[7]
  ), m;
  e = new sf({
    props: {
      show_label: (
        /*show_label*/
        i[3]
      ),
      Icon: pr,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let p = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[1] !== null && Qa(i)
  ), v = (
    /*showShareButton*/
    i[9] && /*value*/
    i[1] !== null && xa(i)
  ), b = (
    /*showClearButton*/
    i[11] && /*value*/
    i[1] !== null && /*interactive*/
    i[7] && er(i)
  );
  function z(w) {
    i[43](w);
  }
  function S(w) {
    i[44](w);
  }
  let C = {
    hidden: (
      /*value*/
      i[1] !== null || /*active_source*/
      i[0] === "webcam"
    ),
    filetype: (
      /*active_source*/
      i[0] === "clipboard" ? "clipboard" : "image/*"
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
    $$slots: { default: [Tp] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[30] !== void 0 && (C.uploading = /*uploading*/
  i[30]), /*dragging*/
  i[31] !== void 0 && (C.dragging = /*dragging*/
  i[31]), _ = new Th({ props: C }), i[42](_), Si.push(() => hl(_, "uploading", z)), Si.push(() => hl(_, "dragging", S)), _.$on(
    "load",
    /*handle_upload*/
    i[33]
  ), _.$on(
    "error",
    /*error_handler_1*/
    i[45]
  );
  let y = (
    /*value*/
    i[1] === null && /*active_source*/
    i[0] === "webcam" && nr(i)
  ), q = (
    /*value*/
    i[1] !== null && ir(i)
  ), L = f && lr(i);
  return {
    c() {
      Wt(e.$$.fragment), t = rn(), n = Ci("div"), p && p.c(), l = rn(), v && v.c(), o = rn(), b && b.c(), s = rn(), r = Ci("div"), a = Ci("div"), Wt(_.$$.fragment), d = rn(), y && y.c(), h = rn(), q && q.c(), g = rn(), L && L.c(), pi(n, "class", "icon-buttons svelte-1gjdske"), pi(a, "class", "upload-container svelte-1gjdske"), pi(r, "data-testid", "image"), pi(r, "class", "image-container svelte-1gjdske");
    },
    m(w, I) {
      Xt(e, w, I), wn(w, t, I), wn(w, n, I), p && p.m(n, null), An(n, l), v && v.m(n, null), An(n, o), b && b.m(n, null), wn(w, s, I), wn(w, r, I), An(r, a), Xt(_, a, null), An(a, d), y && y.m(a, null), An(a, h), q && q.m(a, null), An(r, g), L && L.m(r, null), m = !0;
    },
    p(w, I) {
      const R = {};
      I[0] & /*show_label*/
      8 && (R.show_label = /*show_label*/
      w[3]), I[0] & /*label*/
      4 && (R.label = /*label*/
      w[2] || "Image Annotator"), e.$set(R), /*showDownloadButton*/
      w[10] && /*value*/
      w[1] !== null ? p ? (p.p(w, I), I[0] & /*showDownloadButton, value*/
      1026 && ee(p, 1)) : (p = Qa(w), p.c(), ee(p, 1), p.m(n, l)) : p && (cn(), de(p, 1, 1, () => {
        p = null;
      }), _n()), /*showShareButton*/
      w[9] && /*value*/
      w[1] !== null ? v ? (v.p(w, I), I[0] & /*showShareButton, value*/
      514 && ee(v, 1)) : (v = xa(w), v.c(), ee(v, 1), v.m(n, o)) : v && (cn(), de(v, 1, 1, () => {
        v = null;
      }), _n()), /*showClearButton*/
      w[11] && /*value*/
      w[1] !== null && /*interactive*/
      w[7] ? b ? (b.p(w, I), I[0] & /*showClearButton, value, interactive*/
      2178 && ee(b, 1)) : (b = er(w), b.c(), ee(b, 1), b.m(n, null)) : b && (cn(), de(b, 1, 1, () => {
        b = null;
      }), _n());
      const N = {};
      I[0] & /*value, active_source*/
      3 && (N.hidden = /*value*/
      w[1] !== null || /*active_source*/
      w[0] === "webcam"), I[0] & /*active_source*/
      1 && (N.filetype = /*active_source*/
      w[0] === "clipboard" ? "clipboard" : "image/*"), I[0] & /*root*/
      64 && (N.root = /*root*/
      w[6]), I[0] & /*max_file_size*/
      33554432 && (N.max_file_size = /*max_file_size*/
      w[25]), I[0] & /*sources*/
      16 && (N.disable_click = !/*sources*/
      w[4].includes("upload")), I[0] & /*cli_upload*/
      67108864 && (N.upload = /*cli_upload*/
      w[26]), I[0] & /*stream_handler*/
      134217728 && (N.stream_handler = /*stream_handler*/
      w[27]), I[0] & /*value*/
      2 | I[1] & /*$$scope*/
      8388608 && (N.$$scope = { dirty: I, ctx: w }), !c && I[0] & /*uploading*/
      1073741824 && (c = !0, N.uploading = /*uploading*/
      w[30], dl(() => c = !1)), !u && I[1] & /*dragging*/
      1 && (u = !0, N.dragging = /*dragging*/
      w[31], dl(() => u = !1)), _.$set(N), /*value*/
      w[1] === null && /*active_source*/
      w[0] === "webcam" ? y ? (y.p(w, I), I[0] & /*value, active_source*/
      3 && ee(y, 1)) : (y = nr(w), y.c(), ee(y, 1), y.m(a, h)) : y && (cn(), de(y, 1, 1, () => {
        y = null;
      }), _n()), /*value*/
      w[1] !== null ? q ? (q.p(w, I), I[0] & /*value*/
      2 && ee(q, 1)) : (q = ir(w), q.c(), ee(q, 1), q.m(a, null)) : q && (cn(), de(q, 1, 1, () => {
        q = null;
      }), _n()), I[0] & /*sources, value, interactive*/
      146 && (f = /*sources*/
      (w[4].length > 1 || /*sources*/
      w[4].includes("clipboard")) && /*value*/
      w[1] === null && /*interactive*/
      w[7]), f ? L ? (L.p(w, I), I[0] & /*sources, value, interactive*/
      146 && ee(L, 1)) : (L = lr(w), L.c(), ee(L, 1), L.m(r, null)) : L && (cn(), de(L, 1, 1, () => {
        L = null;
      }), _n());
    },
    i(w) {
      m || (ee(e.$$.fragment, w), ee(p), ee(v), ee(b), ee(_.$$.fragment, w), ee(y), ee(q), ee(L), m = !0);
    },
    o(w) {
      de(e.$$.fragment, w), de(p), de(v), de(b), de(_.$$.fragment, w), de(y), de(q), de(L), m = !1;
    },
    d(w) {
      w && (bn(t), bn(n), bn(s), bn(r)), Rt(e, w), p && p.d(), v && v.d(), b && b.d(), i[42](null), Rt(_), y && y.d(), q && q.d(), L && L.d();
    }
  };
}
function Fp(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var o = this && this.__awaiter || function(B, It, yt, zn) {
    function Dl(St) {
      return St instanceof yt ? St : new yt(function(Dn) {
        Dn(St);
      });
    }
    return new (yt || (yt = Promise))(function(St, Dn) {
      function Bl(je) {
        try {
          ti(zn.next(je));
        } catch (nn) {
          Dn(nn);
        }
      }
      function Ml(je) {
        try {
          ti(zn.throw(je));
        } catch (nn) {
          Dn(nn);
        }
      }
      function ti(je) {
        je.done ? St(je.value) : Dl(je.value).then(Bl, Ml);
      }
      ti((zn = zn.apply(B, It || [])).next());
    });
  };
  let { value: s } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: _ = ["upload", "webcam", "clipboard"] } = e, { selectable: c = !1 } = e, { root: u } = e, { interactive: d } = e, { i18n: h } = e, { showShareButton: g } = e, { showDownloadButton: f } = e, { showClearButton: m } = e, { boxesAlpha: p } = e, { labelList: v } = e, { labelColors: b } = e, { boxMinSize: z } = e, { handleSize: S } = e, { height: C } = e, { width: y } = e, { boxThickness: q } = e, { disableEditBoxes: L } = e, { singleBox: w } = e, { showRemoveButton: I } = e, { handlesCursor: R } = e, { boxSelectedThickness: N } = e, { max_file_size: F = null } = e, { cli_upload: $ } = e, { stream_handler: Z } = e, { useDefaultLabel: ue } = e, { enableKeyboardShortcuts: A } = e, M, X = !1, { active_source: U = null } = e;
  function oe({ detail: B }) {
    t(1, s = new Ga()), t(1, s.image = B, s), ne("upload");
  }
  function te(B) {
    return o(this, void 0, void 0, function* () {
      const It = yield M.load_files([new File([B], "webcam.png")]), yt = (It == null ? void 0 : It[0]) || null;
      yt ? (t(1, s = new Ga()), t(1, s.image = yt, s)) : t(1, s = null), yield Ip(), ne("change");
    });
  }
  const ne = Ap();
  let Y = !1;
  function ae(B) {
    return o(this, void 0, void 0, function* () {
      switch (B) {
        case "clipboard":
          M.paste_clipboard();
          break;
      }
    });
  }
  function E() {
    t(1, s = null), ne("clear"), ne("change");
  }
  const P = async (B) => B === null ? "" : `<img src="${await Ed(B.image)}" />`;
  function ie(B) {
    ci.call(this, i, B);
  }
  function re(B) {
    ci.call(this, i, B);
  }
  function _e(B) {
    Si[B ? "unshift" : "push"](() => {
      M = B, t(32, M);
    });
  }
  function D(B) {
    X = B, t(30, X);
  }
  function Te(B) {
    Y = B, t(31, Y);
  }
  function $e(B) {
    ci.call(this, i, B);
  }
  const ce = (B) => te(B.detail), he = (B) => te(B.detail);
  function J(B) {
    ci.call(this, i, B);
  }
  function Ke(B) {
    ci.call(this, i, B);
  }
  const tn = (B) => te(B.detail);
  function Bi(B) {
    s = B, t(1, s);
  }
  const ql = () => ne("change");
  function zl(B) {
    U = B, t(0, U), t(4, _);
  }
  return i.$$set = (B) => {
    "value" in B && t(1, s = B.value), "label" in B && t(2, r = B.label), "show_label" in B && t(3, a = B.show_label), "sources" in B && t(4, _ = B.sources), "selectable" in B && t(5, c = B.selectable), "root" in B && t(6, u = B.root), "interactive" in B && t(7, d = B.interactive), "i18n" in B && t(8, h = B.i18n), "showShareButton" in B && t(9, g = B.showShareButton), "showDownloadButton" in B && t(10, f = B.showDownloadButton), "showClearButton" in B && t(11, m = B.showClearButton), "boxesAlpha" in B && t(12, p = B.boxesAlpha), "labelList" in B && t(13, v = B.labelList), "labelColors" in B && t(14, b = B.labelColors), "boxMinSize" in B && t(15, z = B.boxMinSize), "handleSize" in B && t(16, S = B.handleSize), "height" in B && t(17, C = B.height), "width" in B && t(18, y = B.width), "boxThickness" in B && t(19, q = B.boxThickness), "disableEditBoxes" in B && t(20, L = B.disableEditBoxes), "singleBox" in B && t(21, w = B.singleBox), "showRemoveButton" in B && t(22, I = B.showRemoveButton), "handlesCursor" in B && t(23, R = B.handlesCursor), "boxSelectedThickness" in B && t(24, N = B.boxSelectedThickness), "max_file_size" in B && t(25, F = B.max_file_size), "cli_upload" in B && t(26, $ = B.cli_upload), "stream_handler" in B && t(27, Z = B.stream_handler), "useDefaultLabel" in B && t(28, ue = B.useDefaultLabel), "enableKeyboardShortcuts" in B && t(29, A = B.enableKeyboardShortcuts), "active_source" in B && t(0, U = B.active_source), "$$scope" in B && t(54, l = B.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*uploading*/
    1073741824 && X && E(), i.$$.dirty[1] & /*dragging*/
    1 && ne("drag", Y), i.$$.dirty[0] & /*active_source, sources*/
    17 && !U && _ && t(0, U = _[0]);
  }, [
    U,
    s,
    r,
    a,
    _,
    c,
    u,
    d,
    h,
    g,
    f,
    m,
    p,
    v,
    b,
    z,
    S,
    C,
    y,
    q,
    L,
    w,
    I,
    R,
    N,
    F,
    $,
    Z,
    ue,
    A,
    X,
    Y,
    M,
    oe,
    te,
    ne,
    ae,
    E,
    n,
    P,
    ie,
    re,
    _e,
    D,
    Te,
    $e,
    ce,
    he,
    J,
    Ke,
    tn,
    Bi,
    ql,
    zl,
    l
  ];
}
class Pp extends Dp {
  constructor(e) {
    super(), Wp(
      this,
      e,
      Fp,
      jp,
      Xp,
      {
        value: 1,
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
        active_source: 0
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: Up,
  attr: tl,
  detach: b_,
  element: w_,
  init: Op,
  insert: v_,
  noop: or,
  safe_not_equal: Vp,
  src_url_equal: sr,
  toggle_class: $t
} = window.__gradio__svelte__internal;
function ar(i) {
  let e, t;
  return {
    c() {
      e = w_("img"), sr(e.src, t = /*value*/
      i[0].url) || tl(e, "src", t), tl(e, "alt", "");
    },
    m(n, l) {
      v_(n, e, l);
    },
    p(n, l) {
      l & /*value*/
      1 && !sr(e.src, t = /*value*/
      n[0].url) && tl(e, "src", t);
    },
    d(n) {
      n && b_(e);
    }
  };
}
function Np(i) {
  let e, t = (
    /*value*/
    i[0] && ar(i)
  );
  return {
    c() {
      e = w_("div"), t && t.c(), tl(e, "class", "container svelte-1sgcyba"), $t(
        e,
        "table",
        /*type*/
        i[1] === "table"
      ), $t(
        e,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), $t(
        e,
        "selected",
        /*selected*/
        i[2]
      ), $t(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    m(n, l) {
      v_(n, e, l), t && t.m(e, null);
    },
    p(n, [l]) {
      /*value*/
      n[0] ? t ? t.p(n, l) : (t = ar(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), l & /*type*/
      2 && $t(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), l & /*type*/
      2 && $t(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), l & /*selected*/
      4 && $t(
        e,
        "selected",
        /*selected*/
        n[2]
      ), l & /*value*/
      1 && $t(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: or,
    o: or,
    d(n) {
      n && b_(e), t && t.d();
    }
  };
}
function $p(i, e, t) {
  let { value: n } = e, { type: l } = e, { selected: o = !1 } = e;
  return i.$$set = (s) => {
    "value" in s && t(0, n = s.value), "type" in s && t(1, l = s.type), "selected" in s && t(2, o = s.selected);
  }, [n, l, o];
}
class fq extends Up {
  constructor(e) {
    super(), Op(this, e, $p, Np, Vp, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: Kp,
  add_flush_callback: rr,
  assign: Zp,
  bind: _r,
  binding_callbacks: cr,
  check_outros: Gp,
  create_component: yn,
  destroy_component: Sn,
  detach: k_,
  empty: Jp,
  flush: x,
  get_spread_object: Qp,
  get_spread_update: xp,
  group_outros: eb,
  init: tb,
  insert: C_,
  mount_component: qn,
  safe_not_equal: nb,
  space: ib,
  transition_in: Yt,
  transition_out: At
} = window.__gradio__svelte__internal;
function lb(i) {
  let e, t;
  return e = new If({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [ab] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      yn(e.$$.fragment);
    },
    m(n, l) {
      qn(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*$$scope*/
      16384 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (Yt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Sn(e, n);
    }
  };
}
function ob(i) {
  let e, t;
  return e = new Sr({
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
      yn(e.$$.fragment);
    },
    m(n, l) {
      qn(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*gradio*/
      2 && (o.i18n = /*gradio*/
      n[32].i18n), e.$set(o);
    },
    i(n) {
      t || (Yt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Sn(e, n);
    }
  };
}
function sb(i) {
  let e, t;
  return e = new Sr({
    props: {
      i18n: (
        /*gradio*/
        i[32].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      yn(e.$$.fragment);
    },
    m(n, l) {
      qn(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*gradio*/
      2 && (o.i18n = /*gradio*/
      n[32].i18n), e.$set(o);
    },
    i(n) {
      t || (Yt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Sn(e, n);
    }
  };
}
function ab(i) {
  let e, t;
  return e = new pr({}), {
    c() {
      yn(e.$$.fragment);
    },
    m(n, l) {
      qn(e, n, l), t = !0;
    },
    i(n) {
      t || (Yt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Sn(e, n);
    }
  };
}
function rb(i) {
  let e, t, n, l;
  const o = [sb, ob, lb], s = [];
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
      t.c(), n = Jp();
    },
    m(a, _) {
      s[e].m(a, _), C_(a, n, _), l = !0;
    },
    p(a, _) {
      let c = e;
      e = r(a), e === c ? s[e].p(a, _) : (eb(), At(s[c], 1, 1, () => {
        s[c] = null;
      }), Gp(), t = s[e], t ? t.p(a, _) : (t = s[e] = o[e](a), t.c()), Yt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Yt(t), l = !0);
    },
    o(a) {
      At(t), l = !1;
    },
    d(a) {
      a && k_(n), s[e].d(a);
    }
  };
}
function _b(i) {
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
    a = Zp(a, r[d]);
  e = new U1({ props: a });
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
    $$slots: { default: [rb] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[34] !== void 0 && (u.active_source = /*active_source*/
    i[34]), /*value*/
    i[0] !== void 0 && (u.value = /*value*/
    i[0]), n = new Pp({ props: u }), cr.push(() => _r(n, "active_source", _)), cr.push(() => _r(n, "value", c)), n.$on(
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
        yn(e.$$.fragment), t = ib(), yn(n.$$.fragment);
      },
      m(d, h) {
        qn(e, d, h), C_(d, t, h), qn(n, d, h), s = !0;
      },
      p(d, h) {
        const g = h[0] & /*loading_status*/
        2 | h[1] & /*gradio*/
        2 ? xp(r, [
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
          2 && Qp(
            /*loading_status*/
            d[1]
          )
        ]) : {};
        e.$set(g);
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
        d[34], rr(() => l = !1)), !o && h[0] & /*value*/
        1 && (o = !0, f.value = /*value*/
        d[0], rr(() => o = !1)), n.$set(f);
      },
      i(d) {
        s || (Yt(e.$$.fragment, d), Yt(n.$$.fragment, d), s = !0);
      },
      o(d) {
        At(e.$$.fragment, d), At(n.$$.fragment, d), s = !1;
      },
      d(d) {
        d && k_(t), Sn(e, d), Sn(n, d);
      }
    }
  );
}
function cb(i) {
  let e, t;
  return e = new ac({
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
      $$slots: { default: [_b] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      yn(e.$$.fragment);
    },
    m(n, l) {
      qn(e, n, l), t = !0;
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
      t || (Yt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Sn(e, n);
    }
  };
}
function fb(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: l = [] } = e, { visible: o = !0 } = e, { value: s = null } = e, { label: r } = e, { show_label: a } = e, { root: _ } = e, { height: c } = e, { width: u } = e, { _selectable: d = !1 } = e, { container: h = !0 } = e, { scale: g = null } = e, { min_width: f = void 0 } = e, { loading_status: m } = e, { sources: p = ["upload", "webcam", "clipboard"] } = e, { show_download_button: v } = e, { show_share_button: b } = e, { show_clear_button: z } = e, { interactive: S } = e, { boxes_alpha: C } = e, { label_list: y } = e, { label_colors: q } = e, { box_min_size: L } = e, { handle_size: w } = e, { box_thickness: I } = e, { box_selected_thickness: R } = e, { disable_edit_boxes: N } = e, { single_box: F } = e, { show_remove_button: $ } = e, { handles_cursor: Z } = e, { use_default_label: ue } = e, { enable_keyboard_shortcuts: A } = e, { gradio: M } = e, X, U = null;
  function oe(D) {
    U = D, t(34, U);
  }
  function te(D) {
    s = D, t(0, s);
  }
  const ne = () => M.dispatch("change"), Y = () => M.dispatch("edit"), ae = () => {
    M.dispatch("clear");
  }, E = ({ detail: D }) => t(33, X = D), P = () => M.dispatch("upload"), ie = ({ detail: D }) => M.dispatch("select", D), re = ({ detail: D }) => M.dispatch("share", D), _e = ({ detail: D }) => {
    t(1, m = m || {}), t(1, m.status = "error", m), M.dispatch("error", D);
  };
  return i.$$set = (D) => {
    "elem_id" in D && t(2, n = D.elem_id), "elem_classes" in D && t(3, l = D.elem_classes), "visible" in D && t(4, o = D.visible), "value" in D && t(0, s = D.value), "label" in D && t(5, r = D.label), "show_label" in D && t(6, a = D.show_label), "root" in D && t(7, _ = D.root), "height" in D && t(8, c = D.height), "width" in D && t(9, u = D.width), "_selectable" in D && t(10, d = D._selectable), "container" in D && t(11, h = D.container), "scale" in D && t(12, g = D.scale), "min_width" in D && t(13, f = D.min_width), "loading_status" in D && t(1, m = D.loading_status), "sources" in D && t(14, p = D.sources), "show_download_button" in D && t(15, v = D.show_download_button), "show_share_button" in D && t(16, b = D.show_share_button), "show_clear_button" in D && t(17, z = D.show_clear_button), "interactive" in D && t(18, S = D.interactive), "boxes_alpha" in D && t(19, C = D.boxes_alpha), "label_list" in D && t(20, y = D.label_list), "label_colors" in D && t(21, q = D.label_colors), "box_min_size" in D && t(22, L = D.box_min_size), "handle_size" in D && t(23, w = D.handle_size), "box_thickness" in D && t(24, I = D.box_thickness), "box_selected_thickness" in D && t(25, R = D.box_selected_thickness), "disable_edit_boxes" in D && t(26, N = D.disable_edit_boxes), "single_box" in D && t(27, F = D.single_box), "show_remove_button" in D && t(28, $ = D.show_remove_button), "handles_cursor" in D && t(29, Z = D.handles_cursor), "use_default_label" in D && t(30, ue = D.use_default_label), "enable_keyboard_shortcuts" in D && t(31, A = D.enable_keyboard_shortcuts), "gradio" in D && t(32, M = D.gradio);
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
    g,
    f,
    p,
    v,
    b,
    z,
    S,
    C,
    y,
    q,
    L,
    w,
    I,
    R,
    N,
    F,
    $,
    Z,
    ue,
    A,
    M,
    X,
    U,
    oe,
    te,
    ne,
    Y,
    ae,
    E,
    P,
    ie,
    re,
    _e
  ];
}
class uq extends Kp {
  constructor(e) {
    super(), tb(
      this,
      e,
      fb,
      cb,
      nb,
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
    this.$$set({ elem_id: e }), x();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), x();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), x();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), x();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), x();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), x();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), x();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), x();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), x();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), x();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), x();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), x();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), x();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), x();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), x();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), x();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), x();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), x();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), x();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), x();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), x();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), x();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), x();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), x();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), x();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), x();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), x();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), x();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), x();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), x();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), x();
  }
  get enable_keyboard_shortcuts() {
    return this.$$.ctx[31];
  }
  set enable_keyboard_shortcuts(e) {
    this.$$set({ enable_keyboard_shortcuts: e }), x();
  }
  get gradio() {
    return this.$$.ctx[32];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), x();
  }
}
export {
  fq as BaseExample,
  uq as default
};
