<template>
  <section class="body">
    <Hero :heroIcon="heroIcon" />
      <h2 class="titleTextAndMargin">We make incredible games!</h2>
    <div class="wrapper-about bottomMargin">
      <article class="aboutParagraph">
        <p>
          We are FatCat Game Studio, a Peruvian Game Studio that love cience fiction, art, videogames and almost every type of hobby that could make our mind blow.
          <br />
          <br />Currently working on mobile games.
        </p>
      </article>
    </div>
    <h2 class="titleTextAndMargin">Our Staff!</h2>

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
        description: "FatCat Game Studio logo"
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

.wrapper-about {
  max-width: 60%;
  margin: auto;
  height: 70%;

  display: flex;
  display: -webkit-flex;
  display: -ms-flexbox;

  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  padding-bottom: 10px;

  justify-content: space-between;
  -webkit-justify-content: space-between;
  -webkit-box-pack: justify;
  -moz-box-pack: justify;
  -o-box-pack: justify;
  -ms-flex-pack: justify;

  -webkit-box-align: end;
  -moz-box-align: end;
  -o-box-align: end;
  -ms-flex-align: end;
  -webkit-align-items: flex-end;
  align-items: flex-end;
}
@media (max-width: 900px) {
  .wrapper-about {
    max-width: 90%;
    margin: auto;
    height: 70%;

    // display: flex;

    flex-direction: column;
    align-items: center;
    margin-bottom:10%;
  }
}
</style>