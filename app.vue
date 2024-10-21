<script setup>
useHead({
  htmlAttrs: {
    lang: 'hu',
  },
  charset: 'utf-8',
  title: 'LL.M. dr. Gyurkovics Bence, ügyvéd',
  titleTemplate: (title) => (title !== 'LL.M. dr. Gyurkovics Bence, ügyvéd' ? `${title} · LL.M. dr. Gyurkovics Bence, ügyvéd` : title),
  // meta: [],
});
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
