<script setup>
defineProps(['logo']);
</script>

<template>
  <NuxtLink to="/">
    <span
      class="grid w-10 h-10 text-xs text-gray-600 bg-gray-100 shadow-sm sm:w-12 sm:h-12 place-content-center"
    >
      <NuxtImg
        class="p-1"
        src="../../logo.png"
        alt="dr. Gyurkovics Bence brand-logó"
      />
    </span>
  </NuxtLink>
</template>
