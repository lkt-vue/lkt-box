import {default as libComponent} from "./lib-components/LktBox.vue";
import {App} from "vue";
import "../style.css";

export const LktBox = {
    install: (app: App, options?: {}) => {

        // Register plugin components
        if (app.component('lkt-box') === undefined)  app.component('lkt-box', libComponent);
    },
};

export default LktBox;