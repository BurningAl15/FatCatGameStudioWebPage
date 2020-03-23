<template>
  <keep-alive>
    <section v-if="!isLoading" class="body">
      <Hero :heroIcon="heroIcon" />
      <!-- <h2 class="titleTextAndMargin">{{currentGame.name}}</h2> -->

      <div class="wrapper">
        <article class="bodyDataButtonList">
          <!-- <img class="cardimage" :src="require(`@/assets/${game.icon}`)" width="400" /> -->
          <img class="cardimage" :src="require(`@/assets/${currentGame.icon}`)" width="400" />
          <a target="_blank" class="linkImage" :href="`${currentGame.playstoreUrl}`">
            <img class="imageInLink" src="@/assets/playstore.png" />
          </a>
          <a target="_blank" class="linkImage" :href="`${currentGame.appstoreUrl}`">
            <img class="imageInLink" src="@/assets/appstore.png" />
          </a>
          <img class="linkImage" src="@/assets/appstore.png" />
          <!-- <a></a> -->
        </article>
        <article class="descriptionData">
          <p class="paragraph">{{currentGame.description}}</p>
        </article>
        <article class="marginConfig">
          <div class="bodyDataButtonList">
            <img
              v-for="image in imgList"
              class="imageConfig"
              :key="image.id"
              :src="require(`@/assets/${image.imgPath}`)"
              width="200"
            />
          </div>
          <div class="video-container">
            <iframe
              class="youtubevideocontainer"
              width="1300"
              height="761"
              :src="(`${currentGame.url}`)"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </article>
      </div>
    </section>
    <section v-else class="body">
      <div class="loader">Loading...</div>
      <!-- <h2 class="titleTextAndMargin">Loading!</h2> -->
    </section>
  </keep-alive>
</template>

<script>
// import BodyGameData from "@/components/BodyGameData.vue";
import EventService from "@/services/EventService.js";
import Hero from "@/components/Hero.vue";

export default {
  props: ["id", "game"],
  components: {
    // BodyGameData,
    Hero
  },
  data() {
    return {
      heroIcon: {
        id: 0,
        icon: "FatcatGameStudio.png",
        description: "FatCat Game Studio logo"
      },
      imgList: [],
      isLoading: true,
      currentGame: {}
      // actualGame:{}
    };
  },
  async created() {
    EventService.getEvent(this.id) // <--- Send the prop id to our EventService
      .then(response => {
        this.isLoading = false;
        this.currentGame = response.data;
        this.imgList = this.currentGame.imgList;
        console.log(this.imgList);
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  }
};
</script>

<style lang="scss" scoped>
.paragraph {
  color: white;
}

.cardimage {
  border-radius: 10%;
  background: white;
  padding: 5px;
}

.linkImage {
  max-width: 25%;
  margin: auto auto 0 auto;
}

.imageInLink{
  max-width: 100%;
}

.marginConfig {
  margin-top: 5%;
}

.bodyDataButtonList {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 5%;
}

.descriptionData {
  opacity: 0.8;
  //   padding: 2.5%;
  color: white;
  font-size: 25px;
  background: rgba(126, 125, 125, 0.671);
  border-radius: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  padding-right: 20px;
  padding-left: 20px;
  text-align: left;
  max-width: 100%;
  width: 100%;
}

.loader,
.loader:before,
.loader:after {
  background: #ffffff;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.loader {
  color: #ffffff;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  position: absolute;
  top: 0;
  content: "";
}
.loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}

.video-container {
  max-width: 100%;
  margin-top: 30px;
}

.youtubevideocontainer {
  max-width: 100%;
  border-radius: 5%;
  background: white;
  padding: 5px;
}

.imageConfig {
  border-radius: 5%;
  flex-wrap: wrap;
}
</style>