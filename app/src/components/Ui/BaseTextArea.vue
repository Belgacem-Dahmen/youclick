<!-- BaseTextarea.vue -->
<template>
    <div>
      <label :for="id" class="block text-sm/6 font-medium text-gray-900">{{ label }}</label>
      <div class="mt-2">
        <textarea :name="name" :id="id" :rows="rows" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
      </div>
      <p class="mt-3 text-sm/6 text-gray-600">{{ description }}</p>
    </div>
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
  