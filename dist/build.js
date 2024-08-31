import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, createCommentVNode, createTextVNode, toDisplayString, renderSlot } from "vue";
import { __ } from "lkt-i18n";
const _hoisted_1 = {
  key: 0,
  class: "lkt-box-header"
};
const _hoisted_2 = { class: "lkt-box-title" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LktBox",
  props: {
    palette: { default: "" },
    title: { default: "" },
    icon: { default: "" },
    iconAtEnd: { type: Boolean, default: false },
    style: { default: "" },
    class: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      let r = ["lkt-box"];
      if (props.palette)
        r.push(`lkt-box--${props.palette}`, `palette-${props.palette}`);
      if (props.class)
        r.push(props.class);
      return r.join(" ");
    }), computedTitle = computed(() => {
      if (props.title.startsWith("__:")) {
        return __(props.title.substring(3));
      }
      return props.title;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: normalizeClass(classes.value),
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
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
const LktBoxPlugin = {
  install: (app, options) => {
    app.component("lkt-box", _sfc_main);
  }
};
export {
  _sfc_main as LktBox,
  LktBoxPlugin
};
