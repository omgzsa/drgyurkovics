<script setup>
defineProps(['logo']);
</script>

<template>
  <NuxtLink to="/">
    <span
      class="grid w-12 h-12 text-xs text-gray-600 bg-gray-100 shadow-sm place-content-center"
    >
      <NuxtImg
        class="p-1"
        :src="`../../${logo}`"
        alt="dr. Gyurkovics Bence brand-logó"
      />
    </span>
  </NuxtLink>
</template>
