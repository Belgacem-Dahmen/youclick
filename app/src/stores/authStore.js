// stores/auth.js
import { defineStore } from "pinia";
import axiosInstance from "../config/useAxios";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const token = ref(localStorage.getItem("token") || null);
  const user_id = ref(localStorage.getItem("user_id") || null);

  const login = async (formData) => {
    try {
      const response = await axiosInstance.post("/auth/login", formData);
      const { token: newToken, user_id: newUserId } = response.data;

      // Store token and user_id in localStorage
      localStorage.setItem("token", newToken);
      localStorage.setItem("user_id", newUserId);

      // Update state with the new token and user_id
      token.value = newToken;
      user_id.value = newUserId; // Assign newUserId to user_id state
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = () => {
    // Clear token and user_roleid from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");

    // Reset state
    token.value = null;
    user_id.value = null;
  };

  const register = async (formData) => {
    try {
      const response = await axiosInstance.post("/auth/register", formData);
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };

  return { token, login, logout, register };
});
