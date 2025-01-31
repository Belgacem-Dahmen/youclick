// stores/auth.js
import { defineStore } from "pinia";
import axios from "../config/axios";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const token = ref(localStorage.getItem("token") || null);

  const login = async (formData) => {
    try {
      const response = await axios.post("/auth/login", formData);
      const { token: newToken } = response.data;

      // Store token and user_roleid in localStorage
      localStorage.setItem("token", newToken);

      // Update state
      token.value = newToken;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = () => {
    // Clear token and user_roleid from localStorage
    localStorage.removeItem("token");

    // Reset state
    token.value = null;
  };

  const register = async (formData) => {
    try {
      const response = await axios.post("/auth/register", formData);
      const { token: newToken } = response.data;

      // Store token and user_roleid in localStorage
      localStorage.setItem("token", newToken);

      // Update state
      token.value = newToken;
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };

  return { token, login, logout, register };
});
