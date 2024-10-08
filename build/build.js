import { defineComponent, computed, useSlots, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, createCommentVNode, createTextVNode, toDisplayString, unref, renderSlot } from "vue";
import { __ } from "lkt-i18n";
const _hoisted_1 = {
  key: 0,
  class: "lkt-box-header"
};
const _hoisted_2 = { class: "lkt-box-title" };
const _hoisted_3 = {
  key: 1,
  class: "lkt-box-content"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LktBox",
  props: {
    title: { default: "" },
    icon: { default: "" },
    iconAtEnd: { type: Boolean, default: false },
    style: { default: "" },
    class: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      let r = [];
      if (props.class)
        r.push(props.class);
      return r.join(" ");
    }), computedTitle = computed(() => {
      if (props.title.startsWith("__:")) {
        return __(props.title.substring(3));
      }
      return props.title;
    });
    const slots = useSlots();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: normalizeClass(["lkt-box", classes.value]),
        style: normalizeStyle(_ctx.style)
      }, [
        computedTitle.value.length > 0 ? (openBlock(), createElementBlock("header", _hoisted_1, [
          createElementVNode("div", _hoisted_2, [
            _ctx.icon && !_ctx.iconAtEnd ? (openBlock(), createElementBlock("i", {
              key: 0,
              class: normalizeClass(_ctx.icon)
            }, null, 2)) : createCommentVNode("", true),
            createTextVNode(" " + toDisplayString(computedTitle.value) + " ", 1),
            _ctx.icon && _ctx.iconAtEnd ? (openBlock(), createElementBlock("i", {
              key: 1,
              class: normalizeClass(_ctx.icon)
            }, null, 2)) : createCommentVNode("", true)
          ])
        ])) : createCommentVNode("", true),
        unref(slots).default ? (openBlock(), createElementBlock("div", _hoisted_3, [
          renderSlot(_ctx.$slots, "default")
        ])) : createCommentVNode("", true)
      ], 6);
    };
  }
});
const LktBox = {
  install: (app, options) => {
    if (app.component("lkt-box") === void 0)
      app.component("lkt-box", _sfc_main);
  }
};
export {
  LktBox,
  LktBox as default
};
