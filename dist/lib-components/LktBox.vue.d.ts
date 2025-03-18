type __VLS_Props = {
    title: string;
    icon: string;
    iconAtEnd: boolean;
    style: string;
    class: string;
};
declare const slots: Readonly<{
    [name: string]: import("vue").Slot<any> | undefined;
}>;
declare const classes: import("vue").ComputedRef<string>, computedTitle: import("vue").ComputedRef<any>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_1: {}, __VLS_3: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    header?: (props: typeof __VLS_1) => any;
} & {
    default?: (props: typeof __VLS_3) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<__VLS_Props, {
    slots: typeof slots;
    classes: typeof classes;
    computedTitle: typeof computedTitle;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    style: string;
    title: string;
    class: string;
    icon: string;
    iconAtEnd: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    style: string;
    title: string;
    class: string;
    icon: string;
    iconAtEnd: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
