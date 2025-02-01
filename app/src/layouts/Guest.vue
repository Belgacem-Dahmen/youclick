<template>
  <div>
    <main>
      <GlobalLoader v-if="loading" />
      <slot />
    </main>
  </div>
</template>
<script setup>
import { ref } from "vue";

const loading = ref(false);
</script>
