<template>
  <section class="body">
    <Hero :heroIcon="heroIcon" />
    <h2 class="titleTextAndMargin">We make the most incredible little worlds!</h2>

    <GameCardList />
  </section>
</template>

<script>
import GameCardList from "@/components/Lists/GameCardList.vue";
import Hero from "@/components/Hero.vue";

export default {
  components: {
    GameCardList,
    Hero
  },
  data() {
    return {
      heroIcon: {
        id: 0,
        icon: "FatcatGameStudio.png",
        description:"FatCat Game Studio logo"
      }
    };
  }
};
</script>