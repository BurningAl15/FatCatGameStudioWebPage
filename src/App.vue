<template>
  <div id="app">
    <main>
      <NavBar />
      <!-- <Hero /> -->
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
// import Hero from "./components/Hero.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    // Hero,
    Footer
  }
};
</script>

<style lang="scss">
$appColor: #2c3e50;
$wholeBackground: rgba(0, 0, 0, 0.89);
$logoCircleColor: rgb(61, 61, 61);

html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background: $wholeBackground;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $appColor;
  margin-top: 60px;
}

.wrapper {
  max-width: 60%;
  margin: auto;

  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  padding-bottom: 10px;
  height: 70%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: box;
  display: flex;
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
  -webkit-box-align: end;
  -moz-box-align: end;
  -o-box-align: end;
  -ms-flex-align: end;
  -webkit-align-items: flex-end;
  align-items: flex-end;
  -webkit-box-pack: justify;
  -moz-box-pack: justify;
  -o-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

.navBarLogo {
  // background: $logoCircleColor;
  // border-radius: 50%;
  padding: 5px;
}

.side {
  margin: 0;
  padding: 0;

  min-height: 45px;

  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -moz-box-orient: horizontal;
  -o-box-orient: horizontal;
  -moz-box-lines: single;
  -o-box-lines: single;
  -webkit-flex-flow: row nowrap;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  -o-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -moz-box-align: center;
  -o-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  list-style: none;

  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

.element {
  display: block;
  font-weight: 100;
  text-align: center;
  border-bottom: 0px solid #fff;
  -webkit-transition: all 0.1s ease;
  -moz-transition: all 0.1s ease;
  -o-transition: all 0.1s ease;
  -ms-transition: all 0.1s ease;
  transition: all 0.1s ease;
  position: relative;
  padding: 0 10px 0 10px;
}

.ToRight {
  text-align: end;
}

a {
  color: #fff;
  text-decoration: none;
  -webkit-transition: color 0.5s ease;
  -moz-transition: color 0.5s ease;
  -o-transition: color 0.5s ease;
  -ms-transition: color 0.5s ease;
  transition: color 0.5s ease;
}

.titleText {
  color: white;
  font-size: 40px;
}

.titleTextAndMargin {
  color: white;
  font-size: 40px;
  margin: auto;
  margin-bottom: 5%;
}

.titleTextFooter {
  color: white;
  font-size: 18px;
}

.body {
  text-align: center;
  position: relative;
  z-index: 10;
  overflow: hidden;
  padding: 50px 0 0 0;
  margin-bottom: 10%;

  // margin: 5%;
  // margin-bottom: 10%;
}

.bottomMargin {
  margin-bottom: 5%;
}
</style>
