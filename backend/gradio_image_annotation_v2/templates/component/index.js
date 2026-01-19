const {
  SvelteComponent: h_,
  assign: m_,
  create_slot: g_,
  detach: b_,
  element: p_,
  get_all_dirty_from_scope: v_,
  get_slot_changes: w_,
  get_spread_update: k_,
  init: y_,
  insert: C_,
  safe_not_equal: S_,
  set_dynamic_element_data: Ds,
  set_style: et,
  toggle_class: Lt,
  transition_in: Ar,
  transition_out: Wr,
  update_slot_base: q_
} = window.__gradio__svelte__internal;
function z_(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[18].default
  ), o = g_(
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
    r = m_(r, s[a]);
  return {
    c() {
      e = p_(
        /*tag*/
        i[14]
      ), o && o.c(), Ds(
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
      i[9]), et(
        e,
        "height",
        /*get_dimension*/
        i[15](
          /*height*/
          i[0]
        )
      ), et(e, "width", typeof /*width*/
      i[1] == "number" ? `calc(min(${/*width*/
      i[1]}px, 100%))` : (
        /*get_dimension*/
        i[15](
          /*width*/
          i[1]
        )
      )), et(
        e,
        "border-style",
        /*variant*/
        i[4]
      ), et(
        e,
        "overflow",
        /*allow_overflow*/
        i[11] ? "visible" : "hidden"
      ), et(
        e,
        "flex-grow",
        /*scale*/
        i[12]
      ), et(e, "min-width", `calc(min(${/*min_width*/
      i[13]}px, 100%))`), et(e, "border-width", "var(--block-border-width)");
    },
    m(a, c) {
      C_(a, e, c), o && o.m(e, null), n = !0;
    },
    p(a, c) {
      o && o.p && (!n || c & /*$$scope*/
      131072) && q_(
        o,
        l,
        a,
        /*$$scope*/
        a[17],
        n ? w_(
          l,
          /*$$scope*/
          a[17],
          c,
          null
        ) : v_(
          /*$$scope*/
          a[17]
        ),
        null
      ), Ds(
        /*tag*/
        a[14]
      )(e, r = k_(s, [
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
      1 && et(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), c & /*width*/
      2 && et(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), c & /*variant*/
      16 && et(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), c & /*allow_overflow*/
      2048 && et(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), c & /*scale*/
      4096 && et(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), c & /*min_width*/
      8192 && et(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (Ar(o, a), n = !0);
    },
    o(a) {
      Wr(o, a), n = !1;
    },
    d(a) {
      a && b_(e), o && o.d(a);
    }
  };
}
function D_(i) {
  let e, t = (
    /*tag*/
    i[14] && z_(i)
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
      e || (Ar(t, n), e = !0);
    },
    o(n) {
      Wr(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function B_(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { height: o = void 0 } = e, { width: s = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: c = "solid" } = e, { border_mode: _ = "base" } = e, { padding: f = !0 } = e, { type: d = "normal" } = e, { test_id: h = void 0 } = e, { explicit_call: b = !1 } = e, { container: u = !0 } = e, { visible: m = !0 } = e, { allow_overflow: g = !0 } = e, { scale: w = null } = e, { min_width: p = 0 } = e, y = d === "fieldset" ? "fieldset" : "div";
  const D = (k) => {
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
    D,
    d,
    l,
    n
  ];
}
class M_ extends h_ {
  constructor(e) {
    super(), y_(this, e, B_, D_, S_, {
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
  SvelteComponent: E_,
  attr: L_,
  create_slot: A_,
  detach: W_,
  element: R_,
  get_all_dirty_from_scope: X_,
  get_slot_changes: Y_,
  init: I_,
  insert: H_,
  safe_not_equal: T_,
  transition_in: j_,
  transition_out: F_,
  update_slot_base: O_
} = window.__gradio__svelte__internal;
function P_(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[1].default
  ), l = A_(
    n,
    i,
    /*$$scope*/
    i[0],
    null
  );
  return {
    c() {
      e = R_("div"), l && l.c(), L_(e, "class", "svelte-1hnfib2");
    },
    m(o, s) {
      H_(o, e, s), l && l.m(e, null), t = !0;
    },
    p(o, [s]) {
      l && l.p && (!t || s & /*$$scope*/
      1) && O_(
        l,
        n,
        o,
        /*$$scope*/
        o[0],
        t ? Y_(
          n,
          /*$$scope*/
          o[0],
          s,
          null
        ) : X_(
          /*$$scope*/
          o[0]
        ),
        null
      );
    },
    i(o) {
      t || (j_(l, o), t = !0);
    },
    o(o) {
      F_(l, o), t = !1;
    },
    d(o) {
      o && W_(e), l && l.d(o);
    }
  };
}
function U_(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  return i.$$set = (o) => {
    "$$scope" in o && t(0, l = o.$$scope);
  }, [l, n];
}
class V_ extends E_ {
  constructor(e) {
    super(), I_(this, e, U_, P_, T_, {});
  }
}
const {
  SvelteComponent: N_,
  attr: Bs,
  check_outros: K_,
  create_component: Z_,
  create_slot: G_,
  destroy_component: J_,
  detach: cl,
  element: Q_,
  empty: x_,
  get_all_dirty_from_scope: $_,
  get_slot_changes: eu,
  group_outros: tu,
  init: nu,
  insert: _l,
  mount_component: iu,
  safe_not_equal: lu,
  set_data: ou,
  space: su,
  text: au,
  toggle_class: Pn,
  transition_in: qi,
  transition_out: ul,
  update_slot_base: ru
} = window.__gradio__svelte__internal;
function Ms(i) {
  let e, t;
  return e = new V_({
    props: {
      $$slots: { default: [cu] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Z_(e.$$.fragment);
    },
    m(n, l) {
      iu(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l & /*$$scope, info*/
      10 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (qi(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ul(e.$$.fragment, n), t = !1;
    },
    d(n) {
      J_(e, n);
    }
  };
}
function cu(i) {
  let e;
  return {
    c() {
      e = au(
        /*info*/
        i[1]
      );
    },
    m(t, n) {
      _l(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && ou(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && cl(e);
    }
  };
}
function _u(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[2].default
  ), s = G_(
    o,
    i,
    /*$$scope*/
    i[3],
    null
  );
  let r = (
    /*info*/
    i[1] && Ms(i)
  );
  return {
    c() {
      e = Q_("span"), s && s.c(), t = su(), r && r.c(), n = x_(), Bs(e, "data-testid", "block-info"), Bs(e, "class", "svelte-22c38v"), Pn(e, "sr-only", !/*show_label*/
      i[0]), Pn(e, "hide", !/*show_label*/
      i[0]), Pn(
        e,
        "has-info",
        /*info*/
        i[1] != null
      );
    },
    m(a, c) {
      _l(a, e, c), s && s.m(e, null), _l(a, t, c), r && r.m(a, c), _l(a, n, c), l = !0;
    },
    p(a, [c]) {
      s && s.p && (!l || c & /*$$scope*/
      8) && ru(
        s,
        o,
        a,
        /*$$scope*/
        a[3],
        l ? eu(
          o,
          /*$$scope*/
          a[3],
          c,
          null
        ) : $_(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!l || c & /*show_label*/
      1) && Pn(e, "sr-only", !/*show_label*/
      a[0]), (!l || c & /*show_label*/
      1) && Pn(e, "hide", !/*show_label*/
      a[0]), (!l || c & /*info*/
      2) && Pn(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, c), c & /*info*/
      2 && qi(r, 1)) : (r = Ms(a), r.c(), qi(r, 1), r.m(n.parentNode, n)) : r && (tu(), ul(r, 1, 1, () => {
        r = null;
      }), K_());
    },
    i(a) {
      l || (qi(s, a), qi(r), l = !0);
    },
    o(a) {
      ul(s, a), ul(r), l = !1;
    },
    d(a) {
      a && (cl(e), cl(t), cl(n)), s && s.d(a), r && r.d(a);
    }
  };
}
function uu(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { show_label: o = !0 } = e, { info: s = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, o = r.show_label), "info" in r && t(1, s = r.info), "$$scope" in r && t(3, l = r.$$scope);
  }, [o, s, n, l];
}
class Rr extends N_ {
  constructor(e) {
    super(), nu(this, e, uu, _u, lu, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: fu,
  append: Zl,
  attr: Oi,
  create_component: du,
  destroy_component: hu,
  detach: mu,
  element: Es,
  init: gu,
  insert: bu,
  mount_component: pu,
  safe_not_equal: vu,
  set_data: wu,
  space: ku,
  text: yu,
  toggle_class: en,
  transition_in: Cu,
  transition_out: Su
} = window.__gradio__svelte__internal;
function qu(i) {
  let e, t, n, l, o, s;
  return n = new /*Icon*/
  i[1]({}), {
    c() {
      e = Es("label"), t = Es("span"), du(n.$$.fragment), l = ku(), o = yu(
        /*label*/
        i[0]
      ), Oi(t, "class", "svelte-9gxdi0"), Oi(e, "for", ""), Oi(e, "data-testid", "block-label"), Oi(e, "class", "svelte-9gxdi0"), en(e, "hide", !/*show_label*/
      i[2]), en(e, "sr-only", !/*show_label*/
      i[2]), en(
        e,
        "float",
        /*float*/
        i[4]
      ), en(
        e,
        "hide-label",
        /*disable*/
        i[3]
      );
    },
    m(r, a) {
      bu(r, e, a), Zl(e, t), pu(n, t, null), Zl(e, l), Zl(e, o), s = !0;
    },
    p(r, [a]) {
      (!s || a & /*label*/
      1) && wu(
        o,
        /*label*/
        r[0]
      ), (!s || a & /*show_label*/
      4) && en(e, "hide", !/*show_label*/
      r[2]), (!s || a & /*show_label*/
      4) && en(e, "sr-only", !/*show_label*/
      r[2]), (!s || a & /*float*/
      16) && en(
        e,
        "float",
        /*float*/
        r[4]
      ), (!s || a & /*disable*/
      8) && en(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      s || (Cu(n.$$.fragment, r), s = !0);
    },
    o(r) {
      Su(n.$$.fragment, r), s = !1;
    },
    d(r) {
      r && mu(e), hu(n);
    }
  };
}
function zu(i, e, t) {
  let { label: n = null } = e, { Icon: l } = e, { show_label: o = !0 } = e, { disable: s = !1 } = e, { float: r = !0 } = e;
  return i.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, l = a.Icon), "show_label" in a && t(2, o = a.show_label), "disable" in a && t(3, s = a.disable), "float" in a && t(4, r = a.float);
  }, [n, l, o, s, r];
}
class Du extends fu {
  constructor(e) {
    super(), gu(this, e, zu, qu, vu, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: Bu,
  append: Po,
  attr: Ut,
  bubble: Mu,
  create_component: Eu,
  destroy_component: Lu,
  detach: Xr,
  element: Uo,
  init: Au,
  insert: Yr,
  listen: Wu,
  mount_component: Ru,
  safe_not_equal: Xu,
  set_data: Yu,
  set_style: Un,
  space: Iu,
  text: Hu,
  toggle_class: Pe,
  transition_in: Tu,
  transition_out: ju
} = window.__gradio__svelte__internal;
function Ls(i) {
  let e, t;
  return {
    c() {
      e = Uo("span"), t = Hu(
        /*label*/
        i[1]
      ), Ut(e, "class", "svelte-1lrphxw");
    },
    m(n, l) {
      Yr(n, e, l), Po(e, t);
    },
    p(n, l) {
      l & /*label*/
      2 && Yu(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && Xr(e);
    }
  };
}
function Fu(i) {
  let e, t, n, l, o, s, r, a = (
    /*show_label*/
    i[2] && Ls(i)
  );
  return l = new /*Icon*/
  i[0]({}), {
    c() {
      e = Uo("button"), a && a.c(), t = Iu(), n = Uo("div"), Eu(l.$$.fragment), Ut(n, "class", "svelte-1lrphxw"), Pe(
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
      i[7], Ut(
        e,
        "aria-label",
        /*label*/
        i[1]
      ), Ut(
        e,
        "aria-haspopup",
        /*hasPopup*/
        i[8]
      ), Ut(
        e,
        "title",
        /*label*/
        i[1]
      ), Ut(e, "class", "svelte-1lrphxw"), Pe(
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
      ), Un(e, "color", !/*disabled*/
      i[7] && /*_color*/
      i[12] ? (
        /*_color*/
        i[12]
      ) : "var(--block-label-text-color)"), Un(e, "--bg-color", /*disabled*/
      i[7] ? "auto" : (
        /*background*/
        i[10]
      )), Un(
        e,
        "margin-left",
        /*offset*/
        i[11] + "px"
      );
    },
    m(c, _) {
      Yr(c, e, _), a && a.m(e, null), Po(e, t), Po(e, n), Ru(l, n, null), o = !0, s || (r = Wu(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), s = !0);
    },
    p(c, [_]) {
      /*show_label*/
      c[2] ? a ? a.p(c, _) : (a = Ls(c), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!o || _ & /*size*/
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
      2) && Ut(
        e,
        "aria-label",
        /*label*/
        c[1]
      ), (!o || _ & /*hasPopup*/
      256) && Ut(
        e,
        "aria-haspopup",
        /*hasPopup*/
        c[8]
      ), (!o || _ & /*label*/
      2) && Ut(
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
      4224 && Un(e, "color", !/*disabled*/
      c[7] && /*_color*/
      c[12] ? (
        /*_color*/
        c[12]
      ) : "var(--block-label-text-color)"), _ & /*disabled, background*/
      1152 && Un(e, "--bg-color", /*disabled*/
      c[7] ? "auto" : (
        /*background*/
        c[10]
      )), _ & /*offset*/
      2048 && Un(
        e,
        "margin-left",
        /*offset*/
        c[11] + "px"
      );
    },
    i(c) {
      o || (Tu(l.$$.fragment, c), o = !0);
    },
    o(c) {
      ju(l.$$.fragment, c), o = !1;
    },
    d(c) {
      c && Xr(e), a && a.d(), Lu(l), s = !1, r();
    }
  };
}
function Ou(i, e, t) {
  let n, { Icon: l } = e, { label: o = "" } = e, { show_label: s = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: c = !0 } = e, { highlight: _ = !1 } = e, { disabled: f = !1 } = e, { hasPopup: d = !1 } = e, { color: h = "var(--block-label-text-color)" } = e, { transparent: b = !1 } = e, { background: u = "var(--background-fill-primary)" } = e, { offset: m = 0 } = e;
  function g(w) {
    Mu.call(this, i, w);
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
class Ll extends Bu {
  constructor(e) {
    super(), Au(this, e, Ou, Fu, Xu, {
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
  SvelteComponent: Pu,
  append: Uu,
  attr: Gl,
  binding_callbacks: Vu,
  create_slot: Nu,
  detach: Ku,
  element: As,
  get_all_dirty_from_scope: Zu,
  get_slot_changes: Gu,
  init: Ju,
  insert: Qu,
  safe_not_equal: xu,
  toggle_class: tn,
  transition_in: $u,
  transition_out: ef,
  update_slot_base: tf
} = window.__gradio__svelte__internal;
function nf(i) {
  let e, t, n;
  const l = (
    /*#slots*/
    i[5].default
  ), o = Nu(
    l,
    i,
    /*$$scope*/
    i[4],
    null
  );
  return {
    c() {
      e = As("div"), t = As("div"), o && o.c(), Gl(t, "class", "icon svelte-3w3rth"), Gl(e, "class", "empty svelte-3w3rth"), Gl(e, "aria-label", "Empty value"), tn(
        e,
        "small",
        /*size*/
        i[0] === "small"
      ), tn(
        e,
        "large",
        /*size*/
        i[0] === "large"
      ), tn(
        e,
        "unpadded_box",
        /*unpadded_box*/
        i[1]
      ), tn(
        e,
        "small_parent",
        /*parent_height*/
        i[3]
      );
    },
    m(s, r) {
      Qu(s, e, r), Uu(e, t), o && o.m(t, null), i[6](e), n = !0;
    },
    p(s, [r]) {
      o && o.p && (!n || r & /*$$scope*/
      16) && tf(
        o,
        l,
        s,
        /*$$scope*/
        s[4],
        n ? Gu(
          l,
          /*$$scope*/
          s[4],
          r,
          null
        ) : Zu(
          /*$$scope*/
          s[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && tn(
        e,
        "small",
        /*size*/
        s[0] === "small"
      ), (!n || r & /*size*/
      1) && tn(
        e,
        "large",
        /*size*/
        s[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && tn(
        e,
        "unpadded_box",
        /*unpadded_box*/
        s[1]
      ), (!n || r & /*parent_height*/
      8) && tn(
        e,
        "small_parent",
        /*parent_height*/
        s[3]
      );
    },
    i(s) {
      n || ($u(o, s), n = !0);
    },
    o(s) {
      ef(o, s), n = !1;
    },
    d(s) {
      s && Ku(e), o && o.d(s), i[6](null);
    }
  };
}
function lf(i, e, t) {
  let n, { $$slots: l = {}, $$scope: o } = e, { size: s = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function c(f) {
    var d;
    if (!f) return !1;
    const { height: h } = f.getBoundingClientRect(), { height: b } = ((d = f.parentElement) === null || d === void 0 ? void 0 : d.getBoundingClientRect()) || { height: h };
    return h > b + 2;
  }
  function _(f) {
    Vu[f ? "unshift" : "push"](() => {
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
class of extends Pu {
  constructor(e) {
    super(), Ju(this, e, lf, nf, xu, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Kp,
  append: Zp,
  attr: Gp,
  detach: Jp,
  init: Qp,
  insert: xp,
  noop: $p,
  safe_not_equal: e2,
  svg_element: t2
} = window.__gradio__svelte__internal, {
  SvelteComponent: n2,
  append: i2,
  attr: l2,
  detach: o2,
  init: s2,
  insert: a2,
  noop: r2,
  safe_not_equal: c2,
  svg_element: _2
} = window.__gradio__svelte__internal, {
  SvelteComponent: u2,
  append: f2,
  attr: d2,
  detach: h2,
  init: m2,
  insert: g2,
  noop: b2,
  safe_not_equal: p2,
  svg_element: v2
} = window.__gradio__svelte__internal, {
  SvelteComponent: sf,
  append: Ws,
  attr: Ue,
  detach: af,
  init: rf,
  insert: cf,
  noop: Jl,
  safe_not_equal: _f,
  svg_element: Ql
} = window.__gradio__svelte__internal;
function uf(i) {
  let e, t, n;
  return {
    c() {
      e = Ql("svg"), t = Ql("path"), n = Ql("circle"), Ue(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), Ue(n, "cx", "12"), Ue(n, "cy", "13"), Ue(n, "r", "4"), Ue(e, "xmlns", "http://www.w3.org/2000/svg"), Ue(e, "width", "100%"), Ue(e, "height", "100%"), Ue(e, "viewBox", "0 0 24 24"), Ue(e, "fill", "none"), Ue(e, "stroke", "currentColor"), Ue(e, "stroke-width", "1.5"), Ue(e, "stroke-linecap", "round"), Ue(e, "stroke-linejoin", "round"), Ue(e, "class", "feather feather-camera");
    },
    m(l, o) {
      cf(l, e, o), Ws(e, t), Ws(e, n);
    },
    p: Jl,
    i: Jl,
    o: Jl,
    d(l) {
      l && af(e);
    }
  };
}
class ff extends sf {
  constructor(e) {
    super(), rf(this, e, null, uf, _f, {});
  }
}
const {
  SvelteComponent: w2,
  append: k2,
  attr: y2,
  detach: C2,
  init: S2,
  insert: q2,
  noop: z2,
  safe_not_equal: D2,
  svg_element: B2
} = window.__gradio__svelte__internal, {
  SvelteComponent: M2,
  append: E2,
  attr: L2,
  detach: A2,
  init: W2,
  insert: R2,
  noop: X2,
  safe_not_equal: Y2,
  svg_element: I2
} = window.__gradio__svelte__internal, {
  SvelteComponent: H2,
  append: T2,
  attr: j2,
  detach: F2,
  init: O2,
  insert: P2,
  noop: U2,
  safe_not_equal: V2,
  svg_element: N2
} = window.__gradio__svelte__internal, {
  SvelteComponent: df,
  append: hf,
  attr: pt,
  detach: mf,
  init: gf,
  insert: bf,
  noop: xl,
  safe_not_equal: pf,
  svg_element: Rs
} = window.__gradio__svelte__internal;
function vf(i) {
  let e, t;
  return {
    c() {
      e = Rs("svg"), t = Rs("circle"), pt(t, "cx", "12"), pt(t, "cy", "12"), pt(t, "r", "10"), pt(e, "xmlns", "http://www.w3.org/2000/svg"), pt(e, "width", "100%"), pt(e, "height", "100%"), pt(e, "viewBox", "0 0 24 24"), pt(e, "stroke-width", "1.5"), pt(e, "stroke-linecap", "round"), pt(e, "stroke-linejoin", "round"), pt(e, "class", "feather feather-circle");
    },
    m(n, l) {
      bf(n, e, l), hf(e, t);
    },
    p: xl,
    i: xl,
    o: xl,
    d(n) {
      n && mf(e);
    }
  };
}
class wf extends df {
  constructor(e) {
    super(), gf(this, e, null, vf, pf, {});
  }
}
const {
  SvelteComponent: kf,
  append: $l,
  attr: vt,
  detach: yf,
  init: Cf,
  insert: Sf,
  noop: eo,
  safe_not_equal: qf,
  set_style: At,
  svg_element: Pi
} = window.__gradio__svelte__internal;
function zf(i) {
  let e, t, n, l;
  return {
    c() {
      e = Pi("svg"), t = Pi("g"), n = Pi("path"), l = Pi("path"), vt(n, "d", "M18,6L6.087,17.913"), At(n, "fill", "none"), At(n, "fill-rule", "nonzero"), At(n, "stroke-width", "2px"), vt(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), vt(l, "d", "M4.364,4.364L19.636,19.636"), At(l, "fill", "none"), At(l, "fill-rule", "nonzero"), At(l, "stroke-width", "2px"), vt(e, "width", "100%"), vt(e, "height", "100%"), vt(e, "viewBox", "0 0 24 24"), vt(e, "version", "1.1"), vt(e, "xmlns", "http://www.w3.org/2000/svg"), vt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), vt(e, "xml:space", "preserve"), vt(e, "stroke", "currentColor"), At(e, "fill-rule", "evenodd"), At(e, "clip-rule", "evenodd"), At(e, "stroke-linecap", "round"), At(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      Sf(o, e, s), $l(e, t), $l(t, n), $l(e, l);
    },
    p: eo,
    i: eo,
    o: eo,
    d(o) {
      o && yf(e);
    }
  };
}
let Ir = class extends kf {
  constructor(e) {
    super(), Cf(this, e, null, zf, qf, {});
  }
};
const {
  SvelteComponent: Z2,
  append: G2,
  attr: J2,
  detach: Q2,
  init: x2,
  insert: $2,
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
  noop: cv,
  safe_not_equal: _v,
  svg_element: uv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Df,
  append: Bf,
  attr: gi,
  detach: Mf,
  init: Ef,
  insert: Lf,
  noop: to,
  safe_not_equal: Af,
  svg_element: Xs
} = window.__gradio__svelte__internal;
function Wf(i) {
  let e, t;
  return {
    c() {
      e = Xs("svg"), t = Xs("path"), gi(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), gi(t, "fill", "currentColor"), gi(e, "id", "icon"), gi(e, "xmlns", "http://www.w3.org/2000/svg"), gi(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      Lf(n, e, l), Bf(e, t);
    },
    p: to,
    i: to,
    o: to,
    d(n) {
      n && Mf(e);
    }
  };
}
class Rf extends Df {
  constructor(e) {
    super(), Ef(this, e, null, Wf, Af, {});
  }
}
const {
  SvelteComponent: fv,
  append: dv,
  attr: hv,
  detach: mv,
  init: gv,
  insert: bv,
  noop: pv,
  safe_not_equal: vv,
  svg_element: wv
} = window.__gradio__svelte__internal, {
  SvelteComponent: kv,
  append: yv,
  attr: Cv,
  detach: Sv,
  init: qv,
  insert: zv,
  noop: Dv,
  safe_not_equal: Bv,
  svg_element: Mv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ev,
  append: Lv,
  attr: Av,
  detach: Wv,
  init: Rv,
  insert: Xv,
  noop: Yv,
  safe_not_equal: Iv,
  svg_element: Hv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Xf,
  append: Yf,
  attr: Vn,
  detach: If,
  init: Hf,
  insert: Tf,
  noop: no,
  safe_not_equal: jf,
  svg_element: Ys
} = window.__gradio__svelte__internal;
function Ff(i) {
  let e, t;
  return {
    c() {
      e = Ys("svg"), t = Ys("path"), Vn(t, "fill", "currentColor"), Vn(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Vn(e, "xmlns", "http://www.w3.org/2000/svg"), Vn(e, "width", "100%"), Vn(e, "height", "100%"), Vn(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      Tf(n, e, l), Yf(e, t);
    },
    p: no,
    i: no,
    o: no,
    d(n) {
      n && If(e);
    }
  };
}
class Of extends Xf {
  constructor(e) {
    super(), Hf(this, e, null, Ff, jf, {});
  }
}
const {
  SvelteComponent: Pf,
  append: Uf,
  attr: Nn,
  detach: Vf,
  init: Nf,
  insert: Kf,
  noop: io,
  safe_not_equal: Zf,
  svg_element: Is
} = window.__gradio__svelte__internal;
function Gf(i) {
  let e, t;
  return {
    c() {
      e = Is("svg"), t = Is("path"), Nn(t, "d", "M5 8l4 4 4-4z"), Nn(e, "class", "dropdown-arrow svelte-145leq6"), Nn(e, "xmlns", "http://www.w3.org/2000/svg"), Nn(e, "width", "100%"), Nn(e, "height", "100%"), Nn(e, "viewBox", "0 0 18 18");
    },
    m(n, l) {
      Kf(n, e, l), Uf(e, t);
    },
    p: io,
    i: io,
    o: io,
    d(n) {
      n && Vf(e);
    }
  };
}
class _s extends Pf {
  constructor(e) {
    super(), Nf(this, e, null, Gf, Zf, {});
  }
}
const {
  SvelteComponent: Tv,
  append: jv,
  attr: Fv,
  detach: Ov,
  init: Pv,
  insert: Uv,
  noop: Vv,
  safe_not_equal: Nv,
  svg_element: Kv
} = window.__gradio__svelte__internal, {
  SvelteComponent: Zv,
  append: Gv,
  attr: Jv,
  detach: Qv,
  init: xv,
  insert: $v,
  noop: ew,
  safe_not_equal: tw,
  svg_element: nw
} = window.__gradio__svelte__internal, {
  SvelteComponent: iw,
  append: lw,
  attr: ow,
  detach: sw,
  init: aw,
  insert: rw,
  noop: cw,
  safe_not_equal: _w,
  svg_element: uw
} = window.__gradio__svelte__internal, {
  SvelteComponent: fw,
  append: dw,
  attr: hw,
  detach: mw,
  init: gw,
  insert: bw,
  noop: pw,
  safe_not_equal: vw,
  svg_element: ww
} = window.__gradio__svelte__internal, {
  SvelteComponent: kw,
  append: yw,
  attr: Cw,
  detach: Sw,
  init: qw,
  insert: zw,
  noop: Dw,
  safe_not_equal: Bw,
  svg_element: Mw
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ew,
  append: Lw,
  attr: Aw,
  detach: Ww,
  init: Rw,
  insert: Xw,
  noop: Yw,
  safe_not_equal: Iw,
  svg_element: Hw
} = window.__gradio__svelte__internal, {
  SvelteComponent: Tw,
  append: jw,
  attr: Fw,
  detach: Ow,
  init: Pw,
  insert: Uw,
  noop: Vw,
  safe_not_equal: Nw,
  svg_element: Kw
} = window.__gradio__svelte__internal, {
  SvelteComponent: Jf,
  append: lo,
  attr: ve,
  detach: Qf,
  init: xf,
  insert: $f,
  noop: oo,
  safe_not_equal: ed,
  svg_element: Ui
} = window.__gradio__svelte__internal;
function td(i) {
  let e, t, n, l;
  return {
    c() {
      e = Ui("svg"), t = Ui("rect"), n = Ui("circle"), l = Ui("polyline"), ve(t, "x", "3"), ve(t, "y", "3"), ve(t, "width", "18"), ve(t, "height", "18"), ve(t, "rx", "2"), ve(t, "ry", "2"), ve(n, "cx", "8.5"), ve(n, "cy", "8.5"), ve(n, "r", "1.5"), ve(l, "points", "21 15 16 10 5 21"), ve(e, "xmlns", "http://www.w3.org/2000/svg"), ve(e, "width", "100%"), ve(e, "height", "100%"), ve(e, "viewBox", "0 0 24 24"), ve(e, "fill", "none"), ve(e, "stroke", "currentColor"), ve(e, "stroke-width", "1.5"), ve(e, "stroke-linecap", "round"), ve(e, "stroke-linejoin", "round"), ve(e, "class", "feather feather-image");
    },
    m(o, s) {
      $f(o, e, s), lo(e, t), lo(e, n), lo(e, l);
    },
    p: oo,
    i: oo,
    o: oo,
    d(o) {
      o && Qf(e);
    }
  };
}
let Hr = class extends Jf {
  constructor(e) {
    super(), xf(this, e, null, td, ed, {});
  }
};
const {
  SvelteComponent: nd,
  append: id,
  attr: Vi,
  detach: ld,
  init: od,
  insert: sd,
  noop: so,
  safe_not_equal: ad,
  svg_element: Hs
} = window.__gradio__svelte__internal;
function rd(i) {
  let e, t;
  return {
    c() {
      e = Hs("svg"), t = Hs("path"), Vi(t, "fill", "currentColor"), Vi(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Vi(e, "xmlns", "http://www.w3.org/2000/svg"), Vi(e, "viewBox", "0 0 24 24");
    },
    m(n, l) {
      sd(n, e, l), id(e, t);
    },
    p: so,
    i: so,
    o: so,
    d(n) {
      n && ld(e);
    }
  };
}
class Tr extends nd {
  constructor(e) {
    super(), od(this, e, null, rd, ad, {});
  }
}
const {
  SvelteComponent: Gw,
  append: Jw,
  attr: Qw,
  detach: xw,
  init: $w,
  insert: e3,
  noop: t3,
  safe_not_equal: n3,
  svg_element: i3
} = window.__gradio__svelte__internal, {
  SvelteComponent: l3,
  append: o3,
  attr: s3,
  detach: a3,
  init: r3,
  insert: c3,
  noop: _3,
  safe_not_equal: u3,
  svg_element: f3
} = window.__gradio__svelte__internal, {
  SvelteComponent: d3,
  append: h3,
  attr: m3,
  detach: g3,
  init: b3,
  insert: p3,
  noop: v3,
  safe_not_equal: w3,
  svg_element: k3
} = window.__gradio__svelte__internal, {
  SvelteComponent: y3,
  append: C3,
  attr: S3,
  detach: q3,
  init: z3,
  insert: D3,
  noop: B3,
  safe_not_equal: M3,
  svg_element: E3
} = window.__gradio__svelte__internal, {
  SvelteComponent: L3,
  append: A3,
  attr: W3,
  detach: R3,
  init: X3,
  insert: Y3,
  noop: I3,
  safe_not_equal: H3,
  svg_element: T3
} = window.__gradio__svelte__internal, {
  SvelteComponent: cd,
  append: Ni,
  attr: we,
  detach: _d,
  init: ud,
  insert: fd,
  noop: ao,
  safe_not_equal: dd,
  svg_element: bi
} = window.__gradio__svelte__internal;
function hd(i) {
  let e, t, n, l, o;
  return {
    c() {
      e = bi("svg"), t = bi("path"), n = bi("path"), l = bi("line"), o = bi("line"), we(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), we(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), we(l, "x1", "12"), we(l, "y1", "19"), we(l, "x2", "12"), we(l, "y2", "23"), we(o, "x1", "8"), we(o, "y1", "23"), we(o, "x2", "16"), we(o, "y2", "23"), we(e, "xmlns", "http://www.w3.org/2000/svg"), we(e, "width", "100%"), we(e, "height", "100%"), we(e, "viewBox", "0 0 24 24"), we(e, "fill", "none"), we(e, "stroke", "currentColor"), we(e, "stroke-width", "2"), we(e, "stroke-linecap", "round"), we(e, "stroke-linejoin", "round"), we(e, "class", "feather feather-mic");
    },
    m(s, r) {
      fd(s, e, r), Ni(e, t), Ni(e, n), Ni(e, l), Ni(e, o);
    },
    p: ao,
    i: ao,
    o: ao,
    d(s) {
      s && _d(e);
    }
  };
}
class md extends cd {
  constructor(e) {
    super(), ud(this, e, null, hd, dd, {});
  }
}
const {
  SvelteComponent: j3,
  append: F3,
  attr: O3,
  detach: P3,
  init: U3,
  insert: V3,
  noop: N3,
  safe_not_equal: K3,
  svg_element: Z3
} = window.__gradio__svelte__internal, {
  SvelteComponent: G3,
  append: J3,
  attr: Q3,
  detach: x3,
  init: $3,
  insert: e4,
  noop: t4,
  safe_not_equal: n4,
  svg_element: i4
} = window.__gradio__svelte__internal, {
  SvelteComponent: l4,
  append: o4,
  attr: s4,
  detach: a4,
  init: r4,
  insert: c4,
  noop: _4,
  safe_not_equal: u4,
  svg_element: f4
} = window.__gradio__svelte__internal, {
  SvelteComponent: d4,
  append: h4,
  attr: m4,
  detach: g4,
  init: b4,
  insert: p4,
  noop: v4,
  safe_not_equal: w4,
  svg_element: k4
} = window.__gradio__svelte__internal, {
  SvelteComponent: y4,
  append: C4,
  attr: S4,
  detach: q4,
  init: z4,
  insert: D4,
  noop: B4,
  safe_not_equal: M4,
  svg_element: E4
} = window.__gradio__svelte__internal, {
  SvelteComponent: L4,
  append: A4,
  attr: W4,
  detach: R4,
  init: X4,
  insert: Y4,
  noop: I4,
  safe_not_equal: H4,
  svg_element: T4
} = window.__gradio__svelte__internal, {
  SvelteComponent: gd,
  append: Ts,
  attr: ct,
  detach: bd,
  init: pd,
  insert: vd,
  noop: ro,
  safe_not_equal: wd,
  set_style: kd,
  svg_element: co
} = window.__gradio__svelte__internal;
function yd(i) {
  let e, t, n;
  return {
    c() {
      e = co("svg"), t = co("polyline"), n = co("path"), ct(t, "points", "1 4 1 10 7 10"), ct(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), ct(e, "xmlns", "http://www.w3.org/2000/svg"), ct(e, "width", "100%"), ct(e, "height", "100%"), ct(e, "viewBox", "0 0 24 24"), ct(e, "fill", "none"), ct(e, "stroke", "currentColor"), ct(e, "stroke-width", "2"), ct(e, "stroke-linecap", "round"), ct(e, "stroke-linejoin", "round"), ct(e, "class", "feather feather-rotate-ccw"), kd(e, "transform", "rotateY(180deg)");
    },
    m(l, o) {
      vd(l, e, o), Ts(e, t), Ts(e, n);
    },
    p: ro,
    i: ro,
    o: ro,
    d(l) {
      l && bd(e);
    }
  };
}
class Cd extends gd {
  constructor(e) {
    super(), pd(this, e, null, yd, wd, {});
  }
}
const {
  SvelteComponent: j4,
  append: F4,
  attr: O4,
  detach: P4,
  init: U4,
  insert: V4,
  noop: N4,
  safe_not_equal: K4,
  svg_element: Z4
} = window.__gradio__svelte__internal, {
  SvelteComponent: G4,
  append: J4,
  attr: Q4,
  detach: x4,
  init: $4,
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
  insert: c5,
  noop: _5,
  safe_not_equal: u5,
  svg_element: f5
} = window.__gradio__svelte__internal, {
  SvelteComponent: d5,
  append: h5,
  attr: m5,
  detach: g5,
  init: b5,
  insert: p5,
  noop: v5,
  safe_not_equal: w5,
  svg_element: k5
} = window.__gradio__svelte__internal, {
  SvelteComponent: y5,
  append: C5,
  attr: S5,
  detach: q5,
  init: z5,
  insert: D5,
  noop: B5,
  safe_not_equal: M5,
  svg_element: E5
} = window.__gradio__svelte__internal, {
  SvelteComponent: Sd,
  append: qd,
  attr: Ve,
  detach: zd,
  init: Dd,
  insert: Bd,
  noop: _o,
  safe_not_equal: Md,
  svg_element: js
} = window.__gradio__svelte__internal;
function Ed(i) {
  let e, t;
  return {
    c() {
      e = js("svg"), t = js("rect"), Ve(t, "x", "3"), Ve(t, "y", "3"), Ve(t, "width", "18"), Ve(t, "height", "18"), Ve(t, "rx", "2"), Ve(t, "ry", "2"), Ve(e, "xmlns", "http://www.w3.org/2000/svg"), Ve(e, "width", "100%"), Ve(e, "height", "100%"), Ve(e, "viewBox", "0 0 24 24"), Ve(e, "stroke-width", "1.5"), Ve(e, "stroke-linecap", "round"), Ve(e, "stroke-linejoin", "round"), Ve(e, "class", "feather feather-square");
    },
    m(n, l) {
      Bd(n, e, l), qd(e, t);
    },
    p: _o,
    i: _o,
    o: _o,
    d(n) {
      n && zd(e);
    }
  };
}
class Ld extends Sd {
  constructor(e) {
    super(), Dd(this, e, null, Ed, Md, {});
  }
}
const {
  SvelteComponent: L5,
  append: A5,
  attr: W5,
  detach: R5,
  init: X5,
  insert: Y5,
  noop: I5,
  safe_not_equal: H5,
  svg_element: T5
} = window.__gradio__svelte__internal, {
  SvelteComponent: j5,
  append: F5,
  attr: O5,
  detach: P5,
  init: U5,
  insert: V5,
  noop: N5,
  safe_not_equal: K5,
  svg_element: Z5
} = window.__gradio__svelte__internal, {
  SvelteComponent: G5,
  append: J5,
  attr: Q5,
  detach: x5,
  init: $5,
  insert: e6,
  noop: t6,
  safe_not_equal: n6,
  svg_element: i6,
  text: l6
} = window.__gradio__svelte__internal, {
  SvelteComponent: o6,
  append: s6,
  attr: a6,
  detach: r6,
  init: c6,
  insert: _6,
  noop: u6,
  safe_not_equal: f6,
  svg_element: d6
} = window.__gradio__svelte__internal, {
  SvelteComponent: h6,
  append: m6,
  attr: g6,
  detach: b6,
  init: p6,
  insert: v6,
  noop: w6,
  safe_not_equal: k6,
  svg_element: y6
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ad,
  append: Fs,
  attr: _t,
  detach: Wd,
  init: Rd,
  insert: Xd,
  noop: uo,
  safe_not_equal: Yd,
  svg_element: fo
} = window.__gradio__svelte__internal;
function Id(i) {
  let e, t, n;
  return {
    c() {
      e = fo("svg"), t = fo("polyline"), n = fo("path"), _t(t, "points", "1 4 1 10 7 10"), _t(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), _t(e, "xmlns", "http://www.w3.org/2000/svg"), _t(e, "width", "100%"), _t(e, "height", "100%"), _t(e, "viewBox", "0 0 24 24"), _t(e, "fill", "none"), _t(e, "stroke", "currentColor"), _t(e, "stroke-width", "2"), _t(e, "stroke-linecap", "round"), _t(e, "stroke-linejoin", "round"), _t(e, "class", "feather feather-rotate-ccw");
    },
    m(l, o) {
      Xd(l, e, o), Fs(e, t), Fs(e, n);
    },
    p: uo,
    i: uo,
    o: uo,
    d(l) {
      l && Wd(e);
    }
  };
}
class Hd extends Ad {
  constructor(e) {
    super(), Rd(this, e, null, Id, Yd, {});
  }
}
const {
  SvelteComponent: Td,
  append: ho,
  attr: Ee,
  detach: jd,
  init: Fd,
  insert: Od,
  noop: mo,
  safe_not_equal: Pd,
  svg_element: Ki
} = window.__gradio__svelte__internal;
function Ud(i) {
  let e, t, n, l;
  return {
    c() {
      e = Ki("svg"), t = Ki("path"), n = Ki("polyline"), l = Ki("line"), Ee(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), Ee(n, "points", "17 8 12 3 7 8"), Ee(l, "x1", "12"), Ee(l, "y1", "3"), Ee(l, "x2", "12"), Ee(l, "y2", "15"), Ee(e, "xmlns", "http://www.w3.org/2000/svg"), Ee(e, "width", "90%"), Ee(e, "height", "90%"), Ee(e, "viewBox", "0 0 24 24"), Ee(e, "fill", "none"), Ee(e, "stroke", "currentColor"), Ee(e, "stroke-width", "2"), Ee(e, "stroke-linecap", "round"), Ee(e, "stroke-linejoin", "round"), Ee(e, "class", "feather feather-upload");
    },
    m(o, s) {
      Od(o, e, s), ho(e, t), ho(e, n), ho(e, l);
    },
    p: mo,
    i: mo,
    o: mo,
    d(o) {
      o && jd(e);
    }
  };
}
let jr = class extends Td {
  constructor(e) {
    super(), Fd(this, e, null, Ud, Pd, {});
  }
};
const {
  SvelteComponent: S6,
  append: q6,
  attr: z6,
  detach: D6,
  init: B6,
  insert: M6,
  noop: E6,
  safe_not_equal: L6,
  svg_element: A6
} = window.__gradio__svelte__internal, {
  SvelteComponent: W6,
  append: R6,
  attr: X6,
  detach: Y6,
  init: I6,
  insert: H6,
  noop: T6,
  safe_not_equal: j6,
  svg_element: F6,
  text: O6
} = window.__gradio__svelte__internal, {
  SvelteComponent: P6,
  append: U6,
  attr: V6,
  detach: N6,
  init: K6,
  insert: Z6,
  noop: G6,
  safe_not_equal: J6,
  svg_element: Q6,
  text: x6
} = window.__gradio__svelte__internal, {
  SvelteComponent: $6,
  append: ek,
  attr: tk,
  detach: nk,
  init: ik,
  insert: lk,
  noop: ok,
  safe_not_equal: sk,
  svg_element: ak,
  text: rk
} = window.__gradio__svelte__internal, {
  SvelteComponent: ck,
  append: _k,
  attr: uk,
  detach: fk,
  init: dk,
  insert: hk,
  noop: mk,
  safe_not_equal: gk,
  svg_element: bk
} = window.__gradio__svelte__internal, {
  SvelteComponent: Vd,
  append: Os,
  attr: nn,
  detach: Nd,
  init: Kd,
  insert: Zd,
  noop: go,
  safe_not_equal: Gd,
  svg_element: bo
} = window.__gradio__svelte__internal;
function Jd(i) {
  let e, t, n;
  return {
    c() {
      e = bo("svg"), t = bo("path"), n = bo("path"), nn(t, "fill", "currentColor"), nn(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), nn(n, "fill", "currentColor"), nn(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), nn(e, "xmlns", "http://www.w3.org/2000/svg"), nn(e, "width", "100%"), nn(e, "height", "100%"), nn(e, "viewBox", "0 0 24 24");
    },
    m(l, o) {
      Zd(l, e, o), Os(e, t), Os(e, n);
    },
    p: go,
    i: go,
    o: go,
    d(l) {
      l && Nd(e);
    }
  };
}
let Fr = class extends Vd {
  constructor(e) {
    super(), Kd(this, e, null, Jd, Gd, {});
  }
};
const Qd = [
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
], Ps = {
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
Qd.reduce((i, { color: e, primary: t, secondary: n }) => ({
  ...i,
  [e]: {
    primary: Ps[e][t],
    secondary: Ps[e][n]
  }
}), {});
class fl extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function xd(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new fl("Must be on Spaces to share.");
  let t, n, l;
  t = $d(i), n = i.split(";")[0].split(":")[1], l = "file" + n.split("/")[1];
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
      throw new fl(`Upload failed: ${c.error}`);
    }
    throw new fl("Upload failed.");
  }
  return await s.text();
}
function $d(i) {
  for (var e = i.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), l = n.length, o = new Uint8Array(l); l--; )
    o[l] = n.charCodeAt(l);
  return new Blob([o], { type: t });
}
const {
  SvelteComponent: e1,
  create_component: t1,
  destroy_component: n1,
  init: i1,
  mount_component: l1,
  safe_not_equal: o1,
  transition_in: s1,
  transition_out: a1
} = window.__gradio__svelte__internal, { createEventDispatcher: r1 } = window.__gradio__svelte__internal;
function c1(i) {
  let e, t;
  return e = new Ll({
    props: {
      Icon: Rf,
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
      t1(e.$$.fragment);
    },
    m(n, l) {
      l1(e, n, l), t = !0;
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
      t || (s1(e.$$.fragment, n), t = !0);
    },
    o(n) {
      a1(e.$$.fragment, n), t = !1;
    },
    d(n) {
      n1(e, n);
    }
  };
}
function _1(i, e, t) {
  const n = r1();
  let { formatter: l } = e, { value: o } = e, { i18n: s } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const c = await l(o);
      n("share", { description: c });
    } catch (c) {
      console.error(c);
      let _ = c instanceof fl ? c.message : "Share failed.";
      n("error", _);
    } finally {
      t(3, r = !1);
    }
  };
  return i.$$set = (c) => {
    "formatter" in c && t(0, l = c.formatter), "value" in c && t(1, o = c.value), "i18n" in c && t(2, s = c.i18n);
  }, [l, o, s, r, n, a];
}
class u1 extends e1 {
  constructor(e) {
    super(), i1(this, e, _1, c1, o1, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: f1,
  append: Dn,
  attr: Vo,
  check_outros: d1,
  create_component: Or,
  destroy_component: Pr,
  detach: dl,
  element: No,
  group_outros: h1,
  init: m1,
  insert: hl,
  mount_component: Ur,
  safe_not_equal: g1,
  set_data: Ko,
  space: Zo,
  text: zi,
  toggle_class: Us,
  transition_in: bl,
  transition_out: pl
} = window.__gradio__svelte__internal;
function b1(i) {
  let e, t;
  return e = new jr({}), {
    c() {
      Or(e.$$.fragment);
    },
    m(n, l) {
      Ur(e, n, l), t = !0;
    },
    i(n) {
      t || (bl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      pl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Pr(e, n);
    }
  };
}
function p1(i) {
  let e, t;
  return e = new Tr({}), {
    c() {
      Or(e.$$.fragment);
    },
    m(n, l) {
      Ur(e, n, l), t = !0;
    },
    i(n) {
      t || (bl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      pl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Pr(e, n);
    }
  };
}
function Vs(i) {
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
      e = No("span"), t = zi("- "), l = zi(n), o = zi(" -"), s = Zo(), a = zi(r), Vo(e, "class", "or svelte-kzcjhc");
    },
    m(c, _) {
      hl(c, e, _), Dn(e, t), Dn(e, l), Dn(e, o), hl(c, s, _), hl(c, a, _);
    },
    p(c, _) {
      _ & /*i18n*/
      2 && n !== (n = /*i18n*/
      c[1]("common.or") + "") && Ko(l, n), _ & /*message, i18n*/
      6 && r !== (r = /*message*/
      (c[2] || /*i18n*/
      c[1]("upload_text.click_to_upload")) + "") && Ko(a, r);
    },
    d(c) {
      c && (dl(e), dl(s), dl(a));
    }
  };
}
function v1(i) {
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
  const _ = [p1, b1], f = [];
  function d(b, u) {
    return (
      /*type*/
      b[0] === "clipboard" ? 0 : 1
    );
  }
  n = d(i), l = f[n] = _[n](i);
  let h = (
    /*mode*/
    i[3] !== "short" && Vs(i)
  );
  return {
    c() {
      e = No("div"), t = No("span"), l.c(), o = Zo(), r = zi(s), a = Zo(), h && h.c(), Vo(t, "class", "icon-wrap svelte-kzcjhc"), Us(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), Vo(e, "class", "wrap svelte-kzcjhc");
    },
    m(b, u) {
      hl(b, e, u), Dn(e, t), f[n].m(t, null), Dn(e, o), Dn(e, r), Dn(e, a), h && h.m(e, null), c = !0;
    },
    p(b, [u]) {
      let m = n;
      n = d(b), n !== m && (h1(), pl(f[m], 1, 1, () => {
        f[m] = null;
      }), d1(), l = f[n], l || (l = f[n] = _[n](b), l.c()), bl(l, 1), l.m(t, null)), (!c || u & /*hovered*/
      16) && Us(
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
      ) + "") && Ko(r, s), /*mode*/
      b[3] !== "short" ? h ? h.p(b, u) : (h = Vs(b), h.c(), h.m(e, null)) : h && (h.d(1), h = null);
    },
    i(b) {
      c || (bl(l), c = !0);
    },
    o(b) {
      pl(l), c = !1;
    },
    d(b) {
      b && dl(e), f[n].d(), h && h.d();
    }
  };
}
function w1(i, e, t) {
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
class Vr extends f1 {
  constructor(e) {
    super(), m1(this, e, w1, v1, g1, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: vk,
  attr: wk,
  create_slot: kk,
  detach: yk,
  element: Ck,
  get_all_dirty_from_scope: Sk,
  get_slot_changes: qk,
  init: zk,
  insert: Dk,
  safe_not_equal: Bk,
  toggle_class: Mk,
  transition_in: Ek,
  transition_out: Lk,
  update_slot_base: Ak
} = window.__gradio__svelte__internal, {
  SvelteComponent: k1,
  append: po,
  attr: Tt,
  check_outros: Di,
  create_component: Al,
  destroy_component: Wl,
  detach: ai,
  element: Ii,
  empty: y1,
  group_outros: Bi,
  init: C1,
  insert: ri,
  listen: Rl,
  mount_component: Xl,
  safe_not_equal: S1,
  space: vo,
  toggle_class: gn,
  transition_in: qe,
  transition_out: Ke
} = window.__gradio__svelte__internal;
function Ns(i) {
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
  ), c, _ = t && Ks(i), f = l && Zs(i), d = s && Gs(i), h = a && Js(i);
  return {
    c() {
      e = Ii("span"), _ && _.c(), n = vo(), f && f.c(), o = vo(), d && d.c(), r = vo(), h && h.c(), Tt(e, "class", "source-selection svelte-1jp3vgd"), Tt(e, "data-testid", "source-select");
    },
    m(b, u) {
      ri(b, e, u), _ && _.m(e, null), po(e, n), f && f.m(e, null), po(e, o), d && d.m(e, null), po(e, r), h && h.m(e, null), c = !0;
    },
    p(b, u) {
      u & /*sources*/
      2 && (t = /*sources*/
      b[1].includes("upload")), t ? _ ? (_.p(b, u), u & /*sources*/
      2 && qe(_, 1)) : (_ = Ks(b), _.c(), qe(_, 1), _.m(e, n)) : _ && (Bi(), Ke(_, 1, 1, () => {
        _ = null;
      }), Di()), u & /*sources*/
      2 && (l = /*sources*/
      b[1].includes("microphone")), l ? f ? (f.p(b, u), u & /*sources*/
      2 && qe(f, 1)) : (f = Zs(b), f.c(), qe(f, 1), f.m(e, o)) : f && (Bi(), Ke(f, 1, 1, () => {
        f = null;
      }), Di()), u & /*sources*/
      2 && (s = /*sources*/
      b[1].includes("webcam")), s ? d ? (d.p(b, u), u & /*sources*/
      2 && qe(d, 1)) : (d = Gs(b), d.c(), qe(d, 1), d.m(e, r)) : d && (Bi(), Ke(d, 1, 1, () => {
        d = null;
      }), Di()), u & /*sources*/
      2 && (a = /*sources*/
      b[1].includes("clipboard")), a ? h ? (h.p(b, u), u & /*sources*/
      2 && qe(h, 1)) : (h = Js(b), h.c(), qe(h, 1), h.m(e, null)) : h && (Bi(), Ke(h, 1, 1, () => {
        h = null;
      }), Di());
    },
    i(b) {
      c || (qe(_), qe(f), qe(d), qe(h), c = !0);
    },
    o(b) {
      Ke(_), Ke(f), Ke(d), Ke(h), c = !1;
    },
    d(b) {
      b && ai(e), _ && _.d(), f && f.d(), d && d.d(), h && h.d();
    }
  };
}
function Ks(i) {
  let e, t, n, l, o;
  return t = new jr({}), {
    c() {
      e = Ii("button"), Al(t.$$.fragment), Tt(e, "class", "icon svelte-1jp3vgd"), Tt(e, "aria-label", "Upload file"), gn(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(s, r) {
      ri(s, e, r), Xl(t, e, null), n = !0, l || (o = Rl(
        e,
        "click",
        /*click_handler*/
        i[6]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && gn(
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
      s && ai(e), Wl(t), l = !1, o();
    }
  };
}
function Zs(i) {
  let e, t, n, l, o;
  return t = new md({}), {
    c() {
      e = Ii("button"), Al(t.$$.fragment), Tt(e, "class", "icon svelte-1jp3vgd"), Tt(e, "aria-label", "Record audio"), gn(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(s, r) {
      ri(s, e, r), Xl(t, e, null), n = !0, l || (o = Rl(
        e,
        "click",
        /*click_handler_1*/
        i[7]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && gn(
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
      s && ai(e), Wl(t), l = !1, o();
    }
  };
}
function Gs(i) {
  let e, t, n, l, o;
  return t = new Fr({}), {
    c() {
      e = Ii("button"), Al(t.$$.fragment), Tt(e, "class", "icon svelte-1jp3vgd"), Tt(e, "aria-label", "Capture from camera"), gn(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(s, r) {
      ri(s, e, r), Xl(t, e, null), n = !0, l || (o = Rl(
        e,
        "click",
        /*click_handler_2*/
        i[8]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && gn(
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
      s && ai(e), Wl(t), l = !1, o();
    }
  };
}
function Js(i) {
  let e, t, n, l, o;
  return t = new Tr({}), {
    c() {
      e = Ii("button"), Al(t.$$.fragment), Tt(e, "class", "icon svelte-1jp3vgd"), Tt(e, "aria-label", "Paste from clipboard"), gn(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(s, r) {
      ri(s, e, r), Xl(t, e, null), n = !0, l || (o = Rl(
        e,
        "click",
        /*click_handler_3*/
        i[9]
      ), l = !0);
    },
    p(s, r) {
      (!n || r & /*active_source*/
      1) && gn(
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
      s && ai(e), Wl(t), l = !1, o();
    }
  };
}
function q1(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && Ns(i)
  );
  return {
    c() {
      n && n.c(), e = y1();
    },
    m(l, o) {
      n && n.m(l, o), ri(l, e, o), t = !0;
    },
    p(l, [o]) {
      /*unique_sources*/
      l[2].length > 1 ? n ? (n.p(l, o), o & /*unique_sources*/
      4 && qe(n, 1)) : (n = Ns(l), n.c(), qe(n, 1), n.m(e.parentNode, e)) : n && (Bi(), Ke(n, 1, 1, () => {
        n = null;
      }), Di());
    },
    i(l) {
      t || (qe(n), t = !0);
    },
    o(l) {
      Ke(n), t = !1;
    },
    d(l) {
      l && ai(e), n && n.d(l);
    }
  };
}
function z1(i, e, t) {
  let n;
  var l = this && this.__awaiter || function(b, u, m, g) {
    function w(p) {
      return p instanceof m ? p : new m(function(y) {
        y(p);
      });
    }
    return new (m || (m = Promise))(function(p, y) {
      function D(z) {
        try {
          q(g.next(z));
        } catch (M) {
          y(M);
        }
      }
      function k(z) {
        try {
          q(g.throw(z));
        } catch (M) {
          y(M);
        }
      }
      function q(z) {
        z.done ? p(z.value) : w(z.value).then(D, k);
      }
      q((g = g.apply(b, u || [])).next());
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
class D1 extends k1 {
  constructor(e) {
    super(), C1(this, e, z1, q1, S1, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function $n(i) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; i > 1e3 && t < e.length - 1; )
    i /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(i) ? i : i.toFixed(1)) + n;
}
function ml() {
}
const B1 = (i) => i;
function Qs(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [i, "px"];
}
const Nr = typeof window < "u";
let xs = Nr ? () => window.performance.now() : () => Date.now(), Kr = Nr ? (i) => requestAnimationFrame(i) : ml;
const si = /* @__PURE__ */ new Set();
function Zr(i) {
  si.forEach((e) => {
    e.c(i) || (si.delete(e), e.f());
  }), si.size !== 0 && Kr(Zr);
}
function M1(i) {
  let e;
  return si.size === 0 && Kr(Zr), { promise: new Promise((t) => {
    si.add(e = { c: i, f: t });
  }), abort() {
    si.delete(e);
  } };
}
function E1(i) {
  const e = i - 1;
  return e * e * e + 1;
}
function L1(i, { delay: e = 0, duration: t = 400, easing: n = B1 } = {}) {
  const l = +getComputedStyle(i).opacity;
  return { delay: e, duration: t, easing: n, css: (o) => "opacity: " + o * l };
}
function $s(i, { delay: e = 0, duration: t = 400, easing: n = E1, x: l = 0, y: o = 0, opacity: s = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, c = r.transform === "none" ? "" : r.transform, _ = a * (1 - s), [f, d] = Qs(l), [h, b] = Qs(o);
  return { delay: e, duration: t, easing: n, css: (u, m) => `
			transform: ${c} translate(${(1 - u) * f}${d}, ${(1 - u) * h}${b});
			opacity: ${a - _ * m}` };
}
const Kn = [];
function A1(i, e = ml) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function l(s) {
    if (a = s, ((r = i) != r ? a == a : r !== a || r && typeof r == "object" || typeof r == "function") && (i = s, t)) {
      const c = !Kn.length;
      for (const _ of n) _[1](), Kn.push(_, i);
      if (c) {
        for (let _ = 0; _ < Kn.length; _ += 2) Kn[_][0](Kn[_ + 1]);
        Kn.length = 0;
      }
    }
    var r, a;
  }
  function o(s) {
    l(s(i));
  }
  return { set: l, update: o, subscribe: function(s, r = ml) {
    const a = [s, r];
    return n.add(a), n.size === 1 && (t = e(l, o) || ml), s(i), () => {
      n.delete(a), n.size === 0 && t && (t(), t = null);
    };
  } };
}
function ea(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function Go(i, e, t, n) {
  if (typeof t == "number" || ea(t)) {
    const l = n - t, o = (t - e) / (i.dt || 1 / 60), s = (o + (i.opts.stiffness * l - i.opts.damping * o) * i.inv_mass) * i.dt;
    return Math.abs(s) < i.opts.precision && Math.abs(l) < i.opts.precision ? n : (i.settled = !1, ea(t) ? new Date(t.getTime() + s) : t + s);
  }
  if (Array.isArray(t)) return t.map((l, o) => Go(i, e[o], t[o], n[o]));
  if (typeof t == "object") {
    const l = {};
    for (const o in t) l[o] = Go(i, e[o], t[o], n[o]);
    return l;
  }
  throw new Error(`Cannot spring ${typeof t} values`);
}
function ta(i, e = {}) {
  const t = A1(i), { stiffness: n = 0.15, damping: l = 0.8, precision: o = 0.01 } = e;
  let s, r, a, c = i, _ = i, f = 1, d = 0, h = !1;
  function b(m, g = {}) {
    _ = m;
    const w = a = {};
    return i == null || g.hard || u.stiffness >= 1 && u.damping >= 1 ? (h = !0, s = xs(), c = m, t.set(i = _), Promise.resolve()) : (g.soft && (d = 1 / (60 * (g.soft === !0 ? 0.5 : +g.soft)), f = 0), r || (s = xs(), h = !1, r = M1((p) => {
      if (h) return h = !1, r = null, !1;
      f = Math.min(f + d, 1);
      const y = { inv_mass: f, opts: u, settled: !0, dt: 60 * (p - s) / 1e3 }, D = Go(y, c, i, _);
      return s = p, c = i, t.set(i = D), y.settled && (r = null), !y.settled;
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
  SvelteComponent: W1,
  append: wt,
  attr: te,
  component_subscribe: na,
  detach: R1,
  element: X1,
  init: Y1,
  insert: I1,
  noop: ia,
  safe_not_equal: H1,
  set_style: Zi,
  svg_element: kt,
  toggle_class: la
} = window.__gradio__svelte__internal, { onMount: T1 } = window.__gradio__svelte__internal;
function j1(i) {
  let e, t, n, l, o, s, r, a, c, _, f, d;
  return {
    c() {
      e = X1("div"), t = kt("svg"), n = kt("g"), l = kt("path"), o = kt("path"), s = kt("path"), r = kt("path"), a = kt("g"), c = kt("path"), _ = kt("path"), f = kt("path"), d = kt("path"), te(l, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), te(l, "fill", "#FF7C00"), te(l, "fill-opacity", "0.4"), te(l, "class", "svelte-43sxxs"), te(o, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), te(o, "fill", "#FF7C00"), te(o, "class", "svelte-43sxxs"), te(s, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), te(s, "fill", "#FF7C00"), te(s, "fill-opacity", "0.4"), te(s, "class", "svelte-43sxxs"), te(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), te(r, "fill", "#FF7C00"), te(r, "class", "svelte-43sxxs"), Zi(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), te(c, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), te(c, "fill", "#FF7C00"), te(c, "fill-opacity", "0.4"), te(c, "class", "svelte-43sxxs"), te(_, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), te(_, "fill", "#FF7C00"), te(_, "class", "svelte-43sxxs"), te(f, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), te(f, "fill", "#FF7C00"), te(f, "fill-opacity", "0.4"), te(f, "class", "svelte-43sxxs"), te(d, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), te(d, "fill", "#FF7C00"), te(d, "class", "svelte-43sxxs"), Zi(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), te(t, "viewBox", "-1200 -1200 3000 3000"), te(t, "fill", "none"), te(t, "xmlns", "http://www.w3.org/2000/svg"), te(t, "class", "svelte-43sxxs"), te(e, "class", "svelte-43sxxs"), la(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(h, b) {
      I1(h, e, b), wt(e, t), wt(t, n), wt(n, l), wt(n, o), wt(n, s), wt(n, r), wt(t, a), wt(a, c), wt(a, _), wt(a, f), wt(a, d);
    },
    p(h, [b]) {
      b & /*$top*/
      2 && Zi(n, "transform", "translate(" + /*$top*/
      h[1][0] + "px, " + /*$top*/
      h[1][1] + "px)"), b & /*$bottom*/
      4 && Zi(a, "transform", "translate(" + /*$bottom*/
      h[2][0] + "px, " + /*$bottom*/
      h[2][1] + "px)"), b & /*margin*/
      1 && la(
        e,
        "margin",
        /*margin*/
        h[0]
      );
    },
    i: ia,
    o: ia,
    d(h) {
      h && R1(e);
    }
  };
}
function F1(i, e, t) {
  let n, l;
  var o = this && this.__awaiter || function(h, b, u, m) {
    function g(w) {
      return w instanceof u ? w : new u(function(p) {
        p(w);
      });
    }
    return new (u || (u = Promise))(function(w, p) {
      function y(q) {
        try {
          k(m.next(q));
        } catch (z) {
          p(z);
        }
      }
      function D(q) {
        try {
          k(m.throw(q));
        } catch (z) {
          p(z);
        }
      }
      function k(q) {
        q.done ? w(q.value) : g(q.value).then(y, D);
      }
      k((m = m.apply(h, b || [])).next());
    });
  };
  let { margin: s = !0 } = e;
  const r = ta([0, 0]);
  na(i, r, (h) => t(1, n = h));
  const a = ta([0, 0]);
  na(i, a, (h) => t(2, l = h));
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
  return T1(() => (d(), () => c = !0)), i.$$set = (h) => {
    "margin" in h && t(0, s = h.margin);
  }, [s, n, l, r, a];
}
class O1 extends W1 {
  constructor(e) {
    super(), Y1(this, e, F1, j1, H1, { margin: 0 });
  }
}
const {
  SvelteComponent: P1,
  append: Bn,
  attr: Mt,
  binding_callbacks: oa,
  check_outros: Jo,
  create_component: Gr,
  create_slot: Jr,
  destroy_component: Qr,
  destroy_each: xr,
  detach: K,
  element: Xt,
  empty: ci,
  ensure_array_like: vl,
  get_all_dirty_from_scope: $r,
  get_slot_changes: ec,
  group_outros: Qo,
  init: U1,
  insert: Z,
  mount_component: tc,
  noop: xo,
  safe_not_equal: V1,
  set_data: gt,
  set_style: hn,
  space: mt,
  text: ge,
  toggle_class: dt,
  transition_in: Bt,
  transition_out: Yt,
  update_slot_base: nc
} = window.__gradio__svelte__internal, { tick: N1 } = window.__gradio__svelte__internal, { onDestroy: K1 } = window.__gradio__svelte__internal, { createEventDispatcher: Z1 } = window.__gradio__svelte__internal, G1 = (i) => ({}), sa = (i) => ({}), J1 = (i) => ({}), aa = (i) => ({});
function ra(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function ca(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function Q1(i) {
  let e, t, n, l, o = (
    /*i18n*/
    i[1]("common.error") + ""
  ), s, r, a;
  t = new Ll({
    props: {
      Icon: Ir,
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
  ), _ = Jr(
    c,
    i,
    /*$$scope*/
    i[29],
    sa
  );
  return {
    c() {
      e = Xt("div"), Gr(t.$$.fragment), n = mt(), l = Xt("span"), s = ge(o), r = mt(), _ && _.c(), Mt(e, "class", "clear-status svelte-16nch4a"), Mt(l, "class", "error svelte-16nch4a");
    },
    m(f, d) {
      Z(f, e, d), tc(t, e, null), Z(f, n, d), Z(f, l, d), Bn(l, s), Z(f, r, d), _ && _.m(f, d), a = !0;
    },
    p(f, d) {
      const h = {};
      d[0] & /*i18n*/
      2 && (h.label = /*i18n*/
      f[1]("common.clear")), t.$set(h), (!a || d[0] & /*i18n*/
      2) && o !== (o = /*i18n*/
      f[1]("common.error") + "") && gt(s, o), _ && _.p && (!a || d[0] & /*$$scope*/
      536870912) && nc(
        _,
        c,
        f,
        /*$$scope*/
        f[29],
        a ? ec(
          c,
          /*$$scope*/
          f[29],
          d,
          G1
        ) : $r(
          /*$$scope*/
          f[29]
        ),
        sa
      );
    },
    i(f) {
      a || (Bt(t.$$.fragment, f), Bt(_, f), a = !0);
    },
    o(f) {
      Yt(t.$$.fragment, f), Yt(_, f), a = !1;
    },
    d(f) {
      f && (K(e), K(n), K(l), K(r)), Qr(t), _ && _.d(f);
    }
  };
}
function x1(i) {
  let e, t, n, l, o, s, r, a, c, _ = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && _a(i)
  );
  function f(p, y) {
    if (
      /*progress*/
      p[7]
    ) return th;
    if (
      /*queue_position*/
      p[2] !== null && /*queue_size*/
      p[3] !== void 0 && /*queue_position*/
      p[2] >= 0
    ) return eh;
    if (
      /*queue_position*/
      p[2] === 0
    ) return $1;
  }
  let d = f(i), h = d && d(i), b = (
    /*timer*/
    i[5] && da(i)
  );
  const u = [oh, lh], m = [];
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
  i[5] && wa(i);
  return {
    c() {
      _ && _.c(), e = mt(), t = Xt("div"), h && h.c(), n = mt(), b && b.c(), l = mt(), s && s.c(), r = mt(), w && w.c(), a = ci(), Mt(t, "class", "progress-text svelte-16nch4a"), dt(
        t,
        "meta-text-center",
        /*variant*/
        i[8] === "center"
      ), dt(
        t,
        "meta-text",
        /*variant*/
        i[8] === "default"
      );
    },
    m(p, y) {
      _ && _.m(p, y), Z(p, e, y), Z(p, t, y), h && h.m(t, null), Bn(t, n), b && b.m(t, null), Z(p, l, y), ~o && m[o].m(p, y), Z(p, r, y), w && w.m(p, y), Z(p, a, y), c = !0;
    },
    p(p, y) {
      /*variant*/
      p[8] === "default" && /*show_eta_bar*/
      p[18] && /*show_progress*/
      p[6] === "full" ? _ ? _.p(p, y) : (_ = _a(p), _.c(), _.m(e.parentNode, e)) : _ && (_.d(1), _ = null), d === (d = f(p)) && h ? h.p(p, y) : (h && h.d(1), h = d && d(p), h && (h.c(), h.m(t, n))), /*timer*/
      p[5] ? b ? b.p(p, y) : (b = da(p), b.c(), b.m(t, null)) : b && (b.d(1), b = null), (!c || y[0] & /*variant*/
      256) && dt(
        t,
        "meta-text-center",
        /*variant*/
        p[8] === "center"
      ), (!c || y[0] & /*variant*/
      256) && dt(
        t,
        "meta-text",
        /*variant*/
        p[8] === "default"
      );
      let D = o;
      o = g(p), o === D ? ~o && m[o].p(p, y) : (s && (Qo(), Yt(m[D], 1, 1, () => {
        m[D] = null;
      }), Jo()), ~o ? (s = m[o], s ? s.p(p, y) : (s = m[o] = u[o](p), s.c()), Bt(s, 1), s.m(r.parentNode, r)) : s = null), /*timer*/
      p[5] ? w && (Qo(), Yt(w, 1, 1, () => {
        w = null;
      }), Jo()) : w ? (w.p(p, y), y[0] & /*timer*/
      32 && Bt(w, 1)) : (w = wa(p), w.c(), Bt(w, 1), w.m(a.parentNode, a));
    },
    i(p) {
      c || (Bt(s), Bt(w), c = !0);
    },
    o(p) {
      Yt(s), Yt(w), c = !1;
    },
    d(p) {
      p && (K(e), K(t), K(l), K(r), K(a)), _ && _.d(p), h && h.d(), b && b.d(), ~o && m[o].d(p), w && w.d(p);
    }
  };
}
function _a(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = Xt("div"), Mt(e, "class", "eta-bar svelte-16nch4a"), hn(e, "transform", t);
    },
    m(n, l) {
      Z(n, e, l);
    },
    p(n, l) {
      l[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && hn(e, "transform", t);
    },
    d(n) {
      n && K(e);
    }
  };
}
function $1(i) {
  let e;
  return {
    c() {
      e = ge("processing |");
    },
    m(t, n) {
      Z(t, e, n);
    },
    p: xo,
    d(t) {
      t && K(e);
    }
  };
}
function eh(i) {
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
      Z(r, e, a), Z(r, n, a), Z(r, l, a), Z(r, o, a), Z(r, s, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && gt(n, t), a[0] & /*queue_size*/
      8 && gt(
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
function th(i) {
  let e, t = vl(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = fa(ca(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = ci();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      Z(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*progress*/
      128) {
        t = vl(
          /*progress*/
          l[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = ca(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = fa(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && K(e), xr(n, l);
    }
  };
}
function ua(i) {
  let e, t = (
    /*p*/
    i[41].unit + ""
  ), n, l, o = " ", s;
  function r(_, f) {
    return (
      /*p*/
      _[41].length != null ? ih : nh
    );
  }
  let a = r(i), c = a(i);
  return {
    c() {
      c.c(), e = mt(), n = ge(t), l = ge(" | "), s = ge(o);
    },
    m(_, f) {
      c.m(_, f), Z(_, e, f), Z(_, n, f), Z(_, l, f), Z(_, s, f);
    },
    p(_, f) {
      a === (a = r(_)) && c ? c.p(_, f) : (c.d(1), c = a(_), c && (c.c(), c.m(e.parentNode, e))), f[0] & /*progress*/
      128 && t !== (t = /*p*/
      _[41].unit + "") && gt(n, t);
    },
    d(_) {
      _ && (K(e), K(n), K(l), K(s)), c.d(_);
    }
  };
}
function nh(i) {
  let e = $n(
    /*p*/
    i[41].index || 0
  ) + "", t;
  return {
    c() {
      t = ge(e);
    },
    m(n, l) {
      Z(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = $n(
        /*p*/
        n[41].index || 0
      ) + "") && gt(t, e);
    },
    d(n) {
      n && K(t);
    }
  };
}
function ih(i) {
  let e = $n(
    /*p*/
    i[41].index || 0
  ) + "", t, n, l = $n(
    /*p*/
    i[41].length
  ) + "", o;
  return {
    c() {
      t = ge(e), n = ge("/"), o = ge(l);
    },
    m(s, r) {
      Z(s, t, r), Z(s, n, r), Z(s, o, r);
    },
    p(s, r) {
      r[0] & /*progress*/
      128 && e !== (e = $n(
        /*p*/
        s[41].index || 0
      ) + "") && gt(t, e), r[0] & /*progress*/
      128 && l !== (l = $n(
        /*p*/
        s[41].length
      ) + "") && gt(o, l);
    },
    d(s) {
      s && (K(t), K(n), K(o));
    }
  };
}
function fa(i) {
  let e, t = (
    /*p*/
    i[41].index != null && ua(i)
  );
  return {
    c() {
      t && t.c(), e = ci();
    },
    m(n, l) {
      t && t.m(n, l), Z(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].index != null ? t ? t.p(n, l) : (t = ua(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && K(e), t && t.d(n);
    }
  };
}
function da(i) {
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
      Z(o, e, s), Z(o, n, s), Z(o, l, s);
    },
    p(o, s) {
      s[0] & /*formatted_timer*/
      1048576 && gt(
        e,
        /*formatted_timer*/
        o[20]
      ), s[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      o[0] ? `/${/*formatted_eta*/
      o[19]}` : "") && gt(n, t);
    },
    d(o) {
      o && (K(e), K(n), K(l));
    }
  };
}
function lh(i) {
  let e, t;
  return e = new O1({
    props: { margin: (
      /*variant*/
      i[8] === "default"
    ) }
  }), {
    c() {
      Gr(e.$$.fragment);
    },
    m(n, l) {
      tc(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*variant*/
      256 && (o.margin = /*variant*/
      n[8] === "default"), e.$set(o);
    },
    i(n) {
      t || (Bt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Yt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Qr(e, n);
    }
  };
}
function oh(i) {
  let e, t, n, l, o, s = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && ha(i)
  );
  return {
    c() {
      e = Xt("div"), t = Xt("div"), r && r.c(), n = mt(), l = Xt("div"), o = Xt("div"), Mt(t, "class", "progress-level-inner svelte-16nch4a"), Mt(o, "class", "progress-bar svelte-16nch4a"), hn(o, "width", s), Mt(l, "class", "progress-bar-wrap svelte-16nch4a"), Mt(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, c) {
      Z(a, e, c), Bn(e, t), r && r.m(t, null), Bn(e, n), Bn(e, l), Bn(l, o), i[31](o);
    },
    p(a, c) {
      /*progress*/
      a[7] != null ? r ? r.p(a, c) : (r = ha(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), c[0] & /*last_progress_level*/
      32768 && s !== (s = `${/*last_progress_level*/
      a[15] * 100}%`) && hn(o, "width", s);
    },
    i: xo,
    o: xo,
    d(a) {
      a && K(e), r && r.d(), i[31](null);
    }
  };
}
function ha(i) {
  let e, t = vl(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = va(ra(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = ci();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      Z(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*progress_level, progress*/
      16512) {
        t = vl(
          /*progress*/
          l[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = ra(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = va(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && K(e), xr(n, l);
    }
  };
}
function ma(i) {
  let e, t, n, l, o = (
    /*i*/
    i[43] !== 0 && sh()
  ), s = (
    /*p*/
    i[41].desc != null && ga(i)
  ), r = (
    /*p*/
    i[41].desc != null && /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null && ba()
  ), a = (
    /*progress_level*/
    i[14] != null && pa(i)
  );
  return {
    c() {
      o && o.c(), e = mt(), s && s.c(), t = mt(), r && r.c(), n = mt(), a && a.c(), l = ci();
    },
    m(c, _) {
      o && o.m(c, _), Z(c, e, _), s && s.m(c, _), Z(c, t, _), r && r.m(c, _), Z(c, n, _), a && a.m(c, _), Z(c, l, _);
    },
    p(c, _) {
      /*p*/
      c[41].desc != null ? s ? s.p(c, _) : (s = ga(c), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null), /*p*/
      c[41].desc != null && /*progress_level*/
      c[14] && /*progress_level*/
      c[14][
        /*i*/
        c[43]
      ] != null ? r || (r = ba(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      c[14] != null ? a ? a.p(c, _) : (a = pa(c), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null);
    },
    d(c) {
      c && (K(e), K(t), K(n), K(l)), o && o.d(c), s && s.d(c), r && r.d(c), a && a.d(c);
    }
  };
}
function sh(i) {
  let e;
  return {
    c() {
      e = ge(" /");
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
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = ge(e);
    },
    m(n, l) {
      Z(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && gt(t, e);
    },
    d(n) {
      n && K(t);
    }
  };
}
function ba(i) {
  let e;
  return {
    c() {
      e = ge("-");
    },
    m(t, n) {
      Z(t, e, n);
    },
    d(t) {
      t && K(e);
    }
  };
}
function pa(i) {
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
      Z(l, t, o), Z(l, n, o);
    },
    p(l, o) {
      o[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (l[14][
        /*i*/
        l[43]
      ] || 0)).toFixed(1) + "") && gt(t, e);
    },
    d(l) {
      l && (K(t), K(n));
    }
  };
}
function va(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && ma(i)
  );
  return {
    c() {
      t && t.c(), e = ci();
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
      ] != null ? t ? t.p(n, l) : (t = ma(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && K(e), t && t.d(n);
    }
  };
}
function wa(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), s = Jr(
    o,
    i,
    /*$$scope*/
    i[29],
    aa
  );
  return {
    c() {
      e = Xt("p"), t = ge(
        /*loading_text*/
        i[9]
      ), n = mt(), s && s.c(), Mt(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      Z(r, e, a), Bn(e, t), Z(r, n, a), s && s.m(r, a), l = !0;
    },
    p(r, a) {
      (!l || a[0] & /*loading_text*/
      512) && gt(
        t,
        /*loading_text*/
        r[9]
      ), s && s.p && (!l || a[0] & /*$$scope*/
      536870912) && nc(
        s,
        o,
        r,
        /*$$scope*/
        r[29],
        l ? ec(
          o,
          /*$$scope*/
          r[29],
          a,
          J1
        ) : $r(
          /*$$scope*/
          r[29]
        ),
        aa
      );
    },
    i(r) {
      l || (Bt(s, r), l = !0);
    },
    o(r) {
      Yt(s, r), l = !1;
    },
    d(r) {
      r && (K(e), K(n)), s && s.d(r);
    }
  };
}
function ah(i) {
  let e, t, n, l, o;
  const s = [x1, Q1], r = [];
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
      e = Xt("div"), n && n.c(), Mt(e, "class", l = "wrap " + /*variant*/
      i[8] + " " + /*show_progress*/
      i[6] + " svelte-16nch4a"), dt(e, "hide", !/*status*/
      i[4] || /*status*/
      i[4] === "complete" || /*show_progress*/
      i[6] === "hidden"), dt(
        e,
        "translucent",
        /*variant*/
        i[8] === "center" && /*status*/
        (i[4] === "pending" || /*status*/
        i[4] === "error") || /*translucent*/
        i[11] || /*show_progress*/
        i[6] === "minimal"
      ), dt(
        e,
        "generating",
        /*status*/
        i[4] === "generating"
      ), dt(
        e,
        "border",
        /*border*/
        i[12]
      ), hn(
        e,
        "position",
        /*absolute*/
        i[10] ? "absolute" : "static"
      ), hn(
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
      t = a(c), t === f ? ~t && r[t].p(c, _) : (n && (Qo(), Yt(r[f], 1, 1, () => {
        r[f] = null;
      }), Jo()), ~t ? (n = r[t], n ? n.p(c, _) : (n = r[t] = s[t](c), n.c()), Bt(n, 1), n.m(e, null)) : n = null), (!o || _[0] & /*variant, show_progress*/
      320 && l !== (l = "wrap " + /*variant*/
      c[8] + " " + /*show_progress*/
      c[6] + " svelte-16nch4a")) && Mt(e, "class", l), (!o || _[0] & /*variant, show_progress, status, show_progress*/
      336) && dt(e, "hide", !/*status*/
      c[4] || /*status*/
      c[4] === "complete" || /*show_progress*/
      c[6] === "hidden"), (!o || _[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && dt(
        e,
        "translucent",
        /*variant*/
        c[8] === "center" && /*status*/
        (c[4] === "pending" || /*status*/
        c[4] === "error") || /*translucent*/
        c[11] || /*show_progress*/
        c[6] === "minimal"
      ), (!o || _[0] & /*variant, show_progress, status*/
      336) && dt(
        e,
        "generating",
        /*status*/
        c[4] === "generating"
      ), (!o || _[0] & /*variant, show_progress, border*/
      4416) && dt(
        e,
        "border",
        /*border*/
        c[12]
      ), _[0] & /*absolute*/
      1024 && hn(
        e,
        "position",
        /*absolute*/
        c[10] ? "absolute" : "static"
      ), _[0] & /*absolute*/
      1024 && hn(
        e,
        "padding",
        /*absolute*/
        c[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(c) {
      o || (Bt(n), o = !0);
    },
    o(c) {
      Yt(n), o = !1;
    },
    d(c) {
      c && K(e), ~t && r[t].d(), i[33](null);
    }
  };
}
var rh = function(i, e, t, n) {
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
let Gi = [], wo = !1;
function ch(i) {
  return rh(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Gi.push(e), !wo) wo = !0;
      else return;
      yield N1(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let l = 0; l < Gi.length; l++) {
          const s = Gi[l].getBoundingClientRect();
          (l === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = l);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), wo = !1, Gi = [];
      });
    }
  });
}
function _h(i, e, t) {
  let n, { $$slots: l = {}, $$scope: o } = e;
  this && this.__awaiter;
  const s = Z1();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: c } = e, { queue_size: _ } = e, { status: f } = e, { scroll_to_output: d = !1 } = e, { timer: h = !0 } = e, { show_progress: b = "full" } = e, { message: u = null } = e, { progress: m = null } = e, { variant: g = "default" } = e, { loading_text: w = "Loading..." } = e, { absolute: p = !0 } = e, { translucent: y = !1 } = e, { border: D = !1 } = e, { autoscroll: k } = e, q, z = !1, M = 0, S = 0, E = null, X = null, C = 0, ee = null, J, x = null, G = !0;
  const W = () => {
    t(0, a = t(27, E = t(19, U = null))), t(25, M = performance.now()), t(26, S = 0), z = !0, F();
  };
  function F() {
    requestAnimationFrame(() => {
      t(26, S = (performance.now() - M) / 1e3), z && F();
    });
  }
  function I() {
    t(26, S = 0), t(0, a = t(27, E = t(19, U = null))), z && (z = !1);
  }
  K1(() => {
    z && I();
  });
  let U = null;
  function Y(H) {
    oa[H ? "unshift" : "push"](() => {
      x = H, t(16, x), t(7, m), t(14, ee), t(15, J);
    });
  }
  const le = () => {
    s("clear_status");
  };
  function ae(H) {
    oa[H ? "unshift" : "push"](() => {
      q = H, t(13, q);
    });
  }
  return i.$$set = (H) => {
    "i18n" in H && t(1, r = H.i18n), "eta" in H && t(0, a = H.eta), "queue_position" in H && t(2, c = H.queue_position), "queue_size" in H && t(3, _ = H.queue_size), "status" in H && t(4, f = H.status), "scroll_to_output" in H && t(22, d = H.scroll_to_output), "timer" in H && t(5, h = H.timer), "show_progress" in H && t(6, b = H.show_progress), "message" in H && t(23, u = H.message), "progress" in H && t(7, m = H.progress), "variant" in H && t(8, g = H.variant), "loading_text" in H && t(9, w = H.loading_text), "absolute" in H && t(10, p = H.absolute), "translucent" in H && t(11, y = H.translucent), "border" in H && t(12, D = H.border), "autoscroll" in H && t(24, k = H.autoscroll), "$$scope" in H && t(29, o = H.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = E), a != null && E !== a && (t(28, X = (performance.now() - M) / 1e3 + a), t(19, U = X.toFixed(1)), t(27, E = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, C = X === null || X <= 0 || !S ? null : Math.min(S / X, 1)), i.$$.dirty[0] & /*progress*/
    128 && m != null && t(18, G = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (m != null ? t(14, ee = m.map((H) => {
      if (H.index != null && H.length != null)
        return H.index / H.length;
      if (H.progress != null)
        return H.progress;
    })) : t(14, ee = null), ee ? (t(15, J = ee[ee.length - 1]), x && (J === 0 ? t(16, x.style.transition = "0", x) : t(16, x.style.transition = "150ms", x))) : t(15, J = void 0)), i.$$.dirty[0] & /*status*/
    16 && (f === "pending" ? W() : I()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && q && d && (f === "pending" || f === "complete") && ch(q, k), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = S.toFixed(1));
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
    D,
    q,
    ee,
    J,
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
    S,
    E,
    X,
    o,
    l,
    Y,
    le,
    ae
  ];
}
class uh extends P1 {
  constructor(e) {
    super(), U1(
      this,
      e,
      _h,
      ah,
      V1,
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
  SvelteComponent: Wk,
  add_render_callback: Rk,
  append: Xk,
  attr: Yk,
  bubble: Ik,
  check_outros: Hk,
  create_component: Tk,
  create_in_transition: jk,
  create_out_transition: Fk,
  destroy_component: Ok,
  detach: Pk,
  element: Uk,
  group_outros: Vk,
  init: Nk,
  insert: Kk,
  listen: Zk,
  mount_component: Gk,
  run_all: Jk,
  safe_not_equal: Qk,
  set_data: xk,
  space: $k,
  stop_propagation: e8,
  text: t8,
  transition_in: n8,
  transition_out: i8
} = window.__gradio__svelte__internal, { createEventDispatcher: l8, onMount: o8 } = window.__gradio__svelte__internal, {
  SvelteComponent: s8,
  append: a8,
  attr: r8,
  bubble: c8,
  check_outros: _8,
  create_animation: u8,
  create_component: f8,
  destroy_component: d8,
  detach: h8,
  element: m8,
  ensure_array_like: g8,
  fix_and_outro_and_destroy_block: b8,
  fix_position: p8,
  group_outros: v8,
  init: w8,
  insert: k8,
  mount_component: y8,
  noop: C8,
  safe_not_equal: S8,
  set_style: q8,
  space: z8,
  transition_in: D8,
  transition_out: B8,
  update_keyed_each: M8
} = window.__gradio__svelte__internal, { setContext: E8, getContext: fh } = window.__gradio__svelte__internal, dh = "WORKER_PROXY_CONTEXT_KEY";
function ic() {
  return fh(dh);
}
function hh(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function lc(i, e) {
  const t = e.toLowerCase();
  for (const [n, l] of Object.entries(i))
    if (n.toLowerCase() === t)
      return l;
}
function oc(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!hh(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function mh(i) {
  if (i == null || !oc(i))
    return i;
  const e = ic();
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
      type: lc(l.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: gh,
  assign: wl,
  check_outros: sc,
  compute_rest_props: ka,
  create_slot: us,
  detach: Yl,
  element: ac,
  empty: rc,
  exclude_internal_props: bh,
  get_all_dirty_from_scope: fs,
  get_slot_changes: ds,
  get_spread_update: cc,
  group_outros: _c,
  init: ph,
  insert: Il,
  listen: uc,
  prevent_default: vh,
  safe_not_equal: wh,
  set_attributes: kl,
  transition_in: An,
  transition_out: Wn,
  update_slot_base: hs
} = window.__gradio__svelte__internal, { createEventDispatcher: kh } = window.__gradio__svelte__internal;
function yh(i) {
  let e, t, n, l, o;
  const s = (
    /*#slots*/
    i[8].default
  ), r = us(
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
    c = wl(c, a[_]);
  return {
    c() {
      e = ac("a"), r && r.c(), kl(e, c);
    },
    m(_, f) {
      Il(_, e, f), r && r.m(e, null), n = !0, l || (o = uc(
        e,
        "click",
        /*dispatch*/
        i[3].bind(null, "click")
      ), l = !0);
    },
    p(_, f) {
      r && r.p && (!n || f & /*$$scope*/
      128) && hs(
        r,
        s,
        _,
        /*$$scope*/
        _[7],
        n ? ds(
          s,
          /*$$scope*/
          _[7],
          f,
          null
        ) : fs(
          /*$$scope*/
          _[7]
        ),
        null
      ), kl(e, c = cc(a, [
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
      n || (An(r, _), n = !0);
    },
    o(_) {
      Wn(r, _), n = !1;
    },
    d(_) {
      _ && Yl(e), r && r.d(_), l = !1, o();
    }
  };
}
function Ch(i) {
  let e, t, n, l;
  const o = [qh, Sh], s = [];
  function r(a, c) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = rc();
    },
    m(a, c) {
      s[e].m(a, c), Il(a, n, c), l = !0;
    },
    p(a, c) {
      let _ = e;
      e = r(a), e === _ ? s[e].p(a, c) : (_c(), Wn(s[_], 1, 1, () => {
        s[_] = null;
      }), sc(), t = s[e], t ? t.p(a, c) : (t = s[e] = o[e](a), t.c()), An(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (An(t), l = !0);
    },
    o(a) {
      Wn(t), l = !1;
    },
    d(a) {
      a && Yl(n), s[e].d(a);
    }
  };
}
function Sh(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[8].default
  ), s = us(
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
    a = wl(a, r[c]);
  return {
    c() {
      e = ac("a"), s && s.c(), kl(e, a);
    },
    m(c, _) {
      Il(c, e, _), s && s.m(e, null), t = !0, n || (l = uc(e, "click", vh(
        /*wasm_click_handler*/
        i[5]
      )), n = !0);
    },
    p(c, _) {
      s && s.p && (!t || _ & /*$$scope*/
      128) && hs(
        s,
        o,
        c,
        /*$$scope*/
        c[7],
        t ? ds(
          o,
          /*$$scope*/
          c[7],
          _,
          null
        ) : fs(
          /*$$scope*/
          c[7]
        ),
        null
      ), kl(e, a = cc(r, [
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
      t || (An(s, c), t = !0);
    },
    o(c) {
      Wn(s, c), t = !1;
    },
    d(c) {
      c && Yl(e), s && s.d(c), n = !1, l();
    }
  };
}
function qh(i) {
  let e;
  const t = (
    /*#slots*/
    i[8].default
  ), n = us(
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
      128) && hs(
        n,
        t,
        l,
        /*$$scope*/
        l[7],
        e ? ds(
          t,
          /*$$scope*/
          l[7],
          o,
          null
        ) : fs(
          /*$$scope*/
          l[7]
        ),
        null
      );
    },
    i(l) {
      e || (An(n, l), e = !0);
    },
    o(l) {
      Wn(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function zh(i) {
  let e, t, n, l, o;
  const s = [Ch, yh], r = [];
  function a(c, _) {
    return _ & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (c[4] && oc(
      /*href*/
      c[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = s[t](i), {
    c() {
      n.c(), l = rc();
    },
    m(c, _) {
      r[t].m(c, _), Il(c, l, _), o = !0;
    },
    p(c, [_]) {
      let f = t;
      t = a(c, _), t === f ? r[t].p(c, _) : (_c(), Wn(r[f], 1, 1, () => {
        r[f] = null;
      }), sc(), n = r[t], n ? n.p(c, _) : (n = r[t] = s[t](c), n.c()), An(n, 1), n.m(l.parentNode, l));
    },
    i(c) {
      o || (An(n), o = !0);
    },
    o(c) {
      Wn(n), o = !1;
    },
    d(c) {
      c && Yl(l), r[t].d(c);
    }
  };
}
function Dh(i, e, t) {
  const n = ["href", "download"];
  let l = ka(e, n), { $$slots: o = {}, $$scope: s } = e;
  var r = this && this.__awaiter || function(b, u, m, g) {
    function w(p) {
      return p instanceof m ? p : new m(function(y) {
        y(p);
      });
    }
    return new (m || (m = Promise))(function(p, y) {
      function D(z) {
        try {
          q(g.next(z));
        } catch (M) {
          y(M);
        }
      }
      function k(z) {
        try {
          q(g.throw(z));
        } catch (M) {
          y(M);
        }
      }
      function q(z) {
        z.done ? p(z.value) : w(z.value).then(D, k);
      }
      q((g = g.apply(b, u || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: c } = e;
  const _ = kh();
  let f = !1;
  const d = ic();
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
            type: lc(m.headers, "content-type")
          }
        ), w = URL.createObjectURL(g), p = document.createElement("a");
        p.href = w, p.download = c, p.click(), URL.revokeObjectURL(w);
      }).finally(() => {
        t(2, f = !1);
      });
    });
  }
  return i.$$set = (b) => {
    e = wl(wl({}, e), bh(b)), t(6, l = ka(e, n)), "href" in b && t(0, a = b.href), "download" in b && t(1, c = b.download), "$$scope" in b && t(7, s = b.$$scope);
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
class Bh extends gh {
  constructor(e) {
    super(), ph(this, e, Dh, zh, wh, { href: 0, download: 1 });
  }
}
var Mh = Object.defineProperty, Eh = (i, e, t) => e in i ? Mh(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, jt = (i, e, t) => (Eh(i, typeof e != "symbol" ? e + "" : e, t), t), fc = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, pi = (i, e, t) => (fc(i, e, "read from private field"), e.get(i)), Lh = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, Ah = (i, e, t, n) => (fc(i, e, "write to private field"), e.set(i, t), t), _n;
new Intl.Collator(0, { numeric: 1 }).compare;
async function dc(i, e) {
  return i.map(
    (t) => new Wh({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class Wh {
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
class L8 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = pi(this, _n) + t; ; ) {
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
        Ah(this, _n, t);
      },
      flush: (t) => {
        if (pi(this, _n) === "")
          return;
        const n = e.allowCR && pi(this, _n).endsWith("\r") ? pi(this, _n).slice(0, -1) : pi(this, _n);
        t.enqueue(n);
      }
    }), Lh(this, _n, "");
  }
}
_n = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: Rh,
  append: Ge,
  attr: qn,
  detach: hc,
  element: zn,
  init: Xh,
  insert: mc,
  noop: ya,
  safe_not_equal: Yh,
  set_data: yl,
  set_style: ko,
  space: $o,
  text: ei,
  toggle_class: Ca
} = window.__gradio__svelte__internal, { onMount: Ih, createEventDispatcher: Hh, onDestroy: Th } = window.__gradio__svelte__internal;
function Sa(i) {
  let e, t, n, l, o = Mi(
    /*file_to_display*/
    i[2]
  ) + "", s, r, a, c, _ = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), f;
  return {
    c() {
      e = zn("div"), t = zn("span"), n = zn("div"), l = zn("progress"), s = ei(o), a = $o(), c = zn("span"), f = ei(_), ko(l, "visibility", "hidden"), ko(l, "height", "0"), ko(l, "width", "0"), l.value = r = Mi(
        /*file_to_display*/
        i[2]
      ), qn(l, "max", "100"), qn(l, "class", "svelte-cr2edf"), qn(n, "class", "progress-bar svelte-cr2edf"), qn(c, "class", "file-name svelte-cr2edf"), qn(e, "class", "file svelte-cr2edf");
    },
    m(d, h) {
      mc(d, e, h), Ge(e, t), Ge(t, n), Ge(n, l), Ge(l, s), Ge(e, a), Ge(e, c), Ge(c, f);
    },
    p(d, h) {
      h & /*file_to_display*/
      4 && o !== (o = Mi(
        /*file_to_display*/
        d[2]
      ) + "") && yl(s, o), h & /*file_to_display*/
      4 && r !== (r = Mi(
        /*file_to_display*/
        d[2]
      )) && (l.value = r), h & /*file_to_display*/
      4 && _ !== (_ = /*file_to_display*/
      d[2].orig_name + "") && yl(f, _);
    },
    d(d) {
      d && hc(e);
    }
  };
}
function jh(i) {
  let e, t, n, l = (
    /*files_with_progress*/
    i[0].length + ""
  ), o, s, r = (
    /*files_with_progress*/
    i[0].length > 1 ? "files" : "file"
  ), a, c, _, f = (
    /*file_to_display*/
    i[2] && Sa(i)
  );
  return {
    c() {
      e = zn("div"), t = zn("span"), n = ei("Uploading "), o = ei(l), s = $o(), a = ei(r), c = ei("..."), _ = $o(), f && f.c(), qn(t, "class", "uploading svelte-cr2edf"), qn(e, "class", "wrap svelte-cr2edf"), Ca(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(d, h) {
      mc(d, e, h), Ge(e, t), Ge(t, n), Ge(t, o), Ge(t, s), Ge(t, a), Ge(t, c), Ge(e, _), f && f.m(e, null);
    },
    p(d, [h]) {
      h & /*files_with_progress*/
      1 && l !== (l = /*files_with_progress*/
      d[0].length + "") && yl(o, l), h & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      d[0].length > 1 ? "files" : "file") && yl(a, r), /*file_to_display*/
      d[2] ? f ? f.p(d, h) : (f = Sa(d), f.c(), f.m(e, null)) : f && (f.d(1), f = null), h & /*progress*/
      2 && Ca(
        e,
        "progress",
        /*progress*/
        d[1]
      );
    },
    i: ya,
    o: ya,
    d(d) {
      d && hc(e), f && f.d();
    }
  };
}
function Mi(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function Fh(i) {
  let e = 0;
  return i.forEach((t) => {
    e += Mi(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function Oh(i, e, t) {
  var n = this && this.__awaiter || function(u, m, g, w) {
    function p(y) {
      return y instanceof g ? y : new g(function(D) {
        D(y);
      });
    }
    return new (g || (g = Promise))(function(y, D) {
      function k(M) {
        try {
          z(w.next(M));
        } catch (S) {
          D(S);
        }
      }
      function q(M) {
        try {
          z(w.throw(M));
        } catch (S) {
          D(S);
        }
      }
      function z(M) {
        M.done ? y(M.value) : p(M.value).then(k, q);
      }
      z((w = w.apply(u, m || [])).next());
    });
  };
  let { upload_id: l } = e, { root: o } = e, { files: s } = e, { stream_handler: r } = e, a, c = !1, _, f, d = s.map((u) => Object.assign(Object.assign({}, u), { progress: 0 }));
  const h = Hh();
  function b(u, m) {
    t(0, d = d.map((g) => (g.orig_name === u && (g.progress += m), g)));
  }
  return Ih(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${o}/upload_progress?upload_id=${l}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(u) {
      return n(this, void 0, void 0, function* () {
        const m = JSON.parse(u.data);
        c || t(1, c = !0), m.msg === "done" ? (a == null || a.close(), h("done")) : (t(7, _ = m), b(m.orig_name, m.chunk_size));
      });
    };
  })), Th(() => {
    (a != null || a != null) && a.close();
  }), i.$$set = (u) => {
    "upload_id" in u && t(3, l = u.upload_id), "root" in u && t(4, o = u.root), "files" in u && t(5, s = u.files), "stream_handler" in u && t(6, r = u.stream_handler);
  }, i.$$.update = () => {
    i.$$.dirty & /*files_with_progress*/
    1 && Fh(d), i.$$.dirty & /*current_file_upload, files_with_progress*/
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
class Ph extends Rh {
  constructor(e) {
    super(), Xh(this, e, Oh, jh, Yh, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: Uh,
  append: qa,
  attr: Le,
  binding_callbacks: Vh,
  bubble: vn,
  check_outros: gc,
  create_component: Nh,
  create_slot: bc,
  destroy_component: Kh,
  detach: Hl,
  element: es,
  empty: pc,
  get_all_dirty_from_scope: vc,
  get_slot_changes: wc,
  group_outros: kc,
  init: Zh,
  insert: Tl,
  listen: tt,
  mount_component: Gh,
  prevent_default: wn,
  run_all: Jh,
  safe_not_equal: Qh,
  set_style: yc,
  space: xh,
  stop_propagation: kn,
  toggle_class: De,
  transition_in: mn,
  transition_out: Rn,
  update_slot_base: Cc
} = window.__gradio__svelte__internal, { createEventDispatcher: $h, tick: em } = window.__gradio__svelte__internal;
function tm(i) {
  let e, t, n, l, o, s, r, a, c, _, f;
  const d = (
    /*#slots*/
    i[26].default
  ), h = bc(
    d,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = es("button"), h && h.c(), t = xh(), n = es("input"), Le(n, "aria-label", "file upload"), Le(n, "data-testid", "file-upload"), Le(n, "type", "file"), Le(n, "accept", l = /*accept_file_types*/
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
      ), yc(e, "height", "100%");
    },
    m(b, u) {
      Tl(b, e, u), h && h.m(e, null), qa(e, t), qa(e, n), i[34](n), c = !0, _ || (f = [
        tt(
          n,
          "change",
          /*load_files_from_upload*/
          i[18]
        ),
        tt(e, "drag", kn(wn(
          /*drag_handler*/
          i[27]
        ))),
        tt(e, "dragstart", kn(wn(
          /*dragstart_handler*/
          i[28]
        ))),
        tt(e, "dragend", kn(wn(
          /*dragend_handler*/
          i[29]
        ))),
        tt(e, "dragover", kn(wn(
          /*dragover_handler*/
          i[30]
        ))),
        tt(e, "dragenter", kn(wn(
          /*dragenter_handler*/
          i[31]
        ))),
        tt(e, "dragleave", kn(wn(
          /*dragleave_handler*/
          i[32]
        ))),
        tt(e, "drop", kn(wn(
          /*drop_handler*/
          i[33]
        ))),
        tt(
          e,
          "click",
          /*open_file_upload*/
          i[13]
        ),
        tt(
          e,
          "drop",
          /*loadFilesFromDrop*/
          i[19]
        ),
        tt(
          e,
          "dragenter",
          /*updateDragging*/
          i[17]
        ),
        tt(
          e,
          "dragleave",
          /*updateDragging*/
          i[17]
        )
      ], _ = !0);
    },
    p(b, u) {
      h && h.p && (!c || u[0] & /*$$scope*/
      33554432) && Cc(
        h,
        d,
        b,
        /*$$scope*/
        b[25],
        c ? wc(
          d,
          /*$$scope*/
          b[25],
          u,
          null
        ) : vc(
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
      c || (mn(h, b), c = !0);
    },
    o(b) {
      Rn(h, b), c = !1;
    },
    d(b) {
      b && Hl(e), h && h.d(b), i[34](null), _ = !1, Jh(f);
    }
  };
}
function nm(i) {
  let e, t, n = !/*hidden*/
  i[9] && za(i);
  return {
    c() {
      n && n.c(), e = pc();
    },
    m(l, o) {
      n && n.m(l, o), Tl(l, e, o), t = !0;
    },
    p(l, o) {
      /*hidden*/
      l[9] ? n && (kc(), Rn(n, 1, 1, () => {
        n = null;
      }), gc()) : n ? (n.p(l, o), o[0] & /*hidden*/
      512 && mn(n, 1)) : (n = za(l), n.c(), mn(n, 1), n.m(e.parentNode, e));
    },
    i(l) {
      t || (mn(n), t = !0);
    },
    o(l) {
      Rn(n), t = !1;
    },
    d(l) {
      l && Hl(e), n && n.d(l);
    }
  };
}
function im(i) {
  let e, t, n, l, o;
  const s = (
    /*#slots*/
    i[26].default
  ), r = bc(
    s,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = es("button"), r && r.c(), Le(e, "tabindex", t = /*hidden*/
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
      ), yc(e, "height", "100%");
    },
    m(a, c) {
      Tl(a, e, c), r && r.m(e, null), n = !0, l || (o = tt(
        e,
        "click",
        /*paste_clipboard*/
        i[12]
      ), l = !0);
    },
    p(a, c) {
      r && r.p && (!n || c[0] & /*$$scope*/
      33554432) && Cc(
        r,
        s,
        a,
        /*$$scope*/
        a[25],
        n ? wc(
          s,
          /*$$scope*/
          a[25],
          c,
          null
        ) : vc(
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
      n || (mn(r, a), n = !0);
    },
    o(a) {
      Rn(r, a), n = !1;
    },
    d(a) {
      a && Hl(e), r && r.d(a), l = !1, o();
    }
  };
}
function za(i) {
  let e, t;
  return e = new Ph({
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
      Nh(e.$$.fragment);
    },
    m(n, l) {
      Gh(e, n, l), t = !0;
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
      t || (mn(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Rn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Kh(e, n);
    }
  };
}
function lm(i) {
  let e, t, n, l;
  const o = [im, nm, tm], s = [];
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
      t.c(), n = pc();
    },
    m(a, c) {
      s[e].m(a, c), Tl(a, n, c), l = !0;
    },
    p(a, c) {
      let _ = e;
      e = r(a), e === _ ? s[e].p(a, c) : (kc(), Rn(s[_], 1, 1, () => {
        s[_] = null;
      }), gc(), t = s[e], t ? t.p(a, c) : (t = s[e] = o[e](a), t.c()), mn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (mn(t), l = !0);
    },
    o(a) {
      Rn(t), l = !1;
    },
    d(a) {
      a && Hl(n), s[e].d(a);
    }
  };
}
function om(i, e, t) {
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
function sm(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var o = this && this.__awaiter || function(L, T, V, re) {
    function fe(A) {
      return A instanceof V ? A : new V(function(at) {
        at(A);
      });
    }
    return new (V || (V = Promise))(function(A, at) {
      function Xe(je) {
        try {
          Te(re.next(je));
        } catch (Ce) {
          at(Ce);
        }
      }
      function $(je) {
        try {
          Te(re.throw(je));
        } catch (Ce) {
          at(Ce);
        }
      }
      function Te(je) {
        je.done ? A(je.value) : fe(je.value).then(Xe, $);
      }
      Te((re = re.apply(L, T || [])).next());
    });
  };
  let { filetype: s = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: c = !0 } = e, { flex: _ = !0 } = e, { file_count: f = "single" } = e, { disable_click: d = !1 } = e, { root: h } = e, { hidden: b = !1 } = e, { format: u = "file" } = e, { uploading: m = !1 } = e, { hidden_upload: g = null } = e, { show_progress: w = !0 } = e, { max_file_size: p = null } = e, { upload: y } = e, { stream_handler: D } = e, k, q, z;
  const M = $h(), S = ["image", "video", "audio", "text", "file"], E = (L) => L.startsWith(".") || L.endsWith("/*") ? L : S.includes(L) ? L + "/*" : "." + L;
  function X() {
    t(20, r = !r);
  }
  function C() {
    navigator.clipboard.read().then((L) => o(this, void 0, void 0, function* () {
      for (let T = 0; T < L.length; T++) {
        const V = L[T].types.find((re) => re.startsWith("image/"));
        if (V) {
          L[T].getType(V).then((re) => o(this, void 0, void 0, function* () {
            const fe = new File([re], `clipboard.${V.replace("image/", "")}`);
            yield x([fe]);
          }));
          break;
        }
      }
    }));
  }
  function ee() {
    d || g && (t(2, g.value = "", g), g.click());
  }
  function J(L) {
    return o(this, void 0, void 0, function* () {
      yield em(), t(14, k = Math.random().toString(36).substring(2, 15)), t(1, m = !0);
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
      return t(15, q = yield dc(T)), yield J(q);
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
  function W(L) {
    return o(this, void 0, void 0, function* () {
      var T;
      if (t(20, r = !1), !(!((T = L.dataTransfer) === null || T === void 0) && T.files)) return;
      const V = Array.from(L.dataTransfer.files).filter((re) => {
        const fe = "." + re.name.split(".").pop();
        return fe && om(z, fe, re.type) || (fe && Array.isArray(s) ? s.includes(fe) : fe === s) ? !0 : (M("error", `Invalid file type only ${s} allowed.`), !1);
      });
      yield x(V);
    });
  }
  function F(L) {
    vn.call(this, i, L);
  }
  function I(L) {
    vn.call(this, i, L);
  }
  function U(L) {
    vn.call(this, i, L);
  }
  function Y(L) {
    vn.call(this, i, L);
  }
  function le(L) {
    vn.call(this, i, L);
  }
  function ae(L) {
    vn.call(this, i, L);
  }
  function H(L) {
    vn.call(this, i, L);
  }
  function be(L) {
    Vh[L ? "unshift" : "push"](() => {
      g = L, t(2, g);
    });
  }
  return i.$$set = (L) => {
    "filetype" in L && t(0, s = L.filetype), "dragging" in L && t(20, r = L.dragging), "boundedheight" in L && t(3, a = L.boundedheight), "center" in L && t(4, c = L.center), "flex" in L && t(5, _ = L.flex), "file_count" in L && t(6, f = L.file_count), "disable_click" in L && t(7, d = L.disable_click), "root" in L && t(8, h = L.root), "hidden" in L && t(9, b = L.hidden), "format" in L && t(21, u = L.format), "uploading" in L && t(1, m = L.uploading), "hidden_upload" in L && t(2, g = L.hidden_upload), "show_progress" in L && t(10, w = L.show_progress), "max_file_size" in L && t(22, p = L.max_file_size), "upload" in L && t(23, y = L.upload), "stream_handler" in L && t(11, D = L.stream_handler), "$$scope" in L && t(25, l = L.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*filetype*/
    1 && (s == null ? t(16, z = null) : typeof s == "string" ? t(16, z = E(s)) : (t(0, s = s.map(E)), t(16, z = s.join(", "))));
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
    D,
    C,
    ee,
    k,
    q,
    z,
    X,
    G,
    W,
    r,
    u,
    p,
    y,
    x,
    l,
    n,
    F,
    I,
    U,
    Y,
    le,
    ae,
    H,
    be
  ];
}
class am extends Uh {
  constructor(e) {
    super(), Zh(
      this,
      e,
      sm,
      lm,
      Qh,
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
  SvelteComponent: A8,
  append: W8,
  attr: R8,
  check_outros: X8,
  create_component: Y8,
  destroy_component: I8,
  detach: H8,
  element: T8,
  group_outros: j8,
  init: F8,
  insert: O8,
  mount_component: P8,
  safe_not_equal: U8,
  set_style: V8,
  space: N8,
  toggle_class: K8,
  transition_in: Z8,
  transition_out: G8
} = window.__gradio__svelte__internal, { createEventDispatcher: J8 } = window.__gradio__svelte__internal, {
  SvelteComponent: Q8,
  assign: x8,
  compute_rest_props: $8,
  detach: e7,
  element: t7,
  exclude_internal_props: n7,
  get_spread_update: i7,
  init: l7,
  insert: o7,
  noop: s7,
  safe_not_equal: a7,
  set_attributes: r7,
  src_url_equal: c7,
  toggle_class: _7
} = window.__gradio__svelte__internal, {
  SvelteComponent: u7,
  append: f7,
  attr: d7,
  bubble: h7,
  check_outros: m7,
  create_component: g7,
  destroy_component: b7,
  detach: p7,
  element: v7,
  empty: w7,
  group_outros: k7,
  init: y7,
  insert: C7,
  listen: S7,
  mount_component: q7,
  safe_not_equal: z7,
  space: D7,
  toggle_class: B7,
  transition_in: M7,
  transition_out: E7
} = window.__gradio__svelte__internal, { createEventDispatcher: L7 } = window.__gradio__svelte__internal, {
  SvelteComponent: rm,
  append: Ji,
  attr: yo,
  create_component: cm,
  destroy_component: _m,
  detach: um,
  element: Co,
  init: fm,
  insert: dm,
  listen: hm,
  mount_component: mm,
  noop: gm,
  safe_not_equal: bm,
  set_style: pm,
  space: vm,
  text: wm,
  transition_in: km,
  transition_out: ym
} = window.__gradio__svelte__internal, { createEventDispatcher: Cm } = window.__gradio__svelte__internal;
function Sm(i) {
  let e, t, n, l, o, s = "Click to Access Webcam", r, a, c, _;
  return l = new Fr({}), {
    c() {
      e = Co("button"), t = Co("div"), n = Co("span"), cm(l.$$.fragment), o = vm(), r = wm(s), yo(n, "class", "icon-wrap svelte-fjcd9c"), yo(t, "class", "wrap svelte-fjcd9c"), yo(e, "class", "svelte-fjcd9c"), pm(e, "height", "100%");
    },
    m(f, d) {
      dm(f, e, d), Ji(e, t), Ji(t, n), mm(l, n, null), Ji(t, o), Ji(t, r), a = !0, c || (_ = hm(
        e,
        "click",
        /*click_handler*/
        i[1]
      ), c = !0);
    },
    p: gm,
    i(f) {
      a || (km(l.$$.fragment, f), a = !0);
    },
    o(f) {
      ym(l.$$.fragment, f), a = !1;
    },
    d(f) {
      f && um(e), _m(l), c = !1, _();
    }
  };
}
function qm(i) {
  const e = Cm();
  return [e, () => e("click")];
}
class zm extends rm {
  constructor(e) {
    super(), fm(this, e, qm, Sm, bm, {});
  }
}
function Dm() {
  return navigator.mediaDevices.enumerateDevices();
}
function Bm(i, e) {
  e.srcObject = i, e.muted = !0, e.play();
}
async function Da(i, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, l = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: i
  };
  return navigator.mediaDevices.getUserMedia(l).then((o) => (Bm(o, e), o));
}
function Mm(i) {
  return i.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: Em,
  action_destroyer: Lm,
  add_render_callback: Am,
  append: Vt,
  attr: ye,
  binding_callbacks: Wm,
  check_outros: Li,
  create_component: _i,
  create_in_transition: Rm,
  destroy_component: ui,
  destroy_each: Xm,
  detach: Je,
  element: st,
  empty: ms,
  ensure_array_like: Ba,
  group_outros: Ai,
  init: Ym,
  insert: Qe,
  listen: Cl,
  mount_component: fi,
  noop: gs,
  run_all: Im,
  safe_not_equal: Hm,
  set_data: Sc,
  set_input_value: ts,
  space: Xi,
  stop_propagation: Tm,
  text: qc,
  toggle_class: Qi,
  transition_in: Be,
  transition_out: Re
} = window.__gradio__svelte__internal, { createEventDispatcher: jm, onMount: Fm } = window.__gradio__svelte__internal;
function Ma(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function Om(i) {
  let e, t, n, l, o, s, r, a, c, _, f;
  const d = [Vm, Um], h = [];
  function b(g, w) {
    return (
      /*mode*/
      g[1] === "video" || /*streaming*/
      g[0] ? 0 : 1
    );
  }
  n = b(i), l = h[n] = d[n](i);
  let u = !/*recording*/
  i[8] && Ea(i), m = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && La(i)
  );
  return {
    c() {
      e = st("div"), t = st("button"), l.c(), s = Xi(), u && u.c(), r = Xi(), m && m.c(), a = ms(), ye(t, "aria-label", o = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), ye(t, "class", "svelte-8hqvb6"), ye(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(g, w) {
      Qe(g, e, w), Vt(e, t), h[n].m(t, null), Vt(e, s), u && u.m(e, null), Qe(g, r, w), m && m.m(g, w), Qe(g, a, w), c = !0, _ || (f = Cl(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), _ = !0);
    },
    p(g, w) {
      let p = n;
      n = b(g), n === p ? h[n].p(g, w) : (Ai(), Re(h[p], 1, 1, () => {
        h[p] = null;
      }), Li(), l = h[n], l ? l.p(g, w) : (l = h[n] = d[n](g), l.c()), Be(l, 1), l.m(t, null)), (!c || w[0] & /*mode*/
      2 && o !== (o = /*mode*/
      g[1] === "image" ? "capture photo" : "start recording")) && ye(t, "aria-label", o), /*recording*/
      g[8] ? u && (Ai(), Re(u, 1, 1, () => {
        u = null;
      }), Li()) : u ? (u.p(g, w), w[0] & /*recording*/
      256 && Be(u, 1)) : (u = Ea(g), u.c(), Be(u, 1), u.m(e, null)), /*options_open*/
      g[10] && /*selected_device*/
      g[7] ? m ? (m.p(g, w), w[0] & /*options_open, selected_device*/
      1152 && Be(m, 1)) : (m = La(g), m.c(), Be(m, 1), m.m(a.parentNode, a)) : m && (Ai(), Re(m, 1, 1, () => {
        m = null;
      }), Li());
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
function Pm(i) {
  let e, t, n, l;
  return t = new zm({}), t.$on(
    "click",
    /*click_handler*/
    i[20]
  ), {
    c() {
      e = st("div"), _i(t.$$.fragment), ye(e, "title", "grant webcam access");
    },
    m(o, s) {
      Qe(o, e, s), fi(t, e, null), l = !0;
    },
    p: gs,
    i(o) {
      l || (Be(t.$$.fragment, o), o && (n || Am(() => {
        n = Rm(e, L1, { delay: 100, duration: 200 }), n.start();
      })), l = !0);
    },
    o(o) {
      Re(t.$$.fragment, o), l = !1;
    },
    d(o) {
      o && Je(e), ui(t);
    }
  };
}
function Um(i) {
  let e, t, n;
  return t = new ff({}), {
    c() {
      e = st("div"), _i(t.$$.fragment), ye(e, "class", "icon svelte-8hqvb6"), ye(e, "title", "capture photo");
    },
    m(l, o) {
      Qe(l, e, o), fi(t, e, null), n = !0;
    },
    p: gs,
    i(l) {
      n || (Be(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Re(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Je(e), ui(t);
    }
  };
}
function Vm(i) {
  let e, t, n, l;
  const o = [Km, Nm], s = [];
  function r(a, c) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = ms();
    },
    m(a, c) {
      s[e].m(a, c), Qe(a, n, c), l = !0;
    },
    p(a, c) {
      let _ = e;
      e = r(a), e !== _ && (Ai(), Re(s[_], 1, 1, () => {
        s[_] = null;
      }), Li(), t = s[e], t || (t = s[e] = o[e](a), t.c()), Be(t, 1), t.m(n.parentNode, n));
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
function Nm(i) {
  let e, t, n;
  return t = new wf({}), {
    c() {
      e = st("div"), _i(t.$$.fragment), ye(e, "class", "icon red svelte-8hqvb6"), ye(e, "title", "start recording");
    },
    m(l, o) {
      Qe(l, e, o), fi(t, e, null), n = !0;
    },
    i(l) {
      n || (Be(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Re(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Je(e), ui(t);
    }
  };
}
function Km(i) {
  let e, t, n;
  return t = new Ld({}), {
    c() {
      e = st("div"), _i(t.$$.fragment), ye(e, "class", "icon red svelte-8hqvb6"), ye(e, "title", "stop recording");
    },
    m(l, o) {
      Qe(l, e, o), fi(t, e, null), n = !0;
    },
    i(l) {
      n || (Be(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Re(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Je(e), ui(t);
    }
  };
}
function Ea(i) {
  let e, t, n, l, o;
  return t = new _s({}), {
    c() {
      e = st("button"), _i(t.$$.fragment), ye(e, "class", "icon svelte-8hqvb6"), ye(e, "aria-label", "select input source");
    },
    m(s, r) {
      Qe(s, e, r), fi(t, e, null), n = !0, l || (o = Cl(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), l = !0);
    },
    p: gs,
    i(s) {
      n || (Be(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Re(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Je(e), ui(t), l = !1, o();
    }
  };
}
function La(i) {
  let e, t, n, l, o, s, r;
  n = new _s({});
  function a(f, d) {
    return (
      /*available_video_devices*/
      f[6].length === 0 ? Gm : Zm
    );
  }
  let c = a(i), _ = c(i);
  return {
    c() {
      e = st("select"), t = st("button"), _i(n.$$.fragment), l = Xi(), _.c(), ye(t, "class", "inset-icon svelte-8hqvb6"), ye(e, "class", "select-wrap svelte-8hqvb6"), ye(e, "aria-label", "select source");
    },
    m(f, d) {
      Qe(f, e, d), Vt(e, t), fi(n, t, null), Vt(t, l), _.m(e, null), o = !0, s || (r = [
        Cl(t, "click", Tm(
          /*click_handler_2*/
          i[22]
        )),
        Lm(bs.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        Cl(
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
      f && Je(e), ui(n), _.d(), s = !1, Im(r);
    }
  };
}
function Zm(i) {
  let e, t = Ba(
    /*available_video_devices*/
    i[6]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = Aa(Ma(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = ms();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      Qe(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*available_video_devices, selected_device*/
      192) {
        t = Ba(
          /*available_video_devices*/
          l[6]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = Ma(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = Aa(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && Je(e), Xm(n, l);
    }
  };
}
function Gm(i) {
  let e, t = (
    /*i18n*/
    i[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = st("option"), n = qc(t), e.__value = "", ts(e, e.__value), ye(e, "class", "svelte-8hqvb6");
    },
    m(l, o) {
      Qe(l, e, o), Vt(e, n);
    },
    p(l, o) {
      o[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      l[3]("common.no_devices") + "") && Sc(n, t);
    },
    d(l) {
      l && Je(e);
    }
  };
}
function Aa(i) {
  let e, t = (
    /*device*/
    i[32].label + ""
  ), n, l, o, s;
  return {
    c() {
      e = st("option"), n = qc(t), l = Xi(), e.__value = o = /*device*/
      i[32].deviceId, ts(e, e.__value), e.selected = s = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, ye(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      Qe(r, e, a), Vt(e, n), Vt(e, l);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && Sc(n, t), a[0] & /*available_video_devices*/
      64 && o !== (o = /*device*/
      r[32].deviceId) && (e.__value = o, ts(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && s !== (s = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = s);
    },
    d(r) {
      r && Je(e);
    }
  };
}
function Jm(i) {
  let e, t, n, l, o, s;
  const r = [Pm, Om], a = [];
  function c(_, f) {
    return (
      /*webcam_accessed*/
      _[9] ? 1 : 0
    );
  }
  return l = c(i), o = a[l] = r[l](i), {
    c() {
      e = st("div"), t = st("video"), n = Xi(), o.c(), ye(t, "class", "svelte-8hqvb6"), Qi(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), Qi(t, "hide", !/*webcam_accessed*/
      i[9]), ye(e, "class", "wrap svelte-8hqvb6");
    },
    m(_, f) {
      Qe(_, e, f), Vt(e, t), i[19](t), Vt(e, n), a[l].m(e, null), s = !0;
    },
    p(_, f) {
      (!s || f[0] & /*mirror_webcam*/
      4) && Qi(
        t,
        "flip",
        /*mirror_webcam*/
        _[2]
      ), (!s || f[0] & /*webcam_accessed*/
      512) && Qi(t, "hide", !/*webcam_accessed*/
      _[9]);
      let d = l;
      l = c(_), l === d ? a[l].p(_, f) : (Ai(), Re(a[d], 1, 1, () => {
        a[d] = null;
      }), Li(), o = a[l], o ? o.p(_, f) : (o = a[l] = r[l](_), o.c()), Be(o, 1), o.m(e, null));
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
function bs(i, e) {
  const t = (n) => {
    i && !i.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function Qm(i, e, t) {
  var n = this && this.__awaiter || function(W, F, I, U) {
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
      L((U = U.apply(W, F || [])).next());
    });
  };
  let l, o = [], s = null, r, { streaming: a = !1 } = e, { pending: c = !1 } = e, { root: _ = "" } = e, { mode: f = "image" } = e, { mirror_webcam: d } = e, { include_audio: h } = e, { i18n: b } = e, { upload: u } = e;
  const m = jm();
  Fm(() => r = document.createElement("canvas"));
  const g = (W) => n(void 0, void 0, void 0, function* () {
    const I = W.target.value;
    yield Da(h, l, I).then((U) => n(void 0, void 0, void 0, function* () {
      k = U, t(7, s = o.find((Y) => Y.deviceId === I) || null), t(10, X = !1);
    }));
  });
  function w() {
    return n(this, void 0, void 0, function* () {
      try {
        Da(h, l).then((W) => n(this, void 0, void 0, function* () {
          t(9, S = !0), t(6, o = yield Dm()), k = W;
        })).then(() => Mm(o)).then((W) => {
          t(6, o = W);
          const F = k.getTracks().map((I) => {
            var U;
            return (U = I.getSettings()) === null || U === void 0 ? void 0 : U.deviceId;
          })[0];
          t(7, s = F && W.find((I) => I.deviceId === F) || o[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && m("error", b("image.no_webcam_support"));
      } catch (W) {
        if (W instanceof DOMException && W.name == "NotAllowedError")
          m("error", b("image.allow_webcam_access"));
        else
          throw W;
      }
    });
  }
  function p() {
    var W = r.getContext("2d");
    (!a || a && y) && l.videoWidth && l.videoHeight && (r.width = l.videoWidth, r.height = l.videoHeight, W.drawImage(l, 0, 0, l.videoWidth, l.videoHeight), d && (W.scale(-1, 1), W.drawImage(l, -l.videoWidth, 0)), r.toBlob(
      (F) => {
        m(a ? "stream" : "capture", F);
      },
      "image/png",
      0.8
    ));
  }
  let y = !1, D = [], k, q, z;
  function M() {
    if (y) {
      z.stop();
      let W = new Blob(D, { type: q }), F = new FileReader();
      F.onload = function(I) {
        return n(this, void 0, void 0, function* () {
          var U;
          if (I.target) {
            let Y = new File([W], "sample." + q.substring(6));
            const le = yield dc([Y]);
            let ae = ((U = yield u(le, _)) === null || U === void 0 ? void 0 : U.filter(Boolean))[0];
            m("capture", ae), m("stop_recording");
          }
        });
      }, F.readAsDataURL(W);
    } else {
      m("start_recording"), D = [];
      let W = ["video/webm", "video/mp4"];
      for (let F of W)
        if (MediaRecorder.isTypeSupported(F)) {
          q = F;
          break;
        }
      if (q === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      z = new MediaRecorder(k, { mimeType: q }), z.addEventListener("dataavailable", function(F) {
        D.push(F.data);
      }), z.start(200);
    }
    t(8, y = !y);
  }
  let S = !1;
  function E() {
    f === "image" && a && t(8, y = !y), f === "image" ? p() : M(), !y && k && (k.getTracks().forEach((W) => W.stop()), t(5, l.srcObject = null, l), t(9, S = !1));
  }
  a && f === "image" && window.setInterval(
    () => {
      l && !c && p();
    },
    500
  );
  let X = !1;
  function C(W) {
    W.preventDefault(), W.stopPropagation(), t(10, X = !1);
  }
  function ee(W) {
    Wm[W ? "unshift" : "push"](() => {
      l = W, t(5, l);
    });
  }
  const J = async () => w(), x = () => t(10, X = !0), G = () => t(10, X = !1);
  return i.$$set = (W) => {
    "streaming" in W && t(0, a = W.streaming), "pending" in W && t(15, c = W.pending), "root" in W && t(16, _ = W.root), "mode" in W && t(1, f = W.mode), "mirror_webcam" in W && t(2, d = W.mirror_webcam), "include_audio" in W && t(17, h = W.include_audio), "i18n" in W && t(3, b = W.i18n), "upload" in W && t(18, u = W.upload);
  }, [
    a,
    f,
    d,
    b,
    bs,
    l,
    o,
    s,
    y,
    S,
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
    J,
    x,
    G
  ];
}
class xm extends Em {
  constructor(e) {
    super(), Ym(
      this,
      e,
      Qm,
      Jm,
      Hm,
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
    return bs;
  }
}
const {
  SvelteComponent: A7,
  attr: W7,
  create_component: R7,
  destroy_component: X7,
  detach: Y7,
  element: I7,
  init: H7,
  insert: T7,
  mount_component: j7,
  noop: F7,
  safe_not_equal: O7,
  transition_in: P7,
  transition_out: U7
} = window.__gradio__svelte__internal, { createEventDispatcher: V7 } = window.__gradio__svelte__internal, {
  SvelteComponent: N7,
  add_flush_callback: K7,
  append: Z7,
  attr: G7,
  bind: J7,
  binding_callbacks: Q7,
  bubble: x7,
  check_outros: $7,
  create_component: e9,
  create_slot: t9,
  destroy_component: n9,
  detach: i9,
  element: l9,
  empty: o9,
  get_all_dirty_from_scope: s9,
  get_slot_changes: a9,
  group_outros: r9,
  init: c9,
  insert: _9,
  listen: u9,
  mount_component: f9,
  noop: d9,
  safe_not_equal: h9,
  space: m9,
  toggle_class: g9,
  transition_in: b9,
  transition_out: p9,
  update_slot_base: v9
} = window.__gradio__svelte__internal, { createEventDispatcher: w9, tick: k9 } = window.__gradio__svelte__internal, {
  SvelteComponent: y9,
  attr: C9,
  check_outros: S9,
  create_component: q9,
  destroy_component: z9,
  detach: D9,
  element: B9,
  group_outros: M9,
  init: E9,
  insert: L9,
  mount_component: A9,
  safe_not_equal: W9,
  toggle_class: R9,
  transition_in: X9,
  transition_out: Y9
} = window.__gradio__svelte__internal, {
  SvelteComponent: I9,
  add_flush_callback: H9,
  assign: T9,
  bind: j9,
  binding_callbacks: F9,
  check_outros: O9,
  create_component: P9,
  destroy_component: U9,
  detach: V9,
  empty: N9,
  flush: K9,
  get_spread_object: Z9,
  get_spread_update: G9,
  group_outros: J9,
  init: Q9,
  insert: x9,
  mount_component: $9,
  safe_not_equal: ey,
  space: ty,
  transition_in: ny,
  transition_out: iy
} = window.__gradio__svelte__internal, {
  SvelteComponent: ly,
  append: oy,
  attr: sy,
  detach: ay,
  init: ry,
  insert: cy,
  noop: _y,
  safe_not_equal: uy,
  set_style: fy,
  svg_element: dy
} = window.__gradio__svelte__internal, {
  SvelteComponent: $m,
  append: ln,
  attr: P,
  detach: e0,
  init: t0,
  insert: n0,
  noop: So,
  safe_not_equal: i0,
  set_style: on,
  svg_element: Ft
} = window.__gradio__svelte__internal;
function l0(i) {
  let e, t, n, l, o, s, r, a, c;
  return {
    c() {
      e = Ft("svg"), t = Ft("rect"), n = Ft("rect"), l = Ft("rect"), o = Ft("rect"), s = Ft("line"), r = Ft("line"), a = Ft("line"), c = Ft("line"), P(t, "x", "2"), P(t, "y", "2"), P(t, "width", "5"), P(t, "height", "5"), P(t, "rx", "1"), P(t, "ry", "1"), P(t, "stroke-width", "2"), P(t, "fill", "none"), P(n, "x", "17"), P(n, "y", "2"), P(n, "width", "5"), P(n, "height", "5"), P(n, "rx", "1"), P(n, "ry", "1"), P(n, "stroke-width", "2"), P(n, "fill", "none"), P(l, "x", "2"), P(l, "y", "17"), P(l, "width", "5"), P(l, "height", "5"), P(l, "rx", "1"), P(l, "ry", "1"), P(l, "stroke-width", "2"), P(l, "fill", "none"), P(o, "x", "17"), P(o, "y", "17"), P(o, "width", "5"), P(o, "height", "5"), P(o, "rx", "1"), P(o, "ry", "1"), P(o, "stroke-width", "2"), P(o, "fill", "none"), P(s, "x1", "7.5"), P(s, "y1", "4.5"), P(s, "x2", "16"), P(s, "y2", "4.5"), on(s, "stroke-width", "2px"), P(r, "x1", "7.5"), P(r, "y1", "19.5"), P(r, "x2", "16"), P(r, "y2", "19.5"), on(r, "stroke-width", "2px"), P(a, "x1", "4.5"), P(a, "y1", "8"), P(a, "x2", "4.5"), P(a, "y2", "16"), on(a, "stroke-width", "2px"), P(c, "x1", "19.5"), P(c, "y1", "8"), P(c, "x2", "19.5"), P(c, "y2", "16"), on(c, "stroke-width", "2px"), P(e, "width", "100%"), P(e, "height", "100%"), P(e, "viewBox", "0 0 24 24"), P(e, "version", "1.1"), P(e, "xmlns", "http://www.w3.org/2000/svg"), P(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), P(e, "xml:space", "preserve"), P(e, "stroke", "currentColor"), on(e, "fill-rule", "evenodd"), on(e, "clip-rule", "evenodd"), on(e, "stroke-linecap", "round"), on(e, "stroke-linejoin", "round");
    },
    m(_, f) {
      n0(_, e, f), ln(e, t), ln(e, n), ln(e, l), ln(e, o), ln(e, s), ln(e, r), ln(e, a), ln(e, c);
    },
    p: So,
    i: So,
    o: So,
    d(_) {
      _ && e0(e);
    }
  };
}
class o0 extends $m {
  constructor(e) {
    super(), t0(this, e, null, l0, i0, {});
  }
}
const {
  SvelteComponent: s0,
  append: xi,
  attr: Ne,
  detach: a0,
  init: r0,
  insert: c0,
  noop: qo,
  safe_not_equal: _0,
  set_style: $i,
  svg_element: vi
} = window.__gradio__svelte__internal;
function u0(i) {
  let e, t, n, l, o;
  return {
    c() {
      e = vi("svg"), t = vi("path"), n = vi("path"), l = vi("path"), o = vi("path"), Ne(t, "stroke", "none"), Ne(t, "d", "M0 0h24v24H0z"), Ne(t, "fill", "none"), Ne(n, "d", "M8 6h12"), Ne(l, "d", "M6 12h12"), Ne(o, "d", "M4 18h12"), Ne(e, "width", "100%"), Ne(e, "height", "100%"), Ne(e, "viewBox", "0 0 24 24"), Ne(e, "version", "1.1"), Ne(e, "xmlns", "http://www.w3.org/2000/svg"), Ne(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Ne(e, "xml:space", "preserve"), Ne(e, "stroke", "currentColor"), $i(e, "fill-rule", "evenodd"), $i(e, "clip-rule", "evenodd"), $i(e, "stroke-linecap", "round"), $i(e, "stroke-linejoin", "round");
    },
    m(s, r) {
      c0(s, e, r), xi(e, t), xi(e, n), xi(e, l), xi(e, o);
    },
    p: qo,
    i: qo,
    o: qo,
    d(s) {
      s && a0(e);
    }
  };
}
class f0 extends s0 {
  constructor(e) {
    super(), r0(this, e, null, u0, _0, {});
  }
}
const {
  SvelteComponent: d0,
  append: h0,
  attr: Ot,
  detach: m0,
  init: g0,
  insert: b0,
  noop: zo,
  safe_not_equal: p0,
  set_style: el,
  svg_element: Wa
} = window.__gradio__svelte__internal;
function v0(i) {
  let e, t;
  return {
    c() {
      e = Wa("svg"), t = Wa("path"), Ot(t, "d", "M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"), Ot(e, "width", "100%"), Ot(e, "height", "100%"), Ot(e, "viewBox", "0 0 24 24"), Ot(e, "version", "1.1"), Ot(e, "xmlns", "http://www.w3.org/2000/svg"), Ot(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Ot(e, "xml:space", "preserve"), Ot(e, "stroke", "currentColor"), el(e, "fill-rule", "evenodd"), el(e, "clip-rule", "evenodd"), el(e, "stroke-linecap", "round"), el(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      b0(n, e, l), h0(e, t);
    },
    p: zo,
    i: zo,
    o: zo,
    d(n) {
      n && m0(e);
    }
  };
}
let w0 = class extends d0 {
  constructor(e) {
    super(), g0(this, e, null, v0, p0, {});
  }
};
const {
  SvelteComponent: k0,
  append: y0,
  attr: yt,
  detach: C0,
  init: S0,
  insert: q0,
  noop: Do,
  safe_not_equal: z0,
  set_style: tl,
  svg_element: Ra
} = window.__gradio__svelte__internal;
function D0(i) {
  let e, t;
  return {
    c() {
      e = Ra("svg"), t = Ra("path"), yt(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), yt(t, "fill", "none"), yt(t, "stroke-width", "2"), yt(e, "width", "100%"), yt(e, "height", "100%"), yt(e, "viewBox", "0 0 24 24"), yt(e, "version", "1.1"), yt(e, "xmlns", "http://www.w3.org/2000/svg"), yt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), yt(e, "xml:space", "preserve"), yt(e, "stroke", "currentColor"), tl(e, "fill-rule", "evenodd"), tl(e, "clip-rule", "evenodd"), tl(e, "stroke-linecap", "round"), tl(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      q0(n, e, l), y0(e, t);
    },
    p: Do,
    i: Do,
    o: Do,
    d(n) {
      n && C0(e);
    }
  };
}
class B0 extends k0 {
  constructor(e) {
    super(), S0(this, e, null, D0, z0, {});
  }
}
const {
  SvelteComponent: M0,
  append: E0,
  attr: Ct,
  detach: L0,
  init: A0,
  insert: W0,
  noop: Bo,
  safe_not_equal: R0,
  set_style: nl,
  svg_element: Xa
} = window.__gradio__svelte__internal;
function X0(i) {
  let e, t;
  return {
    c() {
      e = Xa("svg"), t = Xa("path"), Ct(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), Ct(t, "fill", "none"), Ct(t, "stroke-width", "2"), Ct(e, "width", "100%"), Ct(e, "height", "100%"), Ct(e, "viewBox", "0 0 24 24"), Ct(e, "version", "1.1"), Ct(e, "xmlns", "http://www.w3.org/2000/svg"), Ct(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Ct(e, "xml:space", "preserve"), Ct(e, "stroke", "currentColor"), nl(e, "fill-rule", "evenodd"), nl(e, "clip-rule", "evenodd"), nl(e, "stroke-linecap", "round"), nl(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      W0(n, e, l), E0(e, t);
    },
    p: Bo,
    i: Bo,
    o: Bo,
    d(n) {
      n && L0(e);
    }
  };
}
class Y0 extends M0 {
  constructor(e) {
    super(), A0(this, e, null, X0, R0, {});
  }
}
const {
  SvelteComponent: I0,
  append: Ya,
  attr: Pt,
  detach: H0,
  init: T0,
  insert: j0,
  noop: Mo,
  safe_not_equal: F0,
  set_style: il,
  svg_element: Eo
} = window.__gradio__svelte__internal;
function O0(i) {
  let e, t, n;
  return {
    c() {
      e = Eo("svg"), t = Eo("path"), n = Eo("path"), Pt(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), Pt(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), Pt(e, "width", "100%"), Pt(e, "height", "100%"), Pt(e, "viewBox", "0 0 24 24"), Pt(e, "xmlns", "http://www.w3.org/2000/svg"), Pt(e, "fill", "none"), Pt(e, "stroke", "currentColor"), Pt(e, "stroke-width", "2"), il(e, "fill-rule", "evenodd"), il(e, "clip-rule", "evenodd"), il(e, "stroke-linecap", "round"), il(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      j0(l, e, o), Ya(e, t), Ya(e, n);
    },
    p: Mo,
    i: Mo,
    o: Mo,
    d(l) {
      l && H0(e);
    }
  };
}
class P0 extends I0 {
  constructor(e) {
    super(), T0(this, e, null, O0, F0, {});
  }
}
const {
  SvelteComponent: U0,
  append: V0,
  attr: sn,
  detach: N0,
  init: K0,
  insert: Z0,
  noop: Lo,
  safe_not_equal: G0,
  set_style: ll,
  svg_element: Ia
} = window.__gradio__svelte__internal;
function J0(i) {
  let e, t;
  return {
    c() {
      e = Ia("svg"), t = Ia("path"), sn(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), sn(e, "width", "100%"), sn(e, "height", "100%"), sn(e, "viewBox", "0 0 24 24"), sn(e, "fill", "none"), sn(e, "stroke", "currentColor"), sn(e, "stroke-width", "2"), ll(e, "fill-rule", "evenodd"), ll(e, "clip-rule", "evenodd"), ll(e, "stroke-linecap", "round"), ll(e, "stroke-linejoin", "round"), sn(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      Z0(n, e, l), V0(e, t);
    },
    p: Lo,
    i: Lo,
    o: Lo,
    d(n) {
      n && N0(e);
    }
  };
}
class Q0 extends U0 {
  constructor(e) {
    super(), K0(this, e, null, J0, G0, {});
  }
}
const {
  SvelteComponent: x0,
  append: $0,
  attr: an,
  detach: eg,
  init: tg,
  insert: ng,
  noop: Ao,
  safe_not_equal: ig,
  set_style: ol,
  svg_element: Ha
} = window.__gradio__svelte__internal;
function lg(i) {
  let e, t;
  return {
    c() {
      e = Ha("svg"), t = Ha("path"), an(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), an(e, "width", "100%"), an(e, "height", "100%"), an(e, "viewBox", "0 0 24 24"), an(e, "fill", "none"), an(e, "stroke", "currentColor"), an(e, "stroke-width", "2"), ol(e, "fill-rule", "evenodd"), ol(e, "clip-rule", "evenodd"), ol(e, "stroke-linecap", "round"), ol(e, "stroke-linejoin", "round"), an(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      ng(n, e, l), $0(e, t);
    },
    p: Ao,
    i: Ao,
    o: Ao,
    d(n) {
      n && eg(e);
    }
  };
}
class og extends x0 {
  constructor(e) {
    super(), tg(this, e, null, lg, ig, {});
  }
}
const {
  SvelteComponent: sg,
  append: Ta,
  attr: Wo,
  bubble: ja,
  create_component: ag,
  destroy_component: rg,
  detach: zc,
  element: Fa,
  init: cg,
  insert: Dc,
  listen: Ro,
  mount_component: _g,
  run_all: ug,
  safe_not_equal: fg,
  set_data: dg,
  set_input_value: Oa,
  space: hg,
  text: mg,
  transition_in: gg,
  transition_out: bg
} = window.__gradio__svelte__internal, { createEventDispatcher: pg, afterUpdate: vg } = window.__gradio__svelte__internal;
function wg(i) {
  let e;
  return {
    c() {
      e = mg(
        /*label*/
        i[1]
      );
    },
    m(t, n) {
      Dc(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && dg(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && zc(e);
    }
  };
}
function kg(i) {
  let e, t, n, l, o, s, r;
  return t = new Rr({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[2]
      ),
      $$slots: { default: [wg] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      e = Fa("label"), ag(t.$$.fragment), n = hg(), l = Fa("input"), Wo(l, "type", "color"), l.disabled = /*disabled*/
      i[3], Wo(l, "class", "svelte-16l8u73"), Wo(e, "class", "block");
    },
    m(a, c) {
      Dc(a, e, c), _g(t, e, null), Ta(e, n), Ta(e, l), Oa(
        l,
        /*value*/
        i[0]
      ), o = !0, s || (r = [
        Ro(
          l,
          "input",
          /*input_input_handler*/
          i[8]
        ),
        Ro(
          l,
          "focus",
          /*focus_handler*/
          i[6]
        ),
        Ro(
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
      1 && Oa(
        l,
        /*value*/
        a[0]
      );
    },
    i(a) {
      o || (gg(t.$$.fragment, a), o = !0);
    },
    o(a) {
      bg(t.$$.fragment, a), o = !1;
    },
    d(a) {
      a && zc(e), rg(t), s = !1, ug(r);
    }
  };
}
function yg(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: l = !1 } = e, { label: o } = e, { info: s = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const c = pg();
  function _() {
    c("change", n), l || c("input");
  }
  vg(() => {
    t(5, l = !1);
  });
  function f(b) {
    ja.call(this, i, b);
  }
  function d(b) {
    ja.call(this, i, b);
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
class Cg extends sg {
  constructor(e) {
    super(), cg(this, e, yg, kg, fg, {
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
  SvelteComponent: my,
  append: gy,
  attr: by,
  component_subscribe: py,
  detach: vy,
  element: wy,
  init: ky,
  insert: yy,
  noop: Cy,
  safe_not_equal: Sy,
  set_style: qy,
  svg_element: zy,
  toggle_class: Dy
} = window.__gradio__svelte__internal, { onMount: By } = window.__gradio__svelte__internal, {
  SvelteComponent: My,
  append: Ey,
  attr: Ly,
  binding_callbacks: Ay,
  check_outros: Wy,
  create_component: Ry,
  create_slot: Xy,
  destroy_component: Yy,
  destroy_each: Iy,
  detach: Hy,
  element: Ty,
  empty: jy,
  ensure_array_like: Fy,
  get_all_dirty_from_scope: Oy,
  get_slot_changes: Py,
  group_outros: Uy,
  init: Vy,
  insert: Ny,
  mount_component: Ky,
  noop: Zy,
  safe_not_equal: Gy,
  set_data: Jy,
  set_style: Qy,
  space: xy,
  text: $y,
  toggle_class: eC,
  transition_in: tC,
  transition_out: nC,
  update_slot_base: iC
} = window.__gradio__svelte__internal, { tick: lC } = window.__gradio__svelte__internal, { onDestroy: oC } = window.__gradio__svelte__internal, {
  SvelteComponent: sC,
  add_render_callback: aC,
  append: rC,
  attr: cC,
  bubble: _C,
  check_outros: uC,
  create_component: fC,
  create_in_transition: dC,
  create_out_transition: hC,
  destroy_component: mC,
  detach: gC,
  element: bC,
  group_outros: pC,
  init: vC,
  insert: wC,
  listen: kC,
  mount_component: yC,
  run_all: CC,
  safe_not_equal: SC,
  set_data: qC,
  space: zC,
  stop_propagation: DC,
  text: BC,
  transition_in: MC,
  transition_out: EC
} = window.__gradio__svelte__internal, { createEventDispatcher: LC, onMount: AC } = window.__gradio__svelte__internal, {
  SvelteComponent: WC,
  append: RC,
  attr: XC,
  bubble: YC,
  check_outros: IC,
  create_animation: HC,
  create_component: TC,
  destroy_component: jC,
  detach: FC,
  element: OC,
  ensure_array_like: PC,
  fix_and_outro_and_destroy_block: UC,
  fix_position: VC,
  group_outros: NC,
  init: KC,
  insert: ZC,
  mount_component: GC,
  noop: JC,
  safe_not_equal: QC,
  set_style: xC,
  space: $C,
  transition_in: eS,
  transition_out: tS,
  update_keyed_each: nS
} = window.__gradio__svelte__internal, {
  SvelteComponent: iS,
  attr: lS,
  detach: oS,
  element: sS,
  init: aS,
  insert: rS,
  noop: cS,
  safe_not_equal: _S,
  set_style: uS,
  toggle_class: fS
} = window.__gradio__svelte__internal, {
  SvelteComponent: dS,
  add_flush_callback: hS,
  assign: mS,
  bind: gS,
  binding_callbacks: bS,
  create_component: pS,
  destroy_component: vS,
  detach: wS,
  flush: kS,
  get_spread_object: yS,
  get_spread_update: CS,
  init: SS,
  insert: qS,
  mount_component: zS,
  safe_not_equal: DS,
  space: BS,
  transition_in: MS,
  transition_out: ES
} = window.__gradio__svelte__internal;
var Bc = (i) => {
  throw TypeError(i);
}, Mc = (i, e, t) => e.has(i) || Bc("Cannot " + t), wi = (i, e, t) => (Mc(i, e, "read from private field"), e.get(i)), Sg = (i, e, t) => e.has(i) ? Bc("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), qg = (i, e, t, n) => (Mc(i, e, "write to private field"), e.set(i, t), t);
new Intl.Collator(0, { numeric: 1 }).compare;
typeof process < "u" && process.versions && process.versions.node;
var un;
class LS extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = wi(this, un) + t; ; ) {
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
        qg(this, un, t);
      },
      flush: (t) => {
        if (wi(this, un) === "")
          return;
        const n = e.allowCR && wi(this, un).endsWith("\r") ? wi(this, un).slice(0, -1) : wi(this, un);
        t.enqueue(n);
      }
    }), Sg(this, un, "");
  }
}
un = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: zg,
  append: Ec,
  attr: me,
  bubble: Dg,
  check_outros: Bg,
  create_slot: Lc,
  detach: Hi,
  element: jl,
  empty: Mg,
  get_all_dirty_from_scope: Ac,
  get_slot_changes: Wc,
  group_outros: Eg,
  init: Lg,
  insert: Ti,
  listen: Ag,
  safe_not_equal: Wg,
  set_style: Ze,
  space: Rc,
  src_url_equal: Sl,
  toggle_class: ti,
  transition_in: ql,
  transition_out: zl,
  update_slot_base: Xc
} = window.__gradio__svelte__internal;
function Rg(i) {
  let e, t, n, l, o, s, r = (
    /*icon*/
    i[7] && Pa(i)
  );
  const a = (
    /*#slots*/
    i[12].default
  ), c = Lc(
    a,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = jl("button"), r && r.c(), t = Rc(), c && c.c(), me(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), me(
        e,
        "id",
        /*elem_id*/
        i[0]
      ), e.disabled = /*disabled*/
      i[8], ti(e, "hidden", !/*visible*/
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
      Ti(_, e, f), r && r.m(e, null), Ec(e, t), c && c.m(e, null), l = !0, o || (s = Ag(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), o = !0);
    },
    p(_, f) {
      /*icon*/
      _[7] ? r ? r.p(_, f) : (r = Pa(_), r.c(), r.m(e, t)) : r && (r.d(1), r = null), c && c.p && (!l || f & /*$$scope*/
      2048) && Xc(
        c,
        a,
        _,
        /*$$scope*/
        _[11],
        l ? Wc(
          a,
          /*$$scope*/
          _[11],
          f,
          null
        ) : Ac(
          /*$$scope*/
          _[11]
        ),
        null
      ), (!l || f & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      _[4] + " " + /*variant*/
      _[3] + " " + /*elem_classes*/
      _[1].join(" ") + " svelte-8huxfn")) && me(e, "class", n), (!l || f & /*elem_id*/
      1) && me(
        e,
        "id",
        /*elem_id*/
        _[0]
      ), (!l || f & /*disabled*/
      256) && (e.disabled = /*disabled*/
      _[8]), (!l || f & /*size, variant, elem_classes, visible*/
      30) && ti(e, "hidden", !/*visible*/
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
      l || (ql(c, _), l = !0);
    },
    o(_) {
      zl(c, _), l = !1;
    },
    d(_) {
      _ && Hi(e), r && r.d(), c && c.d(_), o = !1, s();
    }
  };
}
function Xg(i) {
  let e, t, n, l, o = (
    /*icon*/
    i[7] && Ua(i)
  );
  const s = (
    /*#slots*/
    i[12].default
  ), r = Lc(
    s,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = jl("a"), o && o.c(), t = Rc(), r && r.c(), me(
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
      ), ti(e, "hidden", !/*visible*/
      i[2]), ti(
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
      Ti(a, e, c), o && o.m(e, null), Ec(e, t), r && r.m(e, null), l = !0;
    },
    p(a, c) {
      /*icon*/
      a[7] ? o ? o.p(a, c) : (o = Ua(a), o.c(), o.m(e, t)) : o && (o.d(1), o = null), r && r.p && (!l || c & /*$$scope*/
      2048) && Xc(
        r,
        s,
        a,
        /*$$scope*/
        a[11],
        l ? Wc(
          s,
          /*$$scope*/
          a[11],
          c,
          null
        ) : Ac(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!l || c & /*link*/
      64) && me(
        e,
        "href",
        /*link*/
        a[6]
      ), (!l || c & /*disabled*/
      256) && me(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!l || c & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && me(e, "class", n), (!l || c & /*elem_id*/
      1) && me(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!l || c & /*size, variant, elem_classes, visible*/
      30) && ti(e, "hidden", !/*visible*/
      a[2]), (!l || c & /*size, variant, elem_classes, disabled*/
      282) && ti(
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
      l || (ql(r, a), l = !0);
    },
    o(a) {
      zl(r, a), l = !1;
    },
    d(a) {
      a && Hi(e), o && o.d(), r && r.d(a);
    }
  };
}
function Pa(i) {
  let e, t, n;
  return {
    c() {
      e = jl("img"), me(e, "class", "button-icon svelte-8huxfn"), Sl(e.src, t = /*icon*/
      i[7].url) || me(e, "src", t), me(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, o) {
      Ti(l, e, o);
    },
    p(l, o) {
      o & /*icon*/
      128 && !Sl(e.src, t = /*icon*/
      l[7].url) && me(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && me(e, "alt", n);
    },
    d(l) {
      l && Hi(e);
    }
  };
}
function Ua(i) {
  let e, t, n;
  return {
    c() {
      e = jl("img"), me(e, "class", "button-icon svelte-8huxfn"), Sl(e.src, t = /*icon*/
      i[7].url) || me(e, "src", t), me(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, o) {
      Ti(l, e, o);
    },
    p(l, o) {
      o & /*icon*/
      128 && !Sl(e.src, t = /*icon*/
      l[7].url) && me(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && me(e, "alt", n);
    },
    d(l) {
      l && Hi(e);
    }
  };
}
function Yg(i) {
  let e, t, n, l;
  const o = [Xg, Rg], s = [];
  function r(a, c) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(i), t = s[e] = o[e](i), {
    c() {
      t.c(), n = Mg();
    },
    m(a, c) {
      s[e].m(a, c), Ti(a, n, c), l = !0;
    },
    p(a, [c]) {
      let _ = e;
      e = r(a), e === _ ? s[e].p(a, c) : (Eg(), zl(s[_], 1, 1, () => {
        s[_] = null;
      }), Bg(), t = s[e], t ? t.p(a, c) : (t = s[e] = o[e](a), t.c()), ql(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (ql(t), l = !0);
    },
    o(a) {
      zl(t), l = !1;
    },
    d(a) {
      a && Hi(n), s[e].d(a);
    }
  };
}
function Ig(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { elem_id: o = "" } = e, { elem_classes: s = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: c = "lg" } = e, { value: _ = null } = e, { link: f = null } = e, { icon: d = null } = e, { disabled: h = !1 } = e, { scale: b = null } = e, { min_width: u = void 0 } = e;
  function m(g) {
    Dg.call(this, i, g);
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
class ns extends zg {
  constructor(e) {
    super(), Lg(this, e, Ig, Yg, Wg, {
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
  SvelteComponent: AS,
  create_component: WS,
  destroy_component: RS,
  detach: XS,
  init: YS,
  insert: IS,
  mount_component: HS,
  safe_not_equal: TS,
  set_data: jS,
  text: FS,
  transition_in: OS,
  transition_out: PS
} = window.__gradio__svelte__internal, {
  SvelteComponent: Hg,
  add_render_callback: Yc,
  append: sl,
  attr: it,
  binding_callbacks: Va,
  check_outros: Tg,
  create_bidirectional_transition: Na,
  destroy_each: jg,
  detach: Wi,
  element: Dl,
  empty: Fg,
  ensure_array_like: Ka,
  group_outros: Og,
  init: Pg,
  insert: Ri,
  listen: is,
  prevent_default: Ug,
  run_all: Vg,
  safe_not_equal: Ng,
  set_data: Kg,
  set_style: Zn,
  space: ls,
  text: Zg,
  toggle_class: Wt,
  transition_in: Xo,
  transition_out: Za
} = window.__gradio__svelte__internal, { createEventDispatcher: Gg } = window.__gradio__svelte__internal;
function Ga(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function Ja(i) {
  let e, t, n, l, o, s = Ka(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < s.length; a += 1)
    r[a] = Qa(Ga(i, s, a));
  return {
    c() {
      e = Dl("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      it(e, "class", "options svelte-yuohum"), it(e, "role", "listbox"), Zn(
        e,
        "bottom",
        /*bottom*/
        i[9]
      ), Zn(e, "max-height", `calc(${/*max_height*/
      i[10]}px - var(--window-padding))`), Zn(
        e,
        "width",
        /*input_width*/
        i[8] + "px"
      );
    },
    m(a, c) {
      Ri(a, e, c);
      for (let _ = 0; _ < r.length; _ += 1)
        r[_] && r[_].m(e, null);
      i[22](e), n = !0, l || (o = is(e, "mousedown", Ug(
        /*mousedown_handler*/
        i[21]
      )), l = !0);
    },
    p(a, c) {
      if (c & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        s = Ka(
          /*filtered_indices*/
          a[1]
        );
        let _;
        for (_ = 0; _ < s.length; _ += 1) {
          const f = Ga(a, s, _);
          r[_] ? r[_].p(f, c) : (r[_] = Qa(f), r[_].c(), r[_].m(e, null));
        }
        for (; _ < r.length; _ += 1)
          r[_].d(1);
        r.length = s.length;
      }
      c & /*bottom*/
      512 && Zn(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), c & /*max_height*/
      1024 && Zn(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), c & /*input_width*/
      256 && Zn(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && Yc(() => {
        n && (t || (t = Na(e, $s, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = Na(e, $s, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && Wi(e), jg(r, a), i[22](null), a && t && t.end(), l = !1, o();
    }
  };
}
function Qa(i) {
  let e, t, n, l = (
    /*choices*/
    i[0][
      /*index*/
      i[26]
    ][0] + ""
  ), o, s, r, a, c;
  return {
    c() {
      e = Dl("li"), t = Dl("span"), t.textContent = "✓", n = ls(), o = Zg(l), s = ls(), it(t, "class", "inner-item svelte-yuohum"), Wt(t, "hide", !/*selected_indices*/
      i[4].includes(
        /*index*/
        i[26]
      )), it(e, "class", "item svelte-yuohum"), it(e, "data-index", r = /*index*/
      i[26]), it(e, "aria-label", a = /*choices*/
      i[0][
        /*index*/
        i[26]
      ][0]), it(e, "data-testid", "dropdown-option"), it(e, "role", "option"), it(e, "aria-selected", c = /*selected_indices*/
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
      Ri(_, e, f), sl(e, t), sl(e, n), sl(e, o), sl(e, s);
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
      ][0] + "") && Kg(o, l), f & /*filtered_indices*/
      2 && r !== (r = /*index*/
      _[26]) && it(e, "data-index", r), f & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      _[0][
        /*index*/
        _[26]
      ][0]) && it(e, "aria-label", a), f & /*selected_indices, filtered_indices*/
      18 && c !== (c = /*selected_indices*/
      _[4].includes(
        /*index*/
        _[26]
      )) && it(e, "aria-selected", c), f & /*selected_indices, filtered_indices*/
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
      _ && Wi(e);
    }
  };
}
function Jg(i) {
  let e, t, n, l, o;
  Yc(
    /*onwindowresize*/
    i[19]
  );
  let s = (
    /*show_options*/
    i[2] && !/*disabled*/
    i[3] && Ja(i)
  );
  return {
    c() {
      e = Dl("div"), t = ls(), s && s.c(), n = Fg(), it(e, "class", "reference");
    },
    m(r, a) {
      Ri(r, e, a), i[20](e), Ri(r, t, a), s && s.m(r, a), Ri(r, n, a), l || (o = [
        is(
          window,
          "scroll",
          /*scroll_listener*/
          i[12]
        ),
        is(
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
      12 && Xo(s, 1)) : (s = Ja(r), s.c(), Xo(s, 1), s.m(n.parentNode, n)) : s && (Og(), Za(s, 1, 1, () => {
        s = null;
      }), Tg());
    },
    i(r) {
      Xo(s);
    },
    o(r) {
      Za(s);
    },
    d(r) {
      r && (Wi(e), Wi(t), Wi(n)), i[20](null), s && s.d(r), l = !1, Vg(o);
    }
  };
}
function Qg(i, e, t) {
  var n, l;
  let { choices: o } = e, { filtered_indices: s } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: c = [] } = e, { active_index: _ = null } = e, f, d, h, b, u, m, g, w, p;
  function y() {
    const { top: X, bottom: C } = u.getBoundingClientRect();
    t(16, f = X), t(17, d = p - C);
  }
  let D = null;
  function k() {
    r && (D !== null && clearTimeout(D), D = setTimeout(
      () => {
        y(), D = null;
      },
      10
    ));
  }
  const q = Gg();
  function z() {
    t(11, p = window.innerHeight);
  }
  function M(X) {
    Va[X ? "unshift" : "push"](() => {
      u = X, t(6, u);
    });
  }
  const S = (X) => q("change", X);
  function E(X) {
    Va[X ? "unshift" : "push"](() => {
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
    q,
    n,
    l,
    f,
    d,
    h,
    z,
    M,
    S,
    E
  ];
}
class xg extends Hg {
  constructor(e) {
    super(), Pg(this, e, Qg, Jg, Ng, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function $g(i, e) {
  return (i % e + e) % e;
}
function xa(i, e) {
  return i.reduce((t, n, l) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(l), t), []);
}
function eb(i, e, t) {
  i("change", e), t || i("input");
}
function tb(i, e, t) {
  if (i.key === "Escape")
    return [!1, e];
  if ((i.key === "ArrowDown" || i.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = i.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), l = i.key === "ArrowUp" ? -1 : 1;
      e = t[$g(n + l, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: US,
  append: VS,
  attr: NS,
  binding_callbacks: KS,
  check_outros: ZS,
  create_component: GS,
  destroy_component: JS,
  destroy_each: QS,
  detach: xS,
  element: $S,
  ensure_array_like: eq,
  group_outros: tq,
  init: nq,
  insert: iq,
  listen: lq,
  mount_component: oq,
  prevent_default: sq,
  run_all: aq,
  safe_not_equal: rq,
  set_data: cq,
  set_input_value: _q,
  space: uq,
  text: fq,
  toggle_class: dq,
  transition_in: hq,
  transition_out: mq
} = window.__gradio__svelte__internal, { afterUpdate: gq, createEventDispatcher: bq } = window.__gradio__svelte__internal, {
  SvelteComponent: nb,
  append: yn,
  attr: nt,
  binding_callbacks: ib,
  check_outros: lb,
  create_component: os,
  destroy_component: ss,
  detach: ps,
  element: Qn,
  group_outros: ob,
  init: sb,
  insert: vs,
  listen: ki,
  mount_component: as,
  run_all: ab,
  safe_not_equal: rb,
  set_data: cb,
  set_input_value: $a,
  space: Yo,
  text: _b,
  toggle_class: Gn,
  transition_in: xn,
  transition_out: Ei
} = window.__gradio__svelte__internal, { onMount: ub } = window.__gradio__svelte__internal, { createEventDispatcher: fb, afterUpdate: db } = window.__gradio__svelte__internal;
function hb(i) {
  let e;
  return {
    c() {
      e = _b(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      vs(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && cb(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && ps(e);
    }
  };
}
function er(i) {
  let e, t, n;
  return t = new _s({}), {
    c() {
      e = Qn("div"), os(t.$$.fragment), nt(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(l, o) {
      vs(l, e, o), as(t, e, null), n = !0;
    },
    i(l) {
      n || (xn(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Ei(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && ps(e), ss(t);
    }
  };
}
function mb(i) {
  let e, t, n, l, o, s, r, a, c, _, f, d, h, b;
  t = new Rr({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[1]
      ),
      $$slots: { default: [hb] },
      $$scope: { ctx: i }
    }
  });
  let u = !/*disabled*/
  i[3] && er();
  return f = new xg({
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
      e = Qn("div"), os(t.$$.fragment), n = Yo(), l = Qn("div"), o = Qn("div"), s = Qn("div"), r = Qn("input"), c = Yo(), u && u.c(), _ = Yo(), os(f.$$.fragment), nt(r, "role", "listbox"), nt(r, "aria-controls", "dropdown-options"), nt(
        r,
        "aria-expanded",
        /*show_options*/
        i[12]
      ), nt(
        r,
        "aria-label",
        /*label*/
        i[0]
      ), nt(r, "class", "border-none svelte-1m1zvyj"), r.disabled = /*disabled*/
      i[3], nt(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      i[7], Gn(r, "subdued", !/*choices_names*/
      i[13].includes(
        /*input_text*/
        i[9]
      ) && !/*allow_custom_value*/
      i[6]), nt(s, "class", "secondary-wrap svelte-1m1zvyj"), nt(o, "class", "wrap-inner svelte-1m1zvyj"), Gn(
        o,
        "show_options",
        /*show_options*/
        i[12]
      ), nt(l, "class", "wrap svelte-1m1zvyj"), nt(e, "class", "svelte-1m1zvyj"), Gn(
        e,
        "container",
        /*container*/
        i[5]
      );
    },
    m(m, g) {
      vs(m, e, g), as(t, e, null), yn(e, n), yn(e, l), yn(l, o), yn(o, s), yn(s, r), $a(
        r,
        /*input_text*/
        i[9]
      ), i[29](r), yn(s, c), u && u.m(s, null), yn(l, _), as(f, l, null), d = !0, h || (b = [
        ki(
          r,
          "input",
          /*input_input_handler*/
          i[28]
        ),
        ki(
          r,
          "keydown",
          /*handle_key_down*/
          i[19]
        ),
        ki(
          r,
          "keyup",
          /*keyup_handler*/
          i[30]
        ),
        ki(
          r,
          "blur",
          /*handle_blur*/
          i[18]
        ),
        ki(
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
      4096) && nt(
        r,
        "aria-expanded",
        /*show_options*/
        m[12]
      ), (!d || g[0] & /*label*/
      1) && nt(
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
      m[9] && $a(
        r,
        /*input_text*/
        m[9]
      ), (!d || g[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && Gn(r, "subdued", !/*choices_names*/
      m[13].includes(
        /*input_text*/
        m[9]
      ) && !/*allow_custom_value*/
      m[6]), /*disabled*/
      m[3] ? u && (ob(), Ei(u, 1, 1, () => {
        u = null;
      }), lb()) : u ? g[0] & /*disabled*/
      8 && xn(u, 1) : (u = er(), u.c(), xn(u, 1), u.m(s, null)), (!d || g[0] & /*show_options*/
      4096) && Gn(
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
      32) && Gn(
        e,
        "container",
        /*container*/
        m[5]
      );
    },
    i(m) {
      d || (xn(t.$$.fragment, m), xn(u), xn(f.$$.fragment, m), d = !0);
    },
    o(m) {
      Ei(t.$$.fragment, m), Ei(u), Ei(f.$$.fragment, m), d = !1;
    },
    d(m) {
      m && ps(e), ss(t), i[29](null), u && u.d(), ss(f), h = !1, ab(b);
    }
  };
}
function gb(i, e, t) {
  let { label: n } = e, { info: l = void 0 } = e, { value: o = [] } = e, s = [], { value_is_output: r = !1 } = e, { choices: a } = e, c, { disabled: _ = !1 } = e, { show_label: f } = e, { container: d = !0 } = e, { allow_custom_value: h = !1 } = e, { filterable: b = !0 } = e, u, m = !1, g, w, p = "", y = "", D = !1, k = [], q = null, z = null, M;
  const S = fb();
  o ? (M = a.map((I) => I[1]).indexOf(o), z = M, z === -1 ? (s = o, z = null) : ([p, s] = a[z], y = p), X()) : a.length > 0 && (M = 0, z = 0, [p, o] = a[z], s = o, y = p);
  function E() {
    t(13, g = a.map((I) => I[0])), t(24, w = a.map((I) => I[1]));
  }
  function X() {
    E(), o === void 0 || Array.isArray(o) && o.length === 0 ? (t(9, p = ""), t(11, z = null)) : w.includes(o) ? (t(9, p = g[w.indexOf(o)]), t(11, z = w.indexOf(o))) : h ? (t(9, p = o), t(11, z = null)) : (t(9, p = ""), t(11, z = null)), t(27, M = z);
  }
  function C(I) {
    if (t(11, z = parseInt(I.detail.target.dataset.index)), isNaN(z)) {
      t(11, z = null);
      return;
    }
    t(12, m = !1), t(14, q = null), u.blur();
  }
  function ee(I) {
    t(10, k = a.map((U, Y) => Y)), t(12, m = !0), S("focus");
  }
  function J() {
    h ? t(20, o = p) : t(9, p = g[w.indexOf(o)]), t(12, m = !1), t(14, q = null), S("blur");
  }
  function x(I) {
    t(12, [m, q] = tb(I, q, k), m, (t(14, q), t(2, a), t(23, c), t(6, h), t(9, p), t(10, k), t(8, u), t(25, y), t(11, z), t(27, M), t(26, D), t(24, w))), I.key === "Enter" && (q !== null ? (t(11, z = q), t(12, m = !1), u.blur(), t(14, q = null)) : g.includes(p) ? (t(11, z = g.indexOf(p)), t(12, m = !1), t(14, q = null), u.blur()) : h && (t(20, o = p), t(11, z = null), t(12, m = !1), t(14, q = null), u.blur()), S("enter", o));
  }
  db(() => {
    t(21, r = !1), t(26, D = !0);
  }), ub(() => {
    u.focus();
  });
  function G() {
    p = this.value, t(9, p), t(11, z), t(27, M), t(26, D), t(2, a), t(24, w);
  }
  function W(I) {
    ib[I ? "unshift" : "push"](() => {
      u = I, t(8, u);
    });
  }
  const F = (I) => S("key_up", { key: I.key, input_value: p });
  return i.$$set = (I) => {
    "label" in I && t(0, n = I.label), "info" in I && t(1, l = I.info), "value" in I && t(20, o = I.value), "value_is_output" in I && t(21, r = I.value_is_output), "choices" in I && t(2, a = I.choices), "disabled" in I && t(3, _ = I.disabled), "show_label" in I && t(4, f = I.show_label), "container" in I && t(5, d = I.container), "allow_custom_value" in I && t(6, h = I.allow_custom_value), "filterable" in I && t(7, b = I.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && z !== M && z !== null && D && (t(9, [p, o] = a[z], p, (t(20, o), t(11, z), t(27, M), t(26, D), t(2, a), t(24, w))), t(27, M = z), S("select", {
      index: z,
      value: w[z],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && o != s && (X(), eb(S, o, r), t(22, s = o)), i.$$.dirty[0] & /*choices*/
    4 && E(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== c && (h || X(), t(23, c = a), t(10, k = xa(a, p)), !h && k.length > 0 && t(14, q = k[0]), u == document.activeElement && t(12, m = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && p !== y && (t(10, k = xa(a, p)), t(25, y = p), !h && k.length > 0 && t(14, q = k[0]));
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
    z,
    m,
    g,
    q,
    S,
    C,
    ee,
    J,
    x,
    o,
    r,
    s,
    c,
    w,
    y,
    D,
    M,
    G,
    W,
    F
  ];
}
class bb extends nb {
  constructor(e) {
    super(), sb(
      this,
      e,
      gb,
      mb,
      rb,
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
  SvelteComponent: pq,
  attr: vq,
  detach: wq,
  element: kq,
  init: yq,
  insert: Cq,
  noop: Sq,
  safe_not_equal: qq,
  toggle_class: zq
} = window.__gradio__svelte__internal, {
  SvelteComponent: Dq,
  add_flush_callback: Bq,
  assign: Mq,
  bind: Eq,
  binding_callbacks: Lq,
  check_outros: Aq,
  create_component: Wq,
  destroy_component: Rq,
  detach: Xq,
  empty: Yq,
  get_spread_object: Iq,
  get_spread_update: Hq,
  group_outros: Tq,
  init: jq,
  insert: Fq,
  mount_component: Oq,
  safe_not_equal: Pq,
  space: Uq,
  transition_in: Vq,
  transition_out: Nq
} = window.__gradio__svelte__internal, {
  SvelteComponent: pb,
  append: ft,
  attr: ni,
  check_outros: rs,
  create_component: Mn,
  destroy_component: En,
  detach: di,
  element: Rt,
  group_outros: cs,
  init: vb,
  insert: hi,
  listen: wb,
  mount_component: Ln,
  safe_not_equal: kb,
  set_style: ii,
  space: yi,
  text: ws,
  toggle_class: tr,
  transition_in: Ie,
  transition_out: lt
} = window.__gradio__svelte__internal, { createEventDispatcher: yb } = window.__gradio__svelte__internal, { onMount: Cb } = window.__gradio__svelte__internal;
function nr(i) {
  let e, t, n, l, o, s, r;
  const a = [qb, Sb], c = [];
  function _(f, d) {
    return (
      /*labelDetailLock*/
      f[2] ? 0 : 1
    );
  }
  return n = _(i), l = c[n] = a[n](i), {
    c() {
      e = Rt("div"), t = Rt("button"), l.c(), ni(t, "class", "icon svelte-d9x7u0"), ni(t, "aria-label", "Lock label detail"), tr(
        t,
        "selected",
        /*labelDetailLock*/
        i[2] === !0
      ), ii(e, "margin-right", "8px");
    },
    m(f, d) {
      hi(f, e, d), ft(e, t), c[n].m(t, null), o = !0, s || (r = wb(
        t,
        "click",
        /*onLockClick*/
        i[9]
      ), s = !0);
    },
    p(f, d) {
      let h = n;
      n = _(f), n !== h && (cs(), lt(c[h], 1, 1, () => {
        c[h] = null;
      }), rs(), l = c[n], l || (l = c[n] = a[n](f), l.c()), Ie(l, 1), l.m(t, null)), (!o || d & /*labelDetailLock*/
      4) && tr(
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
      lt(l), o = !1;
    },
    d(f) {
      f && di(e), c[n].d(), s = !1, r();
    }
  };
}
function Sb(i) {
  let e, t;
  return e = new og({}), {
    c() {
      Mn(e.$$.fragment);
    },
    m(n, l) {
      Ln(e, n, l), t = !0;
    },
    i(n) {
      t || (Ie(e.$$.fragment, n), t = !0);
    },
    o(n) {
      lt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      En(e, n);
    }
  };
}
function qb(i) {
  let e, t;
  return e = new Q0({}), {
    c() {
      Mn(e.$$.fragment);
    },
    m(n, l) {
      Ln(e, n, l), t = !0;
    },
    i(n) {
      t || (Ie(e.$$.fragment, n), t = !0);
    },
    o(n) {
      lt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      En(e, n);
    }
  };
}
function zb(i) {
  let e;
  return {
    c() {
      e = ws("Cancel");
    },
    m(t, n) {
      hi(t, e, n);
    },
    d(t) {
      t && di(e);
    }
  };
}
function ir(i) {
  let e, t, n;
  return t = new ns({
    props: {
      variant: "stop",
      $$slots: { default: [Db] },
      $$scope: { ctx: i }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    i[14]
  ), {
    c() {
      e = Rt("div"), Mn(t.$$.fragment), ii(e, "margin-right", "8px");
    },
    m(l, o) {
      hi(l, e, o), Ln(t, e, null), n = !0;
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
      lt(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && di(e), En(t);
    }
  };
}
function Db(i) {
  let e;
  return {
    c() {
      e = ws("Remove");
    },
    m(t, n) {
      hi(t, e, n);
    },
    d(t) {
      t && di(e);
    }
  };
}
function Bb(i) {
  let e;
  return {
    c() {
      e = ws("OK");
    },
    m(t, n) {
      hi(t, e, n);
    },
    d(t) {
      t && di(e);
    }
  };
}
function Mb(i) {
  let e, t, n, l, o, s, r, a, c, _, f, d, h, b, u, m, g, w = !/*showRemove*/
  i[4] && nr(i);
  s = new bb({
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
  ), c = new Cg({
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
  ), d = new ns({
    props: {
      $$slots: { default: [zb] },
      $$scope: { ctx: i }
    }
  }), d.$on(
    "click",
    /*click_handler*/
    i[13]
  );
  let p = (
    /*showRemove*/
    i[4] && ir(i)
  );
  return m = new ns({
    props: {
      variant: "primary",
      $$slots: { default: [Bb] },
      $$scope: { ctx: i }
    }
  }), m.$on(
    "click",
    /*click_handler_2*/
    i[15]
  ), {
    c() {
      e = Rt("div"), t = Rt("div"), n = Rt("span"), w && w.c(), l = yi(), o = Rt("div"), Mn(s.$$.fragment), r = yi(), a = Rt("div"), Mn(c.$$.fragment), _ = yi(), f = Rt("div"), Mn(d.$$.fragment), h = yi(), p && p.c(), b = yi(), u = Rt("div"), Mn(m.$$.fragment), ii(o, "margin-right", "10px"), ii(a, "margin-right", "40px"), ii(a, "margin-bottom", "8px"), ii(f, "margin-right", "8px"), ni(n, "class", "model-content svelte-d9x7u0"), ni(t, "class", "modal-container svelte-d9x7u0"), ni(e, "class", "modal svelte-d9x7u0"), ni(e, "id", "model-box-edit");
    },
    m(y, D) {
      hi(y, e, D), ft(e, t), ft(t, n), w && w.m(n, null), ft(n, l), ft(n, o), Ln(s, o, null), ft(n, r), ft(n, a), Ln(c, a, null), ft(n, _), ft(n, f), Ln(d, f, null), ft(n, h), p && p.m(n, null), ft(n, b), ft(n, u), Ln(m, u, null), g = !0;
    },
    p(y, [D]) {
      /*showRemove*/
      y[4] ? w && (cs(), lt(w, 1, 1, () => {
        w = null;
      }), rs()) : w ? (w.p(y, D), D & /*showRemove*/
      16 && Ie(w, 1)) : (w = nr(y), w.c(), Ie(w, 1), w.m(n, l));
      const k = {};
      D & /*currentLabel*/
      1 && (k.value = /*currentLabel*/
      y[0]), D & /*choices*/
      8 && (k.choices = /*choices*/
      y[3]), s.$set(k);
      const q = {};
      D & /*currentColor*/
      2 && (q.value = /*currentColor*/
      y[1]), c.$set(q);
      const z = {};
      D & /*$$scope*/
      262144 && (z.$$scope = { dirty: D, ctx: y }), d.$set(z), /*showRemove*/
      y[4] ? p ? (p.p(y, D), D & /*showRemove*/
      16 && Ie(p, 1)) : (p = ir(y), p.c(), Ie(p, 1), p.m(n, b)) : p && (cs(), lt(p, 1, 1, () => {
        p = null;
      }), rs());
      const M = {};
      D & /*$$scope*/
      262144 && (M.$$scope = { dirty: D, ctx: y }), m.$set(M);
    },
    i(y) {
      g || (Ie(w), Ie(s.$$.fragment, y), Ie(c.$$.fragment, y), Ie(d.$$.fragment, y), Ie(p), Ie(m.$$.fragment, y), g = !0);
    },
    o(y) {
      lt(w), lt(s.$$.fragment, y), lt(c.$$.fragment, y), lt(d.$$.fragment, y), lt(p), lt(m.$$.fragment, y), g = !1;
    },
    d(y) {
      y && di(e), w && w.d(), En(s), En(c), En(d), p && p.d(), En(m);
    }
  };
}
function Eb(i, e, t) {
  let { label: n = "" } = e, { currentLabel: l = "" } = e, { choices: o = [] } = e, { choicesColors: s = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: c = !0 } = e, { labelDetailLock: _ = !1 } = e;
  const f = yb();
  function d(D) {
    f("change", {
      label: l,
      color: a,
      lock: _,
      ret: D
      // -1: remove, 0: cancel, 1: change
    });
  }
  function h(D) {
    const { detail: k } = D;
    let q = k;
    Number.isInteger(q) ? (Array.isArray(s) && q < s.length && t(1, a = s[q]), Array.isArray(o) && q < o.length && t(0, l = o[q][0])) : t(0, l = q);
  }
  function b(D) {
    const { detail: k } = D;
    t(1, a = k);
  }
  function u(D) {
    h(D), d(1);
  }
  function m(D) {
    t(2, _ = !_);
  }
  function g(D) {
    switch (D.key.toLowerCase()) {
      case "enter":
        d(1);
        break;
      case "escape":
        d(0);
        break;
    }
  }
  Cb(() => (document.addEventListener("keydown", g), t(0, l = n), t(1, a = r), () => {
    document.removeEventListener("keydown", g);
  }));
  const w = () => d(0), p = () => d(-1), y = () => d(1);
  return i.$$set = (D) => {
    "label" in D && t(10, n = D.label), "currentLabel" in D && t(0, l = D.currentLabel), "choices" in D && t(3, o = D.choices), "choicesColors" in D && t(11, s = D.choicesColors), "color" in D && t(12, r = D.color), "currentColor" in D && t(1, a = D.currentColor), "showRemove" in D && t(4, c = D.showRemove), "labelDetailLock" in D && t(2, _ = D.labelDetailLock);
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
class ks extends pb {
  constructor(e) {
    super(), vb(this, e, Eb, Mb, kb, {
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
function Io(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, l, o] = t;
  return `rgba(${n}, ${l}, ${o}, ${e})`;
}
class Ho {
  constructor(e, t, n, l, o, s, r, a, c, _, f, d, h, b = "rgb(255, 255, 255)", u = 0.5, m = 25, g = 8, w = 2, p = 4, y = 1) {
    this.resizeHandles = [], this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (D) => {
      if (this.isDragging && this.pointersCache.size === 1) {
        let k = (D.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, q = (D.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const z = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, M = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        k = ze(k, -this._xmin, z - this._xmax), q = ze(q, -this._ymin, M - this._ymax), this._xmin += k, this._ymin += q, this._xmax += k, this._ymax += q, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (D) => {
      if (this.isCreating && this.pointersCache.size === 1) {
        let [k, q] = this.toBoxCoordinates(D.clientX, D.clientY);
        k = (k - this.offsetMouseX) / this.canvasWindow.scale, q = (q - this.offsetMouseY) / this.canvasWindow.scale, k > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = k, this.creatingAnchorX = "xmin") : k > this._xmin && k < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = k : k > this._xmin && k < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = k : k < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = k, this.creatingAnchorX = "xmax"), q > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = q, this.creatingAnchorY = "ymin") : q > this._ymin && q < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = q : q > this._ymin && q < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = q : q < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = q, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (D) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const k = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, q = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = ze(this._xmin, 0, k), this._ymin = ze(this._ymin, 0, q), this._xmax = ze(this._xmax, 0, k), this._ymax = ze(this._ymax, 0, q), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (D) => {
      if (this.isResizing && this.pointersCache.size === 1) {
        const k = D.clientX, q = D.clientY, z = (k - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, M = (q - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, S = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, E = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += z, this._ymin += M, this._xmin = ze(this._xmin, 0, this._xmax), this._ymin = ze(this._ymin, 0, this._ymax);
            break;
          case 1:
            this._xmax += z, this._ymin += M, this._xmax = ze(this._xmax, this._xmin, S), this._ymin = ze(this._ymin, 0, this._ymax);
            break;
          case 2:
            this._xmax += z, this._ymax += M, this._xmax = ze(this._xmax, this._xmin, S), this._ymax = ze(this._ymax, this._ymin, E);
            break;
          case 3:
            this._xmin += z, this._ymax += M, this._xmin = ze(this._xmin, 0, this._xmax), this._ymax = ze(this._ymax, this._ymin, E);
            break;
          case 4:
            this._ymin += M, this._ymin = ze(this._ymin, 0, this._ymax);
            break;
          case 5:
            this._xmax += z, this._xmax = ze(this._xmax, this._xmin, S);
            break;
          case 6:
            this._ymax += M, this._ymax = ze(this._ymax, this._ymin, E);
            break;
          case 7:
            this._xmin += z, this._xmin = ze(this._xmin, 0, this._xmax);
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
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = Io(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = Io(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const l = e.measureText(this.label).width + 10, o = 20;
      let s = this.xmin, r = this.ymin - o;
      e.fillStyle = "white", [s, r] = this.toCanvasCoordinates(s, r), e.fillRect(s, r, l, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(s, r, l, o), e.fillStyle = "black", e.fillText(this.label, s + 5, r + 15);
    }
    e.fillStyle = Io(this.color, 1);
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
const lr = (i, e, t) => Math.min(Math.max(i, e), t);
function or(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, l, o] = t;
  return `rgba(${n}, ${l}, ${o}, ${e})`;
}
class To {
  constructor(e, t, n, l, o, s, r, a, c, _, f = "rgb(255, 255, 255)", d = 0.6, h = 6, b = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (u) => {
      if (this.isDragging && this.pointersCache.size === 1) {
        let m = (u.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._x, g = (u.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._y;
        const w = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, p = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale, y = this.radius / this.canvasWindow.scale;
        m = lr(m, -this._x + y, w - this._x - y), g = lr(g, -this._y + y, p - this._y - y), this._x += m, this._y += g, this.applyUserScale(), this.renderCallBack();
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
    if (e.beginPath(), e.arc(t, n, l, 0, Math.PI * 2), e.fillStyle = or(this.color, this.alpha), e.fill(), e.lineWidth = this.isSelected ? 2 : 1, e.strokeStyle = or(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
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
const ut = [
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
], al = (i, e, t) => Math.min(Math.max(i, e), t);
class Lb {
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
        this.imageWidth * this.scale > this.canvasWidth ? l = al(l, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : l = al(l, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? o = al(o, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : o = al(o, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += l, this.offsetY += o, this.startDragX = n.clientX, this.startDragY = n.clientY, this.renderCallBack();
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
  SvelteComponent: Ab,
  append: Ae,
  attr: oe,
  binding_callbacks: sr,
  bubble: jo,
  check_outros: li,
  create_component: qt,
  destroy_component: zt,
  detach: fn,
  element: ht,
  empty: Wb,
  group_outros: oi,
  init: Rb,
  insert: dn,
  listen: We,
  mount_component: Dt,
  noop: Ic,
  run_all: Hc,
  safe_not_equal: Xb,
  set_style: rl,
  space: St,
  toggle_class: Jn,
  transition_in: se,
  transition_out: he
} = window.__gradio__svelte__internal, { onMount: Yb, createEventDispatcher: Ib } = window.__gradio__svelte__internal;
function ar(i) {
  let e, t, n, l, o, s, r, a, c, _, f, d, h, b, u, m, g, w, p, y, D, k, q, z;
  n = new o0({}), s = new w0({}), c = new B0({}), d = new f0({});
  let M = (
    /*showRemoveButton*/
    i[1] && rr(i)
  ), S = !/*disableEditBoxes*/
  i[5] && /*labelDetailLock*/
  i[15] && cr(i);
  return w = new Hd({}), D = new Cd({}), {
    c() {
      e = ht("span"), t = ht("button"), qt(n.$$.fragment), l = St(), o = ht("button"), qt(s.$$.fragment), r = St(), a = ht("button"), qt(c.$$.fragment), _ = St(), f = ht("button"), qt(d.$$.fragment), b = St(), M && M.c(), u = St(), S && S.c(), m = St(), g = ht("button"), qt(w.$$.fragment), p = St(), y = ht("button"), qt(D.$$.fragment), oe(t, "class", "icon svelte-qvyq26"), oe(t, "aria-label", "Create box"), oe(t, "title", "Create box (C)"), Jn(
        t,
        "selected",
        /*mode*/
        i[9] === /*Mode*/
        i[8].creation
      ), oe(o, "class", "icon svelte-qvyq26"), oe(o, "aria-label", "Create point"), oe(o, "title", "Create point (C)"), Jn(
        o,
        "selected",
        /*mode*/
        i[9] === /*Mode*/
        i[8].point
      ), oe(a, "class", "icon svelte-qvyq26"), oe(a, "aria-label", "Drag boxes"), oe(a, "title", "Drag boxes (D)"), Jn(
        a,
        "selected",
        /*mode*/
        i[9] === /*Mode*/
        i[8].drag
      ), oe(f, "class", "icon svelte-qvyq26"), oe(f, "aria-label", "Clear selection"), oe(f, "title", "Clear selection"), f.disabled = h = !/*selectedAnnotationId*/
      i[0], oe(g, "class", "icon svelte-qvyq26"), oe(g, "aria-label", "Rotate counterclockwise"), oe(g, "title", "Rotate counterclockwise"), oe(y, "class", "icon svelte-qvyq26"), oe(y, "aria-label", "Rotate clockwise"), oe(y, "title", "Rotate clockwise"), oe(e, "class", "canvas-control svelte-qvyq26");
    },
    m(E, X) {
      dn(E, e, X), Ae(e, t), Dt(n, t, null), Ae(e, l), Ae(e, o), Dt(s, o, null), Ae(e, r), Ae(e, a), Dt(c, a, null), Ae(e, _), Ae(e, f), Dt(d, f, null), Ae(e, b), M && M.m(e, null), Ae(e, u), S && S.m(e, null), Ae(e, m), Ae(e, g), Dt(w, g, null), Ae(e, p), Ae(e, y), Dt(D, y, null), k = !0, q || (z = [
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
      ], q = !0);
    },
    p(E, X) {
      (!k || X[0] & /*mode, Mode*/
      768) && Jn(
        t,
        "selected",
        /*mode*/
        E[9] === /*Mode*/
        E[8].creation
      ), (!k || X[0] & /*mode, Mode*/
      768) && Jn(
        o,
        "selected",
        /*mode*/
        E[9] === /*Mode*/
        E[8].point
      ), (!k || X[0] & /*mode, Mode*/
      768) && Jn(
        a,
        "selected",
        /*mode*/
        E[9] === /*Mode*/
        E[8].drag
      ), (!k || X[0] & /*selectedAnnotationId*/
      1 && h !== (h = !/*selectedAnnotationId*/
      E[0])) && (f.disabled = h), /*showRemoveButton*/
      E[1] ? M ? (M.p(E, X), X[0] & /*showRemoveButton*/
      2 && se(M, 1)) : (M = rr(E), M.c(), se(M, 1), M.m(e, u)) : M && (oi(), he(M, 1, 1, () => {
        M = null;
      }), li()), !/*disableEditBoxes*/
      E[5] && /*labelDetailLock*/
      E[15] ? S ? (S.p(E, X), X[0] & /*disableEditBoxes, labelDetailLock*/
      32800 && se(S, 1)) : (S = cr(E), S.c(), se(S, 1), S.m(e, m)) : S && (oi(), he(S, 1, 1, () => {
        S = null;
      }), li());
    },
    i(E) {
      k || (se(n.$$.fragment, E), se(s.$$.fragment, E), se(c.$$.fragment, E), se(d.$$.fragment, E), se(M), se(S), se(w.$$.fragment, E), se(D.$$.fragment, E), k = !0);
    },
    o(E) {
      he(n.$$.fragment, E), he(s.$$.fragment, E), he(c.$$.fragment, E), he(d.$$.fragment, E), he(M), he(S), he(w.$$.fragment, E), he(D.$$.fragment, E), k = !1;
    },
    d(E) {
      E && fn(e), zt(n), zt(s), zt(c), zt(d), M && M.d(), S && S.d(), zt(w), zt(D), q = !1, Hc(z);
    }
  };
}
function rr(i) {
  let e, t, n, l, o;
  return t = new Y0({}), {
    c() {
      e = ht("button"), qt(t.$$.fragment), oe(e, "class", "icon svelte-qvyq26"), oe(e, "aria-label", "Remove box"), oe(e, "title", "Remove box (Del)");
    },
    m(s, r) {
      dn(s, e, r), Dt(t, e, null), n = !0, l || (o = We(
        e,
        "click",
        /*click_handler_3*/
        i[61]
      ), l = !0);
    },
    p: Ic,
    i(s) {
      n || (se(t.$$.fragment, s), n = !0);
    },
    o(s) {
      he(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && fn(e), zt(t), l = !1, o();
    }
  };
}
function cr(i) {
  let e, t, n, l, o;
  return t = new P0({}), {
    c() {
      e = ht("button"), qt(t.$$.fragment), oe(e, "class", "icon svelte-qvyq26"), oe(e, "aria-label", "Edit label"), oe(e, "title", "Edit label");
    },
    m(s, r) {
      dn(s, e, r), Dt(t, e, null), n = !0, l || (o = We(
        e,
        "click",
        /*click_handler_4*/
        i[62]
      ), l = !0);
    },
    p: Ic,
    i(s) {
      n || (se(t.$$.fragment, s), n = !0);
    },
    o(s) {
      he(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && fn(e), zt(t), l = !1, o();
    }
  };
}
function _r(i) {
  let e, t;
  return e = new ks({
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
      qt(e.$$.fragment);
    },
    m(n, l) {
      Dt(e, n, l), t = !0;
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
      he(e.$$.fragment, n), t = !1;
    },
    d(n) {
      zt(e, n);
    }
  };
}
function ur(i) {
  let e, t;
  return e = new ks({
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
      qt(e.$$.fragment);
    },
    m(n, l) {
      Dt(e, n, l), t = !0;
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
      he(e.$$.fragment, n), t = !1;
    },
    d(n) {
      zt(e, n);
    }
  };
}
function fr(i) {
  let e, t;
  return e = new ks({
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
      qt(e.$$.fragment);
    },
    m(n, l) {
      Dt(e, n, l), t = !0;
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
      he(e.$$.fragment, n), t = !1;
    },
    d(n) {
      zt(e, n);
    }
  };
}
function Hb(i) {
  let e, t, n, l, o, s, r, a, c, _, f, d = (
    /*interactive*/
    i[2] && ar(i)
  ), h = (
    /*editModalVisible*/
    i[12] && _r(i)
  ), b = (
    /*newModalVisible*/
    i[13] && ur(i)
  ), u = (
    /*editDefaultLabelVisible*/
    i[14] && fr(i)
  );
  return {
    c() {
      e = ht("div"), t = ht("div"), n = ht("canvas"), l = St(), d && d.c(), o = St(), h && h.c(), s = St(), b && b.c(), r = St(), u && u.c(), a = Wb(), rl(
        n,
        "height",
        /*height*/
        i[6]
      ), rl(
        n,
        "width",
        /*width*/
        i[7]
      ), oe(n, "class", "canvas-annotator svelte-qvyq26"), oe(t, "class", "canvas-container svelte-qvyq26"), oe(e, "class", "annotator-container"), oe(e, "tabindex", "0");
    },
    m(m, g) {
      dn(m, e, g), Ae(e, t), Ae(t, n), i[57](n), Ae(e, l), d && d.m(e, null), i[65](e), dn(m, o, g), h && h.m(m, g), dn(m, s, g), b && b.m(m, g), dn(m, r, g), u && u.m(m, g), dn(m, a, g), c = !0, _ || (f = [
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
      64) && rl(
        n,
        "height",
        /*height*/
        m[6]
      ), (!c || g[0] & /*width*/
      128) && rl(
        n,
        "width",
        /*width*/
        m[7]
      ), /*interactive*/
      m[2] ? d ? (d.p(m, g), g[0] & /*interactive*/
      4 && se(d, 1)) : (d = ar(m), d.c(), se(d, 1), d.m(e, null)) : d && (oi(), he(d, 1, 1, () => {
        d = null;
      }), li()), /*editModalVisible*/
      m[12] ? h ? (h.p(m, g), g[0] & /*editModalVisible*/
      4096 && se(h, 1)) : (h = _r(m), h.c(), se(h, 1), h.m(s.parentNode, s)) : h && (oi(), he(h, 1, 1, () => {
        h = null;
      }), li()), /*newModalVisible*/
      m[13] ? b ? (b.p(m, g), g[0] & /*newModalVisible*/
      8192 && se(b, 1)) : (b = ur(m), b.c(), se(b, 1), b.m(r.parentNode, r)) : b && (oi(), he(b, 1, 1, () => {
        b = null;
      }), li()), /*editDefaultLabelVisible*/
      m[14] ? u ? (u.p(m, g), g[0] & /*editDefaultLabelVisible*/
      16384 && se(u, 1)) : (u = fr(m), u.c(), se(u, 1), u.m(a.parentNode, a)) : u && (oi(), he(u, 1, 1, () => {
        u = null;
      }), li());
    },
    i(m) {
      c || (se(d), se(h), se(b), se(u), c = !0);
    },
    o(m) {
      he(d), he(h), he(b), he(u), c = !1;
    },
    d(m) {
      m && (fn(e), fn(o), fn(s), fn(r), fn(a)), i[57](null), d && d.d(), i[65](null), h && h.d(m), b && b.d(m), u && u.d(m), _ = !1, Hc(f);
    }
  };
}
const dr = 100;
function Tb(i, e) {
  if (!i)
    return null;
  const [t, n] = i.split("-"), l = Number(n);
  return !Number.isInteger(l) || l < 0 ? null : t === "box" ? l < e.boxes.length ? { type: "box", index: l } : null : t === "point" && l < e.points.length ? { type: "point", index: l } : null;
}
function rn(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function Fo(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), l = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | l).toString(16).slice(1);
}
function jb(i, e, t) {
  var n, l, o, s, r;
  (function(v) {
    v[v.creation = 0] = "creation", v[v.point = 1] = "point", v[v.drag = 2] = "drag";
  })(r || (r = {}));
  let { imageUrl: a = null } = e, { interactive: c } = e, { boxAlpha: _ = 0.5 } = e, { boxMinSize: f = 10 } = e, { handleSize: d } = e, { boxThickness: h } = e, { boxSelectedThickness: b } = e, { value: u } = e, { choices: m = [] } = e, { choicesColors: g = [] } = e, { disableEditBoxes: w = !1 } = e, { height: p = "100%" } = e, { width: y = "100%" } = e, { singleBox: D = !1 } = e, { showRemoveButton: k = null } = e, { handlesCursor: q = !0 } = e, { useDefaultLabel: z = !1 } = e, { enableKeyboardShortcuts: M = !0 } = e, { selectedAnnotationId: S = null } = e, { focusSelectedOnly: E = !1 } = e, { onClearSelection: X = null } = e;
  k === null && (k = w);
  let C, ee, J, x = null, G = -1, W = -1, F = null, I = r.creation, U = /* @__PURE__ */ new Map(), Y = new Lb(ce, U);
  u !== null && u.boxes.length == 0 && u.points.length == 0 && (I = r.creation);
  let le = 0, ae = 0, H = 0, be = 0, L = 1, T = 0, V = 0, re = !1, fe = !1, A = !1, at = !1, Xe = z, $ = { label: "", color: "" }, Te = "", je = "", Ce = { x: 0, y: 0, distance: 0 }, de = null, Qt = null;
  function Hn() {
    if (!u)
      return [];
    if (E) {
      if ((de == null ? void 0 : de.type) === "box") {
        const v = u.boxes[de.index];
        return v ? [{ box: v, index: de.index }] : [];
      }
      return [];
    }
    return u.boxes.map((v, R) => ({ box: v, index: R }));
  }
  function ji() {
    if (!u)
      return [];
    if (E) {
      if ((de == null ? void 0 : de.type) === "point") {
        const v = u.points[de.index];
        return v ? [{ point: v, index: de.index }] : [];
      }
      return [];
    }
    return u.points.map((v, R) => ({ point: v, index: R }));
  }
  const Me = Ib();
  function ce() {
    if (J) {
      if (J.clearRect(0, 0, C.width, C.height), J.save(), J.translate(Y.offsetX, Y.offsetY), J.scale(Y.scale, Y.scale), x !== null) {
        switch (u.orientation) {
          case 0:
            J.drawImage(x, 0, 0, T, V);
            break;
          case 1:
            J.translate(T, 0), J.rotate(Math.PI / 2), J.drawImage(x, 0, 0, V, T);
            break;
          case 2:
            J.translate(T, V), J.rotate(Math.PI), J.drawImage(x, 0, 0, T, V);
            break;
          case 3:
            J.translate(0, V), J.rotate(-Math.PI / 2), J.drawImage(x, 0, 0, V, T);
            break;
        }
        J.restore();
      }
      const v = Hn().slice().reverse();
      for (const { box: j } of v)
        j.render(J);
      const R = ji().slice().reverse();
      for (const { point: j } of R)
        j.render(J);
    }
  }
  function Tn() {
    ce(), Me("change");
  }
  function xt(v) {
    t(54, F = v >= 0 ? "box" : null), t(52, G = v), t(53, W = -1), u.boxes.forEach((R) => {
      R.setSelected(!1);
    }), u.points.forEach((R) => {
      R.setSelected(!1);
    }), v >= 0 && v < u.boxes.length && u.boxes[v].setSelected(!0), ce();
  }
  function bn(v) {
    t(54, F = v >= 0 ? "point" : null), t(53, W = v), t(52, G = -1), u.boxes.forEach((R) => {
      R.setSelected(!1);
    }), u.points.forEach((R) => {
      R.setSelected(!1);
    }), v >= 0 && v < u.points.length && u.points[v].setSelected(!0), ce();
  }
  const Fi = (v, R) => {
    const j = Math.sqrt(Math.pow(v.clientX - R.clientX, 2) + Math.pow(v.clientY - R.clientY, 2));
    return j < dr ? dr : j;
  };
  function Fl(v) {
    if (c) {
      if (v.preventDefault(), C.setPointerCapture(v.pointerId), U.set(v.pointerId, v), U.size == 1)
        I === r.creation ? jn(v) : I === r.point ? Ul(v) : I === r.drag && Vl(v);
      else if (U.size == 2) {
        Y.isDragging = !1, u.boxes.forEach((Et) => {
          Et.isCreating = !1, Et.isDragging = !1, Et.isResizing = !1;
        }), u.points.forEach((Et) => {
          Et.isDragging = !1;
        });
        const R = Array.from(U.values()), j = R[0], O = R[1], N = Fi(j, O), Q = C.getBoundingClientRect(), pe = (j.clientX + O.clientX) / 2 - Q.left, bt = (j.clientY + O.clientY) / 2 - Q.top;
        Ce.distance = N, Ce.x = pe, Ce.y = bt;
      }
    }
  }
  function Ol(v) {
    const R = C.getBoundingClientRect(), j = v.clientX - R.left, O = v.clientY - R.top;
    let N = !1;
    for (const { box: Q, index: pe } of Hn()) {
      const bt = Q.indexOfPointInsideHandle(j, O);
      if (bt >= 0)
        return N = !0, xt(pe), Q.startResize(bt, v), !0;
    }
    for (const { box: Q, index: pe } of Hn())
      if (Q.isPointInsideBox(j, O))
        return N = !0, xt(pe), Q.startDrag(v), !0;
    return N;
  }
  function Pl(v) {
    c && (U.delete(v.pointerId), C.releasePointerCapture(v.pointerId), Y.isDragging && Y.stopDrag(), at && (at = !1, Vc()), Me("change"));
  }
  function B(v) {
    c && (U.delete(v.pointerId), C.releasePointerCapture(v.pointerId), Y.isDragging && Y.stopDrag(), Me("change"));
  }
  function Fe(v) {
    if (c)
      if (v.preventDefault(), v.pointerType === "mouse") {
        if (!q || u === null || I !== r.drag)
          return;
        const R = C.getBoundingClientRect(), j = v.clientX - R.left, O = v.clientY - R.top;
        for (const { box: N } of Hn()) {
          const Q = N.indexOfPointInsideHandle(j, O);
          if (Q >= 0) {
            t(10, C.style.cursor = N.resizeHandles[Q].cursor, C);
            return;
          }
        }
        t(10, C.style.cursor = "default", C);
      } else {
        if (!U.has(v.pointerId))
          return;
        if (U.set(v.pointerId, v), U.size === 2) {
          const R = Array.from(U.values()), j = R[0], O = R[1], N = Fi(j, O), Q = C.getBoundingClientRect(), pe = (j.clientX + O.clientX) / 2 - Q.left, bt = (j.clientY + O.clientY) / 2 - Q.top, Et = parseFloat((Y.scale * (N / Ce.distance)).toFixed(2)), Oe = Et < 1 ? 1 : Et, zs = Oe / Y.scale;
          Y.offsetX = Ce.x - (Ce.x - Y.offsetX) * zs, Y.offsetY = Ce.y - (Ce.y - Y.offsetY) * zs;
          const f_ = pe - Ce.x, d_ = bt - Ce.y;
          Y.offsetX += f_, Y.offsetY += d_, Y.scale = Oe, Ce.x = pe, Ce.y = bt, Ce.distance = N, ce();
        }
      }
  }
  function Se() {
    const v = C.width / T, R = C.height / V, j = Math.min(v, R);
    Y.scale = j, Y.offsetX = (C.width - T * j) / 2, Y.offsetY = (C.height - V * j) / 2, ce();
  }
  function rt(v) {
    if (!M || v.target !== ee || !c)
      return;
    const R = v.key.toLowerCase();
    switch ((/* @__PURE__ */ new Set(["delete", "b", "c", "d", "e", "p", " "])).has(R) && (v.preventDefault(), v.stopPropagation()), R) {
      case "delete":
        $t();
        break;
      case "b":
        $e();
        break;
      case "c":
        Nl();
        break;
      case "p":
        pn();
        break;
      case "d":
        On();
        break;
      case "e":
        Cs();
        break;
      case " ":
        Se();
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
    const R = 1 / (1 + v.deltaY / 1e3 * 0.5), j = parseFloat((Y.scale * R).toFixed(2)), O = j < 1 ? 1 : j, N = C.getBoundingClientRect(), Q = v.clientX - N.left, pe = v.clientY - N.top, bt = (Q - Y.offsetX) / Y.scale, Et = (pe - Y.offsetY) / Y.scale;
    if (Y.offsetX = Q - bt * O, Y.offsetY = pe - Et * O, u !== null) {
      for (const Oe of u.boxes)
        Oe.isDragging && (Oe.offsetMouseX = v.clientX - Oe._xmin * O, Oe.offsetMouseY = v.clientY - Oe._ymin * O);
      for (const Oe of u.points)
        Oe.isDragging && (Oe.offsetMouseX = v.clientX - Oe._x * O, Oe.offsetMouseY = v.clientY - Oe._y * O);
    }
    Y.scale = O, ce();
  }
  function jn(v) {
    const R = C.getBoundingClientRect(), j = (v.clientX - R.left - Y.offsetX) / L / Y.scale, O = (v.clientY - R.top - Y.offsetY) / L / Y.scale;
    let N;
    g.length > 0 ? N = rn(g[0]) : D ? u.boxes.length > 0 ? N = u.boxes[0].color : N = ut[0] : N = ut[u.boxes.length % ut.length];
    let Q = new Ho(Tn, ys, Y, U, le, ae, H, be, "", j, O, j, O, N, _, f, d, h, b);
    Q.startCreating(v, R.left, R.top), D ? t(35, u.boxes = [Q], u) : t(35, u.boxes = [Q, ...u.boxes], u), xt(0), ce(), Me("change");
  }
  function Ul(v) {
    const R = C.getBoundingClientRect(), j = (v.clientX - R.left - Y.offsetX) / Y.scale, O = (v.clientY - R.top - Y.offsetY) / Y.scale;
    let N;
    g.length > 0 ? N = rn(g[0]) : D ? u.points.length > 0 ? N = u.points[0].color : N = ut[0] : N = ut[u.points.length % ut.length];
    const Q = new To(Tn, Y, U, le, ae, H, be, "", j, O, N, 0.7, Math.max(4, d / 2), L);
    D ? t(35, u.points = [Q], u) : t(35, u.points = [Q, ...u.points], u), bn(0), Q.startDrag(v), at = !0, ce(), Me("change");
  }
  function Vl(v) {
    if (Ol(v))
      return;
    const j = C.getBoundingClientRect(), O = v.clientX - j.left, N = v.clientY - j.top;
    for (const { point: pe, index: bt } of ji())
      if (pe.isPointInsidePoint(O, N)) {
        bn(bt), pe.startDrag(v);
        return;
      }
    !D && !(E || S) && Nl(), Y.startDrag(v);
  }
  function Fn() {
    (E || S) && (X == null || X()), t(0, S = null), t(36, E = !1), t(55, de = null), t(56, Qt = null), t(54, F = null), t(52, G = -1), t(53, W = -1), u == null || u.boxes.forEach((v) => v.setSelected(!1)), u == null || u.points.forEach((v) => v.setSelected(!1));
  }
  function $e() {
    Fn(), t(9, I = r.creation), t(10, C.style.cursor = "crosshair", C), ce();
  }
  function pn() {
    Fn(), t(9, I = r.point), t(10, C.style.cursor = "crosshair", C), ce();
  }
  function On() {
    t(9, I = r.drag), t(10, C.style.cursor = "default", C), ce();
  }
  function Nl() {
    X == null || X(), t(0, S = null), t(36, E = !1), t(55, de = null), t(56, Qt = null), t(54, F = null), t(52, G = -1), t(53, W = -1), u == null || u.boxes.forEach((v) => v.setSelected(!1)), u == null || u.points.forEach((v) => v.setSelected(!1)), ce();
  }
  function ys() {
    G >= 0 && G < u.boxes.length && (u.boxes[G].getArea() < 1 ? $t() : (w || (Xe ? Ss() : t(13, fe = !0)), D && On()));
  }
  function Vc() {
    W >= 0 && W < u.points.length && (w || (Xe ? Ss() : t(13, fe = !0)), D && On());
  }
  function Cs() {
    w || (F === "box" ? G >= 0 && G < u.boxes.length && t(12, re = !0) : F === "point" && W >= 0 && W < u.points.length && t(12, re = !0));
  }
  function Nc(v) {
    c && Cs();
  }
  function Kc(v) {
    t(12, re = !1), xe();
    const { detail: R } = v, j = R.label, O = R.color, N = R.ret;
    if (F === "box") {
      if (G >= 0 && G < u.boxes.length) {
        const Q = u.boxes[G];
        N == 1 ? (Q.label = j, Q.color = rn(O), ce(), Me("change")) : N == -1 && $t();
      }
    } else if (F === "point" && W >= 0 && W < u.points.length) {
      const Q = u.points[W];
      N == 1 ? (Q.label = j, Q.color = rn(O), ce(), Me("change")) : N == -1 && $t();
    }
  }
  function Zc(v) {
    t(13, fe = !1), xe();
    const { detail: R } = v, j = R.label, O = R.color, N = R.ret, Q = R.lock;
    if (F === "box") {
      if (G >= 0 && G < u.boxes.length) {
        const pe = u.boxes[G];
        N == 1 ? (t(15, Xe = Q), t(16, $.label = j, $), t(16, $.color = O, $), pe.label = j, pe.color = rn(O), ce(), Me("change")) : $t();
      }
    } else if (F === "point" && W >= 0 && W < u.points.length) {
      const pe = u.points[W];
      N == 1 ? (t(15, Xe = Q), t(16, $.label = j, $), t(16, $.color = O, $), pe.label = j, pe.color = rn(O), ce(), Me("change")) : $t();
    }
  }
  function Gc(v) {
    t(14, A = !1), xe();
    const { detail: R } = v;
    let j = R.label, O = R.color, N = R.ret, Q = R.lock;
    N == 1 && (t(15, Xe = Q), t(16, $.label = j, $), t(16, $.color = O, $));
  }
  function Ss() {
    if (F === "box") {
      if (G >= 0 && G < u.boxes.length) {
        const v = u.boxes[G];
        v.label = $.label, $.color !== "" && (v.color = rn($.color)), ce(), Me("change");
      }
    } else if (F === "point" && W >= 0 && W < u.points.length) {
      const v = u.points[W];
      v.label = $.label, $.color !== "" && (v.color = rn($.color)), ce(), Me("change");
    }
  }
  function $t() {
    F === "box" ? G >= 0 && G < u.boxes.length && (u.boxes.splice(G, 1), xt(-1), D && $e(), Me("change")) : F === "point" && W >= 0 && W < u.points.length && (u.points.splice(W, 1), bn(-1), D && $e(), Me("change"));
  }
  function Kl(v) {
    t(35, u.orientation = ((u.orientation + v) % 4 + 4) % 4, u), Y.orientation = u.orientation, mi();
    for (const R of u.boxes)
      R.onRotate(v);
    for (const R of u.points)
      R.onRotate(v);
    ce(), Me("change");
  }
  function mi() {
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
        for (const R of u.boxes)
          R.canvasXmin = le, R.canvasYmin = ae, R.canvasXmax = H, R.canvasYmax = be, R.setScaleFactor(L);
        for (const R of u.points)
          R.canvasXmin = le, R.canvasYmin = ae, R.canvasXmax = H, R.canvasYmax = be, R.setScaleFactor(L);
      }
      ce(), Me("change");
    }
  }
  const Jc = new ResizeObserver(mi);
  function Qc() {
    for (let v = 0; v < u.boxes.length; v++) {
      let R = u.boxes[v];
      if (!(R instanceof Ho)) {
        const j = R;
        let O = "", N = "";
        Object.prototype.hasOwnProperty.call(j, "color") ? (O = j.color, Array.isArray(O) && O.length === 3 && (O = `rgb(${O[0]}, ${O[1]}, ${O[2]})`)) : O = ut[v % ut.length], Object.prototype.hasOwnProperty.call(j, "label") && (N = j.label), R = new Ho(Tn, ys, Y, U, le, ae, H, be, N, j.xmin, j.ymin, j.xmax, j.ymax, O, _, f, d, h, b), t(35, u.boxes[v] = R, u);
      }
    }
  }
  function xc() {
    for (let v = 0; v < u.points.length; v++) {
      let R = u.points[v];
      if (!(R instanceof To)) {
        const j = R;
        let O = "", N = "";
        Object.prototype.hasOwnProperty.call(j, "color") ? (O = j.color, Array.isArray(O) && O.length === 3 && (O = `rgb(${O[0]}, ${O[1]}, ${O[2]})`)) : O = ut[v % ut.length], Object.prototype.hasOwnProperty.call(j, "label") && (N = j.label), R = new To(Tn, Y, U, le, ae, H, be, N, j.x, j.y, O, 0.7, Math.max(4, d / 2), L), t(35, u.points[v] = R, u);
      }
    }
  }
  function qs() {
    a !== null && (x === null || x.src != a) && (x = new Image(), x.src = a, x.onload = function() {
      mi(), ce();
    });
  }
  Yb(() => {
    if (Array.isArray(m) && m.length > 0) {
      if (!Array.isArray(g) || g.length == 0)
        for (let v = 0; v < m.length; v++) {
          let R = ut[v % ut.length];
          g.push(Fo(R));
        }
      t(16, $.label = m[0][0], $), t(16, $.color = g[0], $);
    }
    J = C.getContext("2d"), Jc.observe(C), G < 0 && u !== null && u.boxes.length > 0 && xt(0), W < 0 && u !== null && u.points.length > 0 && bn(0), qs(), mi(), ce();
  });
  function $c(v) {
    sr[v ? "unshift" : "push"](() => {
      C = v, t(10, C);
    });
  }
  const e_ = () => $e(), t_ = () => pn(), n_ = () => On(), i_ = () => $t(), l_ = () => t(14, A = !0), o_ = () => Kl(-1), s_ = () => Kl(1);
  function a_(v) {
    sr[v ? "unshift" : "push"](() => {
      ee = v, t(11, ee);
    });
  }
  const r_ = () => ee.focus();
  function c_(v) {
    jo.call(this, i, v);
  }
  function __(v) {
    jo.call(this, i, v);
  }
  function u_(v) {
    jo.call(this, i, v);
  }
  return i.$$set = (v) => {
    "imageUrl" in v && t(37, a = v.imageUrl), "interactive" in v && t(2, c = v.interactive), "boxAlpha" in v && t(38, _ = v.boxAlpha), "boxMinSize" in v && t(39, f = v.boxMinSize), "handleSize" in v && t(40, d = v.handleSize), "boxThickness" in v && t(41, h = v.boxThickness), "boxSelectedThickness" in v && t(42, b = v.boxSelectedThickness), "value" in v && t(35, u = v.value), "choices" in v && t(3, m = v.choices), "choicesColors" in v && t(4, g = v.choicesColors), "disableEditBoxes" in v && t(5, w = v.disableEditBoxes), "height" in v && t(6, p = v.height), "width" in v && t(7, y = v.width), "singleBox" in v && t(43, D = v.singleBox), "showRemoveButton" in v && t(1, k = v.showRemoveButton), "handlesCursor" in v && t(44, q = v.handlesCursor), "useDefaultLabel" in v && t(45, z = v.useDefaultLabel), "enableKeyboardShortcuts" in v && t(46, M = v.enableKeyboardShortcuts), "selectedAnnotationId" in v && t(0, S = v.selectedAnnotationId), "focusSelectedOnly" in v && t(36, E = v.focusSelectedOnly), "onClearSelection" in v && t(47, X = v.onClearSelection);
  }, i.$$.update = () => {
    if (i.$$.dirty[1] & /*selectedTarget, selectedBox, value, _a, _b, selectedPoint, _c, _d*/
    16646160 && (F === "box" && G >= 0 ? (t(17, Te = t(49, l = t(48, n = u.boxes[G]) === null || n === void 0 ? void 0 : n.label) !== null && l !== void 0 ? l : ""), t(18, je = u.boxes[G] ? Fo(u.boxes[G].color) : "")) : F === "point" && W >= 0 ? (t(17, Te = t(51, s = t(50, o = u.points[W]) === null || o === void 0 ? void 0 : o.label) !== null && s !== void 0 ? s : ""), t(18, je = u.points[W] ? Fo(u.points[W].color) : "")) : (t(17, Te = ""), t(18, je = ""))), i.$$.dirty[0] & /*selectedAnnotationId, mode, Mode*/
    769 | i.$$.dirty[1] & /*value, lastSelectedAnnotationId, selectedInfo, selectedTarget, selectedBox, selectedPoint*/
    65011728)
      if (!u)
        t(55, de = null), t(56, Qt = null);
      else {
        t(55, de = Tb(S, u));
        const v = S !== Qt;
        de && (de.type === "box" ? (F !== "box" || G !== de.index) && xt(de.index) : (F !== "point" || W !== de.index) && bn(de.index), v && I !== r.drag && On()), t(56, Qt = S);
      }
    i.$$.dirty[1] & /*value*/
    16 && (Y.orientation = u.orientation, qs(), Qc(), xc(), mi(), ce());
  }, [
    S,
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
    fe,
    A,
    Xe,
    $,
    Te,
    je,
    Fl,
    Pl,
    B,
    Fe,
    rt,
    Ye,
    $e,
    pn,
    On,
    Nl,
    Nc,
    Kc,
    Zc,
    Gc,
    $t,
    Kl,
    u,
    E,
    a,
    _,
    f,
    d,
    h,
    b,
    D,
    q,
    z,
    M,
    X,
    n,
    l,
    o,
    s,
    G,
    W,
    F,
    de,
    Qt,
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
    __,
    u_
  ];
}
class Fb extends Ab {
  constructor(e) {
    super(), Rb(
      this,
      e,
      jb,
      Hb,
      Xb,
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
  SvelteComponent: Ob,
  add_flush_callback: Pb,
  bind: Ub,
  binding_callbacks: Vb,
  create_component: Nb,
  destroy_component: Kb,
  init: Zb,
  mount_component: Gb,
  safe_not_equal: Jb,
  transition_in: Qb,
  transition_out: xb
} = window.__gradio__svelte__internal, { createEventDispatcher: $b } = window.__gradio__svelte__internal;
function ep(i) {
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
    i[0]), e = new Fb({ props: o }), Vb.push(() => Ub(e, "value", l)), e.$on(
      "change",
      /*change_handler*/
      i[25]
    ), {
      c() {
        Nb(e.$$.fragment);
      },
      m(s, r) {
        Gb(e, s, r), n = !0;
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
        s[0], Pb(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (Qb(e.$$.fragment, s), n = !0);
      },
      o(s) {
        xb(e.$$.fragment, s), n = !1;
      },
      d(s) {
        Kb(e, s);
      }
    }
  );
}
function tp(i, e, t) {
  let { src: n = void 0 } = e, { interactive: l } = e, { boxesAlpha: o } = e, { labelList: s } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: c } = e, { boxThickness: _ } = e, { height: f } = e, { width: d } = e, { boxSelectedThickness: h } = e, { value: b } = e, { disableEditBoxes: u } = e, { singleBox: m } = e, { showRemoveButton: g } = e, { handlesCursor: w } = e, { useDefaultLabel: p } = e, { enableKeyboardShortcuts: y } = e, { selectedAnnotationId: D = null } = e, { focusSelectedOnly: k = !1 } = e, { onClearSelection: q = null } = e, z, M;
  const S = $b();
  function E(C) {
    b = C, t(0, b);
  }
  const X = () => S("change");
  return i.$$set = (C) => {
    "src" in C && t(22, n = C.src), "interactive" in C && t(1, l = C.interactive), "boxesAlpha" in C && t(2, o = C.boxesAlpha), "labelList" in C && t(3, s = C.labelList), "labelColors" in C && t(4, r = C.labelColors), "boxMinSize" in C && t(5, a = C.boxMinSize), "handleSize" in C && t(6, c = C.handleSize), "boxThickness" in C && t(7, _ = C.boxThickness), "height" in C && t(8, f = C.height), "width" in C && t(9, d = C.width), "boxSelectedThickness" in C && t(10, h = C.boxSelectedThickness), "value" in C && t(0, b = C.value), "disableEditBoxes" in C && t(11, u = C.disableEditBoxes), "singleBox" in C && t(12, m = C.singleBox), "showRemoveButton" in C && t(13, g = C.showRemoveButton), "handlesCursor" in C && t(14, w = C.handlesCursor), "useDefaultLabel" in C && t(15, p = C.useDefaultLabel), "enableKeyboardShortcuts" in C && t(16, y = C.enableKeyboardShortcuts), "selectedAnnotationId" in C && t(17, D = C.selectedAnnotationId), "focusSelectedOnly" in C && t(18, k = C.focusSelectedOnly), "onClearSelection" in C && t(19, q = C.onClearSelection);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    12582912) {
      t(20, z = n), t(23, M = n);
      const C = n;
      mh(C).then((ee) => {
        M === C && t(20, z = ee);
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
    D,
    k,
    q,
    z,
    S,
    n,
    M,
    E,
    X
  ];
}
class np extends Ob {
  constructor(e) {
    super(), Zb(this, e, tp, ep, Jb, {
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
class hr {
  constructor() {
    this.boxes = [], this.points = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: ip,
  add_flush_callback: Bl,
  append: ue,
  attr: ke,
  bind: Ml,
  binding_callbacks: Yi,
  bubble: Ci,
  check_outros: Cn,
  create_component: Nt,
  create_slot: lp,
  destroy_component: Kt,
  destroy_each: op,
  detach: It,
  element: He,
  empty: sp,
  ensure_array_like: mr,
  get_all_dirty_from_scope: ap,
  get_slot_changes: rp,
  group_outros: Sn,
  init: cp,
  insert: Ht,
  listen: gr,
  mount_component: Zt,
  noop: Tc,
  run_all: _p,
  safe_not_equal: up,
  set_data: Oo,
  space: ot,
  text: Si,
  toggle_class: El,
  transition_in: ie,
  transition_out: _e,
  update_slot_base: fp
} = window.__gradio__svelte__internal, { createEventDispatcher: dp, tick: hp } = window.__gradio__svelte__internal;
function br(i, e, t) {
  const n = i.slice();
  return n[65] = e[t], n;
}
function pr(i) {
  let e, t;
  return e = new Bh({
    props: {
      href: (
        /*value*/
        i[0].image.url
      ),
      download: (
        /*value*/
        i[0].image.orig_name || "image"
      ),
      $$slots: { default: [mp] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Nt(e.$$.fragment);
    },
    m(n, l) {
      Zt(e, n, l), t = !0;
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
      _e(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Kt(e, n);
    }
  };
}
function mp(i) {
  let e, t;
  return e = new Ll({
    props: {
      Icon: Of,
      label: (
        /*i18n*/
        i[8]("common.download")
      )
    }
  }), {
    c() {
      Nt(e.$$.fragment);
    },
    m(n, l) {
      Zt(e, n, l), t = !0;
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
      _e(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Kt(e, n);
    }
  };
}
function vr(i) {
  let e, t;
  return e = new u1({
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
      Nt(e.$$.fragment);
    },
    m(n, l) {
      Zt(e, n, l), t = !0;
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
      _e(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Kt(e, n);
    }
  };
}
function wr(i) {
  let e, t, n;
  return t = new Ll({
    props: { Icon: Ir, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[43]
  ), {
    c() {
      e = He("div"), Nt(t.$$.fragment);
    },
    m(l, o) {
      Ht(l, e, o), Zt(t, e, null), n = !0;
    },
    p: Tc,
    i(l) {
      n || (ie(t.$$.fragment, l), n = !0);
    },
    o(l) {
      _e(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && It(e), Kt(t);
    }
  };
}
function kr(i) {
  let e;
  const t = (
    /*#slots*/
    i[45].default
  ), n = lp(
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
      1) && fp(
        n,
        t,
        l,
        /*$$scope*/
        l[62],
        e ? rp(
          t,
          /*$$scope*/
          l[62],
          o,
          null
        ) : ap(
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
      _e(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function gp(i) {
  let e, t, n = (
    /*value*/
    i[0] === null && kr(i)
  );
  return {
    c() {
      n && n.c(), e = sp();
    },
    m(l, o) {
      n && n.m(l, o), Ht(l, e, o), t = !0;
    },
    p(l, o) {
      /*value*/
      l[0] === null ? n ? (n.p(l, o), o[0] & /*value*/
      1 && ie(n, 1)) : (n = kr(l), n.c(), ie(n, 1), n.m(e.parentNode, e)) : n && (Sn(), _e(n, 1, 1, () => {
        n = null;
      }), Cn());
    },
    i(l) {
      t || (ie(n), t = !0);
    },
    o(l) {
      _e(n), t = !1;
    },
    d(l) {
      l && It(e), n && n.d(l);
    }
  };
}
function yr(i) {
  let e, t;
  return e = new xm({
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
      Nt(e.$$.fragment);
    },
    m(n, l) {
      Zt(e, n, l), t = !0;
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
      _e(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Kt(e, n);
    }
  };
}
function Cr(i) {
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
  i[0]), n = new np({ props: f }), Yi.push(() => Ml(n, "value", _)), n.$on(
    "change",
    /*handleCanvasChange*/
    i[39]
  );
  function d(u, m) {
    return (
      /*annotationItems*/
      u[30].length === 0 ? pp : bp
    );
  }
  let h = d(i), b = h(i);
  return {
    c() {
      e = He("div"), t = He("div"), Nt(n.$$.fragment), o = ot(), s = He("aside"), r = He("div"), r.textContent = "Annotations", a = ot(), b.c(), ke(t, "class", "image-frame svelte-1yldbuf"), El(
        t,
        "selectable",
        /*selectable*/
        i[5]
      ), ke(r, "class", "annotation-panel__header svelte-1yldbuf"), ke(s, "class", "annotation-panel svelte-1yldbuf"), ke(s, "aria-label", "Annotations list"), ke(e, "class", "annotator-layout svelte-1yldbuf");
    },
    m(u, m) {
      Ht(u, e, m), ue(e, t), Zt(n, t, null), ue(e, o), ue(e, s), ue(s, r), ue(s, a), b.m(s, null), c = !0;
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
      u[0], Bl(() => l = !1)), n.$set(g), (!c || m[0] & /*selectable*/
      32) && El(
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
      _e(n.$$.fragment, u), c = !1;
    },
    d(u) {
      u && It(e), Kt(n), b.d();
    }
  };
}
function bp(i) {
  let e, t = mr(
    /*annotationItems*/
    i[30]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = Sr(br(i, t, l));
  return {
    c() {
      e = He("ul");
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      ke(e, "class", "annotation-list svelte-1yldbuf");
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
        t = mr(
          /*annotationItems*/
          l[30]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = br(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = Sr(r), n[s].c(), n[s].m(e, null));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && It(e), op(n, l);
    }
  };
}
function pp(i) {
  let e;
  return {
    c() {
      e = He("div"), e.textContent = "No annotations yet.", ke(e, "class", "annotation-panel__empty svelte-1yldbuf");
    },
    m(t, n) {
      Ht(t, e, n);
    },
    p: Tc,
    d(t) {
      t && It(e);
    }
  };
}
function Sr(i) {
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
  function D() {
    return (
      /*click_handler*/
      i[59](
        /*item*/
        i[65]
      )
    );
  }
  function k(...q) {
    return (
      /*keydown_handler*/
      i[60](
        /*item*/
        i[65],
        ...q
      )
    );
  }
  return {
    c() {
      e = He("li"), t = He("div"), n = He("span"), o = ot(), r = Si(s), a = ot(), c = He("div"), _ = Si("Shape: "), d = Si(f), h = ot(), b = He("div"), u = Si("Coords: "), g = Si(m), w = ot(), ke(n, "class", "annotation-item__swatch svelte-1yldbuf"), ke(n, "style", l = `background-color: ${/*item*/
      i[65].color};`), ke(t, "class", "annotation-item__title svelte-1yldbuf"), ke(c, "class", "annotation-item__meta svelte-1yldbuf"), ke(b, "class", "annotation-item__coords svelte-1yldbuf"), ke(e, "class", "annotation-item svelte-1yldbuf"), ke(e, "role", "button"), ke(e, "tabindex", "0"), El(
        e,
        "annotation-item--selected",
        /*item*/
        i[65].isSelected
      );
    },
    m(q, z) {
      Ht(q, e, z), ue(e, t), ue(t, n), ue(t, o), ue(t, r), ue(e, a), ue(e, c), ue(c, _), ue(c, d), ue(e, h), ue(e, b), ue(b, u), ue(b, g), ue(e, w), p || (y = [
        gr(e, "click", D),
        gr(e, "keydown", k)
      ], p = !0);
    },
    p(q, z) {
      i = q, z[0] & /*annotationItems*/
      1073741824 && l !== (l = `background-color: ${/*item*/
      i[65].color};`) && ke(n, "style", l), z[0] & /*annotationItems*/
      1073741824 && s !== (s = /*item*/
      i[65].label + "") && Oo(r, s), z[0] & /*annotationItems*/
      1073741824 && f !== (f = /*item*/
      i[65].shape + "") && Oo(d, f), z[0] & /*annotationItems*/
      1073741824 && m !== (m = /*item*/
      i[65].coords + "") && Oo(g, m), z[0] & /*annotationItems*/
      1073741824 && El(
        e,
        "annotation-item--selected",
        /*item*/
        i[65].isSelected
      );
    },
    d(q) {
      q && It(e), p = !1, _p(y);
    }
  };
}
function qr(i) {
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
    i[1]), e = new D1({ props: o }), Yi.push(() => Ml(e, "active_source", l)), {
      c() {
        Nt(e.$$.fragment);
      },
      m(s, r) {
        Zt(e, s, r), n = !0;
      },
      p(s, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        s[4]), !t && r[0] & /*active_source*/
        2 && (t = !0, a.active_source = /*active_source*/
        s[1], Bl(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (ie(e.$$.fragment, s), n = !0);
      },
      o(s) {
        _e(e.$$.fragment, s), n = !1;
      },
      d(s) {
        Kt(e, s);
      }
    }
  );
}
function vp(i) {
  let e, t, n, l, o, s, r, a, c, _, f, d, h, b, u = (
    /*sources*/
    (i[4].length > 1 || /*sources*/
    i[4].includes("clipboard")) && /*value*/
    i[0] === null && /*interactive*/
    i[7]
  ), m;
  e = new Du({
    props: {
      show_label: (
        /*show_label*/
        i[3]
      ),
      Icon: Hr,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let g = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[0] !== null && pr(i)
  ), w = (
    /*showShareButton*/
    i[9] && /*value*/
    i[0] !== null && vr(i)
  ), p = (
    /*showClearButton*/
    i[11] && /*value*/
    i[0] !== null && /*interactive*/
    i[7] && wr(i)
  );
  function y(S) {
    i[50](S);
  }
  function D(S) {
    i[51](S);
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
    $$slots: { default: [gp] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[32] !== void 0 && (k.uploading = /*uploading*/
  i[32]), /*dragging*/
  i[33] !== void 0 && (k.dragging = /*dragging*/
  i[33]), c = new am({ props: k }), i[49](c), Yi.push(() => Ml(c, "uploading", y)), Yi.push(() => Ml(c, "dragging", D)), c.$on(
    "load",
    /*handle_upload*/
    i[36]
  ), c.$on(
    "error",
    /*error_handler_1*/
    i[52]
  );
  let q = (
    /*value*/
    i[0] === null && /*active_source*/
    i[1] === "webcam" && yr(i)
  ), z = (
    /*value*/
    i[0] !== null && Cr(i)
  ), M = u && qr(i);
  return {
    c() {
      Nt(e.$$.fragment), t = ot(), n = He("div"), g && g.c(), l = ot(), w && w.c(), o = ot(), p && p.c(), s = ot(), r = He("div"), a = He("div"), Nt(c.$$.fragment), d = ot(), q && q.c(), h = ot(), z && z.c(), b = ot(), M && M.c(), ke(n, "class", "icon-buttons svelte-1yldbuf"), ke(a, "class", "upload-container svelte-1yldbuf"), ke(r, "data-testid", "image"), ke(r, "class", "image-container svelte-1yldbuf");
    },
    m(S, E) {
      Zt(e, S, E), Ht(S, t, E), Ht(S, n, E), g && g.m(n, null), ue(n, l), w && w.m(n, null), ue(n, o), p && p.m(n, null), Ht(S, s, E), Ht(S, r, E), ue(r, a), Zt(c, a, null), ue(a, d), q && q.m(a, null), ue(a, h), z && z.m(a, null), ue(r, b), M && M.m(r, null), m = !0;
    },
    p(S, E) {
      const X = {};
      E[0] & /*show_label*/
      8 && (X.show_label = /*show_label*/
      S[3]), E[0] & /*label*/
      4 && (X.label = /*label*/
      S[2] || "Image Annotator"), e.$set(X), /*showDownloadButton*/
      S[10] && /*value*/
      S[0] !== null ? g ? (g.p(S, E), E[0] & /*showDownloadButton, value*/
      1025 && ie(g, 1)) : (g = pr(S), g.c(), ie(g, 1), g.m(n, l)) : g && (Sn(), _e(g, 1, 1, () => {
        g = null;
      }), Cn()), /*showShareButton*/
      S[9] && /*value*/
      S[0] !== null ? w ? (w.p(S, E), E[0] & /*showShareButton, value*/
      513 && ie(w, 1)) : (w = vr(S), w.c(), ie(w, 1), w.m(n, o)) : w && (Sn(), _e(w, 1, 1, () => {
        w = null;
      }), Cn()), /*showClearButton*/
      S[11] && /*value*/
      S[0] !== null && /*interactive*/
      S[7] ? p ? (p.p(S, E), E[0] & /*showClearButton, value, interactive*/
      2177 && ie(p, 1)) : (p = wr(S), p.c(), ie(p, 1), p.m(n, null)) : p && (Sn(), _e(p, 1, 1, () => {
        p = null;
      }), Cn());
      const C = {};
      E[0] & /*value, active_source*/
      3 && (C.hidden = /*value*/
      S[0] !== null || /*active_source*/
      S[1] === "webcam"), E[0] & /*active_source*/
      2 && (C.filetype = /*active_source*/
      S[1] === "clipboard" ? "clipboard" : "image/*"), E[0] & /*root*/
      64 && (C.root = /*root*/
      S[6]), E[0] & /*max_file_size*/
      33554432 && (C.max_file_size = /*max_file_size*/
      S[25]), E[0] & /*sources*/
      16 && (C.disable_click = !/*sources*/
      S[4].includes("upload")), E[0] & /*cli_upload*/
      67108864 && (C.upload = /*cli_upload*/
      S[26]), E[0] & /*stream_handler*/
      134217728 && (C.stream_handler = /*stream_handler*/
      S[27]), E[0] & /*value*/
      1 | E[2] & /*$$scope*/
      1 && (C.$$scope = { dirty: E, ctx: S }), !_ && E[1] & /*uploading*/
      2 && (_ = !0, C.uploading = /*uploading*/
      S[32], Bl(() => _ = !1)), !f && E[1] & /*dragging*/
      4 && (f = !0, C.dragging = /*dragging*/
      S[33], Bl(() => f = !1)), c.$set(C), /*value*/
      S[0] === null && /*active_source*/
      S[1] === "webcam" ? q ? (q.p(S, E), E[0] & /*value, active_source*/
      3 && ie(q, 1)) : (q = yr(S), q.c(), ie(q, 1), q.m(a, h)) : q && (Sn(), _e(q, 1, 1, () => {
        q = null;
      }), Cn()), /*value*/
      S[0] !== null ? z ? (z.p(S, E), E[0] & /*value*/
      1 && ie(z, 1)) : (z = Cr(S), z.c(), ie(z, 1), z.m(a, null)) : z && (Sn(), _e(z, 1, 1, () => {
        z = null;
      }), Cn()), E[0] & /*sources, value, interactive*/
      145 && (u = /*sources*/
      (S[4].length > 1 || /*sources*/
      S[4].includes("clipboard")) && /*value*/
      S[0] === null && /*interactive*/
      S[7]), u ? M ? (M.p(S, E), E[0] & /*sources, value, interactive*/
      145 && ie(M, 1)) : (M = qr(S), M.c(), ie(M, 1), M.m(r, null)) : M && (Sn(), _e(M, 1, 1, () => {
        M = null;
      }), Cn());
    },
    i(S) {
      m || (ie(e.$$.fragment, S), ie(g), ie(w), ie(p), ie(c.$$.fragment, S), ie(q), ie(z), ie(M), m = !0);
    },
    o(S) {
      _e(e.$$.fragment, S), _e(g), _e(w), _e(p), _e(c.$$.fragment, S), _e(q), _e(z), _e(M), m = !1;
    },
    d(S) {
      S && (It(t), It(n), It(s), It(r)), Kt(e, S), g && g.d(), w && w.d(), p && p.d(), i[49](null), Kt(c), q && q.d(), z && z.d(), M && M.d();
    }
  };
}
function wp(i) {
  var e, t, n, l, o, s, r, a;
  const c = Math.round((t = (e = i._xmin) !== null && e !== void 0 ? e : i.xmin) !== null && t !== void 0 ? t : 0), _ = Math.round((l = (n = i._ymin) !== null && n !== void 0 ? n : i.ymin) !== null && l !== void 0 ? l : 0), f = Math.round((s = (o = i._xmax) !== null && o !== void 0 ? o : i.xmax) !== null && s !== void 0 ? s : 0), d = Math.round((a = (r = i._ymax) !== null && r !== void 0 ? r : i.ymax) !== null && a !== void 0 ? a : 0);
  return `xmin:${c}, ymin:${_}, xmax:${f}, ymax:${d}`;
}
function kp(i) {
  var e, t, n, l;
  const o = Math.round((t = (e = i._x) !== null && e !== void 0 ? e : i.x) !== null && t !== void 0 ? t : 0), s = Math.round((l = (n = i._y) !== null && n !== void 0 ? n : i.y) !== null && l !== void 0 ? l : 0);
  return `x:${o}, y:${s}`;
}
function yp(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var o = this && this.__awaiter || function(B, Fe, Se, rt) {
    function xe(Ye) {
      return Ye instanceof Se ? Ye : new Se(function(jn) {
        jn(Ye);
      });
    }
    return new (Se || (Se = Promise))(function(Ye, jn) {
      function Ul($e) {
        try {
          Fn(rt.next($e));
        } catch (pn) {
          jn(pn);
        }
      }
      function Vl($e) {
        try {
          Fn(rt.throw($e));
        } catch (pn) {
          jn(pn);
        }
      }
      function Fn($e) {
        $e.done ? Ye($e.value) : xe($e.value).then(Ul, Vl);
      }
      Fn((rt = rt.apply(B, Fe || [])).next());
    });
  };
  let { value: s } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: c = ["upload", "webcam", "clipboard"] } = e, { selectable: _ = !1 } = e, { root: f } = e, { interactive: d } = e, { i18n: h } = e, { showShareButton: b } = e, { showDownloadButton: u } = e, { showClearButton: m } = e, { boxesAlpha: g } = e, { labelList: w } = e, { labelColors: p } = e, { boxMinSize: y } = e, { handleSize: D } = e, { height: k } = e, { width: q } = e, { boxThickness: z } = e, { disableEditBoxes: M } = e, { singleBox: S } = e, { showRemoveButton: E } = e, { handlesCursor: X } = e, { boxSelectedThickness: C } = e, { max_file_size: ee = null } = e, { cli_upload: J } = e, { stream_handler: x } = e, { useDefaultLabel: G } = e, { enableKeyboardShortcuts: W } = e, F = [], I = 0, U = null, Y = !1, le, ae = !1, { active_source: H = null } = e;
  function be({ detail: B }) {
    t(0, s = new hr()), t(0, s.image = B, s), T("upload", void 0);
  }
  function L(B) {
    return o(this, void 0, void 0, function* () {
      const Fe = yield le.load_files([new File([B], "webcam.png")]), Se = (Fe == null ? void 0 : Fe[0]) || null;
      Se ? (t(0, s = new hr()), t(0, s.image = Se, s)) : t(0, s = null), yield hp(), T("change");
    });
  }
  const T = dp();
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
  function fe() {
    t(44, I += 1), T("change");
  }
  function A(B) {
    U === B.id ? (t(31, U = null), t(34, Y = !1)) : (t(31, U = B.id), t(34, Y = !0));
  }
  function at() {
    t(31, U = null), t(34, Y = !1);
  }
  function Xe(B, Fe) {
    (B.key === "Enter" || B.key === " ") && (B.preventDefault(), A(Fe));
  }
  function $() {
    t(0, s = null), T("clear"), T("change");
  }
  const Te = async (B) => B === null ? "" : `<img src="${await xd(B.image)}" />`;
  function je(B) {
    Ci.call(this, i, B);
  }
  function Ce(B) {
    Ci.call(this, i, B);
  }
  function de(B) {
    Yi[B ? "unshift" : "push"](() => {
      le = B, t(35, le);
    });
  }
  function Qt(B) {
    ae = B, t(32, ae);
  }
  function Hn(B) {
    V = B, t(33, V);
  }
  function ji(B) {
    Ci.call(this, i, B);
  }
  const Me = (B) => L(B.detail), ce = (B) => L(B.detail);
  function Tn(B) {
    Ci.call(this, i, B);
  }
  function xt(B) {
    Ci.call(this, i, B);
  }
  const bn = (B) => L(B.detail);
  function Fi(B) {
    s = B, t(0, s);
  }
  const Fl = (B) => A(B), Ol = (B, Fe) => Xe(Fe, B);
  function Pl(B) {
    H = B, t(1, H), t(4, c);
  }
  return i.$$set = (B) => {
    "value" in B && t(0, s = B.value), "label" in B && t(2, r = B.label), "show_label" in B && t(3, a = B.show_label), "sources" in B && t(4, c = B.sources), "selectable" in B && t(5, _ = B.selectable), "root" in B && t(6, f = B.root), "interactive" in B && t(7, d = B.interactive), "i18n" in B && t(8, h = B.i18n), "showShareButton" in B && t(9, b = B.showShareButton), "showDownloadButton" in B && t(10, u = B.showDownloadButton), "showClearButton" in B && t(11, m = B.showClearButton), "boxesAlpha" in B && t(12, g = B.boxesAlpha), "labelList" in B && t(13, w = B.labelList), "labelColors" in B && t(14, p = B.labelColors), "boxMinSize" in B && t(15, y = B.boxMinSize), "handleSize" in B && t(16, D = B.handleSize), "height" in B && t(17, k = B.height), "width" in B && t(18, q = B.width), "boxThickness" in B && t(19, z = B.boxThickness), "disableEditBoxes" in B && t(20, M = B.disableEditBoxes), "singleBox" in B && t(21, S = B.singleBox), "showRemoveButton" in B && t(22, E = B.showRemoveButton), "handlesCursor" in B && t(23, X = B.handlesCursor), "boxSelectedThickness" in B && t(24, C = B.boxSelectedThickness), "max_file_size" in B && t(25, ee = B.max_file_size), "cli_upload" in B && t(26, J = B.cli_upload), "stream_handler" in B && t(27, x = B.stream_handler), "useDefaultLabel" in B && t(28, G = B.useDefaultLabel), "enableKeyboardShortcuts" in B && t(29, W = B.enableKeyboardShortcuts), "active_source" in B && t(1, H = B.active_source), "$$scope" in B && t(62, l = B.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*value, annotationItems*/
    1073741825 | i.$$.dirty[1] & /*annotationTick, selectedAnnotationId*/
    8193) {
      if (!s)
        t(30, F = []);
      else {
        const B = s.boxes.map((Se, rt) => {
          var xe, Ye;
          return {
            id: `box-${rt}`,
            label: !((xe = Se.label) === null || xe === void 0) && xe.trim() ? Se.label : "(No label)",
            shape: "box",
            coords: wp(Se),
            color: (Ye = Se.color) !== null && Ye !== void 0 ? Ye : "transparent",
            isSelected: U === `box-${rt}`
          };
        }), Fe = s.points.map((Se, rt) => {
          var xe, Ye;
          return {
            id: `point-${rt}`,
            label: !((xe = Se.label) === null || xe === void 0) && xe.trim() ? Se.label : "(No label)",
            shape: "point",
            coords: kp(Se),
            color: (Ye = Se.color) !== null && Ye !== void 0 ? Ye : "transparent",
            isSelected: U === `point-${rt}`
          };
        });
        t(30, F = [...B, ...Fe]);
      }
      U && !F.some((B) => B.id === U) && (t(31, U = null), t(34, Y = !1));
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
    D,
    k,
    q,
    z,
    M,
    S,
    E,
    X,
    C,
    ee,
    J,
    x,
    G,
    W,
    F,
    U,
    ae,
    V,
    Y,
    le,
    be,
    L,
    re,
    fe,
    A,
    at,
    Xe,
    $,
    I,
    n,
    Te,
    je,
    Ce,
    de,
    Qt,
    Hn,
    ji,
    Me,
    ce,
    Tn,
    xt,
    bn,
    Fi,
    Fl,
    Ol,
    Pl,
    l
  ];
}
class Cp extends ip {
  constructor(e) {
    super(), cp(
      this,
      e,
      yp,
      vp,
      up,
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
  SvelteComponent: Sp,
  attr: gl,
  detach: jc,
  element: Fc,
  init: qp,
  insert: Oc,
  noop: zr,
  safe_not_equal: zp,
  src_url_equal: Dr,
  toggle_class: cn
} = window.__gradio__svelte__internal;
function Br(i) {
  let e, t;
  return {
    c() {
      e = Fc("img"), Dr(e.src, t = /*value*/
      i[0].url) || gl(e, "src", t), gl(e, "alt", "");
    },
    m(n, l) {
      Oc(n, e, l);
    },
    p(n, l) {
      l & /*value*/
      1 && !Dr(e.src, t = /*value*/
      n[0].url) && gl(e, "src", t);
    },
    d(n) {
      n && jc(e);
    }
  };
}
function Dp(i) {
  let e, t = (
    /*value*/
    i[0] && Br(i)
  );
  return {
    c() {
      e = Fc("div"), t && t.c(), gl(e, "class", "container svelte-1sgcyba"), cn(
        e,
        "table",
        /*type*/
        i[1] === "table"
      ), cn(
        e,
        "gallery",
        /*type*/
        i[1] === "gallery"
      ), cn(
        e,
        "selected",
        /*selected*/
        i[2]
      ), cn(
        e,
        "border",
        /*value*/
        i[0]
      );
    },
    m(n, l) {
      Oc(n, e, l), t && t.m(e, null);
    },
    p(n, [l]) {
      /*value*/
      n[0] ? t ? t.p(n, l) : (t = Br(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), l & /*type*/
      2 && cn(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), l & /*type*/
      2 && cn(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), l & /*selected*/
      4 && cn(
        e,
        "selected",
        /*selected*/
        n[2]
      ), l & /*value*/
      1 && cn(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: zr,
    o: zr,
    d(n) {
      n && jc(e), t && t.d();
    }
  };
}
function Bp(i, e, t) {
  let { value: n } = e, { type: l } = e, { selected: o = !1 } = e;
  return i.$$set = (s) => {
    "value" in s && t(0, n = s.value), "type" in s && t(1, l = s.type), "selected" in s && t(2, o = s.selected);
  }, [n, l, o];
}
class Kq extends Sp {
  constructor(e) {
    super(), qp(this, e, Bp, Dp, zp, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: Mp,
  add_flush_callback: Mr,
  assign: Ep,
  bind: Er,
  binding_callbacks: Lr,
  check_outros: Lp,
  create_component: Xn,
  destroy_component: Yn,
  detach: Pc,
  empty: Ap,
  flush: ne,
  get_spread_object: Wp,
  get_spread_update: Rp,
  group_outros: Xp,
  init: Yp,
  insert: Uc,
  mount_component: In,
  safe_not_equal: Ip,
  space: Hp,
  transition_in: Gt,
  transition_out: Jt
} = window.__gradio__svelte__internal;
function Tp(i) {
  let e, t;
  return e = new of({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [Op] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Xn(e.$$.fragment);
    },
    m(n, l) {
      In(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*$$scope*/
      16384 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(n) {
      t || (Gt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Jt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Yn(e, n);
    }
  };
}
function jp(i) {
  let e, t;
  return e = new Vr({
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
      Xn(e.$$.fragment);
    },
    m(n, l) {
      In(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*gradio*/
      2 && (o.i18n = /*gradio*/
      n[32].i18n), e.$set(o);
    },
    i(n) {
      t || (Gt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Jt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Yn(e, n);
    }
  };
}
function Fp(i) {
  let e, t;
  return e = new Vr({
    props: {
      i18n: (
        /*gradio*/
        i[32].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      Xn(e.$$.fragment);
    },
    m(n, l) {
      In(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[1] & /*gradio*/
      2 && (o.i18n = /*gradio*/
      n[32].i18n), e.$set(o);
    },
    i(n) {
      t || (Gt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Jt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Yn(e, n);
    }
  };
}
function Op(i) {
  let e, t;
  return e = new Hr({}), {
    c() {
      Xn(e.$$.fragment);
    },
    m(n, l) {
      In(e, n, l), t = !0;
    },
    i(n) {
      t || (Gt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Jt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Yn(e, n);
    }
  };
}
function Pp(i) {
  let e, t, n, l;
  const o = [Fp, jp, Tp], s = [];
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
      t.c(), n = Ap();
    },
    m(a, c) {
      s[e].m(a, c), Uc(a, n, c), l = !0;
    },
    p(a, c) {
      let _ = e;
      e = r(a), e === _ ? s[e].p(a, c) : (Xp(), Jt(s[_], 1, 1, () => {
        s[_] = null;
      }), Lp(), t = s[e], t ? t.p(a, c) : (t = s[e] = o[e](a), t.c()), Gt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Gt(t), l = !0);
    },
    o(a) {
      Jt(t), l = !1;
    },
    d(a) {
      a && Pc(n), s[e].d(a);
    }
  };
}
function Up(i) {
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
    a = Ep(a, r[d]);
  e = new uh({ props: a });
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
    $$slots: { default: [Pp] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[34] !== void 0 && (f.active_source = /*active_source*/
    i[34]), /*value*/
    i[0] !== void 0 && (f.value = /*value*/
    i[0]), n = new Cp({ props: f }), Lr.push(() => Er(n, "active_source", c)), Lr.push(() => Er(n, "value", _)), n.$on(
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
        Xn(e.$$.fragment), t = Hp(), Xn(n.$$.fragment);
      },
      m(d, h) {
        In(e, d, h), Uc(d, t, h), In(n, d, h), s = !0;
      },
      p(d, h) {
        const b = h[0] & /*loading_status*/
        2 | h[1] & /*gradio*/
        2 ? Rp(r, [
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
          2 && Wp(
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
        d[34], Mr(() => l = !1)), !o && h[0] & /*value*/
        1 && (o = !0, u.value = /*value*/
        d[0], Mr(() => o = !1)), n.$set(u);
      },
      i(d) {
        s || (Gt(e.$$.fragment, d), Gt(n.$$.fragment, d), s = !0);
      },
      o(d) {
        Jt(e.$$.fragment, d), Jt(n.$$.fragment, d), s = !1;
      },
      d(d) {
        d && Pc(t), Yn(e, d), Yn(n, d);
      }
    }
  );
}
function Vp(i) {
  let e, t;
  return e = new M_({
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
      $$slots: { default: [Up] },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      Xn(e.$$.fragment);
    },
    m(n, l) {
      In(e, n, l), t = !0;
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
      t || (Gt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Jt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Yn(e, n);
    }
  };
}
function Np(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: l = [] } = e, { visible: o = !0 } = e, { value: s = null } = e, { label: r } = e, { show_label: a } = e, { root: c } = e, { height: _ } = e, { width: f } = e, { _selectable: d = !1 } = e, { container: h = !0 } = e, { scale: b = null } = e, { min_width: u = void 0 } = e, { loading_status: m } = e, { sources: g = ["upload", "webcam", "clipboard"] } = e, { show_download_button: w } = e, { show_share_button: p } = e, { show_clear_button: y } = e, { interactive: D } = e, { boxes_alpha: k } = e, { label_list: q } = e, { label_colors: z } = e, { box_min_size: M } = e, { handle_size: S } = e, { box_thickness: E } = e, { box_selected_thickness: X } = e, { disable_edit_boxes: C } = e, { single_box: ee } = e, { show_remove_button: J } = e, { handles_cursor: x } = e, { use_default_label: G } = e, { enable_keyboard_shortcuts: W } = e, { gradio: F } = e, I, U = null;
  function Y(A) {
    U = A, t(34, U);
  }
  function le(A) {
    s = A, t(0, s);
  }
  const ae = () => F.dispatch("change"), H = () => F.dispatch("edit"), be = () => {
    F.dispatch("clear");
  }, L = ({ detail: A }) => t(33, I = A), T = () => F.dispatch("upload"), V = ({ detail: A }) => F.dispatch("select", A), re = ({ detail: A }) => F.dispatch("share", A), fe = ({ detail: A }) => {
    t(1, m = m || {}), t(1, m.status = "error", m), F.dispatch("error", A);
  };
  return i.$$set = (A) => {
    "elem_id" in A && t(2, n = A.elem_id), "elem_classes" in A && t(3, l = A.elem_classes), "visible" in A && t(4, o = A.visible), "value" in A && t(0, s = A.value), "label" in A && t(5, r = A.label), "show_label" in A && t(6, a = A.show_label), "root" in A && t(7, c = A.root), "height" in A && t(8, _ = A.height), "width" in A && t(9, f = A.width), "_selectable" in A && t(10, d = A._selectable), "container" in A && t(11, h = A.container), "scale" in A && t(12, b = A.scale), "min_width" in A && t(13, u = A.min_width), "loading_status" in A && t(1, m = A.loading_status), "sources" in A && t(14, g = A.sources), "show_download_button" in A && t(15, w = A.show_download_button), "show_share_button" in A && t(16, p = A.show_share_button), "show_clear_button" in A && t(17, y = A.show_clear_button), "interactive" in A && t(18, D = A.interactive), "boxes_alpha" in A && t(19, k = A.boxes_alpha), "label_list" in A && t(20, q = A.label_list), "label_colors" in A && t(21, z = A.label_colors), "box_min_size" in A && t(22, M = A.box_min_size), "handle_size" in A && t(23, S = A.handle_size), "box_thickness" in A && t(24, E = A.box_thickness), "box_selected_thickness" in A && t(25, X = A.box_selected_thickness), "disable_edit_boxes" in A && t(26, C = A.disable_edit_boxes), "single_box" in A && t(27, ee = A.single_box), "show_remove_button" in A && t(28, J = A.show_remove_button), "handles_cursor" in A && t(29, x = A.handles_cursor), "use_default_label" in A && t(30, G = A.use_default_label), "enable_keyboard_shortcuts" in A && t(31, W = A.enable_keyboard_shortcuts), "gradio" in A && t(32, F = A.gradio);
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
    D,
    k,
    q,
    z,
    M,
    S,
    E,
    X,
    C,
    ee,
    J,
    x,
    G,
    W,
    F,
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
    fe
  ];
}
class Zq extends Mp {
  constructor(e) {
    super(), Yp(
      this,
      e,
      Np,
      Vp,
      Ip,
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
  Kq as BaseExample,
  Zq as default
};
