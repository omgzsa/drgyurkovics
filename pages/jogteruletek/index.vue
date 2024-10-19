<script setup>
const fields = ref([
  {
    id: 1,
    name: 'Polgári jog',
    icon: 'fa-solid:users',
    content:
      'Jogi tevékenységem felöleli a polgári jog területének csaknem teljes spektrumát, ideértve a peres képviselet ellátásán túlmenően, az ingatlannal kapcsolatos jogügyleteket és követeléskezelést.',
  },
  {
    id: 2,
    name: 'Társasági jog',
    icon: 'fa:book',
    content:
      'Teljeskörű szolgáltatás a társasági jog területén, szükség esetén szakavatott könyvvizsgálók, adótanácsadók segítségével. Vállalom társaságok alapítását, cégbíróság előtti változásbejegyzési eljárásban való képviseletet, követeléskezelést.',
  },
  {
    id: 3,
    name: 'Büntető jog',
    icon: 'fa-solid:gavel',
    content:
      'Büntetőeljárásban számos ügyfelem vonatkozásában láttam el eredményesen a védelmet. Fontos, hogy a védelem akkor lehet eredményes, ha a terhelt már az eljárás kezdeti szakaszában, felkészült és büntetőügyekben jártas védő közreműködését veszi igénybe.',
  },
  {
    id: 4,
    name: 'Munkajog',
    icon: 'fa-solid:briefcase',
    content:
      'Vállalom, mind munkáltatói, mind munkavállalói oldalon a jogi képviselet ellátását. Ennek keretében vállalom munkaszerződések, kártérítés ügyek, peres képviselet, kollektív szerződések elkészítését.',
  },
  {
    id: 5,
    name: 'Közigazgatási jog',
    icon: 'fa-solid:university',
    content:
      'Nagy tapasztalatra tettem szert a közigazgatási határozatok bírósági felülvizsgálata körében. (gyám- és adóhatósági határozatok felülvizsgálata, nyugdíjjal kapcsolatos jogviták).',
  },
]);
</script>

<template>
  <div class="space-y-6">
    <h1>Szakterületeim</h1>
    <FieldsItem
      v-for="field in fields"
      :key="field.id"
      :title="field.name"
      :icon="field.icon"
      :content="field.content"
    />
  </div>
</template>
