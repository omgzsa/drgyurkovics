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
    icon: 'fa:graduation-cap',
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
    path: '/partners',
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
  <nav class="md:flex md:h-screen">
    <div class="flex flex-col items-center justify-between gap-4">
      <div class="inline-flex items-center justify-center p-2 mt-4 md:mt-0">
        <NavbarLogo :logo="logo" />
      </div>

      <div
        class="flex items-center space-x-4 sm:space-x-6 md:flex-col md:space-x-0 md:space-y-4 xl:space-y-6"
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
