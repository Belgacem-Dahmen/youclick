<!-- BaseTextarea.vue -->
<template>
    
  </template>
  
  <script setup>
  defineProps({
    label: String,
    id: String,
    name: String,
    rows: { type: Number, default: 3 },
    description: String
  });
  </script>
  