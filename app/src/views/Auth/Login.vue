<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">
        Login
      </h2>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-600"
            >Email</label
          >
          <input
            id="email"
            type="email"
            v-model="email"
            class="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-600"
            >Password</label
          >
          <input
            id="password"
            type="password"
            v-model="password"
            class="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>

        <div class="flex justify-center">
          <button
            type="submit"
            class="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </div>
      </form>

      <p class="mt-4 text-center text-sm text-gray-600">
        Don't have an account?
        <a href="/register" class="text-blue-600 hover:text-blue-700"
          >Register</a
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "vue-router";
const router = useRouter()
const email = ref("");
const password = ref("");
const authStore = useAuthStore();

const handleLogin = async () => {
  const formData = {
    email: email.value,
    password: password.value,
  };

  try {
    await authStore.login(formData);
    router.push("/dashboard");
  } catch (error) {
    console.error("Login failed:", error);
    // You can show an error message to the user here
  }
};
</script>

<style scoped>
/* You can add additional custom styles here if needed */
</style>
