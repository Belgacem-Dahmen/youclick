<!-- BaseInput.vue -->
<template>
  <div>
    <label :for="id" class="block text-sm/6 font-medium text-gray-900">{{
      label
    }}</label>
    <div class="mt-2">
      <div
        class="flex items-center rounded-md bg-white pl-3 outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-indigo-600"
      >
        <div
          v-if="prefix"
          class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"
        >
          {{ prefix }}
        </div>
        <input
          :type="type"
          :name="name"
          :id="id"
          :placeholder="placeholder"
          class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  id: String,
  name: String,
  type: { type: String, default: "text" },
  placeholder: String,
  prefix: String,
});

const emitValue = (event) => {
  emit("update:modelValue", event.target.value); // Assuming you're using `v-model` binding with modelValue
};
</script>
