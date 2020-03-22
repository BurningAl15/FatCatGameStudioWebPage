<template>
  <section class="body">
    <Hero :heroIcon="heroIcon" />
    <div class="wrapper bottomMargin">
      <h2 class="titleTextAndMargin">We make incredible games!</h2>
      <article class="aboutParagraph">
        <p>
          We are FatCat Game Studio, a Peruvian Game Studio that love cience fiction, art, videogames and almost every type of hobby that could make our mind blow.
          <br />
          <br />Currently working on mobile games.
        </p>
      </article>
    </div>
    <TeamCardList />
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
        description:"FatCat Game Studio logo"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.aboutParagraph {
  color: white;
  background: rgba(126, 125, 125, 0.671);
  border-radius: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  padding-right: 20px;
  padding-left: 20px;
  //   margin: auto;
  //   max-width: 60%;
  font-size: 20px;
  text-align: left;
  opacity: 0.8;

}

.aboutBody {
  text-align: center;
  position: relative;
  z-index: 10;
  overflow: hidden;
  padding: 50px 0 0 0;
  margin-bottom: 10%;
}


</style>