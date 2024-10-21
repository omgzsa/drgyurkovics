<script setup>
const date = new Date();

const path1 = ref(null)
const path2 = ref(null)
const path3 = ref(null)
const path4 = ref(null)
const path5 = ref(null)

onMounted(() => {
  // Set the actual path lengths for each path
  const paths = [path1.value, path2.value, path3.value, path4.value, path5.value]
  paths.forEach(path => {
    if (path) {
      const length = path.getTotalLength()
      path.style.strokeDasharray = length
      path.style.strokeDashoffset = length
    }
  })
})

const formattedDate = computed(() => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleDateString('hu-HU', options);
});
</script>

<template>
  <div class="relative z-0 pt-8 ">
    <!-- <NuxtImg 
      :src="`../../${bgImage}`" 
      alt="Dr. Gyurkovics Bence" 
      class="z-0 object-contain w-64 h-64 mb-6 rounded-full"
    /> -->
    <div class="z-0 mb-6 space-y-4">
      <span
        class="text-lg font-bold tracking-wide uppercase text-warning-100"
        >Üdvözlöm az oldalamon!</span
      >
      <h1 class="pb-4">LL.M. dr. Gyurkovics Bence</h1>
      <span
        class="text-sm font-normal tracking-widest uppercase lg:text-base text-warning-100"
        >&mdash; munkajogi szakjogász</span
      >
    </div>

    <p class="z-0">
      Alapelvem a jogviták ügyfélközpontú, a megbízók érdekeit mindenkor szem
      előtt tartó megközelítése. Vallom, hogy a jogi segítség időben történő
      igénybevételével a jogviták nagy része megelőzhető, és elkerülhető a
      hosszadalmas peres eljárás.
    </p>
    
    <TheIustitia />
  </div>
</template>
