<template>
  <footer class="footerBackground">
    <div class="wrapper">
      <div>
        <img class="navBarLogo" :src="logoImage" width="60" />
        <p class="titleTextFooter">FatCat Game Studio 2020</p>
      </div>

      <div>
        <ul>
          <li class="element ToRight">
            <a href="/">General Privacy Policy</a>
          </li>
          <li class="element ToRight">
            <a href="/">Mixed Audience Privacy Policy</a>
          </li>
          <li class="element ToRight">
            <a href="/">Do Not Sell My Personal Information</a>
          </li>
          <li class="element ToRight">
            <a href="/">Terms Of Service</a>
          </li>
        </ul>
        <SocialBar />
      </div>
    </div>
  </footer>
</template>

<script>
import SocialBar from "./SocialBar.vue";

export default {
  data() {
    return {
      logoImage: require("@/assets/FatcatGameStudio.png")
    };
  },
  components: {
    SocialBar
  }
};
</script>

<style lang="scss" scoped>
footer {
  border-top: 5px solid white;
  background: black;
  width: 100%;
  position: absolute;
  left: 0;
}


</style>
