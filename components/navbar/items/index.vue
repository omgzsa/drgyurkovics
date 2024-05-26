<script setup>
import { useTailwindConfig } from '~/composables/useTailwindConfig';

const { defaultTransition } = useTailwindConfig();

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
  // activeRoute: {
  //   type: String,
  //   required: true,
  // },
  isActive: {
    type: Boolean,
  },
});

// const activeLinkClass = computed(() => {
//   return props.activeRoute === props.path ? 'opacity-100' : '';
// });
</script>

<template>
  <AppLink :to="`${path}`">
    <button
      class="group relative flex justify-center rounded px-2 py-1.5 hover:bg-gray-100 hover:text-secondary-100"
      :class="defaultTransition"
    >
      <Icon size="20" class="shrink-0" :name="icon" />

      <span
        class="absolute start-full top-1/2 ps-2 -translate-y-1/2 rounded px-2 py-1.5 text-xs font-bold opacity-0 group-hover:opacity-100 hidden md:inline-block"
        :class="{ 'opacity-100': isActive }"
      >
        <!-- <span
        class="absolute start-full top-1/2 ps-4 -translate-y-1/2 rounded px-2 py-1.5 text-xs font-bold opacity-0 group-hover:opacity-100 hidden md:inline-block"
        :class="activeLinkClass"
      > -->
        {{ name }}
      </span>
      <span
        class="absolute bottom-0 -m-4 translate-y-1/2 rounded px-2 py-1.5 text-xs font-bold opacity-0 group-hover:opacity-100 md:hidden inline-block"
      >
        {{ name }}
      </span>
    </button>
  </AppLink>
</template>
