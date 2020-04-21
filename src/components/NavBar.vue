<template>
  <div class="wrapper">
    <router-link class="navBarLogo" to="/">
      <img :src="logoImage" width="60" />
    </router-link>

    <!-- <a class="navBarLogo" href="index.html">
      <img :src="logoImage" width="60" />
    </!-->

    <nav class="NavBar">
      <!-- <img src="@/assets/FatcatGameStudio.png" width="60"/> -->
      <ul class="side">
        <li class="element">
          <router-link class="navBar-link" to="/">Games</router-link>|
          <!-- <a class="navBar-link" href="https://www.aldhairvera.studio">Games</a> -->
        </li>
        <li class="element">
          <router-link class="navBar-link" to="/blog">Blog</router-link>
          <!-- <a class="navBar-link" href="https://www.aldhairvera.studio">Blog</a> -->
        </li>

        <li class="element">
          <router-link class="navBar-link" to="/about">About</router-link>

          <!-- <a class="navBar-link" href="https://www.aldhairvera.studio">About</a> -->
        </li>
      </ul>
    </nav>

    <SocialBar v-if="!showTopMenu"/>

  </div>
</template>

<script>
import SocialBar from "./SocialBar.vue";

export default {
  data() {
    return {
      logoImage: require("@/assets/FatcatGameStudio.png"),
      showTopMenu: false,
    };
  },
  components: {
    SocialBar
  }
};
</script>

<style lang="scss" scoped>
$navBarColor: #dddddd;
$logoCircleColor: rgb(61, 61, 61);

.NavBar {
  // display: block;
  // -webkit-box-flex: 1;
  // -moz-box-flex: 1;
  // -o-box-flex: 1;
  // box-flex: 1;
  // -webkit-flex: 1 0 auto;
  // -ms-flex: 1 0 auto;
  // flex: 1 0 auto;
  // position: absolute;
  // bottom: 10px;
  // left: 50%;
  // -webkit-transform: translateX(-50%);
  // -moz-transform: translateX(-50%);
  // -o-transform: translateX(-50%);
  // -ms-transform: translateX(-50%);
  // transform: translateX(-60%);
}

.navBar-link {
  font-size: 20px;
  text-decoration: none;
  transition: 0.3s ease;
}
.navBar-link:hover {
  font-size: 25px;
  text-decoration: underline;
}
</style>