var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
const __default__ = {
  name: "LktBox",
  inheritAttrs: false,
  customOptions: {}
};
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: {
    palette: String
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      let r = ["lkt-box"];
      if (props.palette) {
        r.push(`lkt-box--${props.palette}`);
      }
      return r.join(" ");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: normalizeClass(classes.value)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
}));
const LktBox = {
  install: (app, options) => {
    app.component("lkt-box", _sfc_main);
  }
};
export {
  LktBox as default
};
