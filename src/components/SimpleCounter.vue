<template>
  <div class="pt-3 pb-3">
    <DecBtn @click="actions.inc" />
    <span class="bg-gray-200 text-xl ml-3 mr-3">
      Counter: {{ state.counter }}
    </span>
    <IncBtn @click="actions.dec" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IncBtn from "./IncBtn.vue";
import DecBtn from "./DecBtn.vue";
import { useOvermind } from "../overmind";

export default defineComponent({
  name: "SimpleCounter",
  components: {
    IncBtn,
    DecBtn,
  },
  setup() {
    const state = useOvermind.state();
    const actions = useOvermind.actions();

    return { state, actions };
  },
});
</script>
