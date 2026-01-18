const {
  SvelteComponent: d_,
  assign: h_,
  create_slot: m_,
  detach: g_,
  element: b_,
  get_all_dirty_from_scope: p_,
  get_slot_changes: v_,
  get_spread_update: w_,
  init: k_,
  insert: y_,
  safe_not_equal: C_,
  set_dynamic_element_data: qs,
  set_style: $e,
  toggle_class: Lt,
  transition_in: Er,
  transition_out: Lr,
  update_slot_base: S_
} = window.__gradio__svelte__internal;
function q_(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[18].default
  ), o = m_(
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
    r = h_(r, s[a]);
  return {
    c() {
      e = b_(
        /*tag*/
        i[14]
      ), o && o.c(), qs(
        /*tag*/
        i[14]
      )(e, r), Lt(
        e,
        "hidden",
        /*visible*/
        i[10] === !1
      ), Lt(
        e,
        "padded",
        /*padding*/
        i[6]
      ), Lt(
        e,
        "border_focus",
        /*border_mode*/
        i[5] === "focus"
      ), Lt(
        e,
        "border_contrast",
        /*border_mode*/
        i[5] === "contrast"
      ), Lt(e, "hide-container", !/*explicit_call*/
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
    m(a, c) {
      y_(a, e, c), o && o.m(e, null), n = !0;
    },
    p(a, c) {
      o && o.p && (!n || c & /*$$scope*/
      131072) && S_(
        o,
        l,
        a,
        /*$$scope*/
        a[17],
        n ? v_(
          l,
          /*$$scope*/
          a[17],
          c,
          null
        ) : p_(
          /*$$scope*/
          a[17]
        ),
        null
      ), qs(
        /*tag*/
        a[14]
      )(e, r = w_(s, [
        (!n || c & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          a[7]
        ) },
        (!n || c & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          a[2]
        ) },
        (!n || c & /*elem_classes*/
        8 && t !== (t = "block " + /*elem_classes*/
        a[3].join(" ") + " svelte-nl1om8")) && { class: t }
      ])), Lt(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), Lt(
        e,
        "padded",
        /*padding*/
        a[6]
      ), Lt(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), Lt(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), Lt(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), c & /*height*/
      1 && $e(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), c & /*width*/
      2 && $e(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), c & /*variant*/
      16 && $e(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), c & /*allow_overflow*/
      2048 && $e(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), c & /*scale*/
      4096 && $e(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), c & /*min_width*/
      8192 && $e(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (Er(o, a), n = !0);
    },
    o(a) {
      Lr(o, a), n = !1;
    },
    d(a) {
      a && g_(e), o && o.d(a);
    }
  };
}
function z_(i) {
  let e, t = (
    /*tag*/
    i[14] && q_(i)
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
      e || (Er(t, n), e = !0);
    },
    o(n) {
      Lr(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function D_(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { height: o = void 0 } = e, { width: s = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: c = "solid" } = e, { border_mode: _ = "base" } = e, { padding: f = !0 } = e, { type: d = "normal" } = e, { test_id: h = void 0 } = e, { explicit_call: b = !1 } = e, { container: u = !0 } = e, { visible: m = !0 } = e, { allow_overflow: g = !0 } = e, { scale: w = null } = e, { min_width: p = 0 } = e, y = d === "fieldset" ? "fieldset" : "div";
  const z = (k) => {
    if (k !== void 0) {
      if (typeof k == "number")
        return k + "px";
      if (typeof k == "string")
        return k;
    }
  };
  return i.$$set = (k) => {
    "height" in k && t(0, o = k.height), "width" in k && t(1, s = k.width), "elem_id" in k && t(2, r = k.elem_id), "elem_classes" in k && t(3, a = k.elem_classes), "variant" in k && t(4, c = k.variant), "border_mode" in k && t(5, _ = k.border_mode), "padding" in k && t(6, f = k.padding), "type" in k && t(16, d = k.type), "test_id" in k && t(7, h = k.test_id), "explicit_call" in k && t(8, b = k.explicit_call), "container" in k && t(9, u = k.container), "visible" in k && t(10, m = k.visible), "allow_overflow" in k && t(11, g = k.allow_overflow), "scale" in k && t(12, w = k.scale), "min_width" in k && t(13, p = k.min_width), "$$scope" in k && t(17, l = k.$$scope);
  }, [
    o,
    s,
    r,
    a,
    c,
    _,
    f,
    h,
    b,
    u,
    m,
    g,
    w,
    p,
    y,
    z,
    d,
    l,
    n
  ];
}
class B_ extends d_ {
  constructor(e) {
    super(), k_(this, e, D_, z_, C_, {
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
  SvelteComponent: M_,
  attr: E_,
  create_slot: L_,
  detach: A_,
  element: W_,
  get_all_dirty_from_scope: R_,
  get_slot_changes: X_,
  init: Y_,
  insert: I_,
  safe_not_equal: H_,
  transition_in: T_,
  transition_out: j_,
  update_slot_base: F_
} = window.__gradio__svelte__internal;
function O_(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), l = L_(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = W_("div"), l && l.c(), E_(e, "class", "svelte-1hnfib2");
    },
    m(o, s) {
      I_(o, e, s), l && l.m(e, null), t = !0;
    },
    p(o, [s]) {
      l && l.p && (!t || s & /*$$scope*/
      1) && F_(
        l,
        n,
        o,
        /*$$scope*/
        o[0],
        t ? X_(
          n,
          /*$$scope*/
          o[0],
          s,
          null
        ) : R_(
          /*$$scope*/
          o[0]
        ),
        null
      );
    },
    i(o) {
      t || (T_(l, o), t = !0);
    },
    o(o) {
      j_(l, o), t = !1;
    },
    d(o) {
      o && A_(e), l && l.d(o);
    }
  };
}
function P_(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  return i.$$set = (o) => {
    "$$scope" in o && t(0, l = o.$$scope);
  }, [l, n];
}
class U_ extends M_ {
  constructor(e) {
    super(), Y_(this, e, P_, O_, H_, {});
  }
}
const {
  SvelteComponent: V_,
  attr: zs,
  check_outros: N_,
  create_component: K_,
  create_slot: Z_,
  destroy_component: G_,
  detach: rl,
  element: J_,
  empty: Q_,
  get_all_dirty_from_scope: x_,
  get_slot_changes: $_,
  group_outros: eu,
  init: tu,
  insert: cl,
  mount_component: nu,
  safe_not_equal: iu,
  set_data: lu,
  space: ou,
  text: su,
  toggle_class: On,
  transition_in: Si,
  transition_out: _l,
  update_slot_base: au
} = window.__gradio__svelte__internal;
function Ds(i) {
  let e, t;
  return e = new U_({
    props: {
      $$slots: { default: [ru] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      K_(e.$$.fragment);
    },
    m(n, l) {
      nu(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l & /*$$scope, info*/
      10 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (Si(e.$$.fragment, n), t = !0);
    },
    o(n) {
      _l(e.$$.fragment, n), t = !1;
    },
    d(n) {
      G_(e, n);
    }
  };
}
function ru(i) {
  let e;
  return {
    c() {
      e = su(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      cl(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && lu(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && rl(e);
    }
  };
}
function cu(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[2].default
  ), s = Z_(
    o,
    i,
    /*$$scope*/
    i[3],
    null
  );
  let r = (
    /*info*/
    i[1] && Ds(i)
  );
  return {
    c() {
      e = J_("span"), s && s.c(), t = ou(), r && r.c(), n = Q_(), zs(e, "data-testid", "block-info"), zs(e, "class", "svelte-22c38v"), On(e, "sr-only", !/*show_label*/
      i[0]), On(e, "hide", !/*show_label*/
      i[0]), On(
        e,
        "has-info",
        /*info*/
        i[1] != null
      );
    },
    m(a, c) {
      cl(a, e, c), s && s.m(e, null), cl(a, t, c), r && r.m(a, c), cl(a, n, c), l = !0;
    },
    p(a, [c]) {
      s && s.p && (!l || c & /*$$scope*/
      8) && au(
        s,
        o,
        a,
        /*$$scope*/
        a[3],
        l ? $_(
          o,
          /*$$scope*/
          a[3],
          c,
          null
        ) : x_(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!l || c & /*show_label*/
      1) && On(e, "sr-only", !/*show_label*/
      a[0]), (!l || c & /*show_label*/
      1) && On(e, "hide", !/*show_label*/
      a[0]), (!l || c & /*info*/
      2) && On(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, c), c & /*info*/
      2 && Si(r, 1)) : (r = Ds(a), r.c(), Si(r, 1), r.m(n.parentNode, n)) : r && (eu(), _l(r, 1, 1, () => {
        r = null;
      }), N_());
    },
    i(a) {
      l || (Si(s, a), Si(r), l = !0);
    },
    o(a) {
      _l(s, a), _l(r), l = !1;
    },
    d(a) {
      a && (rl(e), rl(t), rl(n)), s && s.d(a), r && r.d(a);
    }
  };
}
function _u(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { show_label: o = !0 } = e, { info: s = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, o = r.show_label), "info" in r && t(1, s = r.info), "$$scope" in r && t(3, l = r.$$scope);
  }, [o, s, n, l];
}
class Ar extends V_ {
  constructor(e) {
    super(), tu(this, e, _u, cu, iu, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: uu,
  append: Nl,
  attr: Fi,
  create_component: fu,
  destroy_component: du,
  detach: hu,
  element: Bs,
  init: mu,
  insert: gu,
  mount_component: bu,
  safe_not_equal: pu,
  set_data: vu,
  space: wu,
  text: ku,
  toggle_class: nn,
  transition_in: yu,
  transition_out: Cu
} = window.__gradio__svelte__internal;
function Su(i) {
  let e, t, n, l, o, s;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = Bs("label"), t = Bs("span"), fu(n.$$.fragment), l = wu(), o = ku(
        /*label*/
        i[0]
      ), Fi(t, "class", "svelte-9gxdi0"), Fi(e, "for", ""), Fi(e, "data-testid", "block-label"), Fi(e, "class", "svelte-9gxdi0"), nn(e, "hide", !/*show_label*/
      i[2]), nn(e, "sr-only", !/*show_label*/
      i[2]), nn(
        e,
        "float",
        /*float*/
        i[4]
      ), nn(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      gu(r, e, a), Nl(e, t), bu(n, t, null), Nl(e, l), Nl(e, o), s = !0;
    },
    p(r, [a]) {
      (!s || a & /*label*/
      1) && vu(
        o,
        /*label*/
        r[0]
      ), (!s || a & /*show_label*/
      4) && nn(e, "hide", !/*show_label*/
      r[2]), (!s || a & /*show_label*/
      4) && nn(e, "sr-only", !/*show_label*/
      r[2]), (!s || a & /*float*/
      16) && nn(
        e,
        "float",
        /*float*/
        r[4]
      ), (!s || a & /*disable*/
      8) && nn(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      s || (yu(n.$$.fragment, r), s = !0);
    },
    o(r) {
      Cu(n.$$.fragment, r), s = !1;
    },
    d(r) {
      r && hu(e), du(n);
    }
  };
}
function qu(i, e, t) {
  let { label: n = null } = e, { Icon: l } = e, { show_label: o = !0 } = e, { disable: s = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, l = a.Icon), "show_label" in a && t(2, o = a.show_label), "disable" in a && t(3, s = a.disable), "float" in a && t(4, r = a.float);
  }, [n, l, o, s, r];
}
class zu extends uu {
  constructor(e) {
    super(), mu(this, e, qu, Su, pu, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: Du,
  append: Fo,
  attr: Kt,
  bubble: Bu,
  create_component: Mu,
  destroy_component: Eu,
  detach: Wr,
  element: Oo,
  init: Lu,
  insert: Rr,
  listen: Au,
  mount_component: Wu,
  safe_not_equal: Ru,
  set_data: Xu,
  set_style: Pn,
  space: Yu,
  text: Iu,
  toggle_class: Pe,
  transition_in: Hu,
  transition_out: Tu
} = window.__gradio__svelte__internal;
function Ms(i) {
  let e, t;
  return {
    c() {
      e = Oo("span"), t = Iu(
        /*label*/
        i[1]
      ), Kt(e, "class", "svelte-1lrphxw");
    },
    m(n, l) {
      Rr(n, e, l), Fo(e, t);
    },
    p(n, l) {
      l & /*label*/
      2 && Xu(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && Wr(e);
    }
  };
}
function ju(i) {
  let e, t, n, l, o, s, r, a = (
    /*show_label*/
    i[2] && Ms(i)
  );
  return l = new /*Icon*/
  i[0]({}), {
    c() {
      e = Oo("button"), a && a.c(), t = Yu(), n = Oo("div"), Mu(l.$$.fragment), Kt(n, "class", "svelte-1lrphxw"), Pe(
        n,
        "small",
        /*size*/
        i[4] === "small"
      ), Pe(
        n,
        "large",
        /*size*/
        i[4] === "large"
      ), Pe(
        n,
        "medium",
        /*size*/
        i[4] === "medium"
      ), e.disabled = /*disabled*/
      i[7], Kt(
        e,
        "aria-label",
        /*label*/
        i[1]
      ), Kt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        i[8]
      ), Kt(
        e,
        "title",
        /*label*/
        i[1]
      ), Kt(e, "class", "svelte-1lrphxw"), Pe(
        e,
        "pending",
        /*pending*/
        i[3]
      ), Pe(
        e,
        "padded",
        /*padded*/
        i[5]
      ), Pe(
        e,
        "highlight",
        /*highlight*/
        i[6]
      ), Pe(
        e,
        "transparent",
        /*transparent*/
        i[9]
      ), Pn(e, "color", !/*disabled*/
      i[7] && /*_color*/
      i[12] ? (
        /*_color*/
        i[12]
      ) : "var(--block-label-text-color)"), Pn(e, "--bg-color", /*disabled*/
      i[7] ? "auto" : (
        /*background*/
        i[10]
      )), Pn(
        e,
        "margin-left",
        /*offset*/
        i[11] + "px"
      );
    },
    m(c, _) {
      Rr(c, e, _), a && a.m(e, null), Fo(e, t), Fo(e, n), Wu(l, n, null), o = !0, s || (r = Au(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), s = !0);
    },
    p(c, [_]) {
      /*show_label*/
      c[2] ? a ? a.p(c, _) : (a = Ms(c), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!o || _ & /*size*/
      16) && Pe(
        n,
        "small",
        /*size*/
        c[4] === "small"
      ), (!o || _ & /*size*/
      16) && Pe(
        n,
        "large",
        /*size*/
        c[4] === "large"
      ), (!o || _ & /*size*/
      16) && Pe(
        n,
        "medium",
        /*size*/
        c[4] === "medium"
      ), (!o || _ & /*disabled*/
      128) && (e.disabled = /*disabled*/
      c[7]), (!o || _ & /*label*/
      2) && Kt(
        e,
        "aria-label",
        /*label*/
        c[1]
      ), (!o || _ & /*hasPopup*/
      256) && Kt(
        e,
        "aria-haspopup",
        /*hasPopup*/
        c[8]
      ), (!o || _ & /*label*/
      2) && Kt(
        e,
        "title",
        /*label*/
        c[1]
      ), (!o || _ & /*pending*/
      8) && Pe(
        e,
        "pending",
        /*pending*/
        c[3]
      ), (!o || _ & /*padded*/
      32) && Pe(
        e,
        "padded",
        /*padded*/
        c[5]
      ), (!o || _ & /*highlight*/
      64) && Pe(
        e,
        "highlight",
        /*highlight*/
        c[6]
      ), (!o || _ & /*transparent*/
      512) && Pe(
        e,
        "transparent",
        /*transparent*/
        c[9]
      ), _ & /*disabled, _color*/
      4224 && Pn(e, "color", !/*disabled*/
      c[7] && /*_color*/
      c[12] ? (
        /*_color*/
        c[12]
      ) : "var(--block-label-text-color)"), _ & /*disabled, background*/
      1152 && Pn(e, "--bg-color", /*disabled*/
      c[7] ? "auto" : (
        /*background*/
        c[10]
      )), _ & /*offset*/
      2048 && Pn(
        e,
        "margin-left",
        /*offset*/
        c[11] + "px"
      );
    },
    i(c) {
      o || (Hu(l.$$.fragment, c), o = !0);
    },
    o(c) {
      Tu(l.$$.fragment, c), o = !1;
    },
    d(c) {
      c && Wr(e), a && a.d(), Eu(l), s = !1, r();
    }
  };
}
function Fu(i, e, t) {
  let n, { Icon: l } = e, { label: o = "" } = e, { show_label: s = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: c = !0 } = e, { highlight: _ = !1 } = e, { disabled: f = !1 } = e, { hasPopup: d = !1 } = e, { color: h = "var(--block-label-text-color)" } = e, { transparent: b = !1 } = e, { background: u = "var(--background-fill-primary)" } = e, { offset: m = 0 } = e;
  function g(w) {
    Bu.call(this, i, w);
  }
  return i.$$set = (w) => {
    "Icon" in w && t(0, l = w.Icon), "label" in w && t(1, o = w.label), "show_label" in w && t(2, s = w.show_label), "pending" in w && t(3, r = w.pending), "size" in w && t(4, a = w.size), "padded" in w && t(5, c = w.padded), "highlight" in w && t(6, _ = w.highlight), "disabled" in w && t(7, f = w.disabled), "hasPopup" in w && t(8, d = w.hasPopup), "color" in w && t(13, h = w.color), "transparent" in w && t(9, b = w.transparent), "background" in w && t(10, u = w.background), "offset" in w && t(11, m = w.offset);
  }, i.$$.update = () => {
    i.$$.dirty & /*highlight, color*/
    8256 && t(12, n = _ ? "var(--color-accent)" : h);
  }, [
    l,
    o,
    s,
    r,
    a,
    c,
    _,
    f,
    d,
    b,
    u,
    m,
    n,
    h,
    g
  ];
}
class El extends Du {
  constructor(e) {
    super(), Lu(this, e, Fu, ju, Ru, {
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
  SvelteComponent: Ou,
  append: Pu,
  attr: Kl,
  binding_callbacks: Uu,
  create_slot: Vu,
  detach: Nu,
  element: Es,
  get_all_dirty_from_scope: Ku,
  get_slot_changes: Zu,
  init: Gu,
  insert: Ju,
  safe_not_equal: Qu,
  toggle_class: ln,
  transition_in: xu,
  transition_out: $u,
  update_slot_base: ef
} = window.__gradio__svelte__internal;
function tf(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[5].default
  ), o = Vu(
    l,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = Es("div"), t = Es("div"), o && o.c(), Kl(t, "class", "icon svelte-3w3rth"), Kl(e, "class", "empty svelte-3w3rth"), Kl(e, "aria-label", "Empty value"), ln(
        e,
        "small",
        /*size*/
        i[0] === "small"
      ), ln(
        e,
        "large",
        /*size*/
        i[0] === "large"
      ), ln(
        e,
        "unpadded_box",
        /*unpadded_box*/
        i[1]
      ), ln(
        e,
        "small_parent",
        /*parent_height*/
        i[3]
      );
    },
    m(s, r) {
      Ju(s, e, r), Pu(e, t), o && o.m(t, null), i[6](e), n = !0;
    },
    p(s, [r]) {
      o && o.p && (!n || r & /*$$scope*/
      16) && ef(
        o,
        l,
        s,
        /*$$scope*/
        s[4],
        n ? Zu(
          l,
          /*$$scope*/
          s[4],
          r,
          null
        ) : Ku(
          /*$$scope*/
          s[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && ln(
        e,
        "small",
        /*size*/
        s[0] === "small"
      ), (!n || r & /*size*/
      1) && ln(
        e,
        "large",
        /*size*/
        s[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && ln(
        e,
        "unpadded_box",
        /*unpadded_box*/
        s[1]
      ), (!n || r & /*parent_height*/
      8) && ln(
        e,
        "small_parent",
        /*parent_height*/
        s[3]
      );
    },
    i(s) {
      n || (xu(o, s), n = !0);
    },
    o(s) {
      $u(o, s), n = !1;
    },
    d(s) {
      s && Nu(e), o && o.d(s), i[6](null);
    }
  };
}
function nf(i, e, t) {
  let n, { $$slots: l = {}, $$scope: o } = e, { size: s = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function c(f) {
    var d;
    if (!f) return !1;
    const { height: h } = f.getBoundingClientRect(), { height: b } = ((d = f.parentElement) === null || d === void 0 ? void 0 : d.getBoundingClientRect()) || { height: h };
    return h > b + 2;
  }
  function _(f) {
    Uu[f ? "unshift" : "push"](() => {
      a = f, t(2, a);
    });
  }
  return i.$$set = (f) => {
    "size" in f && t(0, s = f.size), "unpadded_box" in f && t(1, r = f.unpadded_box), "$$scope" in f && t(4, o = f.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty & /*el*/
    4 && t(3, n = c(a));
  }, [s, r, a, n, o, l, _];
}
class lf extends Ou {
  constructor(e) {
    super(), Gu(this, e, nf, tf, Qu, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Np,
  append: Kp,
  attr: Zp,
  detach: Gp,
  init: Jp,
  insert: Qp,
  noop: xp,
  safe_not_equal: $p,
  svg_element: e2
} = window.__gradio__svelte__internal, {
  SvelteComponent: t2,
  append: n2,
  attr: i2,
  detach: l2,
  init: o2,
  insert: s2,
  noop: a2,
  safe_not_equal: r2,
  svg_element: c2
} = window.__gradio__svelte__internal, {
  SvelteComponent: _2,
  append: u2,
  attr: f2,
  detach: d2,
  init: h2,
  insert: m2,
  noop: g2,
  safe_not_equal: b2,
  svg_element: p2
} = window.__gradio__svelte__internal, {
  SvelteComponent: of,
  append: Ls,
  attr: Ue,
  detach: sf,
  init: af,
  insert: rf,
  noop: Zl,
  safe_not_equal: cf,
  svg_element: Gl
} = window.__gradio__svelte__internal;
function _f(i) {
  let e, t, n;
  return {
    c() {
      e = Gl("svg"), t = Gl("path"), n = Gl("circle"), Ue(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), Ue(n, "cx", "12"), Ue(n, "cy", "13"), Ue(n, "r", "4"), Ue(e, "xmlns", "http://www.w3.org/2000/svg"), Ue(e, "width", "100%"), Ue(e, "height", "100%"), Ue(e, "viewBox", "0 0 24 24"), Ue(e, "fill", "none"), Ue(e, "stroke", "currentColor"), Ue(e, "stroke-width", "1.5"), Ue(e, "stroke-linecap", "round"), Ue(e, "stroke-linejoin", "round"), Ue(e, "class", "feather feather-camera");
    },
    m(l, o) {
      rf(l, e, o), Ls(e, t), Ls(e, n);
    },
    p: Zl,
    i: Zl,
    o: Zl,
    d(l) {
      l && sf(e);
    }
  };
}
class uf extends of {
  constructor(e) {
    super(), af(this, e, null, _f, cf, {});
  }
}
const {
  SvelteComponent: v2,
  append: w2,
  attr: k2,
  detach: y2,
  init: C2,
  insert: S2,
  noop: q2,
  safe_not_equal: z2,
  svg_element: D2
} = window.__gradio__svelte__internal, {
  SvelteComponent: B2,
  append: M2,
  attr: E2,
  detach: L2,
  init: A2,
  insert: W2,
  noop: R2,
  safe_not_equal: X2,
  svg_element: Y2
} = window.__gradio__svelte__internal, {
  SvelteComponent: I2,
  append: H2,
  attr: T2,
  detach: j2,
  init: F2,
  insert: O2,
  noop: P2,
  safe_not_equal: U2,
  svg_element: V2
} = window.__gradio__svelte__internal, {
  SvelteComponent: ff,
  append: df,
  attr: bt,
  detach: hf,
  init: mf,
  insert: gf,
  noop: Jl,
  safe_not_equal: bf,
  svg_element: As
} = window.__gradio__svelte__internal;
function pf(i) {
  let e, t;
  return {
    c() {
      e = As("svg"), t = As("circle"), bt(t, "cx", "12"), bt(t, "cy", "12"), bt(t, "r", "10"), bt(e, "xmlns", "http://www.w3.org/2000/svg"), bt(e, "width", "100%"), bt(e, "height", "100%"), bt(e, "viewBox", "0 0 24 24"), bt(e, "stroke-width", "1.5"), bt(e, "stroke-linecap", "round"), bt(e, "stroke-linejoin", "round"), bt(e, "class", "feather feather-circle");
    },
    m(n, l) {
      gf(n, e, l), df(e, t);
    },
    p: Jl,
    i: Jl,
    o: Jl,
    d(n) {
      n && hf(e);
    }
  };
}
class vf extends ff {
  constructor(e) {
    super(), mf(this, e, null, pf, bf, {});
  }
}
const {
  SvelteComponent: wf,
  append: Ql,
  attr: pt,
  detach: kf,
  init: yf,
  insert: Cf,
  noop: xl,
  safe_not_equal: Sf,
  set_style: At,
  svg_element: Oi
} = window.__gradio__svelte__internal;
function qf(i) {
  let e, t, n, l;
  return {
    c() {
      e = Oi("svg"), t = Oi("g"), n = Oi("path"), l = Oi("path"), pt(n, "d", "M18,6L6.087,17.913"), At(n, "fill", "none"), At(n, "fill-rule", "nonzero"), At(n, "stroke-width", "2px"), pt(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), pt(l, "d", "M4.364,4.364L19.636,19.636"), At(l, "fill", "none"), At(l, "fill-rule", "nonzero"), At(l, "stroke-width", "2px"), pt(e, "width", "100%"), pt(e, "height", "100%"), pt(e, "viewBox", "0 0 24 24"), pt(e, "version", "1.1"), pt(e, "xmlns", "http://www.w3.org/2000/svg"), pt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), pt(e, "xml:space", "preserve"), pt(e, "stroke", "currentColor"), At(e, "fill-rule", "evenodd"), At(e, "clip-rule", "evenodd"), At(e, "stroke-linecap", "round"), At(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      Cf(o, e, s), Ql(e, t), Ql(t, n), Ql(e, l);
    },
    p: xl,
    i: xl,
    o: xl,
    d(o) {
      o && kf(e);
    }
  };
}
let Xr = class extends wf {
  constructor(e) {
    super(), yf(this, e, null, qf, Sf, {});
  }
};
const {
  SvelteComponent: K2,
  append: Z2,
  attr: G2,
  detach: J2,
  init: Q2,
  insert: x2,
  noop: $2,
  safe_not_equal: ev,
  svg_element: tv
} = window.__gradio__svelte__internal, {
  SvelteComponent: nv,
  append: iv,
  attr: lv,
  detach: ov,
  init: sv,
  insert: av,
  noop: rv,
  safe_not_equal: cv,
  svg_element: _v
} = window.__gradio__svelte__internal, {
  SvelteComponent: zf,
  append: Df,
  attr: mi,
  detach: Bf,
  init: Mf,
  insert: Ef,
  noop: $l,
  safe_not_equal: Lf,
  svg_element: Ws
} = window.__gradio__svelte__internal;
function Af(i) {
  let e, t;
  return {
    c() {
      e = Ws("svg"), t = Ws("path"), mi(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), mi(t, "fill", "currentColor"), mi(e, "id", "icon"), mi(e, "xmlns", "http://www.w3.org/2000/svg"), mi(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      Ef(n, e, l), Df(e, t);
    },
    p: $l,
    i: $l,
    o: $l,
    d(n) {
      n && Bf(e);
    }
  };
}
class Wf extends zf {
  constructor(e) {
    super(), Mf(this, e, null, Af, Lf, {});
  }
}
const {
  SvelteComponent: uv,
  append: fv,
  attr: dv,
  detach: hv,
  init: mv,
  insert: gv,
  noop: bv,
  safe_not_equal: pv,
  svg_element: vv
} = window.__gradio__svelte__internal, {
  SvelteComponent: wv,
  append: kv,
  attr: yv,
  detach: Cv,
  init: Sv,
  insert: qv,
  noop: zv,
  safe_not_equal: Dv,
  svg_element: Bv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Mv,
  append: Ev,
  attr: Lv,
  detach: Av,
  init: Wv,
  insert: Rv,
  noop: Xv,
  safe_not_equal: Yv,
  svg_element: Iv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Rf,
  append: Xf,
  attr: Un,
  detach: Yf,
  init: If,
  insert: Hf,
  noop: eo,
  safe_not_equal: Tf,
  svg_element: Rs
} = window.__gradio__svelte__internal;
function jf(i) {
  let e, t;
  return {
    c() {
      e = Rs("svg"), t = Rs("path"), Un(t, "fill", "currentColor"), Un(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Un(e, "xmlns", "http://www.w3.org/2000/svg"), Un(e, "width", "100%"), Un(e, "height", "100%"), Un(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      Hf(n, e, l), Xf(e, t);
    },
    p: eo,
    i: eo,
    o: eo,
    d(n) {
      n && Yf(e);
    }
  };
}
class Ff extends Rf {
  constructor(e) {
    super(), If(this, e, null, jf, Tf, {});
  }
}
const {
  SvelteComponent: Of,
  append: Pf,
  attr: Vn,
  detach: Uf,
  init: Vf,
  insert: Nf,
  noop: to,
  safe_not_equal: Kf,
  svg_element: Xs
} = window.__gradio__svelte__internal;
function Zf(i) {
  let e, t;
  return {
    c() {
      e = Xs("svg"), t = Xs("path"), Vn(t, "d", "M5 8l4 4 4-4z"), Vn(e, "class", "dropdown-arrow svelte-145leq6"), Vn(e, "xmlns", "http://www.w3.org/2000/svg"), Vn(e, "width", "100%"), Vn(e, "height", "100%"), Vn(e, "viewBox", "0 0 18 18");
    },
    m(n, l) {
      Nf(n, e, l), Pf(e, t);
    },
    p: to,
    i: to,
    o: to,
    d(n) {
      n && Uf(e);
    }
  };
}
class rs extends Of {
  constructor(e) {
    super(), Vf(this, e, null, Zf, Kf, {});
  }
}
const {
  SvelteComponent: Hv,
  append: Tv,
  attr: jv,
  detach: Fv,
  init: Ov,
  insert: Pv,
  noop: Uv,
  safe_not_equal: Vv,
  svg_element: Nv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Kv,
  append: Zv,
  attr: Gv,
  detach: Jv,
  init: Qv,
  insert: xv,
  noop: $v,
  safe_not_equal: ew,
  svg_element: tw
} = window.__gradio__svelte__internal, {
  SvelteComponent: nw,
  append: iw,
  attr: lw,
  detach: ow,
  init: sw,
  insert: aw,
  noop: rw,
  safe_not_equal: cw,
  svg_element: _w
} = window.__gradio__svelte__internal, {
  SvelteComponent: uw,
  append: fw,
  attr: dw,
  detach: hw,
  init: mw,
  insert: gw,
  noop: bw,
  safe_not_equal: pw,
  svg_element: vw
} = window.__gradio__svelte__internal, {
  SvelteComponent: ww,
  append: kw,
  attr: yw,
  detach: Cw,
  init: Sw,
  insert: qw,
  noop: zw,
  safe_not_equal: Dw,
  svg_element: Bw
} = window.__gradio__svelte__internal, {
  SvelteComponent: Mw,
  append: Ew,
  attr: Lw,
  detach: Aw,
  init: Ww,
  insert: Rw,
  noop: Xw,
  safe_not_equal: Yw,
  svg_element: Iw
} = window.__gradio__svelte__internal, {
  SvelteComponent: Hw,
  append: Tw,
  attr: jw,
  detach: Fw,
  init: Ow,
  insert: Pw,
  noop: Uw,
  safe_not_equal: Vw,
  svg_element: Nw
} = window.__gradio__svelte__internal, {
  SvelteComponent: Gf,
  append: no,
  attr: pe,
  detach: Jf,
  init: Qf,
  insert: xf,
  noop: io,
  safe_not_equal: $f,
  svg_element: Pi
} = window.__gradio__svelte__internal;
function ed(i) {
  let e, t, n, l;
  return {
    c() {
      e = Pi("svg"), t = Pi("rect"), n = Pi("circle"), l = Pi("polyline"), pe(t, "x", "3"), pe(t, "y", "3"), pe(t, "width", "18"), pe(t, "height", "18"), pe(t, "rx", "2"), pe(t, "ry", "2"), pe(n, "cx", "8.5"), pe(n, "cy", "8.5"), pe(n, "r", "1.5"), pe(l, "points", "21 15 16 10 5 21"), pe(e, "xmlns", "http://www.w3.org/2000/svg"), pe(e, "width", "100%"), pe(e, "height", "100%"), pe(e, "viewBox", "0 0 24 24"), pe(e, "fill", "none"), pe(e, "stroke", "currentColor"), pe(e, "stroke-width", "1.5"), pe(e, "stroke-linecap", "round"), pe(e, "stroke-linejoin", "round"), pe(e, "class", "feather feather-image");
    },
    m(o, s) {
      xf(o, e, s), no(e, t), no(e, n), no(e, l);
    },
    p: io,
    i: io,
    o: io,
    d(o) {
      o && Jf(e);
    }
  };
}
let Yr = class extends Gf {
  constructor(e) {
    super(), Qf(this, e, null, ed, $f, {});
  }
};
const {
  SvelteComponent: td,
  append: nd,
  attr: Ui,
  detach: id,
  init: ld,
  insert: od,
  noop: lo,
  safe_not_equal: sd,
  svg_element: Ys
} = window.__gradio__svelte__internal;
function ad(i) {
  let e, t;
  return {
    c() {
      e = Ys("svg"), t = Ys("path"), Ui(t, "fill", "currentColor"), Ui(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Ui(e, "xmlns", "http://www.w3.org/2000/svg"), Ui(e, "viewBox", "0 0 24 24");
    },
    m(n, l) {
      od(n, e, l), nd(e, t);
    },
    p: lo,
    i: lo,
    o: lo,
    d(n) {
      n && id(e);
    }
  };
}
class Ir extends td {
  constructor(e) {
    super(), ld(this, e, null, ad, sd, {});
  }
}
const {
  SvelteComponent: Zw,
  append: Gw,
  attr: Jw,
  detach: Qw,
  init: xw,
  insert: $w,
  noop: e3,
  safe_not_equal: t3,
  svg_element: n3
} = window.__gradio__svelte__internal, {
  SvelteComponent: i3,
  append: l3,
  attr: o3,
  detach: s3,
  init: a3,
  insert: r3,
  noop: c3,
  safe_not_equal: _3,
  svg_element: u3
} = window.__gradio__svelte__internal, {
  SvelteComponent: f3,
  append: d3,
  attr: h3,
  detach: m3,
  init: g3,
  insert: b3,
  noop: p3,
  safe_not_equal: v3,
  svg_element: w3
} = window.__gradio__svelte__internal, {
  SvelteComponent: k3,
  append: y3,
  attr: C3,
  detach: S3,
  init: q3,
  insert: z3,
  noop: D3,
  safe_not_equal: B3,
  svg_element: M3
} = window.__gradio__svelte__internal, {
  SvelteComponent: E3,
  append: L3,
  attr: A3,
  detach: W3,
  init: R3,
  insert: X3,
  noop: Y3,
  safe_not_equal: I3,
  svg_element: H3
} = window.__gradio__svelte__internal, {
  SvelteComponent: rd,
  append: Vi,
  attr: ve,
  detach: cd,
  init: _d,
  insert: ud,
  noop: oo,
  safe_not_equal: fd,
  svg_element: gi
} = window.__gradio__svelte__internal;
function dd(i) {
  let e, t, n, l, o;
  return {
    c() {
      e = gi("svg"), t = gi("path"), n = gi("path"), l = gi("line"), o = gi("line"), ve(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), ve(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), ve(l, "x1", "12"), ve(l, "y1", "19"), ve(l, "x2", "12"), ve(l, "y2", "23"), ve(o, "x1", "8"), ve(o, "y1", "23"), ve(o, "x2", "16"), ve(o, "y2", "23"), ve(e, "xmlns", "http://www.w3.org/2000/svg"), ve(e, "width", "100%"), ve(e, "height", "100%"), ve(e, "viewBox", "0 0 24 24"), ve(e, "fill", "none"), ve(e, "stroke", "currentColor"), ve(e, "stroke-width", "2"), ve(e, "stroke-linecap", "round"), ve(e, "stroke-linejoin", "round"), ve(e, "class", "feather feather-mic");
    },
    m(s, r) {
      ud(s, e, r), Vi(e, t), Vi(e, n), Vi(e, l), Vi(e, o);
    },
    p: oo,
    i: oo,
    o: oo,
    d(s) {
      s && cd(e);
    }
  };
}
class hd extends rd {
  constructor(e) {
    super(), _d(this, e, null, dd, fd, {});
  }
}
const {
  SvelteComponent: T3,
  append: j3,
  attr: F3,
  detach: O3,
  init: P3,
  insert: U3,
  noop: V3,
  safe_not_equal: N3,
  svg_element: K3
} = window.__gradio__svelte__internal, {
  SvelteComponent: Z3,
  append: G3,
  attr: J3,
  detach: Q3,
  init: x3,
  insert: $3,
  noop: e4,
  safe_not_equal: t4,
  svg_element: n4
} = window.__gradio__svelte__internal, {
  SvelteComponent: i4,
  append: l4,
  attr: o4,
  detach: s4,
  init: a4,
  insert: r4,
  noop: c4,
  safe_not_equal: _4,
  svg_element: u4
} = window.__gradio__svelte__internal, {
  SvelteComponent: f4,
  append: d4,
  attr: h4,
  detach: m4,
  init: g4,
  insert: b4,
  noop: p4,
  safe_not_equal: v4,
  svg_element: w4
} = window.__gradio__svelte__internal, {
  SvelteComponent: k4,
  append: y4,
  attr: C4,
  detach: S4,
  init: q4,
  insert: z4,
  noop: D4,
  safe_not_equal: B4,
  svg_element: M4
} = window.__gradio__svelte__internal, {
  SvelteComponent: E4,
  append: L4,
  attr: A4,
  detach: W4,
  init: R4,
  insert: X4,
  noop: Y4,
  safe_not_equal: I4,
  svg_element: H4
} = window.__gradio__svelte__internal, {
  SvelteComponent: md,
  append: Is,
  attr: rt,
  detach: gd,
  init: bd,
  insert: pd,
  noop: so,
  safe_not_equal: vd,
  set_style: wd,
  svg_element: ao
} = window.__gradio__svelte__internal;
function kd(i) {
  let e, t, n;
  return {
    c() {
      e = ao("svg"), t = ao("polyline"), n = ao("path"), rt(t, "points", "1 4 1 10 7 10"), rt(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), rt(e, "xmlns", "http://www.w3.org/2000/svg"), rt(e, "width", "100%"), rt(e, "height", "100%"), rt(e, "viewBox", "0 0 24 24"), rt(e, "fill", "none"), rt(e, "stroke", "currentColor"), rt(e, "stroke-width", "2"), rt(e, "stroke-linecap", "round"), rt(e, "stroke-linejoin", "round"), rt(e, "class", "feather feather-rotate-ccw"), wd(e, "transform", "rotateY(180deg)");
    },
    m(l, o) {
      pd(l, e, o), Is(e, t), Is(e, n);
    },
    p: so,
    i: so,
    o: so,
    d(l) {
      l && gd(e);
    }
  };
}
class yd extends md {
  constructor(e) {
    super(), bd(this, e, null, kd, vd, {});
  }
}
const {
  SvelteComponent: T4,
  append: j4,
  attr: F4,
  detach: O4,
  init: P4,
  insert: U4,
  noop: V4,
  safe_not_equal: N4,
  svg_element: K4
} = window.__gradio__svelte__internal, {
  SvelteComponent: Z4,
  append: G4,
  attr: J4,
  detach: Q4,
  init: x4,
  insert: $4,
  noop: e5,
  safe_not_equal: t5,
  svg_element: n5
} = window.__gradio__svelte__internal, {
  SvelteComponent: i5,
  append: l5,
  attr: o5,
  detach: s5,
  init: a5,
  insert: r5,
  noop: c5,
  safe_not_equal: _5,
  svg_element: u5
} = window.__gradio__svelte__internal, {
  SvelteComponent: f5,
  append: d5,
  attr: h5,
  detach: m5,
  init: g5,
  insert: b5,
  noop: p5,
  safe_not_equal: v5,
  svg_element: w5
} = window.__gradio__svelte__internal, {
  SvelteComponent: k5,
  append: y5,
  attr: C5,
  detach: S5,
  init: q5,
  insert: z5,
  noop: D5,
  safe_not_equal: B5,
  svg_element: M5
} = window.__gradio__svelte__internal, {
  SvelteComponent: Cd,
  append: Sd,
  attr: Ve,
  detach: qd,
  init: zd,
  insert: Dd,
  noop: ro,
  safe_not_equal: Bd,
  svg_element: Hs
} = window.__gradio__svelte__internal;
function Md(i) {
  let e, t;
  return {
    c() {
      e = Hs("svg"), t = Hs("rect"), Ve(t, "x", "3"), Ve(t, "y", "3"), Ve(t, "width", "18"), Ve(t, "height", "18"), Ve(t, "rx", "2"), Ve(t, "ry", "2"), Ve(e, "xmlns", "http://www.w3.org/2000/svg"), Ve(e, "width", "100%"), Ve(e, "height", "100%"), Ve(e, "viewBox", "0 0 24 24"), Ve(e, "stroke-width", "1.5"), Ve(e, "stroke-linecap", "round"), Ve(e, "stroke-linejoin", "round"), Ve(e, "class", "feather feather-square");
    },
    m(n, l) {
      Dd(n, e, l), Sd(e, t);
    },
    p: ro,
    i: ro,
    o: ro,
    d(n) {
      n && qd(e);
    }
  };
}
class Ed extends Cd {
  constructor(e) {
    super(), zd(this, e, null, Md, Bd, {});
  }
}
const {
  SvelteComponent: E5,
  append: L5,
  attr: A5,
  detach: W5,
  init: R5,
  insert: X5,
  noop: Y5,
  safe_not_equal: I5,
  svg_element: H5
} = window.__gradio__svelte__internal, {
  SvelteComponent: T5,
  append: j5,
  attr: F5,
  detach: O5,
  init: P5,
  insert: U5,
  noop: V5,
  safe_not_equal: N5,
  svg_element: K5
} = window.__gradio__svelte__internal, {
  SvelteComponent: Z5,
  append: G5,
  attr: J5,
  detach: Q5,
  init: x5,
  insert: $5,
  noop: e6,
  safe_not_equal: t6,
  svg_element: n6,
  text: i6
} = window.__gradio__svelte__internal, {
  SvelteComponent: l6,
  append: o6,
  attr: s6,
  detach: a6,
  init: r6,
  insert: c6,
  noop: _6,
  safe_not_equal: u6,
  svg_element: f6
} = window.__gradio__svelte__internal, {
  SvelteComponent: d6,
  append: h6,
  attr: m6,
  detach: g6,
  init: b6,
  insert: p6,
  noop: v6,
  safe_not_equal: w6,
  svg_element: k6
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ld,
  append: Ts,
  attr: ct,
  detach: Ad,
  init: Wd,
  insert: Rd,
  noop: co,
  safe_not_equal: Xd,
  svg_element: _o
} = window.__gradio__svelte__internal;
function Yd(i) {
  let e, t, n;
  return {
    c() {
      e = _o("svg"), t = _o("polyline"), n = _o("path"), ct(t, "points", "1 4 1 10 7 10"), ct(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), ct(e, "xmlns", "http://www.w3.org/2000/svg"), ct(e, "width", "100%"), ct(e, "height", "100%"), ct(e, "viewBox", "0 0 24 24"), ct(e, "fill", "none"), ct(e, "stroke", "currentColor"), ct(e, "stroke-width", "2"), ct(e, "stroke-linecap", "round"), ct(e, "stroke-linejoin", "round"), ct(e, "class", "feather feather-rotate-ccw");
    },
    m(l, o) {
      Rd(l, e, o), Ts(e, t), Ts(e, n);
    },
    p: co,
    i: co,
    o: co,
    d(l) {
      l && Ad(e);
    }
  };
}
class Id extends Ld {
  constructor(e) {
    super(), Wd(this, e, null, Yd, Xd, {});
  }
}
const {
  SvelteComponent: Hd,
  append: uo,
  attr: Ee,
  detach: Td,
  init: jd,
  insert: Fd,
  noop: fo,
  safe_not_equal: Od,
  svg_element: Ni
} = window.__gradio__svelte__internal;
function Pd(i) {
  let e, t, n, l;
  return {
    c() {
      e = Ni("svg"), t = Ni("path"), n = Ni("polyline"), l = Ni("line"), Ee(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), Ee(n, "points", "17 8 12 3 7 8"), Ee(l, "x1", "12"), Ee(l, "y1", "3"), Ee(l, "x2", "12"), Ee(l, "y2", "15"), Ee(e, "xmlns", "http://www.w3.org/2000/svg"), Ee(e, "width", "90%"), Ee(e, "height", "90%"), Ee(e, "viewBox", "0 0 24 24"), Ee(e, "fill", "none"), Ee(e, "stroke", "currentColor"), Ee(e, "stroke-width", "2"), Ee(e, "stroke-linecap", "round"), Ee(e, "stroke-linejoin", "round"), Ee(e, "class", "feather feather-upload");
    },
    m(o, s) {
      Fd(o, e, s), uo(e, t), uo(e, n), uo(e, l);
    },
    p: fo,
    i: fo,
    o: fo,
    d(o) {
      o && Td(e);
    }
  };
}
let Hr = class extends Hd {
  constructor(e) {
    super(), jd(this, e, null, Pd, Od, {});
  }
};
const {
  SvelteComponent: C6,
  append: S6,
  attr: q6,
  detach: z6,
  init: D6,
  insert: B6,
  noop: M6,
  safe_not_equal: E6,
  svg_element: L6
} = window.__gradio__svelte__internal, {
  SvelteComponent: A6,
  append: W6,
  attr: R6,
  detach: X6,
  init: Y6,
  insert: I6,
  noop: H6,
  safe_not_equal: T6,
  svg_element: j6,
  text: F6
} = window.__gradio__svelte__internal, {
  SvelteComponent: O6,
  append: P6,
  attr: U6,
  detach: V6,
  init: N6,
  insert: K6,
  noop: Z6,
  safe_not_equal: G6,
  svg_element: J6,
  text: Q6
} = window.__gradio__svelte__internal, {
  SvelteComponent: x6,
  append: $6,
  attr: ek,
  detach: tk,
  init: nk,
  insert: ik,
  noop: lk,
  safe_not_equal: ok,
  svg_element: sk,
  text: ak
} = window.__gradio__svelte__internal, {
  SvelteComponent: rk,
  append: ck,
  attr: _k,
  detach: uk,
  init: fk,
  insert: dk,
  noop: hk,
  safe_not_equal: mk,
  svg_element: gk
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ud,
  append: js,
  attr: on,
  detach: Vd,
  init: Nd,
  insert: Kd,
  noop: ho,
  safe_not_equal: Zd,
  svg_element: mo
} = window.__gradio__svelte__internal;
function Gd(i) {
  let e, t, n;
  return {
    c() {
      e = mo("svg"), t = mo("path"), n = mo("path"), on(t, "fill", "currentColor"), on(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), on(n, "fill", "currentColor"), on(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), on(e, "xmlns", "http://www.w3.org/2000/svg"), on(e, "width", "100%"), on(e, "height", "100%"), on(e, "viewBox", "0 0 24 24");
    },
    m(l, o) {
      Kd(l, e, o), js(e, t), js(e, n);
    },
    p: ho,
    i: ho,
    o: ho,
    d(l) {
      l && Vd(e);
    }
  };
}
let Tr = class extends Ud {
  constructor(e) {
    super(), Nd(this, e, null, Gd, Zd, {});
  }
};
const Jd = [
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
], Fs = {
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
Jd.reduce((i, { color: e, primary: t, secondary: n }) => ({
  ...i,
  [e]: {
    primary: Fs[e][t],
    secondary: Fs[e][n]
  }
}), {});
class ul extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function Qd(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new ul("Must be on Spaces to share.");
  let t, n, l;
  t = xd(i), n = i.split(";")[0].split(":")[1], l = "file" + n.split("/")[1];
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
      const c = await s.json();
      throw new ul(`Upload failed: ${c.error}`);
    }
    throw new ul("Upload failed.");
  }
  return await s.text();
}
function xd(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), l = n.length, o = new Uint8Array(l); l--; )
    o[l] = n.charCodeAt(l);
  return new Blob([o], { type: t });
}
const {
  SvelteComponent: $d,
  create_component: e1,
  destroy_component: t1,
  init: n1,
  mount_component: i1,
  safe_not_equal: l1,
  transition_in: o1,
  transition_out: s1
} = window.__gradio__svelte__internal, { createEventDispatcher: a1 } = window.__gradio__svelte__internal;
function r1(i) {
  let e, t;
  return e = new El({
    props: {
      Icon: Wf,
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
      e1(e.$$.fragment);
    },
    m(n, l) {
      i1(e, n, l), t = !0;
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
      t || (o1(e.$$.fragment, n), t = !0);
    },
    o(n) {
      s1(e.$$.fragment, n), t = !1;
    },
    d(n) {
      t1(e, n);
    }
  };
}
function c1(i, e, t) {
  const n = a1();
  let { formatter: l } = e, { value: o } = e, { i18n: s } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const c = await l(o);
      n("share", { description: c });
    } catch (c) {
      console.error(c);
      let _ = c instanceof ul ? c.message : "Share failed.";
      n("error", _);
    } finally {
      t(3, r = !1);
    }
  };
  return i.$$set = (c) => {
    "formatter" in c && t(0, l = c.formatter), "value" in c && t(1, o = c.value), "i18n" in c && t(2, s = c.i18n);
  }, [l, o, s, r, n, a];
}
class _1 extends $d {
  constructor(e) {
    super(), n1(this, e, c1, r1, l1, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: u1,
  append: Bn,
  attr: Po,
  check_outros: f1,
  create_component: jr,
  destroy_component: Fr,
  detach: fl,
  element: Uo,
  group_outros: d1,
  init: h1,
  insert: dl,
  mount_component: Or,
  safe_not_equal: m1,
  set_data: Vo,
  space: No,
  text: qi,
  toggle_class: Os,
  transition_in: gl,
  transition_out: bl
} = window.__gradio__svelte__internal;
function g1(i) {
  let e, t;
  return e = new Hr({}), {
    c() {
      jr(e.$$.fragment);
    },
    m(n, l) {
      Or(e, n, l), t = !0;
    },
    i(n) {
      t || (gl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      bl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Fr(e, n);
    }
  };
}
function b1(i) {
  let e, t;
  return e = new Ir({}), {
    c() {
      jr(e.$$.fragment);
    },
    m(n, l) {
      Or(e, n, l), t = !0;
    },
    i(n) {
      t || (gl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      bl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Fr(e, n);
    }
  };
}
function Ps(i) {
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
      e = Uo("span"), t = qi("- "), l = qi(n), o = qi(" -"), s = No(), a = qi(r), Po(e, "class", "or svelte-kzcjhc");
    },
    m(c, _) {
      dl(c, e, _), Bn(e, t), Bn(e, l), Bn(e, o), dl(c, s, _), dl(c, a, _);
    },
    p(c, _) {
      _ & /*i18n*/
      2 && n !== (n = /*i18n*/
      c[1]("common.or") + "") && Vo(l, n), _ & /*message, i18n*/
      6 && r !== (r = /*message*/
      (c[2] || /*i18n*/
      c[1]("upload_text.click_to_upload")) + "") && Vo(a, r);
    },
    d(c) {
      c && (fl(e), fl(s), fl(a));
    }
  };
}
function p1(i) {
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
  ), r, a, c;
  const _ = [b1, g1], f = [];
  function d(b, u) {
    return (
      /*type*/
      b[0] === "clipboard" ? 0 : 1
    );
  }
  n = d(i), l = f[n] = _[n](i);
  let h = (
    /*mode*/
    i[3] !== "short" && Ps(i)
  );
  return {
    c() {
      e = Uo("div"), t = Uo("span"), l.c(), o = No(), r = qi(s), a = No(), h && h.c(), Po(t, "class", "icon-wrap svelte-kzcjhc"), Os(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), Po(e, "class", "wrap svelte-kzcjhc");
    },
    m(b, u) {
      dl(b, e, u), Bn(e, t), f[n].m(t, null), Bn(e, o), Bn(e, r), Bn(e, a), h && h.m(e, null), c = !0;
    },
    p(b, [u]) {
      let m = n;
      n = d(b), n !== m && (d1(), bl(f[m], 1, 1, () => {
        f[m] = null;
      }), f1(), l = f[n], l || (l = f[n] = _[n](b), l.c()), gl(l, 1), l.m(t, null)), (!c || u & /*hovered*/
      16) && Os(
        t,
        "hovered",
        /*hovered*/
        b[4]
      ), (!c || u & /*i18n, type*/
      3) && s !== (s = /*i18n*/
      b[1](
        /*defs*/
        b[5][
          /*type*/
          b[0]
        ] || /*defs*/
        b[5].file
      ) + "") && Vo(r, s), /*mode*/
      b[3] !== "short" ? h ? h.p(b, u) : (h = Ps(b), h.c(), h.m(e, null)) : h && (h.d(1), h = null);
    },
    i(b) {
      c || (gl(l), c = !0);
    },
    o(b) {
      bl(l), c = !1;
    },
    d(b) {
      b && fl(e), f[n].d(), h && h.d();
    }
  };
}
function v1(i, e, t) {
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
  return i.$$set = (c) => {
    "type" in c && t(0, n = c.type), "i18n" in c && t(1, l = c.i18n), "message" in c && t(2, o = c.message), "mode" in c && t(3, s = c.mode), "hovered" in c && t(4, r = c.hovered);
  }, [n, l, o, s, r, a];
}
class Pr extends u1 {
  constructor(e) {
    super(), h1(this, e, v1, p1, m1, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: pk,
  attr: vk,
  create_slot: wk,
  detach: kk,
  element: yk,
  get_all_dirty_from_scope: Ck,
  get_slot_changes: Sk,
  init: qk,
  insert: zk,
  safe_not_equal: Dk,
  toggle_class: Bk,
  transition_in: Mk,
  transition_out: Ek,
  update_slot_base: Lk
} = window.__gradio__svelte__internal, {
  SvelteComponent: w1,
  append: go,
  attr: Tt,
  check_outros: zi,
  create_component: Ll,
  destroy_component: Al,
  detach: si,
  element: Yi,
  empty: k1,
  group_outros: Di,
  init: y1,
  insert: ai,
  listen: Wl,
  mount_component: Rl,
  safe_not_equal: C1,
  space: bo,
  toggle_class: pn,
  transition_in: qe,
  transition_out: Ke
} = window.__gradio__svelte__internal;
function Us(i) {
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
  ), c, _ = t && Vs(i), f = l && Ns(i), d = s && Ks(i), h = a && Zs(i);
  return {
    c() {
      e = Yi("span"), _ && _.c(), n = bo(), f && f.c(), o = bo(), d && d.c(), r = bo(), h && h.c(), Tt(e, "class", "source-selection svelte-1jp3vgd"), Tt(e, "data-testid", "source-select");
    },
    m(b, u) {
      ai(b, e, u), _ && _.m(e, null), go(e, n), f && f.m(e, null), go(e, o), d && d.m(e, null), go(e, r), h && h.m(e, null), c = !0;
    },
    p(b, u) {
      u & /*sources*/
      2 && (t = /*sources*/
      b[1].includes("upload")), t ? _ ? (_.p(b, u), u & /*sources*/
      2 && qe(_, 1)) : (_ = Vs(b), _.c(), qe(_, 1), _.m(e, n)) : _ && (Di(), Ke(_, 1, 1, () => {
        _ = null;
      }), zi()), u & /*sources*/
      2 && (l = /*sources*/
      b[1].includes("microphone")), l ? f ? (f.p(b, u), u & /*sources*/
      2 && qe(f, 1)) : (f = Ns(b), f.c(), qe(f, 1), f.m(e, o)) : f && (Di(), Ke(f, 1, 1, () => {
        f = null;
      }), zi()), u & /*sources*/
      2 && (s = /*sources*/
      b[1].includes("webcam")), s ? d ? (d.p(b, u), u & /*sources*/
      2 && qe(d, 1)) : (d = Ks(b), d.c(), qe(d, 1), d.m(e, r)) : d && (Di(), Ke(d, 1, 1, () => {
        d = null;
      }), zi()), u & /*sources*/
      2 && (a = /*sources*/
      b[1].includes("clipboard")), a ? h ? (h.p(b, u), u & /*sources*/
      2 && qe(h, 1)) : (h = Zs(b), h.c(), qe(h, 1), h.m(e, null)) : h && (Di(), Ke(h, 1, 1, () => {
        h = null;
      }), zi());
    },
    i(b) {
      c || (qe(_), qe(f), qe(d), qe(h), c = !0);
    },
    o(b) {
      Ke(_), Ke(f), Ke(d), Ke(h), c = !1;
    },
    d(b) {
      b && si(e), _ && _.d(), f && f.d(), d && d.d(), h && h.d();
    }
  };
}
function Vs(i) {
  let e, t, n, l, o;
  return t = new Hr({}), {
    c() {
      e = Yi("button"), Ll(t.$$.fragment), Tt(e, "class", "icon svelte-1jp3vgd"), Tt(e, "aria-label", "Upload file"), pn(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(s, r) {
      ai(s, e, r), Rl(t, e, null), n = !0, l || (o = Wl(
        e,
        "click",
        /*click_handler*/
        i[6]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && pn(
        e,
        "selected",
        /*active_source*/
        s[0] === "upload" || !/*active_source*/
        s[0]
      );
    },
    i(s) {
      n || (qe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ke(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && si(e), Al(t), l = !1, o();
    }
  };
}
function Ns(i) {
  let e, t, n, l, o;
  return t = new hd({}), {
    c() {
      e = Yi("button"), Ll(t.$$.fragment), Tt(e, "class", "icon svelte-1jp3vgd"), Tt(e, "aria-label", "Record audio"), pn(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(s, r) {
      ai(s, e, r), Rl(t, e, null), n = !0, l || (o = Wl(
        e,
        "click",
        /*click_handler_1*/
        i[7]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && pn(
        e,
        "selected",
        /*active_source*/
        s[0] === "microphone"
      );
    },
    i(s) {
      n || (qe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ke(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && si(e), Al(t), l = !1, o();
    }
  };
}
function Ks(i) {
  let e, t, n, l, o;
  return t = new Tr({}), {
    c() {
      e = Yi("button"), Ll(t.$$.fragment), Tt(e, "class", "icon svelte-1jp3vgd"), Tt(e, "aria-label", "Capture from camera"), pn(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(s, r) {
      ai(s, e, r), Rl(t, e, null), n = !0, l || (o = Wl(
        e,
        "click",
        /*click_handler_2*/
        i[8]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && pn(
        e,
        "selected",
        /*active_source*/
        s[0] === "webcam"
      );
    },
    i(s) {
      n || (qe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ke(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && si(e), Al(t), l = !1, o();
    }
  };
}
function Zs(i) {
  let e, t, n, l, o;
  return t = new Ir({}), {
    c() {
      e = Yi("button"), Ll(t.$$.fragment), Tt(e, "class", "icon svelte-1jp3vgd"), Tt(e, "aria-label", "Paste from clipboard"), pn(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(s, r) {
      ai(s, e, r), Rl(t, e, null), n = !0, l || (o = Wl(
        e,
        "click",
        /*click_handler_3*/
        i[9]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && pn(
        e,
        "selected",
        /*active_source*/
        s[0] === "clipboard"
      );
    },
    i(s) {
      n || (qe(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Ke(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && si(e), Al(t), l = !1, o();
    }
  };
}
function S1(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && Us(i)
  );
  return {
    c() {
      n && n.c(), e = k1();
    },
    m(l, o) {
      n && n.m(l, o), ai(l, e, o), t = !0;
    },
    p(l, [o]) {
      /*unique_sources*/
      l[2].length > 1 ? n ? (n.p(l, o), o & /*unique_sources*/
      4 && qe(n, 1)) : (n = Us(l), n.c(), qe(n, 1), n.m(e.parentNode, e)) : n && (Di(), Ke(n, 1, 1, () => {
        n = null;
      }), zi());
    },
    i(l) {
      t || (qe(n), t = !0);
    },
    o(l) {
      Ke(n), t = !1;
    },
    d(l) {
      l && si(e), n && n.d(l);
    }
  };
}
function q1(i, e, t) {
  let n;
  var l = this && this.__awaiter || function(b, u, m, g) {
    function w(p) {
      return p instanceof m ? p : new m(function(y) {
        y(p);
      });
    }
    return new (m || (m = Promise))(function(p, y) {
      function z(q) {
        try {
          S(g.next(q));
        } catch (M) {
          y(M);
        }
      }
      function k(q) {
        try {
          S(g.throw(q));
        } catch (M) {
          y(M);
        }
      }
      function S(q) {
        q.done ? p(q.value) : w(q.value).then(z, k);
      }
      S((g = g.apply(b, u || [])).next());
    });
  };
  let { sources: o } = e, { active_source: s } = e, { handle_clear: r = () => {
  } } = e, { handle_select: a = () => {
  } } = e;
  function c(b) {
    return l(this, void 0, void 0, function* () {
      r(), t(0, s = b), a(b);
    });
  }
  const _ = () => c("upload"), f = () => c("microphone"), d = () => c("webcam"), h = () => c("clipboard");
  return i.$$set = (b) => {
    "sources" in b && t(1, o = b.sources), "active_source" in b && t(0, s = b.active_source), "handle_clear" in b && t(4, r = b.handle_clear), "handle_select" in b && t(5, a = b.handle_select);
  }, i.$$.update = () => {
    i.$$.dirty & /*sources*/
    2 && t(2, n = [...new Set(o)]);
  }, [
    s,
    o,
    n,
    c,
    r,
    a,
    _,
    f,
    d,
    h
  ];
}
class z1 extends w1 {
  constructor(e) {
    super(), y1(this, e, q1, S1, C1, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function xn(i) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; i > 1e3 && t < e.length - 1; )
    i /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(i) ? i : i.toFixed(1)) + n;
}
function hl() {
}
const D1 = (i) => i;
function Gs(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [i, "px"];
}
const Ur = typeof window < "u";
let Js = Ur ? () => window.performance.now() : () => Date.now(), Vr = Ur ? (i) => requestAnimationFrame(i) : hl;
const oi = /* @__PURE__ */ new Set();
function Nr(i) {
  oi.forEach((e) => {
    e.c(i) || (oi.delete(e), e.f());
  }), oi.size !== 0 && Vr(Nr);
}
function B1(i) {
  let e;
  return oi.size === 0 && Vr(Nr), { promise: new Promise((t) => {
    oi.add(e = { c: i, f: t });
  }), abort() {
    oi.delete(e);
  } };
}
function M1(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function E1(i, { delay: e = 0, duration: t = 400, easing: n = D1 } = {}) {
  const l = +getComputedStyle(i).opacity;
  return { delay: e, duration: t, easing: n, css: (o) => "opacity: " + o * l };
}
function Qs(i, { delay: e = 0, duration: t = 400, easing: n = M1, x: l = 0, y: o = 0, opacity: s = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, c = r.transform === "none" ? "" : r.transform, _ = a * (1 - s), [f, d] = Gs(l), [h, b] = Gs(o);
  return { delay: e, duration: t, easing: n, css: (u, m) => `
			transform: ${c} translate(${(1 - u) * f}${d}, ${(1 - u) * h}${b});
			opacity: ${a - _ * m}` };
}
const Nn = [];
function L1(i, e = hl) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function l(s) {
    if (a = s, ((r = i) != r ? a == a : r !== a || r && typeof r == "object" || typeof r == "function") && (i = s, t)) {
      const c = !Nn.length;
      for (const _ of n) _[1](), Nn.push(_, i);
      if (c) {
        for (let _ = 0; _ < Nn.length; _ += 2) Nn[_][0](Nn[_ + 1]);
        Nn.length = 0;
      }
    }
    var r, a;
  }
  function o(s) {
    l(s(i));
  }
  return { set: l, update: o, subscribe: function(s, r = hl) {
    const a = [s, r];
    return n.add(a), n.size === 1 && (t = e(l, o) || hl), s(i), () => {
      n.delete(a), n.size === 0 && t && (t(), t = null);
    };
  } };
}
function xs(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function Ko(i, e, t, n) {
  if (typeof t == "number" || xs(t)) {
    const l = n - t, o = (t - e) / (i.dt || 1 / 60), s = (o + (i.opts.stiffness * l - i.opts.damping * o) * i.inv_mass) * i.dt;
    return Math.abs(s) < i.opts.precision && Math.abs(l) < i.opts.precision ? n : (i.settled = !1, xs(t) ? new Date(t.getTime() + s) : t + s);
  }
  if (Array.isArray(t)) return t.map((l, o) => Ko(i, e[o], t[o], n[o]));
  if (typeof t == "object") {
    const l = {};
    for (const o in t) l[o] = Ko(i, e[o], t[o], n[o]);
    return l;
  }
  throw new Error(`Cannot spring ${typeof t} values`);
}
function $s(i, e = {}) {
  const t = L1(i), { stiffness: n = 0.15, damping: l = 0.8, precision: o = 0.01 } = e;
  let s, r, a, c = i, _ = i, f = 1, d = 0, h = !1;
  function b(m, g = {}) {
    _ = m;
    const w = a = {};
    return i == null || g.hard || u.stiffness >= 1 && u.damping >= 1 ? (h = !0, s = Js(), c = m, t.set(i = _), Promise.resolve()) : (g.soft && (d = 1 / (60 * (g.soft === !0 ? 0.5 : +g.soft)), f = 0), r || (s = Js(), h = !1, r = B1((p) => {
      if (h) return h = !1, r = null, !1;
      f = Math.min(f + d, 1);
      const y = { inv_mass: f, opts: u, settled: !0, dt: 60 * (p - s) / 1e3 }, z = Ko(y, c, i, _);
      return s = p, c = i, t.set(i = z), y.settled && (r = null), !y.settled;
    })), new Promise((p) => {
      r.promise.then(() => {
        w === a && p();
      });
    }));
  }
  const u = { set: b, update: (m, g) => b(m(_, i), g), subscribe: t.subscribe, stiffness: n, damping: l, precision: o };
  return u;
}
const {
  SvelteComponent: A1,
  append: vt,
  attr: te,
  component_subscribe: ea,
  detach: W1,
  element: R1,
  init: X1,
  insert: Y1,
  noop: ta,
  safe_not_equal: I1,
  set_style: Ki,
  svg_element: wt,
  toggle_class: na
} = window.__gradio__svelte__internal, { onMount: H1 } = window.__gradio__svelte__internal;
function T1(i) {
  let e, t, n, l, o, s, r, a, c, _, f, d;
  return {
    c() {
      e = R1("div"), t = wt("svg"), n = wt("g"), l = wt("path"), o = wt("path"), s = wt("path"), r = wt("path"), a = wt("g"), c = wt("path"), _ = wt("path"), f = wt("path"), d = wt("path"), te(l, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), te(l, "fill", "#FF7C00"), te(l, "fill-opacity", "0.4"), te(l, "class", "svelte-43sxxs"), te(o, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), te(o, "fill", "#FF7C00"), te(o, "class", "svelte-43sxxs"), te(s, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), te(s, "fill", "#FF7C00"), te(s, "fill-opacity", "0.4"), te(s, "class", "svelte-43sxxs"), te(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), te(r, "fill", "#FF7C00"), te(r, "class", "svelte-43sxxs"), Ki(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), te(c, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), te(c, "fill", "#FF7C00"), te(c, "fill-opacity", "0.4"), te(c, "class", "svelte-43sxxs"), te(_, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), te(_, "fill", "#FF7C00"), te(_, "class", "svelte-43sxxs"), te(f, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), te(f, "fill", "#FF7C00"), te(f, "fill-opacity", "0.4"), te(f, "class", "svelte-43sxxs"), te(d, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), te(d, "fill", "#FF7C00"), te(d, "class", "svelte-43sxxs"), Ki(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), te(t, "viewBox", "-1200 -1200 3000 3000"), te(t, "fill", "none"), te(t, "xmlns", "http://www.w3.org/2000/svg"), te(t, "class", "svelte-43sxxs"), te(e, "class", "svelte-43sxxs"), na(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(h, b) {
      Y1(h, e, b), vt(e, t), vt(t, n), vt(n, l), vt(n, o), vt(n, s), vt(n, r), vt(t, a), vt(a, c), vt(a, _), vt(a, f), vt(a, d);
    },
    p(h, [b]) {
      b & /*$top*/
      2 && Ki(n, "transform", "translate(" + /*$top*/
      h[1][0] + "px, " + /*$top*/
      h[1][1] + "px)"), b & /*$bottom*/
      4 && Ki(a, "transform", "translate(" + /*$bottom*/
      h[2][0] + "px, " + /*$bottom*/
      h[2][1] + "px)"), b & /*margin*/
      1 && na(
        e,
        "margin",
        /*margin*/
        h[0]
      );
    },
    i: ta,
    o: ta,
    d(h) {
      h && W1(e);
    }
  };
}
function j1(i, e, t) {
  let n, l;
  var o = this && this.__awaiter || function(h, b, u, m) {
    function g(w) {
      return w instanceof u ? w : new u(function(p) {
        p(w);
      });
    }
    return new (u || (u = Promise))(function(w, p) {
      function y(S) {
        try {
          k(m.next(S));
        } catch (q) {
          p(q);
        }
      }
      function z(S) {
        try {
          k(m.throw(S));
        } catch (q) {
          p(q);
        }
      }
      function k(S) {
        S.done ? w(S.value) : g(S.value).then(y, z);
      }
      k((m = m.apply(h, b || [])).next());
    });
  };
  let { margin: s = !0 } = e;
  const r = $s([0, 0]);
  ea(i, r, (h) => t(1, n = h));
  const a = $s([0, 0]);
  ea(i, a, (h) => t(2, l = h));
  let c;
  function _() {
    return o(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 140]), a.set([-125, -140])]), yield Promise.all([r.set([-125, 140]), a.set([125, -140])]), yield Promise.all([r.set([-125, 0]), a.set([125, -0])]), yield Promise.all([r.set([125, 0]), a.set([-125, 0])]);
    });
  }
  function f() {
    return o(this, void 0, void 0, function* () {
      yield _(), c || f();
    });
  }
  function d() {
    return o(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 0]), a.set([-125, 0])]), f();
    });
  }
  return H1(() => (d(), () => c = !0)), i.$$set = (h) => {
    "margin" in h && t(0, s = h.margin);
  }, [s, n, l, r, a];
}
class F1 extends A1 {
  constructor(e) {
    super(), X1(this, e, j1, T1, I1, { margin: 0 });
  }
}
const {
  SvelteComponent: O1,
  append: Mn,
  attr: Bt,
  binding_callbacks: ia,
  check_outros: Zo,
  create_component: Kr,
  create_slot: Zr,
  destroy_component: Gr,
  destroy_each: Jr,
  detach: K,
  element: Xt,
  empty: ri,
  ensure_array_like: pl,
  get_all_dirty_from_scope: Qr,
  get_slot_changes: xr,
  group_outros: Go,
  init: P1,
  insert: Z,
  mount_component: $r,
  noop: Jo,
  safe_not_equal: U1,
  set_data: mt,
  set_style: gn,
  space: ht,
  text: me,
  toggle_class: ft,
  transition_in: Dt,
  transition_out: Yt,
  update_slot_base: ec
} = window.__gradio__svelte__internal, { tick: V1 } = window.__gradio__svelte__internal, { onDestroy: N1 } = window.__gradio__svelte__internal, { createEventDispatcher: K1 } = window.__gradio__svelte__internal, Z1 = (i) => ({}), la = (i) => ({}), G1 = (i) => ({}), oa = (i) => ({});
function sa(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function aa(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function J1(i) {
  let e, t, n, l, o = (
    /*i18n*/
    i[1]("common.error") + ""
  ), s, r, a;
  t = new El({
    props: {
      Icon: Xr,
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
  const c = (
    /*#slots*/
    i[30].error
  ), _ = Zr(
    c,
    i,
    /*$$scope*/
    i[29],
    la
  );
  return {
    c() {
      e = Xt("div"), Kr(t.$$.fragment), n = ht(), l = Xt("span"), s = me(o), r = ht(), _ && _.c(), Bt(e, "class", "clear-status svelte-16nch4a"), Bt(l, "class", "error svelte-16nch4a");
    },
    m(f, d) {
      Z(f, e, d), $r(t, e, null), Z(f, n, d), Z(f, l, d), Mn(l, s), Z(f, r, d), _ && _.m(f, d), a = !0;
    },
    p(f, d) {
      const h = {};
      d[0] & /*i18n*/
      2 && (h.label = /*i18n*/
      f[1]("common.clear")), t.$set(h), (!a || d[0] & /*i18n*/
      2) && o !== (o = /*i18n*/
      f[1]("common.error") + "") && mt(s, o), _ && _.p && (!a || d[0] & /*$$scope*/
      536870912) && ec(
        _,
        c,
        f,
        /*$$scope*/
        f[29],
        a ? xr(
          c,
          /*$$scope*/
          f[29],
          d,
          Z1
        ) : Qr(
          /*$$scope*/
          f[29]
        ),
        la
      );
    },
    i(f) {
      a || (Dt(t.$$.fragment, f), Dt(_, f), a = !0);
    },
    o(f) {
      Yt(t.$$.fragment, f), Yt(_, f), a = !1;
    },
    d(f) {
      f && (K(e), K(n), K(l), K(r)), Gr(t), _ && _.d(f);
    }
  };
}
function Q1(i) {
  let e, t, n, l, o, s, r, a, c, _ = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && ra(i)
  );
  function f(p, y) {
    if (
      /*progress*/
      p[7]
    ) return eh;
    if (
      /*queue_position*/
      p[2] !== null && /*queue_size*/
      p[3] !== void 0 && /*queue_position*/
      p[2] >= 0
    ) return $1;
    if (
      /*queue_position*/
      p[2] === 0
    ) return x1;
  }
  let d = f(i), h = d && d(i), b = (
    /*timer*/
    i[5] && ua(i)
  );
  const u = [lh, ih], m = [];
  function g(p, y) {
    return (
      /*last_progress_level*/
      p[15] != null ? 0 : (
        /*show_progress*/
        p[6] === "full" ? 1 : -1
      )
    );
  }
  ~(o = g(i)) && (s = m[o] = u[o](i));
  let w = !/*timer*/
  i[5] && pa(i);
  return {
    c() {
      _ && _.c(), e = ht(), t = Xt("div"), h && h.c(), n = ht(), b && b.c(), l = ht(), s && s.c(), r = ht(), w && w.c(), a = ri(), Bt(t, "class", "progress-text svelte-16nch4a"), ft(
        t,
        "meta-text-center",
        /*variant*/
        i[8] === "center"
      ), ft(
        t,
        "meta-text",
        /*variant*/
        i[8] === "default"
      );
    },
    m(p, y) {
      _ && _.m(p, y), Z(p, e, y), Z(p, t, y), h && h.m(t, null), Mn(t, n), b && b.m(t, null), Z(p, l, y), ~o && m[o].m(p, y), Z(p, r, y), w && w.m(p, y), Z(p, a, y), c = !0;
    },
    p(p, y) {
      /*variant*/
      p[8] === "default" && /*show_eta_bar*/
      p[18] && /*show_progress*/
      p[6] === "full" ? _ ? _.p(p, y) : (_ = ra(p), _.c(), _.m(e.parentNode, e)) : _ && (_.d(1), _ = null), d === (d = f(p)) && h ? h.p(p, y) : (h && h.d(1), h = d && d(p), h && (h.c(), h.m(t, n))), /*timer*/
      p[5] ? b ? b.p(p, y) : (b = ua(p), b.c(), b.m(t, null)) : b && (b.d(1), b = null), (!c || y[0] & /*variant*/
      256) && ft(
        t,
        "meta-text-center",
        /*variant*/
        p[8] === "center"
      ), (!c || y[0] & /*variant*/
      256) && ft(
        t,
        "meta-text",
        /*variant*/
        p[8] === "default"
      );
      let z = o;
      o = g(p), o === z ? ~o && m[o].p(p, y) : (s && (Go(), Yt(m[z], 1, 1, () => {
        m[z] = null;
      }), Zo()), ~o ? (s = m[o], s ? s.p(p, y) : (s = m[o] = u[o](p), s.c()), Dt(s, 1), s.m(r.parentNode, r)) : s = null), /*timer*/
      p[5] ? w && (Go(), Yt(w, 1, 1, () => {
        w = null;
      }), Zo()) : w ? (w.p(p, y), y[0] & /*timer*/
      32 && Dt(w, 1)) : (w = pa(p), w.c(), Dt(w, 1), w.m(a.parentNode, a));
    },
    i(p) {
      c || (Dt(s), Dt(w), c = !0);
    },
    o(p) {
      Yt(s), Yt(w), c = !1;
    },
    d(p) {
      p && (K(e), K(t), K(l), K(r), K(a)), _ && _.d(p), h && h.d(), b && b.d(), ~o && m[o].d(p), w && w.d(p);
    }
  };
}
function ra(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = Xt("div"), Bt(e, "class", "eta-bar svelte-16nch4a"), gn(e, "transform", t);
    },
    m(n, l) {
      Z(n, e, l);
    },
    p(n, l) {
      l[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && gn(e, "transform", t);
    },
    d(n) {
      n && K(e);
    }
  };
}
function x1(i) {
  let e;
  return {
    c() {
      e = me("processing |");
    },
    m(t, n) {
      Z(t, e, n);
    },
    p: Jo,
    d(t) {
      t && K(e);
    }
  };
}
function $1(i) {
  let e, t = (
    /*queue_position*/
    i[2] + 1 + ""
  ), n, l, o, s;
  return {
    c() {
      e = me("queue: "), n = me(t), l = me("/"), o = me(
        /*queue_size*/
        i[3]
      ), s = me(" |");
    },
    m(r, a) {
      Z(r, e, a), Z(r, n, a), Z(r, l, a), Z(r, o, a), Z(r, s, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && mt(n, t), a[0] & /*queue_size*/
      8 && mt(
        o,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (K(e), K(n), K(l), K(o), K(s));
    }
  };
}
function eh(i) {
  let e, t = pl(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = _a(aa(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = ri();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      Z(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*progress*/
      128) {
        t = pl(
          /*progress*/
          l[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = aa(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = _a(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && K(e), Jr(n, l);
    }
  };
}
function ca(i) {
  let e, t = (
    /*p*/
    i[41].unit + ""
  ), n, l, o = " ", s;
  function r(_, f) {
    return (
      /*p*/
      _[41].length != null ? nh : th
    );
  }
  let a = r(i), c = a(i);
  return {
    c() {
      c.c(), e = ht(), n = me(t), l = me(" | "), s = me(o);
    },
    m(_, f) {
      c.m(_, f), Z(_, e, f), Z(_, n, f), Z(_, l, f), Z(_, s, f);
    },
    p(_, f) {
      a === (a = r(_)) && c ? c.p(_, f) : (c.d(1), c = a(_), c && (c.c(), c.m(e.parentNode, e))), f[0] & /*progress*/
      128 && t !== (t = /*p*/
      _[41].unit + "") && mt(n, t);
    },
    d(_) {
      _ && (K(e), K(n), K(l), K(s)), c.d(_);
    }
  };
}
function th(i) {
  let e = xn(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = me(e);
    },
    m(n, l) {
      Z(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = xn(
        /*p*/
        n[41].index || 0
      ) + "") && mt(t, e);
    },
    d(n) {
      n && K(t);
    }
  };
}
function nh(i) {
  let e = xn(
    /*p*/
    i[41].index || 0
  ) + "", t, n, l = xn(
    /*p*/
    i[41].length
  ) + "", o;
  return {
    c() {
      t = me(e), n = me("/"), o = me(l);
    },
    m(s, r) {
      Z(s, t, r), Z(s, n, r), Z(s, o, r);
    },
    p(s, r) {
      r[0] & /*progress*/
      128 && e !== (e = xn(
        /*p*/
        s[41].index || 0
      ) + "") && mt(t, e), r[0] & /*progress*/
      128 && l !== (l = xn(
        /*p*/
        s[41].length
      ) + "") && mt(o, l);
    },
    d(s) {
      s && (K(t), K(n), K(o));
    }
  };
}
function _a(i) {
  let e, t = (
    /*p*/
    i[41].index != null && ca(i)
  );
  return {
    c() {
      t && t.c(), e = ri();
    },
    m(n, l) {
      t && t.m(n, l), Z(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].index != null ? t ? t.p(n, l) : (t = ca(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && K(e), t && t.d(n);
    }
  };
}
function ua(i) {
  let e, t = (
    /*eta*/
    i[0] ? `/${/*formatted_eta*/
    i[19]}` : ""
  ), n, l;
  return {
    c() {
      e = me(
        /*formatted_timer*/
        i[20]
      ), n = me(t), l = me("s");
    },
    m(o, s) {
      Z(o, e, s), Z(o, n, s), Z(o, l, s);
    },
    p(o, s) {
      s[0] & /*formatted_timer*/
      1048576 && mt(
        e,
        /*formatted_timer*/
        o[20]
      ), s[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      o[0] ? `/${/*formatted_eta*/
      o[19]}` : "") && mt(n, t);
    },
    d(o) {
      o && (K(e), K(n), K(l));
    }
  };
}
function ih(i) {
  let e, t;
  return e = new F1({
    props: { margin: (
      /*variant*/
      i[8] === "default"
    ) }
  }), {
    c() {
      Kr(e.$$.fragment);
    },
    m(n, l) {
      $r(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*variant*/
      256 && (o.margin = /*variant*/
      n[8] === "default"), e.$set(o);
    },
    i(n) {
      t || (Dt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Yt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Gr(e, n);
    }
  };
}
function lh(i) {
  let e, t, n, l, o, s = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && fa(i)
  );
  return {
    c() {
      e = Xt("div"), t = Xt("div"), r && r.c(), n = ht(), l = Xt("div"), o = Xt("div"), Bt(t, "class", "progress-level-inner svelte-16nch4a"), Bt(o, "class", "progress-bar svelte-16nch4a"), gn(o, "width", s), Bt(l, "class", "progress-bar-wrap svelte-16nch4a"), Bt(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, c) {
      Z(a, e, c), Mn(e, t), r && r.m(t, null), Mn(e, n), Mn(e, l), Mn(l, o), i[31](o);
    },
    p(a, c) {
      /*progress*/
      a[7] != null ? r ? r.p(a, c) : (r = fa(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), c[0] & /*last_progress_level*/
      32768 && s !== (s = `${/*last_progress_level*/
      a[15] * 100}%`) && gn(o, "width", s);
    },
    i: Jo,
    o: Jo,
    d(a) {
      a && K(e), r && r.d(), i[31](null);
    }
  };
}
function fa(i) {
  let e, t = pl(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = ba(sa(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = ri();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      Z(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*progress_level, progress*/
      16512) {
        t = pl(
          /*progress*/
          l[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = sa(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = ba(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && K(e), Jr(n, l);
    }
  };
}
function da(i) {
  let e, t, n, l, o = (
    /*i*/
    i[43] !== 0 && oh()
  ), s = (
    /*p*/
    i[41].desc != null && ha(i)
  ), r = (
    /*p*/
    i[41].desc != null && /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null && ma()
  ), a = (
    /*progress_level*/
    i[14] != null && ga(i)
  );
  return {
    c() {
      o && o.c(), e = ht(), s && s.c(), t = ht(), r && r.c(), n = ht(), a && a.c(), l = ri();
    },
    m(c, _) {
      o && o.m(c, _), Z(c, e, _), s && s.m(c, _), Z(c, t, _), r && r.m(c, _), Z(c, n, _), a && a.m(c, _), Z(c, l, _);
    },
    p(c, _) {
      /*p*/
      c[41].desc != null ? s ? s.p(c, _) : (s = ha(c), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null), /*p*/
      c[41].desc != null && /*progress_level*/
      c[14] && /*progress_level*/
      c[14][
        /*i*/
        c[43]
      ] != null ? r || (r = ma(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      c[14] != null ? a ? a.p(c, _) : (a = ga(c), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null);
    },
    d(c) {
      c && (K(e), K(t), K(n), K(l)), o && o.d(c), s && s.d(c), r && r.d(c), a && a.d(c);
    }
  };
}
function oh(i) {
  let e;
  return {
    c() {
      e = me(" /");
    },
    m(t, n) {
      Z(t, e, n);
    },
    d(t) {
      t && K(e);
    }
  };
}
function ha(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = me(e);
    },
    m(n, l) {
      Z(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && mt(t, e);
    },
    d(n) {
      n && K(t);
    }
  };
}
function ma(i) {
  let e;
  return {
    c() {
      e = me("-");
    },
    m(t, n) {
      Z(t, e, n);
    },
    d(t) {
      t && K(e);
    }
  };
}
function ga(i) {
  let e = (100 * /*progress_level*/
  (i[14][
    /*i*/
    i[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = me(e), n = me("%");
    },
    m(l, o) {
      Z(l, t, o), Z(l, n, o);
    },
    p(l, o) {
      o[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (l[14][
        /*i*/
        l[43]
      ] || 0)).toFixed(1) + "") && mt(t, e);
    },
    d(l) {
      l && (K(t), K(n));
    }
  };
}
function ba(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && da(i)
  );
  return {
    c() {
      t && t.c(), e = ri();
    },
    m(n, l) {
      t && t.m(n, l), Z(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, l) : (t = da(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && K(e), t && t.d(n);
    }
  };
}
function pa(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), s = Zr(
    o,
    i,
    /*$$scope*/
    i[29],
    oa
  );
  return {
    c() {
      e = Xt("p"), t = me(
        /*loading_text*/
        i[9]
      ), n = ht(), s && s.c(), Bt(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      Z(r, e, a), Mn(e, t), Z(r, n, a), s && s.m(r, a), l = !0;
    },
    p(r, a) {
      (!l || a[0] & /*loading_text*/
      512) && mt(
        t,
        /*loading_text*/
        r[9]
      ), s && s.p && (!l || a[0] & /*$$scope*/
      536870912) && ec(
        s,
        o,
        r,
        /*$$scope*/
        r[29],
        l ? xr(
          o,
          /*$$scope*/
          r[29],
          a,
          G1
        ) : Qr(
          /*$$scope*/
          r[29]
        ),
        oa
      );
    },
    i(r) {
      l || (Dt(s, r), l = !0);
    },
    o(r) {
      Yt(s, r), l = !1;
    },
    d(r) {
      r && (K(e), K(n)), s && s.d(r);
    }
  };
}
function sh(i) {
  let e, t, n, l, o;
  const s = [Q1, J1], r = [];
  function a(c, _) {
    return (
      /*status*/
      c[4] === "pending" ? 0 : (
        /*status*/
        c[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(t = a(i)) && (n = r[t] = s[t](i)), {
    c() {
      e = Xt("div"), n && n.c(), Bt(e, "class", l = "wrap " + /*variant*/
      i[8] + " " + /*show_progress*/
      i[6] + " svelte-16nch4a"), ft(e, "hide", !/*status*/
      i[4] || /*status*/
      i[4] === "complete" || /*show_progress*/
      i[6] === "hidden"), ft(
        e,
        "translucent",
        /*variant*/
        i[8] === "center" && /*status*/
        (i[4] === "pending" || /*status*/
        i[4] === "error") || /*translucent*/
        i[11] || /*show_progress*/
        i[6] === "minimal"
      ), ft(
        e,
        "generating",
        /*status*/
        i[4] === "generating"
      ), ft(
        e,
        "border",
        /*border*/
        i[12]
      ), gn(
        e,
        "position",
        /*absolute*/
        i[10] ? "absolute" : "static"
      ), gn(
        e,
        "padding",
        /*absolute*/
        i[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(c, _) {
      Z(c, e, _), ~t && r[t].m(e, null), i[33](e), o = !0;
    },
    p(c, _) {
      let f = t;
      t = a(c), t === f ? ~t && r[t].p(c, _) : (n && (Go(), Yt(r[f], 1, 1, () => {
        r[f] = null;
      }), Zo()), ~t ? (n = r[t], n ? n.p(c, _) : (n = r[t] = s[t](c), n.c()), Dt(n, 1), n.m(e, null)) : n = null), (!o || _[0] & /*variant, show_progress*/
      320 && l !== (l = "wrap " + /*variant*/
      c[8] + " " + /*show_progress*/
      c[6] + " svelte-16nch4a")) && Bt(e, "class", l), (!o || _[0] & /*variant, show_progress, status, show_progress*/
      336) && ft(e, "hide", !/*status*/
      c[4] || /*status*/
      c[4] === "complete" || /*show_progress*/
      c[6] === "hidden"), (!o || _[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && ft(
        e,
        "translucent",
        /*variant*/
        c[8] === "center" && /*status*/
        (c[4] === "pending" || /*status*/
        c[4] === "error") || /*translucent*/
        c[11] || /*show_progress*/
        c[6] === "minimal"
      ), (!o || _[0] & /*variant, show_progress, status*/
      336) && ft(
        e,
        "generating",
        /*status*/
        c[4] === "generating"
      ), (!o || _[0] & /*variant, show_progress, border*/
      4416) && ft(
        e,
        "border",
        /*border*/
        c[12]
      ), _[0] & /*absolute*/
      1024 && gn(
        e,
        "position",
        /*absolute*/
        c[10] ? "absolute" : "static"
      ), _[0] & /*absolute*/
      1024 && gn(
        e,
        "padding",
        /*absolute*/
        c[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(c) {
      o || (Dt(n), o = !0);
    },
    o(c) {
      Yt(n), o = !1;
    },
    d(c) {
      c && K(e), ~t && r[t].d(), i[33](null);
    }
  };
}
var ah = function(i, e, t, n) {
  function l(o) {
    return o instanceof t ? o : new t(function(s) {
      s(o);
    });
  }
  return new (t || (t = Promise))(function(o, s) {
    function r(_) {
      try {
        c(n.next(_));
      } catch (f) {
        s(f);
      }
    }
    function a(_) {
      try {
        c(n.throw(_));
      } catch (f) {
        s(f);
      }
    }
    function c(_) {
      _.done ? o(_.value) : l(_.value).then(r, a);
    }
    c((n = n.apply(i, e || [])).next());
  });
};
let Zi = [], po = !1;
function rh(i) {
  return ah(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Zi.push(e), !po) po = !0;
      else return;
      yield V1(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let l = 0; l < Zi.length; l++) {
          const s = Zi[l].getBoundingClientRect();
          (l === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = l);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), po = !1, Zi = [];
      });
    }
  });
}
function ch(i, e, t) {
  let n, { $$slots: l = {}, $$scope: o } = e;
  this && this.__awaiter;
  const s = K1();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: c } = e, { queue_size: _ } = e, { status: f } = e, { scroll_to_output: d = !1 } = e, { timer: h = !0 } = e, { show_progress: b = "full" } = e, { message: u = null } = e, { progress: m = null } = e, { variant: g = "default" } = e, { loading_text: w = "Loading..." } = e, { absolute: p = !0 } = e, { translucent: y = !1 } = e, { border: z = !1 } = e, { autoscroll: k } = e, S, q = !1, M = 0, D = 0, E = null, X = null, C = 0, ee = null, Q, x = null, G = !0;
  const R = () => {
    t(0, a = t(27, E = t(19, U = null))), t(25, M = performance.now()), t(26, D = 0), q = !0, O();
  };
  function O() {
    requestAnimationFrame(() => {
      t(26, D = (performance.now() - M) / 1e3), q && O();
    });
  }
  function I() {
    t(26, D = 0), t(0, a = t(27, E = t(19, U = null))), q && (q = !1);
  }
  N1(() => {
    q && I();
  });
  let U = null;
  function Y(H) {
    ia[H ? "unshift" : "push"](() => {
      x = H, t(16, x), t(7, m), t(14, ee), t(15, Q);
    });
  }
  const le = () => {
    s("clear_status");
  };
  function ae(H) {
    ia[H ? "unshift" : "push"](() => {
      S = H, t(13, S);
    });
  }
  return i.$$set = (H) => {
    "i18n" in H && t(1, r = H.i18n), "eta" in H && t(0, a = H.eta), "queue_position" in H && t(2, c = H.queue_position), "queue_size" in H && t(3, _ = H.queue_size), "status" in H && t(4, f = H.status), "scroll_to_output" in H && t(22, d = H.scroll_to_output), "timer" in H && t(5, h = H.timer), "show_progress" in H && t(6, b = H.show_progress), "message" in H && t(23, u = H.message), "progress" in H && t(7, m = H.progress), "variant" in H && t(8, g = H.variant), "loading_text" in H && t(9, w = H.loading_text), "absolute" in H && t(10, p = H.absolute), "translucent" in H && t(11, y = H.translucent), "border" in H && t(12, z = H.border), "autoscroll" in H && t(24, k = H.autoscroll), "$$scope" in H && t(29, o = H.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = E), a != null && E !== a && (t(28, X = (performance.now() - M) / 1e3 + a), t(19, U = X.toFixed(1)), t(27, E = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, C = X === null || X <= 0 || !D ? null : Math.min(D / X, 1)), i.$$.dirty[0] & /*progress*/
    128 && m != null && t(18, G = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (m != null ? t(14, ee = m.map((H) => {
      if (H.index != null && H.length != null)
        return H.index / H.length;
      if (H.progress != null)
        return H.progress;
    })) : t(14, ee = null), ee ? (t(15, Q = ee[ee.length - 1]), x && (Q === 0 ? t(16, x.style.transition = "0", x) : t(16, x.style.transition = "150ms", x))) : t(15, Q = void 0)), i.$$.dirty[0] & /*status*/
    16 && (f === "pending" ? R() : I()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && S && d && (f === "pending" || f === "complete") && rh(S, k), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = D.toFixed(1));
  }, [
    a,
    r,
    c,
    _,
    f,
    h,
    b,
    m,
    g,
    w,
    p,
    y,
    z,
    S,
    ee,
    Q,
    x,
    C,
    G,
    U,
    n,
    s,
    d,
    u,
    k,
    M,
    D,
    E,
    X,
    o,
    l,
    Y,
    le,
    ae
  ];
}
class _h extends O1 {
  constructor(e) {
    super(), P1(
      this,
      e,
      ch,
      sh,
      U1,
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
  SvelteComponent: Ak,
  add_render_callback: Wk,
  append: Rk,
  attr: Xk,
  bubble: Yk,
  check_outros: Ik,
  create_component: Hk,
  create_in_transition: Tk,
  create_out_transition: jk,
  destroy_component: Fk,
  detach: Ok,
  element: Pk,
  group_outros: Uk,
  init: Vk,
  insert: Nk,
  listen: Kk,
  mount_component: Zk,
  run_all: Gk,
  safe_not_equal: Jk,
  set_data: Qk,
  space: xk,
  stop_propagation: $k,
  text: e8,
  transition_in: t8,
  transition_out: n8
} = window.__gradio__svelte__internal, { createEventDispatcher: i8, onMount: l8 } = window.__gradio__svelte__internal, {
  SvelteComponent: o8,
  append: s8,
  attr: a8,
  bubble: r8,
  check_outros: c8,
  create_animation: _8,
  create_component: u8,
  destroy_component: f8,
  detach: d8,
  element: h8,
  ensure_array_like: m8,
  fix_and_outro_and_destroy_block: g8,
  fix_position: b8,
  group_outros: p8,
  init: v8,
  insert: w8,
  mount_component: k8,
  noop: y8,
  safe_not_equal: C8,
  set_style: S8,
  space: q8,
  transition_in: z8,
  transition_out: D8,
  update_keyed_each: B8
} = window.__gradio__svelte__internal, { setContext: M8, getContext: uh } = window.__gradio__svelte__internal, fh = "WORKER_PROXY_CONTEXT_KEY";
function tc() {
  return uh(fh);
}
function dh(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function nc(i, e) {
  const t = e.toLowerCase();
  for (const [n, l] of Object.entries(i))
    if (n.toLowerCase() === t)
      return l;
}
function ic(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!dh(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function hh(i) {
  if (i == null || !ic(i))
    return i;
  const e = tc();
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
      type: nc(l.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: mh,
  assign: vl,
  check_outros: lc,
  compute_rest_props: va,
  create_slot: cs,
  detach: Xl,
  element: oc,
  empty: sc,
  exclude_internal_props: gh,
  get_all_dirty_from_scope: _s,
  get_slot_changes: us,
  get_spread_update: ac,
  group_outros: rc,
  init: bh,
  insert: Yl,
  listen: cc,
  prevent_default: ph,
  safe_not_equal: vh,
  set_attributes: wl,
  transition_in: Wn,
  transition_out: Rn,
  update_slot_base: fs
} = window.__gradio__svelte__internal, { createEventDispatcher: wh } = window.__gradio__svelte__internal;
function kh(i) {
  let e, t, n, l, o;
  const s = (
    /*#slots*/
    i[8].default
  ), r = cs(
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
  ], c = {};
  for (let _ = 0; _ < a.length; _ += 1)
    c = vl(c, a[_]);
  return {
    c() {
      e = oc("a"), r && r.c(), wl(e, c);
    },
    m(_, f) {
      Yl(_, e, f), r && r.m(e, null), n = !0, l || (o = cc(
        e,
        "click",
        /*dispatch*/
        i[3].bind(null, "click")
      ), l = !0);
    },
    p(_, f) {
      r && r.p && (!n || f & /*$$scope*/
      128) && fs(
        r,
        s,
        _,
        /*$$scope*/
        _[7],
        n ? us(
          s,
          /*$$scope*/
          _[7],
          f,
          null
        ) : _s(
          /*$$scope*/
          _[7]
        ),
        null
      ), wl(e, c = ac(a, [
        (!n || f & /*href*/
        1) && { href: (
          /*href*/
          _[0]
        ) },
        { target: t },
        { rel: "noopener noreferrer" },
        (!n || f & /*download*/
        2) && { download: (
          /*download*/
          _[1]
        ) },
        f & /*$$restProps*/
        64 && /*$$restProps*/
        _[6]
      ]));
    },
    i(_) {
      n || (Wn(r, _), n = !0);
    },
    o(_) {
      Rn(r, _), n = !1;
    },
    d(_) {
      _ && Xl(e), r && r.d(_), l = !1, o();
    }
  };
}
function yh(i) {
  let e, t, n, l;
  const o = [Sh, Ch], s = [];
  function r(a, c) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = sc();
    },
    m(a, c) {
      s[e].m(a, c), Yl(a, n, c), l = !0;
    },
    p(a, c) {
      let _ = e;
      e = r(a), e === _ ? s[e].p(a, c) : (rc(), Rn(s[_], 1, 1, () => {
        s[_] = null;
      }), lc(), t = s[e], t ? t.p(a, c) : (t = s[e] = o[e](a), t.c()), Wn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Wn(t), l = !0);
    },
    o(a) {
      Rn(t), l = !1;
    },
    d(a) {
      a && Xl(n), s[e].d(a);
    }
  };
}
function Ch(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[8].default
  ), s = cs(
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
  for (let c = 0; c < r.length; c += 1)
    a = vl(a, r[c]);
  return {
    c() {
      e = oc("a"), s && s.c(), wl(e, a);
    },
    m(c, _) {
      Yl(c, e, _), s && s.m(e, null), t = !0, n || (l = cc(e, "click", ph(
        /*wasm_click_handler*/
        i[5]
      )), n = !0);
    },
    p(c, _) {
      s && s.p && (!t || _ & /*$$scope*/
      128) && fs(
        s,
        o,
        c,
        /*$$scope*/
        c[7],
        t ? us(
          o,
          /*$$scope*/
          c[7],
          _,
          null
        ) : _s(
          /*$$scope*/
          c[7]
        ),
        null
      ), wl(e, a = ac(r, [
        _ & /*$$restProps*/
        64 && /*$$restProps*/
        c[6],
        (!t || _ & /*href*/
        1) && { href: (
          /*href*/
          c[0]
        ) }
      ]));
    },
    i(c) {
      t || (Wn(s, c), t = !0);
    },
    o(c) {
      Rn(s, c), t = !1;
    },
    d(c) {
      c && Xl(e), s && s.d(c), n = !1, l();
    }
  };
}
function Sh(i) {
  let e;
  const t = (
    /*#slots*/
    i[8].default
  ), n = cs(
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
      128) && fs(
        n,
        t,
        l,
        /*$$scope*/
        l[7],
        e ? us(
          t,
          /*$$scope*/
          l[7],
          o,
          null
        ) : _s(
          /*$$scope*/
          l[7]
        ),
        null
      );
    },
    i(l) {
      e || (Wn(n, l), e = !0);
    },
    o(l) {
      Rn(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function qh(i) {
  let e, t, n, l, o;
  const s = [yh, kh], r = [];
  function a(c, _) {
    return _ & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (c[4] && ic(
      /*href*/
      c[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = s[t](i), {
    c() {
      n.c(), l = sc();
    },
    m(c, _) {
      r[t].m(c, _), Yl(c, l, _), o = !0;
    },
    p(c, [_]) {
      let f = t;
      t = a(c, _), t === f ? r[t].p(c, _) : (rc(), Rn(r[f], 1, 1, () => {
        r[f] = null;
      }), lc(), n = r[t], n ? n.p(c, _) : (n = r[t] = s[t](c), n.c()), Wn(n, 1), n.m(l.parentNode, l));
    },
    i(c) {
      o || (Wn(n), o = !0);
    },
    o(c) {
      Rn(n), o = !1;
    },
    d(c) {
      c && Xl(l), r[t].d(c);
    }
  };
}
function zh(i, e, t) {
  const n = ["href", "download"];
  let l = va(e, n), { $$slots: o = {}, $$scope: s } = e;
  var r = this && this.__awaiter || function(b, u, m, g) {
    function w(p) {
      return p instanceof m ? p : new m(function(y) {
        y(p);
      });
    }
    return new (m || (m = Promise))(function(p, y) {
      function z(q) {
        try {
          S(g.next(q));
        } catch (M) {
          y(M);
        }
      }
      function k(q) {
        try {
          S(g.throw(q));
        } catch (M) {
          y(M);
        }
      }
      function S(q) {
        q.done ? p(q.value) : w(q.value).then(z, k);
      }
      S((g = g.apply(b, u || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: c } = e;
  const _ = wh();
  let f = !1;
  const d = tc();
  function h() {
    return r(this, void 0, void 0, function* () {
      if (f)
        return;
      if (_("click"), a == null)
        throw new Error("href is not defined.");
      if (d == null)
        throw new Error("Wasm worker proxy is not available.");
      const u = new URL(a, window.location.href).pathname;
      t(2, f = !0), d.httpRequest({
        method: "GET",
        path: u,
        headers: {},
        query_string: ""
      }).then((m) => {
        if (m.status !== 200)
          throw new Error(`Failed to get file ${u} from the Wasm worker.`);
        const g = new Blob(
          [m.body],
          {
            type: nc(m.headers, "content-type")
          }
        ), w = URL.createObjectURL(g), p = document.createElement("a");
        p.href = w, p.download = c, p.click(), URL.revokeObjectURL(w);
      }).finally(() => {
        t(2, f = !1);
      });
    });
  }
  return i.$$set = (b) => {
    e = vl(vl({}, e), gh(b)), t(6, l = va(e, n)), "href" in b && t(0, a = b.href), "download" in b && t(1, c = b.download), "$$scope" in b && t(7, s = b.$$scope);
  }, [
    a,
    c,
    f,
    _,
    d,
    h,
    l,
    s,
    o
  ];
}
class Dh extends mh {
  constructor(e) {
    super(), bh(this, e, zh, qh, vh, { href: 0, download: 1 });
  }
}
var Bh = Object.defineProperty, Mh = (i, e, t) => e in i ? Bh(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, Pt = (i, e, t) => (Mh(i, typeof e != "symbol" ? e + "" : e, t), t), _c = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, bi = (i, e, t) => (_c(i, e, "read from private field"), e.get(i)), Eh = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, Lh = (i, e, t, n) => (_c(i, e, "write to private field"), e.set(i, t), t), fn;
new Intl.Collator(0, { numeric: 1 }).compare;
async function uc(i, e) {
  return i.map(
    (t) => new Ah({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class Ah {
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
    Pt(this, "path"), Pt(this, "url"), Pt(this, "orig_name"), Pt(this, "size"), Pt(this, "blob"), Pt(this, "is_stream"), Pt(this, "mime_type"), Pt(this, "alt_text"), Pt(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = l, this.blob = t ? void 0 : o, this.is_stream = s, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class E8 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = bi(this, fn) + t; ; ) {
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
        Lh(this, fn, t);
      },
      flush: (t) => {
        if (bi(this, fn) === "")
          return;
        const n = e.allowCR && bi(this, fn).endsWith("\r") ? bi(this, fn).slice(0, -1) : bi(this, fn);
        t.enqueue(n);
      }
    }), Eh(this, fn, "");
  }
}
fn = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: Wh,
  append: Ge,
  attr: zn,
  detach: fc,
  element: Dn,
  init: Rh,
  insert: dc,
  noop: wa,
  safe_not_equal: Xh,
  set_data: kl,
  set_style: vo,
  space: Qo,
  text: $n,
  toggle_class: ka
} = window.__gradio__svelte__internal, { onMount: Yh, createEventDispatcher: Ih, onDestroy: Hh } = window.__gradio__svelte__internal;
function ya(i) {
  let e, t, n, l, o = Bi(
    /*file_to_display*/
    i[2]
  ) + "", s, r, a, c, _ = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), f;
  return {
    c() {
      e = Dn("div"), t = Dn("span"), n = Dn("div"), l = Dn("progress"), s = $n(o), a = Qo(), c = Dn("span"), f = $n(_), vo(l, "visibility", "hidden"), vo(l, "height", "0"), vo(l, "width", "0"), l.value = r = Bi(
        /*file_to_display*/
        i[2]
      ), zn(l, "max", "100"), zn(l, "class", "svelte-cr2edf"), zn(n, "class", "progress-bar svelte-cr2edf"), zn(c, "class", "file-name svelte-cr2edf"), zn(e, "class", "file svelte-cr2edf");
    },
    m(d, h) {
      dc(d, e, h), Ge(e, t), Ge(t, n), Ge(n, l), Ge(l, s), Ge(e, a), Ge(e, c), Ge(c, f);
    },
    p(d, h) {
      h & /*file_to_display*/
      4 && o !== (o = Bi(
        /*file_to_display*/
        d[2]
      ) + "") && kl(s, o), h & /*file_to_display*/
      4 && r !== (r = Bi(
        /*file_to_display*/
        d[2]
      )) && (l.value = r), h & /*file_to_display*/
      4 && _ !== (_ = /*file_to_display*/
      d[2].orig_name + "") && kl(f, _);
    },
    d(d) {
      d && fc(e);
    }
  };
}
function Th(i) {
  let e, t, n, l = (
    /*files_with_progress*/
    i[0].length + ""
  ), o, s, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, c, _, f = (
    /*file_to_display*/
    i[2] && ya(i)
  );
  return {
    c() {
      e = Dn("div"), t = Dn("span"), n = $n("Uploading "), o = $n(l), s = Qo(), a = $n(r), c = $n("..."), _ = Qo(), f && f.c(), zn(t, "class", "uploading svelte-cr2edf"), zn(e, "class", "wrap svelte-cr2edf"), ka(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(d, h) {
      dc(d, e, h), Ge(e, t), Ge(t, n), Ge(t, o), Ge(t, s), Ge(t, a), Ge(t, c), Ge(e, _), f && f.m(e, null);
    },
    p(d, [h]) {
      h & /*files_with_progress*/
      1 && l !== (l = /*files_with_progress*/
      d[0].length + "") && kl(o, l), h & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      d[0].length > 1 ? "files" : "file") && kl(a, r), /*file_to_display*/
      d[2] ? f ? f.p(d, h) : (f = ya(d), f.c(), f.m(e, null)) : f && (f.d(1), f = null), h & /*progress*/
      2 && ka(
        e,
        "progress",
        /*progress*/
        d[1]
      );
    },
    i: wa,
    o: wa,
    d(d) {
      d && fc(e), f && f.d();
    }
  };
}
function Bi(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function jh(i) {
  let e = 0;
  return i.forEach((t) => {
    e += Bi(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function Fh(i, e, t) {
  var n = this && this.__awaiter || function(u, m, g, w) {
    function p(y) {
      return y instanceof g ? y : new g(function(z) {
        z(y);
      });
    }
    return new (g || (g = Promise))(function(y, z) {
      function k(M) {
        try {
          q(w.next(M));
        } catch (D) {
          z(D);
        }
      }
      function S(M) {
        try {
          q(w.throw(M));
        } catch (D) {
          z(D);
        }
      }
      function q(M) {
        M.done ? y(M.value) : p(M.value).then(k, S);
      }
      q((w = w.apply(u, m || [])).next());
    });
  };
  let { upload_id: l } = e, { root: o } = e, { files: s } = e, { stream_handler: r } = e, a, c = !1, _, f, d = s.map((u) => Object.assign(Object.assign({}, u), { progress: 0 }));
  const h = Ih();
  function b(u, m) {
    t(0, d = d.map((g) => (g.orig_name === u && (g.progress += m), g)));
  }
  return Yh(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${o}/upload_progress?upload_id=${l}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(u) {
      return n(this, void 0, void 0, function* () {
        const m = JSON.parse(u.data);
        c || t(1, c = !0), m.msg === "done" ? (a == null || a.close(), h("done")) : (t(7, _ = m), b(m.orig_name, m.chunk_size));
      });
    };
  })), Hh(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (u) => {
    "upload_id" in u && t(3, l = u.upload_id), "root" in u && t(4, o = u.root), "files" in u && t(5, s = u.files), "stream_handler" in u && t(6, r = u.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && jh(d), i.$$.dirty & /*current_file_upload, files_with_progress*/
    129 && t(2, f = _ || d[0]);
  }, [
    d,
    c,
    f,
    l,
    o,
    s,
    r,
    _
  ];
}
class Oh extends Wh {
  constructor(e) {
    super(), Rh(this, e, Fh, Th, Xh, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: Ph,
  append: Ca,
  attr: Le,
  binding_callbacks: Uh,
  bubble: wn,
  check_outros: hc,
  create_component: Vh,
  create_slot: mc,
  destroy_component: Nh,
  detach: Il,
  element: xo,
  empty: gc,
  get_all_dirty_from_scope: bc,
  get_slot_changes: pc,
  group_outros: vc,
  init: Kh,
  insert: Hl,
  listen: et,
  mount_component: Zh,
  prevent_default: kn,
  run_all: Gh,
  safe_not_equal: Jh,
  set_style: wc,
  space: Qh,
  stop_propagation: yn,
  toggle_class: De,
  transition_in: bn,
  transition_out: Xn,
  update_slot_base: kc
} = window.__gradio__svelte__internal, { createEventDispatcher: xh, tick: $h } = window.__gradio__svelte__internal;
function em(i) {
  let e, t, n, l, o, s, r, a, c, _, f;
  const d = (
    /*#slots*/
    i[26].default
  ), h = mc(
    d,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = xo("button"), h && h.c(), t = Qh(), n = xo("input"), Le(n, "aria-label", "file upload"), Le(n, "data-testid", "file-upload"), Le(n, "type", "file"), Le(n, "accept", l = /*accept_file_types*/
      i[16] || void 0), n.multiple = o = /*file_count*/
      i[6] === "multiple" || void 0, Le(n, "webkitdirectory", s = /*file_count*/
      i[6] === "directory" || void 0), Le(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), Le(n, "class", "svelte-1s26xmt"), Le(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), Le(e, "class", "svelte-1s26xmt"), De(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), De(
        e,
        "center",
        /*center*/
        i[4]
      ), De(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), De(
        e,
        "flex",
        /*flex*/
        i[5]
      ), De(
        e,
        "disable_click",
        /*disable_click*/
        i[7]
      ), wc(e, "height", "100%");
    },
    m(b, u) {
      Hl(b, e, u), h && h.m(e, null), Ca(e, t), Ca(e, n), i[34](n), c = !0, _ || (f = [
        et(
          n,
          "change",
          /*load_files_from_upload*/
          i[18]
        ),
        et(e, "drag", yn(kn(
          /*drag_handler*/
          i[27]
        ))),
        et(e, "dragstart", yn(kn(
          /*dragstart_handler*/
          i[28]
        ))),
        et(e, "dragend", yn(kn(
          /*dragend_handler*/
          i[29]
        ))),
        et(e, "dragover", yn(kn(
          /*dragover_handler*/
          i[30]
        ))),
        et(e, "dragenter", yn(kn(
          /*dragenter_handler*/
          i[31]
        ))),
        et(e, "dragleave", yn(kn(
          /*dragleave_handler*/
          i[32]
        ))),
        et(e, "drop", yn(kn(
          /*drop_handler*/
          i[33]
        ))),
        et(
          e,
          "click",
          /*open_file_upload*/
          i[13]
        ),
        et(
          e,
          "drop",
          /*loadFilesFromDrop*/
          i[19]
        ),
        et(
          e,
          "dragenter",
          /*updateDragging*/
          i[17]
        ),
        et(
          e,
          "dragleave",
          /*updateDragging*/
          i[17]
        )
      ], _ = !0);
    },
    p(b, u) {
      h && h.p && (!c || u[0] & /*$$scope*/
      33554432) && kc(
        h,
        d,
        b,
        /*$$scope*/
        b[25],
        c ? pc(
          d,
          /*$$scope*/
          b[25],
          u,
          null
        ) : bc(
          /*$$scope*/
          b[25]
        ),
        null
      ), (!c || u[0] & /*accept_file_types*/
      65536 && l !== (l = /*accept_file_types*/
      b[16] || void 0)) && Le(n, "accept", l), (!c || u[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      b[6] === "multiple" || void 0)) && (n.multiple = o), (!c || u[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      b[6] === "directory" || void 0)) && Le(n, "webkitdirectory", s), (!c || u[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      b[6] === "directory" || void 0)) && Le(n, "mozdirectory", r), (!c || u[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      b[9] ? -1 : 0)) && Le(e, "tabindex", a), (!c || u[0] & /*hidden*/
      512) && De(
        e,
        "hidden",
        /*hidden*/
        b[9]
      ), (!c || u[0] & /*center*/
      16) && De(
        e,
        "center",
        /*center*/
        b[4]
      ), (!c || u[0] & /*boundedheight*/
      8) && De(
        e,
        "boundedheight",
        /*boundedheight*/
        b[3]
      ), (!c || u[0] & /*flex*/
      32) && De(
        e,
        "flex",
        /*flex*/
        b[5]
      ), (!c || u[0] & /*disable_click*/
      128) && De(
        e,
        "disable_click",
        /*disable_click*/
        b[7]
      );
    },
    i(b) {
      c || (bn(h, b), c = !0);
    },
    o(b) {
      Xn(h, b), c = !1;
    },
    d(b) {
      b && Il(e), h && h.d(b), i[34](null), _ = !1, Gh(f);
    }
  };
}
function tm(i) {
  let e, t, n = !/*hidden*/
  i[9] && Sa(i);
  return {
    c() {
      n && n.c(), e = gc();
    },
    m(l, o) {
      n && n.m(l, o), Hl(l, e, o), t = !0;
    },
    p(l, o) {
      /*hidden*/
      l[9] ? n && (vc(), Xn(n, 1, 1, () => {
        n = null;
      }), hc()) : n ? (n.p(l, o), o[0] & /*hidden*/
      512 && bn(n, 1)) : (n = Sa(l), n.c(), bn(n, 1), n.m(e.parentNode, e));
    },
    i(l) {
      t || (bn(n), t = !0);
    },
    o(l) {
      Xn(n), t = !1;
    },
    d(l) {
      l && Il(e), n && n.d(l);
    }
  };
}
function nm(i) {
  let e, t, n, l, o;
  const s = (
    /*#slots*/
    i[26].default
  ), r = mc(
    s,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = xo("button"), r && r.c(), Le(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), Le(e, "class", "svelte-1s26xmt"), De(
        e,
        "hidden",
        /*hidden*/
        i[9]
      ), De(
        e,
        "center",
        /*center*/
        i[4]
      ), De(
        e,
        "boundedheight",
        /*boundedheight*/
        i[3]
      ), De(
        e,
        "flex",
        /*flex*/
        i[5]
      ), wc(e, "height", "100%");
    },
    m(a, c) {
      Hl(a, e, c), r && r.m(e, null), n = !0, l || (o = et(
        e,
        "click",
        /*paste_clipboard*/
        i[12]
      ), l = !0);
    },
    p(a, c) {
      r && r.p && (!n || c[0] & /*$$scope*/
      33554432) && kc(
        r,
        s,
        a,
        /*$$scope*/
        a[25],
        n ? pc(
          s,
          /*$$scope*/
          a[25],
          c,
          null
        ) : bc(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || c[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && Le(e, "tabindex", t), (!n || c[0] & /*hidden*/
      512) && De(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || c[0] & /*center*/
      16) && De(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || c[0] & /*boundedheight*/
      8) && De(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || c[0] & /*flex*/
      32) && De(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (bn(r, a), n = !0);
    },
    o(a) {
      Xn(r, a), n = !1;
    },
    d(a) {
      a && Il(e), r && r.d(a), l = !1, o();
    }
  };
}
function Sa(i) {
  let e, t;
  return e = new Oh({
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
      Vh(e.$$.fragment);
    },
    m(n, l) {
      Zh(e, n, l), t = !0;
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
      t || (bn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Xn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Nh(e, n);
    }
  };
}
function im(i) {
  let e, t, n, l;
  const o = [nm, tm, em], s = [];
  function r(a, c) {
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
      t.c(), n = gc();
    },
    m(a, c) {
      s[e].m(a, c), Hl(a, n, c), l = !0;
    },
    p(a, c) {
      let _ = e;
      e = r(a), e === _ ? s[e].p(a, c) : (vc(), Xn(s[_], 1, 1, () => {
        s[_] = null;
      }), hc(), t = s[e], t ? t.p(a, c) : (t = s[e] = o[e](a), t.c()), bn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (bn(t), l = !0);
    },
    o(a) {
      Xn(t), l = !1;
    },
    d(a) {
      a && Il(n), s[e].d(a);
    }
  };
}
function lm(i, e, t) {
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
function om(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var o = this && this.__awaiter || function(L, T, V, re) {
    function ue(A) {
      return A instanceof V ? A : new V(function(st) {
        st(A);
      });
    }
    return new (V || (V = Promise))(function(A, st) {
      function Xe(je) {
        try {
          Te(re.next(je));
        } catch (ye) {
          st(ye);
        }
      }
      function $(je) {
        try {
          Te(re.throw(je));
        } catch (ye) {
          st(ye);
        }
      }
      function Te(je) {
        je.done ? A(je.value) : ue(je.value).then(Xe, $);
      }
      Te((re = re.apply(L, T || [])).next());
    });
  };
  let { filetype: s = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: c = !0 } = e, { flex: _ = !0 } = e, { file_count: f = "single" } = e, { disable_click: d = !1 } = e, { root: h } = e, { hidden: b = !1 } = e, { format: u = "file" } = e, { uploading: m = !1 } = e, { hidden_upload: g = null } = e, { show_progress: w = !0 } = e, { max_file_size: p = null } = e, { upload: y } = e, { stream_handler: z } = e, k, S, q;
  const M = xh(), D = ["image", "video", "audio", "text", "file"], E = (L) => L.startsWith(".") || L.endsWith("/*") ? L : D.includes(L) ? L + "/*" : "." + L;
  function X() {
    t(20, r = !r);
  }
  function C() {
    navigator.clipboard.read().then((L) => o(this, void 0, void 0, function* () {
      for (let T = 0; T < L.length; T++) {
        const V = L[T].types.find((re) => re.startsWith("image/"));
        if (V) {
          L[T].getType(V).then((re) => o(this, void 0, void 0, function* () {
            const ue = new File([re], `clipboard.${V.replace("image/", "")}`);
            yield x([ue]);
          }));
          break;
        }
      }
    }));
  }
  function ee() {
    d || g && (t(2, g.value = "", g), g.click());
  }
  function Q(L) {
    return o(this, void 0, void 0, function* () {
      yield $h(), t(14, k = Math.random().toString(36).substring(2, 15)), t(1, m = !0);
      try {
        const T = yield y(L, h, k, p ?? 1 / 0);
        return M("load", f === "single" ? T == null ? void 0 : T[0] : T), t(1, m = !1), T || [];
      } catch (T) {
        return M("error", T.message), t(1, m = !1), [];
      }
    });
  }
  function x(L) {
    return o(this, void 0, void 0, function* () {
      if (!L.length)
        return;
      let T = L.map((V) => new File([V], V instanceof File ? V.name : "file", { type: V.type }));
      return t(15, S = yield uc(T)), yield Q(S);
    });
  }
  function G(L) {
    return o(this, void 0, void 0, function* () {
      const T = L.target;
      if (T.files)
        if (u != "blob")
          yield x(Array.from(T.files));
        else {
          if (f === "single") {
            M("load", T.files[0]);
            return;
          }
          M("load", T.files);
        }
    });
  }
  function R(L) {
    return o(this, void 0, void 0, function* () {
      var T;
      if (t(20, r = !1), !(!((T = L.dataTransfer) === null || T === void 0) && T.files)) return;
      const V = Array.from(L.dataTransfer.files).filter((re) => {
        const ue = "." + re.name.split(".").pop();
        return ue && lm(q, ue, re.type) || (ue && Array.isArray(s) ? s.includes(ue) : ue === s) ? !0 : (M("error", `Invalid file type only ${s} allowed.`), !1);
      });
      yield x(V);
    });
  }
  function O(L) {
    wn.call(this, i, L);
  }
  function I(L) {
    wn.call(this, i, L);
  }
  function U(L) {
    wn.call(this, i, L);
  }
  function Y(L) {
    wn.call(this, i, L);
  }
  function le(L) {
    wn.call(this, i, L);
  }
  function ae(L) {
    wn.call(this, i, L);
  }
  function H(L) {
    wn.call(this, i, L);
  }
  function be(L) {
    Uh[L ? "unshift" : "push"](() => {
      g = L, t(2, g);
    });
  }
  return i.$$set = (L) => {
    "filetype" in L && t(0, s = L.filetype), "dragging" in L && t(20, r = L.dragging), "boundedheight" in L && t(3, a = L.boundedheight), "center" in L && t(4, c = L.center), "flex" in L && t(5, _ = L.flex), "file_count" in L && t(6, f = L.file_count), "disable_click" in L && t(7, d = L.disable_click), "root" in L && t(8, h = L.root), "hidden" in L && t(9, b = L.hidden), "format" in L && t(21, u = L.format), "uploading" in L && t(1, m = L.uploading), "hidden_upload" in L && t(2, g = L.hidden_upload), "show_progress" in L && t(10, w = L.show_progress), "max_file_size" in L && t(22, p = L.max_file_size), "upload" in L && t(23, y = L.upload), "stream_handler" in L && t(11, z = L.stream_handler), "$$scope" in L && t(25, l = L.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*filetype*/
    1 && (s == null ? t(16, q = null) : typeof s == "string" ? t(16, q = E(s)) : (t(0, s = s.map(E)), t(16, q = s.join(", "))));
  }, [
    s,
    m,
    g,
    a,
    c,
    _,
    f,
    d,
    h,
    b,
    w,
    z,
    C,
    ee,
    k,
    S,
    q,
    X,
    G,
    R,
    r,
    u,
    p,
    y,
    x,
    l,
    n,
    O,
    I,
    U,
    Y,
    le,
    ae,
    H,
    be
  ];
}
class sm extends Ph {
  constructor(e) {
    super(), Kh(
      this,
      e,
      om,
      im,
      Jh,
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
  SvelteComponent: L8,
  append: A8,
  attr: W8,
  check_outros: R8,
  create_component: X8,
  destroy_component: Y8,
  detach: I8,
  element: H8,
  group_outros: T8,
  init: j8,
  insert: F8,
  mount_component: O8,
  safe_not_equal: P8,
  set_style: U8,
  space: V8,
  toggle_class: N8,
  transition_in: K8,
  transition_out: Z8
} = window.__gradio__svelte__internal, { createEventDispatcher: G8 } = window.__gradio__svelte__internal, {
  SvelteComponent: J8,
  assign: Q8,
  compute_rest_props: x8,
  detach: $8,
  element: e7,
  exclude_internal_props: t7,
  get_spread_update: n7,
  init: i7,
  insert: l7,
  noop: o7,
  safe_not_equal: s7,
  set_attributes: a7,
  src_url_equal: r7,
  toggle_class: c7
} = window.__gradio__svelte__internal, {
  SvelteComponent: _7,
  append: u7,
  attr: f7,
  bubble: d7,
  check_outros: h7,
  create_component: m7,
  destroy_component: g7,
  detach: b7,
  element: p7,
  empty: v7,
  group_outros: w7,
  init: k7,
  insert: y7,
  listen: C7,
  mount_component: S7,
  safe_not_equal: q7,
  space: z7,
  toggle_class: D7,
  transition_in: B7,
  transition_out: M7
} = window.__gradio__svelte__internal, { createEventDispatcher: E7 } = window.__gradio__svelte__internal, {
  SvelteComponent: am,
  append: Gi,
  attr: wo,
  create_component: rm,
  destroy_component: cm,
  detach: _m,
  element: ko,
  init: um,
  insert: fm,
  listen: dm,
  mount_component: hm,
  noop: mm,
  safe_not_equal: gm,
  set_style: bm,
  space: pm,
  text: vm,
  transition_in: wm,
  transition_out: km
} = window.__gradio__svelte__internal, { createEventDispatcher: ym } = window.__gradio__svelte__internal;
function Cm(i) {
  let e, t, n, l, o, s = "Click to Access Webcam", r, a, c, _;
  return l = new Tr({}), {
    c() {
      e = ko("button"), t = ko("div"), n = ko("span"), rm(l.$$.fragment), o = pm(), r = vm(s), wo(n, "class", "icon-wrap svelte-fjcd9c"), wo(t, "class", "wrap svelte-fjcd9c"), wo(e, "class", "svelte-fjcd9c"), bm(e, "height", "100%");
    },
    m(f, d) {
      fm(f, e, d), Gi(e, t), Gi(t, n), hm(l, n, null), Gi(t, o), Gi(t, r), a = !0, c || (_ = dm(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), c = !0);
    },
    p: mm,
    i(f) {
      a || (wm(l.$$.fragment, f), a = !0);
    },
    o(f) {
      km(l.$$.fragment, f), a = !1;
    },
    d(f) {
      f && _m(e), cm(l), c = !1, _();
    }
  };
}
function Sm(i) {
  const e = ym();
  return [e, () => e("click")];
}
class qm extends am {
  constructor(e) {
    super(), um(this, e, Sm, Cm, gm, {});
  }
}
function zm() {
  return navigator.mediaDevices.enumerateDevices();
}
function Dm(i, e) {
  e.srcObject = i, e.muted = !0, e.play();
}
async function qa(i, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, l = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: i
  };
  return navigator.mediaDevices.getUserMedia(l).then((o) => (Dm(o, e), o));
}
function Bm(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: Mm,
  action_destroyer: Em,
  add_render_callback: Lm,
  append: Zt,
  attr: ke,
  binding_callbacks: Am,
  check_outros: Ei,
  create_component: ci,
  create_in_transition: Wm,
  destroy_component: _i,
  destroy_each: Rm,
  detach: Je,
  element: ot,
  empty: ds,
  ensure_array_like: za,
  group_outros: Li,
  init: Xm,
  insert: Qe,
  listen: yl,
  mount_component: ui,
  noop: hs,
  run_all: Ym,
  safe_not_equal: Im,
  set_data: yc,
  set_input_value: $o,
  space: Ri,
  stop_propagation: Hm,
  text: Cc,
  toggle_class: Ji,
  transition_in: Be,
  transition_out: Re
} = window.__gradio__svelte__internal, { createEventDispatcher: Tm, onMount: jm } = window.__gradio__svelte__internal;
function Da(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function Fm(i) {
  let e, t, n, l, o, s, r, a, c, _, f;
  const d = [Um, Pm], h = [];
  function b(g, w) {
    return (
      /*mode*/
      g[1] === "video" || /*streaming*/
      g[0] ? 0 : 1
    );
  }
  n = b(i), l = h[n] = d[n](i);
  let u = !/*recording*/
  i[8] && Ba(i), m = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && Ma(i)
  );
  return {
    c() {
      e = ot("div"), t = ot("button"), l.c(), s = Ri(), u && u.c(), r = Ri(), m && m.c(), a = ds(), ke(t, "aria-label", o = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), ke(t, "class", "svelte-8hqvb6"), ke(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(g, w) {
      Qe(g, e, w), Zt(e, t), h[n].m(t, null), Zt(e, s), u && u.m(e, null), Qe(g, r, w), m && m.m(g, w), Qe(g, a, w), c = !0, _ || (f = yl(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), _ = !0);
    },
    p(g, w) {
      let p = n;
      n = b(g), n === p ? h[n].p(g, w) : (Li(), Re(h[p], 1, 1, () => {
        h[p] = null;
      }), Ei(), l = h[n], l ? l.p(g, w) : (l = h[n] = d[n](g), l.c()), Be(l, 1), l.m(t, null)), (!c || w[0] & /*mode*/
      2 && o !== (o = /*mode*/
      g[1] === "image" ? "capture photo" : "start recording")) && ke(t, "aria-label", o), /*recording*/
      g[8] ? u && (Li(), Re(u, 1, 1, () => {
        u = null;
      }), Ei()) : u ? (u.p(g, w), w[0] & /*recording*/
      256 && Be(u, 1)) : (u = Ba(g), u.c(), Be(u, 1), u.m(e, null)), /*options_open*/
      g[10] && /*selected_device*/
      g[7] ? m ? (m.p(g, w), w[0] & /*options_open, selected_device*/
      1152 && Be(m, 1)) : (m = Ma(g), m.c(), Be(m, 1), m.m(a.parentNode, a)) : m && (Li(), Re(m, 1, 1, () => {
        m = null;
      }), Ei());
    },
    i(g) {
      c || (Be(l), Be(u), Be(m), c = !0);
    },
    o(g) {
      Re(l), Re(u), Re(m), c = !1;
    },
    d(g) {
      g && (Je(e), Je(r), Je(a)), h[n].d(), u && u.d(), m && m.d(g), _ = !1, f();
    }
  };
}
function Om(i) {
  let e, t, n, l;
  return t = new qm({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = ot("div"), ci(t.$$.fragment), ke(e, "title", "grant webcam access");
    },
    m(o, s) {
      Qe(o, e, s), ui(t, e, null), l = !0;
    },
    p: hs,
    i(o) {
      l || (Be(t.$$.fragment, o), o && (n || Lm(() => {
        n = Wm(e, E1, { delay: 100, duration: 200 }), n.start();
      })), l = !0);
    },
    o(o) {
      Re(t.$$.fragment, o), l = !1;
    },
    d(o) {
      o && Je(e), _i(t);
    }
  };
}
function Pm(i) {
  let e, t, n;
  return t = new uf({}), {
    c() {
      e = ot("div"), ci(t.$$.fragment), ke(e, "class", "icon svelte-8hqvb6"), ke(e, "title", "capture photo");
    },
    m(l, o) {
      Qe(l, e, o), ui(t, e, null), n = !0;
    },
    p: hs,
    i(l) {
      n || (Be(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Re(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Je(e), _i(t);
    }
  };
}
function Um(i) {
  let e, t, n, l;
  const o = [Nm, Vm], s = [];
  function r(a, c) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = ds();
    },
    m(a, c) {
      s[e].m(a, c), Qe(a, n, c), l = !0;
    },
    p(a, c) {
      let _ = e;
      e = r(a), e !== _ && (Li(), Re(s[_], 1, 1, () => {
        s[_] = null;
      }), Ei(), t = s[e], t || (t = s[e] = o[e](a), t.c()), Be(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Be(t), l = !0);
    },
    o(a) {
      Re(t), l = !1;
    },
    d(a) {
      a && Je(n), s[e].d(a);
    }
  };
}
function Vm(i) {
  let e, t, n;
  return t = new vf({}), {
    c() {
      e = ot("div"), ci(t.$$.fragment), ke(e, "class", "icon red svelte-8hqvb6"), ke(e, "title", "start recording");
    },
    m(l, o) {
      Qe(l, e, o), ui(t, e, null), n = !0;
    },
    i(l) {
      n || (Be(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Re(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Je(e), _i(t);
    }
  };
}
function Nm(i) {
  let e, t, n;
  return t = new Ed({}), {
    c() {
      e = ot("div"), ci(t.$$.fragment), ke(e, "class", "icon red svelte-8hqvb6"), ke(e, "title", "stop recording");
    },
    m(l, o) {
      Qe(l, e, o), ui(t, e, null), n = !0;
    },
    i(l) {
      n || (Be(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Re(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Je(e), _i(t);
    }
  };
}
function Ba(i) {
  let e, t, n, l, o;
  return t = new rs({}), {
    c() {
      e = ot("button"), ci(t.$$.fragment), ke(e, "class", "icon svelte-8hqvb6"), ke(e, "aria-label", "select input source");
    },
    m(s, r) {
      Qe(s, e, r), ui(t, e, null), n = !0, l || (o = yl(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), l = !0);
    },
    p: hs,
    i(s) {
      n || (Be(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Re(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Je(e), _i(t), l = !1, o();
    }
  };
}
function Ma(i) {
  let e, t, n, l, o, s, r;
  n = new rs({});
  function a(f, d) {
    return (
      /*available_video_devices*/
      f[6].length === 0 ? Zm : Km
    );
  }
  let c = a(i), _ = c(i);
  return {
    c() {
      e = ot("select"), t = ot("button"), ci(n.$$.fragment), l = Ri(), _.c(), ke(t, "class", "inset-icon svelte-8hqvb6"), ke(e, "class", "select-wrap svelte-8hqvb6"), ke(e, "aria-label", "select source");
    },
    m(f, d) {
      Qe(f, e, d), Zt(e, t), ui(n, t, null), Zt(t, l), _.m(e, null), o = !0, s || (r = [
        yl(t, "click", Hm(
          /*click_handler_2*/
          i[22]
        )),
        Em(ms.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        yl(
          e,
          "change",
          /*handle_device_change*/
          i[11]
        )
      ], s = !0);
    },
    p(f, d) {
      c === (c = a(f)) && _ ? _.p(f, d) : (_.d(1), _ = c(f), _ && (_.c(), _.m(e, null)));
    },
    i(f) {
      o || (Be(n.$$.fragment, f), o = !0);
    },
    o(f) {
      Re(n.$$.fragment, f), o = !1;
    },
    d(f) {
      f && Je(e), _i(n), _.d(), s = !1, Ym(r);
    }
  };
}
function Km(i) {
  let e, t = za(
    /*available_video_devices*/
    i[6]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = Ea(Da(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = ds();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      Qe(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*available_video_devices, selected_device*/
      192) {
        t = za(
          /*available_video_devices*/
          l[6]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = Da(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = Ea(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && Je(e), Rm(n, l);
    }
  };
}
function Zm(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = ot("option"), n = Cc(t), e.__value = "", $o(e, e.__value), ke(e, "class", "svelte-8hqvb6");
    },
    m(l, o) {
      Qe(l, e, o), Zt(e, n);
    },
    p(l, o) {
      o[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      l[3]("common.no_devices") + "") && yc(n, t);
    },
    d(l) {
      l && Je(e);
    }
  };
}
function Ea(i) {
  let e, t = (
    /*device*/
    i[32].label + ""
  ), n, l, o, s;
  return {
    c() {
      e = ot("option"), n = Cc(t), l = Ri(), e.__value = o = /*device*/
      i[32].deviceId, $o(e, e.__value), e.selected = s = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, ke(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      Qe(r, e, a), Zt(e, n), Zt(e, l);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && yc(n, t), a[0] & /*available_video_devices*/
      64 && o !== (o = /*device*/
      r[32].deviceId) && (e.__value = o, $o(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && s !== (s = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = s);
    },
    d(r) {
      r && Je(e);
    }
  };
}
function Gm(i) {
  let e, t, n, l, o, s;
  const r = [Om, Fm], a = [];
  function c(_, f) {
    return (
      /*webcam_accessed*/
      _[9] ? 1 : 0
    );
  }
  return l = c(i), o = a[l] = r[l](i), {
    c() {
      e = ot("div"), t = ot("video"), n = Ri(), o.c(), ke(t, "class", "svelte-8hqvb6"), Ji(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), Ji(t, "hide", !/*webcam_accessed*/
      i[9]), ke(e, "class", "wrap svelte-8hqvb6");
    },
    m(_, f) {
      Qe(_, e, f), Zt(e, t), i[19](t), Zt(e, n), a[l].m(e, null), s = !0;
    },
    p(_, f) {
      (!s || f[0] & /*mirror_webcam*/
      4) && Ji(
        t,
        "flip",
        /*mirror_webcam*/
        _[2]
      ), (!s || f[0] & /*webcam_accessed*/
      512) && Ji(t, "hide", !/*webcam_accessed*/
      _[9]);
      let d = l;
      l = c(_), l === d ? a[l].p(_, f) : (Li(), Re(a[d], 1, 1, () => {
        a[d] = null;
      }), Ei(), o = a[l], o ? o.p(_, f) : (o = a[l] = r[l](_), o.c()), Be(o, 1), o.m(e, null));
    },
    i(_) {
      s || (Be(o), s = !0);
    },
    o(_) {
      Re(o), s = !1;
    },
    d(_) {
      _ && Je(e), i[19](null), a[l].d();
    }
  };
}
function ms(i, e) {
  const t = (n) => {
    i && !i.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function Jm(i, e, t) {
  var n = this && this.__awaiter || function(R, O, I, U) {
    function Y(le) {
      return le instanceof I ? le : new I(function(ae) {
        ae(le);
      });
    }
    return new (I || (I = Promise))(function(le, ae) {
      function H(T) {
        try {
          L(U.next(T));
        } catch (V) {
          ae(V);
        }
      }
      function be(T) {
        try {
          L(U.throw(T));
        } catch (V) {
          ae(V);
        }
      }
      function L(T) {
        T.done ? le(T.value) : Y(T.value).then(H, be);
      }
      L((U = U.apply(R, O || [])).next());
    });
  };
  let l, o = [], s = null, r, { streaming: a = !1 } = e, { pending: c = !1 } = e, { root: _ = "" } = e, { mode: f = "image" } = e, { mirror_webcam: d } = e, { include_audio: h } = e, { i18n: b } = e, { upload: u } = e;
  const m = Tm();
  jm(() => r = document.createElement("canvas"));
  const g = (R) => n(void 0, void 0, void 0, function* () {
    const I = R.target.value;
    yield qa(h, l, I).then((U) => n(void 0, void 0, void 0, function* () {
      k = U, t(7, s = o.find((Y) => Y.deviceId === I) || null), t(10, X = !1);
    }));
  });
  function w() {
    return n(this, void 0, void 0, function* () {
      try {
        qa(h, l).then((R) => n(this, void 0, void 0, function* () {
          t(9, D = !0), t(6, o = yield zm()), k = R;
        })).then(() => Bm(o)).then((R) => {
          t(6, o = R);
          const O = k.getTracks().map((I) => {
            var U;
            return (U = I.getSettings()) === null || U === void 0 ? void 0 : U.deviceId;
          })[0];
          t(7, s = O && R.find((I) => I.deviceId === O) || o[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && m("error", b("image.no_webcam_support"));
      } catch (R) {
        if (R instanceof DOMException && R.name == "NotAllowedError")
          m("error", b("image.allow_webcam_access"));
        else
          throw R;
      }
    });
  }
  function p() {
    var R = r.getContext("2d");
    (!a || a && y) && l.videoWidth && l.videoHeight && (r.width = l.videoWidth, r.height = l.videoHeight, R.drawImage(l, 0, 0, l.videoWidth, l.videoHeight), d && (R.scale(-1, 1), R.drawImage(l, -l.videoWidth, 0)), r.toBlob(
      (O) => {
        m(a ? "stream" : "capture", O);
      },
      "image/png",
      0.8
    ));
  }
  let y = !1, z = [], k, S, q;
  function M() {
    if (y) {
      q.stop();
      let R = new Blob(z, { type: S }), O = new FileReader();
      O.onload = function(I) {
        return n(this, void 0, void 0, function* () {
          var U;
          if (I.target) {
            let Y = new File([R], "sample." + S.substring(6));
            const le = yield uc([Y]);
            let ae = ((U = yield u(le, _)) === null || U === void 0 ? void 0 : U.filter(Boolean))[0];
            m("capture", ae), m("stop_recording");
          }
        });
      }, O.readAsDataURL(R);
    } else {
      m("start_recording"), z = [];
      let R = ["video/webm", "video/mp4"];
      for (let O of R)
        if (MediaRecorder.isTypeSupported(O)) {
          S = O;
          break;
        }
      if (S === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      q = new MediaRecorder(k, { mimeType: S }), q.addEventListener("dataavailable", function(O) {
        z.push(O.data);
      }), q.start(200);
    }
    t(8, y = !y);
  }
  let D = !1;
  function E() {
    f === "image" && a && t(8, y = !y), f === "image" ? p() : M(), !y && k && (k.getTracks().forEach((R) => R.stop()), t(5, l.srcObject = null, l), t(9, D = !1));
  }
  a && f === "image" && window.setInterval(
    () => {
      l && !c && p();
    },
    500
  );
  let X = !1;
  function C(R) {
    R.preventDefault(), R.stopPropagation(), t(10, X = !1);
  }
  function ee(R) {
    Am[R ? "unshift" : "push"](() => {
      l = R, t(5, l);
    });
  }
  const Q = async () => w(), x = () => t(10, X = !0), G = () => t(10, X = !1);
  return i.$$set = (R) => {
    "streaming" in R && t(0, a = R.streaming), "pending" in R && t(15, c = R.pending), "root" in R && t(16, _ = R.root), "mode" in R && t(1, f = R.mode), "mirror_webcam" in R && t(2, d = R.mirror_webcam), "include_audio" in R && t(17, h = R.include_audio), "i18n" in R && t(3, b = R.i18n), "upload" in R && t(18, u = R.upload);
  }, [
    a,
    f,
    d,
    b,
    ms,
    l,
    o,
    s,
    y,
    D,
    X,
    g,
    w,
    E,
    C,
    c,
    _,
    h,
    u,
    ee,
    Q,
    x,
    G
  ];
}
class Qm extends Mm {
  constructor(e) {
    super(), Xm(
      this,
      e,
      Jm,
      Gm,
      Im,
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
    return ms;
  }
}
const {
  SvelteComponent: L7,
  attr: A7,
  create_component: W7,
  destroy_component: R7,
  detach: X7,
  element: Y7,
  init: I7,
  insert: H7,
  mount_component: T7,
  noop: j7,
  safe_not_equal: F7,
  transition_in: O7,
  transition_out: P7
} = window.__gradio__svelte__internal, { createEventDispatcher: U7 } = window.__gradio__svelte__internal, {
  SvelteComponent: V7,
  add_flush_callback: N7,
  append: K7,
  attr: Z7,
  bind: G7,
  binding_callbacks: J7,
  bubble: Q7,
  check_outros: x7,
  create_component: $7,
  create_slot: e9,
  destroy_component: t9,
  detach: n9,
  element: i9,
  empty: l9,
  get_all_dirty_from_scope: o9,
  get_slot_changes: s9,
  group_outros: a9,
  init: r9,
  insert: c9,
  listen: _9,
  mount_component: u9,
  noop: f9,
  safe_not_equal: d9,
  space: h9,
  toggle_class: m9,
  transition_in: g9,
  transition_out: b9,
  update_slot_base: p9
} = window.__gradio__svelte__internal, { createEventDispatcher: v9, tick: w9 } = window.__gradio__svelte__internal, {
  SvelteComponent: k9,
  attr: y9,
  check_outros: C9,
  create_component: S9,
  destroy_component: q9,
  detach: z9,
  element: D9,
  group_outros: B9,
  init: M9,
  insert: E9,
  mount_component: L9,
  safe_not_equal: A9,
  toggle_class: W9,
  transition_in: R9,
  transition_out: X9
} = window.__gradio__svelte__internal, {
  SvelteComponent: Y9,
  add_flush_callback: I9,
  assign: H9,
  bind: T9,
  binding_callbacks: j9,
  check_outros: F9,
  create_component: O9,
  destroy_component: P9,
  detach: U9,
  empty: V9,
  flush: N9,
  get_spread_object: K9,
  get_spread_update: Z9,
  group_outros: G9,
  init: J9,
  insert: Q9,
  mount_component: x9,
  safe_not_equal: $9,
  space: ey,
  transition_in: ty,
  transition_out: ny
} = window.__gradio__svelte__internal, {
  SvelteComponent: iy,
  append: ly,
  attr: oy,
  detach: sy,
  init: ay,
  insert: ry,
  noop: cy,
  safe_not_equal: _y,
  set_style: uy,
  svg_element: fy
} = window.__gradio__svelte__internal, {
  SvelteComponent: xm,
  append: sn,
  attr: P,
  detach: $m,
  init: e0,
  insert: t0,
  noop: yo,
  safe_not_equal: n0,
  set_style: an,
  svg_element: Ut
} = window.__gradio__svelte__internal;
function i0(i) {
  let e, t, n, l, o, s, r, a, c;
  return {
    c() {
      e = Ut("svg"), t = Ut("rect"), n = Ut("rect"), l = Ut("rect"), o = Ut("rect"), s = Ut("line"), r = Ut("line"), a = Ut("line"), c = Ut("line"), P(t, "x", "2"), P(t, "y", "2"), P(t, "width", "5"), P(t, "height", "5"), P(t, "rx", "1"), P(t, "ry", "1"), P(t, "stroke-width", "2"), P(t, "fill", "none"), P(n, "x", "17"), P(n, "y", "2"), P(n, "width", "5"), P(n, "height", "5"), P(n, "rx", "1"), P(n, "ry", "1"), P(n, "stroke-width", "2"), P(n, "fill", "none"), P(l, "x", "2"), P(l, "y", "17"), P(l, "width", "5"), P(l, "height", "5"), P(l, "rx", "1"), P(l, "ry", "1"), P(l, "stroke-width", "2"), P(l, "fill", "none"), P(o, "x", "17"), P(o, "y", "17"), P(o, "width", "5"), P(o, "height", "5"), P(o, "rx", "1"), P(o, "ry", "1"), P(o, "stroke-width", "2"), P(o, "fill", "none"), P(s, "x1", "7.5"), P(s, "y1", "4.5"), P(s, "x2", "16"), P(s, "y2", "4.5"), an(s, "stroke-width", "2px"), P(r, "x1", "7.5"), P(r, "y1", "19.5"), P(r, "x2", "16"), P(r, "y2", "19.5"), an(r, "stroke-width", "2px"), P(a, "x1", "4.5"), P(a, "y1", "8"), P(a, "x2", "4.5"), P(a, "y2", "16"), an(a, "stroke-width", "2px"), P(c, "x1", "19.5"), P(c, "y1", "8"), P(c, "x2", "19.5"), P(c, "y2", "16"), an(c, "stroke-width", "2px"), P(e, "width", "100%"), P(e, "height", "100%"), P(e, "viewBox", "0 0 24 24"), P(e, "version", "1.1"), P(e, "xmlns", "http://www.w3.org/2000/svg"), P(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), P(e, "xml:space", "preserve"), P(e, "stroke", "currentColor"), an(e, "fill-rule", "evenodd"), an(e, "clip-rule", "evenodd"), an(e, "stroke-linecap", "round"), an(e, "stroke-linejoin", "round");
    },
    m(_, f) {
      t0(_, e, f), sn(e, t), sn(e, n), sn(e, l), sn(e, o), sn(e, s), sn(e, r), sn(e, a), sn(e, c);
    },
    p: yo,
    i: yo,
    o: yo,
    d(_) {
      _ && $m(e);
    }
  };
}
class l0 extends xm {
  constructor(e) {
    super(), e0(this, e, null, i0, n0, {});
  }
}
const {
  SvelteComponent: o0,
  append: Qi,
  attr: Ne,
  detach: s0,
  init: a0,
  insert: r0,
  noop: Co,
  safe_not_equal: c0,
  set_style: xi,
  svg_element: pi
} = window.__gradio__svelte__internal;
function _0(i) {
  let e, t, n, l, o;
  return {
    c() {
      e = pi("svg"), t = pi("path"), n = pi("path"), l = pi("path"), o = pi("path"), Ne(t, "stroke", "none"), Ne(t, "d", "M0 0h24v24H0z"), Ne(t, "fill", "none"), Ne(n, "d", "M8 6h12"), Ne(l, "d", "M6 12h12"), Ne(o, "d", "M4 18h12"), Ne(e, "width", "100%"), Ne(e, "height", "100%"), Ne(e, "viewBox", "0 0 24 24"), Ne(e, "version", "1.1"), Ne(e, "xmlns", "http://www.w3.org/2000/svg"), Ne(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Ne(e, "xml:space", "preserve"), Ne(e, "stroke", "currentColor"), xi(e, "fill-rule", "evenodd"), xi(e, "clip-rule", "evenodd"), xi(e, "stroke-linecap", "round"), xi(e, "stroke-linejoin", "round");
    },
    m(s, r) {
      r0(s, e, r), Qi(e, t), Qi(e, n), Qi(e, l), Qi(e, o);
    },
    p: Co,
    i: Co,
    o: Co,
    d(s) {
      s && s0(e);
    }
  };
}
class u0 extends o0 {
  constructor(e) {
    super(), a0(this, e, null, _0, c0, {});
  }
}
const {
  SvelteComponent: f0,
  append: d0,
  attr: Vt,
  detach: h0,
  init: m0,
  insert: g0,
  noop: So,
  safe_not_equal: b0,
  set_style: $i,
  svg_element: La
} = window.__gradio__svelte__internal;
function p0(i) {
  let e, t;
  return {
    c() {
      e = La("svg"), t = La("path"), Vt(t, "d", "M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"), Vt(e, "width", "100%"), Vt(e, "height", "100%"), Vt(e, "viewBox", "0 0 24 24"), Vt(e, "version", "1.1"), Vt(e, "xmlns", "http://www.w3.org/2000/svg"), Vt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Vt(e, "xml:space", "preserve"), Vt(e, "stroke", "currentColor"), $i(e, "fill-rule", "evenodd"), $i(e, "clip-rule", "evenodd"), $i(e, "stroke-linecap", "round"), $i(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      g0(n, e, l), d0(e, t);
    },
    p: So,
    i: So,
    o: So,
    d(n) {
      n && h0(e);
    }
  };
}
let v0 = class extends f0 {
  constructor(e) {
    super(), m0(this, e, null, p0, b0, {});
  }
};
const {
  SvelteComponent: w0,
  append: k0,
  attr: kt,
  detach: y0,
  init: C0,
  insert: S0,
  noop: qo,
  safe_not_equal: q0,
  set_style: el,
  svg_element: Aa
} = window.__gradio__svelte__internal;
function z0(i) {
  let e, t;
  return {
    c() {
      e = Aa("svg"), t = Aa("path"), kt(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), kt(t, "fill", "none"), kt(t, "stroke-width", "2"), kt(e, "width", "100%"), kt(e, "height", "100%"), kt(e, "viewBox", "0 0 24 24"), kt(e, "version", "1.1"), kt(e, "xmlns", "http://www.w3.org/2000/svg"), kt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), kt(e, "xml:space", "preserve"), kt(e, "stroke", "currentColor"), el(e, "fill-rule", "evenodd"), el(e, "clip-rule", "evenodd"), el(e, "stroke-linecap", "round"), el(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      S0(n, e, l), k0(e, t);
    },
    p: qo,
    i: qo,
    o: qo,
    d(n) {
      n && y0(e);
    }
  };
}
class D0 extends w0 {
  constructor(e) {
    super(), C0(this, e, null, z0, q0, {});
  }
}
const {
  SvelteComponent: B0,
  append: M0,
  attr: yt,
  detach: E0,
  init: L0,
  insert: A0,
  noop: zo,
  safe_not_equal: W0,
  set_style: tl,
  svg_element: Wa
} = window.__gradio__svelte__internal;
function R0(i) {
  let e, t;
  return {
    c() {
      e = Wa("svg"), t = Wa("path"), yt(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), yt(t, "fill", "none"), yt(t, "stroke-width", "2"), yt(e, "width", "100%"), yt(e, "height", "100%"), yt(e, "viewBox", "0 0 24 24"), yt(e, "version", "1.1"), yt(e, "xmlns", "http://www.w3.org/2000/svg"), yt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), yt(e, "xml:space", "preserve"), yt(e, "stroke", "currentColor"), tl(e, "fill-rule", "evenodd"), tl(e, "clip-rule", "evenodd"), tl(e, "stroke-linecap", "round"), tl(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      A0(n, e, l), M0(e, t);
    },
    p: zo,
    i: zo,
    o: zo,
    d(n) {
      n && E0(e);
    }
  };
}
class X0 extends B0 {
  constructor(e) {
    super(), L0(this, e, null, R0, W0, {});
  }
}
const {
  SvelteComponent: Y0,
  append: Ra,
  attr: Nt,
  detach: I0,
  init: H0,
  insert: T0,
  noop: Do,
  safe_not_equal: j0,
  set_style: nl,
  svg_element: Bo
} = window.__gradio__svelte__internal;
function F0(i) {
  let e, t, n;
  return {
    c() {
      e = Bo("svg"), t = Bo("path"), n = Bo("path"), Nt(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), Nt(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), Nt(e, "width", "100%"), Nt(e, "height", "100%"), Nt(e, "viewBox", "0 0 24 24"), Nt(e, "xmlns", "http://www.w3.org/2000/svg"), Nt(e, "fill", "none"), Nt(e, "stroke", "currentColor"), Nt(e, "stroke-width", "2"), nl(e, "fill-rule", "evenodd"), nl(e, "clip-rule", "evenodd"), nl(e, "stroke-linecap", "round"), nl(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      T0(l, e, o), Ra(e, t), Ra(e, n);
    },
    p: Do,
    i: Do,
    o: Do,
    d(l) {
      l && I0(e);
    }
  };
}
class O0 extends Y0 {
  constructor(e) {
    super(), H0(this, e, null, F0, j0, {});
  }
}
const {
  SvelteComponent: P0,
  append: U0,
  attr: rn,
  detach: V0,
  init: N0,
  insert: K0,
  noop: Mo,
  safe_not_equal: Z0,
  set_style: il,
  svg_element: Xa
} = window.__gradio__svelte__internal;
function G0(i) {
  let e, t;
  return {
    c() {
      e = Xa("svg"), t = Xa("path"), rn(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), rn(e, "width", "100%"), rn(e, "height", "100%"), rn(e, "viewBox", "0 0 24 24"), rn(e, "fill", "none"), rn(e, "stroke", "currentColor"), rn(e, "stroke-width", "2"), il(e, "fill-rule", "evenodd"), il(e, "clip-rule", "evenodd"), il(e, "stroke-linecap", "round"), il(e, "stroke-linejoin", "round"), rn(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      K0(n, e, l), U0(e, t);
    },
    p: Mo,
    i: Mo,
    o: Mo,
    d(n) {
      n && V0(e);
    }
  };
}
class J0 extends P0 {
  constructor(e) {
    super(), N0(this, e, null, G0, Z0, {});
  }
}
const {
  SvelteComponent: Q0,
  append: x0,
  attr: cn,
  detach: $0,
  init: eg,
  insert: tg,
  noop: Eo,
  safe_not_equal: ng,
  set_style: ll,
  svg_element: Ya
} = window.__gradio__svelte__internal;
function ig(i) {
  let e, t;
  return {
    c() {
      e = Ya("svg"), t = Ya("path"), cn(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), cn(e, "width", "100%"), cn(e, "height", "100%"), cn(e, "viewBox", "0 0 24 24"), cn(e, "fill", "none"), cn(e, "stroke", "currentColor"), cn(e, "stroke-width", "2"), ll(e, "fill-rule", "evenodd"), ll(e, "clip-rule", "evenodd"), ll(e, "stroke-linecap", "round"), ll(e, "stroke-linejoin", "round"), cn(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      tg(n, e, l), x0(e, t);
    },
    p: Eo,
    i: Eo,
    o: Eo,
    d(n) {
      n && $0(e);
    }
  };
}
class lg extends Q0 {
  constructor(e) {
    super(), eg(this, e, null, ig, ng, {});
  }
}
const {
  SvelteComponent: og,
  append: Ia,
  attr: Lo,
  bubble: Ha,
  create_component: sg,
  destroy_component: ag,
  detach: Sc,
  element: Ta,
  init: rg,
  insert: qc,
  listen: Ao,
  mount_component: cg,
  run_all: _g,
  safe_not_equal: ug,
  set_data: fg,
  set_input_value: ja,
  space: dg,
  text: hg,
  transition_in: mg,
  transition_out: gg
} = window.__gradio__svelte__internal, { createEventDispatcher: bg, afterUpdate: pg } = window.__gradio__svelte__internal;
function vg(i) {
  let e;
  return {
    c() {
      e = hg(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      qc(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && fg(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && Sc(e);
    }
  };
}
function wg(i) {
  let e, t, n, l, o, s, r;
  return t = new Ar({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[2]
      ),
      $$slots: { default: [vg] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = Ta("label"), sg(t.$$.fragment), n = dg(), l = Ta("input"), Lo(l, "type", "color"), l.disabled = /*disabled*/
      i[3], Lo(l, "class", "svelte-16l8u73"), Lo(e, "class", "block");
    },
    m(a, c) {
      qc(a, e, c), cg(t, e, null), Ia(e, n), Ia(e, l), ja(
        l,
        /*value*/
        i[0]
      ), o = !0, s || (r = [
        Ao(
          l,
          "input",
          /*input_input_handler*/
          i[8]
        ),
        Ao(
          l,
          "focus",
          /*focus_handler*/
          i[6]
        ),
        Ao(
          l,
          "blur",
          /*blur_handler*/
          i[7]
        )
      ], s = !0);
    },
    p(a, [c]) {
      const _ = {};
      c & /*show_label*/
      16 && (_.show_label = /*show_label*/
      a[4]), c & /*info*/
      4 && (_.info = /*info*/
      a[2]), c & /*$$scope, label*/
      2050 && (_.$$scope = { dirty: c, ctx: a }), t.$set(_), (!o || c & /*disabled*/
      8) && (l.disabled = /*disabled*/
      a[3]), c & /*value*/
      1 && ja(
        l,
        /*value*/
        a[0]
      );
    },
    i(a) {
      o || (mg(t.$$.fragment, a), o = !0);
    },
    o(a) {
      gg(t.$$.fragment, a), o = !1;
    },
    d(a) {
      a && Sc(e), ag(t), s = !1, _g(r);
    }
  };
}
function kg(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: l = !1 } = e, { label: o } = e, { info: s = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const c = bg();
  function _() {
    c("change", n), l || c("input");
  }
  pg(() => {
    t(5, l = !1);
  });
  function f(b) {
    Ha.call(this, i, b);
  }
  function d(b) {
    Ha.call(this, i, b);
  }
  function h() {
    n = this.value, t(0, n);
  }
  return i.$$set = (b) => {
    "value" in b && t(0, n = b.value), "value_is_output" in b && t(5, l = b.value_is_output), "label" in b && t(1, o = b.label), "info" in b && t(2, s = b.info), "disabled" in b && t(3, r = b.disabled), "show_label" in b && t(4, a = b.show_label);
  }, i.$$.update = () => {
    i.$$.dirty & /*value*/
    1 && _();
  }, [
    n,
    o,
    s,
    r,
    a,
    l,
    f,
    d,
    h
  ];
}
class yg extends og {
  constructor(e) {
    super(), rg(this, e, kg, wg, ug, {
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
  SvelteComponent: hy,
  append: my,
  attr: gy,
  component_subscribe: by,
  detach: py,
  element: vy,
  init: wy,
  insert: ky,
  noop: yy,
  safe_not_equal: Cy,
  set_style: Sy,
  svg_element: qy,
  toggle_class: zy
} = window.__gradio__svelte__internal, { onMount: Dy } = window.__gradio__svelte__internal, {
  SvelteComponent: By,
  append: My,
  attr: Ey,
  binding_callbacks: Ly,
  check_outros: Ay,
  create_component: Wy,
  create_slot: Ry,
  destroy_component: Xy,
  destroy_each: Yy,
  detach: Iy,
  element: Hy,
  empty: Ty,
  ensure_array_like: jy,
  get_all_dirty_from_scope: Fy,
  get_slot_changes: Oy,
  group_outros: Py,
  init: Uy,
  insert: Vy,
  mount_component: Ny,
  noop: Ky,
  safe_not_equal: Zy,
  set_data: Gy,
  set_style: Jy,
  space: Qy,
  text: xy,
  toggle_class: $y,
  transition_in: eC,
  transition_out: tC,
  update_slot_base: nC
} = window.__gradio__svelte__internal, { tick: iC } = window.__gradio__svelte__internal, { onDestroy: lC } = window.__gradio__svelte__internal, {
  SvelteComponent: oC,
  add_render_callback: sC,
  append: aC,
  attr: rC,
  bubble: cC,
  check_outros: _C,
  create_component: uC,
  create_in_transition: fC,
  create_out_transition: dC,
  destroy_component: hC,
  detach: mC,
  element: gC,
  group_outros: bC,
  init: pC,
  insert: vC,
  listen: wC,
  mount_component: kC,
  run_all: yC,
  safe_not_equal: CC,
  set_data: SC,
  space: qC,
  stop_propagation: zC,
  text: DC,
  transition_in: BC,
  transition_out: MC
} = window.__gradio__svelte__internal, { createEventDispatcher: EC, onMount: LC } = window.__gradio__svelte__internal, {
  SvelteComponent: AC,
  append: WC,
  attr: RC,
  bubble: XC,
  check_outros: YC,
  create_animation: IC,
  create_component: HC,
  destroy_component: TC,
  detach: jC,
  element: FC,
  ensure_array_like: OC,
  fix_and_outro_and_destroy_block: PC,
  fix_position: UC,
  group_outros: VC,
  init: NC,
  insert: KC,
  mount_component: ZC,
  noop: GC,
  safe_not_equal: JC,
  set_style: QC,
  space: xC,
  transition_in: $C,
  transition_out: eS,
  update_keyed_each: tS
} = window.__gradio__svelte__internal, {
  SvelteComponent: nS,
  attr: iS,
  detach: lS,
  element: oS,
  init: sS,
  insert: aS,
  noop: rS,
  safe_not_equal: cS,
  set_style: _S,
  toggle_class: uS
} = window.__gradio__svelte__internal, {
  SvelteComponent: fS,
  add_flush_callback: dS,
  assign: hS,
  bind: mS,
  binding_callbacks: gS,
  create_component: bS,
  destroy_component: pS,
  detach: vS,
  flush: wS,
  get_spread_object: kS,
  get_spread_update: yS,
  init: CS,
  insert: SS,
  mount_component: qS,
  safe_not_equal: zS,
  space: DS,
  transition_in: BS,
  transition_out: MS
} = window.__gradio__svelte__internal;
var zc = (i) => {
  throw TypeError(i);
}, Dc = (i, e, t) => e.has(i) || zc("Cannot " + t), vi = (i, e, t) => (Dc(i, e, "read from private field"), e.get(i)), Cg = (i, e, t) => e.has(i) ? zc("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), Sg = (i, e, t, n) => (Dc(i, e, "write to private field"), e.set(i, t), t);
new Intl.Collator(0, { numeric: 1 }).compare;
typeof process < "u" && process.versions && process.versions.node;
var dn;
class ES extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = vi(this, dn) + t; ; ) {
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
        Sg(this, dn, t);
      },
      flush: (t) => {
        if (vi(this, dn) === "")
          return;
        const n = e.allowCR && vi(this, dn).endsWith("\r") ? vi(this, dn).slice(0, -1) : vi(this, dn);
        t.enqueue(n);
      }
    }), Cg(this, dn, "");
  }
}
dn = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: qg,
  append: Bc,
  attr: he,
  bubble: zg,
  check_outros: Dg,
  create_slot: Mc,
  detach: Ii,
  element: Tl,
  empty: Bg,
  get_all_dirty_from_scope: Ec,
  get_slot_changes: Lc,
  group_outros: Mg,
  init: Eg,
  insert: Hi,
  listen: Lg,
  safe_not_equal: Ag,
  set_style: Ze,
  space: Ac,
  src_url_equal: Cl,
  toggle_class: ei,
  transition_in: Sl,
  transition_out: ql,
  update_slot_base: Wc
} = window.__gradio__svelte__internal;
function Wg(i) {
  let e, t, n, l, o, s, r = (
    /*icon*/
    i[7] && Fa(i)
  );
  const a = (
    /*#slots*/
    i[12].default
  ), c = Mc(
    a,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = Tl("button"), r && r.c(), t = Ac(), c && c.c(), he(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), he(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), e.disabled = /*disabled*/
      i[8], ei(e, "hidden", !/*visible*/
      i[2]), Ze(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), Ze(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), Ze(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(_, f) {
      Hi(_, e, f), r && r.m(e, null), Bc(e, t), c && c.m(e, null), l = !0, o || (s = Lg(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), o = !0);
    },
    p(_, f) {
      /*icon*/
      _[7] ? r ? r.p(_, f) : (r = Fa(_), r.c(), r.m(e, t)) : r && (r.d(1), r = null), c && c.p && (!l || f & /*$$scope*/
      2048) && Wc(
        c,
        a,
        _,
        /*$$scope*/
        _[11],
        l ? Lc(
          a,
          /*$$scope*/
          _[11],
          f,
          null
        ) : Ec(
          /*$$scope*/
          _[11]
        ),
        null
      ), (!l || f & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      _[4] + " " + /*variant*/
      _[3] + " " + /*elem_classes*/
      _[1].join(" ") + " svelte-8huxfn")) && he(e, "class", n), (!l || f & /*elem_id*/
      1) && he(
        e,
        "id",
        /*elem_id*/
        _[0]
      ), (!l || f & /*disabled*/
      256) && (e.disabled = /*disabled*/
      _[8]), (!l || f & /*size, variant, elem_classes, visible*/
      30) && ei(e, "hidden", !/*visible*/
      _[2]), f & /*scale*/
      512 && Ze(
        e,
        "flex-grow",
        /*scale*/
        _[9]
      ), f & /*scale*/
      512 && Ze(
        e,
        "width",
        /*scale*/
        _[9] === 0 ? "fit-content" : null
      ), f & /*min_width*/
      1024 && Ze(e, "min-width", typeof /*min_width*/
      _[10] == "number" ? `calc(min(${/*min_width*/
      _[10]}px, 100%))` : null);
    },
    i(_) {
      l || (Sl(c, _), l = !0);
    },
    o(_) {
      ql(c, _), l = !1;
    },
    d(_) {
      _ && Ii(e), r && r.d(), c && c.d(_), o = !1, s();
    }
  };
}
function Rg(i) {
  let e, t, n, l, o = (
    /*icon*/
    i[7] && Oa(i)
  );
  const s = (
    /*#slots*/
    i[12].default
  ), r = Mc(
    s,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = Tl("a"), o && o.c(), t = Ac(), r && r.c(), he(
        e,
        "href",
        /*link*/
        i[6]
      ), he(e, "rel", "noopener noreferrer"), he(
        e,
        "aria-disabled",
        /*disabled*/
        i[8]
      ), he(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), he(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), ei(e, "hidden", !/*visible*/
      i[2]), ei(
        e,
        "disabled",
        /*disabled*/
        i[8]
      ), Ze(
        e,
        "flex-grow",
        /*scale*/
        i[9]
      ), Ze(
        e,
        "pointer-events",
        /*disabled*/
        i[8] ? "none" : null
      ), Ze(
        e,
        "width",
        /*scale*/
        i[9] === 0 ? "fit-content" : null
      ), Ze(e, "min-width", typeof /*min_width*/
      i[10] == "number" ? `calc(min(${/*min_width*/
      i[10]}px, 100%))` : null);
    },
    m(a, c) {
      Hi(a, e, c), o && o.m(e, null), Bc(e, t), r && r.m(e, null), l = !0;
    },
    p(a, c) {
      /*icon*/
      a[7] ? o ? o.p(a, c) : (o = Oa(a), o.c(), o.m(e, t)) : o && (o.d(1), o = null), r && r.p && (!l || c & /*$$scope*/
      2048) && Wc(
        r,
        s,
        a,
        /*$$scope*/
        a[11],
        l ? Lc(
          s,
          /*$$scope*/
          a[11],
          c,
          null
        ) : Ec(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!l || c & /*link*/
      64) && he(
        e,
        "href",
        /*link*/
        a[6]
      ), (!l || c & /*disabled*/
      256) && he(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!l || c & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && he(e, "class", n), (!l || c & /*elem_id*/
      1) && he(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!l || c & /*size, variant, elem_classes, visible*/
      30) && ei(e, "hidden", !/*visible*/
      a[2]), (!l || c & /*size, variant, elem_classes, disabled*/
      282) && ei(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), c & /*scale*/
      512 && Ze(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), c & /*disabled*/
      256 && Ze(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), c & /*scale*/
      512 && Ze(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), c & /*min_width*/
      1024 && Ze(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      l || (Sl(r, a), l = !0);
    },
    o(a) {
      ql(r, a), l = !1;
    },
    d(a) {
      a && Ii(e), o && o.d(), r && r.d(a);
    }
  };
}
function Fa(i) {
  let e, t, n;
  return {
    c() {
      e = Tl("img"), he(e, "class", "button-icon svelte-8huxfn"), Cl(e.src, t = /*icon*/
      i[7].url) || he(e, "src", t), he(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, o) {
      Hi(l, e, o);
    },
    p(l, o) {
      o & /*icon*/
      128 && !Cl(e.src, t = /*icon*/
      l[7].url) && he(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && he(e, "alt", n);
    },
    d(l) {
      l && Ii(e);
    }
  };
}
function Oa(i) {
  let e, t, n;
  return {
    c() {
      e = Tl("img"), he(e, "class", "button-icon svelte-8huxfn"), Cl(e.src, t = /*icon*/
      i[7].url) || he(e, "src", t), he(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, o) {
      Hi(l, e, o);
    },
    p(l, o) {
      o & /*icon*/
      128 && !Cl(e.src, t = /*icon*/
      l[7].url) && he(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && he(e, "alt", n);
    },
    d(l) {
      l && Ii(e);
    }
  };
}
function Xg(i) {
  let e, t, n, l;
  const o = [Rg, Wg], s = [];
  function r(a, c) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = Bg();
    },
    m(a, c) {
      s[e].m(a, c), Hi(a, n, c), l = !0;
    },
    p(a, [c]) {
      let _ = e;
      e = r(a), e === _ ? s[e].p(a, c) : (Mg(), ql(s[_], 1, 1, () => {
        s[_] = null;
      }), Dg(), t = s[e], t ? t.p(a, c) : (t = s[e] = o[e](a), t.c()), Sl(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Sl(t), l = !0);
    },
    o(a) {
      ql(t), l = !1;
    },
    d(a) {
      a && Ii(n), s[e].d(a);
    }
  };
}
function Yg(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { elem_id: o = "" } = e, { elem_classes: s = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: c = "lg" } = e, { value: _ = null } = e, { link: f = null } = e, { icon: d = null } = e, { disabled: h = !1 } = e, { scale: b = null } = e, { min_width: u = void 0 } = e;
  function m(g) {
    zg.call(this, i, g);
  }
  return i.$$set = (g) => {
    "elem_id" in g && t(0, o = g.elem_id), "elem_classes" in g && t(1, s = g.elem_classes), "visible" in g && t(2, r = g.visible), "variant" in g && t(3, a = g.variant), "size" in g && t(4, c = g.size), "value" in g && t(5, _ = g.value), "link" in g && t(6, f = g.link), "icon" in g && t(7, d = g.icon), "disabled" in g && t(8, h = g.disabled), "scale" in g && t(9, b = g.scale), "min_width" in g && t(10, u = g.min_width), "$$scope" in g && t(11, l = g.$$scope);
  }, [
    o,
    s,
    r,
    a,
    c,
    _,
    f,
    d,
    h,
    b,
    u,
    l,
    n,
    m
  ];
}
class es extends qg {
  constructor(e) {
    super(), Eg(this, e, Yg, Xg, Ag, {
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
  SvelteComponent: LS,
  create_component: AS,
  destroy_component: WS,
  detach: RS,
  init: XS,
  insert: YS,
  mount_component: IS,
  safe_not_equal: HS,
  set_data: TS,
  text: jS,
  transition_in: FS,
  transition_out: OS
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ig,
  add_render_callback: Rc,
  append: ol,
  attr: nt,
  binding_callbacks: Pa,
  check_outros: Hg,
  create_bidirectional_transition: Ua,
  destroy_each: Tg,
  detach: Ai,
  element: zl,
  empty: jg,
  ensure_array_like: Va,
  group_outros: Fg,
  init: Og,
  insert: Wi,
  listen: ts,
  prevent_default: Pg,
  run_all: Ug,
  safe_not_equal: Vg,
  set_data: Ng,
  set_style: Kn,
  space: ns,
  text: Kg,
  toggle_class: Wt,
  transition_in: Wo,
  transition_out: Na
} = window.__gradio__svelte__internal, { createEventDispatcher: Zg } = window.__gradio__svelte__internal;
function Ka(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function Za(i) {
  let e, t, n, l, o, s = Va(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < s.length; a += 1)
    r[a] = Ga(Ka(i, s, a));
  return {
    c() {
      e = zl("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      nt(e, "class", "options svelte-yuohum"), nt(e, "role", "listbox"), Kn(
        e,
        "bottom",
        /*bottom*/
        i[9]
      ), Kn(e, "max-height", `calc(${/*max_height*/
      i[10]}px - var(--window-padding))`), Kn(
        e,
        "width",
        /*input_width*/
        i[8] + "px"
      );
    },
    m(a, c) {
      Wi(a, e, c);
      for (let _ = 0; _ < r.length; _ += 1)
        r[_] && r[_].m(e, null);
      i[22](e), n = !0, l || (o = ts(e, "mousedown", Pg(
        /*mousedown_handler*/
        i[21]
      )), l = !0);
    },
    p(a, c) {
      if (c & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        s = Va(
          /*filtered_indices*/
          a[1]
        );
        let _;
        for (_ = 0; _ < s.length; _ += 1) {
          const f = Ka(a, s, _);
          r[_] ? r[_].p(f, c) : (r[_] = Ga(f), r[_].c(), r[_].m(e, null));
        }
        for (; _ < r.length; _ += 1)
          r[_].d(1);
        r.length = s.length;
      }
      c & /*bottom*/
      512 && Kn(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), c & /*max_height*/
      1024 && Kn(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), c & /*input_width*/
      256 && Kn(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && Rc(() => {
        n && (t || (t = Ua(e, Qs, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = Ua(e, Qs, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && Ai(e), Tg(r, a), i[22](null), a && t && t.end(), l = !1, o();
    }
  };
}
function Ga(i) {
  let e, t, n, l = (
    /*choices*/
    i[0][
      /*index*/
      i[26]
    ][0] + ""
  ), o, s, r, a, c;
  return {
    c() {
      e = zl("li"), t = zl("span"), t.textContent = "✓", n = ns(), o = Kg(l), s = ns(), nt(t, "class", "inner-item svelte-yuohum"), Wt(t, "hide", !/*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), nt(e, "class", "item svelte-yuohum"), nt(e, "data-index", r = /*index*/
      i[26]), nt(e, "aria-label", a = /*choices*/
      i[0][
        /*index*/
        i[26]
      ][0]), nt(e, "data-testid", "dropdown-option"), nt(e, "role", "option"), nt(e, "aria-selected", c = /*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), Wt(
        e,
        "selected",
        /*selected_indices*/
        i[4].includes(
          /*index*/
          i[26]
        )
      ), Wt(
        e,
        "active",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), Wt(
        e,
        "bg-gray-100",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      ), Wt(
        e,
        "dark:bg-gray-600",
        /*index*/
        i[26] === /*active_index*/
        i[5]
      );
    },
    m(_, f) {
      Wi(_, e, f), ol(e, t), ol(e, n), ol(e, o), ol(e, s);
    },
    p(_, f) {
      f & /*selected_indices, filtered_indices*/
      18 && Wt(t, "hide", !/*selected_indices*/
      _[4].includes(
        /*index*/
        _[26]
      )), f & /*choices, filtered_indices*/
      3 && l !== (l = /*choices*/
      _[0][
        /*index*/
        _[26]
      ][0] + "") && Ng(o, l), f & /*filtered_indices*/
      2 && r !== (r = /*index*/
      _[26]) && nt(e, "data-index", r), f & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      _[0][
        /*index*/
        _[26]
      ][0]) && nt(e, "aria-label", a), f & /*selected_indices, filtered_indices*/
      18 && c !== (c = /*selected_indices*/
      _[4].includes(
        /*index*/
        _[26]
      )) && nt(e, "aria-selected", c), f & /*selected_indices, filtered_indices*/
      18 && Wt(
        e,
        "selected",
        /*selected_indices*/
        _[4].includes(
          /*index*/
          _[26]
        )
      ), f & /*filtered_indices, active_index*/
      34 && Wt(
        e,
        "active",
        /*index*/
        _[26] === /*active_index*/
        _[5]
      ), f & /*filtered_indices, active_index*/
      34 && Wt(
        e,
        "bg-gray-100",
        /*index*/
        _[26] === /*active_index*/
        _[5]
      ), f & /*filtered_indices, active_index*/
      34 && Wt(
        e,
        "dark:bg-gray-600",
        /*index*/
        _[26] === /*active_index*/
        _[5]
      );
    },
    d(_) {
      _ && Ai(e);
    }
  };
}
function Gg(i) {
  let e, t, n, l, o;
  Rc(
    /*onwindowresize*/
    i[19]
  );
  let s = (
    /*show_options*/
    i[2] && !/*disabled*/
    i[3] && Za(i)
  );
  return {
    c() {
      e = zl("div"), t = ns(), s && s.c(), n = jg(), nt(e, "class", "reference");
    },
    m(r, a) {
      Wi(r, e, a), i[20](e), Wi(r, t, a), s && s.m(r, a), Wi(r, n, a), l || (o = [
        ts(
          window,
          "scroll",
          /*scroll_listener*/
          i[12]
        ),
        ts(
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
      12 && Wo(s, 1)) : (s = Za(r), s.c(), Wo(s, 1), s.m(n.parentNode, n)) : s && (Fg(), Na(s, 1, 1, () => {
        s = null;
      }), Hg());
    },
    i(r) {
      Wo(s);
    },
    o(r) {
      Na(s);
    },
    d(r) {
      r && (Ai(e), Ai(t), Ai(n)), i[20](null), s && s.d(r), l = !1, Ug(o);
    }
  };
}
function Jg(i, e, t) {
  var n, l;
  let { choices: o } = e, { filtered_indices: s } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: c = [] } = e, { active_index: _ = null } = e, f, d, h, b, u, m, g, w, p;
  function y() {
    const { top: X, bottom: C } = u.getBoundingClientRect();
    t(16, f = X), t(17, d = p - C);
  }
  let z = null;
  function k() {
    r && (z !== null && clearTimeout(z), z = setTimeout(
      () => {
        y(), z = null;
      },
      10
    ));
  }
  const S = Zg();
  function q() {
    t(11, p = window.innerHeight);
  }
  function M(X) {
    Pa[X ? "unshift" : "push"](() => {
      u = X, t(6, u);
    });
  }
  const D = (X) => S("change", X);
  function E(X) {
    Pa[X ? "unshift" : "push"](() => {
      m = X, t(7, m);
    });
  }
  return i.$$set = (X) => {
    "choices" in X && t(0, o = X.choices), "filtered_indices" in X && t(1, s = X.filtered_indices), "show_options" in X && t(2, r = X.show_options), "disabled" in X && t(3, a = X.disabled), "selected_indices" in X && t(4, c = X.selected_indices), "active_index" in X && t(5, _ = X.active_index);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && u) {
        if (m && c.length > 0) {
          let C = m.querySelectorAll("li");
          for (const ee of Array.from(C))
            if (ee.getAttribute("data-index") === c[0].toString()) {
              t(14, n = m == null ? void 0 : m.scrollTo) === null || n === void 0 || n.call(m, 0, ee.offsetTop);
              break;
            }
        }
        y();
        const X = t(15, l = u.parentElement) === null || l === void 0 ? void 0 : l.getBoundingClientRect();
        t(18, h = (X == null ? void 0 : X.height) || 0), t(8, b = (X == null ? void 0 : X.width) || 0);
      }
      d > f ? (t(10, w = d), t(9, g = null)) : (t(9, g = `${d + h}px`), t(10, w = f - h));
    }
  }, [
    o,
    s,
    r,
    a,
    c,
    _,
    u,
    m,
    b,
    g,
    w,
    p,
    k,
    S,
    n,
    l,
    f,
    d,
    h,
    q,
    M,
    D,
    E
  ];
}
class Qg extends Ig {
  constructor(e) {
    super(), Og(this, e, Jg, Gg, Vg, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function xg(i, e) {
  return (i % e + e) % e;
}
function Ja(i, e) {
  return i.reduce((t, n, l) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(l), t), []);
}
function $g(i, e, t) {
  i("change", e), t || i("input");
}
function eb(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), l = i.key === "ArrowUp" ? -1 : 1;
      e = t[xg(n + l, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: PS,
  append: US,
  attr: VS,
  binding_callbacks: NS,
  check_outros: KS,
  create_component: ZS,
  destroy_component: GS,
  destroy_each: JS,
  detach: QS,
  element: xS,
  ensure_array_like: $S,
  group_outros: eq,
  init: tq,
  insert: nq,
  listen: iq,
  mount_component: lq,
  prevent_default: oq,
  run_all: sq,
  safe_not_equal: aq,
  set_data: rq,
  set_input_value: cq,
  space: _q,
  text: uq,
  toggle_class: fq,
  transition_in: dq,
  transition_out: hq
} = window.__gradio__svelte__internal, { afterUpdate: mq, createEventDispatcher: gq } = window.__gradio__svelte__internal, {
  SvelteComponent: tb,
  append: Cn,
  attr: tt,
  binding_callbacks: nb,
  check_outros: ib,
  create_component: is,
  destroy_component: ls,
  detach: gs,
  element: Jn,
  group_outros: lb,
  init: ob,
  insert: bs,
  listen: wi,
  mount_component: os,
  run_all: sb,
  safe_not_equal: ab,
  set_data: rb,
  set_input_value: Qa,
  space: Ro,
  text: cb,
  toggle_class: Zn,
  transition_in: Qn,
  transition_out: Mi
} = window.__gradio__svelte__internal, { onMount: _b } = window.__gradio__svelte__internal, { createEventDispatcher: ub, afterUpdate: fb } = window.__gradio__svelte__internal;
function db(i) {
  let e;
  return {
    c() {
      e = cb(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      bs(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && rb(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && gs(e);
    }
  };
}
function xa(i) {
  let e, t, n;
  return t = new rs({}), {
    c() {
      e = Jn("div"), is(t.$$.fragment), tt(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(l, o) {
      bs(l, e, o), os(t, e, null), n = !0;
    },
    i(l) {
      n || (Qn(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Mi(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && gs(e), ls(t);
    }
  };
}
function hb(i) {
  let e, t, n, l, o, s, r, a, c, _, f, d, h, b;
  t = new Ar({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[1]
      ),
      $$slots: { default: [db] },
      $$scope: { ctx: i }
    }
  });
  let u = !/*disabled*/
  i[3] && xa();
  return f = new Qg({
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
  }), f.$on(
    "change",
    /*handle_option_selected*/
    i[16]
  ), {
    c() {
      e = Jn("div"), is(t.$$.fragment), n = Ro(), l = Jn("div"), o = Jn("div"), s = Jn("div"), r = Jn("input"), c = Ro(), u && u.c(), _ = Ro(), is(f.$$.fragment), tt(r, "role", "listbox"), tt(r, "aria-controls", "dropdown-options"), tt(
        r,
        "aria-expanded",
        /*show_options*/
        i[12]
      ), tt(
        r,
        "aria-label",
        /*label*/
        i[0]
      ), tt(r, "class", "border-none svelte-1m1zvyj"), r.disabled = /*disabled*/
      i[3], tt(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      i[7], Zn(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), tt(s, "class", "secondary-wrap svelte-1m1zvyj"), tt(o, "class", "wrap-inner svelte-1m1zvyj"), Zn(
        o,
        "show_options",
        /*show_options*/
        i[12]
      ), tt(l, "class", "wrap svelte-1m1zvyj"), tt(e, "class", "svelte-1m1zvyj"), Zn(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(m, g) {
      bs(m, e, g), os(t, e, null), Cn(e, n), Cn(e, l), Cn(l, o), Cn(o, s), Cn(s, r), Qa(
        r,
        /*input_text*/
        i[9]
      ), i[29](r), Cn(s, c), u && u.m(s, null), Cn(l, _), os(f, l, null), d = !0, h || (b = [
        wi(
          r,
          "input",
          /*input_input_handler*/
          i[28]
        ),
        wi(
          r,
          "keydown",
          /*handle_key_down*/
          i[19]
        ),
        wi(
          r,
          "keyup",
          /*keyup_handler*/
          i[30]
        ),
        wi(
          r,
          "blur",
          /*handle_blur*/
          i[18]
        ),
        wi(
          r,
          "focus",
          /*handle_focus*/
          i[17]
        )
      ], h = !0);
    },
    p(m, g) {
      const w = {};
      g[0] & /*show_label*/
      16 && (w.show_label = /*show_label*/
      m[4]), g[0] & /*info*/
      2 && (w.info = /*info*/
      m[1]), g[0] & /*label*/
      1 | g[1] & /*$$scope*/
      4 && (w.$$scope = { dirty: g, ctx: m }), t.$set(w), (!d || g[0] & /*show_options*/
      4096) && tt(
        r,
        "aria-expanded",
        /*show_options*/
        m[12]
      ), (!d || g[0] & /*label*/
      1) && tt(
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
      m[9] && Qa(
        r,
        /*input_text*/
        m[9]
      ), (!d || g[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && Zn(r, "subdued", !/*choices_names*/
      m[13].includes(
        /*input_text*/
        m[9]
      ) && !/*allow_custom_value*/
      m[6]), /*disabled*/
      m[3] ? u && (lb(), Mi(u, 1, 1, () => {
        u = null;
      }), ib()) : u ? g[0] & /*disabled*/
      8 && Qn(u, 1) : (u = xa(), u.c(), Qn(u, 1), u.m(s, null)), (!d || g[0] & /*show_options*/
      4096) && Zn(
        o,
        "show_options",
        /*show_options*/
        m[12]
      );
      const p = {};
      g[0] & /*show_options*/
      4096 && (p.show_options = /*show_options*/
      m[12]), g[0] & /*choices*/
      4 && (p.choices = /*choices*/
      m[2]), g[0] & /*filtered_indices*/
      1024 && (p.filtered_indices = /*filtered_indices*/
      m[10]), g[0] & /*disabled*/
      8 && (p.disabled = /*disabled*/
      m[3]), g[0] & /*selected_index*/
      2048 && (p.selected_indices = /*selected_index*/
      m[11] === null ? [] : [
        /*selected_index*/
        m[11]
      ]), g[0] & /*active_index*/
      16384 && (p.active_index = /*active_index*/
      m[14]), f.$set(p), (!d || g[0] & /*container*/
      32) && Zn(
        e,
        "container",
        /*container*/
        m[5]
      );
    },
    i(m) {
      d || (Qn(t.$$.fragment, m), Qn(u), Qn(f.$$.fragment, m), d = !0);
    },
    o(m) {
      Mi(t.$$.fragment, m), Mi(u), Mi(f.$$.fragment, m), d = !1;
    },
    d(m) {
      m && gs(e), ls(t), i[29](null), u && u.d(), ls(f), h = !1, sb(b);
    }
  };
}
function mb(i, e, t) {
  let { label: n } = e, { info: l = void 0 } = e, { value: o = [] } = e, s = [], { value_is_output: r = !1 } = e, { choices: a } = e, c, { disabled: _ = !1 } = e, { show_label: f } = e, { container: d = !0 } = e, { allow_custom_value: h = !1 } = e, { filterable: b = !0 } = e, u, m = !1, g, w, p = "", y = "", z = !1, k = [], S = null, q = null, M;
  const D = ub();
  o ? (M = a.map((I) => I[1]).indexOf(o), q = M, q === -1 ? (s = o, q = null) : ([p, s] = a[q], y = p), X()) : a.length > 0 && (M = 0, q = 0, [p, o] = a[q], s = o, y = p);
  function E() {
    t(13, g = a.map((I) => I[0])), t(24, w = a.map((I) => I[1]));
  }
  function X() {
    E(), o === void 0 || Array.isArray(o) && o.length === 0 ? (t(9, p = ""), t(11, q = null)) : w.includes(o) ? (t(9, p = g[w.indexOf(o)]), t(11, q = w.indexOf(o))) : h ? (t(9, p = o), t(11, q = null)) : (t(9, p = ""), t(11, q = null)), t(27, M = q);
  }
  function C(I) {
    if (t(11, q = parseInt(I.detail.target.dataset.index)), isNaN(q)) {
      t(11, q = null);
      return;
    }
    t(12, m = !1), t(14, S = null), u.blur();
  }
  function ee(I) {
    t(10, k = a.map((U, Y) => Y)), t(12, m = !0), D("focus");
  }
  function Q() {
    h ? t(20, o = p) : t(9, p = g[w.indexOf(o)]), t(12, m = !1), t(14, S = null), D("blur");
  }
  function x(I) {
    t(12, [m, S] = eb(I, S, k), m, (t(14, S), t(2, a), t(23, c), t(6, h), t(9, p), t(10, k), t(8, u), t(25, y), t(11, q), t(27, M), t(26, z), t(24, w))), I.key === "Enter" && (S !== null ? (t(11, q = S), t(12, m = !1), u.blur(), t(14, S = null)) : g.includes(p) ? (t(11, q = g.indexOf(p)), t(12, m = !1), t(14, S = null), u.blur()) : h && (t(20, o = p), t(11, q = null), t(12, m = !1), t(14, S = null), u.blur()), D("enter", o));
  }
  fb(() => {
    t(21, r = !1), t(26, z = !0);
  }), _b(() => {
    u.focus();
  });
  function G() {
    p = this.value, t(9, p), t(11, q), t(27, M), t(26, z), t(2, a), t(24, w);
  }
  function R(I) {
    nb[I ? "unshift" : "push"](() => {
      u = I, t(8, u);
    });
  }
  const O = (I) => D("key_up", { key: I.key, input_value: p });
  return i.$$set = (I) => {
    "label" in I && t(0, n = I.label), "info" in I && t(1, l = I.info), "value" in I && t(20, o = I.value), "value_is_output" in I && t(21, r = I.value_is_output), "choices" in I && t(2, a = I.choices), "disabled" in I && t(3, _ = I.disabled), "show_label" in I && t(4, f = I.show_label), "container" in I && t(5, d = I.container), "allow_custom_value" in I && t(6, h = I.allow_custom_value), "filterable" in I && t(7, b = I.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && q !== M && q !== null && z && (t(9, [p, o] = a[q], p, (t(20, o), t(11, q), t(27, M), t(26, z), t(2, a), t(24, w))), t(27, M = q), D("select", {
      index: q,
      value: w[q],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && o != s && (X(), $g(D, o, r), t(22, s = o)), i.$$.dirty[0] & /*choices*/
    4 && E(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== c && (h || X(), t(23, c = a), t(10, k = Ja(a, p)), !h && k.length > 0 && t(14, S = k[0]), u == document.activeElement && t(12, m = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && p !== y && (t(10, k = Ja(a, p)), t(25, y = p), !h && k.length > 0 && t(14, S = k[0]));
  }, [
    n,
    l,
    a,
    _,
    f,
    d,
    h,
    b,
    u,
    p,
    k,
    q,
    m,
    g,
    S,
    D,
    C,
    ee,
    Q,
    x,
    o,
    r,
    s,
    c,
    w,
    y,
    z,
    M,
    G,
    R,
    O
  ];
}
class gb extends tb {
  constructor(e) {
    super(), ob(
      this,
      e,
      mb,
      hb,
      ab,
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
  SvelteComponent: bq,
  attr: pq,
  detach: vq,
  element: wq,
  init: kq,
  insert: yq,
  noop: Cq,
  safe_not_equal: Sq,
  toggle_class: qq
} = window.__gradio__svelte__internal, {
  SvelteComponent: zq,
  add_flush_callback: Dq,
  assign: Bq,
  bind: Mq,
  binding_callbacks: Eq,
  check_outros: Lq,
  create_component: Aq,
  destroy_component: Wq,
  detach: Rq,
  empty: Xq,
  get_spread_object: Yq,
  get_spread_update: Iq,
  group_outros: Hq,
  init: Tq,
  insert: jq,
  mount_component: Fq,
  safe_not_equal: Oq,
  space: Pq,
  transition_in: Uq,
  transition_out: Vq
} = window.__gradio__svelte__internal, {
  SvelteComponent: bb,
  append: ut,
  attr: ti,
  check_outros: ss,
  create_component: En,
  destroy_component: Ln,
  detach: fi,
  element: Rt,
  group_outros: as,
  init: pb,
  insert: di,
  listen: vb,
  mount_component: An,
  safe_not_equal: wb,
  set_style: ni,
  space: ki,
  text: ps,
  toggle_class: $a,
  transition_in: Ie,
  transition_out: it
} = window.__gradio__svelte__internal, { createEventDispatcher: kb } = window.__gradio__svelte__internal, { onMount: yb } = window.__gradio__svelte__internal;
function er(i) {
  let e, t, n, l, o, s, r;
  const a = [Sb, Cb], c = [];
  function _(f, d) {
    return (
      /*labelDetailLock*/
      f[2] ? 0 : 1
    );
  }
  return n = _(i), l = c[n] = a[n](i), {
    c() {
      e = Rt("div"), t = Rt("button"), l.c(), ti(t, "class", "icon svelte-d9x7u0"), ti(t, "aria-label", "Lock label detail"), $a(
        t,
        "selected",
        /*labelDetailLock*/
        i[2] === !0
      ), ni(e, "margin-right", "8px");
    },
    m(f, d) {
      di(f, e, d), ut(e, t), c[n].m(t, null), o = !0, s || (r = vb(
        t,
        "click",
        /*onLockClick*/
        i[9]
      ), s = !0);
    },
    p(f, d) {
      let h = n;
      n = _(f), n !== h && (as(), it(c[h], 1, 1, () => {
        c[h] = null;
      }), ss(), l = c[n], l || (l = c[n] = a[n](f), l.c()), Ie(l, 1), l.m(t, null)), (!o || d & /*labelDetailLock*/
      4) && $a(
        t,
        "selected",
        /*labelDetailLock*/
        f[2] === !0
      );
    },
    i(f) {
      o || (Ie(l), o = !0);
    },
    o(f) {
      it(l), o = !1;
    },
    d(f) {
      f && fi(e), c[n].d(), s = !1, r();
    }
  };
}
function Cb(i) {
  let e, t;
  return e = new lg({}), {
    c() {
      En(e.$$.fragment);
    },
    m(n, l) {
      An(e, n, l), t = !0;
    },
    i(n) {
      t || (Ie(e.$$.fragment, n), t = !0);
    },
    o(n) {
      it(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ln(e, n);
    }
  };
}
function Sb(i) {
  let e, t;
  return e = new J0({}), {
    c() {
      En(e.$$.fragment);
    },
    m(n, l) {
      An(e, n, l), t = !0;
    },
    i(n) {
      t || (Ie(e.$$.fragment, n), t = !0);
    },
    o(n) {
      it(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ln(e, n);
    }
  };
}
function qb(i) {
  let e;
  return {
    c() {
      e = ps("Cancel");
    },
    m(t, n) {
      di(t, e, n);
    },
    d(t) {
      t && fi(e);
    }
  };
}
function tr(i) {
  let e, t, n;
  return t = new es({
    props: {
      variant: "stop",
      $$slots: { default: [zb] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[14]
  ), {
    c() {
      e = Rt("div"), En(t.$$.fragment), ni(e, "margin-right", "8px");
    },
    m(l, o) {
      di(l, e, o), An(t, e, null), n = !0;
    },
    p(l, o) {
      const s = {};
      o & /*$$scope*/
      262144 && (s.$$scope = { dirty: o, ctx: l }), t.$set(s);
    },
    i(l) {
      n || (Ie(t.$$.fragment, l), n = !0);
    },
    o(l) {
      it(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && fi(e), Ln(t);
    }
  };
}
function zb(i) {
  let e;
  return {
    c() {
      e = ps("Remove");
    },
    m(t, n) {
      di(t, e, n);
    },
    d(t) {
      t && fi(e);
    }
  };
}
function Db(i) {
  let e;
  return {
    c() {
      e = ps("OK");
    },
    m(t, n) {
      di(t, e, n);
    },
    d(t) {
      t && fi(e);
    }
  };
}
function Bb(i) {
  let e, t, n, l, o, s, r, a, c, _, f, d, h, b, u, m, g, w = !/*showRemove*/
  i[4] && er(i);
  s = new gb({
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
  ), c = new yg({
    props: {
      value: (
        /*currentColor*/
        i[1]
      ),
      label: "Color",
      show_label: !1
    }
  }), c.$on(
    "change",
    /*onColorChange*/
    i[7]
  ), d = new es({
    props: {
      $$slots: { default: [qb] },
      $$scope: { ctx: i }
    }
  }), d.$on(
    "click",
    /*click_handler*/
    i[13]
  );
  let p = (
    /*showRemove*/
    i[4] && tr(i)
  );
  return m = new es({
    props: {
      variant: "primary",
      $$slots: { default: [Db] },
      $$scope: { ctx: i }
    }
  }), m.$on(
    "click",
    /*click_handler_2*/
    i[15]
  ), {
    c() {
      e = Rt("div"), t = Rt("div"), n = Rt("span"), w && w.c(), l = ki(), o = Rt("div"), En(s.$$.fragment), r = ki(), a = Rt("div"), En(c.$$.fragment), _ = ki(), f = Rt("div"), En(d.$$.fragment), h = ki(), p && p.c(), b = ki(), u = Rt("div"), En(m.$$.fragment), ni(o, "margin-right", "10px"), ni(a, "margin-right", "40px"), ni(a, "margin-bottom", "8px"), ni(f, "margin-right", "8px"), ti(n, "class", "model-content svelte-d9x7u0"), ti(t, "class", "modal-container svelte-d9x7u0"), ti(e, "class", "modal svelte-d9x7u0"), ti(e, "id", "model-box-edit");
    },
    m(y, z) {
      di(y, e, z), ut(e, t), ut(t, n), w && w.m(n, null), ut(n, l), ut(n, o), An(s, o, null), ut(n, r), ut(n, a), An(c, a, null), ut(n, _), ut(n, f), An(d, f, null), ut(n, h), p && p.m(n, null), ut(n, b), ut(n, u), An(m, u, null), g = !0;
    },
    p(y, [z]) {
      /*showRemove*/
      y[4] ? w && (as(), it(w, 1, 1, () => {
        w = null;
      }), ss()) : w ? (w.p(y, z), z & /*showRemove*/
      16 && Ie(w, 1)) : (w = er(y), w.c(), Ie(w, 1), w.m(n, l));
      const k = {};
      z & /*currentLabel*/
      1 && (k.value = /*currentLabel*/
      y[0]), z & /*choices*/
      8 && (k.choices = /*choices*/
      y[3]), s.$set(k);
      const S = {};
      z & /*currentColor*/
      2 && (S.value = /*currentColor*/
      y[1]), c.$set(S);
      const q = {};
      z & /*$$scope*/
      262144 && (q.$$scope = { dirty: z, ctx: y }), d.$set(q), /*showRemove*/
      y[4] ? p ? (p.p(y, z), z & /*showRemove*/
      16 && Ie(p, 1)) : (p = tr(y), p.c(), Ie(p, 1), p.m(n, b)) : p && (as(), it(p, 1, 1, () => {
        p = null;
      }), ss());
      const M = {};
      z & /*$$scope*/
      262144 && (M.$$scope = { dirty: z, ctx: y }), m.$set(M);
    },
    i(y) {
      g || (Ie(w), Ie(s.$$.fragment, y), Ie(c.$$.fragment, y), Ie(d.$$.fragment, y), Ie(p), Ie(m.$$.fragment, y), g = !0);
    },
    o(y) {
      it(w), it(s.$$.fragment, y), it(c.$$.fragment, y), it(d.$$.fragment, y), it(p), it(m.$$.fragment, y), g = !1;
    },
    d(y) {
      y && fi(e), w && w.d(), Ln(s), Ln(c), Ln(d), p && p.d(), Ln(m);
    }
  };
}
function Mb(i, e, t) {
  let { label: n = "" } = e, { currentLabel: l = "" } = e, { choices: o = [] } = e, { choicesColors: s = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: c = !0 } = e, { labelDetailLock: _ = !1 } = e;
  const f = kb();
  function d(z) {
    f("change", {
      label: l,
      color: a,
      lock: _,
      ret: z
      // -1: remove, 0: cancel, 1: change
    });
  }
  function h(z) {
    const { detail: k } = z;
    let S = k;
    Number.isInteger(S) ? (Array.isArray(s) && S < s.length && t(1, a = s[S]), Array.isArray(o) && S < o.length && t(0, l = o[S][0])) : t(0, l = S);
  }
  function b(z) {
    const { detail: k } = z;
    t(1, a = k);
  }
  function u(z) {
    h(z), d(1);
  }
  function m(z) {
    t(2, _ = !_);
  }
  function g(z) {
    switch (z.key.toLowerCase()) {
      case "enter":
        d(1);
        break;
      case "escape":
        d(0);
        break;
    }
  }
  yb(() => (document.addEventListener("keydown", g), t(0, l = n), t(1, a = r), () => {
    document.removeEventListener("keydown", g);
  }));
  const w = () => d(0), p = () => d(-1), y = () => d(1);
  return i.$$set = (z) => {
    "label" in z && t(10, n = z.label), "currentLabel" in z && t(0, l = z.currentLabel), "choices" in z && t(3, o = z.choices), "choicesColors" in z && t(11, s = z.choicesColors), "color" in z && t(12, r = z.color), "currentColor" in z && t(1, a = z.currentColor), "showRemove" in z && t(4, c = z.showRemove), "labelDetailLock" in z && t(2, _ = z.labelDetailLock);
  }, [
    l,
    a,
    _,
    o,
    c,
    d,
    h,
    b,
    u,
    m,
    n,
    s,
    r,
    w,
    p,
    y
  ];
}
class vs extends bb {
  constructor(e) {
    super(), pb(this, e, Mb, Bb, wb, {
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
const ze = (i, e, t) => Math.min(Math.max(i, e), t);
function Xo(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, l, o] = t;
  return `rgba(${n}, ${l}, ${o}, ${e})`;
}
class Yo {
  constructor(e, t, n, l, o, s, r, a, c, _, f, d, h, b = "rgb(255, 255, 255)", u = 0.5, m = 25, g = 8, w = 2, p = 4, y = 1) {
    this.resizeHandles = [], this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (z) => {
      if (this.isDragging && this.pointersCache.size === 1) {
        let k = (z.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, S = (z.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const q = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, M = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        k = ze(k, -this._xmin, q - this._xmax), S = ze(S, -this._ymin, M - this._ymax), this._xmin += k, this._ymin += S, this._xmax += k, this._ymax += S, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (z) => {
      if (this.isCreating && this.pointersCache.size === 1) {
        let [k, S] = this.toBoxCoordinates(z.clientX, z.clientY);
        k = (k - this.offsetMouseX) / this.canvasWindow.scale, S = (S - this.offsetMouseY) / this.canvasWindow.scale, k > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = k, this.creatingAnchorX = "xmin") : k > this._xmin && k < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = k : k > this._xmin && k < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = k : k < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = k, this.creatingAnchorX = "xmax"), S > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = S, this.creatingAnchorY = "ymin") : S > this._ymin && S < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = S : S > this._ymin && S < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = S : S < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = S, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (z) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const k = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, S = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = ze(this._xmin, 0, k), this._ymin = ze(this._ymin, 0, S), this._xmax = ze(this._xmax, 0, k), this._ymax = ze(this._ymax, 0, S), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (z) => {
      if (this.isResizing && this.pointersCache.size === 1) {
        const k = z.clientX, S = z.clientY, q = (k - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, M = (S - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, D = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, E = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += q, this._ymin += M, this._xmin = ze(this._xmin, 0, this._xmax), this._ymin = ze(this._ymin, 0, this._ymax);
            break;
          case 1:
            this._xmax += q, this._ymin += M, this._xmax = ze(this._xmax, this._xmin, D), this._ymin = ze(this._ymin, 0, this._ymax);
            break;
          case 2:
            this._xmax += q, this._ymax += M, this._xmax = ze(this._xmax, this._xmin, D), this._ymax = ze(this._ymax, this._ymin, E);
            break;
          case 3:
            this._xmin += q, this._ymax += M, this._xmin = ze(this._xmin, 0, this._xmax), this._ymax = ze(this._ymax, this._ymin, E);
            break;
          case 4:
            this._ymin += M, this._ymin = ze(this._ymin, 0, this._ymax);
            break;
          case 5:
            this._xmax += q, this._xmax = ze(this._xmax, this._xmin, D);
            break;
          case 6:
            this._ymax += M, this._ymax = ze(this._ymax, this._ymin, E);
            break;
          case 7:
            this._xmin += q, this._xmin = ze(this._xmin, 0, this._xmax);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.pointersCache = l, this.canvasXmin = o, this.canvasYmin = s, this.canvasXmax = r, this.canvasYmax = a, this.scaleFactor = y, this.label = c, this.isDragging = !1, this.isCreating = !1, this._xmin = _, this._ymin = f, this._xmax = d, this._ymax = h, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = g, this.thickness = w, this.selectedThickness = p, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = m, this.color = b, this.alpha = u, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = Xo(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = Xo(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const l = e.measureText(this.label).width + 10, o = 20;
      let s = this.xmin, r = this.ymin - o;
      e.fillStyle = "white", [s, r] = this.toCanvasCoordinates(s, r), e.fillRect(s, r, l, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(s, r, l, o), e.fillStyle = "black", e.fillText(this.label, s + 5, r + 15);
    }
    e.fillStyle = Xo(this.color, 1);
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
const nr = (i, e, t) => Math.min(Math.max(i, e), t);
function ir(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, l, o] = t;
  return `rgba(${n}, ${l}, ${o}, ${e})`;
}
class Io {
  constructor(e, t, n, l, o, s, r, a, c, _, f = "rgb(255, 255, 255)", d = 0.6, h = 6, b = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (u) => {
      if (this.isDragging && this.pointersCache.size === 1) {
        let m = (u.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._x, g = (u.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._y;
        const w = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, p = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale, y = this.radius / this.canvasWindow.scale;
        m = nr(m, -this._x + y, w - this._x - y), g = nr(g, -this._y + y, p - this._y - y), this._x += m, this._y += g, this.applyUserScale(), this.renderCallBack();
      }
    }, this.renderCallBack = e, this.canvasWindow = t, this.pointersCache = n, this.canvasXmin = l, this.canvasYmin = o, this.canvasXmax = s, this.canvasYmax = r, this.scaleFactor = b, this.label = a, this.isDragging = !1, this.isSelected = !1, this._x = c, this._y = _, this.x = this._x * this.canvasWindow.scale, this.y = this._y * this.canvasWindow.scale, this.color = f, this.alpha = d, this.radius = h, this.offsetMouseX = 0, this.offsetMouseY = 0;
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
    if (e.beginPath(), e.arc(t, n, l, 0, Math.PI * 2), e.fillStyle = ir(this.color, this.alpha), e.fill(), e.lineWidth = this.isSelected ? 2 : 1, e.strokeStyle = ir(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
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
const _t = [
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
], sl = (i, e, t) => Math.min(Math.max(i, e), t);
class Eb {
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
        this.imageWidth * this.scale > this.canvasWidth ? l = sl(l, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : l = sl(l, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? o = sl(o, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : o = sl(o, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += l, this.offsetY += o, this.startDragX = n.clientX, this.startDragY = n.clientY, this.renderCallBack();
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
  SvelteComponent: Lb,
  append: Ae,
  attr: oe,
  binding_callbacks: lr,
  bubble: Ho,
  check_outros: ii,
  create_component: St,
  destroy_component: qt,
  detach: hn,
  element: dt,
  empty: Ab,
  group_outros: li,
  init: Wb,
  insert: mn,
  listen: We,
  mount_component: zt,
  noop: Xc,
  run_all: Yc,
  safe_not_equal: Rb,
  set_style: al,
  space: Ct,
  toggle_class: Gn,
  transition_in: se,
  transition_out: de
} = window.__gradio__svelte__internal, { onMount: Xb, createEventDispatcher: Yb } = window.__gradio__svelte__internal;
function or(i) {
  let e, t, n, l, o, s, r, a, c, _, f, d, h, b, u, m, g, w, p, y, z, k, S, q;
  n = new l0({}), s = new v0({}), c = new D0({}), d = new u0({});
  let M = (
    /*showRemoveButton*/
    i[1] && sr(i)
  ), D = !/*disableEditBoxes*/
  i[5] && /*labelDetailLock*/
  i[15] && ar(i);
  return w = new Id({}), z = new yd({}), {
    c() {
      e = dt("span"), t = dt("button"), St(n.$$.fragment), l = Ct(), o = dt("button"), St(s.$$.fragment), r = Ct(), a = dt("button"), St(c.$$.fragment), _ = Ct(), f = dt("button"), St(d.$$.fragment), b = Ct(), M && M.c(), u = Ct(), D && D.c(), m = Ct(), g = dt("button"), St(w.$$.fragment), p = Ct(), y = dt("button"), St(z.$$.fragment), oe(t, "class", "icon svelte-qvyq26"), oe(t, "aria-label", "Create box"), oe(t, "title", "Create box (C)"), Gn(
        t,
        "selected",
        /*mode*/
        i[9] === /*Mode*/
        i[8].creation
      ), oe(o, "class", "icon svelte-qvyq26"), oe(o, "aria-label", "Create point"), oe(o, "title", "Create point (C)"), Gn(
        o,
        "selected",
        /*mode*/
        i[9] === /*Mode*/
        i[8].point
      ), oe(a, "class", "icon svelte-qvyq26"), oe(a, "aria-label", "Drag boxes"), oe(a, "title", "Drag boxes (D)"), Gn(
        a,
        "selected",
        /*mode*/
        i[9] === /*Mode*/
        i[8].drag
      ), oe(f, "class", "icon svelte-qvyq26"), oe(f, "aria-label", "Clear selection"), oe(f, "title", "Clear selection"), f.disabled = h = !/*selectedAnnotationId*/
      i[0], oe(g, "class", "icon svelte-qvyq26"), oe(g, "aria-label", "Rotate counterclockwise"), oe(g, "title", "Rotate counterclockwise"), oe(y, "class", "icon svelte-qvyq26"), oe(y, "aria-label", "Rotate clockwise"), oe(y, "title", "Rotate clockwise"), oe(e, "class", "canvas-control svelte-qvyq26");
    },
    m(E, X) {
      mn(E, e, X), Ae(e, t), zt(n, t, null), Ae(e, l), Ae(e, o), zt(s, o, null), Ae(e, r), Ae(e, a), zt(c, a, null), Ae(e, _), Ae(e, f), zt(d, f, null), Ae(e, b), M && M.m(e, null), Ae(e, u), D && D.m(e, null), Ae(e, m), Ae(e, g), zt(w, g, null), Ae(e, p), Ae(e, y), zt(z, y, null), k = !0, S || (q = [
        We(
          t,
          "click",
          /*click_handler*/
          i[58]
        ),
        We(
          o,
          "click",
          /*click_handler_1*/
          i[59]
        ),
        We(
          a,
          "click",
          /*click_handler_2*/
          i[60]
        ),
        We(
          f,
          "click",
          /*handleClearSelection*/
          i[28]
        ),
        We(
          g,
          "click",
          /*click_handler_5*/
          i[63]
        ),
        We(
          y,
          "click",
          /*click_handler_6*/
          i[64]
        )
      ], S = !0);
    },
    p(E, X) {
      (!k || X[0] & /*mode, Mode*/
      768) && Gn(
        t,
        "selected",
        /*mode*/
        E[9] === /*Mode*/
        E[8].creation
      ), (!k || X[0] & /*mode, Mode*/
      768) && Gn(
        o,
        "selected",
        /*mode*/
        E[9] === /*Mode*/
        E[8].point
      ), (!k || X[0] & /*mode, Mode*/
      768) && Gn(
        a,
        "selected",
        /*mode*/
        E[9] === /*Mode*/
        E[8].drag
      ), (!k || X[0] & /*selectedAnnotationId*/
      1 && h !== (h = !/*selectedAnnotationId*/
      E[0])) && (f.disabled = h), /*showRemoveButton*/
      E[1] ? M ? (M.p(E, X), X[0] & /*showRemoveButton*/
      2 && se(M, 1)) : (M = sr(E), M.c(), se(M, 1), M.m(e, u)) : M && (li(), de(M, 1, 1, () => {
        M = null;
      }), ii()), !/*disableEditBoxes*/
      E[5] && /*labelDetailLock*/
      E[15] ? D ? (D.p(E, X), X[0] & /*disableEditBoxes, labelDetailLock*/
      32800 && se(D, 1)) : (D = ar(E), D.c(), se(D, 1), D.m(e, m)) : D && (li(), de(D, 1, 1, () => {
        D = null;
      }), ii());
    },
    i(E) {
      k || (se(n.$$.fragment, E), se(s.$$.fragment, E), se(c.$$.fragment, E), se(d.$$.fragment, E), se(M), se(D), se(w.$$.fragment, E), se(z.$$.fragment, E), k = !0);
    },
    o(E) {
      de(n.$$.fragment, E), de(s.$$.fragment, E), de(c.$$.fragment, E), de(d.$$.fragment, E), de(M), de(D), de(w.$$.fragment, E), de(z.$$.fragment, E), k = !1;
    },
    d(E) {
      E && hn(e), qt(n), qt(s), qt(c), qt(d), M && M.d(), D && D.d(), qt(w), qt(z), S = !1, Yc(q);
    }
  };
}
function sr(i) {
  let e, t, n, l, o;
  return t = new X0({}), {
    c() {
      e = dt("button"), St(t.$$.fragment), oe(e, "class", "icon svelte-qvyq26"), oe(e, "aria-label", "Remove box"), oe(e, "title", "Remove box (Del)");
    },
    m(s, r) {
      mn(s, e, r), zt(t, e, null), n = !0, l || (o = We(
        e,
        "click",
        /*click_handler_3*/
        i[61]
      ), l = !0);
    },
    p: Xc,
    i(s) {
      n || (se(t.$$.fragment, s), n = !0);
    },
    o(s) {
      de(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && hn(e), qt(t), l = !1, o();
    }
  };
}
function ar(i) {
  let e, t, n, l, o;
  return t = new O0({}), {
    c() {
      e = dt("button"), St(t.$$.fragment), oe(e, "class", "icon svelte-qvyq26"), oe(e, "aria-label", "Edit label"), oe(e, "title", "Edit label");
    },
    m(s, r) {
      mn(s, e, r), zt(t, e, null), n = !0, l || (o = We(
        e,
        "click",
        /*click_handler_4*/
        i[62]
      ), l = !0);
    },
    p: Xc,
    i(s) {
      n || (se(t.$$.fragment, s), n = !0);
    },
    o(s) {
      de(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && hn(e), qt(t), l = !1, o();
    }
  };
}
function rr(i) {
  let e, t;
  return e = new vs({
    props: {
      choices: (
        /*choices*/
        i[3]
      ),
      choicesColors: (
        /*choicesColors*/
        i[4]
      ),
      label: (
        /*selectedLabel*/
        i[17]
      ),
      color: (
        /*selectedColor*/
        i[18]
      )
    }
  }), e.$on(
    "change",
    /*onModalEditChange*/
    i[30]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    i[67]
  ), {
    c() {
      St(e.$$.fragment);
    },
    m(n, l) {
      zt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), l[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), l[0] & /*selectedLabel*/
      131072 && (o.label = /*selectedLabel*/
      n[17]), l[0] & /*selectedColor*/
      262144 && (o.color = /*selectedColor*/
      n[18]), e.$set(o);
    },
    i(n) {
      t || (se(e.$$.fragment, n), t = !0);
    },
    o(n) {
      de(e.$$.fragment, n), t = !1;
    },
    d(n) {
      qt(e, n);
    }
  };
}
function cr(i) {
  let e, t;
  return e = new vs({
    props: {
      choices: (
        /*choices*/
        i[3]
      ),
      showRemove: !1,
      choicesColors: (
        /*choicesColors*/
        i[4]
      ),
      label: (
        /*selectedLabel*/
        i[17]
      ),
      color: (
        /*selectedColor*/
        i[18]
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        i[15]
      )
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    i[31]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    i[68]
  ), {
    c() {
      St(e.$$.fragment);
    },
    m(n, l) {
      zt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), l[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), l[0] & /*selectedLabel*/
      131072 && (o.label = /*selectedLabel*/
      n[17]), l[0] & /*selectedColor*/
      262144 && (o.color = /*selectedColor*/
      n[18]), l[0] & /*labelDetailLock*/
      32768 && (o.labelDetailLock = /*labelDetailLock*/
      n[15]), e.$set(o);
    },
    i(n) {
      t || (se(e.$$.fragment, n), t = !0);
    },
    o(n) {
      de(e.$$.fragment, n), t = !1;
    },
    d(n) {
      qt(e, n);
    }
  };
}
function _r(i) {
  let e, t;
  return e = new vs({
    props: {
      choices: (
        /*choices*/
        i[3]
      ),
      showRemove: !1,
      choicesColors: (
        /*choicesColors*/
        i[4]
      ),
      label: (
        /*defaultLabelCache*/
        i[16].label
      ),
      color: (
        /*defaultLabelCache*/
        i[16].color
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        i[15]
      )
    }
  }), e.$on(
    "change",
    /*onDefaultLabelEditChange*/
    i[32]
  ), e.$on(
    "enter{onDefaultLabelEditChange}",
    /*enter_onDefaultLabelEditChange_handler*/
    i[69]
  ), {
    c() {
      St(e.$$.fragment);
    },
    m(n, l) {
      zt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*choices*/
      8 && (o.choices = /*choices*/
      n[3]), l[0] & /*choicesColors*/
      16 && (o.choicesColors = /*choicesColors*/
      n[4]), l[0] & /*defaultLabelCache*/
      65536 && (o.label = /*defaultLabelCache*/
      n[16].label), l[0] & /*defaultLabelCache*/
      65536 && (o.color = /*defaultLabelCache*/
      n[16].color), l[0] & /*labelDetailLock*/
      32768 && (o.labelDetailLock = /*labelDetailLock*/
      n[15]), e.$set(o);
    },
    i(n) {
      t || (se(e.$$.fragment, n), t = !0);
    },
    o(n) {
      de(e.$$.fragment, n), t = !1;
    },
    d(n) {
      qt(e, n);
    }
  };
}
function Ib(i) {
  let e, t, n, l, o, s, r, a, c, _, f, d = (
    /*interactive*/
    i[2] && or(i)
  ), h = (
    /*editModalVisible*/
    i[12] && rr(i)
  ), b = (
    /*newModalVisible*/
    i[13] && cr(i)
  ), u = (
    /*editDefaultLabelVisible*/
    i[14] && _r(i)
  );
  return {
    c() {
      e = dt("div"), t = dt("div"), n = dt("canvas"), l = Ct(), d && d.c(), o = Ct(), h && h.c(), s = Ct(), b && b.c(), r = Ct(), u && u.c(), a = Ab(), al(
        n,
        "height",
        /*height*/
        i[6]
      ), al(
        n,
        "width",
        /*width*/
        i[7]
      ), oe(n, "class", "canvas-annotator svelte-qvyq26"), oe(t, "class", "canvas-container svelte-qvyq26"), oe(e, "class", "annotator-container"), oe(e, "tabindex", "0");
    },
    m(m, g) {
      mn(m, e, g), Ae(e, t), Ae(t, n), i[57](n), Ae(e, l), d && d.m(e, null), i[65](e), mn(m, o, g), h && h.m(m, g), mn(m, s, g), b && b.m(m, g), mn(m, r, g), u && u.m(m, g), mn(m, a, g), c = !0, _ || (f = [
        We(
          n,
          "pointerdown",
          /*handlePointerDown*/
          i[19]
        ),
        We(
          n,
          "pointerup",
          /*handlePointerUp*/
          i[20]
        ),
        We(
          n,
          "pointermove",
          /*handlePointerMove*/
          i[22]
        ),
        We(
          n,
          "pointercancel",
          /*handlePointerCancel*/
          i[21]
        ),
        We(
          n,
          "dblclick",
          /*handleDoubleClick*/
          i[29]
        ),
        We(
          n,
          "wheel",
          /*handleMouseWheel*/
          i[24]
        ),
        We(
          e,
          "keydown",
          /*handleKeyPress*/
          i[23]
        ),
        We(
          e,
          "click",
          /*click_handler_7*/
          i[66]
        )
      ], _ = !0);
    },
    p(m, g) {
      (!c || g[0] & /*height*/
      64) && al(
        n,
        "height",
        /*height*/
        m[6]
      ), (!c || g[0] & /*width*/
      128) && al(
        n,
        "width",
        /*width*/
        m[7]
      ), /*interactive*/
      m[2] ? d ? (d.p(m, g), g[0] & /*interactive*/
      4 && se(d, 1)) : (d = or(m), d.c(), se(d, 1), d.m(e, null)) : d && (li(), de(d, 1, 1, () => {
        d = null;
      }), ii()), /*editModalVisible*/
      m[12] ? h ? (h.p(m, g), g[0] & /*editModalVisible*/
      4096 && se(h, 1)) : (h = rr(m), h.c(), se(h, 1), h.m(s.parentNode, s)) : h && (li(), de(h, 1, 1, () => {
        h = null;
      }), ii()), /*newModalVisible*/
      m[13] ? b ? (b.p(m, g), g[0] & /*newModalVisible*/
      8192 && se(b, 1)) : (b = cr(m), b.c(), se(b, 1), b.m(r.parentNode, r)) : b && (li(), de(b, 1, 1, () => {
        b = null;
      }), ii()), /*editDefaultLabelVisible*/
      m[14] ? u ? (u.p(m, g), g[0] & /*editDefaultLabelVisible*/
      16384 && se(u, 1)) : (u = _r(m), u.c(), se(u, 1), u.m(a.parentNode, a)) : u && (li(), de(u, 1, 1, () => {
        u = null;
      }), ii());
    },
    i(m) {
      c || (se(d), se(h), se(b), se(u), c = !0);
    },
    o(m) {
      de(d), de(h), de(b), de(u), c = !1;
    },
    d(m) {
      m && (hn(e), hn(o), hn(s), hn(r), hn(a)), i[57](null), d && d.d(), i[65](null), h && h.d(m), b && b.d(m), u && u.d(m), _ = !1, Yc(f);
    }
  };
}
const ur = 100;
function Hb(i, e) {
  if (!i)
    return null;
  const [t, n] = i.split("-"), l = Number(n);
  return !Number.isInteger(l) || l < 0 ? null : t === "box" ? l < e.boxes.length ? { type: "box", index: l } : null : t === "point" && l < e.points.length ? { type: "point", index: l } : null;
}
function _n(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function To(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), l = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | l).toString(16).slice(1);
}
function Tb(i, e, t) {
  var n, l, o, s, r;
  (function(v) {
    v[v.creation = 0] = "creation", v[v.point = 1] = "point", v[v.drag = 2] = "drag";
  })(r || (r = {}));
  let { imageUrl: a = null } = e, { interactive: c } = e, { boxAlpha: _ = 0.5 } = e, { boxMinSize: f = 10 } = e, { handleSize: d } = e, { boxThickness: h } = e, { boxSelectedThickness: b } = e, { value: u } = e, { choices: m = [] } = e, { choicesColors: g = [] } = e, { disableEditBoxes: w = !1 } = e, { height: p = "100%" } = e, { width: y = "100%" } = e, { singleBox: z = !1 } = e, { showRemoveButton: k = null } = e, { handlesCursor: S = !0 } = e, { useDefaultLabel: q = !1 } = e, { enableKeyboardShortcuts: M = !0 } = e, { selectedAnnotationId: D = null } = e, { focusSelectedOnly: E = !1 } = e, { onClearSelection: X = null } = e;
  k === null && (k = w);
  let C, ee, Q, x = null, G = -1, R = -1, O = null, I = r.drag, U = /* @__PURE__ */ new Map(), Y = new Eb(fe, U);
  u !== null && u.boxes.length == 0 && u.points.length == 0 && (I = r.creation);
  let le = 0, ae = 0, H = 0, be = 0, L = 1, T = 0, V = 0, re = !1, ue = !1, A = !1, st = !1, Xe = q, $ = { label: "", color: "" }, Te = "", je = "", ye = { x: 0, y: 0, distance: 0 }, ge = null, vn = null;
  function Tn() {
    if (!u)
      return [];
    if (E) {
      if ((ge == null ? void 0 : ge.type) === "box") {
        const v = u.boxes[ge.index];
        return v ? [{ box: v, index: ge.index }] : [];
      }
      return [];
    }
    return u.boxes.map((v, W) => ({ box: v, index: W }));
  }
  function Ti() {
    if (!u)
      return [];
    if (E) {
      if ((ge == null ? void 0 : ge.type) === "point") {
        const v = u.points[ge.index];
        return v ? [{ point: v, index: ge.index }] : [];
      }
      return [];
    }
    return u.points.map((v, W) => ({ point: v, index: W }));
  }
  const Me = Yb();
  function fe() {
    if (Q) {
      if (Q.clearRect(0, 0, C.width, C.height), Q.save(), Q.translate(Y.offsetX, Y.offsetY), Q.scale(Y.scale, Y.scale), x !== null) {
        switch (u.orientation) {
          case 0:
            Q.drawImage(x, 0, 0, T, V);
            break;
          case 1:
            Q.translate(T, 0), Q.rotate(Math.PI / 2), Q.drawImage(x, 0, 0, V, T);
            break;
          case 2:
            Q.translate(T, V), Q.rotate(Math.PI), Q.drawImage(x, 0, 0, T, V);
            break;
          case 3:
            Q.translate(0, V), Q.rotate(-Math.PI / 2), Q.drawImage(x, 0, 0, V, T);
            break;
        }
        Q.restore();
      }
      const v = Tn().slice().reverse();
      for (const { box: j } of v)
        j.render(Q);
      const W = Ti().slice().reverse();
      for (const { point: j } of W)
        j.render(Q);
    }
  }
  function jn() {
    fe(), Me("change");
  }
  function jt(v) {
    t(54, O = v >= 0 ? "box" : null), t(52, G = v), t(53, R = -1), u.boxes.forEach((W) => {
      W.setSelected(!1);
    }), u.points.forEach((W) => {
      W.setSelected(!1);
    }), v >= 0 && v < u.boxes.length && u.boxes[v].setSelected(!0), fe();
  }
  function en(v) {
    t(54, O = v >= 0 ? "point" : null), t(53, R = v), t(52, G = -1), u.boxes.forEach((W) => {
      W.setSelected(!1);
    }), u.points.forEach((W) => {
      W.setSelected(!1);
    }), v >= 0 && v < u.points.length && u.points[v].setSelected(!0), fe();
  }
  const ji = (v, W) => {
    const j = Math.sqrt(Math.pow(v.clientX - W.clientX, 2) + Math.pow(v.clientY - W.clientY, 2));
    return j < ur ? ur : j;
  };
  function jl(v) {
    if (c) {
      if (v.preventDefault(), C.setPointerCapture(v.pointerId), U.set(v.pointerId, v), U.size == 1)
        I === r.creation ? Fn(v) : I === r.point ? Pl(v) : I === r.drag && Ul(v);
      else if (U.size == 2) {
        Y.isDragging = !1, u.boxes.forEach((Et) => {
          Et.isCreating = !1, Et.isDragging = !1, Et.isResizing = !1;
        }), u.points.forEach((Et) => {
          Et.isDragging = !1;
        });
        const W = Array.from(U.values()), j = W[0], F = W[1], N = ji(j, F), J = C.getBoundingClientRect(), Se = (j.clientX + F.clientX) / 2 - J.left, Ot = (j.clientY + F.clientY) / 2 - J.top;
        ye.distance = N, ye.x = Se, ye.y = Ot;
      }
    }
  }
  function Fl(v) {
    const W = C.getBoundingClientRect(), j = v.clientX - W.left, F = v.clientY - W.top;
    let N = !1;
    for (const { box: J, index: Se } of Tn()) {
      const Ot = J.indexOfPointInsideHandle(j, F);
      if (Ot >= 0)
        return N = !0, jt(Se), J.startResize(Ot, v), !0;
    }
    for (const { box: J, index: Se } of Tn())
      if (J.isPointInsideBox(j, F))
        return N = !0, jt(Se), J.startDrag(v), !0;
    return N;
  }
  function Ol(v) {
    c && (U.delete(v.pointerId), C.releasePointerCapture(v.pointerId), Y.isDragging && Y.stopDrag(), st && (st = !1, Uc()), Me("change"));
  }
  function B(v) {
    c && (U.delete(v.pointerId), C.releasePointerCapture(v.pointerId), Y.isDragging && Y.stopDrag(), Me("change"));
  }
  function Fe(v) {
    if (c)
      if (v.preventDefault(), v.pointerType === "mouse") {
        if (!S || u === null || I !== r.drag)
          return;
        const W = C.getBoundingClientRect(), j = v.clientX - W.left, F = v.clientY - W.top;
        for (const { box: N } of Tn()) {
          const J = N.indexOfPointInsideHandle(j, F);
          if (J >= 0) {
            t(10, C.style.cursor = N.resizeHandles[J].cursor, C);
            return;
          }
        }
        t(10, C.style.cursor = "default", C);
      } else {
        if (!U.has(v.pointerId))
          return;
        if (U.set(v.pointerId, v), U.size === 2) {
          const W = Array.from(U.values()), j = W[0], F = W[1], N = ji(j, F), J = C.getBoundingClientRect(), Se = (j.clientX + F.clientX) / 2 - J.left, Ot = (j.clientY + F.clientY) / 2 - J.top, Et = parseFloat((Y.scale * (N / ye.distance)).toFixed(2)), Oe = Et < 1 ? 1 : Et, Ss = Oe / Y.scale;
          Y.offsetX = ye.x - (ye.x - Y.offsetX) * Ss, Y.offsetY = ye.y - (ye.y - Y.offsetY) * Ss;
          const u_ = Se - ye.x, f_ = Ot - ye.y;
          Y.offsetX += u_, Y.offsetY += f_, Y.scale = Oe, ye.x = Se, ye.y = Ot, ye.distance = N, fe();
        }
      }
  }
  function Ce() {
    const v = C.width / T, W = C.height / V, j = Math.min(v, W);
    Y.scale = j, Y.offsetX = (C.width - T * j) / 2, Y.offsetY = (C.height - V * j) / 2, fe();
  }
  function at(v) {
    if (!M || v.target !== ee || !c)
      return;
    const W = v.key.toLowerCase();
    switch ((/* @__PURE__ */ new Set(["delete", "b", "d", "e", "p", " "])).has(W) && (v.preventDefault(), v.stopPropagation()), W) {
      case "delete":
        tn();
        break;
      case "b":
        Ft();
        break;
      case "p":
        gt();
        break;
      case "d":
        Mt();
        break;
      case "e":
        ks();
        break;
      case " ":
        Ce();
        break;
    }
  }
  function xe() {
    setTimeout(
      () => {
        ee == null || ee.focus();
      },
      0
    );
  }
  function Ye(v) {
    if (!c)
      return;
    v.preventDefault();
    const W = 1 / (1 + v.deltaY / 1e3 * 0.5), j = parseFloat((Y.scale * W).toFixed(2)), F = j < 1 ? 1 : j, N = C.getBoundingClientRect(), J = v.clientX - N.left, Se = v.clientY - N.top, Ot = (J - Y.offsetX) / Y.scale, Et = (Se - Y.offsetY) / Y.scale;
    if (Y.offsetX = J - Ot * F, Y.offsetY = Se - Et * F, u !== null) {
      for (const Oe of u.boxes)
        Oe.isDragging && (Oe.offsetMouseX = v.clientX - Oe._xmin * F, Oe.offsetMouseY = v.clientY - Oe._ymin * F);
      for (const Oe of u.points)
        Oe.isDragging && (Oe.offsetMouseX = v.clientX - Oe._x * F, Oe.offsetMouseY = v.clientY - Oe._y * F);
    }
    Y.scale = F, fe();
  }
  function Fn(v) {
    const W = C.getBoundingClientRect(), j = (v.clientX - W.left - Y.offsetX) / L / Y.scale, F = (v.clientY - W.top - Y.offsetY) / L / Y.scale;
    let N;
    g.length > 0 ? N = _n(g[0]) : z ? u.boxes.length > 0 ? N = u.boxes[0].color : N = _t[0] : N = _t[u.boxes.length % _t.length];
    let J = new Yo(jn, ws, Y, U, le, ae, H, be, "", j, F, j, F, N, _, f, d, h, b);
    J.startCreating(v, W.left, W.top), z ? t(35, u.boxes = [J], u) : t(35, u.boxes = [J, ...u.boxes], u), jt(0), fe(), Me("change");
  }
  function Pl(v) {
    const W = C.getBoundingClientRect(), j = (v.clientX - W.left - Y.offsetX) / Y.scale, F = (v.clientY - W.top - Y.offsetY) / Y.scale;
    let N;
    g.length > 0 ? N = _n(g[0]) : z ? u.points.length > 0 ? N = u.points[0].color : N = _t[0] : N = _t[u.points.length % _t.length];
    const J = new Io(jn, Y, U, le, ae, H, be, "", j, F, N, 0.7, Math.max(4, d / 2), L);
    z ? t(35, u.points = [J], u) : t(35, u.points = [J, ...u.points], u), en(0), J.startDrag(v), st = !0, fe(), Me("change");
  }
  function Ul(v) {
    if (Fl(v))
      return;
    z || jt(-1);
    const j = C.getBoundingClientRect(), F = v.clientX - j.left, N = v.clientY - j.top;
    for (const { point: J, index: Se } of Ti())
      if (J.isPointInsidePoint(F, N)) {
        en(Se), J.startDrag(v);
        return;
      }
    z || en(-1), Y.startDrag(v);
  }
  function Ft() {
    t(9, I = r.creation), t(10, C.style.cursor = "crosshair", C);
  }
  function gt() {
    t(9, I = r.point), t(10, C.style.cursor = "crosshair", C);
  }
  function Mt() {
    t(9, I = r.drag), t(10, C.style.cursor = "default", C);
  }
  function Pc() {
    X == null || X(), t(0, D = null), t(36, E = !1), t(55, ge = null), t(56, vn = null), t(54, O = null), t(52, G = -1), t(53, R = -1), u == null || u.boxes.forEach((v) => v.setSelected(!1)), u == null || u.points.forEach((v) => v.setSelected(!1)), fe();
  }
  function ws() {
    G >= 0 && G < u.boxes.length && (u.boxes[G].getArea() < 1 ? tn() : (w || (Xe ? ys() : t(13, ue = !0)), z && Mt()));
  }
  function Uc() {
    R >= 0 && R < u.points.length && (w || (Xe ? ys() : t(13, ue = !0)), z && Mt());
  }
  function ks() {
    w || (O === "box" ? G >= 0 && G < u.boxes.length && t(12, re = !0) : O === "point" && R >= 0 && R < u.points.length && t(12, re = !0));
  }
  function Vc(v) {
    c && ks();
  }
  function Nc(v) {
    t(12, re = !1), xe();
    const { detail: W } = v, j = W.label, F = W.color, N = W.ret;
    if (O === "box") {
      if (G >= 0 && G < u.boxes.length) {
        const J = u.boxes[G];
        N == 1 ? (J.label = j, J.color = _n(F), fe(), Me("change")) : N == -1 && tn();
      }
    } else if (O === "point" && R >= 0 && R < u.points.length) {
      const J = u.points[R];
      N == 1 ? (J.label = j, J.color = _n(F), fe(), Me("change")) : N == -1 && tn();
    }
  }
  function Kc(v) {
    t(13, ue = !1), xe();
    const { detail: W } = v, j = W.label, F = W.color, N = W.ret, J = W.lock;
    if (O === "box") {
      if (G >= 0 && G < u.boxes.length) {
        const Se = u.boxes[G];
        N == 1 ? (t(15, Xe = J), t(16, $.label = j, $), t(16, $.color = F, $), Se.label = j, Se.color = _n(F), fe(), Me("change")) : tn();
      }
    } else if (O === "point" && R >= 0 && R < u.points.length) {
      const Se = u.points[R];
      N == 1 ? (t(15, Xe = J), t(16, $.label = j, $), t(16, $.color = F, $), Se.label = j, Se.color = _n(F), fe(), Me("change")) : tn();
    }
  }
  function Zc(v) {
    t(14, A = !1), xe();
    const { detail: W } = v;
    let j = W.label, F = W.color, N = W.ret, J = W.lock;
    N == 1 && (t(15, Xe = J), t(16, $.label = j, $), t(16, $.color = F, $));
  }
  function ys() {
    if (O === "box") {
      if (G >= 0 && G < u.boxes.length) {
        const v = u.boxes[G];
        v.label = $.label, $.color !== "" && (v.color = _n($.color)), fe(), Me("change");
      }
    } else if (O === "point" && R >= 0 && R < u.points.length) {
      const v = u.points[R];
      v.label = $.label, $.color !== "" && (v.color = _n($.color)), fe(), Me("change");
    }
  }
  function tn() {
    O === "box" ? G >= 0 && G < u.boxes.length && (u.boxes.splice(G, 1), jt(-1), z && Ft(), Me("change")) : O === "point" && R >= 0 && R < u.points.length && (u.points.splice(R, 1), en(-1), z && Ft(), Me("change"));
  }
  function Vl(v) {
    t(35, u.orientation = ((u.orientation + v) % 4 + 4) % 4, u), Y.orientation = u.orientation, hi();
    for (const W of u.boxes)
      W.onRotate(v);
    for (const W of u.points)
      W.onRotate(v);
    fe(), Me("change");
  }
  function hi() {
    if (C) {
      if (L = 1, t(10, C.width = C.clientWidth, C), Y.setRotatedImage(x), x !== null) {
        if (Y.imageRotatedWidth > C.width)
          L = C.width / Y.imageRotatedWidth, T = Math.round(Y.imageRotatedWidth * L), V = Math.round(Y.imageRotatedHeight * L), le = 0, ae = 0, H = T, be = V, t(10, C.height = V, C);
        else {
          T = Y.imageRotatedWidth, V = Y.imageRotatedHeight;
          var v = (C.width - T) / 2;
          le = v, ae = 0, H = v + T, be = V, t(10, C.height = V, C);
        }
        Y.imageWidth = T, Y.imageHeight = V;
      } else
        le = 0, ae = 0, H = C.width, be = C.height, t(10, C.height = C.clientHeight, C);
      if (Y.resize(C.width, C.height, le, ae), H > 0 && be > 0) {
        for (const W of u.boxes)
          W.canvasXmin = le, W.canvasYmin = ae, W.canvasXmax = H, W.canvasYmax = be, W.setScaleFactor(L);
        for (const W of u.points)
          W.canvasXmin = le, W.canvasYmin = ae, W.canvasXmax = H, W.canvasYmax = be, W.setScaleFactor(L);
      }
      fe(), Me("change");
    }
  }
  const Gc = new ResizeObserver(hi);
  function Jc() {
    for (let v = 0; v < u.boxes.length; v++) {
      let W = u.boxes[v];
      if (!(W instanceof Yo)) {
        const j = W;
        let F = "", N = "";
        Object.prototype.hasOwnProperty.call(j, "color") ? (F = j.color, Array.isArray(F) && F.length === 3 && (F = `rgb(${F[0]}, ${F[1]}, ${F[2]})`)) : F = _t[v % _t.length], Object.prototype.hasOwnProperty.call(j, "label") && (N = j.label), W = new Yo(jn, ws, Y, U, le, ae, H, be, N, j.xmin, j.ymin, j.xmax, j.ymax, F, _, f, d, h, b), t(35, u.boxes[v] = W, u);
      }
    }
  }
  function Qc() {
    for (let v = 0; v < u.points.length; v++) {
      let W = u.points[v];
      if (!(W instanceof Io)) {
        const j = W;
        let F = "", N = "";
        Object.prototype.hasOwnProperty.call(j, "color") ? (F = j.color, Array.isArray(F) && F.length === 3 && (F = `rgb(${F[0]}, ${F[1]}, ${F[2]})`)) : F = _t[v % _t.length], Object.prototype.hasOwnProperty.call(j, "label") && (N = j.label), W = new Io(jn, Y, U, le, ae, H, be, N, j.x, j.y, F, 0.7, Math.max(4, d / 2), L), t(35, u.points[v] = W, u);
      }
    }
  }
  function Cs() {
    a !== null && (x === null || x.src != a) && (x = new Image(), x.src = a, x.onload = function() {
      hi(), fe();
    });
  }
  Xb(() => {
    if (Array.isArray(m) && m.length > 0) {
      if (!Array.isArray(g) || g.length == 0)
        for (let v = 0; v < m.length; v++) {
          let W = _t[v % _t.length];
          g.push(To(W));
        }
      t(16, $.label = m[0][0], $), t(16, $.color = g[0], $);
    }
    Q = C.getContext("2d"), Gc.observe(C), G < 0 && u !== null && u.boxes.length > 0 && jt(0), R < 0 && u !== null && u.points.length > 0 && en(0), Cs(), hi(), fe();
  });
  function xc(v) {
    lr[v ? "unshift" : "push"](() => {
      C = v, t(10, C);
    });
  }
  const $c = () => Ft(), e_ = () => gt(), t_ = () => Mt(), n_ = () => tn(), i_ = () => t(14, A = !0), l_ = () => Vl(-1), o_ = () => Vl(1);
  function s_(v) {
    lr[v ? "unshift" : "push"](() => {
      ee = v, t(11, ee);
    });
  }
  const a_ = () => ee.focus();
  function r_(v) {
    Ho.call(this, i, v);
  }
  function c_(v) {
    Ho.call(this, i, v);
  }
  function __(v) {
    Ho.call(this, i, v);
  }
  return i.$$set = (v) => {
    "imageUrl" in v && t(37, a = v.imageUrl), "interactive" in v && t(2, c = v.interactive), "boxAlpha" in v && t(38, _ = v.boxAlpha), "boxMinSize" in v && t(39, f = v.boxMinSize), "handleSize" in v && t(40, d = v.handleSize), "boxThickness" in v && t(41, h = v.boxThickness), "boxSelectedThickness" in v && t(42, b = v.boxSelectedThickness), "value" in v && t(35, u = v.value), "choices" in v && t(3, m = v.choices), "choicesColors" in v && t(4, g = v.choicesColors), "disableEditBoxes" in v && t(5, w = v.disableEditBoxes), "height" in v && t(6, p = v.height), "width" in v && t(7, y = v.width), "singleBox" in v && t(43, z = v.singleBox), "showRemoveButton" in v && t(1, k = v.showRemoveButton), "handlesCursor" in v && t(44, S = v.handlesCursor), "useDefaultLabel" in v && t(45, q = v.useDefaultLabel), "enableKeyboardShortcuts" in v && t(46, M = v.enableKeyboardShortcuts), "selectedAnnotationId" in v && t(0, D = v.selectedAnnotationId), "focusSelectedOnly" in v && t(36, E = v.focusSelectedOnly), "onClearSelection" in v && t(47, X = v.onClearSelection);
  }, i.$$.update = () => {
    if (i.$$.dirty[1] & /*selectedTarget, selectedBox, value, _a, _b, selectedPoint, _c, _d*/
    16646160 && (O === "box" && G >= 0 ? (t(17, Te = t(49, l = t(48, n = u.boxes[G]) === null || n === void 0 ? void 0 : n.label) !== null && l !== void 0 ? l : ""), t(18, je = u.boxes[G] ? To(u.boxes[G].color) : "")) : O === "point" && R >= 0 ? (t(17, Te = t(51, s = t(50, o = u.points[R]) === null || o === void 0 ? void 0 : o.label) !== null && s !== void 0 ? s : ""), t(18, je = u.points[R] ? To(u.points[R].color) : "")) : (t(17, Te = ""), t(18, je = ""))), i.$$.dirty[0] & /*selectedAnnotationId, mode, Mode*/
    769 | i.$$.dirty[1] & /*value, lastSelectedAnnotationId, selectedInfo, selectedTarget, selectedBox, selectedPoint*/
    65011728)
      if (!u)
        t(55, ge = null), t(56, vn = null);
      else {
        t(55, ge = Hb(D, u));
        const v = D !== vn;
        ge && (ge.type === "box" ? (O !== "box" || G !== ge.index) && jt(ge.index) : (O !== "point" || R !== ge.index) && en(ge.index), v && I !== r.drag && Mt()), t(56, vn = D);
      }
    i.$$.dirty[1] & /*value*/
    16 && (Y.orientation = u.orientation, Cs(), Jc(), Qc(), hi(), fe());
  }, [
    D,
    k,
    c,
    m,
    g,
    w,
    p,
    y,
    r,
    I,
    C,
    ee,
    re,
    ue,
    A,
    Xe,
    $,
    Te,
    je,
    jl,
    Ol,
    B,
    Fe,
    at,
    Ye,
    Ft,
    gt,
    Mt,
    Pc,
    Vc,
    Nc,
    Kc,
    Zc,
    tn,
    Vl,
    u,
    E,
    a,
    _,
    f,
    d,
    h,
    b,
    z,
    S,
    q,
    M,
    X,
    n,
    l,
    o,
    s,
    G,
    R,
    O,
    ge,
    vn,
    xc,
    $c,
    e_,
    t_,
    n_,
    i_,
    l_,
    o_,
    s_,
    a_,
    r_,
    c_,
    __
  ];
}
class jb extends Lb {
  constructor(e) {
    super(), Wb(
      this,
      e,
      Tb,
      Ib,
      Rb,
      {
        imageUrl: 37,
        interactive: 2,
        boxAlpha: 38,
        boxMinSize: 39,
        handleSize: 40,
        boxThickness: 41,
        boxSelectedThickness: 42,
        value: 35,
        choices: 3,
        choicesColors: 4,
        disableEditBoxes: 5,
        height: 6,
        width: 7,
        singleBox: 43,
        showRemoveButton: 1,
        handlesCursor: 44,
        useDefaultLabel: 45,
        enableKeyboardShortcuts: 46,
        selectedAnnotationId: 0,
        focusSelectedOnly: 36,
        onClearSelection: 47
      },
      null,
      [-1, -1, -1, -1]
    );
  }
}
const {
  SvelteComponent: Fb,
  add_flush_callback: Ob,
  bind: Pb,
  binding_callbacks: Ub,
  create_component: Vb,
  destroy_component: Nb,
  init: Kb,
  mount_component: Zb,
  safe_not_equal: Gb,
  transition_in: Jb,
  transition_out: Qb
} = window.__gradio__svelte__internal, { createEventDispatcher: xb } = window.__gradio__svelte__internal;
function $b(i) {
  let e, t, n;
  function l(s) {
    i[24](s);
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
    selectedAnnotationId: (
      /*selectedAnnotationId*/
      i[17]
    ),
    focusSelectedOnly: (
      /*focusSelectedOnly*/
      i[18]
    ),
    onClearSelection: (
      /*onClearSelection*/
      i[19]
    ),
    imageUrl: (
      /*resolved_src*/
      i[20]
    )
  };
  return (
    /*value*/
    i[0] !== void 0 && (o.value = /*value*/
    i[0]), e = new jb({ props: o }), Ub.push(() => Pb(e, "value", l)), e.$on(
      "change",
      /*change_handler*/
      i[25]
    ), {
      c() {
        Vb(e.$$.fragment);
      },
      m(s, r) {
        Zb(e, s, r), n = !0;
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
        s[16]), r & /*selectedAnnotationId*/
        131072 && (a.selectedAnnotationId = /*selectedAnnotationId*/
        s[17]), r & /*focusSelectedOnly*/
        262144 && (a.focusSelectedOnly = /*focusSelectedOnly*/
        s[18]), r & /*onClearSelection*/
        524288 && (a.onClearSelection = /*onClearSelection*/
        s[19]), r & /*resolved_src*/
        1048576 && (a.imageUrl = /*resolved_src*/
        s[20]), !t && r & /*value*/
        1 && (t = !0, a.value = /*value*/
        s[0], Ob(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (Jb(e.$$.fragment, s), n = !0);
      },
      o(s) {
        Qb(e.$$.fragment, s), n = !1;
      },
      d(s) {
        Nb(e, s);
      }
    }
  );
}
function ep(i, e, t) {
  let { src: n = void 0 } = e, { interactive: l } = e, { boxesAlpha: o } = e, { labelList: s } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: c } = e, { boxThickness: _ } = e, { height: f } = e, { width: d } = e, { boxSelectedThickness: h } = e, { value: b } = e, { disableEditBoxes: u } = e, { singleBox: m } = e, { showRemoveButton: g } = e, { handlesCursor: w } = e, { useDefaultLabel: p } = e, { enableKeyboardShortcuts: y } = e, { selectedAnnotationId: z = null } = e, { focusSelectedOnly: k = !1 } = e, { onClearSelection: S = null } = e, q, M;
  const D = xb();
  function E(C) {
    b = C, t(0, b);
  }
  const X = () => D("change");
  return i.$$set = (C) => {
    "src" in C && t(22, n = C.src), "interactive" in C && t(1, l = C.interactive), "boxesAlpha" in C && t(2, o = C.boxesAlpha), "labelList" in C && t(3, s = C.labelList), "labelColors" in C && t(4, r = C.labelColors), "boxMinSize" in C && t(5, a = C.boxMinSize), "handleSize" in C && t(6, c = C.handleSize), "boxThickness" in C && t(7, _ = C.boxThickness), "height" in C && t(8, f = C.height), "width" in C && t(9, d = C.width), "boxSelectedThickness" in C && t(10, h = C.boxSelectedThickness), "value" in C && t(0, b = C.value), "disableEditBoxes" in C && t(11, u = C.disableEditBoxes), "singleBox" in C && t(12, m = C.singleBox), "showRemoveButton" in C && t(13, g = C.showRemoveButton), "handlesCursor" in C && t(14, w = C.handlesCursor), "useDefaultLabel" in C && t(15, p = C.useDefaultLabel), "enableKeyboardShortcuts" in C && t(16, y = C.enableKeyboardShortcuts), "selectedAnnotationId" in C && t(17, z = C.selectedAnnotationId), "focusSelectedOnly" in C && t(18, k = C.focusSelectedOnly), "onClearSelection" in C && t(19, S = C.onClearSelection);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    12582912) {
      t(20, q = n), t(23, M = n);
      const C = n;
      hh(C).then((ee) => {
        M === C && t(20, q = ee);
      });
    }
  }, [
    b,
    l,
    o,
    s,
    r,
    a,
    c,
    _,
    f,
    d,
    h,
    u,
    m,
    g,
    w,
    p,
    y,
    z,
    k,
    S,
    q,
    D,
    n,
    M,
    E,
    X
  ];
}
class tp extends Fb {
  constructor(e) {
    super(), Kb(this, e, ep, $b, Gb, {
      src: 22,
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
      enableKeyboardShortcuts: 16,
      selectedAnnotationId: 17,
      focusSelectedOnly: 18,
      onClearSelection: 19
    });
  }
}
class fr {
  constructor() {
    this.boxes = [], this.points = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: np,
  add_flush_callback: Dl,
  append: _e,
  attr: we,
  bind: Bl,
  binding_callbacks: Xi,
  bubble: yi,
  check_outros: Sn,
  create_component: Gt,
  create_slot: ip,
  destroy_component: Jt,
  destroy_each: lp,
  detach: It,
  element: He,
  empty: op,
  ensure_array_like: dr,
  get_all_dirty_from_scope: sp,
  get_slot_changes: ap,
  group_outros: qn,
  init: rp,
  insert: Ht,
  listen: hr,
  mount_component: Qt,
  noop: Ic,
  run_all: cp,
  safe_not_equal: _p,
  set_data: jo,
  space: lt,
  text: Ci,
  toggle_class: Ml,
  transition_in: ie,
  transition_out: ce,
  update_slot_base: up
} = window.__gradio__svelte__internal, { createEventDispatcher: fp, tick: dp } = window.__gradio__svelte__internal;
function mr(i, e, t) {
  const n = i.slice();
  return n[65] = e[t], n;
}
function gr(i) {
  let e, t;
  return e = new Dh({
    props: {
      href: (
        /*value*/
        i[0].image.url
      ),
      download: (
        /*value*/
        i[0].image.orig_name || "image"
      ),
      $$slots: { default: [hp] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Gt(e.$$.fragment);
    },
    m(n, l) {
      Qt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*value*/
      1 && (o.href = /*value*/
      n[0].image.url), l[0] & /*value*/
      1 && (o.download = /*value*/
      n[0].image.orig_name || "image"), l[0] & /*i18n*/
      256 | l[2] & /*$$scope*/
      1 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (ie(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Jt(e, n);
    }
  };
}
function hp(i) {
  let e, t;
  return e = new El({
    props: {
      Icon: Ff,
      label: (
        /*i18n*/
        i[8]("common.download")
      )
    }
  }), {
    c() {
      Gt(e.$$.fragment);
    },
    m(n, l) {
      Qt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*i18n*/
      256 && (o.label = /*i18n*/
      n[8]("common.download")), e.$set(o);
    },
    i(n) {
      t || (ie(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Jt(e, n);
    }
  };
}
function br(i) {
  let e, t;
  return e = new _1({
    props: {
      i18n: (
        /*i18n*/
        i[8]
      ),
      formatter: (
        /*func*/
        i[46]
      ),
      value: (
        /*value*/
        i[0]
      )
    }
  }), e.$on(
    "share",
    /*share_handler*/
    i[47]
  ), e.$on(
    "error",
    /*error_handler*/
    i[48]
  ), {
    c() {
      Gt(e.$$.fragment);
    },
    m(n, l) {
      Qt(e, n, l), t = !0;
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
      t || (ie(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Jt(e, n);
    }
  };
}
function pr(i) {
  let e, t, n;
  return t = new El({
    props: { Icon: Xr, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[43]
  ), {
    c() {
      e = He("div"), Gt(t.$$.fragment);
    },
    m(l, o) {
      Ht(l, e, o), Qt(t, e, null), n = !0;
    },
    p: Ic,
    i(l) {
      n || (ie(t.$$.fragment, l), n = !0);
    },
    o(l) {
      ce(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && It(e), Jt(t);
    }
  };
}
function vr(i) {
  let e;
  const t = (
    /*#slots*/
    i[45].default
  ), n = ip(
    t,
    i,
    /*$$scope*/
    i[62],
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
      n && n.p && (!e || o[2] & /*$$scope*/
      1) && up(
        n,
        t,
        l,
        /*$$scope*/
        l[62],
        e ? ap(
          t,
          /*$$scope*/
          l[62],
          o,
          null
        ) : sp(
          /*$$scope*/
          l[62]
        ),
        null
      );
    },
    i(l) {
      e || (ie(n, l), e = !0);
    },
    o(l) {
      ce(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function mp(i) {
  let e, t, n = (
    /*value*/
    i[0] === null && vr(i)
  );
  return {
    c() {
      n && n.c(), e = op();
    },
    m(l, o) {
      n && n.m(l, o), Ht(l, e, o), t = !0;
    },
    p(l, o) {
      /*value*/
      l[0] === null ? n ? (n.p(l, o), o[0] & /*value*/
      1 && ie(n, 1)) : (n = vr(l), n.c(), ie(n, 1), n.m(e.parentNode, e)) : n && (qn(), ce(n, 1, 1, () => {
        n = null;
      }), Sn());
    },
    i(l) {
      t || (ie(n), t = !0);
    },
    o(l) {
      ce(n), t = !1;
    },
    d(l) {
      l && It(e), n && n.d(l);
    }
  };
}
function wr(i) {
  let e, t;
  return e = new Qm({
    props: {
      root: (
        /*root*/
        i[6]
      ),
      mirror_webcam: !1,
      mode: "image",
      include_audio: !1,
      i18n: (
        /*i18n*/
        i[8]
      ),
      upload: (
        /*upload*/
        i[35]
      )
    }
  }), e.$on(
    "capture",
    /*capture_handler*/
    i[53]
  ), e.$on(
    "stream",
    /*stream_handler_1*/
    i[54]
  ), e.$on(
    "error",
    /*error_handler_2*/
    i[55]
  ), e.$on(
    "drag",
    /*drag_handler*/
    i[56]
  ), e.$on(
    "upload",
    /*upload_handler*/
    i[57]
  ), {
    c() {
      Gt(e.$$.fragment);
    },
    m(n, l) {
      Qt(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*root*/
      64 && (o.root = /*root*/
      n[6]), l[0] & /*i18n*/
      256 && (o.i18n = /*i18n*/
      n[8]), l[1] & /*upload*/
      16 && (o.upload = /*upload*/
      n[35]), e.$set(o);
    },
    i(n) {
      t || (ie(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ce(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Jt(e, n);
    }
  };
}
function kr(i) {
  let e, t, n, l, o, s, r, a, c;
  function _(u) {
    i[58](u);
  }
  let f = {
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
    selectedAnnotationId: (
      /*selectedAnnotationId*/
      i[31]
    ),
    focusSelectedOnly: (
      /*focusSelectedOnly*/
      i[34]
    ),
    onClearSelection: (
      /*clearAnnotationSelection*/
      i[41]
    ),
    src: (
      /*value*/
      i[0].image.url
    )
  };
  /*value*/
  i[0] !== void 0 && (f.value = /*value*/
  i[0]), n = new tp({ props: f }), Xi.push(() => Bl(n, "value", _)), n.$on(
    "change",
    /*handleCanvasChange*/
    i[39]
  );
  function d(u, m) {
    return (
      /*annotationItems*/
      u[30].length === 0 ? bp : gp
    );
  }
  let h = d(i), b = h(i);
  return {
    c() {
      e = He("div"), t = He("div"), Gt(n.$$.fragment), o = lt(), s = He("aside"), r = He("div"), r.textContent = "Annotations", a = lt(), b.c(), we(t, "class", "image-frame svelte-1yldbuf"), Ml(
        t,
        "selectable",
        /*selectable*/
        i[5]
      ), we(r, "class", "annotation-panel__header svelte-1yldbuf"), we(s, "class", "annotation-panel svelte-1yldbuf"), we(s, "aria-label", "Annotations list"), we(e, "class", "annotator-layout svelte-1yldbuf");
    },
    m(u, m) {
      Ht(u, e, m), _e(e, t), Qt(n, t, null), _e(e, o), _e(e, s), _e(s, r), _e(s, a), b.m(s, null), c = !0;
    },
    p(u, m) {
      const g = {};
      m[0] & /*height*/
      131072 && (g.height = /*height*/
      u[17]), m[0] & /*width*/
      262144 && (g.width = /*width*/
      u[18]), m[0] & /*boxesAlpha*/
      4096 && (g.boxesAlpha = /*boxesAlpha*/
      u[12]), m[0] & /*labelList*/
      8192 && (g.labelList = /*labelList*/
      u[13]), m[0] & /*labelColors*/
      16384 && (g.labelColors = /*labelColors*/
      u[14]), m[0] & /*boxMinSize*/
      32768 && (g.boxMinSize = /*boxMinSize*/
      u[15]), m[0] & /*interactive*/
      128 && (g.interactive = /*interactive*/
      u[7]), m[0] & /*handleSize*/
      65536 && (g.handleSize = /*handleSize*/
      u[16]), m[0] & /*boxThickness*/
      524288 && (g.boxThickness = /*boxThickness*/
      u[19]), m[0] & /*singleBox*/
      2097152 && (g.singleBox = /*singleBox*/
      u[21]), m[0] & /*disableEditBoxes*/
      1048576 && (g.disableEditBoxes = /*disableEditBoxes*/
      u[20]), m[0] & /*showRemoveButton*/
      4194304 && (g.showRemoveButton = /*showRemoveButton*/
      u[22]), m[0] & /*handlesCursor*/
      8388608 && (g.handlesCursor = /*handlesCursor*/
      u[23]), m[0] & /*boxSelectedThickness*/
      16777216 && (g.boxSelectedThickness = /*boxSelectedThickness*/
      u[24]), m[0] & /*useDefaultLabel*/
      268435456 && (g.useDefaultLabel = /*useDefaultLabel*/
      u[28]), m[0] & /*enableKeyboardShortcuts*/
      536870912 && (g.enableKeyboardShortcuts = /*enableKeyboardShortcuts*/
      u[29]), m[1] & /*selectedAnnotationId*/
      1 && (g.selectedAnnotationId = /*selectedAnnotationId*/
      u[31]), m[1] & /*focusSelectedOnly*/
      8 && (g.focusSelectedOnly = /*focusSelectedOnly*/
      u[34]), m[0] & /*value*/
      1 && (g.src = /*value*/
      u[0].image.url), !l && m[0] & /*value*/
      1 && (l = !0, g.value = /*value*/
      u[0], Dl(() => l = !1)), n.$set(g), (!c || m[0] & /*selectable*/
      32) && Ml(
        t,
        "selectable",
        /*selectable*/
        u[5]
      ), h === (h = d(u)) && b ? b.p(u, m) : (b.d(1), b = h(u), b && (b.c(), b.m(s, null)));
    },
    i(u) {
      c || (ie(n.$$.fragment, u), c = !0);
    },
    o(u) {
      ce(n.$$.fragment, u), c = !1;
    },
    d(u) {
      u && It(e), Jt(n), b.d();
    }
  };
}
function gp(i) {
  let e, t = dr(
    /*annotationItems*/
    i[30]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = yr(mr(i, t, l));
  return {
    c() {
      e = He("ul");
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      we(e, "class", "annotation-list svelte-1yldbuf");
    },
    m(l, o) {
      Ht(l, e, o);
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(e, null);
    },
    p(l, o) {
      if (o[0] & /*annotationItems*/
      1073741824 | o[1] & /*toggleAnnotationSelection, handleAnnotationKeydown*/
      2560) {
        t = dr(
          /*annotationItems*/
          l[30]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = mr(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = yr(r), n[s].c(), n[s].m(e, null));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && It(e), lp(n, l);
    }
  };
}
function bp(i) {
  let e;
  return {
    c() {
      e = He("div"), e.textContent = "No annotations yet.", we(e, "class", "annotation-panel__empty svelte-1yldbuf");
    },
    m(t, n) {
      Ht(t, e, n);
    },
    p: Ic,
    d(t) {
      t && It(e);
    }
  };
}
function yr(i) {
  let e, t, n, l, o, s = (
    /*item*/
    i[65].label + ""
  ), r, a, c, _, f = (
    /*item*/
    i[65].shape + ""
  ), d, h, b, u, m = (
    /*item*/
    i[65].coords + ""
  ), g, w, p, y;
  function z() {
    return (
      /*click_handler*/
      i[59](
        /*item*/
        i[65]
      )
    );
  }
  function k(...S) {
    return (
      /*keydown_handler*/
      i[60](
        /*item*/
        i[65],
        ...S
      )
    );
  }
  return {
    c() {
      e = He("li"), t = He("div"), n = He("span"), o = lt(), r = Ci(s), a = lt(), c = He("div"), _ = Ci("Shape: "), d = Ci(f), h = lt(), b = He("div"), u = Ci("Coords: "), g = Ci(m), w = lt(), we(n, "class", "annotation-item__swatch svelte-1yldbuf"), we(n, "style", l = `background-color: ${/*item*/
      i[65].color};`), we(t, "class", "annotation-item__title svelte-1yldbuf"), we(c, "class", "annotation-item__meta svelte-1yldbuf"), we(b, "class", "annotation-item__coords svelte-1yldbuf"), we(e, "class", "annotation-item svelte-1yldbuf"), we(e, "role", "button"), we(e, "tabindex", "0"), Ml(
        e,
        "annotation-item--selected",
        /*item*/
        i[65].isSelected
      );
    },
    m(S, q) {
      Ht(S, e, q), _e(e, t), _e(t, n), _e(t, o), _e(t, r), _e(e, a), _e(e, c), _e(c, _), _e(c, d), _e(e, h), _e(e, b), _e(b, u), _e(b, g), _e(e, w), p || (y = [
        hr(e, "click", z),
        hr(e, "keydown", k)
      ], p = !0);
    },
    p(S, q) {
      i = S, q[0] & /*annotationItems*/
      1073741824 && l !== (l = `background-color: ${/*item*/
      i[65].color};`) && we(n, "style", l), q[0] & /*annotationItems*/
      1073741824 && s !== (s = /*item*/
      i[65].label + "") && jo(r, s), q[0] & /*annotationItems*/
      1073741824 && f !== (f = /*item*/
      i[65].shape + "") && jo(d, f), q[0] & /*annotationItems*/
      1073741824 && m !== (m = /*item*/
      i[65].coords + "") && jo(g, m), q[0] & /*annotationItems*/
      1073741824 && Ml(
        e,
        "annotation-item--selected",
        /*item*/
        i[65].isSelected
      );
    },
    d(S) {
      S && It(e), p = !1, cp(y);
    }
  };
}
function Cr(i) {
  let e, t, n;
  function l(s) {
    i[61](s);
  }
  let o = {
    sources: (
      /*sources*/
      i[4]
    ),
    handle_clear: (
      /*clear*/
      i[43]
    ),
    handle_select: (
      /*handle_select_source*/
      i[38]
    )
  };
  return (
    /*active_source*/
    i[1] !== void 0 && (o.active_source = /*active_source*/
    i[1]), e = new z1({ props: o }), Xi.push(() => Bl(e, "active_source", l)), {
      c() {
        Gt(e.$$.fragment);
      },
      m(s, r) {
        Qt(e, s, r), n = !0;
      },
      p(s, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        s[4]), !t && r[0] & /*active_source*/
        2 && (t = !0, a.active_source = /*active_source*/
        s[1], Dl(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (ie(e.$$.fragment, s), n = !0);
      },
      o(s) {
        ce(e.$$.fragment, s), n = !1;
      },
      d(s) {
        Jt(e, s);
      }
    }
  );
}
function pp(i) {
  let e, t, n, l, o, s, r, a, c, _, f, d, h, b, u = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[0] === null && /*interactive*/
    i[7]
  ), m;
  e = new zu({
    props: {
      show_label: (
        /*show_label*/
        i[3]
      ),
      Icon: Yr,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let g = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[0] !== null && gr(i)
  ), w = (
    /*showShareButton*/
    i[9] && /*value*/
    i[0] !== null && br(i)
  ), p = (
    /*showClearButton*/
    i[11] && /*value*/
    i[0] !== null && /*interactive*/
    i[7] && pr(i)
  );
  function y(D) {
    i[50](D);
  }
  function z(D) {
    i[51](D);
  }
  let k = {
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
    $$slots: { default: [mp] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[32] !== void 0 && (k.uploading = /*uploading*/
  i[32]), /*dragging*/
  i[33] !== void 0 && (k.dragging = /*dragging*/
  i[33]), c = new sm({ props: k }), i[49](c), Xi.push(() => Bl(c, "uploading", y)), Xi.push(() => Bl(c, "dragging", z)), c.$on(
    "load",
    /*handle_upload*/
    i[36]
  ), c.$on(
    "error",
    /*error_handler_1*/
    i[52]
  );
  let S = (
    /*value*/
    i[0] === null && /*active_source*/
    i[1] === "webcam" && wr(i)
  ), q = (
    /*value*/
    i[0] !== null && kr(i)
  ), M = u && Cr(i);
  return {
    c() {
      Gt(e.$$.fragment), t = lt(), n = He("div"), g && g.c(), l = lt(), w && w.c(), o = lt(), p && p.c(), s = lt(), r = He("div"), a = He("div"), Gt(c.$$.fragment), d = lt(), S && S.c(), h = lt(), q && q.c(), b = lt(), M && M.c(), we(n, "class", "icon-buttons svelte-1yldbuf"), we(a, "class", "upload-container svelte-1yldbuf"), we(r, "data-testid", "image"), we(r, "class", "image-container svelte-1yldbuf");
    },
    m(D, E) {
      Qt(e, D, E), Ht(D, t, E), Ht(D, n, E), g && g.m(n, null), _e(n, l), w && w.m(n, null), _e(n, o), p && p.m(n, null), Ht(D, s, E), Ht(D, r, E), _e(r, a), Qt(c, a, null), _e(a, d), S && S.m(a, null), _e(a, h), q && q.m(a, null), _e(r, b), M && M.m(r, null), m = !0;
    },
    p(D, E) {
      const X = {};
      E[0] & /*show_label*/
      8 && (X.show_label = /*show_label*/
      D[3]), E[0] & /*label*/
      4 && (X.label = /*label*/
      D[2] || "Image Annotator"), e.$set(X), /*showDownloadButton*/
      D[10] && /*value*/
      D[0] !== null ? g ? (g.p(D, E), E[0] & /*showDownloadButton, value*/
      1025 && ie(g, 1)) : (g = gr(D), g.c(), ie(g, 1), g.m(n, l)) : g && (qn(), ce(g, 1, 1, () => {
        g = null;
      }), Sn()), /*showShareButton*/
      D[9] && /*value*/
      D[0] !== null ? w ? (w.p(D, E), E[0] & /*showShareButton, value*/
      513 && ie(w, 1)) : (w = br(D), w.c(), ie(w, 1), w.m(n, o)) : w && (qn(), ce(w, 1, 1, () => {
        w = null;
      }), Sn()), /*showClearButton*/
      D[11] && /*value*/
      D[0] !== null && /*interactive*/
      D[7] ? p ? (p.p(D, E), E[0] & /*showClearButton, value, interactive*/
      2177 && ie(p, 1)) : (p = pr(D), p.c(), ie(p, 1), p.m(n, null)) : p && (qn(), ce(p, 1, 1, () => {
        p = null;
      }), Sn());
      const C = {};
      E[0] & /*value, active_source*/
      3 && (C.hidden = /*value*/
      D[0] !== null || /*active_source*/
      D[1] === "webcam"), E[0] & /*active_source*/
      2 && (C.filetype = /*active_source*/
      D[1] === "clipboard" ? "clipboard" : "image/*"), E[0] & /*root*/
      64 && (C.root = /*root*/
      D[6]), E[0] & /*max_file_size*/
      33554432 && (C.max_file_size = /*max_file_size*/
      D[25]), E[0] & /*sources*/
      16 && (C.disable_click = !/*sources*/
      D[4].includes("upload")), E[0] & /*cli_upload*/
      67108864 && (C.upload = /*cli_upload*/
      D[26]), E[0] & /*stream_handler*/
      134217728 && (C.stream_handler = /*stream_handler*/
      D[27]), E[0] & /*value*/
      1 | E[2] & /*$$scope*/
      1 && (C.$$scope = { dirty: E, ctx: D }), !_ && E[1] & /*uploading*/
      2 && (_ = !0, C.uploading = /*uploading*/
      D[32], Dl(() => _ = !1)), !f && E[1] & /*dragging*/
      4 && (f = !0, C.dragging = /*dragging*/
      D[33], Dl(() => f = !1)), c.$set(C), /*value*/
      D[0] === null && /*active_source*/
      D[1] === "webcam" ? S ? (S.p(D, E), E[0] & /*value, active_source*/
      3 && ie(S, 1)) : (S = wr(D), S.c(), ie(S, 1), S.m(a, h)) : S && (qn(), ce(S, 1, 1, () => {
        S = null;
      }), Sn()), /*value*/
      D[0] !== null ? q ? (q.p(D, E), E[0] & /*value*/
      1 && ie(q, 1)) : (q = kr(D), q.c(), ie(q, 1), q.m(a, null)) : q && (qn(), ce(q, 1, 1, () => {
        q = null;
      }), Sn()), E[0] & /*sources, value, interactive*/
      145 && (u = /*sources*/
      (D[4].length > 1 || /*sources*/
      D[4].includes("clipboard")) && /*value*/
      D[0] === null && /*interactive*/
      D[7]), u ? M ? (M.p(D, E), E[0] & /*sources, value, interactive*/
      145 && ie(M, 1)) : (M = Cr(D), M.c(), ie(M, 1), M.m(r, null)) : M && (qn(), ce(M, 1, 1, () => {
        M = null;
      }), Sn());
    },
    i(D) {
      m || (ie(e.$$.fragment, D), ie(g), ie(w), ie(p), ie(c.$$.fragment, D), ie(S), ie(q), ie(M), m = !0);
    },
    o(D) {
      ce(e.$$.fragment, D), ce(g), ce(w), ce(p), ce(c.$$.fragment, D), ce(S), ce(q), ce(M), m = !1;
    },
    d(D) {
      D && (It(t), It(n), It(s), It(r)), Jt(e, D), g && g.d(), w && w.d(), p && p.d(), i[49](null), Jt(c), S && S.d(), q && q.d(), M && M.d();
    }
  };
}
function vp(i) {
  var e, t, n, l, o, s, r, a;
  const c = Math.round((t = (e = i._xmin) !== null && e !== void 0 ? e : i.xmin) !== null && t !== void 0 ? t : 0), _ = Math.round((l = (n = i._ymin) !== null && n !== void 0 ? n : i.ymin) !== null && l !== void 0 ? l : 0), f = Math.round((s = (o = i._xmax) !== null && o !== void 0 ? o : i.xmax) !== null && s !== void 0 ? s : 0), d = Math.round((a = (r = i._ymax) !== null && r !== void 0 ? r : i.ymax) !== null && a !== void 0 ? a : 0);
  return `xmin:${c}, ymin:${_}, xmax:${f}, ymax:${d}`;
}
function wp(i) {
  var e, t, n, l;
  const o = Math.round((t = (e = i._x) !== null && e !== void 0 ? e : i.x) !== null && t !== void 0 ? t : 0), s = Math.round((l = (n = i._y) !== null && n !== void 0 ? n : i.y) !== null && l !== void 0 ? l : 0);
  return `x:${o}, y:${s}`;
}
function kp(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var o = this && this.__awaiter || function(B, Fe, Ce, at) {
    function xe(Ye) {
      return Ye instanceof Ce ? Ye : new Ce(function(Fn) {
        Fn(Ye);
      });
    }
    return new (Ce || (Ce = Promise))(function(Ye, Fn) {
      function Pl(gt) {
        try {
          Ft(at.next(gt));
        } catch (Mt) {
          Fn(Mt);
        }
      }
      function Ul(gt) {
        try {
          Ft(at.throw(gt));
        } catch (Mt) {
          Fn(Mt);
        }
      }
      function Ft(gt) {
        gt.done ? Ye(gt.value) : xe(gt.value).then(Pl, Ul);
      }
      Ft((at = at.apply(B, Fe || [])).next());
    });
  };
  let { value: s } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: c = ["upload", "webcam", "clipboard"] } = e, { selectable: _ = !1 } = e, { root: f } = e, { interactive: d } = e, { i18n: h } = e, { showShareButton: b } = e, { showDownloadButton: u } = e, { showClearButton: m } = e, { boxesAlpha: g } = e, { labelList: w } = e, { labelColors: p } = e, { boxMinSize: y } = e, { handleSize: z } = e, { height: k } = e, { width: S } = e, { boxThickness: q } = e, { disableEditBoxes: M } = e, { singleBox: D } = e, { showRemoveButton: E } = e, { handlesCursor: X } = e, { boxSelectedThickness: C } = e, { max_file_size: ee = null } = e, { cli_upload: Q } = e, { stream_handler: x } = e, { useDefaultLabel: G } = e, { enableKeyboardShortcuts: R } = e, O = [], I = 0, U = null, Y = !1, le, ae = !1, { active_source: H = null } = e;
  function be({ detail: B }) {
    t(0, s = new fr()), t(0, s.image = B, s), T("upload", void 0);
  }
  function L(B) {
    return o(this, void 0, void 0, function* () {
      const Fe = yield le.load_files([new File([B], "webcam.png")]), Ce = (Fe == null ? void 0 : Fe[0]) || null;
      Ce ? (t(0, s = new fr()), t(0, s.image = Ce, s)) : t(0, s = null), yield dp(), T("change");
    });
  }
  const T = fp();
  let V = !1;
  function re(B) {
    return o(this, void 0, void 0, function* () {
      switch (B) {
        case "clipboard":
          le.paste_clipboard();
          break;
      }
    });
  }
  function ue() {
    t(44, I += 1), T("change");
  }
  function A(B) {
    U === B.id ? (t(31, U = null), t(34, Y = !1)) : (t(31, U = B.id), t(34, Y = !0));
  }
  function st() {
    t(31, U = null), t(34, Y = !1);
  }
  function Xe(B, Fe) {
    (B.key === "Enter" || B.key === " ") && (B.preventDefault(), A(Fe));
  }
  function $() {
    t(0, s = null), T("clear"), T("change");
  }
  const Te = async (B) => B === null ? "" : `<img src="${await Qd(B.image)}" />`;
  function je(B) {
    yi.call(this, i, B);
  }
  function ye(B) {
    yi.call(this, i, B);
  }
  function ge(B) {
    Xi[B ? "unshift" : "push"](() => {
      le = B, t(35, le);
    });
  }
  function vn(B) {
    ae = B, t(32, ae);
  }
  function Tn(B) {
    V = B, t(33, V);
  }
  function Ti(B) {
    yi.call(this, i, B);
  }
  const Me = (B) => L(B.detail), fe = (B) => L(B.detail);
  function jn(B) {
    yi.call(this, i, B);
  }
  function jt(B) {
    yi.call(this, i, B);
  }
  const en = (B) => L(B.detail);
  function ji(B) {
    s = B, t(0, s);
  }
  const jl = (B) => A(B), Fl = (B, Fe) => Xe(Fe, B);
  function Ol(B) {
    H = B, t(1, H), t(4, c);
  }
  return i.$$set = (B) => {
    "value" in B && t(0, s = B.value), "label" in B && t(2, r = B.label), "show_label" in B && t(3, a = B.show_label), "sources" in B && t(4, c = B.sources), "selectable" in B && t(5, _ = B.selectable), "root" in B && t(6, f = B.root), "interactive" in B && t(7, d = B.interactive), "i18n" in B && t(8, h = B.i18n), "showShareButton" in B && t(9, b = B.showShareButton), "showDownloadButton" in B && t(10, u = B.showDownloadButton), "showClearButton" in B && t(11, m = B.showClearButton), "boxesAlpha" in B && t(12, g = B.boxesAlpha), "labelList" in B && t(13, w = B.labelList), "labelColors" in B && t(14, p = B.labelColors), "boxMinSize" in B && t(15, y = B.boxMinSize), "handleSize" in B && t(16, z = B.handleSize), "height" in B && t(17, k = B.height), "width" in B && t(18, S = B.width), "boxThickness" in B && t(19, q = B.boxThickness), "disableEditBoxes" in B && t(20, M = B.disableEditBoxes), "singleBox" in B && t(21, D = B.singleBox), "showRemoveButton" in B && t(22, E = B.showRemoveButton), "handlesCursor" in B && t(23, X = B.handlesCursor), "boxSelectedThickness" in B && t(24, C = B.boxSelectedThickness), "max_file_size" in B && t(25, ee = B.max_file_size), "cli_upload" in B && t(26, Q = B.cli_upload), "stream_handler" in B && t(27, x = B.stream_handler), "useDefaultLabel" in B && t(28, G = B.useDefaultLabel), "enableKeyboardShortcuts" in B && t(29, R = B.enableKeyboardShortcuts), "active_source" in B && t(1, H = B.active_source), "$$scope" in B && t(62, l = B.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*value, annotationItems*/
    1073741825 | i.$$.dirty[1] & /*annotationTick, selectedAnnotationId*/
    8193) {
      if (!s)
        t(30, O = []);
      else {
        const B = s.boxes.map((Ce, at) => {
          var xe, Ye;
          return {
            id: `box-${at}`,
            label: !((xe = Ce.label) === null || xe === void 0) && xe.trim() ? Ce.label : "(No label)",
            shape: "box",
            coords: vp(Ce),
            color: (Ye = Ce.color) !== null && Ye !== void 0 ? Ye : "transparent",
            isSelected: U === `box-${at}`
          };
        }), Fe = s.points.map((Ce, at) => {
          var xe, Ye;
          return {
            id: `point-${at}`,
            label: !((xe = Ce.label) === null || xe === void 0) && xe.trim() ? Ce.label : "(No label)",
            shape: "point",
            coords: wp(Ce),
            color: (Ye = Ce.color) !== null && Ye !== void 0 ? Ye : "transparent",
            isSelected: U === `point-${at}`
          };
        });
        t(30, O = [...B, ...Fe]);
      }
      U && !O.some((B) => B.id === U) && (t(31, U = null), t(34, Y = !1));
    }
    i.$$.dirty[1] & /*uploading*/
    2 && ae && $(), i.$$.dirty[1] & /*dragging*/
    4 && T("drag", V), i.$$.dirty[0] & /*active_source, sources*/
    18 && !H && c && t(1, H = c[0]);
  }, [
    s,
    H,
    r,
    a,
    c,
    _,
    f,
    d,
    h,
    b,
    u,
    m,
    g,
    w,
    p,
    y,
    z,
    k,
    S,
    q,
    M,
    D,
    E,
    X,
    C,
    ee,
    Q,
    x,
    G,
    R,
    O,
    U,
    ae,
    V,
    Y,
    le,
    be,
    L,
    re,
    ue,
    A,
    st,
    Xe,
    $,
    I,
    n,
    Te,
    je,
    ye,
    ge,
    vn,
    Tn,
    Ti,
    Me,
    fe,
    jn,
    jt,
    en,
    ji,
    jl,
    Fl,
    Ol,
    l
  ];
}
class yp extends np {
  constructor(e) {
    super(), rp(
      this,
      e,
      kp,
      pp,
      _p,
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
      [-1, -1, -1]
    );
  }
}
const {
  SvelteComponent: Cp,
  attr: ml,
  detach: Hc,
  element: Tc,
  init: Sp,
  insert: jc,
  noop: Sr,
  safe_not_equal: qp,
  src_url_equal: qr,
  toggle_class: un
} = window.__gradio__svelte__internal;
function zr(i) {
  let e, t;
  return {
    c() {
      e = Tc("img"), qr(e.src, t = /*value*/
      i[0].url) || ml(e, "src", t), ml(e, "alt", "");
    },
    m(n, l) {
      jc(n, e, l);
    },
    p(n, l) {
      l & /*value*/
      1 && !qr(e.src, t = /*value*/
      n[0].url) && ml(e, "src", t);
    },
    d(n) {
      n && Hc(e);
    }
  };
}
function zp(i) {
  let e, t = (
    /*value*/
    i[0] && zr(i)
  );
  return {
    c() {
      e = Tc("div"), t && t.c(), ml(e, "class", "container svelte-1sgcyba"), un(
        e,
        "table",
        /*type*/
        i[1] === "table"
      ), un(
        e,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), un(
        e,
        "selected",
        /*selected*/
        i[2]
      ), un(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    m(n, l) {
      jc(n, e, l), t && t.m(e, null);
    },
    p(n, [l]) {
      /*value*/
      n[0] ? t ? t.p(n, l) : (t = zr(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), l & /*type*/
      2 && un(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), l & /*type*/
      2 && un(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), l & /*selected*/
      4 && un(
        e,
        "selected",
        /*selected*/
        n[2]
      ), l & /*value*/
      1 && un(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: Sr,
    o: Sr,
    d(n) {
      n && Hc(e), t && t.d();
    }
  };
}
function Dp(i, e, t) {
  let { value: n } = e, { type: l } = e, { selected: o = !1 } = e;
  return i.$$set = (s) => {
    "value" in s && t(0, n = s.value), "type" in s && t(1, l = s.type), "selected" in s && t(2, o = s.selected);
  }, [n, l, o];
}
class Nq extends Cp {
  constructor(e) {
    super(), Sp(this, e, Dp, zp, qp, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: Bp,
  add_flush_callback: Dr,
  assign: Mp,
  bind: Br,
  binding_callbacks: Mr,
  check_outros: Ep,
  create_component: Yn,
  destroy_component: In,
  detach: Fc,
  empty: Lp,
  flush: ne,
  get_spread_object: Ap,
  get_spread_update: Wp,
  group_outros: Rp,
  init: Xp,
  insert: Oc,
  mount_component: Hn,
  safe_not_equal: Yp,
  space: Ip,
  transition_in: xt,
  transition_out: $t
} = window.__gradio__svelte__internal;
function Hp(i) {
  let e, t;
  return e = new lf({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [Fp] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Yn(e.$$.fragment);
    },
    m(n, l) {
      Hn(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*$$scope*/
      16384 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (xt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $t(e.$$.fragment, n), t = !1;
    },
    d(n) {
      In(e, n);
    }
  };
}
function Tp(i) {
  let e, t;
  return e = new Pr({
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
      Yn(e.$$.fragment);
    },
    m(n, l) {
      Hn(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*gradio*/
      2 && (o.i18n = /*gradio*/
      n[32].i18n), e.$set(o);
    },
    i(n) {
      t || (xt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $t(e.$$.fragment, n), t = !1;
    },
    d(n) {
      In(e, n);
    }
  };
}
function jp(i) {
  let e, t;
  return e = new Pr({
    props: {
      i18n: (
        /*gradio*/
        i[32].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      Yn(e.$$.fragment);
    },
    m(n, l) {
      Hn(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*gradio*/
      2 && (o.i18n = /*gradio*/
      n[32].i18n), e.$set(o);
    },
    i(n) {
      t || (xt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $t(e.$$.fragment, n), t = !1;
    },
    d(n) {
      In(e, n);
    }
  };
}
function Fp(i) {
  let e, t;
  return e = new Yr({}), {
    c() {
      Yn(e.$$.fragment);
    },
    m(n, l) {
      Hn(e, n, l), t = !0;
    },
    i(n) {
      t || (xt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $t(e.$$.fragment, n), t = !1;
    },
    d(n) {
      In(e, n);
    }
  };
}
function Op(i) {
  let e, t, n, l;
  const o = [jp, Tp, Hp], s = [];
  function r(a, c) {
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
      t.c(), n = Lp();
    },
    m(a, c) {
      s[e].m(a, c), Oc(a, n, c), l = !0;
    },
    p(a, c) {
      let _ = e;
      e = r(a), e === _ ? s[e].p(a, c) : (Rp(), $t(s[_], 1, 1, () => {
        s[_] = null;
      }), Ep(), t = s[e], t ? t.p(a, c) : (t = s[e] = o[e](a), t.c()), xt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (xt(t), l = !0);
    },
    o(a) {
      $t(t), l = !1;
    },
    d(a) {
      a && Fc(n), s[e].d(a);
    }
  };
}
function Pp(i) {
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
    a = Mp(a, r[d]);
  e = new _h({ props: a });
  function c(d) {
    i[35](d);
  }
  function _(d) {
    i[36](d);
  }
  let f = {
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
    $$slots: { default: [Op] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[34] !== void 0 && (f.active_source = /*active_source*/
    i[34]), /*value*/
    i[0] !== void 0 && (f.value = /*value*/
    i[0]), n = new yp({ props: f }), Mr.push(() => Br(n, "active_source", c)), Mr.push(() => Br(n, "value", _)), n.$on(
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
        Yn(e.$$.fragment), t = Ip(), Yn(n.$$.fragment);
      },
      m(d, h) {
        Hn(e, d, h), Oc(d, t, h), Hn(n, d, h), s = !0;
      },
      p(d, h) {
        const b = h[0] & /*loading_status*/
        2 | h[1] & /*gradio*/
        2 ? Wp(r, [
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
          2 && Ap(
            /*loading_status*/
            d[1]
          )
        ]) : {};
        e.$set(b);
        const u = {};
        h[0] & /*_selectable*/
        1024 && (u.selectable = /*_selectable*/
        d[10]), h[0] & /*root*/
        128 && (u.root = /*root*/
        d[7]), h[0] & /*sources*/
        16384 && (u.sources = /*sources*/
        d[14]), h[0] & /*interactive*/
        262144 && (u.interactive = /*interactive*/
        d[18]), h[0] & /*show_download_button*/
        32768 && (u.showDownloadButton = /*show_download_button*/
        d[15]), h[0] & /*show_share_button*/
        65536 && (u.showShareButton = /*show_share_button*/
        d[16]), h[0] & /*show_clear_button*/
        131072 && (u.showClearButton = /*show_clear_button*/
        d[17]), h[1] & /*gradio*/
        2 && (u.i18n = /*gradio*/
        d[32].i18n), h[0] & /*boxes_alpha*/
        524288 && (u.boxesAlpha = /*boxes_alpha*/
        d[19]), h[0] & /*height*/
        256 && (u.height = /*height*/
        d[8]), h[0] & /*width*/
        512 && (u.width = /*width*/
        d[9]), h[0] & /*label_list*/
        1048576 && (u.labelList = /*label_list*/
        d[20]), h[0] & /*label_colors*/
        2097152 && (u.labelColors = /*label_colors*/
        d[21]), h[0] & /*box_min_size*/
        4194304 && (u.boxMinSize = /*box_min_size*/
        d[22]), h[0] & /*label*/
        32 && (u.label = /*label*/
        d[5]), h[0] & /*show_label*/
        64 && (u.show_label = /*show_label*/
        d[6]), h[1] & /*gradio*/
        2 && (u.max_file_size = /*gradio*/
        d[32].max_file_size), h[1] & /*gradio*/
        2 && (u.cli_upload = /*gradio*/
        d[32].client.upload), h[1] & /*gradio*/
        2 && (u.stream_handler = /*gradio*/
        d[32].client.stream), h[0] & /*handle_size*/
        8388608 && (u.handleSize = /*handle_size*/
        d[23]), h[0] & /*box_thickness*/
        16777216 && (u.boxThickness = /*box_thickness*/
        d[24]), h[0] & /*box_selected_thickness*/
        33554432 && (u.boxSelectedThickness = /*box_selected_thickness*/
        d[25]), h[0] & /*disable_edit_boxes*/
        67108864 && (u.disableEditBoxes = /*disable_edit_boxes*/
        d[26]), h[0] & /*single_box*/
        134217728 && (u.singleBox = /*single_box*/
        d[27]), h[0] & /*show_remove_button*/
        268435456 && (u.showRemoveButton = /*show_remove_button*/
        d[28]), h[0] & /*handles_cursor*/
        536870912 && (u.handlesCursor = /*handles_cursor*/
        d[29]), h[0] & /*use_default_label*/
        1073741824 && (u.useDefaultLabel = /*use_default_label*/
        d[30]), h[1] & /*enable_keyboard_shortcuts*/
        1 && (u.enableKeyboardShortcuts = /*enable_keyboard_shortcuts*/
        d[31]), h[1] & /*$$scope, gradio, active_source*/
        16394 && (u.$$scope = { dirty: h, ctx: d }), !l && h[1] & /*active_source*/
        8 && (l = !0, u.active_source = /*active_source*/
        d[34], Dr(() => l = !1)), !o && h[0] & /*value*/
        1 && (o = !0, u.value = /*value*/
        d[0], Dr(() => o = !1)), n.$set(u);
      },
      i(d) {
        s || (xt(e.$$.fragment, d), xt(n.$$.fragment, d), s = !0);
      },
      o(d) {
        $t(e.$$.fragment, d), $t(n.$$.fragment, d), s = !1;
      },
      d(d) {
        d && Fc(t), In(e, d), In(n, d);
      }
    }
  );
}
function Up(i) {
  let e, t;
  return e = new B_({
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
      $$slots: { default: [Pp] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Yn(e.$$.fragment);
    },
    m(n, l) {
      Hn(e, n, l), t = !0;
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
      t || (xt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      $t(e.$$.fragment, n), t = !1;
    },
    d(n) {
      In(e, n);
    }
  };
}
function Vp(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: l = [] } = e, { visible: o = !0 } = e, { value: s = null } = e, { label: r } = e, { show_label: a } = e, { root: c } = e, { height: _ } = e, { width: f } = e, { _selectable: d = !1 } = e, { container: h = !0 } = e, { scale: b = null } = e, { min_width: u = void 0 } = e, { loading_status: m } = e, { sources: g = ["upload", "webcam", "clipboard"] } = e, { show_download_button: w } = e, { show_share_button: p } = e, { show_clear_button: y } = e, { interactive: z } = e, { boxes_alpha: k } = e, { label_list: S } = e, { label_colors: q } = e, { box_min_size: M } = e, { handle_size: D } = e, { box_thickness: E } = e, { box_selected_thickness: X } = e, { disable_edit_boxes: C } = e, { single_box: ee } = e, { show_remove_button: Q } = e, { handles_cursor: x } = e, { use_default_label: G } = e, { enable_keyboard_shortcuts: R } = e, { gradio: O } = e, I, U = null;
  function Y(A) {
    U = A, t(34, U);
  }
  function le(A) {
    s = A, t(0, s);
  }
  const ae = () => O.dispatch("change"), H = () => O.dispatch("edit"), be = () => {
    O.dispatch("clear");
  }, L = ({ detail: A }) => t(33, I = A), T = () => O.dispatch("upload"), V = ({ detail: A }) => O.dispatch("select", A), re = ({ detail: A }) => O.dispatch("share", A), ue = ({ detail: A }) => {
    t(1, m = m || {}), t(1, m.status = "error", m), O.dispatch("error", A);
  };
  return i.$$set = (A) => {
    "elem_id" in A && t(2, n = A.elem_id), "elem_classes" in A && t(3, l = A.elem_classes), "visible" in A && t(4, o = A.visible), "value" in A && t(0, s = A.value), "label" in A && t(5, r = A.label), "show_label" in A && t(6, a = A.show_label), "root" in A && t(7, c = A.root), "height" in A && t(8, _ = A.height), "width" in A && t(9, f = A.width), "_selectable" in A && t(10, d = A._selectable), "container" in A && t(11, h = A.container), "scale" in A && t(12, b = A.scale), "min_width" in A && t(13, u = A.min_width), "loading_status" in A && t(1, m = A.loading_status), "sources" in A && t(14, g = A.sources), "show_download_button" in A && t(15, w = A.show_download_button), "show_share_button" in A && t(16, p = A.show_share_button), "show_clear_button" in A && t(17, y = A.show_clear_button), "interactive" in A && t(18, z = A.interactive), "boxes_alpha" in A && t(19, k = A.boxes_alpha), "label_list" in A && t(20, S = A.label_list), "label_colors" in A && t(21, q = A.label_colors), "box_min_size" in A && t(22, M = A.box_min_size), "handle_size" in A && t(23, D = A.handle_size), "box_thickness" in A && t(24, E = A.box_thickness), "box_selected_thickness" in A && t(25, X = A.box_selected_thickness), "disable_edit_boxes" in A && t(26, C = A.disable_edit_boxes), "single_box" in A && t(27, ee = A.single_box), "show_remove_button" in A && t(28, Q = A.show_remove_button), "handles_cursor" in A && t(29, x = A.handles_cursor), "use_default_label" in A && t(30, G = A.use_default_label), "enable_keyboard_shortcuts" in A && t(31, R = A.enable_keyboard_shortcuts), "gradio" in A && t(32, O = A.gradio);
  }, [
    s,
    m,
    n,
    l,
    o,
    r,
    a,
    c,
    _,
    f,
    d,
    h,
    b,
    u,
    g,
    w,
    p,
    y,
    z,
    k,
    S,
    q,
    M,
    D,
    E,
    X,
    C,
    ee,
    Q,
    x,
    G,
    R,
    O,
    I,
    U,
    Y,
    le,
    ae,
    H,
    be,
    L,
    T,
    V,
    re,
    ue
  ];
}
class Kq extends Bp {
  constructor(e) {
    super(), Xp(
      this,
      e,
      Vp,
      Up,
      Yp,
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
    this.$$set({ elem_id: e }), ne();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), ne();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), ne();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), ne();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), ne();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), ne();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), ne();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), ne();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), ne();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), ne();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), ne();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), ne();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), ne();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), ne();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), ne();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), ne();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), ne();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), ne();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), ne();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), ne();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), ne();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), ne();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), ne();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), ne();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), ne();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), ne();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), ne();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), ne();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), ne();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), ne();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), ne();
  }
  get enable_keyboard_shortcuts() {
    return this.$$.ctx[31];
  }
  set enable_keyboard_shortcuts(e) {
    this.$$set({ enable_keyboard_shortcuts: e }), ne();
  }
  get gradio() {
    return this.$$.ctx[32];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), ne();
  }
}
export {
  Nq as BaseExample,
  Kq as default
};
