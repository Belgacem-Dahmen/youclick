<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import GuestLayout from "@/layouts/Guest.vue";
import AuthLayout from "@/layouts/Auth.vue";

const route = useRoute();

const layoutComponent = computed(() => {
  return route.meta.layout === "auth" ? AuthLayout : GuestLayout;
});
</script>

