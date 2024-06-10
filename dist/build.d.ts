declare const i: import("vue").DefineComponent<{
    palette: {
        default: string;
    };
    style: {
        default: string;
    };
    class: {
        default: string;
    };
}, (e: any, m: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    palette: {
        default: string;
    };
    style: {
        default: string;
    };
    class: {
        default: string;
    };
}>>, {
    style: string;
    class: string;
    palette: string;
}, {}>;
declare namespace k {
    function install(l: any, t: any): void;
}
export { i as LktBox, k as LktBoxPlugin };
