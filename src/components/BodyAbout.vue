<template>
  <section class="about-page">
    <div class="hero-section">
      <Hero :heroIcon="heroIcon" />
      <h1 class="hero-title text-gradient">We make incredible games!</h1>
      <p class="hero-subtitle">Passionate game developers from Peru 🇵🇪</p>
    </div>

    <div class="content-section">
      <div class="about-card glass-card">
        <h2 class="section-title">About Us</h2>
        <p class="about-text">
          We are FatCat Game Studio, a Peruvian Game Studio that loves science fiction, art, 
          videogames and almost every type of hobby that could make our mind blow.
        </p>
        <p class="about-text">
          Currently working on mobile games with passion and dedication to create fun experiences 
          for players around the world.
        </p>
      </div>

      <div v-if="false" class="team-section">
        <h2 class="section-title text-gradient">Our Staff!</h2>
        <TeamCardList />
      </div>
    </div>
  </section>
</template>

<script>
import TeamCardList from "@/components/Lists/TeamCardList.vue";
import Hero from "@/components/Hero.vue";

export default {
  components: {
    TeamCardList,
    Hero
  },
  data() {
    return {
      heroIcon: {
        id: 0,
        icon: "FatcatGameStudio.png",
        description: "FatCat Game Studio logo"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@use "@/styles/design-system.scss" as *;

.about-page {
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

.content-section {
  max-width: $container-lg;
  margin: 0 auto;
  padding: 0 $space-6;

  @media (max-width: $breakpoint-md) {
    padding: 0 $space-4;
  }
}

.about-card {
  padding: $space-10 $space-8;
  margin-bottom: $space-12;
  animation: fadeInUp 0.6s ease-out 0.4s both;

  @media (max-width: $breakpoint-sm) {
    padding: $space-6 $space-4;
  }
}

.section-title {
  font-size: $text-3xl;
  font-weight: $font-bold;
  color: $text-primary;
  margin-bottom: $space-6;
  text-align: center;

  @media (max-width: $breakpoint-md) {
    font-size: $text-2xl;
  }
}

.about-text {
  font-size: $text-lg;
  color: $text-secondary;
  line-height: $leading-relaxed;
  margin-bottom: $space-4;
  text-align: left;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: $breakpoint-sm) {
    font-size: $text-base;
  }
}

.team-section {
  margin-top: $space-12;
  animation: fadeInUp 0.6s ease-out 0.6s both;
}
</style>