<!-- MainForm.vue -->
<template>
  <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    <div class="sm:col-span-4">
      <BaseInput
        label="Username"
        id="username"
        name="username"
        placeholder="janesmith"
        prefix="workcation.com/"
      />
    </div>

    <div class="col-span-full">
      <BaseTextarea
        label="About"
        id="about"
        name="about"
        description="Write a few sentences about yourself."
      />
    </div>

    <div class="col-span-full">
      <ProfilePhoto>
        <template #icon>
          <UserCircleIcon class="size-12 text-gray-300" aria-hidden="true" />
        </template>
      </ProfilePhoto>
    </div>

    <div class="col-span-full">
      <BaseFileUpload
        label="Cover photo"
        id="file-upload"
        name="file-upload"
        fileTypes="PNG, JPG, GIF up to 10MB"
      >
        <template #icon>
          <PhotoIcon class="mx-auto size-12 text-gray-300" aria-hidden="true" />
        </template>
      </BaseFileUpload>
    </div>
  </div>
</template>

<script setup>
import BaseHeader from "@/components/ui/BaseHeader.vue";
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseTextarea from "@/components/ui/BaseTextarea.vue";
import BaseFileUpload from "@/components/ui/BaseFileUpload.vue";
import MainForm from "@/components/ui/MainForm.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
</script>
