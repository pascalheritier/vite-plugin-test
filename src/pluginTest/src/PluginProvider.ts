import type { App } from "vue";
import { PluginableView } from "./components";

export default {
  install: (app: App) => {
    app.component("PluginableView", PluginableView);
  },
};

export { PluginableView };
