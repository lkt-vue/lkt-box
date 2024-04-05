import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LktBox",
  props: {
    palette: { default: "" },
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
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: normalizeClass(classes.value),
        style: normalizeStyle(_ctx.style)
      }, [
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
