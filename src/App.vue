<template>
  <div id="app">
    <NavBar />
    <main>
      <transition name="fade-slide" mode="out-in">
        <router-view />
      </transition>
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
// Import design system
@use './styles/design-system.scss' as *;
@use './styles/animations.scss' as *;
@use './styles/utilities.scss' as *;

// Global styles reset
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: $font-body;
  font-size: $text-base;
  line-height: $leading-normal;
  color: $text-primary;
  background: $bg-dark-1;
  
  // Animated gradient background
  background: linear-gradient(135deg, $bg-dark-1 0%, $bg-dark-2 50%, $bg-dark-3 100%);
  background-size: 200% 200%;
  animation: gradientShift 15s ease infinite;
  
  min-height: 100vh;
  overflow-x: hidden;
}

#app {
  font-family: $font-body;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-primary;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  
  main {
    flex: 1;
    margin-top: $navbar-height;
    position: relative;
  }
}

// Wrapper for page content
.wrapper {
  max-width: 60%;
  margin: auto;
  padding: $space-4;
  
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid $glass-border;
  padding-bottom: $space-4;

  @media (max-width: $breakpoint-md) {
    max-width: 90%;
    flex-direction: column;
    align-items: center;
  }
}

.navBarLogo {
  padding: $space-2;
  transition: transform $transition-base;
  
  &:hover {
    transform: scale(1.05);
  }
}

.side {
  margin: 0;
  padding: 0;
  min-height: 45px;
  
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  list-style: none;
}

.element {
  display: block;
  font-weight: $font-regular;
  text-align: center;
  transition: all $transition-base;
  position: relative;
  padding: 0 $space-3;
  
  &:hover a {
    color: $accent-cyan;
  }

  @media (max-width: $breakpoint-md) {
    margin: $space-2;
  }
}

.ToRight {
  text-align: end;
}

a {
  color: $text-primary;
  text-decoration: none;
  transition: color $transition-base;
}

// Typography utilities
.titleText {
  color: $text-primary;
  font-size: $text-4xl;
  font-weight: $font-bold;
}

.titleTextAndMargin {
  color: $text-primary;
  font-size: $text-4xl;
  font-weight: $font-bold;
  margin: auto;
  margin-bottom: 5%;
  text-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
}

.titleTextFooter {
  color: $text-primary;
  font-size: $text-lg;
  font-weight: $font-medium;
}

.body {
  text-align: center;
  position: relative;
  z-index: 10;
  overflow: hidden;
  padding: $space-12 0;
  margin-bottom: 10%;
}

.bottomMargin {
  margin-bottom: 5%;
}

// Scrollbar styling
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: $bg-dark-2;
}

::-webkit-scrollbar-thumb {
  background: $primary-gradient;
  border-radius: $radius-full;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, $accent-cyan 0%, $primary-purple 100%);
}
</style>
