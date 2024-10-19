<script setup>
const bgImage = 'drgybence.jpg';
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
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col pt-8">
      <span
        class="mb-6 text-lg font-bold tracking-wide uppercase text-warning-100"
        >Üdvözlöm az oldalamon!</span
      >
      <h1 class="mb-6">LL.M. dr. Gyurkovics Bence</h1>
      <span
        class="mb-6 text-sm font-normal tracking-widest uppercase lg:text-base text-warning-100"
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
