<script setup></script>

<template>
  <div class="md:flex md:h-screen">
    <div class="flex flex-col items-center justify-between gap-4">
      <div class="inline-flex items-center justify-center p-2 mt-4 md:mt-0">
        <div></div>
      </div>

      <div
        class="flex items-center space-x-8 md:flex-col md:space-x-0 md:space-y-2"
      >
        <Icon size="20" class="hidden shrink-0 md:flex" name="mdi:chevron-up" />
        <Icon size="20" class="hidden shrink-0 md:flex" name="mdi:chevron-down" />
        <Icon size="20" class="shrink-0 md:hidden" name="mdi:chevron-right" />
        <Icon size="20" class="shrink-0 md:hidden" name="mdi:chevron-left" />
      </div>

      <div class="inline-flex items-center justify-center" />
    </div>
  </div>
</template>
