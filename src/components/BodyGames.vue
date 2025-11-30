<template>
  <section class="games-page">
    <div class="hero-section">
      <Hero :heroIcon="heroIcon" />
      <h1 class="hero-title text-gradient">We make the most incredible little worlds!</h1>
      <p class="hero-subtitle">Explore our collection of amazing games</p>
    </div>

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

<style lang="scss" scoped>
@use "@/styles/design-system.scss" as *;

.games-page {
  min-height: 100vh;
  padding-bottom: $space-16;
}

.hero-section {
  text-align: center;
  padding: $space-12 $space-4 $space-8;
  margin-bottom: $space-8;
}

.hero-title {
  font-size: $text-5xl;
  font-weight: $font-black;
  line-height: $leading-tight;
  margin-bottom: $space-4;
  animation: fadeInDown 0.8s ease-out;

  @media (max-width: $breakpoint-md) {
    font-size: $text-4xl;
  }

  @media (max-width: $breakpoint-sm) {
    font-size: $text-3xl;
  }
}

.hero-subtitle {
  font-size: $text-xl;
  color: $text-secondary;
  font-weight: $font-medium;
  animation: fadeInUp 0.8s ease-out 0.2s both;

  @media (max-width: $breakpoint-sm) {
    font-size: $text-lg;
  }
}
</style>