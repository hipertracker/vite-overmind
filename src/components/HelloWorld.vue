<template>
  <h1 class="text-2xl font-bold">{{ msg }}</h1>

  <SimpleCounter />

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
      target="_blank"
      >Vetur</a
    >
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using
    <code>&lt;script setup&gt;</code>)
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p class="pt-2 pb-2">
    <a href="https://overmindjs.org/" target="_blank">Vite Docs</a>
    |
    <a href="https://overmindjs.org/" target="_blank"><b>Overmind</b> Docs</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useOvermind } from "../overmind";

import SimpleCounter from "./SimpleCounter.vue";

export default defineComponent({
  name: "HelloWorld",
  components: {
    SimpleCounter,
  },
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup() {
    const state = useOvermind.state();
    return { state };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
