import {default as box} from "./lib-components/LktBox.vue";
import {App} from "vue";

const LktBox = {
    install: (app: App, options?: {}) => {
        app.component('lkt-box', box);
    },
};

export default LktBox;