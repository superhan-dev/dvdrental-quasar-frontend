<template>
  <q-page>
    <h1>Welcome to test world!!</h1>
  </q-page>
</template>

<script lang="ts">
import { onUnmounted, onMounted, defineComponent } from "vue";
import { useStore } from "src/store";

export default defineComponent({
  setup() {
    const $store = useStore();

    onMounted(() => {
      $store.dispatch("payment/getList");
      // console.log("test", $store);
    });

    onUnmounted(() => {
      $store.dispatch("payment/initState");
    });

    return {};
  },
});
</script>

<style scoped></style>
