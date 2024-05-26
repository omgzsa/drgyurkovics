<script setup>
defineProps({
  title: String,
  icon: String,
  content: String,
});
</script>

<template>
  <div class="space-y-2">
    <Icon class="w-6 h-6 text-warning-100" :name="icon" />
    <h4>
      {{ title }}
    </h4>
    <p>{{ content }}</p>
  </div>
</template>
