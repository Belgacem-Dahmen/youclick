<!-- BaseFileUpload.vue -->
<template>
    <div>
      <label :for="id" class="block text-sm/6 font-medium text-gray-900">{{ label }}</label>
      <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
        <div class="text-center">
          <slot name="icon"></slot>
          <div class="mt-4 flex text-sm/6 text-gray-600">
            <label :for="id" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 hover:text-indigo-500">
              <span>Upload a file</span>
              <input :id="id" :name="name" type="file" class="sr-only" />
            </label>
            <p class="pl-1">or drag and drop</p>
          </div>
          <p class="text-xs/5 text-gray-600">{{ fileTypes }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    label: String,
    id: String,
    name: String,
    fileTypes: String
  });
  </script>