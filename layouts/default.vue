<script setup></script>

<template>
  <div
    class="grid max-w-6xl min-h-screen grid-rows-6 mx-auto md:grid-cols-12 md:grid-rows-1"
  >
    <!-- navbar -->
    <div class="w-full row-span-1">
      <Navbar />
    </div>
    <!-- nuxt-page-slot -->
    <div
      class="grid row-span-5 site-padding md:col-start-3 md:col-end-11 place-content-start"
    >
      <slot />
    </div>

    <div class="mx-auto md:col-start-12 md:col-end-13">
      <Sidebar />
    </div>

    <!-- footer -->
    <div class="px-4 md:px-12 md:col-start-1 md:col-end-13">
      <Footer />
    </div>
  </div>
</template>
