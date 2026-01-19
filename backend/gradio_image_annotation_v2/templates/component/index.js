const {
  SvelteComponent: h_,
  assign: m_,
  create_slot: g_,
  detach: p_,
  element: b_,
  get_all_dirty_from_scope: v_,
  get_slot_changes: w_,
  get_spread_update: k_,
  init: y_,
  insert: C_,
  safe_not_equal: S_,
  set_dynamic_element_data: Ms,
  set_style: et,
  toggle_class: Lt,
  transition_in: Rr,
  transition_out: Xr,
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
      e = b_(
        /*tag*/
        i[14]
      ), o && o.c(), Ms(
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
      ), Ms(
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
      n || (Rr(o, a), n = !0);
    },
    o(a) {
      Xr(o, a), n = !1;
    },
    d(a) {
      a && p_(e), o && o.d(a);
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
      e || (Rr(t, n), e = !0);
    },
    o(n) {
      Xr(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function B_(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { height: o = void 0 } = e, { width: s = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: c = "solid" } = e, { border_mode: _ = "base" } = e, { padding: f = !0 } = e, { type: d = "normal" } = e, { test_id: h = void 0 } = e, { explicit_call: p = !1 } = e, { container: u = !0 } = e, { visible: m = !0 } = e, { allow_overflow: g = !0 } = e, { scale: w = null } = e, { min_width: b = 0 } = e, C = d === "fieldset" ? "fieldset" : "div";
  const z = (k) => {
    if (k !== void 0) {
      if (typeof k == "number")
        return k + "px";
      if (typeof k == "string")
        return k;
    }
  };
  return i.$$set = (k) => {
    "height" in k && t(0, o = k.height), "width" in k && t(1, s = k.width), "elem_id" in k && t(2, r = k.elem_id), "elem_classes" in k && t(3, a = k.elem_classes), "variant" in k && t(4, c = k.variant), "border_mode" in k && t(5, _ = k.border_mode), "padding" in k && t(6, f = k.padding), "type" in k && t(16, d = k.type), "test_id" in k && t(7, h = k.test_id), "explicit_call" in k && t(8, p = k.explicit_call), "container" in k && t(9, u = k.container), "visible" in k && t(10, m = k.visible), "allow_overflow" in k && t(11, g = k.allow_overflow), "scale" in k && t(12, w = k.scale), "min_width" in k && t(13, b = k.min_width), "$$scope" in k && t(17, l = k.$$scope);
  }, [
    o,
    s,
    r,
    a,
    c,
    _,
    f,
    h,
    p,
    u,
    m,
    g,
    w,
    b,
    C,
    z,
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
  attr: Es,
  check_outros: K_,
  create_component: Z_,
  create_slot: G_,
  destroy_component: J_,
  detach: ul,
  element: Q_,
  empty: x_,
  get_all_dirty_from_scope: $_,
  get_slot_changes: eu,
  group_outros: tu,
  init: nu,
  insert: fl,
  mount_component: iu,
  safe_not_equal: lu,
  set_data: ou,
  space: su,
  text: au,
  toggle_class: Pn,
  transition_in: zi,
  transition_out: dl,
  update_slot_base: ru
} = window.__gradio__svelte__internal;
function Ls(i) {
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
      t || (zi(e.$$.fragment, n), t = !0);
    },
    o(n) {
      dl(e.$$.fragment, n), t = !1;
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
      fl(t, e, n);
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
      t && ul(e);
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
    i[1] && Ls(i)
  );
  return {
    c() {
      e = Q_("span"), s && s.c(), t = su(), r && r.c(), n = x_(), Es(e, "data-testid", "block-info"), Es(e, "class", "svelte-22c38v"), Pn(e, "sr-only", !/*show_label*/
      i[0]), Pn(e, "hide", !/*show_label*/
      i[0]), Pn(
        e,
        "has-info",
        /*info*/
        i[1] != null
      );
    },
    m(a, c) {
      fl(a, e, c), s && s.m(e, null), fl(a, t, c), r && r.m(a, c), fl(a, n, c), l = !0;
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
      2 && zi(r, 1)) : (r = Ls(a), r.c(), zi(r, 1), r.m(n.parentNode, n)) : r && (tu(), dl(r, 1, 1, () => {
        r = null;
      }), K_());
    },
    i(a) {
      l || (zi(s, a), zi(r), l = !0);
    },
    o(a) {
      dl(s, a), dl(r), l = !1;
    },
    d(a) {
      a && (ul(e), ul(t), ul(n)), s && s.d(a), r && r.d(a);
    }
  };
}
function uu(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { show_label: o = !0 } = e, { info: s = void 0 } = e;
  return i.$$set = (r) => {
    "show_label" in r && t(0, o = r.show_label), "info" in r && t(1, s = r.info), "$$scope" in r && t(3, l = r.$$scope);
  }, [o, s, n, l];
}
class Yr extends N_ {
  constructor(e) {
    super(), nu(this, e, uu, _u, lu, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: fu,
  append: Ql,
  attr: Ui,
  create_component: du,
  destroy_component: hu,
  detach: mu,
  element: As,
  init: gu,
  insert: pu,
  mount_component: bu,
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
      e = As("label"), t = As("span"), du(n.$$.fragment), l = ku(), o = yu(
        /*label*/
        i[0]
      ), Ui(t, "class", "svelte-9gxdi0"), Ui(e, "for", ""), Ui(e, "data-testid", "block-label"), Ui(e, "class", "svelte-9gxdi0"), en(e, "hide", !/*show_label*/
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
      pu(r, e, a), Ql(e, t), bu(n, t, null), Ql(e, l), Ql(e, o), s = !0;
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
  append: No,
  attr: Ut,
  bubble: Mu,
  create_component: Eu,
  destroy_component: Lu,
  detach: Ir,
  element: Ko,
  init: Au,
  insert: Hr,
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
function Ws(i) {
  let e, t;
  return {
    c() {
      e = Ko("span"), t = Hu(
        /*label*/
        i[1]
      ), Ut(e, "class", "svelte-1lrphxw");
    },
    m(n, l) {
      Hr(n, e, l), No(e, t);
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
      n && Ir(e);
    }
  };
}
function Fu(i) {
  let e, t, n, l, o, s, r, a = (
    /*show_label*/
    i[2] && Ws(i)
  );
  return l = new /*Icon*/
  i[0]({}), {
    c() {
      e = Ko("button"), a && a.c(), t = Iu(), n = Ko("div"), Eu(l.$$.fragment), Ut(n, "class", "svelte-1lrphxw"), Pe(
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
      Hr(c, e, _), a && a.m(e, null), No(e, t), No(e, n), Ru(l, n, null), o = !0, s || (r = Wu(
        e,
        "click",
        /*click_handler*/
        i[14]
      ), s = !0);
    },
    p(c, [_]) {
      /*show_label*/
      c[2] ? a ? a.p(c, _) : (a = Ws(c), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!o || _ & /*size*/
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
      c && Ir(e), a && a.d(), Lu(l), s = !1, r();
    }
  };
}
function Ou(i, e, t) {
  let n, { Icon: l } = e, { label: o = "" } = e, { show_label: s = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: c = !0 } = e, { highlight: _ = !1 } = e, { disabled: f = !1 } = e, { hasPopup: d = !1 } = e, { color: h = "var(--block-label-text-color)" } = e, { transparent: p = !1 } = e, { background: u = "var(--background-fill-primary)" } = e, { offset: m = 0 } = e;
  function g(w) {
    Mu.call(this, i, w);
  }
  return i.$$set = (w) => {
    "Icon" in w && t(0, l = w.Icon), "label" in w && t(1, o = w.label), "show_label" in w && t(2, s = w.show_label), "pending" in w && t(3, r = w.pending), "size" in w && t(4, a = w.size), "padded" in w && t(5, c = w.padded), "highlight" in w && t(6, _ = w.highlight), "disabled" in w && t(7, f = w.disabled), "hasPopup" in w && t(8, d = w.hasPopup), "color" in w && t(13, h = w.color), "transparent" in w && t(9, p = w.transparent), "background" in w && t(10, u = w.background), "offset" in w && t(11, m = w.offset);
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
    p,
    u,
    m,
    n,
    h,
    g
  ];
}
class Wl extends Bu {
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
  attr: xl,
  binding_callbacks: Vu,
  create_slot: Nu,
  detach: Ku,
  element: Rs,
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
      e = Rs("div"), t = Rs("div"), o && o.c(), xl(t, "class", "icon svelte-3w3rth"), xl(e, "class", "empty svelte-3w3rth"), xl(e, "aria-label", "Empty value"), tn(
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
    const { height: h } = f.getBoundingClientRect(), { height: p } = ((d = f.parentElement) === null || d === void 0 ? void 0 : d.getBoundingClientRect()) || { height: h };
    return h > p + 2;
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
  SvelteComponent: Kb,
  append: Zb,
  attr: Gb,
  detach: Jb,
  init: Qb,
  insert: xb,
  noop: $b,
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
  noop: p2,
  safe_not_equal: b2,
  svg_element: v2
} = window.__gradio__svelte__internal, {
  SvelteComponent: sf,
  append: Xs,
  attr: Ue,
  detach: af,
  init: rf,
  insert: cf,
  noop: $l,
  safe_not_equal: _f,
  svg_element: eo
} = window.__gradio__svelte__internal;
function uf(i) {
  let e, t, n;
  return {
    c() {
      e = eo("svg"), t = eo("path"), n = eo("circle"), Ue(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), Ue(n, "cx", "12"), Ue(n, "cy", "13"), Ue(n, "r", "4"), Ue(e, "xmlns", "http://www.w3.org/2000/svg"), Ue(e, "width", "100%"), Ue(e, "height", "100%"), Ue(e, "viewBox", "0 0 24 24"), Ue(e, "fill", "none"), Ue(e, "stroke", "currentColor"), Ue(e, "stroke-width", "1.5"), Ue(e, "stroke-linecap", "round"), Ue(e, "stroke-linejoin", "round"), Ue(e, "class", "feather feather-camera");
    },
    m(l, o) {
      cf(l, e, o), Xs(e, t), Xs(e, n);
    },
    p: $l,
    i: $l,
    o: $l,
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
  attr: vt,
  detach: mf,
  init: gf,
  insert: pf,
  noop: to,
  safe_not_equal: bf,
  svg_element: Ys
} = window.__gradio__svelte__internal;
function vf(i) {
  let e, t;
  return {
    c() {
      e = Ys("svg"), t = Ys("circle"), vt(t, "cx", "12"), vt(t, "cy", "12"), vt(t, "r", "10"), vt(e, "xmlns", "http://www.w3.org/2000/svg"), vt(e, "width", "100%"), vt(e, "height", "100%"), vt(e, "viewBox", "0 0 24 24"), vt(e, "stroke-width", "1.5"), vt(e, "stroke-linecap", "round"), vt(e, "stroke-linejoin", "round"), vt(e, "class", "feather feather-circle");
    },
    m(n, l) {
      pf(n, e, l), hf(e, t);
    },
    p: to,
    i: to,
    o: to,
    d(n) {
      n && mf(e);
    }
  };
}
class wf extends df {
  constructor(e) {
    super(), gf(this, e, null, vf, bf, {});
  }
}
const {
  SvelteComponent: kf,
  append: no,
  attr: wt,
  detach: yf,
  init: Cf,
  insert: Sf,
  noop: io,
  safe_not_equal: qf,
  set_style: At,
  svg_element: Vi
} = window.__gradio__svelte__internal;
function zf(i) {
  let e, t, n, l;
  return {
    c() {
      e = Vi("svg"), t = Vi("g"), n = Vi("path"), l = Vi("path"), wt(n, "d", "M18,6L6.087,17.913"), At(n, "fill", "none"), At(n, "fill-rule", "nonzero"), At(n, "stroke-width", "2px"), wt(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), wt(l, "d", "M4.364,4.364L19.636,19.636"), At(l, "fill", "none"), At(l, "fill-rule", "nonzero"), At(l, "stroke-width", "2px"), wt(e, "width", "100%"), wt(e, "height", "100%"), wt(e, "viewBox", "0 0 24 24"), wt(e, "version", "1.1"), wt(e, "xmlns", "http://www.w3.org/2000/svg"), wt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), wt(e, "xml:space", "preserve"), wt(e, "stroke", "currentColor"), At(e, "fill-rule", "evenodd"), At(e, "clip-rule", "evenodd"), At(e, "stroke-linecap", "round"), At(e, "stroke-linejoin", "round");
    },
    m(o, s) {
      Sf(o, e, s), no(e, t), no(t, n), no(e, l);
    },
    p: io,
    i: io,
    o: io,
    d(o) {
      o && yf(e);
    }
  };
}
let Tr = class extends kf {
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
  attr: pi,
  detach: Mf,
  init: Ef,
  insert: Lf,
  noop: lo,
  safe_not_equal: Af,
  svg_element: Is
} = window.__gradio__svelte__internal;
function Wf(i) {
  let e, t;
  return {
    c() {
      e = Is("svg"), t = Is("path"), pi(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), pi(t, "fill", "currentColor"), pi(e, "id", "icon"), pi(e, "xmlns", "http://www.w3.org/2000/svg"), pi(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      Lf(n, e, l), Bf(e, t);
    },
    p: lo,
    i: lo,
    o: lo,
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
  insert: pv,
  noop: bv,
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
  noop: oo,
  safe_not_equal: jf,
  svg_element: Hs
} = window.__gradio__svelte__internal;
function Ff(i) {
  let e, t;
  return {
    c() {
      e = Hs("svg"), t = Hs("path"), Vn(t, "fill", "currentColor"), Vn(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Vn(e, "xmlns", "http://www.w3.org/2000/svg"), Vn(e, "width", "100%"), Vn(e, "height", "100%"), Vn(e, "viewBox", "0 0 32 32");
    },
    m(n, l) {
      Tf(n, e, l), Yf(e, t);
    },
    p: oo,
    i: oo,
    o: oo,
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
  noop: so,
  safe_not_equal: Zf,
  svg_element: Ts
} = window.__gradio__svelte__internal;
function Gf(i) {
  let e, t;
  return {
    c() {
      e = Ts("svg"), t = Ts("path"), Nn(t, "d", "M5 8l4 4 4-4z"), Nn(e, "class", "dropdown-arrow svelte-145leq6"), Nn(e, "xmlns", "http://www.w3.org/2000/svg"), Nn(e, "width", "100%"), Nn(e, "height", "100%"), Nn(e, "viewBox", "0 0 18 18");
    },
    m(n, l) {
      Kf(n, e, l), Uf(e, t);
    },
    p: so,
    i: so,
    o: so,
    d(n) {
      n && Vf(e);
    }
  };
}
class ds extends Pf {
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
  insert: pw,
  noop: bw,
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
  append: ao,
  attr: ve,
  detach: Qf,
  init: xf,
  insert: $f,
  noop: ro,
  safe_not_equal: ed,
  svg_element: Ni
} = window.__gradio__svelte__internal;
function td(i) {
  let e, t, n, l;
  return {
    c() {
      e = Ni("svg"), t = Ni("rect"), n = Ni("circle"), l = Ni("polyline"), ve(t, "x", "3"), ve(t, "y", "3"), ve(t, "width", "18"), ve(t, "height", "18"), ve(t, "rx", "2"), ve(t, "ry", "2"), ve(n, "cx", "8.5"), ve(n, "cy", "8.5"), ve(n, "r", "1.5"), ve(l, "points", "21 15 16 10 5 21"), ve(e, "xmlns", "http://www.w3.org/2000/svg"), ve(e, "width", "100%"), ve(e, "height", "100%"), ve(e, "viewBox", "0 0 24 24"), ve(e, "fill", "none"), ve(e, "stroke", "currentColor"), ve(e, "stroke-width", "1.5"), ve(e, "stroke-linecap", "round"), ve(e, "stroke-linejoin", "round"), ve(e, "class", "feather feather-image");
    },
    m(o, s) {
      $f(o, e, s), ao(e, t), ao(e, n), ao(e, l);
    },
    p: ro,
    i: ro,
    o: ro,
    d(o) {
      o && Qf(e);
    }
  };
}
let jr = class extends Jf {
  constructor(e) {
    super(), xf(this, e, null, td, ed, {});
  }
};
const {
  SvelteComponent: nd,
  append: id,
  attr: Ki,
  detach: ld,
  init: od,
  insert: sd,
  noop: co,
  safe_not_equal: ad,
  svg_element: js
} = window.__gradio__svelte__internal;
function rd(i) {
  let e, t;
  return {
    c() {
      e = js("svg"), t = js("path"), Ki(t, "fill", "currentColor"), Ki(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), Ki(e, "xmlns", "http://www.w3.org/2000/svg"), Ki(e, "viewBox", "0 0 24 24");
    },
    m(n, l) {
      sd(n, e, l), id(e, t);
    },
    p: co,
    i: co,
    o: co,
    d(n) {
      n && ld(e);
    }
  };
}
class Fr extends nd {
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
  init: p3,
  insert: b3,
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
  append: Zi,
  attr: we,
  detach: _d,
  init: ud,
  insert: fd,
  noop: _o,
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
      fd(s, e, r), Zi(e, t), Zi(e, n), Zi(e, l), Zi(e, o);
    },
    p: _o,
    i: _o,
    o: _o,
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
  init: p4,
  insert: b4,
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
  append: Fs,
  attr: _t,
  detach: pd,
  init: bd,
  insert: vd,
  noop: uo,
  safe_not_equal: wd,
  set_style: kd,
  svg_element: fo
} = window.__gradio__svelte__internal;
function yd(i) {
  let e, t, n;
  return {
    c() {
      e = fo("svg"), t = fo("polyline"), n = fo("path"), _t(t, "points", "1 4 1 10 7 10"), _t(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), _t(e, "xmlns", "http://www.w3.org/2000/svg"), _t(e, "width", "100%"), _t(e, "height", "100%"), _t(e, "viewBox", "0 0 24 24"), _t(e, "fill", "none"), _t(e, "stroke", "currentColor"), _t(e, "stroke-width", "2"), _t(e, "stroke-linecap", "round"), _t(e, "stroke-linejoin", "round"), _t(e, "class", "feather feather-rotate-ccw"), kd(e, "transform", "rotateY(180deg)");
    },
    m(l, o) {
      vd(l, e, o), Fs(e, t), Fs(e, n);
    },
    p: uo,
    i: uo,
    o: uo,
    d(l) {
      l && pd(e);
    }
  };
}
class Cd extends gd {
  constructor(e) {
    super(), bd(this, e, null, yd, wd, {});
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
  init: p5,
  insert: b5,
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
  noop: ho,
  safe_not_equal: Md,
  svg_element: Os
} = window.__gradio__svelte__internal;
function Ed(i) {
  let e, t;
  return {
    c() {
      e = Os("svg"), t = Os("rect"), Ve(t, "x", "3"), Ve(t, "y", "3"), Ve(t, "width", "18"), Ve(t, "height", "18"), Ve(t, "rx", "2"), Ve(t, "ry", "2"), Ve(e, "xmlns", "http://www.w3.org/2000/svg"), Ve(e, "width", "100%"), Ve(e, "height", "100%"), Ve(e, "viewBox", "0 0 24 24"), Ve(e, "stroke-width", "1.5"), Ve(e, "stroke-linecap", "round"), Ve(e, "stroke-linejoin", "round"), Ve(e, "class", "feather feather-square");
    },
    m(n, l) {
      Bd(n, e, l), qd(e, t);
    },
    p: ho,
    i: ho,
    o: ho,
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
  insert: ek,
  noop: tk,
  safe_not_equal: nk,
  svg_element: ik,
  text: lk
} = window.__gradio__svelte__internal, {
  SvelteComponent: ok,
  append: sk,
  attr: ak,
  detach: rk,
  init: ck,
  insert: _k,
  noop: uk,
  safe_not_equal: fk,
  svg_element: dk
} = window.__gradio__svelte__internal, {
  SvelteComponent: hk,
  append: mk,
  attr: gk,
  detach: pk,
  init: bk,
  insert: vk,
  noop: wk,
  safe_not_equal: kk,
  svg_element: yk
} = window.__gradio__svelte__internal, {
  SvelteComponent: Ad,
  append: Ps,
  attr: ut,
  detach: Wd,
  init: Rd,
  insert: Xd,
  noop: mo,
  safe_not_equal: Yd,
  svg_element: go
} = window.__gradio__svelte__internal;
function Id(i) {
  let e, t, n;
  return {
    c() {
      e = go("svg"), t = go("polyline"), n = go("path"), ut(t, "points", "1 4 1 10 7 10"), ut(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), ut(e, "xmlns", "http://www.w3.org/2000/svg"), ut(e, "width", "100%"), ut(e, "height", "100%"), ut(e, "viewBox", "0 0 24 24"), ut(e, "fill", "none"), ut(e, "stroke", "currentColor"), ut(e, "stroke-width", "2"), ut(e, "stroke-linecap", "round"), ut(e, "stroke-linejoin", "round"), ut(e, "class", "feather feather-rotate-ccw");
    },
    m(l, o) {
      Xd(l, e, o), Ps(e, t), Ps(e, n);
    },
    p: mo,
    i: mo,
    o: mo,
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
  append: po,
  attr: Le,
  detach: jd,
  init: Fd,
  insert: Od,
  noop: bo,
  safe_not_equal: Pd,
  svg_element: Gi
} = window.__gradio__svelte__internal;
function Ud(i) {
  let e, t, n, l;
  return {
    c() {
      e = Gi("svg"), t = Gi("path"), n = Gi("polyline"), l = Gi("line"), Le(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), Le(n, "points", "17 8 12 3 7 8"), Le(l, "x1", "12"), Le(l, "y1", "3"), Le(l, "x2", "12"), Le(l, "y2", "15"), Le(e, "xmlns", "http://www.w3.org/2000/svg"), Le(e, "width", "90%"), Le(e, "height", "90%"), Le(e, "viewBox", "0 0 24 24"), Le(e, "fill", "none"), Le(e, "stroke", "currentColor"), Le(e, "stroke-width", "2"), Le(e, "stroke-linecap", "round"), Le(e, "stroke-linejoin", "round"), Le(e, "class", "feather feather-upload");
    },
    m(o, s) {
      Od(o, e, s), po(e, t), po(e, n), po(e, l);
    },
    p: bo,
    i: bo,
    o: bo,
    d(o) {
      o && jd(e);
    }
  };
}
let Or = class extends Td {
  constructor(e) {
    super(), Fd(this, e, null, Ud, Pd, {});
  }
};
const {
  SvelteComponent: Sk,
  append: qk,
  attr: zk,
  detach: Dk,
  init: Bk,
  insert: Mk,
  noop: Ek,
  safe_not_equal: Lk,
  svg_element: Ak
} = window.__gradio__svelte__internal, {
  SvelteComponent: Wk,
  append: Rk,
  attr: Xk,
  detach: Yk,
  init: Ik,
  insert: Hk,
  noop: Tk,
  safe_not_equal: jk,
  svg_element: Fk,
  text: Ok
} = window.__gradio__svelte__internal, {
  SvelteComponent: Pk,
  append: Uk,
  attr: Vk,
  detach: Nk,
  init: Kk,
  insert: Zk,
  noop: Gk,
  safe_not_equal: Jk,
  svg_element: Qk,
  text: xk
} = window.__gradio__svelte__internal, {
  SvelteComponent: $k,
  append: e6,
  attr: t6,
  detach: n6,
  init: i6,
  insert: l6,
  noop: o6,
  safe_not_equal: s6,
  svg_element: a6,
  text: r6
} = window.__gradio__svelte__internal, {
  SvelteComponent: c6,
  append: _6,
  attr: u6,
  detach: f6,
  init: d6,
  insert: h6,
  noop: m6,
  safe_not_equal: g6,
  svg_element: p6
} = window.__gradio__svelte__internal, {
  SvelteComponent: Vd,
  append: Us,
  attr: nn,
  detach: Nd,
  init: Kd,
  insert: Zd,
  noop: vo,
  safe_not_equal: Gd,
  svg_element: wo
} = window.__gradio__svelte__internal;
function Jd(i) {
  let e, t, n;
  return {
    c() {
      e = wo("svg"), t = wo("path"), n = wo("path"), nn(t, "fill", "currentColor"), nn(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), nn(n, "fill", "currentColor"), nn(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), nn(e, "xmlns", "http://www.w3.org/2000/svg"), nn(e, "width", "100%"), nn(e, "height", "100%"), nn(e, "viewBox", "0 0 24 24");
    },
    m(l, o) {
      Zd(l, e, o), Us(e, t), Us(e, n);
    },
    p: vo,
    i: vo,
    o: vo,
    d(l) {
      l && Nd(e);
    }
  };
}
let Pr = class extends Vd {
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
], Vs = {
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
    primary: Vs[e][t],
    secondary: Vs[e][n]
  }
}), {});
class hl extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function xd(i, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new hl("Must be on Spaces to share.");
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
      throw new hl(`Upload failed: ${c.error}`);
    }
    throw new hl("Upload failed.");
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
  return e = new Wl({
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
      let _ = c instanceof hl ? c.message : "Share failed.";
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
  attr: Zo,
  check_outros: d1,
  create_component: Ur,
  destroy_component: Vr,
  detach: ml,
  element: Go,
  group_outros: h1,
  init: m1,
  insert: gl,
  mount_component: Nr,
  safe_not_equal: g1,
  set_data: Jo,
  space: Qo,
  text: Di,
  toggle_class: Ns,
  transition_in: vl,
  transition_out: wl
} = window.__gradio__svelte__internal;
function p1(i) {
  let e, t;
  return e = new Or({}), {
    c() {
      Ur(e.$$.fragment);
    },
    m(n, l) {
      Nr(e, n, l), t = !0;
    },
    i(n) {
      t || (vl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      wl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Vr(e, n);
    }
  };
}
function b1(i) {
  let e, t;
  return e = new Fr({}), {
    c() {
      Ur(e.$$.fragment);
    },
    m(n, l) {
      Nr(e, n, l), t = !0;
    },
    i(n) {
      t || (vl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      wl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Vr(e, n);
    }
  };
}
function Ks(i) {
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
      e = Go("span"), t = Di("- "), l = Di(n), o = Di(" -"), s = Qo(), a = Di(r), Zo(e, "class", "or svelte-kzcjhc");
    },
    m(c, _) {
      gl(c, e, _), Dn(e, t), Dn(e, l), Dn(e, o), gl(c, s, _), gl(c, a, _);
    },
    p(c, _) {
      _ & /*i18n*/
      2 && n !== (n = /*i18n*/
      c[1]("common.or") + "") && Jo(l, n), _ & /*message, i18n*/
      6 && r !== (r = /*message*/
      (c[2] || /*i18n*/
      c[1]("upload_text.click_to_upload")) + "") && Jo(a, r);
    },
    d(c) {
      c && (ml(e), ml(s), ml(a));
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
  const _ = [b1, p1], f = [];
  function d(p, u) {
    return (
      /*type*/
      p[0] === "clipboard" ? 0 : 1
    );
  }
  n = d(i), l = f[n] = _[n](i);
  let h = (
    /*mode*/
    i[3] !== "short" && Ks(i)
  );
  return {
    c() {
      e = Go("div"), t = Go("span"), l.c(), o = Qo(), r = Di(s), a = Qo(), h && h.c(), Zo(t, "class", "icon-wrap svelte-kzcjhc"), Ns(
        t,
        "hovered",
        /*hovered*/
        i[4]
      ), Zo(e, "class", "wrap svelte-kzcjhc");
    },
    m(p, u) {
      gl(p, e, u), Dn(e, t), f[n].m(t, null), Dn(e, o), Dn(e, r), Dn(e, a), h && h.m(e, null), c = !0;
    },
    p(p, [u]) {
      let m = n;
      n = d(p), n !== m && (h1(), wl(f[m], 1, 1, () => {
        f[m] = null;
      }), d1(), l = f[n], l || (l = f[n] = _[n](p), l.c()), vl(l, 1), l.m(t, null)), (!c || u & /*hovered*/
      16) && Ns(
        t,
        "hovered",
        /*hovered*/
        p[4]
      ), (!c || u & /*i18n, type*/
      3) && s !== (s = /*i18n*/
      p[1](
        /*defs*/
        p[5][
          /*type*/
          p[0]
        ] || /*defs*/
        p[5].file
      ) + "") && Jo(r, s), /*mode*/
      p[3] !== "short" ? h ? h.p(p, u) : (h = Ks(p), h.c(), h.m(e, null)) : h && (h.d(1), h = null);
    },
    i(p) {
      c || (vl(l), c = !0);
    },
    o(p) {
      wl(l), c = !1;
    },
    d(p) {
      p && ml(e), f[n].d(), h && h.d();
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
class Kr extends f1 {
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
  SvelteComponent: v6,
  attr: w6,
  create_slot: k6,
  detach: y6,
  element: C6,
  get_all_dirty_from_scope: S6,
  get_slot_changes: q6,
  init: z6,
  insert: D6,
  safe_not_equal: B6,
  toggle_class: M6,
  transition_in: E6,
  transition_out: L6,
  update_slot_base: A6
} = window.__gradio__svelte__internal, {
  SvelteComponent: k1,
  append: ko,
  attr: Tt,
  check_outros: Bi,
  create_component: Rl,
  destroy_component: Xl,
  detach: ai,
  element: Hi,
  empty: y1,
  group_outros: Mi,
  init: C1,
  insert: ri,
  listen: Yl,
  mount_component: Il,
  safe_not_equal: S1,
  space: yo,
  toggle_class: gn,
  transition_in: qe,
  transition_out: Ke
} = window.__gradio__svelte__internal;
function Zs(i) {
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
  ), c, _ = t && Gs(i), f = l && Js(i), d = s && Qs(i), h = a && xs(i);
  return {
    c() {
      e = Hi("span"), _ && _.c(), n = yo(), f && f.c(), o = yo(), d && d.c(), r = yo(), h && h.c(), Tt(e, "class", "source-selection svelte-1jp3vgd"), Tt(e, "data-testid", "source-select");
    },
    m(p, u) {
      ri(p, e, u), _ && _.m(e, null), ko(e, n), f && f.m(e, null), ko(e, o), d && d.m(e, null), ko(e, r), h && h.m(e, null), c = !0;
    },
    p(p, u) {
      u & /*sources*/
      2 && (t = /*sources*/
      p[1].includes("upload")), t ? _ ? (_.p(p, u), u & /*sources*/
      2 && qe(_, 1)) : (_ = Gs(p), _.c(), qe(_, 1), _.m(e, n)) : _ && (Mi(), Ke(_, 1, 1, () => {
        _ = null;
      }), Bi()), u & /*sources*/
      2 && (l = /*sources*/
      p[1].includes("microphone")), l ? f ? (f.p(p, u), u & /*sources*/
      2 && qe(f, 1)) : (f = Js(p), f.c(), qe(f, 1), f.m(e, o)) : f && (Mi(), Ke(f, 1, 1, () => {
        f = null;
      }), Bi()), u & /*sources*/
      2 && (s = /*sources*/
      p[1].includes("webcam")), s ? d ? (d.p(p, u), u & /*sources*/
      2 && qe(d, 1)) : (d = Qs(p), d.c(), qe(d, 1), d.m(e, r)) : d && (Mi(), Ke(d, 1, 1, () => {
        d = null;
      }), Bi()), u & /*sources*/
      2 && (a = /*sources*/
      p[1].includes("clipboard")), a ? h ? (h.p(p, u), u & /*sources*/
      2 && qe(h, 1)) : (h = xs(p), h.c(), qe(h, 1), h.m(e, null)) : h && (Mi(), Ke(h, 1, 1, () => {
        h = null;
      }), Bi());
    },
    i(p) {
      c || (qe(_), qe(f), qe(d), qe(h), c = !0);
    },
    o(p) {
      Ke(_), Ke(f), Ke(d), Ke(h), c = !1;
    },
    d(p) {
      p && ai(e), _ && _.d(), f && f.d(), d && d.d(), h && h.d();
    }
  };
}
function Gs(i) {
  let e, t, n, l, o;
  return t = new Or({}), {
    c() {
      e = Hi("button"), Rl(t.$$.fragment), Tt(e, "class", "icon svelte-1jp3vgd"), Tt(e, "aria-label", "Upload file"), gn(
        e,
        "selected",
        /*active_source*/
        i[0] === "upload" || !/*active_source*/
        i[0]
      );
    },
    m(s, r) {
      ri(s, e, r), Il(t, e, null), n = !0, l || (o = Yl(
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
      s && ai(e), Xl(t), l = !1, o();
    }
  };
}
function Js(i) {
  let e, t, n, l, o;
  return t = new md({}), {
    c() {
      e = Hi("button"), Rl(t.$$.fragment), Tt(e, "class", "icon svelte-1jp3vgd"), Tt(e, "aria-label", "Record audio"), gn(
        e,
        "selected",
        /*active_source*/
        i[0] === "microphone"
      );
    },
    m(s, r) {
      ri(s, e, r), Il(t, e, null), n = !0, l || (o = Yl(
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
      s && ai(e), Xl(t), l = !1, o();
    }
  };
}
function Qs(i) {
  let e, t, n, l, o;
  return t = new Pr({}), {
    c() {
      e = Hi("button"), Rl(t.$$.fragment), Tt(e, "class", "icon svelte-1jp3vgd"), Tt(e, "aria-label", "Capture from camera"), gn(
        e,
        "selected",
        /*active_source*/
        i[0] === "webcam"
      );
    },
    m(s, r) {
      ri(s, e, r), Il(t, e, null), n = !0, l || (o = Yl(
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
      s && ai(e), Xl(t), l = !1, o();
    }
  };
}
function xs(i) {
  let e, t, n, l, o;
  return t = new Fr({}), {
    c() {
      e = Hi("button"), Rl(t.$$.fragment), Tt(e, "class", "icon svelte-1jp3vgd"), Tt(e, "aria-label", "Paste from clipboard"), gn(
        e,
        "selected",
        /*active_source*/
        i[0] === "clipboard"
      );
    },
    m(s, r) {
      ri(s, e, r), Il(t, e, null), n = !0, l || (o = Yl(
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
      s && ai(e), Xl(t), l = !1, o();
    }
  };
}
function q1(i) {
  let e, t, n = (
    /*unique_sources*/
    i[2].length > 1 && Zs(i)
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
      4 && qe(n, 1)) : (n = Zs(l), n.c(), qe(n, 1), n.m(e.parentNode, e)) : n && (Mi(), Ke(n, 1, 1, () => {
        n = null;
      }), Bi());
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
  var l = this && this.__awaiter || function(p, u, m, g) {
    function w(b) {
      return b instanceof m ? b : new m(function(C) {
        C(b);
      });
    }
    return new (m || (m = Promise))(function(b, C) {
      function z(q) {
        try {
          D(g.next(q));
        } catch (M) {
          C(M);
        }
      }
      function k(q) {
        try {
          D(g.throw(q));
        } catch (M) {
          C(M);
        }
      }
      function D(q) {
        q.done ? b(q.value) : w(q.value).then(z, k);
      }
      D((g = g.apply(p, u || [])).next());
    });
  };
  let { sources: o } = e, { active_source: s } = e, { handle_clear: r = () => {
  } } = e, { handle_select: a = () => {
  } } = e;
  function c(p) {
    return l(this, void 0, void 0, function* () {
      r(), t(0, s = p), a(p);
    });
  }
  const _ = () => c("upload"), f = () => c("microphone"), d = () => c("webcam"), h = () => c("clipboard");
  return i.$$set = (p) => {
    "sources" in p && t(1, o = p.sources), "active_source" in p && t(0, s = p.active_source), "handle_clear" in p && t(4, r = p.handle_clear), "handle_select" in p && t(5, a = p.handle_select);
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
function pl() {
}
const B1 = (i) => i;
function $s(i) {
  const e = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [i, "px"];
}
const Zr = typeof window < "u";
let ea = Zr ? () => window.performance.now() : () => Date.now(), Gr = Zr ? (i) => requestAnimationFrame(i) : pl;
const si = /* @__PURE__ */ new Set();
function Jr(i) {
  si.forEach((e) => {
    e.c(i) || (si.delete(e), e.f());
  }), si.size !== 0 && Gr(Jr);
}
function M1(i) {
  let e;
  return si.size === 0 && Gr(Jr), { promise: new Promise((t) => {
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
function ta(i, { delay: e = 0, duration: t = 400, easing: n = E1, x: l = 0, y: o = 0, opacity: s = 0 } = {}) {
  const r = getComputedStyle(i), a = +r.opacity, c = r.transform === "none" ? "" : r.transform, _ = a * (1 - s), [f, d] = $s(l), [h, p] = $s(o);
  return { delay: e, duration: t, easing: n, css: (u, m) => `
			transform: ${c} translate(${(1 - u) * f}${d}, ${(1 - u) * h}${p});
			opacity: ${a - _ * m}` };
}
const Kn = [];
function A1(i, e = pl) {
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
  return { set: l, update: o, subscribe: function(s, r = pl) {
    const a = [s, r];
    return n.add(a), n.size === 1 && (t = e(l, o) || pl), s(i), () => {
      n.delete(a), n.size === 0 && t && (t(), t = null);
    };
  } };
}
function na(i) {
  return Object.prototype.toString.call(i) === "[object Date]";
}
function xo(i, e, t, n) {
  if (typeof t == "number" || na(t)) {
    const l = n - t, o = (t - e) / (i.dt || 1 / 60), s = (o + (i.opts.stiffness * l - i.opts.damping * o) * i.inv_mass) * i.dt;
    return Math.abs(s) < i.opts.precision && Math.abs(l) < i.opts.precision ? n : (i.settled = !1, na(t) ? new Date(t.getTime() + s) : t + s);
  }
  if (Array.isArray(t)) return t.map((l, o) => xo(i, e[o], t[o], n[o]));
  if (typeof t == "object") {
    const l = {};
    for (const o in t) l[o] = xo(i, e[o], t[o], n[o]);
    return l;
  }
  throw new Error(`Cannot spring ${typeof t} values`);
}
function ia(i, e = {}) {
  const t = A1(i), { stiffness: n = 0.15, damping: l = 0.8, precision: o = 0.01 } = e;
  let s, r, a, c = i, _ = i, f = 1, d = 0, h = !1;
  function p(m, g = {}) {
    _ = m;
    const w = a = {};
    return i == null || g.hard || u.stiffness >= 1 && u.damping >= 1 ? (h = !0, s = ea(), c = m, t.set(i = _), Promise.resolve()) : (g.soft && (d = 1 / (60 * (g.soft === !0 ? 0.5 : +g.soft)), f = 0), r || (s = ea(), h = !1, r = M1((b) => {
      if (h) return h = !1, r = null, !1;
      f = Math.min(f + d, 1);
      const C = { inv_mass: f, opts: u, settled: !0, dt: 60 * (b - s) / 1e3 }, z = xo(C, c, i, _);
      return s = b, c = i, t.set(i = z), C.settled && (r = null), !C.settled;
    })), new Promise((b) => {
      r.promise.then(() => {
        w === a && b();
      });
    }));
  }
  const u = { set: p, update: (m, g) => p(m(_, i), g), subscribe: t.subscribe, stiffness: n, damping: l, precision: o };
  return u;
}
const {
  SvelteComponent: W1,
  append: kt,
  attr: te,
  component_subscribe: la,
  detach: R1,
  element: X1,
  init: Y1,
  insert: I1,
  noop: oa,
  safe_not_equal: H1,
  set_style: Ji,
  svg_element: yt,
  toggle_class: sa
} = window.__gradio__svelte__internal, { onMount: T1 } = window.__gradio__svelte__internal;
function j1(i) {
  let e, t, n, l, o, s, r, a, c, _, f, d;
  return {
    c() {
      e = X1("div"), t = yt("svg"), n = yt("g"), l = yt("path"), o = yt("path"), s = yt("path"), r = yt("path"), a = yt("g"), c = yt("path"), _ = yt("path"), f = yt("path"), d = yt("path"), te(l, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), te(l, "fill", "#FF7C00"), te(l, "fill-opacity", "0.4"), te(l, "class", "svelte-43sxxs"), te(o, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), te(o, "fill", "#FF7C00"), te(o, "class", "svelte-43sxxs"), te(s, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), te(s, "fill", "#FF7C00"), te(s, "fill-opacity", "0.4"), te(s, "class", "svelte-43sxxs"), te(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), te(r, "fill", "#FF7C00"), te(r, "class", "svelte-43sxxs"), Ji(n, "transform", "translate(" + /*$top*/
      i[1][0] + "px, " + /*$top*/
      i[1][1] + "px)"), te(c, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), te(c, "fill", "#FF7C00"), te(c, "fill-opacity", "0.4"), te(c, "class", "svelte-43sxxs"), te(_, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), te(_, "fill", "#FF7C00"), te(_, "class", "svelte-43sxxs"), te(f, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), te(f, "fill", "#FF7C00"), te(f, "fill-opacity", "0.4"), te(f, "class", "svelte-43sxxs"), te(d, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), te(d, "fill", "#FF7C00"), te(d, "class", "svelte-43sxxs"), Ji(a, "transform", "translate(" + /*$bottom*/
      i[2][0] + "px, " + /*$bottom*/
      i[2][1] + "px)"), te(t, "viewBox", "-1200 -1200 3000 3000"), te(t, "fill", "none"), te(t, "xmlns", "http://www.w3.org/2000/svg"), te(t, "class", "svelte-43sxxs"), te(e, "class", "svelte-43sxxs"), sa(
        e,
        "margin",
        /*margin*/
        i[0]
      );
    },
    m(h, p) {
      I1(h, e, p), kt(e, t), kt(t, n), kt(n, l), kt(n, o), kt(n, s), kt(n, r), kt(t, a), kt(a, c), kt(a, _), kt(a, f), kt(a, d);
    },
    p(h, [p]) {
      p & /*$top*/
      2 && Ji(n, "transform", "translate(" + /*$top*/
      h[1][0] + "px, " + /*$top*/
      h[1][1] + "px)"), p & /*$bottom*/
      4 && Ji(a, "transform", "translate(" + /*$bottom*/
      h[2][0] + "px, " + /*$bottom*/
      h[2][1] + "px)"), p & /*margin*/
      1 && sa(
        e,
        "margin",
        /*margin*/
        h[0]
      );
    },
    i: oa,
    o: oa,
    d(h) {
      h && R1(e);
    }
  };
}
function F1(i, e, t) {
  let n, l;
  var o = this && this.__awaiter || function(h, p, u, m) {
    function g(w) {
      return w instanceof u ? w : new u(function(b) {
        b(w);
      });
    }
    return new (u || (u = Promise))(function(w, b) {
      function C(D) {
        try {
          k(m.next(D));
        } catch (q) {
          b(q);
        }
      }
      function z(D) {
        try {
          k(m.throw(D));
        } catch (q) {
          b(q);
        }
      }
      function k(D) {
        D.done ? w(D.value) : g(D.value).then(C, z);
      }
      k((m = m.apply(h, p || [])).next());
    });
  };
  let { margin: s = !0 } = e;
  const r = ia([0, 0]);
  la(i, r, (h) => t(1, n = h));
  const a = ia([0, 0]);
  la(i, a, (h) => t(2, l = h));
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
  attr: Et,
  binding_callbacks: aa,
  check_outros: $o,
  create_component: Qr,
  create_slot: xr,
  destroy_component: $r,
  destroy_each: ec,
  detach: N,
  element: Xt,
  empty: ci,
  ensure_array_like: kl,
  get_all_dirty_from_scope: tc,
  get_slot_changes: nc,
  group_outros: es,
  init: U1,
  insert: K,
  mount_component: ic,
  noop: ts,
  safe_not_equal: V1,
  set_data: pt,
  set_style: hn,
  space: gt,
  text: pe,
  toggle_class: ht,
  transition_in: Mt,
  transition_out: Yt,
  update_slot_base: lc
} = window.__gradio__svelte__internal, { tick: N1 } = window.__gradio__svelte__internal, { onDestroy: K1 } = window.__gradio__svelte__internal, { createEventDispatcher: Z1 } = window.__gradio__svelte__internal, G1 = (i) => ({}), ra = (i) => ({}), J1 = (i) => ({}), ca = (i) => ({});
function _a(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n[43] = t, n;
}
function ua(i, e, t) {
  const n = i.slice();
  return n[41] = e[t], n;
}
function Q1(i) {
  let e, t, n, l, o = (
    /*i18n*/
    i[1]("common.error") + ""
  ), s, r, a;
  t = new Wl({
    props: {
      Icon: Tr,
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
  ), _ = xr(
    c,
    i,
    /*$$scope*/
    i[29],
    ra
  );
  return {
    c() {
      e = Xt("div"), Qr(t.$$.fragment), n = gt(), l = Xt("span"), s = pe(o), r = gt(), _ && _.c(), Et(e, "class", "clear-status svelte-16nch4a"), Et(l, "class", "error svelte-16nch4a");
    },
    m(f, d) {
      K(f, e, d), ic(t, e, null), K(f, n, d), K(f, l, d), Bn(l, s), K(f, r, d), _ && _.m(f, d), a = !0;
    },
    p(f, d) {
      const h = {};
      d[0] & /*i18n*/
      2 && (h.label = /*i18n*/
      f[1]("common.clear")), t.$set(h), (!a || d[0] & /*i18n*/
      2) && o !== (o = /*i18n*/
      f[1]("common.error") + "") && pt(s, o), _ && _.p && (!a || d[0] & /*$$scope*/
      536870912) && lc(
        _,
        c,
        f,
        /*$$scope*/
        f[29],
        a ? nc(
          c,
          /*$$scope*/
          f[29],
          d,
          G1
        ) : tc(
          /*$$scope*/
          f[29]
        ),
        ra
      );
    },
    i(f) {
      a || (Mt(t.$$.fragment, f), Mt(_, f), a = !0);
    },
    o(f) {
      Yt(t.$$.fragment, f), Yt(_, f), a = !1;
    },
    d(f) {
      f && (N(e), N(n), N(l), N(r)), $r(t), _ && _.d(f);
    }
  };
}
function x1(i) {
  let e, t, n, l, o, s, r, a, c, _ = (
    /*variant*/
    i[8] === "default" && /*show_eta_bar*/
    i[18] && /*show_progress*/
    i[6] === "full" && fa(i)
  );
  function f(b, C) {
    if (
      /*progress*/
      b[7]
    ) return th;
    if (
      /*queue_position*/
      b[2] !== null && /*queue_size*/
      b[3] !== void 0 && /*queue_position*/
      b[2] >= 0
    ) return eh;
    if (
      /*queue_position*/
      b[2] === 0
    ) return $1;
  }
  let d = f(i), h = d && d(i), p = (
    /*timer*/
    i[5] && ma(i)
  );
  const u = [oh, lh], m = [];
  function g(b, C) {
    return (
      /*last_progress_level*/
      b[15] != null ? 0 : (
        /*show_progress*/
        b[6] === "full" ? 1 : -1
      )
    );
  }
  ~(o = g(i)) && (s = m[o] = u[o](i));
  let w = !/*timer*/
  i[5] && ya(i);
  return {
    c() {
      _ && _.c(), e = gt(), t = Xt("div"), h && h.c(), n = gt(), p && p.c(), l = gt(), s && s.c(), r = gt(), w && w.c(), a = ci(), Et(t, "class", "progress-text svelte-16nch4a"), ht(
        t,
        "meta-text-center",
        /*variant*/
        i[8] === "center"
      ), ht(
        t,
        "meta-text",
        /*variant*/
        i[8] === "default"
      );
    },
    m(b, C) {
      _ && _.m(b, C), K(b, e, C), K(b, t, C), h && h.m(t, null), Bn(t, n), p && p.m(t, null), K(b, l, C), ~o && m[o].m(b, C), K(b, r, C), w && w.m(b, C), K(b, a, C), c = !0;
    },
    p(b, C) {
      /*variant*/
      b[8] === "default" && /*show_eta_bar*/
      b[18] && /*show_progress*/
      b[6] === "full" ? _ ? _.p(b, C) : (_ = fa(b), _.c(), _.m(e.parentNode, e)) : _ && (_.d(1), _ = null), d === (d = f(b)) && h ? h.p(b, C) : (h && h.d(1), h = d && d(b), h && (h.c(), h.m(t, n))), /*timer*/
      b[5] ? p ? p.p(b, C) : (p = ma(b), p.c(), p.m(t, null)) : p && (p.d(1), p = null), (!c || C[0] & /*variant*/
      256) && ht(
        t,
        "meta-text-center",
        /*variant*/
        b[8] === "center"
      ), (!c || C[0] & /*variant*/
      256) && ht(
        t,
        "meta-text",
        /*variant*/
        b[8] === "default"
      );
      let z = o;
      o = g(b), o === z ? ~o && m[o].p(b, C) : (s && (es(), Yt(m[z], 1, 1, () => {
        m[z] = null;
      }), $o()), ~o ? (s = m[o], s ? s.p(b, C) : (s = m[o] = u[o](b), s.c()), Mt(s, 1), s.m(r.parentNode, r)) : s = null), /*timer*/
      b[5] ? w && (es(), Yt(w, 1, 1, () => {
        w = null;
      }), $o()) : w ? (w.p(b, C), C[0] & /*timer*/
      32 && Mt(w, 1)) : (w = ya(b), w.c(), Mt(w, 1), w.m(a.parentNode, a));
    },
    i(b) {
      c || (Mt(s), Mt(w), c = !0);
    },
    o(b) {
      Yt(s), Yt(w), c = !1;
    },
    d(b) {
      b && (N(e), N(t), N(l), N(r), N(a)), _ && _.d(b), h && h.d(), p && p.d(), ~o && m[o].d(b), w && w.d(b);
    }
  };
}
function fa(i) {
  let e, t = `translateX(${/*eta_level*/
  (i[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = Xt("div"), Et(e, "class", "eta-bar svelte-16nch4a"), hn(e, "transform", t);
    },
    m(n, l) {
      K(n, e, l);
    },
    p(n, l) {
      l[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && hn(e, "transform", t);
    },
    d(n) {
      n && N(e);
    }
  };
}
function $1(i) {
  let e;
  return {
    c() {
      e = pe("processing |");
    },
    m(t, n) {
      K(t, e, n);
    },
    p: ts,
    d(t) {
      t && N(e);
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
      e = pe("queue: "), n = pe(t), l = pe("/"), o = pe(
        /*queue_size*/
        i[3]
      ), s = pe(" |");
    },
    m(r, a) {
      K(r, e, a), K(r, n, a), K(r, l, a), K(r, o, a), K(r, s, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && pt(n, t), a[0] & /*queue_size*/
      8 && pt(
        o,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (N(e), N(n), N(l), N(o), N(s));
    }
  };
}
function th(i) {
  let e, t = kl(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = ha(ua(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = ci();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      K(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*progress*/
      128) {
        t = kl(
          /*progress*/
          l[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = ua(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = ha(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && N(e), ec(n, l);
    }
  };
}
function da(i) {
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
      c.c(), e = gt(), n = pe(t), l = pe(" | "), s = pe(o);
    },
    m(_, f) {
      c.m(_, f), K(_, e, f), K(_, n, f), K(_, l, f), K(_, s, f);
    },
    p(_, f) {
      a === (a = r(_)) && c ? c.p(_, f) : (c.d(1), c = a(_), c && (c.c(), c.m(e.parentNode, e))), f[0] & /*progress*/
      128 && t !== (t = /*p*/
      _[41].unit + "") && pt(n, t);
    },
    d(_) {
      _ && (N(e), N(n), N(l), N(s)), c.d(_);
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
      t = pe(e);
    },
    m(n, l) {
      K(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = $n(
        /*p*/
        n[41].index || 0
      ) + "") && pt(t, e);
    },
    d(n) {
      n && N(t);
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
      t = pe(e), n = pe("/"), o = pe(l);
    },
    m(s, r) {
      K(s, t, r), K(s, n, r), K(s, o, r);
    },
    p(s, r) {
      r[0] & /*progress*/
      128 && e !== (e = $n(
        /*p*/
        s[41].index || 0
      ) + "") && pt(t, e), r[0] & /*progress*/
      128 && l !== (l = $n(
        /*p*/
        s[41].length
      ) + "") && pt(o, l);
    },
    d(s) {
      s && (N(t), N(n), N(o));
    }
  };
}
function ha(i) {
  let e, t = (
    /*p*/
    i[41].index != null && da(i)
  );
  return {
    c() {
      t && t.c(), e = ci();
    },
    m(n, l) {
      t && t.m(n, l), K(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].index != null ? t ? t.p(n, l) : (t = da(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && N(e), t && t.d(n);
    }
  };
}
function ma(i) {
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
      K(o, e, s), K(o, n, s), K(o, l, s);
    },
    p(o, s) {
      s[0] & /*formatted_timer*/
      1048576 && pt(
        e,
        /*formatted_timer*/
        o[20]
      ), s[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      o[0] ? `/${/*formatted_eta*/
      o[19]}` : "") && pt(n, t);
    },
    d(o) {
      o && (N(e), N(n), N(l));
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
      Qr(e.$$.fragment);
    },
    m(n, l) {
      ic(e, n, l), t = !0;
    },
    p(n, l) {
      const o = {};
      l[0] & /*variant*/
      256 && (o.margin = /*variant*/
      n[8] === "default"), e.$set(o);
    },
    i(n) {
      t || (Mt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Yt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      $r(e, n);
    }
  };
}
function oh(i) {
  let e, t, n, l, o, s = `${/*last_progress_level*/
  i[15] * 100}%`, r = (
    /*progress*/
    i[7] != null && ga(i)
  );
  return {
    c() {
      e = Xt("div"), t = Xt("div"), r && r.c(), n = gt(), l = Xt("div"), o = Xt("div"), Et(t, "class", "progress-level-inner svelte-16nch4a"), Et(o, "class", "progress-bar svelte-16nch4a"), hn(o, "width", s), Et(l, "class", "progress-bar-wrap svelte-16nch4a"), Et(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, c) {
      K(a, e, c), Bn(e, t), r && r.m(t, null), Bn(e, n), Bn(e, l), Bn(l, o), i[31](o);
    },
    p(a, c) {
      /*progress*/
      a[7] != null ? r ? r.p(a, c) : (r = ga(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), c[0] & /*last_progress_level*/
      32768 && s !== (s = `${/*last_progress_level*/
      a[15] * 100}%`) && hn(o, "width", s);
    },
    i: ts,
    o: ts,
    d(a) {
      a && N(e), r && r.d(), i[31](null);
    }
  };
}
function ga(i) {
  let e, t = kl(
    /*progress*/
    i[7]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = ka(_a(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = ci();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      K(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*progress_level, progress*/
      16512) {
        t = kl(
          /*progress*/
          l[7]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = _a(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = ka(r), n[s].c(), n[s].m(e.parentNode, e));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && N(e), ec(n, l);
    }
  };
}
function pa(i) {
  let e, t, n, l, o = (
    /*i*/
    i[43] !== 0 && sh()
  ), s = (
    /*p*/
    i[41].desc != null && ba(i)
  ), r = (
    /*p*/
    i[41].desc != null && /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null && va()
  ), a = (
    /*progress_level*/
    i[14] != null && wa(i)
  );
  return {
    c() {
      o && o.c(), e = gt(), s && s.c(), t = gt(), r && r.c(), n = gt(), a && a.c(), l = ci();
    },
    m(c, _) {
      o && o.m(c, _), K(c, e, _), s && s.m(c, _), K(c, t, _), r && r.m(c, _), K(c, n, _), a && a.m(c, _), K(c, l, _);
    },
    p(c, _) {
      /*p*/
      c[41].desc != null ? s ? s.p(c, _) : (s = ba(c), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null), /*p*/
      c[41].desc != null && /*progress_level*/
      c[14] && /*progress_level*/
      c[14][
        /*i*/
        c[43]
      ] != null ? r || (r = va(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      c[14] != null ? a ? a.p(c, _) : (a = wa(c), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null);
    },
    d(c) {
      c && (N(e), N(t), N(n), N(l)), o && o.d(c), s && s.d(c), r && r.d(c), a && a.d(c);
    }
  };
}
function sh(i) {
  let e;
  return {
    c() {
      e = pe(" /");
    },
    m(t, n) {
      K(t, e, n);
    },
    d(t) {
      t && N(e);
    }
  };
}
function ba(i) {
  let e = (
    /*p*/
    i[41].desc + ""
  ), t;
  return {
    c() {
      t = pe(e);
    },
    m(n, l) {
      K(n, t, l);
    },
    p(n, l) {
      l[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && pt(t, e);
    },
    d(n) {
      n && N(t);
    }
  };
}
function va(i) {
  let e;
  return {
    c() {
      e = pe("-");
    },
    m(t, n) {
      K(t, e, n);
    },
    d(t) {
      t && N(e);
    }
  };
}
function wa(i) {
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
      K(l, t, o), K(l, n, o);
    },
    p(l, o) {
      o[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (l[14][
        /*i*/
        l[43]
      ] || 0)).toFixed(1) + "") && pt(t, e);
    },
    d(l) {
      l && (N(t), N(n));
    }
  };
}
function ka(i) {
  let e, t = (
    /*p*/
    (i[41].desc != null || /*progress_level*/
    i[14] && /*progress_level*/
    i[14][
      /*i*/
      i[43]
    ] != null) && pa(i)
  );
  return {
    c() {
      t && t.c(), e = ci();
    },
    m(n, l) {
      t && t.m(n, l), K(n, e, l);
    },
    p(n, l) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, l) : (t = pa(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && N(e), t && t.d(n);
    }
  };
}
function ya(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[30]["additional-loading-text"]
  ), s = xr(
    o,
    i,
    /*$$scope*/
    i[29],
    ca
  );
  return {
    c() {
      e = Xt("p"), t = pe(
        /*loading_text*/
        i[9]
      ), n = gt(), s && s.c(), Et(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      K(r, e, a), Bn(e, t), K(r, n, a), s && s.m(r, a), l = !0;
    },
    p(r, a) {
      (!l || a[0] & /*loading_text*/
      512) && pt(
        t,
        /*loading_text*/
        r[9]
      ), s && s.p && (!l || a[0] & /*$$scope*/
      536870912) && lc(
        s,
        o,
        r,
        /*$$scope*/
        r[29],
        l ? nc(
          o,
          /*$$scope*/
          r[29],
          a,
          J1
        ) : tc(
          /*$$scope*/
          r[29]
        ),
        ca
      );
    },
    i(r) {
      l || (Mt(s, r), l = !0);
    },
    o(r) {
      Yt(s, r), l = !1;
    },
    d(r) {
      r && (N(e), N(n)), s && s.d(r);
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
      e = Xt("div"), n && n.c(), Et(e, "class", l = "wrap " + /*variant*/
      i[8] + " " + /*show_progress*/
      i[6] + " svelte-16nch4a"), ht(e, "hide", !/*status*/
      i[4] || /*status*/
      i[4] === "complete" || /*show_progress*/
      i[6] === "hidden"), ht(
        e,
        "translucent",
        /*variant*/
        i[8] === "center" && /*status*/
        (i[4] === "pending" || /*status*/
        i[4] === "error") || /*translucent*/
        i[11] || /*show_progress*/
        i[6] === "minimal"
      ), ht(
        e,
        "generating",
        /*status*/
        i[4] === "generating"
      ), ht(
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
      K(c, e, _), ~t && r[t].m(e, null), i[33](e), o = !0;
    },
    p(c, _) {
      let f = t;
      t = a(c), t === f ? ~t && r[t].p(c, _) : (n && (es(), Yt(r[f], 1, 1, () => {
        r[f] = null;
      }), $o()), ~t ? (n = r[t], n ? n.p(c, _) : (n = r[t] = s[t](c), n.c()), Mt(n, 1), n.m(e, null)) : n = null), (!o || _[0] & /*variant, show_progress*/
      320 && l !== (l = "wrap " + /*variant*/
      c[8] + " " + /*show_progress*/
      c[6] + " svelte-16nch4a")) && Et(e, "class", l), (!o || _[0] & /*variant, show_progress, status, show_progress*/
      336) && ht(e, "hide", !/*status*/
      c[4] || /*status*/
      c[4] === "complete" || /*show_progress*/
      c[6] === "hidden"), (!o || _[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && ht(
        e,
        "translucent",
        /*variant*/
        c[8] === "center" && /*status*/
        (c[4] === "pending" || /*status*/
        c[4] === "error") || /*translucent*/
        c[11] || /*show_progress*/
        c[6] === "minimal"
      ), (!o || _[0] & /*variant, show_progress, status*/
      336) && ht(
        e,
        "generating",
        /*status*/
        c[4] === "generating"
      ), (!o || _[0] & /*variant, show_progress, border*/
      4416) && ht(
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
      o || (Mt(n), o = !0);
    },
    o(c) {
      Yt(n), o = !1;
    },
    d(c) {
      c && N(e), ~t && r[t].d(), i[33](null);
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
let Qi = [], Co = !1;
function ch(i) {
  return rh(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Qi.push(e), !Co) Co = !0;
      else return;
      yield N1(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let l = 0; l < Qi.length; l++) {
          const s = Qi[l].getBoundingClientRect();
          (l === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = l);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Co = !1, Qi = [];
      });
    }
  });
}
function _h(i, e, t) {
  let n, { $$slots: l = {}, $$scope: o } = e;
  this && this.__awaiter;
  const s = Z1();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: c } = e, { queue_size: _ } = e, { status: f } = e, { scroll_to_output: d = !1 } = e, { timer: h = !0 } = e, { show_progress: p = "full" } = e, { message: u = null } = e, { progress: m = null } = e, { variant: g = "default" } = e, { loading_text: w = "Loading..." } = e, { absolute: b = !0 } = e, { translucent: C = !1 } = e, { border: z = !1 } = e, { autoscroll: k } = e, D, q = !1, M = 0, S = 0, E = null, X = null, y = 0, ee = null, J, x = null, Z = !0;
  const R = () => {
    t(0, a = t(27, E = t(19, P = null))), t(25, M = performance.now()), t(26, S = 0), q = !0, F();
  };
  function F() {
    requestAnimationFrame(() => {
      t(26, S = (performance.now() - M) / 1e3), q && F();
    });
  }
  function Y() {
    t(26, S = 0), t(0, a = t(27, E = t(19, P = null))), q && (q = !1);
  }
  K1(() => {
    q && Y();
  });
  let P = null;
  function I(H) {
    aa[H ? "unshift" : "push"](() => {
      x = H, t(16, x), t(7, m), t(14, ee), t(15, J);
    });
  }
  const le = () => {
    s("clear_status");
  };
  function ae(H) {
    aa[H ? "unshift" : "push"](() => {
      D = H, t(13, D);
    });
  }
  return i.$$set = (H) => {
    "i18n" in H && t(1, r = H.i18n), "eta" in H && t(0, a = H.eta), "queue_position" in H && t(2, c = H.queue_position), "queue_size" in H && t(3, _ = H.queue_size), "status" in H && t(4, f = H.status), "scroll_to_output" in H && t(22, d = H.scroll_to_output), "timer" in H && t(5, h = H.timer), "show_progress" in H && t(6, p = H.show_progress), "message" in H && t(23, u = H.message), "progress" in H && t(7, m = H.progress), "variant" in H && t(8, g = H.variant), "loading_text" in H && t(9, w = H.loading_text), "absolute" in H && t(10, b = H.absolute), "translucent" in H && t(11, C = H.translucent), "border" in H && t(12, z = H.border), "autoscroll" in H && t(24, k = H.autoscroll), "$$scope" in H && t(29, o = H.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = E), a != null && E !== a && (t(28, X = (performance.now() - M) / 1e3 + a), t(19, P = X.toFixed(1)), t(27, E = a))), i.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, y = X === null || X <= 0 || !S ? null : Math.min(S / X, 1)), i.$$.dirty[0] & /*progress*/
    128 && m != null && t(18, Z = !1), i.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (m != null ? t(14, ee = m.map((H) => {
      if (H.index != null && H.length != null)
        return H.index / H.length;
      if (H.progress != null)
        return H.progress;
    })) : t(14, ee = null), ee ? (t(15, J = ee[ee.length - 1]), x && (J === 0 ? t(16, x.style.transition = "0", x) : t(16, x.style.transition = "150ms", x))) : t(15, J = void 0)), i.$$.dirty[0] & /*status*/
    16 && (f === "pending" ? R() : Y()), i.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && D && d && (f === "pending" || f === "complete") && ch(D, k), i.$$.dirty[0] & /*status, message*/
    8388624, i.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = S.toFixed(1));
  }, [
    a,
    r,
    c,
    _,
    f,
    h,
    p,
    m,
    g,
    w,
    b,
    C,
    z,
    D,
    ee,
    J,
    x,
    y,
    Z,
    P,
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
    I,
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
  SvelteComponent: W6,
  add_render_callback: R6,
  append: X6,
  attr: Y6,
  bubble: I6,
  check_outros: H6,
  create_component: T6,
  create_in_transition: j6,
  create_out_transition: F6,
  destroy_component: O6,
  detach: P6,
  element: U6,
  group_outros: V6,
  init: N6,
  insert: K6,
  listen: Z6,
  mount_component: G6,
  run_all: J6,
  safe_not_equal: Q6,
  set_data: x6,
  space: $6,
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
  fix_and_outro_and_destroy_block: p8,
  fix_position: b8,
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
function oc() {
  return fh(dh);
}
function hh(i) {
  return i.host === window.location.host || i.host === "localhost:7860" || i.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  i.host === "lite.local";
}
function sc(i, e) {
  const t = e.toLowerCase();
  for (const [n, l] of Object.entries(i))
    if (n.toLowerCase() === t)
      return l;
}
function ac(i) {
  if (i == null)
    return !1;
  const e = new URL(i, window.location.href);
  return !(!hh(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function mh(i) {
  if (i == null || !ac(i))
    return i;
  const e = oc();
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
      type: sc(l.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: gh,
  assign: yl,
  check_outros: rc,
  compute_rest_props: Ca,
  create_slot: hs,
  detach: Hl,
  element: cc,
  empty: _c,
  exclude_internal_props: ph,
  get_all_dirty_from_scope: ms,
  get_slot_changes: gs,
  get_spread_update: uc,
  group_outros: fc,
  init: bh,
  insert: Tl,
  listen: dc,
  prevent_default: vh,
  safe_not_equal: wh,
  set_attributes: Cl,
  transition_in: An,
  transition_out: Wn,
  update_slot_base: ps
} = window.__gradio__svelte__internal, { createEventDispatcher: kh } = window.__gradio__svelte__internal;
function yh(i) {
  let e, t, n, l, o;
  const s = (
    /*#slots*/
    i[8].default
  ), r = hs(
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
    c = yl(c, a[_]);
  return {
    c() {
      e = cc("a"), r && r.c(), Cl(e, c);
    },
    m(_, f) {
      Tl(_, e, f), r && r.m(e, null), n = !0, l || (o = dc(
        e,
        "click",
        /*dispatch*/
        i[3].bind(null, "click")
      ), l = !0);
    },
    p(_, f) {
      r && r.p && (!n || f & /*$$scope*/
      128) && ps(
        r,
        s,
        _,
        /*$$scope*/
        _[7],
        n ? gs(
          s,
          /*$$scope*/
          _[7],
          f,
          null
        ) : ms(
          /*$$scope*/
          _[7]
        ),
        null
      ), Cl(e, c = uc(a, [
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
      _ && Hl(e), r && r.d(_), l = !1, o();
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
      t.c(), n = _c();
    },
    m(a, c) {
      s[e].m(a, c), Tl(a, n, c), l = !0;
    },
    p(a, c) {
      let _ = e;
      e = r(a), e === _ ? s[e].p(a, c) : (fc(), Wn(s[_], 1, 1, () => {
        s[_] = null;
      }), rc(), t = s[e], t ? t.p(a, c) : (t = s[e] = o[e](a), t.c()), An(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (An(t), l = !0);
    },
    o(a) {
      Wn(t), l = !1;
    },
    d(a) {
      a && Hl(n), s[e].d(a);
    }
  };
}
function Sh(i) {
  let e, t, n, l;
  const o = (
    /*#slots*/
    i[8].default
  ), s = hs(
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
    a = yl(a, r[c]);
  return {
    c() {
      e = cc("a"), s && s.c(), Cl(e, a);
    },
    m(c, _) {
      Tl(c, e, _), s && s.m(e, null), t = !0, n || (l = dc(e, "click", vh(
        /*wasm_click_handler*/
        i[5]
      )), n = !0);
    },
    p(c, _) {
      s && s.p && (!t || _ & /*$$scope*/
      128) && ps(
        s,
        o,
        c,
        /*$$scope*/
        c[7],
        t ? gs(
          o,
          /*$$scope*/
          c[7],
          _,
          null
        ) : ms(
          /*$$scope*/
          c[7]
        ),
        null
      ), Cl(e, a = uc(r, [
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
      c && Hl(e), s && s.d(c), n = !1, l();
    }
  };
}
function qh(i) {
  let e;
  const t = (
    /*#slots*/
    i[8].default
  ), n = hs(
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
      128) && ps(
        n,
        t,
        l,
        /*$$scope*/
        l[7],
        e ? gs(
          t,
          /*$$scope*/
          l[7],
          o,
          null
        ) : ms(
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
    (c[4] && ac(
      /*href*/
      c[0]
    ))), e ? 0 : 1;
  }
  return t = a(i, -1), n = r[t] = s[t](i), {
    c() {
      n.c(), l = _c();
    },
    m(c, _) {
      r[t].m(c, _), Tl(c, l, _), o = !0;
    },
    p(c, [_]) {
      let f = t;
      t = a(c, _), t === f ? r[t].p(c, _) : (fc(), Wn(r[f], 1, 1, () => {
        r[f] = null;
      }), rc(), n = r[t], n ? n.p(c, _) : (n = r[t] = s[t](c), n.c()), An(n, 1), n.m(l.parentNode, l));
    },
    i(c) {
      o || (An(n), o = !0);
    },
    o(c) {
      Wn(n), o = !1;
    },
    d(c) {
      c && Hl(l), r[t].d(c);
    }
  };
}
function Dh(i, e, t) {
  const n = ["href", "download"];
  let l = Ca(e, n), { $$slots: o = {}, $$scope: s } = e;
  var r = this && this.__awaiter || function(p, u, m, g) {
    function w(b) {
      return b instanceof m ? b : new m(function(C) {
        C(b);
      });
    }
    return new (m || (m = Promise))(function(b, C) {
      function z(q) {
        try {
          D(g.next(q));
        } catch (M) {
          C(M);
        }
      }
      function k(q) {
        try {
          D(g.throw(q));
        } catch (M) {
          C(M);
        }
      }
      function D(q) {
        q.done ? b(q.value) : w(q.value).then(z, k);
      }
      D((g = g.apply(p, u || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: c } = e;
  const _ = kh();
  let f = !1;
  const d = oc();
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
            type: sc(m.headers, "content-type")
          }
        ), w = URL.createObjectURL(g), b = document.createElement("a");
        b.href = w, b.download = c, b.click(), URL.revokeObjectURL(w);
      }).finally(() => {
        t(2, f = !1);
      });
    });
  }
  return i.$$set = (p) => {
    e = yl(yl({}, e), ph(p)), t(6, l = Ca(e, n)), "href" in p && t(0, a = p.href), "download" in p && t(1, c = p.download), "$$scope" in p && t(7, s = p.$$scope);
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
    super(), bh(this, e, Dh, zh, wh, { href: 0, download: 1 });
  }
}
var Mh = Object.defineProperty, Eh = (i, e, t) => e in i ? Mh(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, jt = (i, e, t) => (Eh(i, typeof e != "symbol" ? e + "" : e, t), t), hc = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
}, vi = (i, e, t) => (hc(i, e, "read from private field"), e.get(i)), Lh = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, Ah = (i, e, t, n) => (hc(i, e, "write to private field"), e.set(i, t), t), _n;
new Intl.Collator(0, { numeric: 1 }).compare;
async function mc(i, e) {
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
        for (t = vi(this, _n) + t; ; ) {
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
        if (vi(this, _n) === "")
          return;
        const n = e.allowCR && vi(this, _n).endsWith("\r") ? vi(this, _n).slice(0, -1) : vi(this, _n);
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
  detach: gc,
  element: zn,
  init: Xh,
  insert: pc,
  noop: Sa,
  safe_not_equal: Yh,
  set_data: Sl,
  set_style: So,
  space: ns,
  text: ei,
  toggle_class: qa
} = window.__gradio__svelte__internal, { onMount: Ih, createEventDispatcher: Hh, onDestroy: Th } = window.__gradio__svelte__internal;
function za(i) {
  let e, t, n, l, o = Ei(
    /*file_to_display*/
    i[2]
  ) + "", s, r, a, c, _ = (
    /*file_to_display*/
    i[2].orig_name + ""
  ), f;
  return {
    c() {
      e = zn("div"), t = zn("span"), n = zn("div"), l = zn("progress"), s = ei(o), a = ns(), c = zn("span"), f = ei(_), So(l, "visibility", "hidden"), So(l, "height", "0"), So(l, "width", "0"), l.value = r = Ei(
        /*file_to_display*/
        i[2]
      ), qn(l, "max", "100"), qn(l, "class", "svelte-cr2edf"), qn(n, "class", "progress-bar svelte-cr2edf"), qn(c, "class", "file-name svelte-cr2edf"), qn(e, "class", "file svelte-cr2edf");
    },
    m(d, h) {
      pc(d, e, h), Ge(e, t), Ge(t, n), Ge(n, l), Ge(l, s), Ge(e, a), Ge(e, c), Ge(c, f);
    },
    p(d, h) {
      h & /*file_to_display*/
      4 && o !== (o = Ei(
        /*file_to_display*/
        d[2]
      ) + "") && Sl(s, o), h & /*file_to_display*/
      4 && r !== (r = Ei(
        /*file_to_display*/
        d[2]
      )) && (l.value = r), h & /*file_to_display*/
      4 && _ !== (_ = /*file_to_display*/
      d[2].orig_name + "") && Sl(f, _);
    },
    d(d) {
      d && gc(e);
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
    i[2] && za(i)
  );
  return {
    c() {
      e = zn("div"), t = zn("span"), n = ei("Uploading "), o = ei(l), s = ns(), a = ei(r), c = ei("..."), _ = ns(), f && f.c(), qn(t, "class", "uploading svelte-cr2edf"), qn(e, "class", "wrap svelte-cr2edf"), qa(
        e,
        "progress",
        /*progress*/
        i[1]
      );
    },
    m(d, h) {
      pc(d, e, h), Ge(e, t), Ge(t, n), Ge(t, o), Ge(t, s), Ge(t, a), Ge(t, c), Ge(e, _), f && f.m(e, null);
    },
    p(d, [h]) {
      h & /*files_with_progress*/
      1 && l !== (l = /*files_with_progress*/
      d[0].length + "") && Sl(o, l), h & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      d[0].length > 1 ? "files" : "file") && Sl(a, r), /*file_to_display*/
      d[2] ? f ? f.p(d, h) : (f = za(d), f.c(), f.m(e, null)) : f && (f.d(1), f = null), h & /*progress*/
      2 && qa(
        e,
        "progress",
        /*progress*/
        d[1]
      );
    },
    i: Sa,
    o: Sa,
    d(d) {
      d && gc(e), f && f.d();
    }
  };
}
function Ei(i) {
  return i.progress * 100 / (i.size || 0) || 0;
}
function Fh(i) {
  let e = 0;
  return i.forEach((t) => {
    e += Ei(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / i.length).toFixed(2) + "%"), e / i.length;
}
function Oh(i, e, t) {
  var n = this && this.__awaiter || function(u, m, g, w) {
    function b(C) {
      return C instanceof g ? C : new g(function(z) {
        z(C);
      });
    }
    return new (g || (g = Promise))(function(C, z) {
      function k(M) {
        try {
          q(w.next(M));
        } catch (S) {
          z(S);
        }
      }
      function D(M) {
        try {
          q(w.throw(M));
        } catch (S) {
          z(S);
        }
      }
      function q(M) {
        M.done ? C(M.value) : b(M.value).then(k, D);
      }
      q((w = w.apply(u, m || [])).next());
    });
  };
  let { upload_id: l } = e, { root: o } = e, { files: s } = e, { stream_handler: r } = e, a, c = !1, _, f, d = s.map((u) => Object.assign(Object.assign({}, u), { progress: 0 }));
  const h = Hh();
  function p(u, m) {
    t(0, d = d.map((g) => (g.orig_name === u && (g.progress += m), g)));
  }
  return Ih(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${o}/upload_progress?upload_id=${l}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(u) {
      return n(this, void 0, void 0, function* () {
        const m = JSON.parse(u.data);
        c || t(1, c = !0), m.msg === "done" ? (a == null || a.close(), h("done")) : (t(7, _ = m), p(m.orig_name, m.chunk_size));
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
  append: Da,
  attr: Ae,
  binding_callbacks: Vh,
  bubble: vn,
  check_outros: bc,
  create_component: Nh,
  create_slot: vc,
  destroy_component: Kh,
  detach: jl,
  element: is,
  empty: wc,
  get_all_dirty_from_scope: kc,
  get_slot_changes: yc,
  group_outros: Cc,
  init: Zh,
  insert: Fl,
  listen: tt,
  mount_component: Gh,
  prevent_default: wn,
  run_all: Jh,
  safe_not_equal: Qh,
  set_style: Sc,
  space: xh,
  stop_propagation: kn,
  toggle_class: De,
  transition_in: mn,
  transition_out: Rn,
  update_slot_base: qc
} = window.__gradio__svelte__internal, { createEventDispatcher: $h, tick: em } = window.__gradio__svelte__internal;
function tm(i) {
  let e, t, n, l, o, s, r, a, c, _, f;
  const d = (
    /*#slots*/
    i[26].default
  ), h = vc(
    d,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = is("button"), h && h.c(), t = xh(), n = is("input"), Ae(n, "aria-label", "file upload"), Ae(n, "data-testid", "file-upload"), Ae(n, "type", "file"), Ae(n, "accept", l = /*accept_file_types*/
      i[16] || void 0), n.multiple = o = /*file_count*/
      i[6] === "multiple" || void 0, Ae(n, "webkitdirectory", s = /*file_count*/
      i[6] === "directory" || void 0), Ae(n, "mozdirectory", r = /*file_count*/
      i[6] === "directory" || void 0), Ae(n, "class", "svelte-1s26xmt"), Ae(e, "tabindex", a = /*hidden*/
      i[9] ? -1 : 0), Ae(e, "class", "svelte-1s26xmt"), De(
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
      ), Sc(e, "height", "100%");
    },
    m(p, u) {
      Fl(p, e, u), h && h.m(e, null), Da(e, t), Da(e, n), i[34](n), c = !0, _ || (f = [
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
    p(p, u) {
      h && h.p && (!c || u[0] & /*$$scope*/
      33554432) && qc(
        h,
        d,
        p,
        /*$$scope*/
        p[25],
        c ? yc(
          d,
          /*$$scope*/
          p[25],
          u,
          null
        ) : kc(
          /*$$scope*/
          p[25]
        ),
        null
      ), (!c || u[0] & /*accept_file_types*/
      65536 && l !== (l = /*accept_file_types*/
      p[16] || void 0)) && Ae(n, "accept", l), (!c || u[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      p[6] === "multiple" || void 0)) && (n.multiple = o), (!c || u[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      p[6] === "directory" || void 0)) && Ae(n, "webkitdirectory", s), (!c || u[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      p[6] === "directory" || void 0)) && Ae(n, "mozdirectory", r), (!c || u[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      p[9] ? -1 : 0)) && Ae(e, "tabindex", a), (!c || u[0] & /*hidden*/
      512) && De(
        e,
        "hidden",
        /*hidden*/
        p[9]
      ), (!c || u[0] & /*center*/
      16) && De(
        e,
        "center",
        /*center*/
        p[4]
      ), (!c || u[0] & /*boundedheight*/
      8) && De(
        e,
        "boundedheight",
        /*boundedheight*/
        p[3]
      ), (!c || u[0] & /*flex*/
      32) && De(
        e,
        "flex",
        /*flex*/
        p[5]
      ), (!c || u[0] & /*disable_click*/
      128) && De(
        e,
        "disable_click",
        /*disable_click*/
        p[7]
      );
    },
    i(p) {
      c || (mn(h, p), c = !0);
    },
    o(p) {
      Rn(h, p), c = !1;
    },
    d(p) {
      p && jl(e), h && h.d(p), i[34](null), _ = !1, Jh(f);
    }
  };
}
function nm(i) {
  let e, t, n = !/*hidden*/
  i[9] && Ba(i);
  return {
    c() {
      n && n.c(), e = wc();
    },
    m(l, o) {
      n && n.m(l, o), Fl(l, e, o), t = !0;
    },
    p(l, o) {
      /*hidden*/
      l[9] ? n && (Cc(), Rn(n, 1, 1, () => {
        n = null;
      }), bc()) : n ? (n.p(l, o), o[0] & /*hidden*/
      512 && mn(n, 1)) : (n = Ba(l), n.c(), mn(n, 1), n.m(e.parentNode, e));
    },
    i(l) {
      t || (mn(n), t = !0);
    },
    o(l) {
      Rn(n), t = !1;
    },
    d(l) {
      l && jl(e), n && n.d(l);
    }
  };
}
function im(i) {
  let e, t, n, l, o;
  const s = (
    /*#slots*/
    i[26].default
  ), r = vc(
    s,
    i,
    /*$$scope*/
    i[25],
    null
  );
  return {
    c() {
      e = is("button"), r && r.c(), Ae(e, "tabindex", t = /*hidden*/
      i[9] ? -1 : 0), Ae(e, "class", "svelte-1s26xmt"), De(
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
      ), Sc(e, "height", "100%");
    },
    m(a, c) {
      Fl(a, e, c), r && r.m(e, null), n = !0, l || (o = tt(
        e,
        "click",
        /*paste_clipboard*/
        i[12]
      ), l = !0);
    },
    p(a, c) {
      r && r.p && (!n || c[0] & /*$$scope*/
      33554432) && qc(
        r,
        s,
        a,
        /*$$scope*/
        a[25],
        n ? yc(
          s,
          /*$$scope*/
          a[25],
          c,
          null
        ) : kc(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || c[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && Ae(e, "tabindex", t), (!n || c[0] & /*hidden*/
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
      a && jl(e), r && r.d(a), l = !1, o();
    }
  };
}
function Ba(i) {
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
      t.c(), n = wc();
    },
    m(a, c) {
      s[e].m(a, c), Fl(a, n, c), l = !0;
    },
    p(a, c) {
      let _ = e;
      e = r(a), e === _ ? s[e].p(a, c) : (Cc(), Rn(s[_], 1, 1, () => {
        s[_] = null;
      }), bc(), t = s[e], t ? t.p(a, c) : (t = s[e] = o[e](a), t.c()), mn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (mn(t), l = !0);
    },
    o(a) {
      Rn(t), l = !1;
    },
    d(a) {
      a && jl(n), s[e].d(a);
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
    function de(A) {
      return A instanceof V ? A : new V(function(at) {
        at(A);
      });
    }
    return new (V || (V = Promise))(function(A, at) {
      function Ie(Fe) {
        try {
          je(re.next(Fe));
        } catch (Ce) {
          at(Ce);
        }
      }
      function $(Fe) {
        try {
          je(re.throw(Fe));
        } catch (Ce) {
          at(Ce);
        }
      }
      function je(Fe) {
        Fe.done ? A(Fe.value) : de(Fe.value).then(Ie, $);
      }
      je((re = re.apply(L, T || [])).next());
    });
  };
  let { filetype: s = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: c = !0 } = e, { flex: _ = !0 } = e, { file_count: f = "single" } = e, { disable_click: d = !1 } = e, { root: h } = e, { hidden: p = !1 } = e, { format: u = "file" } = e, { uploading: m = !1 } = e, { hidden_upload: g = null } = e, { show_progress: w = !0 } = e, { max_file_size: b = null } = e, { upload: C } = e, { stream_handler: z } = e, k, D, q;
  const M = $h(), S = ["image", "video", "audio", "text", "file"], E = (L) => L.startsWith(".") || L.endsWith("/*") ? L : S.includes(L) ? L + "/*" : "." + L;
  function X() {
    t(20, r = !r);
  }
  function y() {
    navigator.clipboard.read().then((L) => o(this, void 0, void 0, function* () {
      for (let T = 0; T < L.length; T++) {
        const V = L[T].types.find((re) => re.startsWith("image/"));
        if (V) {
          L[T].getType(V).then((re) => o(this, void 0, void 0, function* () {
            const de = new File([re], `clipboard.${V.replace("image/", "")}`);
            yield x([de]);
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
        const T = yield C(L, h, k, b ?? 1 / 0);
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
      return t(15, D = yield mc(T)), yield J(D);
    });
  }
  function Z(L) {
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
        const de = "." + re.name.split(".").pop();
        return de && om(q, de, re.type) || (de && Array.isArray(s) ? s.includes(de) : de === s) ? !0 : (M("error", `Invalid file type only ${s} allowed.`), !1);
      });
      yield x(V);
    });
  }
  function F(L) {
    vn.call(this, i, L);
  }
  function Y(L) {
    vn.call(this, i, L);
  }
  function P(L) {
    vn.call(this, i, L);
  }
  function I(L) {
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
    "filetype" in L && t(0, s = L.filetype), "dragging" in L && t(20, r = L.dragging), "boundedheight" in L && t(3, a = L.boundedheight), "center" in L && t(4, c = L.center), "flex" in L && t(5, _ = L.flex), "file_count" in L && t(6, f = L.file_count), "disable_click" in L && t(7, d = L.disable_click), "root" in L && t(8, h = L.root), "hidden" in L && t(9, p = L.hidden), "format" in L && t(21, u = L.format), "uploading" in L && t(1, m = L.uploading), "hidden_upload" in L && t(2, g = L.hidden_upload), "show_progress" in L && t(10, w = L.show_progress), "max_file_size" in L && t(22, b = L.max_file_size), "upload" in L && t(23, C = L.upload), "stream_handler" in L && t(11, z = L.stream_handler), "$$scope" in L && t(25, l = L.$$scope);
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
    p,
    w,
    z,
    y,
    ee,
    k,
    D,
    q,
    X,
    Z,
    R,
    r,
    u,
    b,
    C,
    x,
    l,
    n,
    F,
    Y,
    P,
    I,
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
  destroy_component: p7,
  detach: b7,
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
  append: xi,
  attr: qo,
  create_component: cm,
  destroy_component: _m,
  detach: um,
  element: zo,
  init: fm,
  insert: dm,
  listen: hm,
  mount_component: mm,
  noop: gm,
  safe_not_equal: pm,
  set_style: bm,
  space: vm,
  text: wm,
  transition_in: km,
  transition_out: ym
} = window.__gradio__svelte__internal, { createEventDispatcher: Cm } = window.__gradio__svelte__internal;
function Sm(i) {
  let e, t, n, l, o, s = "Click to Access Webcam", r, a, c, _;
  return l = new Pr({}), {
    c() {
      e = zo("button"), t = zo("div"), n = zo("span"), cm(l.$$.fragment), o = vm(), r = wm(s), qo(n, "class", "icon-wrap svelte-fjcd9c"), qo(t, "class", "wrap svelte-fjcd9c"), qo(e, "class", "svelte-fjcd9c"), bm(e, "height", "100%");
    },
    m(f, d) {
      dm(f, e, d), xi(e, t), xi(t, n), mm(l, n, null), xi(t, o), xi(t, r), a = !0, c || (_ = hm(
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
    super(), fm(this, e, qm, Sm, pm, {});
  }
}
function Dm() {
  return navigator.mediaDevices.enumerateDevices();
}
function Bm(i, e) {
  e.srcObject = i, e.muted = !0, e.play();
}
async function Ma(i, e, t) {
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
  check_outros: Ai,
  create_component: _i,
  create_in_transition: Rm,
  destroy_component: ui,
  destroy_each: Xm,
  detach: Je,
  element: st,
  empty: bs,
  ensure_array_like: Ea,
  group_outros: Wi,
  init: Ym,
  insert: Qe,
  listen: ql,
  mount_component: fi,
  noop: vs,
  run_all: Im,
  safe_not_equal: Hm,
  set_data: zc,
  set_input_value: ls,
  space: Yi,
  stop_propagation: Tm,
  text: Dc,
  toggle_class: $i,
  transition_in: Be,
  transition_out: Xe
} = window.__gradio__svelte__internal, { createEventDispatcher: jm, onMount: Fm } = window.__gradio__svelte__internal;
function La(i, e, t) {
  const n = i.slice();
  return n[32] = e[t], n;
}
function Om(i) {
  let e, t, n, l, o, s, r, a, c, _, f;
  const d = [Vm, Um], h = [];
  function p(g, w) {
    return (
      /*mode*/
      g[1] === "video" || /*streaming*/
      g[0] ? 0 : 1
    );
  }
  n = p(i), l = h[n] = d[n](i);
  let u = !/*recording*/
  i[8] && Aa(i), m = (
    /*options_open*/
    i[10] && /*selected_device*/
    i[7] && Wa(i)
  );
  return {
    c() {
      e = st("div"), t = st("button"), l.c(), s = Yi(), u && u.c(), r = Yi(), m && m.c(), a = bs(), ye(t, "aria-label", o = /*mode*/
      i[1] === "image" ? "capture photo" : "start recording"), ye(t, "class", "svelte-8hqvb6"), ye(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(g, w) {
      Qe(g, e, w), Vt(e, t), h[n].m(t, null), Vt(e, s), u && u.m(e, null), Qe(g, r, w), m && m.m(g, w), Qe(g, a, w), c = !0, _ || (f = ql(
        t,
        "click",
        /*record_video_or_photo*/
        i[13]
      ), _ = !0);
    },
    p(g, w) {
      let b = n;
      n = p(g), n === b ? h[n].p(g, w) : (Wi(), Xe(h[b], 1, 1, () => {
        h[b] = null;
      }), Ai(), l = h[n], l ? l.p(g, w) : (l = h[n] = d[n](g), l.c()), Be(l, 1), l.m(t, null)), (!c || w[0] & /*mode*/
      2 && o !== (o = /*mode*/
      g[1] === "image" ? "capture photo" : "start recording")) && ye(t, "aria-label", o), /*recording*/
      g[8] ? u && (Wi(), Xe(u, 1, 1, () => {
        u = null;
      }), Ai()) : u ? (u.p(g, w), w[0] & /*recording*/
      256 && Be(u, 1)) : (u = Aa(g), u.c(), Be(u, 1), u.m(e, null)), /*options_open*/
      g[10] && /*selected_device*/
      g[7] ? m ? (m.p(g, w), w[0] & /*options_open, selected_device*/
      1152 && Be(m, 1)) : (m = Wa(g), m.c(), Be(m, 1), m.m(a.parentNode, a)) : m && (Wi(), Xe(m, 1, 1, () => {
        m = null;
      }), Ai());
    },
    i(g) {
      c || (Be(l), Be(u), Be(m), c = !0);
    },
    o(g) {
      Xe(l), Xe(u), Xe(m), c = !1;
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
    p: vs,
    i(o) {
      l || (Be(t.$$.fragment, o), o && (n || Am(() => {
        n = Rm(e, L1, { delay: 100, duration: 200 }), n.start();
      })), l = !0);
    },
    o(o) {
      Xe(t.$$.fragment, o), l = !1;
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
    p: vs,
    i(l) {
      n || (Be(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Xe(t.$$.fragment, l), n = !1;
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
      t.c(), n = bs();
    },
    m(a, c) {
      s[e].m(a, c), Qe(a, n, c), l = !0;
    },
    p(a, c) {
      let _ = e;
      e = r(a), e !== _ && (Wi(), Xe(s[_], 1, 1, () => {
        s[_] = null;
      }), Ai(), t = s[e], t || (t = s[e] = o[e](a), t.c()), Be(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Be(t), l = !0);
    },
    o(a) {
      Xe(t), l = !1;
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
      Xe(t.$$.fragment, l), n = !1;
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
      Xe(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && Je(e), ui(t);
    }
  };
}
function Aa(i) {
  let e, t, n, l, o;
  return t = new ds({}), {
    c() {
      e = st("button"), _i(t.$$.fragment), ye(e, "class", "icon svelte-8hqvb6"), ye(e, "aria-label", "select input source");
    },
    m(s, r) {
      Qe(s, e, r), fi(t, e, null), n = !0, l || (o = ql(
        e,
        "click",
        /*click_handler_1*/
        i[21]
      ), l = !0);
    },
    p: vs,
    i(s) {
      n || (Be(t.$$.fragment, s), n = !0);
    },
    o(s) {
      Xe(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && Je(e), ui(t), l = !1, o();
    }
  };
}
function Wa(i) {
  let e, t, n, l, o, s, r;
  n = new ds({});
  function a(f, d) {
    return (
      /*available_video_devices*/
      f[6].length === 0 ? Gm : Zm
    );
  }
  let c = a(i), _ = c(i);
  return {
    c() {
      e = st("select"), t = st("button"), _i(n.$$.fragment), l = Yi(), _.c(), ye(t, "class", "inset-icon svelte-8hqvb6"), ye(e, "class", "select-wrap svelte-8hqvb6"), ye(e, "aria-label", "select source");
    },
    m(f, d) {
      Qe(f, e, d), Vt(e, t), fi(n, t, null), Vt(t, l), _.m(e, null), o = !0, s || (r = [
        ql(t, "click", Tm(
          /*click_handler_2*/
          i[22]
        )),
        Lm(ws.call(
          null,
          e,
          /*handle_click_outside*/
          i[14]
        )),
        ql(
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
      Xe(n.$$.fragment, f), o = !1;
    },
    d(f) {
      f && Je(e), ui(n), _.d(), s = !1, Im(r);
    }
  };
}
function Zm(i) {
  let e, t = Ea(
    /*available_video_devices*/
    i[6]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = Ra(La(i, t, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = bs();
    },
    m(l, o) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(l, o);
      Qe(l, e, o);
    },
    p(l, o) {
      if (o[0] & /*available_video_devices, selected_device*/
      192) {
        t = Ea(
          /*available_video_devices*/
          l[6]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = La(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = Ra(r), n[s].c(), n[s].m(e.parentNode, e));
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
      e = st("option"), n = Dc(t), e.__value = "", ls(e, e.__value), ye(e, "class", "svelte-8hqvb6");
    },
    m(l, o) {
      Qe(l, e, o), Vt(e, n);
    },
    p(l, o) {
      o[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      l[3]("common.no_devices") + "") && zc(n, t);
    },
    d(l) {
      l && Je(e);
    }
  };
}
function Ra(i) {
  let e, t = (
    /*device*/
    i[32].label + ""
  ), n, l, o, s;
  return {
    c() {
      e = st("option"), n = Dc(t), l = Yi(), e.__value = o = /*device*/
      i[32].deviceId, ls(e, e.__value), e.selected = s = /*selected_device*/
      i[7].deviceId === /*device*/
      i[32].deviceId, ye(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      Qe(r, e, a), Vt(e, n), Vt(e, l);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && zc(n, t), a[0] & /*available_video_devices*/
      64 && o !== (o = /*device*/
      r[32].deviceId) && (e.__value = o, ls(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
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
      e = st("div"), t = st("video"), n = Yi(), o.c(), ye(t, "class", "svelte-8hqvb6"), $i(
        t,
        "flip",
        /*mirror_webcam*/
        i[2]
      ), $i(t, "hide", !/*webcam_accessed*/
      i[9]), ye(e, "class", "wrap svelte-8hqvb6");
    },
    m(_, f) {
      Qe(_, e, f), Vt(e, t), i[19](t), Vt(e, n), a[l].m(e, null), s = !0;
    },
    p(_, f) {
      (!s || f[0] & /*mirror_webcam*/
      4) && $i(
        t,
        "flip",
        /*mirror_webcam*/
        _[2]
      ), (!s || f[0] & /*webcam_accessed*/
      512) && $i(t, "hide", !/*webcam_accessed*/
      _[9]);
      let d = l;
      l = c(_), l === d ? a[l].p(_, f) : (Wi(), Xe(a[d], 1, 1, () => {
        a[d] = null;
      }), Ai(), o = a[l], o ? o.p(_, f) : (o = a[l] = r[l](_), o.c()), Be(o, 1), o.m(e, null));
    },
    i(_) {
      s || (Be(o), s = !0);
    },
    o(_) {
      Xe(o), s = !1;
    },
    d(_) {
      _ && Je(e), i[19](null), a[l].d();
    }
  };
}
function ws(i, e) {
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
  var n = this && this.__awaiter || function(R, F, Y, P) {
    function I(le) {
      return le instanceof Y ? le : new Y(function(ae) {
        ae(le);
      });
    }
    return new (Y || (Y = Promise))(function(le, ae) {
      function H(T) {
        try {
          L(P.next(T));
        } catch (V) {
          ae(V);
        }
      }
      function be(T) {
        try {
          L(P.throw(T));
        } catch (V) {
          ae(V);
        }
      }
      function L(T) {
        T.done ? le(T.value) : I(T.value).then(H, be);
      }
      L((P = P.apply(R, F || [])).next());
    });
  };
  let l, o = [], s = null, r, { streaming: a = !1 } = e, { pending: c = !1 } = e, { root: _ = "" } = e, { mode: f = "image" } = e, { mirror_webcam: d } = e, { include_audio: h } = e, { i18n: p } = e, { upload: u } = e;
  const m = jm();
  Fm(() => r = document.createElement("canvas"));
  const g = (R) => n(void 0, void 0, void 0, function* () {
    const Y = R.target.value;
    yield Ma(h, l, Y).then((P) => n(void 0, void 0, void 0, function* () {
      k = P, t(7, s = o.find((I) => I.deviceId === Y) || null), t(10, X = !1);
    }));
  });
  function w() {
    return n(this, void 0, void 0, function* () {
      try {
        Ma(h, l).then((R) => n(this, void 0, void 0, function* () {
          t(9, S = !0), t(6, o = yield Dm()), k = R;
        })).then(() => Mm(o)).then((R) => {
          t(6, o = R);
          const F = k.getTracks().map((Y) => {
            var P;
            return (P = Y.getSettings()) === null || P === void 0 ? void 0 : P.deviceId;
          })[0];
          t(7, s = F && R.find((Y) => Y.deviceId === F) || o[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && m("error", p("image.no_webcam_support"));
      } catch (R) {
        if (R instanceof DOMException && R.name == "NotAllowedError")
          m("error", p("image.allow_webcam_access"));
        else
          throw R;
      }
    });
  }
  function b() {
    var R = r.getContext("2d");
    (!a || a && C) && l.videoWidth && l.videoHeight && (r.width = l.videoWidth, r.height = l.videoHeight, R.drawImage(l, 0, 0, l.videoWidth, l.videoHeight), d && (R.scale(-1, 1), R.drawImage(l, -l.videoWidth, 0)), r.toBlob(
      (F) => {
        m(a ? "stream" : "capture", F);
      },
      "image/png",
      0.8
    ));
  }
  let C = !1, z = [], k, D, q;
  function M() {
    if (C) {
      q.stop();
      let R = new Blob(z, { type: D }), F = new FileReader();
      F.onload = function(Y) {
        return n(this, void 0, void 0, function* () {
          var P;
          if (Y.target) {
            let I = new File([R], "sample." + D.substring(6));
            const le = yield mc([I]);
            let ae = ((P = yield u(le, _)) === null || P === void 0 ? void 0 : P.filter(Boolean))[0];
            m("capture", ae), m("stop_recording");
          }
        });
      }, F.readAsDataURL(R);
    } else {
      m("start_recording"), z = [];
      let R = ["video/webm", "video/mp4"];
      for (let F of R)
        if (MediaRecorder.isTypeSupported(F)) {
          D = F;
          break;
        }
      if (D === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      q = new MediaRecorder(k, { mimeType: D }), q.addEventListener("dataavailable", function(F) {
        z.push(F.data);
      }), q.start(200);
    }
    t(8, C = !C);
  }
  let S = !1;
  function E() {
    f === "image" && a && t(8, C = !C), f === "image" ? b() : M(), !C && k && (k.getTracks().forEach((R) => R.stop()), t(5, l.srcObject = null, l), t(9, S = !1));
  }
  a && f === "image" && window.setInterval(
    () => {
      l && !c && b();
    },
    500
  );
  let X = !1;
  function y(R) {
    R.preventDefault(), R.stopPropagation(), t(10, X = !1);
  }
  function ee(R) {
    Wm[R ? "unshift" : "push"](() => {
      l = R, t(5, l);
    });
  }
  const J = async () => w(), x = () => t(10, X = !0), Z = () => t(10, X = !1);
  return i.$$set = (R) => {
    "streaming" in R && t(0, a = R.streaming), "pending" in R && t(15, c = R.pending), "root" in R && t(16, _ = R.root), "mode" in R && t(1, f = R.mode), "mirror_webcam" in R && t(2, d = R.mirror_webcam), "include_audio" in R && t(17, h = R.include_audio), "i18n" in R && t(3, p = R.i18n), "upload" in R && t(18, u = R.upload);
  }, [
    a,
    f,
    d,
    p,
    ws,
    l,
    o,
    s,
    C,
    S,
    X,
    g,
    w,
    E,
    y,
    c,
    _,
    h,
    u,
    ee,
    J,
    x,
    Z
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
    return ws;
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
  transition_in: p9,
  transition_out: b9,
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
  attr: O,
  detach: e0,
  init: t0,
  insert: n0,
  noop: Do,
  safe_not_equal: i0,
  set_style: on,
  svg_element: Ft
} = window.__gradio__svelte__internal;
function l0(i) {
  let e, t, n, l, o, s, r, a, c;
  return {
    c() {
      e = Ft("svg"), t = Ft("rect"), n = Ft("rect"), l = Ft("rect"), o = Ft("rect"), s = Ft("line"), r = Ft("line"), a = Ft("line"), c = Ft("line"), O(t, "x", "2"), O(t, "y", "2"), O(t, "width", "5"), O(t, "height", "5"), O(t, "rx", "1"), O(t, "ry", "1"), O(t, "stroke-width", "2"), O(t, "fill", "none"), O(n, "x", "17"), O(n, "y", "2"), O(n, "width", "5"), O(n, "height", "5"), O(n, "rx", "1"), O(n, "ry", "1"), O(n, "stroke-width", "2"), O(n, "fill", "none"), O(l, "x", "2"), O(l, "y", "17"), O(l, "width", "5"), O(l, "height", "5"), O(l, "rx", "1"), O(l, "ry", "1"), O(l, "stroke-width", "2"), O(l, "fill", "none"), O(o, "x", "17"), O(o, "y", "17"), O(o, "width", "5"), O(o, "height", "5"), O(o, "rx", "1"), O(o, "ry", "1"), O(o, "stroke-width", "2"), O(o, "fill", "none"), O(s, "x1", "7.5"), O(s, "y1", "4.5"), O(s, "x2", "16"), O(s, "y2", "4.5"), on(s, "stroke-width", "2px"), O(r, "x1", "7.5"), O(r, "y1", "19.5"), O(r, "x2", "16"), O(r, "y2", "19.5"), on(r, "stroke-width", "2px"), O(a, "x1", "4.5"), O(a, "y1", "8"), O(a, "x2", "4.5"), O(a, "y2", "16"), on(a, "stroke-width", "2px"), O(c, "x1", "19.5"), O(c, "y1", "8"), O(c, "x2", "19.5"), O(c, "y2", "16"), on(c, "stroke-width", "2px"), O(e, "width", "100%"), O(e, "height", "100%"), O(e, "viewBox", "0 0 24 24"), O(e, "version", "1.1"), O(e, "xmlns", "http://www.w3.org/2000/svg"), O(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), O(e, "xml:space", "preserve"), O(e, "stroke", "currentColor"), on(e, "fill-rule", "evenodd"), on(e, "clip-rule", "evenodd"), on(e, "stroke-linecap", "round"), on(e, "stroke-linejoin", "round");
    },
    m(_, f) {
      n0(_, e, f), ln(e, t), ln(e, n), ln(e, l), ln(e, o), ln(e, s), ln(e, r), ln(e, a), ln(e, c);
    },
    p: Do,
    i: Do,
    o: Do,
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
  append: el,
  attr: Ne,
  detach: a0,
  init: r0,
  insert: c0,
  noop: Bo,
  safe_not_equal: _0,
  set_style: tl,
  svg_element: wi
} = window.__gradio__svelte__internal;
function u0(i) {
  let e, t, n, l, o;
  return {
    c() {
      e = wi("svg"), t = wi("path"), n = wi("path"), l = wi("path"), o = wi("path"), Ne(t, "stroke", "none"), Ne(t, "d", "M0 0h24v24H0z"), Ne(t, "fill", "none"), Ne(n, "d", "M8 6h12"), Ne(l, "d", "M6 12h12"), Ne(o, "d", "M4 18h12"), Ne(e, "width", "100%"), Ne(e, "height", "100%"), Ne(e, "viewBox", "0 0 24 24"), Ne(e, "version", "1.1"), Ne(e, "xmlns", "http://www.w3.org/2000/svg"), Ne(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Ne(e, "xml:space", "preserve"), Ne(e, "stroke", "currentColor"), tl(e, "fill-rule", "evenodd"), tl(e, "clip-rule", "evenodd"), tl(e, "stroke-linecap", "round"), tl(e, "stroke-linejoin", "round");
    },
    m(s, r) {
      c0(s, e, r), el(e, t), el(e, n), el(e, l), el(e, o);
    },
    p: Bo,
    i: Bo,
    o: Bo,
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
  insert: p0,
  noop: Mo,
  safe_not_equal: b0,
  set_style: nl,
  svg_element: Xa
} = window.__gradio__svelte__internal;
function v0(i) {
  let e, t;
  return {
    c() {
      e = Xa("svg"), t = Xa("path"), Ot(t, "d", "M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"), Ot(e, "width", "100%"), Ot(e, "height", "100%"), Ot(e, "viewBox", "0 0 24 24"), Ot(e, "version", "1.1"), Ot(e, "xmlns", "http://www.w3.org/2000/svg"), Ot(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Ot(e, "xml:space", "preserve"), Ot(e, "stroke", "currentColor"), nl(e, "fill-rule", "evenodd"), nl(e, "clip-rule", "evenodd"), nl(e, "stroke-linecap", "round"), nl(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      p0(n, e, l), h0(e, t);
    },
    p: Mo,
    i: Mo,
    o: Mo,
    d(n) {
      n && m0(e);
    }
  };
}
let w0 = class extends d0 {
  constructor(e) {
    super(), g0(this, e, null, v0, b0, {});
  }
};
const {
  SvelteComponent: k0,
  append: y0,
  attr: Ct,
  detach: C0,
  init: S0,
  insert: q0,
  noop: Eo,
  safe_not_equal: z0,
  set_style: il,
  svg_element: Ya
} = window.__gradio__svelte__internal;
function D0(i) {
  let e, t;
  return {
    c() {
      e = Ya("svg"), t = Ya("path"), Ct(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), Ct(t, "fill", "none"), Ct(t, "stroke-width", "2"), Ct(e, "width", "100%"), Ct(e, "height", "100%"), Ct(e, "viewBox", "0 0 24 24"), Ct(e, "version", "1.1"), Ct(e, "xmlns", "http://www.w3.org/2000/svg"), Ct(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Ct(e, "xml:space", "preserve"), Ct(e, "stroke", "currentColor"), il(e, "fill-rule", "evenodd"), il(e, "clip-rule", "evenodd"), il(e, "stroke-linecap", "round"), il(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      q0(n, e, l), y0(e, t);
    },
    p: Eo,
    i: Eo,
    o: Eo,
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
  attr: St,
  detach: L0,
  init: A0,
  insert: W0,
  noop: Lo,
  safe_not_equal: R0,
  set_style: ll,
  svg_element: Ia
} = window.__gradio__svelte__internal;
function X0(i) {
  let e, t;
  return {
    c() {
      e = Ia("svg"), t = Ia("path"), St(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), St(t, "fill", "none"), St(t, "stroke-width", "2"), St(e, "width", "100%"), St(e, "height", "100%"), St(e, "viewBox", "0 0 24 24"), St(e, "version", "1.1"), St(e, "xmlns", "http://www.w3.org/2000/svg"), St(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), St(e, "xml:space", "preserve"), St(e, "stroke", "currentColor"), ll(e, "fill-rule", "evenodd"), ll(e, "clip-rule", "evenodd"), ll(e, "stroke-linecap", "round"), ll(e, "stroke-linejoin", "round");
    },
    m(n, l) {
      W0(n, e, l), E0(e, t);
    },
    p: Lo,
    i: Lo,
    o: Lo,
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
  append: Ha,
  attr: Pt,
  detach: H0,
  init: T0,
  insert: j0,
  noop: Ao,
  safe_not_equal: F0,
  set_style: ol,
  svg_element: Wo
} = window.__gradio__svelte__internal;
function O0(i) {
  let e, t, n;
  return {
    c() {
      e = Wo("svg"), t = Wo("path"), n = Wo("path"), Pt(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), Pt(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), Pt(e, "width", "100%"), Pt(e, "height", "100%"), Pt(e, "viewBox", "0 0 24 24"), Pt(e, "xmlns", "http://www.w3.org/2000/svg"), Pt(e, "fill", "none"), Pt(e, "stroke", "currentColor"), Pt(e, "stroke-width", "2"), ol(e, "fill-rule", "evenodd"), ol(e, "clip-rule", "evenodd"), ol(e, "stroke-linecap", "round"), ol(e, "stroke-linejoin", "round");
    },
    m(l, o) {
      j0(l, e, o), Ha(e, t), Ha(e, n);
    },
    p: Ao,
    i: Ao,
    o: Ao,
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
  noop: Ro,
  safe_not_equal: G0,
  set_style: sl,
  svg_element: Ta
} = window.__gradio__svelte__internal;
function J0(i) {
  let e, t;
  return {
    c() {
      e = Ta("svg"), t = Ta("path"), sn(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), sn(e, "width", "100%"), sn(e, "height", "100%"), sn(e, "viewBox", "0 0 24 24"), sn(e, "fill", "none"), sn(e, "stroke", "currentColor"), sn(e, "stroke-width", "2"), sl(e, "fill-rule", "evenodd"), sl(e, "clip-rule", "evenodd"), sl(e, "stroke-linecap", "round"), sl(e, "stroke-linejoin", "round"), sn(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      Z0(n, e, l), V0(e, t);
    },
    p: Ro,
    i: Ro,
    o: Ro,
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
  noop: Xo,
  safe_not_equal: ig,
  set_style: al,
  svg_element: ja
} = window.__gradio__svelte__internal;
function lg(i) {
  let e, t;
  return {
    c() {
      e = ja("svg"), t = ja("path"), an(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), an(e, "width", "100%"), an(e, "height", "100%"), an(e, "viewBox", "0 0 24 24"), an(e, "fill", "none"), an(e, "stroke", "currentColor"), an(e, "stroke-width", "2"), al(e, "fill-rule", "evenodd"), al(e, "clip-rule", "evenodd"), al(e, "stroke-linecap", "round"), al(e, "stroke-linejoin", "round"), an(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      ng(n, e, l), $0(e, t);
    },
    p: Xo,
    i: Xo,
    o: Xo,
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
  append: Fa,
  attr: Yo,
  bubble: Oa,
  create_component: ag,
  destroy_component: rg,
  detach: Bc,
  element: Pa,
  init: cg,
  insert: Mc,
  listen: Io,
  mount_component: _g,
  run_all: ug,
  safe_not_equal: fg,
  set_data: dg,
  set_input_value: Ua,
  space: hg,
  text: mg,
  transition_in: gg,
  transition_out: pg
} = window.__gradio__svelte__internal, { createEventDispatcher: bg, afterUpdate: vg } = window.__gradio__svelte__internal;
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
      Mc(t, e, n);
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
      t && Bc(e);
    }
  };
}
function kg(i) {
  let e, t, n, l, o, s, r;
  return t = new Yr({
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
      e = Pa("label"), ag(t.$$.fragment), n = hg(), l = Pa("input"), Yo(l, "type", "color"), l.disabled = /*disabled*/
      i[3], Yo(l, "class", "svelte-16l8u73"), Yo(e, "class", "block");
    },
    m(a, c) {
      Mc(a, e, c), _g(t, e, null), Fa(e, n), Fa(e, l), Ua(
        l,
        /*value*/
        i[0]
      ), o = !0, s || (r = [
        Io(
          l,
          "input",
          /*input_input_handler*/
          i[8]
        ),
        Io(
          l,
          "focus",
          /*focus_handler*/
          i[6]
        ),
        Io(
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
      1 && Ua(
        l,
        /*value*/
        a[0]
      );
    },
    i(a) {
      o || (gg(t.$$.fragment, a), o = !0);
    },
    o(a) {
      pg(t.$$.fragment, a), o = !1;
    },
    d(a) {
      a && Bc(e), rg(t), s = !1, ug(r);
    }
  };
}
function yg(i, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: l = !1 } = e, { label: o } = e, { info: s = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const c = bg();
  function _() {
    c("change", n), l || c("input");
  }
  vg(() => {
    t(5, l = !1);
  });
  function f(p) {
    Oa.call(this, i, p);
  }
  function d(p) {
    Oa.call(this, i, p);
  }
  function h() {
    n = this.value, t(0, n);
  }
  return i.$$set = (p) => {
    "value" in p && t(0, n = p.value), "value_is_output" in p && t(5, l = p.value_is_output), "label" in p && t(1, o = p.label), "info" in p && t(2, s = p.info), "disabled" in p && t(3, r = p.disabled), "show_label" in p && t(4, a = p.show_label);
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
  attr: py,
  component_subscribe: by,
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
  element: pC,
  group_outros: bC,
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
  binding_callbacks: pS,
  create_component: bS,
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
var Ec = (i) => {
  throw TypeError(i);
}, Lc = (i, e, t) => e.has(i) || Ec("Cannot " + t), ki = (i, e, t) => (Lc(i, e, "read from private field"), e.get(i)), Sg = (i, e, t) => e.has(i) ? Ec("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), qg = (i, e, t, n) => (Lc(i, e, "write to private field"), e.set(i, t), t);
new Intl.Collator(0, { numeric: 1 }).compare;
typeof process < "u" && process.versions && process.versions.node;
var un;
class LS extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = ki(this, un) + t; ; ) {
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
        if (ki(this, un) === "")
          return;
        const n = e.allowCR && ki(this, un).endsWith("\r") ? ki(this, un).slice(0, -1) : ki(this, un);
        t.enqueue(n);
      }
    }), Sg(this, un, "");
  }
}
un = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: zg,
  append: Ac,
  attr: ge,
  bubble: Dg,
  check_outros: Bg,
  create_slot: Wc,
  detach: Ti,
  element: Ol,
  empty: Mg,
  get_all_dirty_from_scope: Rc,
  get_slot_changes: Xc,
  group_outros: Eg,
  init: Lg,
  insert: ji,
  listen: Ag,
  safe_not_equal: Wg,
  set_style: Ze,
  space: Yc,
  src_url_equal: zl,
  toggle_class: ti,
  transition_in: Dl,
  transition_out: Bl,
  update_slot_base: Ic
} = window.__gradio__svelte__internal;
function Rg(i) {
  let e, t, n, l, o, s, r = (
    /*icon*/
    i[7] && Va(i)
  );
  const a = (
    /*#slots*/
    i[12].default
  ), c = Wc(
    a,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = Ol("button"), r && r.c(), t = Yc(), c && c.c(), ge(e, "class", n = /*size*/
      i[4] + " " + /*variant*/
      i[3] + " " + /*elem_classes*/
      i[1].join(" ") + " svelte-8huxfn"), ge(
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
      ji(_, e, f), r && r.m(e, null), Ac(e, t), c && c.m(e, null), l = !0, o || (s = Ag(
        e,
        "click",
        /*click_handler*/
        i[13]
      ), o = !0);
    },
    p(_, f) {
      /*icon*/
      _[7] ? r ? r.p(_, f) : (r = Va(_), r.c(), r.m(e, t)) : r && (r.d(1), r = null), c && c.p && (!l || f & /*$$scope*/
      2048) && Ic(
        c,
        a,
        _,
        /*$$scope*/
        _[11],
        l ? Xc(
          a,
          /*$$scope*/
          _[11],
          f,
          null
        ) : Rc(
          /*$$scope*/
          _[11]
        ),
        null
      ), (!l || f & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      _[4] + " " + /*variant*/
      _[3] + " " + /*elem_classes*/
      _[1].join(" ") + " svelte-8huxfn")) && ge(e, "class", n), (!l || f & /*elem_id*/
      1) && ge(
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
      l || (Dl(c, _), l = !0);
    },
    o(_) {
      Bl(c, _), l = !1;
    },
    d(_) {
      _ && Ti(e), r && r.d(), c && c.d(_), o = !1, s();
    }
  };
}
function Xg(i) {
  let e, t, n, l, o = (
    /*icon*/
    i[7] && Na(i)
  );
  const s = (
    /*#slots*/
    i[12].default
  ), r = Wc(
    s,
    i,
    /*$$scope*/
    i[11],
    null
  );
  return {
    c() {
      e = Ol("a"), o && o.c(), t = Yc(), r && r.c(), ge(
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
      ji(a, e, c), o && o.m(e, null), Ac(e, t), r && r.m(e, null), l = !0;
    },
    p(a, c) {
      /*icon*/
      a[7] ? o ? o.p(a, c) : (o = Na(a), o.c(), o.m(e, t)) : o && (o.d(1), o = null), r && r.p && (!l || c & /*$$scope*/
      2048) && Ic(
        r,
        s,
        a,
        /*$$scope*/
        a[11],
        l ? Xc(
          s,
          /*$$scope*/
          a[11],
          c,
          null
        ) : Rc(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!l || c & /*link*/
      64) && ge(
        e,
        "href",
        /*link*/
        a[6]
      ), (!l || c & /*disabled*/
      256) && ge(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!l || c & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && ge(e, "class", n), (!l || c & /*elem_id*/
      1) && ge(
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
      l || (Dl(r, a), l = !0);
    },
    o(a) {
      Bl(r, a), l = !1;
    },
    d(a) {
      a && Ti(e), o && o.d(), r && r.d(a);
    }
  };
}
function Va(i) {
  let e, t, n;
  return {
    c() {
      e = Ol("img"), ge(e, "class", "button-icon svelte-8huxfn"), zl(e.src, t = /*icon*/
      i[7].url) || ge(e, "src", t), ge(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, o) {
      ji(l, e, o);
    },
    p(l, o) {
      o & /*icon*/
      128 && !zl(e.src, t = /*icon*/
      l[7].url) && ge(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && ge(e, "alt", n);
    },
    d(l) {
      l && Ti(e);
    }
  };
}
function Na(i) {
  let e, t, n;
  return {
    c() {
      e = Ol("img"), ge(e, "class", "button-icon svelte-8huxfn"), zl(e.src, t = /*icon*/
      i[7].url) || ge(e, "src", t), ge(e, "alt", n = `${/*value*/
      i[5]} icon`);
    },
    m(l, o) {
      ji(l, e, o);
    },
    p(l, o) {
      o & /*icon*/
      128 && !zl(e.src, t = /*icon*/
      l[7].url) && ge(e, "src", t), o & /*value*/
      32 && n !== (n = `${/*value*/
      l[5]} icon`) && ge(e, "alt", n);
    },
    d(l) {
      l && Ti(e);
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
      s[e].m(a, c), ji(a, n, c), l = !0;
    },
    p(a, [c]) {
      let _ = e;
      e = r(a), e === _ ? s[e].p(a, c) : (Eg(), Bl(s[_], 1, 1, () => {
        s[_] = null;
      }), Bg(), t = s[e], t ? t.p(a, c) : (t = s[e] = o[e](a), t.c()), Dl(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Dl(t), l = !0);
    },
    o(a) {
      Bl(t), l = !1;
    },
    d(a) {
      a && Ti(n), s[e].d(a);
    }
  };
}
function Ig(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { elem_id: o = "" } = e, { elem_classes: s = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: c = "lg" } = e, { value: _ = null } = e, { link: f = null } = e, { icon: d = null } = e, { disabled: h = !1 } = e, { scale: p = null } = e, { min_width: u = void 0 } = e;
  function m(g) {
    Dg.call(this, i, g);
  }
  return i.$$set = (g) => {
    "elem_id" in g && t(0, o = g.elem_id), "elem_classes" in g && t(1, s = g.elem_classes), "visible" in g && t(2, r = g.visible), "variant" in g && t(3, a = g.variant), "size" in g && t(4, c = g.size), "value" in g && t(5, _ = g.value), "link" in g && t(6, f = g.link), "icon" in g && t(7, d = g.icon), "disabled" in g && t(8, h = g.disabled), "scale" in g && t(9, p = g.scale), "min_width" in g && t(10, u = g.min_width), "$$scope" in g && t(11, l = g.$$scope);
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
    p,
    u,
    l,
    n,
    m
  ];
}
class os extends zg {
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
  add_render_callback: Hc,
  append: rl,
  attr: it,
  binding_callbacks: Ka,
  check_outros: Tg,
  create_bidirectional_transition: Za,
  destroy_each: jg,
  detach: Ri,
  element: Ml,
  empty: Fg,
  ensure_array_like: Ga,
  group_outros: Og,
  init: Pg,
  insert: Xi,
  listen: ss,
  prevent_default: Ug,
  run_all: Vg,
  safe_not_equal: Ng,
  set_data: Kg,
  set_style: Zn,
  space: as,
  text: Zg,
  toggle_class: Wt,
  transition_in: Ho,
  transition_out: Ja
} = window.__gradio__svelte__internal, { createEventDispatcher: Gg } = window.__gradio__svelte__internal;
function Qa(i, e, t) {
  const n = i.slice();
  return n[26] = e[t], n;
}
function xa(i) {
  let e, t, n, l, o, s = Ga(
    /*filtered_indices*/
    i[1]
  ), r = [];
  for (let a = 0; a < s.length; a += 1)
    r[a] = $a(Qa(i, s, a));
  return {
    c() {
      e = Ml("ul");
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
      Xi(a, e, c);
      for (let _ = 0; _ < r.length; _ += 1)
        r[_] && r[_].m(e, null);
      i[22](e), n = !0, l || (o = ss(e, "mousedown", Ug(
        /*mousedown_handler*/
        i[21]
      )), l = !0);
    },
    p(a, c) {
      if (c & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        s = Ga(
          /*filtered_indices*/
          a[1]
        );
        let _;
        for (_ = 0; _ < s.length; _ += 1) {
          const f = Qa(a, s, _);
          r[_] ? r[_].p(f, c) : (r[_] = $a(f), r[_].c(), r[_].m(e, null));
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
      n || (a && Hc(() => {
        n && (t || (t = Za(e, ta, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = Za(e, ta, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && Ri(e), jg(r, a), i[22](null), a && t && t.end(), l = !1, o();
    }
  };
}
function $a(i) {
  let e, t, n, l = (
    /*choices*/
    i[0][
      /*index*/
      i[26]
    ][0] + ""
  ), o, s, r, a, c;
  return {
    c() {
      e = Ml("li"), t = Ml("span"), t.textContent = "✓", n = as(), o = Zg(l), s = as(), it(t, "class", "inner-item svelte-yuohum"), Wt(t, "hide", !/*selected_indices*/
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
      Xi(_, e, f), rl(e, t), rl(e, n), rl(e, o), rl(e, s);
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
      _ && Ri(e);
    }
  };
}
function Jg(i) {
  let e, t, n, l, o;
  Hc(
    /*onwindowresize*/
    i[19]
  );
  let s = (
    /*show_options*/
    i[2] && !/*disabled*/
    i[3] && xa(i)
  );
  return {
    c() {
      e = Ml("div"), t = as(), s && s.c(), n = Fg(), it(e, "class", "reference");
    },
    m(r, a) {
      Xi(r, e, a), i[20](e), Xi(r, t, a), s && s.m(r, a), Xi(r, n, a), l || (o = [
        ss(
          window,
          "scroll",
          /*scroll_listener*/
          i[12]
        ),
        ss(
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
      12 && Ho(s, 1)) : (s = xa(r), s.c(), Ho(s, 1), s.m(n.parentNode, n)) : s && (Og(), Ja(s, 1, 1, () => {
        s = null;
      }), Tg());
    },
    i(r) {
      Ho(s);
    },
    o(r) {
      Ja(s);
    },
    d(r) {
      r && (Ri(e), Ri(t), Ri(n)), i[20](null), s && s.d(r), l = !1, Vg(o);
    }
  };
}
function Qg(i, e, t) {
  var n, l;
  let { choices: o } = e, { filtered_indices: s } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: c = [] } = e, { active_index: _ = null } = e, f, d, h, p, u, m, g, w, b;
  function C() {
    const { top: X, bottom: y } = u.getBoundingClientRect();
    t(16, f = X), t(17, d = b - y);
  }
  let z = null;
  function k() {
    r && (z !== null && clearTimeout(z), z = setTimeout(
      () => {
        C(), z = null;
      },
      10
    ));
  }
  const D = Gg();
  function q() {
    t(11, b = window.innerHeight);
  }
  function M(X) {
    Ka[X ? "unshift" : "push"](() => {
      u = X, t(6, u);
    });
  }
  const S = (X) => D("change", X);
  function E(X) {
    Ka[X ? "unshift" : "push"](() => {
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
          let y = m.querySelectorAll("li");
          for (const ee of Array.from(y))
            if (ee.getAttribute("data-index") === c[0].toString()) {
              t(14, n = m == null ? void 0 : m.scrollTo) === null || n === void 0 || n.call(m, 0, ee.offsetTop);
              break;
            }
        }
        C();
        const X = t(15, l = u.parentElement) === null || l === void 0 ? void 0 : l.getBoundingClientRect();
        t(18, h = (X == null ? void 0 : X.height) || 0), t(8, p = (X == null ? void 0 : X.width) || 0);
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
    p,
    g,
    w,
    b,
    k,
    D,
    n,
    l,
    f,
    d,
    h,
    q,
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
function er(i, e) {
  return i.reduce((t, n, l) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(l), t), []);
}
function ep(i, e, t) {
  i("change", e), t || i("input");
}
function tp(i, e, t) {
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
} = window.__gradio__svelte__internal, { afterUpdate: gq, createEventDispatcher: pq } = window.__gradio__svelte__internal, {
  SvelteComponent: np,
  append: yn,
  attr: nt,
  binding_callbacks: ip,
  check_outros: lp,
  create_component: rs,
  destroy_component: cs,
  detach: ks,
  element: Qn,
  group_outros: op,
  init: sp,
  insert: ys,
  listen: yi,
  mount_component: _s,
  run_all: ap,
  safe_not_equal: rp,
  set_data: cp,
  set_input_value: tr,
  space: To,
  text: _p,
  toggle_class: Gn,
  transition_in: xn,
  transition_out: Li
} = window.__gradio__svelte__internal, { onMount: up } = window.__gradio__svelte__internal, { createEventDispatcher: fp, afterUpdate: dp } = window.__gradio__svelte__internal;
function hp(i) {
  let e;
  return {
    c() {
      e = _p(
        /*label*/
        i[0]
      );
    },
    m(t, n) {
      ys(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && cp(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && ks(e);
    }
  };
}
function nr(i) {
  let e, t, n;
  return t = new ds({}), {
    c() {
      e = Qn("div"), rs(t.$$.fragment), nt(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(l, o) {
      ys(l, e, o), _s(t, e, null), n = !0;
    },
    i(l) {
      n || (xn(t.$$.fragment, l), n = !0);
    },
    o(l) {
      Li(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && ks(e), cs(t);
    }
  };
}
function mp(i) {
  let e, t, n, l, o, s, r, a, c, _, f, d, h, p;
  t = new Yr({
    props: {
      show_label: (
        /*show_label*/
        i[4]
      ),
      info: (
        /*info*/
        i[1]
      ),
      $$slots: { default: [hp] },
      $$scope: { ctx: i }
    }
  });
  let u = !/*disabled*/
  i[3] && nr();
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
      e = Qn("div"), rs(t.$$.fragment), n = To(), l = Qn("div"), o = Qn("div"), s = Qn("div"), r = Qn("input"), c = To(), u && u.c(), _ = To(), rs(f.$$.fragment), nt(r, "role", "listbox"), nt(r, "aria-controls", "dropdown-options"), nt(
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
      ys(m, e, g), _s(t, e, null), yn(e, n), yn(e, l), yn(l, o), yn(o, s), yn(s, r), tr(
        r,
        /*input_text*/
        i[9]
      ), i[29](r), yn(s, c), u && u.m(s, null), yn(l, _), _s(f, l, null), d = !0, h || (p = [
        yi(
          r,
          "input",
          /*input_input_handler*/
          i[28]
        ),
        yi(
          r,
          "keydown",
          /*handle_key_down*/
          i[19]
        ),
        yi(
          r,
          "keyup",
          /*keyup_handler*/
          i[30]
        ),
        yi(
          r,
          "blur",
          /*handle_blur*/
          i[18]
        ),
        yi(
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
      m[9] && tr(
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
      m[3] ? u && (op(), Li(u, 1, 1, () => {
        u = null;
      }), lp()) : u ? g[0] & /*disabled*/
      8 && xn(u, 1) : (u = nr(), u.c(), xn(u, 1), u.m(s, null)), (!d || g[0] & /*show_options*/
      4096) && Gn(
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
      m[14]), f.$set(b), (!d || g[0] & /*container*/
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
      Li(t.$$.fragment, m), Li(u), Li(f.$$.fragment, m), d = !1;
    },
    d(m) {
      m && ks(e), cs(t), i[29](null), u && u.d(), cs(f), h = !1, ap(p);
    }
  };
}
function gp(i, e, t) {
  let { label: n } = e, { info: l = void 0 } = e, { value: o = [] } = e, s = [], { value_is_output: r = !1 } = e, { choices: a } = e, c, { disabled: _ = !1 } = e, { show_label: f } = e, { container: d = !0 } = e, { allow_custom_value: h = !1 } = e, { filterable: p = !0 } = e, u, m = !1, g, w, b = "", C = "", z = !1, k = [], D = null, q = null, M;
  const S = fp();
  o ? (M = a.map((Y) => Y[1]).indexOf(o), q = M, q === -1 ? (s = o, q = null) : ([b, s] = a[q], C = b), X()) : a.length > 0 && (M = 0, q = 0, [b, o] = a[q], s = o, C = b);
  function E() {
    t(13, g = a.map((Y) => Y[0])), t(24, w = a.map((Y) => Y[1]));
  }
  function X() {
    E(), o === void 0 || Array.isArray(o) && o.length === 0 ? (t(9, b = ""), t(11, q = null)) : w.includes(o) ? (t(9, b = g[w.indexOf(o)]), t(11, q = w.indexOf(o))) : h ? (t(9, b = o), t(11, q = null)) : (t(9, b = ""), t(11, q = null)), t(27, M = q);
  }
  function y(Y) {
    if (t(11, q = parseInt(Y.detail.target.dataset.index)), isNaN(q)) {
      t(11, q = null);
      return;
    }
    t(12, m = !1), t(14, D = null), u.blur();
  }
  function ee(Y) {
    t(10, k = a.map((P, I) => I)), t(12, m = !0), S("focus");
  }
  function J() {
    h ? t(20, o = b) : t(9, b = g[w.indexOf(o)]), t(12, m = !1), t(14, D = null), S("blur");
  }
  function x(Y) {
    t(12, [m, D] = tp(Y, D, k), m, (t(14, D), t(2, a), t(23, c), t(6, h), t(9, b), t(10, k), t(8, u), t(25, C), t(11, q), t(27, M), t(26, z), t(24, w))), Y.key === "Enter" && (D !== null ? (t(11, q = D), t(12, m = !1), u.blur(), t(14, D = null)) : g.includes(b) ? (t(11, q = g.indexOf(b)), t(12, m = !1), t(14, D = null), u.blur()) : h && (t(20, o = b), t(11, q = null), t(12, m = !1), t(14, D = null), u.blur()), S("enter", o));
  }
  dp(() => {
    t(21, r = !1), t(26, z = !0);
  }), up(() => {
    u.focus();
  });
  function Z() {
    b = this.value, t(9, b), t(11, q), t(27, M), t(26, z), t(2, a), t(24, w);
  }
  function R(Y) {
    ip[Y ? "unshift" : "push"](() => {
      u = Y, t(8, u);
    });
  }
  const F = (Y) => S("key_up", { key: Y.key, input_value: b });
  return i.$$set = (Y) => {
    "label" in Y && t(0, n = Y.label), "info" in Y && t(1, l = Y.info), "value" in Y && t(20, o = Y.value), "value_is_output" in Y && t(21, r = Y.value_is_output), "choices" in Y && t(2, a = Y.choices), "disabled" in Y && t(3, _ = Y.disabled), "show_label" in Y && t(4, f = Y.show_label), "container" in Y && t(5, d = Y.container), "allow_custom_value" in Y && t(6, h = Y.allow_custom_value), "filterable" in Y && t(7, p = Y.filterable);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && q !== M && q !== null && z && (t(9, [b, o] = a[q], b, (t(20, o), t(11, q), t(27, M), t(26, z), t(2, a), t(24, w))), t(27, M = q), S("select", {
      index: q,
      value: w[q],
      selected: !0
    })), i.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && o != s && (X(), ep(S, o, r), t(22, s = o)), i.$$.dirty[0] & /*choices*/
    4 && E(), i.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== c && (h || X(), t(23, c = a), t(10, k = er(a, b)), !h && k.length > 0 && t(14, D = k[0]), u == document.activeElement && t(12, m = !0)), i.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && b !== C && (t(10, k = er(a, b)), t(25, C = b), !h && k.length > 0 && t(14, D = k[0]));
  }, [
    n,
    l,
    a,
    _,
    f,
    d,
    h,
    p,
    u,
    b,
    k,
    q,
    m,
    g,
    D,
    S,
    y,
    ee,
    J,
    x,
    o,
    r,
    s,
    c,
    w,
    C,
    z,
    M,
    Z,
    R,
    F
  ];
}
class pp extends np {
  constructor(e) {
    super(), sp(
      this,
      e,
      gp,
      mp,
      rp,
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
  SvelteComponent: bp,
  append: dt,
  attr: ni,
  check_outros: us,
  create_component: Mn,
  destroy_component: En,
  detach: di,
  element: Rt,
  group_outros: fs,
  init: vp,
  insert: hi,
  listen: wp,
  mount_component: Ln,
  safe_not_equal: kp,
  set_style: ii,
  space: Ci,
  text: Cs,
  toggle_class: ir,
  transition_in: Te,
  transition_out: lt
} = window.__gradio__svelte__internal, { createEventDispatcher: yp } = window.__gradio__svelte__internal, { onMount: Cp } = window.__gradio__svelte__internal;
function lr(i) {
  let e, t, n, l, o, s, r;
  const a = [qp, Sp], c = [];
  function _(f, d) {
    return (
      /*labelDetailLock*/
      f[2] ? 0 : 1
    );
  }
  return n = _(i), l = c[n] = a[n](i), {
    c() {
      e = Rt("div"), t = Rt("button"), l.c(), ni(t, "class", "icon svelte-d9x7u0"), ni(t, "aria-label", "Lock label detail"), ir(
        t,
        "selected",
        /*labelDetailLock*/
        i[2] === !0
      ), ii(e, "margin-right", "8px");
    },
    m(f, d) {
      hi(f, e, d), dt(e, t), c[n].m(t, null), o = !0, s || (r = wp(
        t,
        "click",
        /*onLockClick*/
        i[9]
      ), s = !0);
    },
    p(f, d) {
      let h = n;
      n = _(f), n !== h && (fs(), lt(c[h], 1, 1, () => {
        c[h] = null;
      }), us(), l = c[n], l || (l = c[n] = a[n](f), l.c()), Te(l, 1), l.m(t, null)), (!o || d & /*labelDetailLock*/
      4) && ir(
        t,
        "selected",
        /*labelDetailLock*/
        f[2] === !0
      );
    },
    i(f) {
      o || (Te(l), o = !0);
    },
    o(f) {
      lt(l), o = !1;
    },
    d(f) {
      f && di(e), c[n].d(), s = !1, r();
    }
  };
}
function Sp(i) {
  let e, t;
  return e = new og({}), {
    c() {
      Mn(e.$$.fragment);
    },
    m(n, l) {
      Ln(e, n, l), t = !0;
    },
    i(n) {
      t || (Te(e.$$.fragment, n), t = !0);
    },
    o(n) {
      lt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      En(e, n);
    }
  };
}
function qp(i) {
  let e, t;
  return e = new Q0({}), {
    c() {
      Mn(e.$$.fragment);
    },
    m(n, l) {
      Ln(e, n, l), t = !0;
    },
    i(n) {
      t || (Te(e.$$.fragment, n), t = !0);
    },
    o(n) {
      lt(e.$$.fragment, n), t = !1;
    },
    d(n) {
      En(e, n);
    }
  };
}
function zp(i) {
  let e;
  return {
    c() {
      e = Cs("Cancel");
    },
    m(t, n) {
      hi(t, e, n);
    },
    d(t) {
      t && di(e);
    }
  };
}
function or(i) {
  let e, t, n;
  return t = new os({
    props: {
      variant: "stop",
      $$slots: { default: [Dp] },
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
      n || (Te(t.$$.fragment, l), n = !0);
    },
    o(l) {
      lt(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && di(e), En(t);
    }
  };
}
function Dp(i) {
  let e;
  return {
    c() {
      e = Cs("Remove");
    },
    m(t, n) {
      hi(t, e, n);
    },
    d(t) {
      t && di(e);
    }
  };
}
function Bp(i) {
  let e;
  return {
    c() {
      e = Cs("OK");
    },
    m(t, n) {
      hi(t, e, n);
    },
    d(t) {
      t && di(e);
    }
  };
}
function Mp(i) {
  let e, t, n, l, o, s, r, a, c, _, f, d, h, p, u, m, g, w = !/*showRemove*/
  i[4] && lr(i);
  s = new pp({
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
  ), d = new os({
    props: {
      $$slots: { default: [zp] },
      $$scope: { ctx: i }
    }
  }), d.$on(
    "click",
    /*click_handler*/
    i[13]
  );
  let b = (
    /*showRemove*/
    i[4] && or(i)
  );
  return m = new os({
    props: {
      variant: "primary",
      $$slots: { default: [Bp] },
      $$scope: { ctx: i }
    }
  }), m.$on(
    "click",
    /*click_handler_2*/
    i[15]
  ), {
    c() {
      e = Rt("div"), t = Rt("div"), n = Rt("span"), w && w.c(), l = Ci(), o = Rt("div"), Mn(s.$$.fragment), r = Ci(), a = Rt("div"), Mn(c.$$.fragment), _ = Ci(), f = Rt("div"), Mn(d.$$.fragment), h = Ci(), b && b.c(), p = Ci(), u = Rt("div"), Mn(m.$$.fragment), ii(o, "margin-right", "10px"), ii(a, "margin-right", "40px"), ii(a, "margin-bottom", "8px"), ii(f, "margin-right", "8px"), ni(n, "class", "model-content svelte-d9x7u0"), ni(t, "class", "modal-container svelte-d9x7u0"), ni(e, "class", "modal svelte-d9x7u0"), ni(e, "id", "model-box-edit");
    },
    m(C, z) {
      hi(C, e, z), dt(e, t), dt(t, n), w && w.m(n, null), dt(n, l), dt(n, o), Ln(s, o, null), dt(n, r), dt(n, a), Ln(c, a, null), dt(n, _), dt(n, f), Ln(d, f, null), dt(n, h), b && b.m(n, null), dt(n, p), dt(n, u), Ln(m, u, null), g = !0;
    },
    p(C, [z]) {
      /*showRemove*/
      C[4] ? w && (fs(), lt(w, 1, 1, () => {
        w = null;
      }), us()) : w ? (w.p(C, z), z & /*showRemove*/
      16 && Te(w, 1)) : (w = lr(C), w.c(), Te(w, 1), w.m(n, l));
      const k = {};
      z & /*currentLabel*/
      1 && (k.value = /*currentLabel*/
      C[0]), z & /*choices*/
      8 && (k.choices = /*choices*/
      C[3]), s.$set(k);
      const D = {};
      z & /*currentColor*/
      2 && (D.value = /*currentColor*/
      C[1]), c.$set(D);
      const q = {};
      z & /*$$scope*/
      262144 && (q.$$scope = { dirty: z, ctx: C }), d.$set(q), /*showRemove*/
      C[4] ? b ? (b.p(C, z), z & /*showRemove*/
      16 && Te(b, 1)) : (b = or(C), b.c(), Te(b, 1), b.m(n, p)) : b && (fs(), lt(b, 1, 1, () => {
        b = null;
      }), us());
      const M = {};
      z & /*$$scope*/
      262144 && (M.$$scope = { dirty: z, ctx: C }), m.$set(M);
    },
    i(C) {
      g || (Te(w), Te(s.$$.fragment, C), Te(c.$$.fragment, C), Te(d.$$.fragment, C), Te(b), Te(m.$$.fragment, C), g = !0);
    },
    o(C) {
      lt(w), lt(s.$$.fragment, C), lt(c.$$.fragment, C), lt(d.$$.fragment, C), lt(b), lt(m.$$.fragment, C), g = !1;
    },
    d(C) {
      C && di(e), w && w.d(), En(s), En(c), En(d), b && b.d(), En(m);
    }
  };
}
function Ep(i, e, t) {
  let { label: n = "" } = e, { currentLabel: l = "" } = e, { choices: o = [] } = e, { choicesColors: s = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: c = !0 } = e, { labelDetailLock: _ = !1 } = e;
  const f = yp();
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
    let D = k;
    Number.isInteger(D) ? (Array.isArray(s) && D < s.length && t(1, a = s[D]), Array.isArray(o) && D < o.length && t(0, l = o[D][0])) : t(0, l = D);
  }
  function p(z) {
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
  Cp(() => (document.addEventListener("keydown", g), t(0, l = n), t(1, a = r), () => {
    document.removeEventListener("keydown", g);
  }));
  const w = () => d(0), b = () => d(-1), C = () => d(1);
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
    p,
    u,
    m,
    n,
    s,
    r,
    w,
    b,
    C
  ];
}
class Ss extends bp {
  constructor(e) {
    super(), vp(this, e, Ep, Mp, kp, {
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
function jo(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, l, o] = t;
  return `rgba(${n}, ${l}, ${o}, ${e})`;
}
class Fo {
  constructor(e, t, n, l, o, s, r, a, c, _, f, d, h, p = "rgb(255, 255, 255)", u = 0.5, m = 25, g = 8, w = 2, b = 4, C = 1) {
    this.resizeHandles = [], this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (z) => {
      if (this.isDragging && this.pointersCache.size === 1) {
        let k = (z.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, D = (z.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const q = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, M = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        k = ze(k, -this._xmin, q - this._xmax), D = ze(D, -this._ymin, M - this._ymax), this._xmin += k, this._ymin += D, this._xmax += k, this._ymax += D, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (z) => {
      if (this.isCreating && this.pointersCache.size === 1) {
        let [k, D] = this.toBoxCoordinates(z.clientX, z.clientY);
        k = (k - this.offsetMouseX) / this.canvasWindow.scale, D = (D - this.offsetMouseY) / this.canvasWindow.scale, k > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = k, this.creatingAnchorX = "xmin") : k > this._xmin && k < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = k : k > this._xmin && k < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = k : k < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = k, this.creatingAnchorX = "xmax"), D > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = D, this.creatingAnchorY = "ymin") : D > this._ymin && D < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = D : D > this._ymin && D < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = D : D < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = D, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (z) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const k = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, D = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = ze(this._xmin, 0, k), this._ymin = ze(this._ymin, 0, D), this._xmax = ze(this._xmax, 0, k), this._ymax = ze(this._ymax, 0, D), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (z) => {
      if (this.isResizing && this.pointersCache.size === 1) {
        const k = z.clientX, D = z.clientY, q = (k - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, M = (D - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, S = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, E = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += q, this._ymin += M, this._xmin = ze(this._xmin, 0, this._xmax), this._ymin = ze(this._ymin, 0, this._ymax);
            break;
          case 1:
            this._xmax += q, this._ymin += M, this._xmax = ze(this._xmax, this._xmin, S), this._ymin = ze(this._ymin, 0, this._ymax);
            break;
          case 2:
            this._xmax += q, this._ymax += M, this._xmax = ze(this._xmax, this._xmin, S), this._ymax = ze(this._ymax, this._ymin, E);
            break;
          case 3:
            this._xmin += q, this._ymax += M, this._xmin = ze(this._xmin, 0, this._xmax), this._ymax = ze(this._ymax, this._ymin, E);
            break;
          case 4:
            this._ymin += M, this._ymin = ze(this._ymin, 0, this._ymax);
            break;
          case 5:
            this._xmax += q, this._xmax = ze(this._xmax, this._xmin, S);
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
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.pointersCache = l, this.canvasXmin = o, this.canvasYmin = s, this.canvasXmax = r, this.canvasYmax = a, this.scaleFactor = C, this.label = c, this.isDragging = !1, this.isCreating = !1, this._xmin = _, this._ymin = f, this._xmax = d, this._ymax = h, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = g, this.thickness = w, this.selectedThickness = b, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = m, this.color = p, this.alpha = u, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
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
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = jo(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = jo(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const l = e.measureText(this.label).width + 10, o = 20;
      let s = this.xmin, r = this.ymin - o;
      e.fillStyle = "white", [s, r] = this.toCanvasCoordinates(s, r), e.fillRect(s, r, l, o), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(s, r, l, o), e.fillStyle = "black", e.fillText(this.label, s + 5, r + 15);
    }
    e.fillStyle = jo(this.color, 1);
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
const sr = (i, e, t) => Math.min(Math.max(i, e), t);
function ar(i, e) {
  if (i.startsWith("rgba"))
    return i.replace(/[\d.]+$/, e.toString());
  const t = i.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, l, o] = t;
  return `rgba(${n}, ${l}, ${o}, ${e})`;
}
class Oo {
  constructor(e, t, n, l, o, s, r, a, c, _, f = "rgb(255, 255, 255)", d = 0.6, h = 6, p = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (u) => {
      if (this.isDragging && this.pointersCache.size === 1) {
        let m = (u.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._x, g = (u.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._y;
        const w = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, b = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale, C = this.radius / this.canvasWindow.scale;
        m = sr(m, -this._x + C, w - this._x - C), g = sr(g, -this._y + C, b - this._y - C), this._x += m, this._y += g, this.applyUserScale(), this.renderCallBack();
      }
    }, this.renderCallBack = e, this.canvasWindow = t, this.pointersCache = n, this.canvasXmin = l, this.canvasYmin = o, this.canvasXmax = s, this.canvasYmax = r, this.scaleFactor = p, this.label = a, this.isDragging = !1, this.isSelected = !1, this._x = c, this._y = _, this.x = this._x * this.canvasWindow.scale, this.y = this._y * this.canvasWindow.scale, this.color = f, this.alpha = d, this.radius = h, this.offsetMouseX = 0, this.offsetMouseY = 0;
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
    if (e.beginPath(), e.arc(t, n, l, 0, Math.PI * 2), e.fillStyle = ar(this.color, this.alpha), e.fill(), e.lineWidth = this.isSelected ? 2 : 1, e.strokeStyle = ar(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
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
const ft = [
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
], cl = (i, e, t) => Math.min(Math.max(i, e), t);
class Lp {
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
        this.imageWidth * this.scale > this.canvasWidth ? l = cl(l, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : l = cl(l, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? o = cl(o, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : o = cl(o, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += l, this.offsetY += o, this.startDragX = n.clientX, this.startDragY = n.clientY, this.renderCallBack();
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
  SvelteComponent: Ap,
  append: We,
  attr: oe,
  binding_callbacks: rr,
  bubble: Po,
  check_outros: li,
  create_component: zt,
  destroy_component: Dt,
  detach: fn,
  element: mt,
  empty: Wp,
  group_outros: oi,
  init: Rp,
  insert: dn,
  listen: Re,
  mount_component: Bt,
  noop: Tc,
  run_all: jc,
  safe_not_equal: Xp,
  set_style: _l,
  space: qt,
  toggle_class: Jn,
  transition_in: se,
  transition_out: me
} = window.__gradio__svelte__internal, { onMount: Yp, createEventDispatcher: Ip } = window.__gradio__svelte__internal;
function cr(i) {
  let e, t, n, l, o, s, r, a, c, _, f, d, h, p, u, m, g, w, b, C, z, k, D, q;
  n = new o0({}), s = new w0({}), c = new B0({}), d = new f0({});
  let M = (
    /*showRemoveButton*/
    i[1] && _r(i)
  ), S = !/*disableEditBoxes*/
  i[5] && /*labelDetailLock*/
  i[15] && ur(i);
  return w = new Hd({}), z = new Cd({}), {
    c() {
      e = mt("span"), t = mt("button"), zt(n.$$.fragment), l = qt(), o = mt("button"), zt(s.$$.fragment), r = qt(), a = mt("button"), zt(c.$$.fragment), _ = qt(), f = mt("button"), zt(d.$$.fragment), p = qt(), M && M.c(), u = qt(), S && S.c(), m = qt(), g = mt("button"), zt(w.$$.fragment), b = qt(), C = mt("button"), zt(z.$$.fragment), oe(t, "class", "icon svelte-qvyq26"), oe(t, "aria-label", "Create box"), oe(t, "title", "Create box (C)"), Jn(
        t,
        "selected",
        /*mode*/
        i[10] === /*Mode*/
        i[8].creation
      ), oe(o, "class", "icon svelte-qvyq26"), oe(o, "aria-label", "Create point"), oe(o, "title", "Create point (C)"), Jn(
        o,
        "selected",
        /*mode*/
        i[10] === /*Mode*/
        i[8].point
      ), oe(a, "class", "icon svelte-qvyq26"), oe(a, "aria-label", "Drag boxes"), oe(a, "title", "Drag boxes (D)"), Jn(
        a,
        "selected",
        /*mode*/
        i[10] === /*Mode*/
        i[8].drag
      ), oe(f, "class", "icon svelte-qvyq26"), oe(f, "aria-label", "Clear selection"), oe(f, "title", "Clear selection"), f.disabled = h = !/*selectedAnnotationId*/
      i[0], oe(g, "class", "icon svelte-qvyq26"), oe(g, "aria-label", "Rotate counterclockwise"), oe(g, "title", "Rotate counterclockwise"), oe(C, "class", "icon svelte-qvyq26"), oe(C, "aria-label", "Rotate clockwise"), oe(C, "title", "Rotate clockwise"), oe(e, "class", "canvas-control svelte-qvyq26");
    },
    m(E, X) {
      dn(E, e, X), We(e, t), Bt(n, t, null), We(e, l), We(e, o), Bt(s, o, null), We(e, r), We(e, a), Bt(c, a, null), We(e, _), We(e, f), Bt(d, f, null), We(e, p), M && M.m(e, null), We(e, u), S && S.m(e, null), We(e, m), We(e, g), Bt(w, g, null), We(e, b), We(e, C), Bt(z, C, null), k = !0, D || (q = [
        Re(
          t,
          "click",
          /*click_handler*/
          i[58]
        ),
        Re(
          o,
          "click",
          /*click_handler_1*/
          i[59]
        ),
        Re(
          a,
          "click",
          /*click_handler_2*/
          i[60]
        ),
        Re(
          f,
          "click",
          /*handleClearSelection*/
          i[28]
        ),
        Re(
          g,
          "click",
          /*click_handler_5*/
          i[63]
        ),
        Re(
          C,
          "click",
          /*click_handler_6*/
          i[64]
        )
      ], D = !0);
    },
    p(E, X) {
      (!k || X[0] & /*mode, Mode*/
      1280) && Jn(
        t,
        "selected",
        /*mode*/
        E[10] === /*Mode*/
        E[8].creation
      ), (!k || X[0] & /*mode, Mode*/
      1280) && Jn(
        o,
        "selected",
        /*mode*/
        E[10] === /*Mode*/
        E[8].point
      ), (!k || X[0] & /*mode, Mode*/
      1280) && Jn(
        a,
        "selected",
        /*mode*/
        E[10] === /*Mode*/
        E[8].drag
      ), (!k || X[0] & /*selectedAnnotationId*/
      1 && h !== (h = !/*selectedAnnotationId*/
      E[0])) && (f.disabled = h), /*showRemoveButton*/
      E[1] ? M ? (M.p(E, X), X[0] & /*showRemoveButton*/
      2 && se(M, 1)) : (M = _r(E), M.c(), se(M, 1), M.m(e, u)) : M && (oi(), me(M, 1, 1, () => {
        M = null;
      }), li()), !/*disableEditBoxes*/
      E[5] && /*labelDetailLock*/
      E[15] ? S ? (S.p(E, X), X[0] & /*disableEditBoxes, labelDetailLock*/
      32800 && se(S, 1)) : (S = ur(E), S.c(), se(S, 1), S.m(e, m)) : S && (oi(), me(S, 1, 1, () => {
        S = null;
      }), li());
    },
    i(E) {
      k || (se(n.$$.fragment, E), se(s.$$.fragment, E), se(c.$$.fragment, E), se(d.$$.fragment, E), se(M), se(S), se(w.$$.fragment, E), se(z.$$.fragment, E), k = !0);
    },
    o(E) {
      me(n.$$.fragment, E), me(s.$$.fragment, E), me(c.$$.fragment, E), me(d.$$.fragment, E), me(M), me(S), me(w.$$.fragment, E), me(z.$$.fragment, E), k = !1;
    },
    d(E) {
      E && fn(e), Dt(n), Dt(s), Dt(c), Dt(d), M && M.d(), S && S.d(), Dt(w), Dt(z), D = !1, jc(q);
    }
  };
}
function _r(i) {
  let e, t, n, l, o;
  return t = new Y0({}), {
    c() {
      e = mt("button"), zt(t.$$.fragment), oe(e, "class", "icon svelte-qvyq26"), oe(e, "aria-label", "Remove box"), oe(e, "title", "Remove box (Del)");
    },
    m(s, r) {
      dn(s, e, r), Bt(t, e, null), n = !0, l || (o = Re(
        e,
        "click",
        /*click_handler_3*/
        i[61]
      ), l = !0);
    },
    p: Tc,
    i(s) {
      n || (se(t.$$.fragment, s), n = !0);
    },
    o(s) {
      me(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && fn(e), Dt(t), l = !1, o();
    }
  };
}
function ur(i) {
  let e, t, n, l, o;
  return t = new P0({}), {
    c() {
      e = mt("button"), zt(t.$$.fragment), oe(e, "class", "icon svelte-qvyq26"), oe(e, "aria-label", "Edit label"), oe(e, "title", "Edit label");
    },
    m(s, r) {
      dn(s, e, r), Bt(t, e, null), n = !0, l || (o = Re(
        e,
        "click",
        /*click_handler_4*/
        i[62]
      ), l = !0);
    },
    p: Tc,
    i(s) {
      n || (se(t.$$.fragment, s), n = !0);
    },
    o(s) {
      me(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && fn(e), Dt(t), l = !1, o();
    }
  };
}
function fr(i) {
  let e, t;
  return e = new Ss({
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
      zt(e.$$.fragment);
    },
    m(n, l) {
      Bt(e, n, l), t = !0;
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
      me(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Dt(e, n);
    }
  };
}
function dr(i) {
  let e, t;
  return e = new Ss({
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
      zt(e.$$.fragment);
    },
    m(n, l) {
      Bt(e, n, l), t = !0;
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
      me(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Dt(e, n);
    }
  };
}
function hr(i) {
  let e, t;
  return e = new Ss({
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
      zt(e.$$.fragment);
    },
    m(n, l) {
      Bt(e, n, l), t = !0;
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
      me(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Dt(e, n);
    }
  };
}
function Hp(i) {
  let e, t, n, l, o, s, r, a, c, _, f, d = (
    /*interactive*/
    i[2] && cr(i)
  ), h = (
    /*editModalVisible*/
    i[12] && fr(i)
  ), p = (
    /*newModalVisible*/
    i[13] && dr(i)
  ), u = (
    /*editDefaultLabelVisible*/
    i[14] && hr(i)
  );
  return {
    c() {
      e = mt("div"), t = mt("div"), n = mt("canvas"), l = qt(), d && d.c(), o = qt(), h && h.c(), s = qt(), p && p.c(), r = qt(), u && u.c(), a = Wp(), _l(
        n,
        "height",
        /*height*/
        i[6]
      ), _l(
        n,
        "width",
        /*width*/
        i[7]
      ), oe(n, "class", "canvas-annotator svelte-qvyq26"), oe(t, "class", "canvas-container svelte-qvyq26"), oe(e, "class", "annotator-container"), oe(e, "tabindex", "0");
    },
    m(m, g) {
      dn(m, e, g), We(e, t), We(t, n), i[57](n), We(e, l), d && d.m(e, null), i[65](e), dn(m, o, g), h && h.m(m, g), dn(m, s, g), p && p.m(m, g), dn(m, r, g), u && u.m(m, g), dn(m, a, g), c = !0, _ || (f = [
        Re(
          n,
          "pointerdown",
          /*handlePointerDown*/
          i[19]
        ),
        Re(
          n,
          "pointerup",
          /*handlePointerUp*/
          i[20]
        ),
        Re(
          n,
          "pointermove",
          /*handlePointerMove*/
          i[22]
        ),
        Re(
          n,
          "pointercancel",
          /*handlePointerCancel*/
          i[21]
        ),
        Re(
          n,
          "dblclick",
          /*handleDoubleClick*/
          i[29]
        ),
        Re(
          n,
          "wheel",
          /*handleMouseWheel*/
          i[24]
        ),
        Re(
          e,
          "keydown",
          /*handleKeyPress*/
          i[23]
        ),
        Re(
          e,
          "click",
          /*click_handler_7*/
          i[66]
        )
      ], _ = !0);
    },
    p(m, g) {
      (!c || g[0] & /*height*/
      64) && _l(
        n,
        "height",
        /*height*/
        m[6]
      ), (!c || g[0] & /*width*/
      128) && _l(
        n,
        "width",
        /*width*/
        m[7]
      ), /*interactive*/
      m[2] ? d ? (d.p(m, g), g[0] & /*interactive*/
      4 && se(d, 1)) : (d = cr(m), d.c(), se(d, 1), d.m(e, null)) : d && (oi(), me(d, 1, 1, () => {
        d = null;
      }), li()), /*editModalVisible*/
      m[12] ? h ? (h.p(m, g), g[0] & /*editModalVisible*/
      4096 && se(h, 1)) : (h = fr(m), h.c(), se(h, 1), h.m(s.parentNode, s)) : h && (oi(), me(h, 1, 1, () => {
        h = null;
      }), li()), /*newModalVisible*/
      m[13] ? p ? (p.p(m, g), g[0] & /*newModalVisible*/
      8192 && se(p, 1)) : (p = dr(m), p.c(), se(p, 1), p.m(r.parentNode, r)) : p && (oi(), me(p, 1, 1, () => {
        p = null;
      }), li()), /*editDefaultLabelVisible*/
      m[14] ? u ? (u.p(m, g), g[0] & /*editDefaultLabelVisible*/
      16384 && se(u, 1)) : (u = hr(m), u.c(), se(u, 1), u.m(a.parentNode, a)) : u && (oi(), me(u, 1, 1, () => {
        u = null;
      }), li());
    },
    i(m) {
      c || (se(d), se(h), se(p), se(u), c = !0);
    },
    o(m) {
      me(d), me(h), me(p), me(u), c = !1;
    },
    d(m) {
      m && (fn(e), fn(o), fn(s), fn(r), fn(a)), i[57](null), d && d.d(), i[65](null), h && h.d(m), p && p.d(m), u && u.d(m), _ = !1, jc(f);
    }
  };
}
const mr = 100;
function Tp(i, e) {
  if (!i)
    return null;
  const [t, n] = i.split("-"), l = Number(n);
  return !Number.isInteger(l) || l < 0 ? null : t === "box" ? l < e.boxes.length ? { type: "box", index: l } : null : t === "point" && l < e.points.length ? { type: "point", index: l } : null;
}
function rn(i) {
  var e = parseInt(i.slice(1, 3), 16), t = parseInt(i.slice(3, 5), 16), n = parseInt(i.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function Uo(i) {
  const e = i.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), l = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | l).toString(16).slice(1);
}
function jp(i, e, t) {
  var n, l, o, s, r;
  (function(v) {
    v[v.creation = 0] = "creation", v[v.point = 1] = "point", v[v.drag = 2] = "drag";
  })(r || (r = {}));
  let { imageUrl: a = null } = e, { interactive: c } = e, { boxAlpha: _ = 0.5 } = e, { boxMinSize: f = 10 } = e, { handleSize: d } = e, { boxThickness: h } = e, { boxSelectedThickness: p } = e, { value: u } = e, { choices: m = [] } = e, { choicesColors: g = [] } = e, { disableEditBoxes: w = !1 } = e, { height: b = "100%" } = e, { width: C = "100%" } = e, { singleBox: z = !1 } = e, { showRemoveButton: k = null } = e, { handlesCursor: D = !0 } = e, { useDefaultLabel: q = !1 } = e, { enableKeyboardShortcuts: M = !0 } = e, { selectedAnnotationId: S = null } = e, { focusSelectedOnly: E = !1 } = e, { onClearSelection: X = null } = e;
  k === null && (k = w);
  let y, ee, J, x = null, Z = -1, R = -1, F = null, Y = r.creation, P = /* @__PURE__ */ new Map(), I = new Lp(ce, P);
  u !== null && u.boxes.length == 0 && u.points.length == 0 && (Y = r.creation);
  let le = 0, ae = 0, H = 0, be = 0, L = 1, T = 0, V = 0, re = !1, de = !1, A = !1, at = !1, Ie = q, $ = { label: "", color: "" }, je = "", Fe = "", Ce = { x: 0, y: 0, distance: 0 }, he = null, Qt = null;
  function Hn() {
    if (!u)
      return [];
    if (E) {
      if ((he == null ? void 0 : he.type) === "box") {
        const v = u.boxes[he.index];
        return v ? [{ box: v, index: he.index }] : [];
      }
      return [];
    }
    return u.boxes.map((v, W) => ({ box: v, index: W }));
  }
  function Fi() {
    if (!u)
      return [];
    if (E) {
      if ((he == null ? void 0 : he.type) === "point") {
        const v = u.points[he.index];
        return v ? [{ point: v, index: he.index }] : [];
      }
      return [];
    }
    return u.points.map((v, W) => ({ point: v, index: W }));
  }
  const Me = Ip();
  function ce() {
    if (J) {
      if (J.clearRect(0, 0, y.width, y.height), J.save(), J.translate(I.offsetX, I.offsetY), J.scale(I.scale, I.scale), x !== null) {
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
      const W = Fi().slice().reverse();
      for (const { point: j } of W)
        j.render(J);
    }
  }
  function Tn() {
    ce(), Me("change");
  }
  function xt(v) {
    t(54, F = v >= 0 ? "box" : null), t(52, Z = v), t(53, R = -1), u.boxes.forEach((W) => {
      W.setSelected(!1);
    }), u.points.forEach((W) => {
      W.setSelected(!1);
    }), v >= 0 && v < u.boxes.length && u.boxes[v].setSelected(!0), ce();
  }
  function pn(v) {
    t(54, F = v >= 0 ? "point" : null), t(53, R = v), t(52, Z = -1), u.boxes.forEach((W) => {
      W.setSelected(!1);
    }), u.points.forEach((W) => {
      W.setSelected(!1);
    }), v >= 0 && v < u.points.length && u.points[v].setSelected(!0), ce();
  }
  const Oi = (v, W) => {
    const j = Math.sqrt(Math.pow(v.clientX - W.clientX, 2) + Math.pow(v.clientY - W.clientY, 2));
    return j < mr ? mr : j;
  };
  function Pl(v) {
    if (c) {
      if (v.preventDefault(), y.setPointerCapture(v.pointerId), P.set(v.pointerId, v), P.size == 1)
        Y === r.creation ? jn(v) : Y === r.point ? Nl(v) : Y === r.drag && Kl(v);
      else if (P.size == 2) {
        I.isDragging = !1, u.boxes.forEach((bt) => {
          bt.isCreating = !1, bt.isDragging = !1, bt.isResizing = !1;
        }), u.points.forEach((bt) => {
          bt.isDragging = !1;
        });
        const W = Array.from(P.values()), j = W[0], U = W[1], G = Oi(j, U), Q = y.getBoundingClientRect(), _e = (j.clientX + U.clientX) / 2 - Q.left, ct = (j.clientY + U.clientY) / 2 - Q.top;
        Ce.distance = G, Ce.x = _e, Ce.y = ct;
      }
    }
  }
  function Ul(v) {
    const W = y.getBoundingClientRect(), j = v.clientX - W.left, U = v.clientY - W.top;
    let G = !1;
    for (const { box: Q, index: _e } of Hn()) {
      const ct = Q.indexOfPointInsideHandle(j, U);
      if (ct >= 0)
        return G = !0, xt(_e), Q.startResize(ct, v), !0;
    }
    for (const { box: Q, index: _e } of Hn())
      if (Q.isPointInsideBox(j, U))
        return G = !0, xt(_e), Q.startDrag(v), !0;
    return G;
  }
  function Vl(v) {
    c && (P.delete(v.pointerId), y.releasePointerCapture(v.pointerId), I.isDragging && I.stopDrag(), at && (at = !1, Kc()), Me("change"));
  }
  function B(v) {
    c && (P.delete(v.pointerId), y.releasePointerCapture(v.pointerId), I.isDragging && I.stopDrag(), Me("change"));
  }
  function Oe(v) {
    if (c)
      if (v.preventDefault(), v.pointerType === "mouse") {
        if (!D || u === null || Y !== r.drag)
          return;
        const W = y.getBoundingClientRect(), j = v.clientX - W.left, U = v.clientY - W.top;
        for (const { box: G } of Hn()) {
          const Q = G.indexOfPointInsideHandle(j, U);
          if (Q >= 0) {
            t(9, y.style.cursor = G.resizeHandles[Q].cursor, y);
            return;
          }
        }
        t(9, y.style.cursor = "default", y);
      } else {
        if (!P.has(v.pointerId))
          return;
        if (P.set(v.pointerId, v), P.size === 2) {
          const W = Array.from(P.values()), j = W[0], U = W[1], G = Oi(j, U), Q = y.getBoundingClientRect(), _e = (j.clientX + U.clientX) / 2 - Q.left, ct = (j.clientY + U.clientY) / 2 - Q.top, bt = parseFloat((I.scale * (G / Ce.distance)).toFixed(2)), gi = bt < 1 ? 1 : bt, Pi = gi / I.scale;
          I.offsetX = Ce.x - (Ce.x - I.offsetX) * Pi, I.offsetY = Ce.y - (Ce.y - I.offsetY) * Pi;
          const Jl = _e - Ce.x, Ee = ct - Ce.y;
          I.offsetX += Jl, I.offsetY += Ee, I.scale = gi, Ce.x = _e, Ce.y = ct, Ce.distance = G, ce();
        }
      }
  }
  function Se() {
    const v = y.width / T, W = y.height / V, j = Math.min(v, W);
    I.scale = j, I.offsetX = (y.width - T * j) / 2, I.offsetY = (y.height - V * j) / 2, ce();
  }
  function rt(v) {
    if (!M || v.target !== ee || !c)
      return;
    const W = v.key.toLowerCase();
    switch ((/* @__PURE__ */ new Set(["delete", "b", "c", "d", "e", "p", " "])).has(W) && (v.preventDefault(), v.stopPropagation()), W) {
      case "delete":
        $t();
        break;
      case "b":
        $e();
        break;
      case "c":
        Zl();
        break;
      case "p":
        bn();
        break;
      case "d":
        On();
        break;
      case "e":
        zs();
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
  function He(v) {
    var W, j;
    if (!c)
      return;
    if ((j = (W = u == null ? void 0 : u.boxes) === null || W === void 0 ? void 0 : W.some((Ee) => Ee.isResizing || Ee.isCreating)) !== null && j !== void 0 ? j : !1) {
      v.preventDefault();
      return;
    }
    v.preventDefault();
    const G = 1 / (1 + v.deltaY / 1e3 * 0.5), Q = parseFloat((I.scale * G).toFixed(2)), _e = Q < 1 ? 1 : Q, ct = y.getBoundingClientRect(), bt = v.clientX - ct.left, gi = v.clientY - ct.top, Pi = (bt - I.offsetX) / I.scale, Jl = (gi - I.offsetY) / I.scale;
    if (I.offsetX = bt - Pi * _e, I.offsetY = gi - Jl * _e, u !== null) {
      for (const Ee of u.boxes)
        Ee.isDragging && (Ee.offsetMouseX = v.clientX - Ee._xmin * _e, Ee.offsetMouseY = v.clientY - Ee._ymin * _e);
      for (const Ee of u.points)
        Ee.isDragging && (Ee.offsetMouseX = v.clientX - Ee._x * _e, Ee.offsetMouseY = v.clientY - Ee._y * _e);
    }
    I.scale = _e, ce();
  }
  function jn(v) {
    const W = y.getBoundingClientRect(), j = (v.clientX - W.left - I.offsetX) / L / I.scale, U = (v.clientY - W.top - I.offsetY) / L / I.scale;
    let G;
    g.length > 0 ? G = rn(g[0]) : z ? u.boxes.length > 0 ? G = u.boxes[0].color : G = ft[0] : G = ft[u.boxes.length % ft.length];
    let Q = new Fo(Tn, qs, I, P, le, ae, H, be, "", j, U, j, U, G, _, f, d, h, p);
    Q.startCreating(v, W.left, W.top), z ? t(35, u.boxes = [Q], u) : t(35, u.boxes = [Q, ...u.boxes], u), xt(0), ce(), Me("change");
  }
  function Nl(v) {
    const W = y.getBoundingClientRect(), j = (v.clientX - W.left - I.offsetX) / I.scale, U = (v.clientY - W.top - I.offsetY) / I.scale;
    let G;
    g.length > 0 ? G = rn(g[0]) : z ? u.points.length > 0 ? G = u.points[0].color : G = ft[0] : G = ft[u.points.length % ft.length];
    const Q = new Oo(Tn, I, P, le, ae, H, be, "", j, U, G, 0.7, Math.max(4, d / 2), L);
    z ? t(35, u.points = [Q], u) : t(35, u.points = [Q, ...u.points], u), pn(0), Q.startDrag(v), at = !0, ce(), Me("change");
  }
  function Kl(v) {
    if (Ul(v))
      return;
    const j = y.getBoundingClientRect(), U = v.clientX - j.left, G = v.clientY - j.top;
    for (const { point: _e, index: ct } of Fi())
      if (_e.isPointInsidePoint(U, G)) {
        pn(ct), _e.startDrag(v);
        return;
      }
    !z && !(E || S) && Zl(), I.startDrag(v);
  }
  function Fn() {
    (E || S) && (X == null || X()), t(0, S = null), t(36, E = !1), t(55, he = null), t(56, Qt = null), t(54, F = null), t(52, Z = -1), t(53, R = -1), u == null || u.boxes.forEach((v) => v.setSelected(!1)), u == null || u.points.forEach((v) => v.setSelected(!1));
  }
  function $e() {
    Fn(), t(10, Y = r.creation), t(9, y.style.cursor = "crosshair", y), ce();
  }
  function bn() {
    Fn(), t(10, Y = r.point), t(9, y.style.cursor = "crosshair", y), ce();
  }
  function On() {
    t(10, Y = r.drag), t(9, y.style.cursor = "default", y), ce();
  }
  function Zl() {
    X == null || X(), t(0, S = null), t(36, E = !1), t(55, he = null), t(56, Qt = null), t(54, F = null), t(52, Z = -1), t(53, R = -1), u == null || u.boxes.forEach((v) => v.setSelected(!1)), u == null || u.points.forEach((v) => v.setSelected(!1)), ce();
  }
  function qs() {
    Z >= 0 && Z < u.boxes.length && (u.boxes[Z].getArea() < 1 ? $t() : (w || (Ie ? Ds() : t(13, de = !0)), z && On()));
  }
  function Kc() {
    R >= 0 && R < u.points.length && (w || (Ie ? Ds() : t(13, de = !0)), z && On());
  }
  function zs() {
    w || (F === "box" ? Z >= 0 && Z < u.boxes.length && t(12, re = !0) : F === "point" && R >= 0 && R < u.points.length && t(12, re = !0));
  }
  function Zc(v) {
    c && zs();
  }
  function Gc(v) {
    t(12, re = !1), xe();
    const { detail: W } = v, j = W.label, U = W.color, G = W.ret;
    if (F === "box") {
      if (Z >= 0 && Z < u.boxes.length) {
        const Q = u.boxes[Z];
        G == 1 ? (Q.label = j, Q.color = rn(U), ce(), Me("change")) : G == -1 && $t();
      }
    } else if (F === "point" && R >= 0 && R < u.points.length) {
      const Q = u.points[R];
      G == 1 ? (Q.label = j, Q.color = rn(U), ce(), Me("change")) : G == -1 && $t();
    }
  }
  function Jc(v) {
    t(13, de = !1), xe();
    const { detail: W } = v, j = W.label, U = W.color, G = W.ret, Q = W.lock;
    if (F === "box") {
      if (Z >= 0 && Z < u.boxes.length) {
        const _e = u.boxes[Z];
        G == 1 ? (t(15, Ie = Q), t(16, $.label = j, $), t(16, $.color = U, $), _e.label = j, _e.color = rn(U), ce(), Me("change")) : $t();
      }
    } else if (F === "point" && R >= 0 && R < u.points.length) {
      const _e = u.points[R];
      G == 1 ? (t(15, Ie = Q), t(16, $.label = j, $), t(16, $.color = U, $), _e.label = j, _e.color = rn(U), ce(), Me("change")) : $t();
    }
  }
  function Qc(v) {
    t(14, A = !1), xe();
    const { detail: W } = v;
    let j = W.label, U = W.color, G = W.ret, Q = W.lock;
    G == 1 && (t(15, Ie = Q), t(16, $.label = j, $), t(16, $.color = U, $));
  }
  function Ds() {
    if (F === "box") {
      if (Z >= 0 && Z < u.boxes.length) {
        const v = u.boxes[Z];
        v.label = $.label, $.color !== "" && (v.color = rn($.color)), ce(), Me("change");
      }
    } else if (F === "point" && R >= 0 && R < u.points.length) {
      const v = u.points[R];
      v.label = $.label, $.color !== "" && (v.color = rn($.color)), ce(), Me("change");
    }
  }
  function $t() {
    F === "box" ? Z >= 0 && Z < u.boxes.length && (u.boxes.splice(Z, 1), xt(-1), z && $e(), Me("change")) : F === "point" && R >= 0 && R < u.points.length && (u.points.splice(R, 1), pn(-1), z && $e(), Me("change"));
  }
  function Gl(v) {
    t(35, u.orientation = ((u.orientation + v) % 4 + 4) % 4, u), I.orientation = u.orientation, mi();
    for (const W of u.boxes)
      W.onRotate(v);
    for (const W of u.points)
      W.onRotate(v);
    ce(), Me("change");
  }
  function mi() {
    if (y) {
      if (L = 1, t(9, y.width = y.clientWidth, y), I.setRotatedImage(x), x !== null) {
        if (I.imageRotatedWidth > y.width)
          L = y.width / I.imageRotatedWidth, T = Math.round(I.imageRotatedWidth * L), V = Math.round(I.imageRotatedHeight * L), le = 0, ae = 0, H = T, be = V, t(9, y.height = V, y);
        else {
          T = I.imageRotatedWidth, V = I.imageRotatedHeight;
          var v = (y.width - T) / 2;
          le = v, ae = 0, H = v + T, be = V, t(9, y.height = V, y);
        }
        I.imageWidth = T, I.imageHeight = V;
      } else
        le = 0, ae = 0, H = y.width, be = y.height, t(9, y.height = y.clientHeight, y);
      if (I.resize(y.width, y.height, le, ae), H > 0 && be > 0) {
        for (const W of u.boxes)
          W.canvasXmin = le, W.canvasYmin = ae, W.canvasXmax = H, W.canvasYmax = be, W.setScaleFactor(L);
        for (const W of u.points)
          W.canvasXmin = le, W.canvasYmin = ae, W.canvasXmax = H, W.canvasYmax = be, W.setScaleFactor(L);
      }
      ce(), Me("change");
    }
  }
  const xc = new ResizeObserver(mi);
  function $c() {
    for (let v = 0; v < u.boxes.length; v++) {
      let W = u.boxes[v];
      if (!(W instanceof Fo)) {
        const j = W;
        let U = "", G = "";
        Object.prototype.hasOwnProperty.call(j, "color") ? (U = j.color, Array.isArray(U) && U.length === 3 && (U = `rgb(${U[0]}, ${U[1]}, ${U[2]})`)) : U = ft[v % ft.length], Object.prototype.hasOwnProperty.call(j, "label") && (G = j.label), W = new Fo(Tn, qs, I, P, le, ae, H, be, G, j.xmin, j.ymin, j.xmax, j.ymax, U, _, f, d, h, p), t(35, u.boxes[v] = W, u);
      }
    }
  }
  function e_() {
    for (let v = 0; v < u.points.length; v++) {
      let W = u.points[v];
      if (!(W instanceof Oo)) {
        const j = W;
        let U = "", G = "";
        Object.prototype.hasOwnProperty.call(j, "color") ? (U = j.color, Array.isArray(U) && U.length === 3 && (U = `rgb(${U[0]}, ${U[1]}, ${U[2]})`)) : U = ft[v % ft.length], Object.prototype.hasOwnProperty.call(j, "label") && (G = j.label), W = new Oo(Tn, I, P, le, ae, H, be, G, j.x, j.y, U, 0.7, Math.max(4, d / 2), L), t(35, u.points[v] = W, u);
      }
    }
  }
  function Bs() {
    a !== null && (x === null || x.src != a) && (x = new Image(), x.src = a, x.onload = function() {
      mi(), ce();
    });
  }
  Yp(() => {
    if (Array.isArray(m) && m.length > 0) {
      if (!Array.isArray(g) || g.length == 0)
        for (let v = 0; v < m.length; v++) {
          let W = ft[v % ft.length];
          g.push(Uo(W));
        }
      t(16, $.label = m[0][0], $), t(16, $.color = g[0], $);
    }
    J = y.getContext("2d"), xc.observe(y), Z < 0 && u !== null && u.boxes.length > 0 && xt(0), R < 0 && u !== null && u.points.length > 0 && pn(0), Bs(), mi(), ce();
  });
  function t_(v) {
    rr[v ? "unshift" : "push"](() => {
      y = v, t(9, y), t(10, Y), t(8, r);
    });
  }
  const n_ = () => $e(), i_ = () => bn(), l_ = () => On(), o_ = () => $t(), s_ = () => t(14, A = !0), a_ = () => Gl(-1), r_ = () => Gl(1);
  function c_(v) {
    rr[v ? "unshift" : "push"](() => {
      ee = v, t(11, ee);
    });
  }
  const __ = () => ee.focus();
  function u_(v) {
    Po.call(this, i, v);
  }
  function f_(v) {
    Po.call(this, i, v);
  }
  function d_(v) {
    Po.call(this, i, v);
  }
  return i.$$set = (v) => {
    "imageUrl" in v && t(37, a = v.imageUrl), "interactive" in v && t(2, c = v.interactive), "boxAlpha" in v && t(38, _ = v.boxAlpha), "boxMinSize" in v && t(39, f = v.boxMinSize), "handleSize" in v && t(40, d = v.handleSize), "boxThickness" in v && t(41, h = v.boxThickness), "boxSelectedThickness" in v && t(42, p = v.boxSelectedThickness), "value" in v && t(35, u = v.value), "choices" in v && t(3, m = v.choices), "choicesColors" in v && t(4, g = v.choicesColors), "disableEditBoxes" in v && t(5, w = v.disableEditBoxes), "height" in v && t(6, b = v.height), "width" in v && t(7, C = v.width), "singleBox" in v && t(43, z = v.singleBox), "showRemoveButton" in v && t(1, k = v.showRemoveButton), "handlesCursor" in v && t(44, D = v.handlesCursor), "useDefaultLabel" in v && t(45, q = v.useDefaultLabel), "enableKeyboardShortcuts" in v && t(46, M = v.enableKeyboardShortcuts), "selectedAnnotationId" in v && t(0, S = v.selectedAnnotationId), "focusSelectedOnly" in v && t(36, E = v.focusSelectedOnly), "onClearSelection" in v && t(47, X = v.onClearSelection);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*canvas, mode, Mode*/
    1792 && y && (Y === r.creation || Y === r.point ? t(9, y.style.cursor = "crosshair", y) : t(9, y.style.cursor = "default", y)), i.$$.dirty[1] & /*selectedTarget, selectedBox, value, _a, _b, selectedPoint, _c, _d*/
    16646160 && (F === "box" && Z >= 0 ? (t(17, je = t(49, l = t(48, n = u.boxes[Z]) === null || n === void 0 ? void 0 : n.label) !== null && l !== void 0 ? l : ""), t(18, Fe = u.boxes[Z] ? Uo(u.boxes[Z].color) : "")) : F === "point" && R >= 0 ? (t(17, je = t(51, s = t(50, o = u.points[R]) === null || o === void 0 ? void 0 : o.label) !== null && s !== void 0 ? s : ""), t(18, Fe = u.points[R] ? Uo(u.points[R].color) : "")) : (t(17, je = ""), t(18, Fe = ""))), i.$$.dirty[0] & /*selectedAnnotationId, mode, Mode*/
    1281 | i.$$.dirty[1] & /*value, lastSelectedAnnotationId, selectedInfo, selectedTarget, selectedBox, selectedPoint*/
    65011728)
      if (!u)
        t(55, he = null), t(56, Qt = null);
      else {
        t(55, he = Tp(S, u));
        const v = S !== Qt;
        he && (he.type === "box" ? (F !== "box" || Z !== he.index) && xt(he.index) : (F !== "point" || R !== he.index) && pn(he.index), v && Y !== r.drag && On()), t(56, Qt = S);
      }
    i.$$.dirty[1] & /*value*/
    16 && (I.orientation = u.orientation, Bs(), $c(), e_(), mi(), ce());
  }, [
    S,
    k,
    c,
    m,
    g,
    w,
    b,
    C,
    r,
    y,
    Y,
    ee,
    re,
    de,
    A,
    Ie,
    $,
    je,
    Fe,
    Pl,
    Vl,
    B,
    Oe,
    rt,
    He,
    $e,
    bn,
    On,
    Zl,
    Zc,
    Gc,
    Jc,
    Qc,
    $t,
    Gl,
    u,
    E,
    a,
    _,
    f,
    d,
    h,
    p,
    z,
    D,
    q,
    M,
    X,
    n,
    l,
    o,
    s,
    Z,
    R,
    F,
    he,
    Qt,
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
    u_,
    f_,
    d_
  ];
}
class Fp extends Ap {
  constructor(e) {
    super(), Rp(
      this,
      e,
      jp,
      Hp,
      Xp,
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
  SvelteComponent: Op,
  add_flush_callback: Pp,
  bind: Up,
  binding_callbacks: Vp,
  create_component: Np,
  destroy_component: Kp,
  init: Zp,
  mount_component: Gp,
  safe_not_equal: Jp,
  transition_in: Qp,
  transition_out: xp
} = window.__gradio__svelte__internal, { createEventDispatcher: $p } = window.__gradio__svelte__internal;
function eb(i) {
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
    i[0]), e = new Fp({ props: o }), Vp.push(() => Up(e, "value", l)), e.$on(
      "change",
      /*change_handler*/
      i[25]
    ), {
      c() {
        Np(e.$$.fragment);
      },
      m(s, r) {
        Gp(e, s, r), n = !0;
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
        s[0], Pp(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (Qp(e.$$.fragment, s), n = !0);
      },
      o(s) {
        xp(e.$$.fragment, s), n = !1;
      },
      d(s) {
        Kp(e, s);
      }
    }
  );
}
function tb(i, e, t) {
  let { src: n = void 0 } = e, { interactive: l } = e, { boxesAlpha: o } = e, { labelList: s } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: c } = e, { boxThickness: _ } = e, { height: f } = e, { width: d } = e, { boxSelectedThickness: h } = e, { value: p } = e, { disableEditBoxes: u } = e, { singleBox: m } = e, { showRemoveButton: g } = e, { handlesCursor: w } = e, { useDefaultLabel: b } = e, { enableKeyboardShortcuts: C } = e, { selectedAnnotationId: z = null } = e, { focusSelectedOnly: k = !1 } = e, { onClearSelection: D = null } = e, q, M;
  const S = $p();
  function E(y) {
    p = y, t(0, p);
  }
  const X = () => S("change");
  return i.$$set = (y) => {
    "src" in y && t(22, n = y.src), "interactive" in y && t(1, l = y.interactive), "boxesAlpha" in y && t(2, o = y.boxesAlpha), "labelList" in y && t(3, s = y.labelList), "labelColors" in y && t(4, r = y.labelColors), "boxMinSize" in y && t(5, a = y.boxMinSize), "handleSize" in y && t(6, c = y.handleSize), "boxThickness" in y && t(7, _ = y.boxThickness), "height" in y && t(8, f = y.height), "width" in y && t(9, d = y.width), "boxSelectedThickness" in y && t(10, h = y.boxSelectedThickness), "value" in y && t(0, p = y.value), "disableEditBoxes" in y && t(11, u = y.disableEditBoxes), "singleBox" in y && t(12, m = y.singleBox), "showRemoveButton" in y && t(13, g = y.showRemoveButton), "handlesCursor" in y && t(14, w = y.handlesCursor), "useDefaultLabel" in y && t(15, b = y.useDefaultLabel), "enableKeyboardShortcuts" in y && t(16, C = y.enableKeyboardShortcuts), "selectedAnnotationId" in y && t(17, z = y.selectedAnnotationId), "focusSelectedOnly" in y && t(18, k = y.focusSelectedOnly), "onClearSelection" in y && t(19, D = y.onClearSelection);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*src, latest_src*/
    12582912) {
      t(20, q = n), t(23, M = n);
      const y = n;
      mh(y).then((ee) => {
        M === y && t(20, q = ee);
      });
    }
  }, [
    p,
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
    b,
    C,
    z,
    k,
    D,
    q,
    S,
    n,
    M,
    E,
    X
  ];
}
class nb extends Op {
  constructor(e) {
    super(), Zp(this, e, tb, eb, Jp, {
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
class gr {
  constructor() {
    this.boxes = [], this.points = [], this.orientation = 0;
  }
}
const {
  SvelteComponent: ib,
  add_flush_callback: El,
  append: ue,
  attr: ke,
  bind: Ll,
  binding_callbacks: Ii,
  bubble: Si,
  check_outros: Cn,
  create_component: Nt,
  create_slot: lb,
  destroy_component: Kt,
  destroy_each: ob,
  detach: It,
  element: Ye,
  empty: sb,
  ensure_array_like: pr,
  get_all_dirty_from_scope: ab,
  get_slot_changes: rb,
  group_outros: Sn,
  init: cb,
  insert: Ht,
  listen: br,
  mount_component: Zt,
  noop: Fc,
  run_all: _b,
  safe_not_equal: ub,
  set_data: Vo,
  space: ot,
  text: qi,
  toggle_class: Al,
  transition_in: ie,
  transition_out: fe,
  update_slot_base: fb
} = window.__gradio__svelte__internal, { createEventDispatcher: db, tick: hb } = window.__gradio__svelte__internal;
function vr(i, e, t) {
  const n = i.slice();
  return n[65] = e[t], n;
}
function wr(i) {
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
      $$slots: { default: [mb] },
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
      fe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Kt(e, n);
    }
  };
}
function mb(i) {
  let e, t;
  return e = new Wl({
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
      fe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Kt(e, n);
    }
  };
}
function kr(i) {
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
      fe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Kt(e, n);
    }
  };
}
function yr(i) {
  let e, t, n;
  return t = new Wl({
    props: { Icon: Tr, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    i[43]
  ), {
    c() {
      e = Ye("div"), Nt(t.$$.fragment);
    },
    m(l, o) {
      Ht(l, e, o), Zt(t, e, null), n = !0;
    },
    p: Fc,
    i(l) {
      n || (ie(t.$$.fragment, l), n = !0);
    },
    o(l) {
      fe(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && It(e), Kt(t);
    }
  };
}
function Cr(i) {
  let e;
  const t = (
    /*#slots*/
    i[45].default
  ), n = lb(
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
      1) && fb(
        n,
        t,
        l,
        /*$$scope*/
        l[62],
        e ? rb(
          t,
          /*$$scope*/
          l[62],
          o,
          null
        ) : ab(
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
      fe(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function gb(i) {
  let e, t, n = (
    /*value*/
    i[0] === null && Cr(i)
  );
  return {
    c() {
      n && n.c(), e = sb();
    },
    m(l, o) {
      n && n.m(l, o), Ht(l, e, o), t = !0;
    },
    p(l, o) {
      /*value*/
      l[0] === null ? n ? (n.p(l, o), o[0] & /*value*/
      1 && ie(n, 1)) : (n = Cr(l), n.c(), ie(n, 1), n.m(e.parentNode, e)) : n && (Sn(), fe(n, 1, 1, () => {
        n = null;
      }), Cn());
    },
    i(l) {
      t || (ie(n), t = !0);
    },
    o(l) {
      fe(n), t = !1;
    },
    d(l) {
      l && It(e), n && n.d(l);
    }
  };
}
function Sr(i) {
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
      fe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Kt(e, n);
    }
  };
}
function qr(i) {
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
  i[0]), n = new nb({ props: f }), Ii.push(() => Ll(n, "value", _)), n.$on(
    "change",
    /*handleCanvasChange*/
    i[39]
  );
  function d(u, m) {
    return (
      /*annotationItems*/
      u[30].length === 0 ? bb : pb
    );
  }
  let h = d(i), p = h(i);
  return {
    c() {
      e = Ye("div"), t = Ye("div"), Nt(n.$$.fragment), o = ot(), s = Ye("aside"), r = Ye("div"), r.textContent = "Annotations", a = ot(), p.c(), ke(t, "class", "image-frame svelte-1qakpd1"), Al(
        t,
        "selectable",
        /*selectable*/
        i[5]
      ), ke(r, "class", "annotation-panel__header svelte-1qakpd1"), ke(s, "class", "annotation-panel svelte-1qakpd1"), ke(s, "aria-label", "Annotations list"), ke(e, "class", "annotator-layout svelte-1qakpd1");
    },
    m(u, m) {
      Ht(u, e, m), ue(e, t), Zt(n, t, null), ue(e, o), ue(e, s), ue(s, r), ue(s, a), p.m(s, null), c = !0;
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
      u[0], El(() => l = !1)), n.$set(g), (!c || m[0] & /*selectable*/
      32) && Al(
        t,
        "selectable",
        /*selectable*/
        u[5]
      ), h === (h = d(u)) && p ? p.p(u, m) : (p.d(1), p = h(u), p && (p.c(), p.m(s, null)));
    },
    i(u) {
      c || (ie(n.$$.fragment, u), c = !0);
    },
    o(u) {
      fe(n.$$.fragment, u), c = !1;
    },
    d(u) {
      u && It(e), Kt(n), p.d();
    }
  };
}
function pb(i) {
  let e, t = pr(
    /*annotationItems*/
    i[30]
  ), n = [];
  for (let l = 0; l < t.length; l += 1)
    n[l] = zr(vr(i, t, l));
  return {
    c() {
      e = Ye("ul");
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      ke(e, "class", "annotation-list svelte-1qakpd1");
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
        t = pr(
          /*annotationItems*/
          l[30]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const r = vr(l, t, s);
          n[s] ? n[s].p(r, o) : (n[s] = zr(r), n[s].c(), n[s].m(e, null));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(l) {
      l && It(e), ob(n, l);
    }
  };
}
function bb(i) {
  let e;
  return {
    c() {
      e = Ye("div"), e.textContent = "No annotations yet.", ke(e, "class", "annotation-panel__empty svelte-1qakpd1");
    },
    m(t, n) {
      Ht(t, e, n);
    },
    p: Fc,
    d(t) {
      t && It(e);
    }
  };
}
function zr(i) {
  let e, t, n, l, o, s, r = (
    /*item*/
    i[65].label + ""
  ), a, c, _, f, d = (
    /*item*/
    i[65].shape + ""
  ), h, p, u, m, g = (
    /*item*/
    i[65].coords + ""
  ), w, b, C, z;
  function k() {
    return (
      /*click_handler*/
      i[59](
        /*item*/
        i[65]
      )
    );
  }
  function D(...q) {
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
      e = Ye("li"), t = Ye("button"), n = Ye("div"), l = Ye("span"), s = ot(), a = qi(r), c = ot(), _ = Ye("div"), f = qi("Shape: "), h = qi(d), p = ot(), u = Ye("div"), m = qi("Coords: "), w = qi(g), b = ot(), ke(l, "class", "annotation-item__swatch svelte-1qakpd1"), ke(l, "style", o = `background-color: ${/*item*/
      i[65].color};`), ke(n, "class", "annotation-item__title svelte-1qakpd1"), ke(_, "class", "annotation-item__meta svelte-1qakpd1"), ke(u, "class", "annotation-item__coords svelte-1qakpd1"), ke(t, "type", "button"), ke(t, "class", "annotation-item__button svelte-1qakpd1"), Al(
        t,
        "annotation-item__button--selected",
        /*item*/
        i[65].isSelected
      ), ke(e, "class", "annotation-item svelte-1qakpd1");
    },
    m(q, M) {
      Ht(q, e, M), ue(e, t), ue(t, n), ue(n, l), ue(n, s), ue(n, a), ue(t, c), ue(t, _), ue(_, f), ue(_, h), ue(t, p), ue(t, u), ue(u, m), ue(u, w), ue(e, b), C || (z = [
        br(t, "click", k),
        br(t, "keydown", D)
      ], C = !0);
    },
    p(q, M) {
      i = q, M[0] & /*annotationItems*/
      1073741824 && o !== (o = `background-color: ${/*item*/
      i[65].color};`) && ke(l, "style", o), M[0] & /*annotationItems*/
      1073741824 && r !== (r = /*item*/
      i[65].label + "") && Vo(a, r), M[0] & /*annotationItems*/
      1073741824 && d !== (d = /*item*/
      i[65].shape + "") && Vo(h, d), M[0] & /*annotationItems*/
      1073741824 && g !== (g = /*item*/
      i[65].coords + "") && Vo(w, g), M[0] & /*annotationItems*/
      1073741824 && Al(
        t,
        "annotation-item__button--selected",
        /*item*/
        i[65].isSelected
      );
    },
    d(q) {
      q && It(e), C = !1, _b(z);
    }
  };
}
function Dr(i) {
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
    i[1]), e = new D1({ props: o }), Ii.push(() => Ll(e, "active_source", l)), {
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
        s[1], El(() => t = !1)), e.$set(a);
      },
      i(s) {
        n || (ie(e.$$.fragment, s), n = !0);
      },
      o(s) {
        fe(e.$$.fragment, s), n = !1;
      },
      d(s) {
        Kt(e, s);
      }
    }
  );
}
function vb(i) {
  let e, t, n, l, o, s, r, a, c, _, f, d, h, p, u = (
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
      Icon: jr,
      label: (
        /*label*/
        i[2] || "Image Annotator"
      )
    }
  });
  let g = (
    /*showDownloadButton*/
    i[10] && /*value*/
    i[0] !== null && wr(i)
  ), w = (
    /*showShareButton*/
    i[9] && /*value*/
    i[0] !== null && kr(i)
  ), b = (
    /*showClearButton*/
    i[11] && /*value*/
    i[0] !== null && /*interactive*/
    i[7] && yr(i)
  );
  function C(S) {
    i[50](S);
  }
  function z(S) {
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
    $$slots: { default: [gb] },
    $$scope: { ctx: i }
  };
  /*uploading*/
  i[32] !== void 0 && (k.uploading = /*uploading*/
  i[32]), /*dragging*/
  i[33] !== void 0 && (k.dragging = /*dragging*/
  i[33]), c = new am({ props: k }), i[49](c), Ii.push(() => Ll(c, "uploading", C)), Ii.push(() => Ll(c, "dragging", z)), c.$on(
    "load",
    /*handle_upload*/
    i[36]
  ), c.$on(
    "error",
    /*error_handler_1*/
    i[52]
  );
  let D = (
    /*value*/
    i[0] === null && /*active_source*/
    i[1] === "webcam" && Sr(i)
  ), q = (
    /*value*/
    i[0] !== null && qr(i)
  ), M = u && Dr(i);
  return {
    c() {
      Nt(e.$$.fragment), t = ot(), n = Ye("div"), g && g.c(), l = ot(), w && w.c(), o = ot(), b && b.c(), s = ot(), r = Ye("div"), a = Ye("div"), Nt(c.$$.fragment), d = ot(), D && D.c(), h = ot(), q && q.c(), p = ot(), M && M.c(), ke(n, "class", "icon-buttons svelte-1qakpd1"), ke(a, "class", "upload-container svelte-1qakpd1"), ke(r, "data-testid", "image"), ke(r, "class", "image-container svelte-1qakpd1");
    },
    m(S, E) {
      Zt(e, S, E), Ht(S, t, E), Ht(S, n, E), g && g.m(n, null), ue(n, l), w && w.m(n, null), ue(n, o), b && b.m(n, null), Ht(S, s, E), Ht(S, r, E), ue(r, a), Zt(c, a, null), ue(a, d), D && D.m(a, null), ue(a, h), q && q.m(a, null), ue(r, p), M && M.m(r, null), m = !0;
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
      1025 && ie(g, 1)) : (g = wr(S), g.c(), ie(g, 1), g.m(n, l)) : g && (Sn(), fe(g, 1, 1, () => {
        g = null;
      }), Cn()), /*showShareButton*/
      S[9] && /*value*/
      S[0] !== null ? w ? (w.p(S, E), E[0] & /*showShareButton, value*/
      513 && ie(w, 1)) : (w = kr(S), w.c(), ie(w, 1), w.m(n, o)) : w && (Sn(), fe(w, 1, 1, () => {
        w = null;
      }), Cn()), /*showClearButton*/
      S[11] && /*value*/
      S[0] !== null && /*interactive*/
      S[7] ? b ? (b.p(S, E), E[0] & /*showClearButton, value, interactive*/
      2177 && ie(b, 1)) : (b = yr(S), b.c(), ie(b, 1), b.m(n, null)) : b && (Sn(), fe(b, 1, 1, () => {
        b = null;
      }), Cn());
      const y = {};
      E[0] & /*value, active_source*/
      3 && (y.hidden = /*value*/
      S[0] !== null || /*active_source*/
      S[1] === "webcam"), E[0] & /*active_source*/
      2 && (y.filetype = /*active_source*/
      S[1] === "clipboard" ? "clipboard" : "image/*"), E[0] & /*root*/
      64 && (y.root = /*root*/
      S[6]), E[0] & /*max_file_size*/
      33554432 && (y.max_file_size = /*max_file_size*/
      S[25]), E[0] & /*sources*/
      16 && (y.disable_click = !/*sources*/
      S[4].includes("upload")), E[0] & /*cli_upload*/
      67108864 && (y.upload = /*cli_upload*/
      S[26]), E[0] & /*stream_handler*/
      134217728 && (y.stream_handler = /*stream_handler*/
      S[27]), E[0] & /*value*/
      1 | E[2] & /*$$scope*/
      1 && (y.$$scope = { dirty: E, ctx: S }), !_ && E[1] & /*uploading*/
      2 && (_ = !0, y.uploading = /*uploading*/
      S[32], El(() => _ = !1)), !f && E[1] & /*dragging*/
      4 && (f = !0, y.dragging = /*dragging*/
      S[33], El(() => f = !1)), c.$set(y), /*value*/
      S[0] === null && /*active_source*/
      S[1] === "webcam" ? D ? (D.p(S, E), E[0] & /*value, active_source*/
      3 && ie(D, 1)) : (D = Sr(S), D.c(), ie(D, 1), D.m(a, h)) : D && (Sn(), fe(D, 1, 1, () => {
        D = null;
      }), Cn()), /*value*/
      S[0] !== null ? q ? (q.p(S, E), E[0] & /*value*/
      1 && ie(q, 1)) : (q = qr(S), q.c(), ie(q, 1), q.m(a, null)) : q && (Sn(), fe(q, 1, 1, () => {
        q = null;
      }), Cn()), E[0] & /*sources, value, interactive*/
      145 && (u = /*sources*/
      (S[4].length > 1 || /*sources*/
      S[4].includes("clipboard")) && /*value*/
      S[0] === null && /*interactive*/
      S[7]), u ? M ? (M.p(S, E), E[0] & /*sources, value, interactive*/
      145 && ie(M, 1)) : (M = Dr(S), M.c(), ie(M, 1), M.m(r, null)) : M && (Sn(), fe(M, 1, 1, () => {
        M = null;
      }), Cn());
    },
    i(S) {
      m || (ie(e.$$.fragment, S), ie(g), ie(w), ie(b), ie(c.$$.fragment, S), ie(D), ie(q), ie(M), m = !0);
    },
    o(S) {
      fe(e.$$.fragment, S), fe(g), fe(w), fe(b), fe(c.$$.fragment, S), fe(D), fe(q), fe(M), m = !1;
    },
    d(S) {
      S && (It(t), It(n), It(s), It(r)), Kt(e, S), g && g.d(), w && w.d(), b && b.d(), i[49](null), Kt(c), D && D.d(), q && q.d(), M && M.d();
    }
  };
}
function wb(i) {
  var e, t, n, l, o, s, r, a;
  const c = Math.round((t = (e = i._xmin) !== null && e !== void 0 ? e : i.xmin) !== null && t !== void 0 ? t : 0), _ = Math.round((l = (n = i._ymin) !== null && n !== void 0 ? n : i.ymin) !== null && l !== void 0 ? l : 0), f = Math.round((s = (o = i._xmax) !== null && o !== void 0 ? o : i.xmax) !== null && s !== void 0 ? s : 0), d = Math.round((a = (r = i._ymax) !== null && r !== void 0 ? r : i.ymax) !== null && a !== void 0 ? a : 0);
  return `xmin:${c}, ymin:${_}, xmax:${f}, ymax:${d}`;
}
function kb(i) {
  var e, t, n, l;
  const o = Math.round((t = (e = i._x) !== null && e !== void 0 ? e : i.x) !== null && t !== void 0 ? t : 0), s = Math.round((l = (n = i._y) !== null && n !== void 0 ? n : i.y) !== null && l !== void 0 ? l : 0);
  return `x:${o}, y:${s}`;
}
function yb(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e;
  var o = this && this.__awaiter || function(B, Oe, Se, rt) {
    function xe(He) {
      return He instanceof Se ? He : new Se(function(jn) {
        jn(He);
      });
    }
    return new (Se || (Se = Promise))(function(He, jn) {
      function Nl($e) {
        try {
          Fn(rt.next($e));
        } catch (bn) {
          jn(bn);
        }
      }
      function Kl($e) {
        try {
          Fn(rt.throw($e));
        } catch (bn) {
          jn(bn);
        }
      }
      function Fn($e) {
        $e.done ? He($e.value) : xe($e.value).then(Nl, Kl);
      }
      Fn((rt = rt.apply(B, Oe || [])).next());
    });
  };
  let { value: s } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: c = ["upload", "webcam", "clipboard"] } = e, { selectable: _ = !1 } = e, { root: f } = e, { interactive: d } = e, { i18n: h } = e, { showShareButton: p } = e, { showDownloadButton: u } = e, { showClearButton: m } = e, { boxesAlpha: g } = e, { labelList: w } = e, { labelColors: b } = e, { boxMinSize: C } = e, { handleSize: z } = e, { height: k } = e, { width: D } = e, { boxThickness: q } = e, { disableEditBoxes: M } = e, { singleBox: S } = e, { showRemoveButton: E } = e, { handlesCursor: X } = e, { boxSelectedThickness: y } = e, { max_file_size: ee = null } = e, { cli_upload: J } = e, { stream_handler: x } = e, { useDefaultLabel: Z } = e, { enableKeyboardShortcuts: R } = e, F = [], Y = 0, P = null, I = !1, le, ae = !1, { active_source: H = null } = e;
  function be({ detail: B }) {
    t(0, s = new gr()), t(0, s.image = B, s), T("upload", void 0);
  }
  function L(B) {
    return o(this, void 0, void 0, function* () {
      const Oe = yield le.load_files([new File([B], "webcam.png")]), Se = (Oe == null ? void 0 : Oe[0]) || null;
      Se ? (t(0, s = new gr()), t(0, s.image = Se, s)) : t(0, s = null), yield hb(), T("change");
    });
  }
  const T = db();
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
  function de() {
    t(44, Y += 1), T("change");
  }
  function A(B) {
    P === B.id ? (t(31, P = null), t(34, I = !1)) : (t(31, P = B.id), t(34, I = !0));
  }
  function at() {
    t(31, P = null), t(34, I = !1);
  }
  function Ie(B, Oe) {
    (B.key === "Enter" || B.key === " ") && (B.preventDefault(), A(Oe));
  }
  function $() {
    t(0, s = null), T("clear"), T("change");
  }
  const je = async (B) => B === null ? "" : `<img src="${await xd(B.image)}" />`;
  function Fe(B) {
    Si.call(this, i, B);
  }
  function Ce(B) {
    Si.call(this, i, B);
  }
  function he(B) {
    Ii[B ? "unshift" : "push"](() => {
      le = B, t(35, le);
    });
  }
  function Qt(B) {
    ae = B, t(32, ae);
  }
  function Hn(B) {
    V = B, t(33, V);
  }
  function Fi(B) {
    Si.call(this, i, B);
  }
  const Me = (B) => L(B.detail), ce = (B) => L(B.detail);
  function Tn(B) {
    Si.call(this, i, B);
  }
  function xt(B) {
    Si.call(this, i, B);
  }
  const pn = (B) => L(B.detail);
  function Oi(B) {
    s = B, t(0, s);
  }
  const Pl = (B) => A(B), Ul = (B, Oe) => Ie(Oe, B);
  function Vl(B) {
    H = B, t(1, H), t(4, c);
  }
  return i.$$set = (B) => {
    "value" in B && t(0, s = B.value), "label" in B && t(2, r = B.label), "show_label" in B && t(3, a = B.show_label), "sources" in B && t(4, c = B.sources), "selectable" in B && t(5, _ = B.selectable), "root" in B && t(6, f = B.root), "interactive" in B && t(7, d = B.interactive), "i18n" in B && t(8, h = B.i18n), "showShareButton" in B && t(9, p = B.showShareButton), "showDownloadButton" in B && t(10, u = B.showDownloadButton), "showClearButton" in B && t(11, m = B.showClearButton), "boxesAlpha" in B && t(12, g = B.boxesAlpha), "labelList" in B && t(13, w = B.labelList), "labelColors" in B && t(14, b = B.labelColors), "boxMinSize" in B && t(15, C = B.boxMinSize), "handleSize" in B && t(16, z = B.handleSize), "height" in B && t(17, k = B.height), "width" in B && t(18, D = B.width), "boxThickness" in B && t(19, q = B.boxThickness), "disableEditBoxes" in B && t(20, M = B.disableEditBoxes), "singleBox" in B && t(21, S = B.singleBox), "showRemoveButton" in B && t(22, E = B.showRemoveButton), "handlesCursor" in B && t(23, X = B.handlesCursor), "boxSelectedThickness" in B && t(24, y = B.boxSelectedThickness), "max_file_size" in B && t(25, ee = B.max_file_size), "cli_upload" in B && t(26, J = B.cli_upload), "stream_handler" in B && t(27, x = B.stream_handler), "useDefaultLabel" in B && t(28, Z = B.useDefaultLabel), "enableKeyboardShortcuts" in B && t(29, R = B.enableKeyboardShortcuts), "active_source" in B && t(1, H = B.active_source), "$$scope" in B && t(62, l = B.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*value, annotationItems*/
    1073741825 | i.$$.dirty[1] & /*annotationTick, selectedAnnotationId*/
    8193) {
      if (!s)
        t(30, F = []);
      else {
        const B = s.boxes.map((Se, rt) => {
          var xe, He;
          return {
            id: `box-${rt}`,
            label: !((xe = Se.label) === null || xe === void 0) && xe.trim() ? Se.label : "(No label)",
            shape: "box",
            coords: wb(Se),
            color: (He = Se.color) !== null && He !== void 0 ? He : "transparent",
            isSelected: P === `box-${rt}`
          };
        }), Oe = s.points.map((Se, rt) => {
          var xe, He;
          return {
            id: `point-${rt}`,
            label: !((xe = Se.label) === null || xe === void 0) && xe.trim() ? Se.label : "(No label)",
            shape: "point",
            coords: kb(Se),
            color: (He = Se.color) !== null && He !== void 0 ? He : "transparent",
            isSelected: P === `point-${rt}`
          };
        });
        t(30, F = [...B, ...Oe]);
      }
      P && !F.some((B) => B.id === P) && (t(31, P = null), t(34, I = !1));
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
    p,
    u,
    m,
    g,
    w,
    b,
    C,
    z,
    k,
    D,
    q,
    M,
    S,
    E,
    X,
    y,
    ee,
    J,
    x,
    Z,
    R,
    F,
    P,
    ae,
    V,
    I,
    le,
    be,
    L,
    re,
    de,
    A,
    at,
    Ie,
    $,
    Y,
    n,
    je,
    Fe,
    Ce,
    he,
    Qt,
    Hn,
    Fi,
    Me,
    ce,
    Tn,
    xt,
    pn,
    Oi,
    Pl,
    Ul,
    Vl,
    l
  ];
}
class Cb extends ib {
  constructor(e) {
    super(), cb(
      this,
      e,
      yb,
      vb,
      ub,
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
  SvelteComponent: Sb,
  attr: bl,
  detach: Oc,
  element: Pc,
  init: qb,
  insert: Uc,
  noop: Br,
  safe_not_equal: zb,
  src_url_equal: Mr,
  toggle_class: cn
} = window.__gradio__svelte__internal;
function Er(i) {
  let e, t;
  return {
    c() {
      e = Pc("img"), Mr(e.src, t = /*value*/
      i[0].url) || bl(e, "src", t), bl(e, "alt", "");
    },
    m(n, l) {
      Uc(n, e, l);
    },
    p(n, l) {
      l & /*value*/
      1 && !Mr(e.src, t = /*value*/
      n[0].url) && bl(e, "src", t);
    },
    d(n) {
      n && Oc(e);
    }
  };
}
function Db(i) {
  let e, t = (
    /*value*/
    i[0] && Er(i)
  );
  return {
    c() {
      e = Pc("div"), t && t.c(), bl(e, "class", "container svelte-1sgcyba"), cn(
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
      Uc(n, e, l), t && t.m(e, null);
    },
    p(n, [l]) {
      /*value*/
      n[0] ? t ? t.p(n, l) : (t = Er(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), l & /*type*/
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
    i: Br,
    o: Br,
    d(n) {
      n && Oc(e), t && t.d();
    }
  };
}
function Bb(i, e, t) {
  let { value: n } = e, { type: l } = e, { selected: o = !1 } = e;
  return i.$$set = (s) => {
    "value" in s && t(0, n = s.value), "type" in s && t(1, l = s.type), "selected" in s && t(2, o = s.selected);
  }, [n, l, o];
}
class Kq extends Sb {
  constructor(e) {
    super(), qb(this, e, Bb, Db, zb, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: Mb,
  add_flush_callback: Lr,
  assign: Eb,
  bind: Ar,
  binding_callbacks: Wr,
  check_outros: Lb,
  create_component: Xn,
  destroy_component: Yn,
  detach: Vc,
  empty: Ab,
  flush: ne,
  get_spread_object: Wb,
  get_spread_update: Rb,
  group_outros: Xb,
  init: Yb,
  insert: Nc,
  mount_component: In,
  safe_not_equal: Ib,
  space: Hb,
  transition_in: Gt,
  transition_out: Jt
} = window.__gradio__svelte__internal;
function Tb(i) {
  let e, t;
  return e = new of({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [Ob] },
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
function jb(i) {
  let e, t;
  return e = new Kr({
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
function Fb(i) {
  let e, t;
  return e = new Kr({
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
function Ob(i) {
  let e, t;
  return e = new jr({}), {
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
function Pb(i) {
  let e, t, n, l;
  const o = [Fb, jb, Tb], s = [];
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
      t.c(), n = Ab();
    },
    m(a, c) {
      s[e].m(a, c), Nc(a, n, c), l = !0;
    },
    p(a, c) {
      let _ = e;
      e = r(a), e === _ ? s[e].p(a, c) : (Xb(), Jt(s[_], 1, 1, () => {
        s[_] = null;
      }), Lb(), t = s[e], t ? t.p(a, c) : (t = s[e] = o[e](a), t.c()), Gt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (Gt(t), l = !0);
    },
    o(a) {
      Jt(t), l = !1;
    },
    d(a) {
      a && Vc(n), s[e].d(a);
    }
  };
}
function Ub(i) {
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
    a = Eb(a, r[d]);
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
    $$slots: { default: [Pb] },
    $$scope: { ctx: i }
  };
  return (
    /*active_source*/
    i[34] !== void 0 && (f.active_source = /*active_source*/
    i[34]), /*value*/
    i[0] !== void 0 && (f.value = /*value*/
    i[0]), n = new Cb({ props: f }), Wr.push(() => Ar(n, "active_source", c)), Wr.push(() => Ar(n, "value", _)), n.$on(
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
        Xn(e.$$.fragment), t = Hb(), Xn(n.$$.fragment);
      },
      m(d, h) {
        In(e, d, h), Nc(d, t, h), In(n, d, h), s = !0;
      },
      p(d, h) {
        const p = h[0] & /*loading_status*/
        2 | h[1] & /*gradio*/
        2 ? Rb(r, [
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
          2 && Wb(
            /*loading_status*/
            d[1]
          )
        ]) : {};
        e.$set(p);
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
        d[34], Lr(() => l = !1)), !o && h[0] & /*value*/
        1 && (o = !0, u.value = /*value*/
        d[0], Lr(() => o = !1)), n.$set(u);
      },
      i(d) {
        s || (Gt(e.$$.fragment, d), Gt(n.$$.fragment, d), s = !0);
      },
      o(d) {
        Jt(e.$$.fragment, d), Jt(n.$$.fragment, d), s = !1;
      },
      d(d) {
        d && Vc(t), Yn(e, d), Yn(n, d);
      }
    }
  );
}
function Vb(i) {
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
      $$slots: { default: [Ub] },
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
function Nb(i, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: l = [] } = e, { visible: o = !0 } = e, { value: s = null } = e, { label: r } = e, { show_label: a } = e, { root: c } = e, { height: _ } = e, { width: f } = e, { _selectable: d = !1 } = e, { container: h = !0 } = e, { scale: p = null } = e, { min_width: u = void 0 } = e, { loading_status: m } = e, { sources: g = ["upload", "webcam", "clipboard"] } = e, { show_download_button: w } = e, { show_share_button: b } = e, { show_clear_button: C } = e, { interactive: z } = e, { boxes_alpha: k } = e, { label_list: D } = e, { label_colors: q } = e, { box_min_size: M } = e, { handle_size: S } = e, { box_thickness: E } = e, { box_selected_thickness: X } = e, { disable_edit_boxes: y } = e, { single_box: ee } = e, { show_remove_button: J } = e, { handles_cursor: x } = e, { use_default_label: Z } = e, { enable_keyboard_shortcuts: R } = e, { gradio: F } = e, Y, P = null;
  function I(A) {
    P = A, t(34, P);
  }
  function le(A) {
    s = A, t(0, s);
  }
  const ae = () => F.dispatch("change"), H = () => F.dispatch("edit"), be = () => {
    F.dispatch("clear");
  }, L = ({ detail: A }) => t(33, Y = A), T = () => F.dispatch("upload"), V = ({ detail: A }) => F.dispatch("select", A), re = ({ detail: A }) => F.dispatch("share", A), de = ({ detail: A }) => {
    t(1, m = m || {}), t(1, m.status = "error", m), F.dispatch("error", A);
  };
  return i.$$set = (A) => {
    "elem_id" in A && t(2, n = A.elem_id), "elem_classes" in A && t(3, l = A.elem_classes), "visible" in A && t(4, o = A.visible), "value" in A && t(0, s = A.value), "label" in A && t(5, r = A.label), "show_label" in A && t(6, a = A.show_label), "root" in A && t(7, c = A.root), "height" in A && t(8, _ = A.height), "width" in A && t(9, f = A.width), "_selectable" in A && t(10, d = A._selectable), "container" in A && t(11, h = A.container), "scale" in A && t(12, p = A.scale), "min_width" in A && t(13, u = A.min_width), "loading_status" in A && t(1, m = A.loading_status), "sources" in A && t(14, g = A.sources), "show_download_button" in A && t(15, w = A.show_download_button), "show_share_button" in A && t(16, b = A.show_share_button), "show_clear_button" in A && t(17, C = A.show_clear_button), "interactive" in A && t(18, z = A.interactive), "boxes_alpha" in A && t(19, k = A.boxes_alpha), "label_list" in A && t(20, D = A.label_list), "label_colors" in A && t(21, q = A.label_colors), "box_min_size" in A && t(22, M = A.box_min_size), "handle_size" in A && t(23, S = A.handle_size), "box_thickness" in A && t(24, E = A.box_thickness), "box_selected_thickness" in A && t(25, X = A.box_selected_thickness), "disable_edit_boxes" in A && t(26, y = A.disable_edit_boxes), "single_box" in A && t(27, ee = A.single_box), "show_remove_button" in A && t(28, J = A.show_remove_button), "handles_cursor" in A && t(29, x = A.handles_cursor), "use_default_label" in A && t(30, Z = A.use_default_label), "enable_keyboard_shortcuts" in A && t(31, R = A.enable_keyboard_shortcuts), "gradio" in A && t(32, F = A.gradio);
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
    p,
    u,
    g,
    w,
    b,
    C,
    z,
    k,
    D,
    q,
    M,
    S,
    E,
    X,
    y,
    ee,
    J,
    x,
    Z,
    R,
    F,
    Y,
    P,
    I,
    le,
    ae,
    H,
    be,
    L,
    T,
    V,
    re,
    de
  ];
}
class Zq extends Mb {
  constructor(e) {
    super(), Yb(
      this,
      e,
      Nb,
      Vb,
      Ib,
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
