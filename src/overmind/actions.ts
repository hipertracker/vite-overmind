import { Context } from "../overmind";

export const inc = ({ state }: Context): void => {
  state.counter += 1;
};

export const dec = ({ state }: Context): void => {
  state.counter -= 1;
};
