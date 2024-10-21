<script lang="ts" setup>
const props = defineProps({
  name: String,
  address: String,
  image: String,
});
</script>

<template>
  <div class="space-y-1 overflow-hidden transition cursor-default group">
    <NuxtImg
      :src="`../../partners/${props.image}`"
      :alt="props.name"
      class="mb-3 transition-all group-hover:scale-105"
    />
    <div class="group-hover:translate-y-0.5 transition-all">
      <h3 class="text-[11px] font-semibold tracking-widest uppercase font-body">
        {{ props.name }}
      </h3>
      <p class="text-[11px] font-normal tracking-widest uppercase font-body">
        {{ props.address }}
      </p>
    </div>
  </div>
</template>
