<template>
  <section class="body">
    <Hero :heroIcon="heroIcon" />
    <h2 class="titleTextAndMargin">{{game.name}}</h2>
    <div class="wrapper">
      <article class="bodyDataButtonList">
        <img class="cardimage" :src="require(`@/assets/${game.icon}`)" width="400" />
        <img class="linkImage" src="@/assets/playstore.png" />
        <img class="linkImage" src="@/assets/appstore.png" />
        <img class="linkImage" src="@/assets/appstore.png" />
      </article>
      <article class="descriptionData">
        <p class="paragraph">{{game.description}}</p>
      </article>
    </div>
  </section>
</template>

<script>
import Hero from "@/components/Hero.vue";

export default {
  name: "gameData",

  components: {
    Hero
  },
  props: {
    game: Object
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
.cardimage {
  border-radius: 10%;
  background: white;
  padding: 5px;
}

.linkImage {
  max-width: 25%;
  margin: auto auto 0 auto;
}

.bodyDataButtonList {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
}

.descriptionData {
  opacity: 0.8;
  //   padding: 2.5%;

  color: white;
  background: rgba(126, 125, 125, 0.671);
  border-radius: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  padding-right: 20px;
  padding-left: 20px;
  font-size: 20px;
  text-align: left;
  max-width: 100%;
  width: 100%;
}

// .paragraph{
// }
</style>