import * as actions from "./actions";

import { IConfig, IContext, IOnInitialize } from "overmind";

import { createHooks } from "overmind-vue/vue3";
import { state } from "./state";

export const config = {
  state,
  actions,
};

// Due to circular typing we have to define an
// explicit typing of state, actions and effects since
// TS 3.9
export type Config = IConfig<{
  state: typeof config.state;
  actions: typeof config.actions;
  // effects: typeof config.effects;
}>;

export type OnInitialize = IOnInitialize<Config>;

export type Context = IContext<Config>;

// Used with derived
export type RootState = Context["state"];

export const useOvermind = createHooks<Config>();
