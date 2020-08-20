<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    {{count}}
    <button @click="increment">+</button>
    <hr />
    {{amount}}
    <button @click="incrementPayload">+</button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { defineComponent, computed } from "@vue/composition-api";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld
  },
  setup(props, { root }) {
    // const state = {
    //   count: computed(() => root.$store.state.count)
    // };
    const count = computed(() => root.$store.state.count);
    const amount = computed(() => root.$store.state.amount);
    
    function increment() {
      root.$store.commit("increment");
    }

    function incrementPayload() {
      root.$store.commit("incrementPayload", { amount: 100 });
    }

    return {
      // state,
      count,
      amount,
      increment,
      incrementPayload
    };
  }
});
</script>
