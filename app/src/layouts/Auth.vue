<template>
  <div>
    <main>
      <AuthNavbar />
      <slot />
    </main>
  </div>
</template>

<script setup>
import AuthNavbar from "@/components/AuthNavbar.vue";
</script>
