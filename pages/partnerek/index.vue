<script setup>
const partners = ref([
  { name: 'dr. Mohácsy Lénárd', address: '9022 Győr, Móricz Zs. rkp. 2/15.', image: 'mohacsy_lenard.webp'},
  { name: 'dr. Nagy Domokos', address: '9021 Győr, Szent István út 10.', image: 'nagy_domokos.webp'},
  { name: 'dr. Ferenczi Milán', address: '1051 Budapest, Hercegprímás u. 17.', image: 'ferenczi_milan.webp'},
  { name: 'dr. Nagy Géza', address: '1139 Budapest, Petneházy u. 26. V/8.', image: 'nagy_geza.webp'},
]);
</script>

<template>
  <section class="pt-8 pb-16">
    <h1 class="">Partnereim</h1>
    <Partners>
      <PartnersItem 
        v-for="partner in partners" 
        :key="partner.name"
        :name="partner.name"
        :address="partner.address"
        :image="partner.image"
      />
    </Partners>
  </section>
</template>
