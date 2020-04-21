<template>
  <div id="app">
    <main>
      <NavBar />
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
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
@import url("https://fonts.googleapis.com/css?family=Merriweather|Mukta|Oxygen|Roboto|Roboto+Slab&display=swap");

html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  // background: $wholeBackground;
  background-image: linear-gradient(to bottom, #434343 0%, black 100%);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $appColor;
  margin-top: 60px;
  font-family: "Oxygen", sans-serif;
}

.wrapper {
  max-width: 60%;
  margin: auto;
  height: 70%;

  display: flex;
  display: -webkit-flex;
  display: -ms-flexbox;
  // display: box;
  // display: -webkit-box;
  // display: -moz-box;

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

  // position: relative;
  // -webkit-box-orient: horizontal;
  // -moz-box-orient: horizontal;
  // -o-box-orient: horizontal;
  // -webkit-box-lines: multiple;
  // -moz-box-lines: multiple;
  // -o-box-lines: multiple;
  // -webkit-flex-flow: row wrap;
  // -ms-flex-flow: row wrap;
  // flex-flow: row wrap;
}

@media (max-width: 900px) {
  .wrapper {
    max-width: 40%;
    margin: auto;
    height: 70%;

    // display: flex;
    // display: -webkit-box;
    // display: -moz-box;
    // display: -webkit-flex;
    // display: -ms-flexbox;
    display: flex;

    flex-direction: column;
    align-items: center;
    // border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    // padding-bottom: 10px;

    // justify-content: space-between;
    // -webkit-justify-content: space-between;
    // -webkit-box-pack: justify;
    // -moz-box-pack: justify;
    // -o-box-pack: justify;
    // -ms-flex-pack: justify;

    // -webkit-box-align: end;
    // -moz-box-align: end;
    // -o-box-align: end;
    // -ms-flex-align: end;
    // -webkit-align-items: flex-end;
    // align-items: flex-end;
  }

  .wrapper > ul {
    display: none;
  }

  .wrapper > div > ul {
    margin: auto;
    padding-inline-start:0;
    margin-bottom:8%;
  }

  .wrapper > div > .side {
    margin-bottom:1%;
    display: flex;
    justify-content: space-between;
  }

  .wrapper > div > ul > .ToRight {
    text-align: center;
  }
  .wrapper > div > ul > .element {
    padding: 0;
  }
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

  // margin-block-start: 1em;
  // margin-block-end: 1em;
  // margin-inline-start: 0px;
  // margin-inline-end: 0px;
  // padding-inline-start: 40px;
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
.element:hover a {
  color: aquamarine;
}

@media (max-width: 900px) {
  .element {
    margin:2%;

  }
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
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.77);
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
