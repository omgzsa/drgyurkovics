<script setup></script>

<template>
  <div class="md:flex md:h-screen">
    <div class="flex flex-col items-center justify-between gap-4">
      <div class="inline-flex items-center justify-center mt-4 md:mt-0 p-2">
        <div></div>
      </div>

      <div
        class="flex md:flex-col items-center space-x-8 md:space-x-0 md:space-y-2"
      >
        <Icon size="20" class="shrink-0" name="mdi:chevron-up" />
        <Icon size="20" class="shrink-0" name="mdi:chevron-down" />
        <!-- <Icon size="20" class="shrink-0" name="mdi:chevron-left" />
        <Icon size="20" class="shrink-0" name="mdi:chevron-right" /> -->
      </div>

      <div class="inline-flex items-center justify-center" />
    </div>
  </div>
</template>
