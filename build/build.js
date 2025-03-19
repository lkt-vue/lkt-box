import { defineComponent, mergeDefaults, useSlots, computed, resolveComponent, createElementBlock, openBlock, normalizeStyle, normalizeClass, createCommentVNode, unref, createElementVNode, createBlock, renderSlot, normalizeProps, mergeProps, Fragment, createTextVNode, toDisplayString } from "vue";
import { extractI18nValue, getDefaultValues, Box } from "lkt-vue-kernel";
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
  props: /* @__PURE__ */ mergeDefaults({
    title: {},
    iconAtEnd: { type: Boolean },
    style: {},
    class: {},
    icon: {}
  }, getDefaultValues(Box)),
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const classes = computed(() => {
      let r = [];
      if (props.class) r.push(props.class);
      return r.join(" ");
    }), computedTitle = computed(() => {
      return extractI18nValue(props.title);
    });
    return (_ctx, _cache) => {
      const _component_lkt_icon = resolveComponent("lkt-icon");
      return openBlock(), createElementBlock("section", {
        class: normalizeClass(["lkt-box", classes.value]),
        style: normalizeStyle(_ctx.style)
      }, [
        computedTitle.value.length > 0 || unref(slots).header ? (openBlock(), createElementBlock("header", _hoisted_1, [
          createElementVNode("div", _hoisted_2, [
            typeof _ctx.icon === "object" && !_ctx.iconAtEnd ? (openBlock(), createBlock(_component_lkt_icon, normalizeProps(mergeProps({ key: 0 }, _ctx.icon)), null, 16)) : _ctx.icon && !_ctx.iconAtEnd ? (openBlock(), createElementBlock("i", {
              key: 1,
              class: normalizeClass(_ctx.icon)
            }, null, 2)) : createCommentVNode("", true),
            unref(slots).header ? renderSlot(_ctx.$slots, "header", { key: 2 }) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [
              createTextVNode(toDisplayString(computedTitle.value), 1)
            ], 64)),
            typeof _ctx.icon === "object" && _ctx.iconAtEnd ? (openBlock(), createBlock(_component_lkt_icon, normalizeProps(mergeProps({ key: 4 }, _ctx.icon)), null, 16)) : _ctx.icon && _ctx.iconAtEnd ? (openBlock(), createElementBlock("i", {
              key: 5,
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
    if (app.component("lkt-box") === void 0) app.component("lkt-box", _sfc_main);
  }
};
export {
  LktBox,
  LktBox as default
};
