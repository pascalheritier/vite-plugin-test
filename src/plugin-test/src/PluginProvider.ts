import type { App } from "vue";
import { PluginableView } from "./components";
import { PluginableModel } from "./model/PluginableModel";

export default {
  install: (app: App) => {
    app.component("PluginableView", PluginableView);
  },
};

export { PluginableView };
export { PluginableModel };
