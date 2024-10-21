<script setup>
const bgImage = 'drgybence.jpg';
</script>

<template>
  <div class="pt-8 pb-16 space-y-6">
    <NuxtImg
      src="../../drgybence.jpg"
      alt="Dr. Gyurkovics Bence"
      class="z-0 block object-cover object-center w-full mx-auto mb-6 rounded-md shadow zoom h-[450px] xl:hidden"
    />
    <h1>Rólam</h1>
    <div class="flex gap-6">
      <p>
        2011-ben végeztem Győrött, a Széchenyi István Egyetem Deák Ferenc Állam-
        és Jogtudományi Karán jogász szakon. Az egyetem elvégzését követően
        ügyvédjelöltként tevékenykedtem 2013. augusztus 31. napjáig. Ezen
        időszak alatt megismerkedtem a klasszikus ügyvédi feladatok
        mindegyikével (okiratszerkesztés, cégeljárás, követeléskezelés, civil
        szervezetekkel kapcsolatos eljárások), és a peres eljárásokban is nagy
        gyakorlatra tettem szert, mind a polgári, mind a büntető, mind pedig a
        közigazgatási jog területén.
      </p>
      <NuxtImg
        :src="`../../${bgImage}`"
        alt="Dr. Gyurkovics Bence"
        class="z-0 hidden object-contain w-64 h-64 mx-auto mb-6 rounded-md shadow xl:block"
      />
    </div>
    <p>
      2013. szeptember 1. napjától 2016. július 31. napjáig a Független
      Szakszervezetek Demokratikus Ligájánál (LIGA Szakszervezetek) dolgoztam
      kezdetben, mint megyei érdekvédelmi tanácsadó, majd nyugat-dunántúli
      régióvezető. Ezen időszak alatt csak és kizárólag munkajoggal, illetve az
      ehhez kapcsolódó területekkel (társasdalombiztosítási jog, civil
      szervezetek joga) foglalkoztam. 2016. augusztus 1. napjától indítottam
      ügyvédi praxisomat, melynek döntő részét a munkajog teszi ki, de
      foglalkozom büntetőjoggal, illetve polgári joggal egyaránt. 2015.
      októberében jeles eredménnyel szakvizsgáztam. Irodám Győrött, a belváros
      szívében, a Mosoni-Duna partján a 9022 Győr, Móricz Zsigmond rakpart 4.
      sz. alatt található, ahol imponzáns környezetben fogadom a hozzám
      bizalommal forduló ügyfeleket.
    </p>
    <p>
      2018-ban kitűnő eredménnyel elvégeztem a Pécsi Tudományegyetem Állam- és
      Jogtudományi Karának munkajogi szakjogász posztgraduális képzését, mely a
      Master of Law (LLM.) cím viselésére jogosít. Ügyvédi tevékenységem nem
      csak Győrhöz, és Győr-Moson-Sopron megyére koncentrál, az ország egész
      területén ellátok jogi képviseletet szükség esetén a maximálisan
      felkészült partner ügyvédeket bevonva.
    </p>
  </div>
</template>

<style>
.zoom {
  zoom: 90%;
}

@media (min-width: 640px) {
  .zoom {
    zoom: 120%;
  }
}
</style>
