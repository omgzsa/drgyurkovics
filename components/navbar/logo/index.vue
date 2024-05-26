<script setup>
defineProps(['logo']);
</script>

<template>
  <NuxtLink to="/">
    <span
      class="grid h-12 w-12 place-content-center bg-gray-100 text-xs text-gray-600 shadow-sm"
    >
      <img
        class="p-1"
        :src="useAsset(`images/logo/${logo}`)"
        alt="dr. Gyurkovics Bence brand-logó"
      />
    </span>
  </NuxtLink>
</template>
