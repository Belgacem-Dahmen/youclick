<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">
        Register
      </h2>
      <form @submit.prevent="handleRegister" class="space-y-4">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-600"
            >Username</label
          >
          <input
            id="username"
            type="text"
            v-model="username"
            class="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your username"
            required
          />
        </div>
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

        <div>
          <label
            for="confirmPassword"
            class="block text-sm font-medium text-gray-600"
            >Confirm Password</label
          >
          <input
            id="confirmPassword"
            type="password"
            v-model="confirmPassword"
            class="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Confirm your password"
            required
          />
        </div>

        <div class="flex justify-center">
          <button
            type="submit"
            class="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Register
          </button>
        </div>
      </form>

      <p class="mt-4 text-center text-sm text-gray-600">
        Already have an account?
        <a href="/login" class="text-blue-600 hover:text-blue-700">Login</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore"; // Assuming you have a Pinia store for authentication
import { useRouter } from "vue-router";

const email = ref("");
const username = ref("");
const password = ref("");
const confirmPassword = ref("");
const authStore = useAuthStore();
const router = useRouter();
const handleRegister = async () => {
  if (password.value !== confirmPassword.value) {
    console.error("Passwords do not match.");
    return;
  }

  const formData = {
    username: username.value,
    email: email.value,
    password: password.value,
  };

  try {
    await authStore.register(formData);
    console.log("Registered successfully");
    router.push("/login");
  } catch (error) {
    console.error("Registration failed:", error);
    // Optionally, show an error message to the user
  }
};
</script>

<style scoped>
/* You can add additional custom styles here if needed */
</style>
