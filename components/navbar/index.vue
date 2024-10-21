<script setup>
const logo = ref('logo.png');

const route = useRoute();

const navItems = ref([
  {
    name: 'Kezdőlap',
    icon: 'fa:home',
    path: '/',
  },
  {
    name: 'Rólam',
    icon: 'fa-solid:book-reader',
    path: '/rolam',
  },
  {
    name: 'Jogterület',
    icon: 'fa:asterisk',
    path: '/jogteruletek',
  },
  {
    name: 'Partnerek',
    icon: 'fa:paragraph',
    path: '/partnerek',
  },
  {
    name: 'Média',
    icon: 'fa:film',
    path: '/media',
  },
  {
    name: 'Kapcsolat',
    icon: 'fa:envelope',
    path: '/contact',
  },
]);
</script>

<template>
  <nav class="pb-4 md:pb-0 md:flex md:h-screen">
    <div class="flex flex-col items-center justify-between gap-4">
      <div class="inline-flex items-center justify-center p-2 mt-4 md:mt-0">
        <NavbarLogo :logo="logo" />
      </div>

      <div
        class="flex items-center gap-x-5 xs:gap-x-6 md:flex-col md:gap-x-0 md:gap-y-4 xl:gap-y-6"
      >
        <NavbarItems
          v-for="item in navItems"
          :key="item.name"
          :name="item.name"
          :icon="item.icon"
          :path="item.path"
          :is-active="route.fullPath === item.path"
        />
      </div>

      <div class="inline-flex items-center justify-center" />
    </div>
  </nav>
</template>
