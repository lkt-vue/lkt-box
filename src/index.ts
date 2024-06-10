import LktBox from "./lib-components/LktBox.vue";
import {App} from "vue";
import "../style.css";

export const LktBoxPlugin = {
    install: (app: App, options?: {}) => {
        app.component('lkt-box', LktBox);
    },
};

export {LktBox};