<template>
  <BaseHeader header="Profile" />
  <GlobalLoader v-if="loading" />
  <form @submit.prevent="handleUpdate" class="m-6 p-10">
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <p class="mt-1 text-sm/6 text-gray-600">
          This information will be displayed publicly so be careful what you
          share.
        </p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-4">
            <div class="sm:col-span-3">
              <label
                for="first-name"
                class="block text-sm/6 font-medium text-gray-900"
                >Username</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="username"
                  id="username"
                  v-model="username"
                  autocomplete="given-name"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          </div>

          <div class="col-span-full">
            <div>
              <label
                :for="about"
                class="block text-sm/6 font-medium text-gray-900"
              >
                About</label
              >
              <div class="mt-2">
                <textarea
                  name="about"
                  v-model="about"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6"
                ></textarea>
              </div>
              <p class="mt-3 text-sm/6 text-gray-600"></p>
            </div>
          </div>

          <div class="col-span-full">
            <ProfilePhoto>
              <template #icon>
                <UserCircleIcon
                  class="size-12 text-gray-300"
                  aria-hidden="true"
                />
              </template>
            </ProfilePhoto>
          </div>

          <div class="col-span-full">
            <BaseFileUpload
              label="Cover photo"
              id="file-upload"
              name="file-upload"
              fileTypes="PNG, JPG, GIF up to 10MB"
              @change="uploadFile"
            >
              <template #icon>
                <PhotoIcon
                  class="mx-auto size-12 text-gray-300"
                  aria-hidden="true"
                />
              </template>
            </BaseFileUpload>
          </div>
        </div>
      </div>

      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base/7 font-semibold text-gray-900">
          Personal Information
        </h2>
        <p class="mt-1 text-sm/6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label
              for="first-name"
              class="block text-sm/6 font-medium text-gray-900"
              >First name</label
            >
            <div class="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                v-model="firstname"
                autocomplete="given-name"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label
              for="last-name"
              class="block text-sm/6 font-medium text-gray-900"
              >Last name</label
            >
            <div class="mt-2">
              <input
                type="text"
                name="last-name"
                v-model="lastname"
                id="last-name"
                autocomplete="family-name"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="email" class="block text-sm/6 font-medium text-gray-900"
              >Email address</label
            >
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                v-model="profileStore.profile.email"
                disabled
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label
              for="country"
              class="block text-sm/6 font-medium text-gray-900"
              >Country</label
            >
            <div class="mt-2 grid grid-cols-1">
              <select
                id="country"
                name="country"
                autocomplete="country-name"
                v-model="country"
                class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
              <ChevronDownIcon
                class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                aria-hidden="true"
              />
            </div>
          </div>

          <div class="col-span-full">
            <label
              for="street-address"
              class="block text-sm/6 font-medium text-gray-900"
              >Street address</label
            >
            <div class="mt-2">
              <input
                type="text"
                name="street-address"
                id="street-address"
                v-model="address"
                autocomplete="street-address"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div class="sm:col-span-2 sm:col-start-1">
            <label for="city" class="block text-sm/6 font-medium text-gray-900"
              >City</label
            >
            <div class="mt-2">
              <input
                type="text"
                name="city"
                v-model="city"
                id="city"
                autocomplete="address-level2"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label
              for="region"
              class="block text-sm/6 font-medium text-gray-900"
              >State / Province</label
            >
            <div class="mt-2">
              <input
                type="text"
                name="region"
                id="region"
                v-model="state"
                autocomplete="address-level1"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label
              for="postal-code"
              class="block text-sm/6 font-medium text-gray-900"
              >ZIP / Postal code</label
            >
            <div class="mt-2">
              <input
                type="text"
                name="postal-code"
                id="postal-code"
                v-model="zipcode"
                autocomplete="postal-code"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base/7 font-semibold text-gray-900">Notifications</h2>
        <p class="mt-1 text-sm/6 text-gray-600">
          We'll always let you know about important changes, but you pick what
          else you want to hear about.
        </p>

        <div class="mt-10 space-y-10">
          <fieldset>
            <legend class="text-sm/6 font-semibold text-gray-900">
              By email
            </legend>
            <div class="mt-6 space-y-6">
              <div class="flex gap-3">
                <div class="flex h-6 shrink-0 items-center">
                  <div class="group grid size-4 grid-cols-1">
                    <input
                      id="comments"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      checked=""
                      class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                    />
                    <svg
                      class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        class="opacity-0 group-has-checked:opacity-100"
                        d="M3 8L6 11L11 3.5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        class="opacity-0 group-has-indeterminate:opacity-100"
                        d="M3 7H11"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div class="text-sm/6">
                  <label for="comments" class="font-medium text-gray-900"
                    >Comments</label
                  >
                  <p id="comments-description" class="text-gray-500">
                    Get notified when someones posts a comment on a posting.
                  </p>
                </div>
              </div>
              <div class="flex gap-3">
                <div class="flex h-6 shrink-0 items-center">
                  <div class="group grid size-4 grid-cols-1">
                    <input
                      id="candidates"
                      aria-describedby="candidates-description"
                      name="candidates"
                      type="checkbox"
                      class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                    />
                    <svg
                      class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        class="opacity-0 group-has-checked:opacity-100"
                        d="M3 8L6 11L11 3.5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        class="opacity-0 group-has-indeterminate:opacity-100"
                        d="M3 7H11"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div class="text-sm/6">
                  <label for="candidates" class="font-medium text-gray-900"
                    >Candidates</label
                  >
                  <p id="candidates-description" class="text-gray-500">
                    Get notified when a candidate applies for a job.
                  </p>
                </div>
              </div>
              <div class="flex gap-3">
                <div class="flex h-6 shrink-0 items-center">
                  <div class="group grid size-4 grid-cols-1">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                    />
                    <svg
                      class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        class="opacity-0 group-has-checked:opacity-100"
                        d="M3 8L6 11L11 3.5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        class="opacity-0 group-has-indeterminate:opacity-100"
                        d="M3 7H11"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div class="text-sm/6">
                  <label for="offers" class="font-medium text-gray-900"
                    >Offers</label
                  >
                  <p id="offers-description" class="text-gray-500">
                    Get notified when a candidate accepts or rejects an offer.
                  </p>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend class="text-sm/6 font-semibold text-gray-900">
              Push notifications
            </legend>
            <p class="mt-1 text-sm/6 text-gray-600">
              These are delivered via SMS to your mobile phone.
            </p>
            <div class="mt-6 space-y-6">
              <div class="flex items-center gap-x-3">
                <input
                  id="push-everything"
                  name="push-notifications"
                  type="radio"
                  checked=""
                  class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                />
                <label
                  for="push-everything"
                  class="block text-sm/6 font-medium text-gray-900"
                  >Everything</label
                >
              </div>
              <div class="flex items-center gap-x-3">
                <input
                  id="push-email"
                  name="push-notifications"
                  type="radio"
                  class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                />
                <label
                  for="push-email"
                  class="block text-sm/6 font-medium text-gray-900"
                  >Same as email</label
                >
              </div>
              <div class="flex items-center gap-x-3">
                <input
                  id="push-nothing"
                  name="push-notifications"
                  type="radio"
                  class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                />
                <label
                  for="push-nothing"
                  class="block text-sm/6 font-medium text-gray-900"
                  >No push notifications</label
                >
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" class="text-sm/6 font-semibold text-gray-900">
        Cancel
      </button>
      <button
        type="submit"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
    </div>
  </form>
</template>

<script setup>
import { PhotoIcon, UserCircleIcon } from "@heroicons/vue/24/solid";
import { ChevronDownIcon } from "@heroicons/vue/16/solid";
import BaseHeader from "@/components/ui/BaseHeader.vue";
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseTextarea from "@/components/ui/BaseTextarea.vue";
import BaseFileUpload from "@/components/ui/BaseFileUpload.vue";
import MainForm from "@/components/ui/MainForm.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import ProfilePhoto from "@/components/ui/ProfilePhoto.vue";

import { useProfileStore } from "@/stores/profileStore";
import { onMounted, ref } from "vue";

// Access the profile store
const profileStore = useProfileStore();
const loading = ref(true);

// Fetch the profile data when the component is mounted
onMounted(async () => {
  await profileStore.getProfile();
  const profile = profileStore.profile; // adjust this depending on your store structure
  // Set the fetched data to the refs
  username.value = profile.username;
  about.value = profile.about;
  firstname.value = profile.firstname;
  lastname.value = profile.lastname;
  country.value = profile.country;
  address.value = profile.address;
  city.value = profile.city;
  state.value = profile.state;
  zipcode.value = profile.zipcode;

  loading.value = false;
});

const username = ref("");
const about = ref("");
const email = ref("");
const firstname = ref("");
const lastname = ref("");
const country = ref("");
const address = ref("");
const city = ref("");
const state = ref("");
const zipcode = ref("");
const selectedFile = ref("");
const uploadFile = (e) => {
  selectedFile.value = e.target.files;

};
const handleUpdate = async () => {
  const formData = {
    username: username.value,
    about: about.value,
    firstname: firstname.value,
    lastname: lastname.value,
    country: country.value,
    address: address.value,
    city: city.value,
    state: state.value,
    zipcode: zipcode.value,
  };

  try {
    loading.value = true;
    await profileStore.updateProfile(formData);
    loading.value = false;
  } catch (error) {
    console.error("update failed:", error);
  }
};
</script>
