import type { App } from "vue";
import { BaseView } from "./components";
import { BaseModel } from "./model/BaseModel";

export default {
  install: (app: App) => {
    app.component("BaseView", BaseView);
  },
};

export { BaseView };
export { BaseModel };
