<script setup></script>

<template>
  <div
    class="relative grid max-w-6xl min-h-screen mx-auto grid-rows-auto md:grid-cols-12 md:grid-rows-1"
  >
    <!-- navbar -->
    <div class="w-full row-span-1">
      <Navbar />
    </div>

    <!-- nuxt-page-slot -->
    <div
      class="w-full row-span-5 site-padding md:col-start-3 md:col-end-11 place-content-start md:place-content-center my-auto overflow-y-auto mb-auto h-[calc(100vh-12rem)]"
    >
      <slot />
    </div>

    <!-- sidebar -->
    <div class="fixed bottom-0 left-0 mx-auto md:col-start-12 md:col-end-13 md:relative">
      <Sidebar />
    </div>

    <!-- footer -->
    <div class="sticky bottom-0 px-4 opacity-60 md:px-12 md:col-start-1 md:col-end-13">
      <Footer />
    </div>
  </div>
</template>
