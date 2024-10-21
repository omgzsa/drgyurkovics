<script setup>
import { useTailwindConfig } from '~/composables/useTailwindConfig';
import { useMediaQuery } from '@vueuse/core'

const { defaultTransition } = useTailwindConfig();

const isLargeScreen = useMediaQuery('(min-width: 1024px)')

const iconSize = computed(() => (isLargeScreen.value ? 22 : 18));

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
  },
});
</script>

<template>
  <AppLink :to="`${path}`">
    <button
      class="relative flex justify-center p-1 rounded group hover:bg-gray-100 hover:text-secondary-100"
      :class="defaultTransition"
    >
      <Icon :size="iconSize" class="" :name="icon" />

      <span
        class="absolute start-full top-1/2 ps-2 -translate-y-1/2 rounded px-2 py-1.5 text-xs font-bold opacity-0 group-hover:opacity-100 hidden md:inline-block"
        :class="{ 'opacity-100': isActive }"
      >
        {{ name }}
      </span>
      <span
        class="absolute bottom-0 -m-4 translate-y-1/2 rounded p-1 text-[11px] font-bold opacity-0 group-hover:opacity-100 md:hidden inline-block"
        :class="{ 'opacity-100': isActive }"
      >
        {{ name }}
      </span>
    </button>
  </AppLink>
</template>
