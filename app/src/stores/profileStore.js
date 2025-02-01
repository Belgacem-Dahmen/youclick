import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import axios from "axios"; // You can replace this with your API service
import axiosInstance from "@/config/axios";

export const useProfileStore = defineStore("profile", () => {
  // Define the profile as a reactive object
  const profile = reactive({
    username: "",
    about: "",
    coverphoto: "",
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    user_id: ref(localStorage.getItem("user_id")),
  });

  // Action to fetch the profile
  const getProfile = async () => {
    try {
      const response = await axiosInstance.get(`/profile/${profile.user_id}`);
      const data = response.data;

      // Update the profile object with the fetched data
      Object.assign(profile, data.profile);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  // Action to update the profile
  const updateProfile = async (updatedProfile) => {
    try {
      const response = await axiosInstance.put(
        `/api/profile/${profile.user_id}`,
        updatedProfile
      );
      const data = response.data;
      // Update the profile object with the new data
      Object.assign(profile, data.profile);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return {
    profile,
    getProfile,
    updateProfile,
  };
});
