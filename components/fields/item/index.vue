<script setup>
defineProps({
  title: String,
  icon: String,
  content: String,
});
</script>

<template>
  <div class="space-y-4">
    <div class="flex gap-3">
      <Icon class="w-6 h-6 text-warning-100" :name="icon" />
      <h4 class="">
        {{ title }}
      </h4>
    </div>
    <p>{{ content }}</p>
  </div>
</template>
