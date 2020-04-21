<template>
  <keep-alive>
    <section v-if="!isLoading" class="body">
      <Hero :heroIcon="heroIcon" />

      <div class="wrapper-gameData">
        <article class="bodyDataButtonList">
          <!-- <img class="cardimage" :src="require(`@/assets/${game.icon}`)" width="400" /> -->
          <img class="cardimage" :src="require(`@/assets/GameIcon/${currentGame.icon}`)" />

          <div class="platformList">
            <a
              target="_blank"
              class="linkImage"
              v-if="currentGame.playstoreUrl"
              :href="`${currentGame.playstoreUrl}`"
            >
              <img class="imageInLink" src="@/assets/PlatformIcons/playstore.png" />
            </a>

            <a
              target="_blank"
              class="linkImage"
              v-if="currentGame.appstoreUrl"
              :href="`${currentGame.appstoreUrl}`"
            >
              <img class="imageInLink" src="@/assets/PlatformIcons/appstore.png" />
            </a>

            <a
              target="_blank"
              class="linkImage"
              v-if="currentGame.itch-ioUrl"
              :href="`${currentGame.itch-ioUrl}`"
            >
              <img class="imageInLink" src="@/assets/PlatformIcons/itch-io.png" />
            </a>

            <a
              target="_blank"
              class="linkImage"
              v-if="currentGame.huaweiUrl"
              :href="`${currentGame.huaweiUrl}`"
            >
              <img class="imageInLink" src="@/assets/PlatformIcons/appGallery.png" />
            </a>
          </div>
        </article>

        <article class="descriptionData">
          <p class="paragraph">{{currentGame.description}}</p>
        </article>

        <article class="marginConfig imageList">
          <img
            v-for="image in imgList"
            class="imageConfig"
            :key="image.id"
            :src="require(`@/assets/GameIcon/${image.imgPath}`)"
            width="200"
          />
        </article>

        <article class="marginConfig youtube">
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
    </section>
  </keep-alive>
</template>

<script>
import EventService from "@/services/EventService.js";
import Hero from "@/components/Hero.vue";

export default {
  props: ["id", "game"],
  components: {
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
.wrapper-gameData {
  max-width: 60%;
  margin: auto;
  height: 70%;

  display: flex;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: box;
  display: -webkit-box;
  display: -moz-box;

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

  position: relative;
  -webkit-box-orient: horizontal;
  -moz-box-orient: horizontal;
  -o-box-orient: horizontal;
  -webkit-box-lines: multiple;
  -moz-box-lines: multiple;
  -o-box-lines: multiple;
  -webkit-flex-flow: row wrap;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
}

@media (max-width: 900px) {
  .wrapper-gameData {
    max-width: 90%;
  }
}

.paragraph {
  color: white;
}

.cardimage {
  border-radius: 10%;
  background: white;
  padding: 5px;
  margin-right: 5px;
  width: 30%;
}

.linkImage {
  max-width: 25%;
  padding: 10px 10px 0 0;
  margin: auto auto 0 auto;
}

.imageInLink {
  max-width: 100%;
}

.marginConfig {
  margin-top: 5%;
}

.youtube{
  width: 100%;
}

.bodyDataButtonList {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5%;
}

.imageList {
  width: 100%;
  // margin:auto;
  justify-content: space-between;
  // overflow: auto;
  overflow-x: scroll;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch; /* [3] */
  -ms-overflow-style: -ms-autohiding-scrollbar;
}

.imageList::-webkit-scrollbar {
  display: none;
}

.platformList {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
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
  margin-right: 30px;
  margin-left: 30px;
}
</style>