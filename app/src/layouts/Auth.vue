<template>
  <div>
    <main>
      <AuthNavbar />
      <GlobalLoader v-if="loading" />
      <slot />
    </main>
  </div>
</template>

<script setup>
import AuthNavbar from "@/components/AuthNavbar.vue";
import { ref } from "vue";

const loading = ref(false);
</script>
