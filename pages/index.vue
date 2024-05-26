<script setup>
const bgImage = 'hero-lg.webp';
const date = new Date();

const formattedDate = computed(() => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleDateString('hu-HU', options);
});

// console.log(formattedDate.value);
</script>

<template>
  <div class="flex flex-col space-y-10">
    <!-- <div class="absolute -z-10">
      <img :src="useAsset(`images/${bgImage}`)" alt="" />
    </div> -->
    <div class="flex flex-col">
      <span
        class="mb-6 text-lg font-bold tracking-wide uppercase text-warning-100"
        >Üdvözlöm az oldalamon!</span
      >
      <h1>LL.M. dr. Gyurkovics Bence</h1>
      <span
        class="my-6 text-sm font-normal tracking-widest uppercase lg:text-base text-warning-100"
        >&mdash; munkajogi szakjogász</span
      >
    </div>

    <p>
      Alapelvem a jogviták ügyfélközpontú, a megbízók érdekeit mindenkor szem
      előtt tartó megközelítése. Vallom, hogy a jogi segítség időben történő
      igénybevételével a jogviták nagy része megelőzhető, és elkerülhető a
      hosszadalmas peres eljárás.
    </p>
    <!-- <img class="" :src="useAsset(`images/${bgImage}`)" alt="" /> -->
  </div>
</template>
