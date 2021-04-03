import "./shims";

import App from './App.vue'
import { config } from "./overmind";
import { createApp } from 'vue'
import { createOvermind } from "overmind";
import { withOvermind } from "overmind-vue/vue3";

const overmind = createOvermind(config);
createApp(withOvermind(overmind, App)).mount("#app");
