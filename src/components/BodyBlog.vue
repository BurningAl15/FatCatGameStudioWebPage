<template>
  <section class="body">
    <Hero :heroIcon="heroIcon" />
    <h2 class="titleTextAndMargin">Blog</h2>
  </section>
</template>

<script>
import Hero from "@/components/Hero.vue";

export default {
  components: {
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

