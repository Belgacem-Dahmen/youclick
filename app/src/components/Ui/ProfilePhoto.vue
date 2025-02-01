<!-- ProfilePhoto.vue -->
<template>
  <div>
    <label for="photo" class="block text-sm/6 font-medium text-gray-900"
      >Photo</label
    >
    <div class="mt-2 flex items-center gap-x-3">
      <slot name="icon"></slot>
      <BaseButton>Change</BaseButton>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "@/components/ui/BaseButton.vue";
</script>
