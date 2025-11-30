<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo -->
      <router-link to="/" class="navbar-logo">
        <img :src="logoImage" alt="FatCat Game Studio" width="50" />
        <span class="logo-text">FatCat</span>
      </router-link>

      <!-- Desktop Navigation -->
      <ul class="navbar-menu">
        <li v-for="link in navLinks" :key="link.path" class="navbar-item">
          <router-link 
            :to="link.path" 
            class="navbar-link" 
            :exact="link.path === '/'"
            active-class="active"
          >
            {{ link.name }}
          </router-link>
        </li>
      </ul>

      <!-- Social Links (Desktop) -->
      <div class="navbar-social">
        <SocialBar />
      </div>
    </div>
  </nav>
</template>

<script>
import SocialBar from "./SocialBar.vue";

export default {
  name: "NavBar",
  components: {
    SocialBar
  },
  data() {
    return {
      logoImage: require("@/assets/FatcatGameStudio.png"),
      navLinks: [
        { name: "Games", path: "/" },
        { name: "About", path: "/about" },
        { name: "Privacy", path: "/privacy" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@use "@/styles/design-system.scss" as *;

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: $navbar-height;
  z-index: $z-fixed;
  
  // Glassmorphism effect
  background: $navbar-bg;
  backdrop-filter: $navbar-blur;
  -webkit-backdrop-filter: $navbar-blur;
  border-bottom: 1px solid $glass-border;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  
  transition: all $transition-base;
}

.navbar-container {
  max-width: $container-xl;
  height: 100%;
  margin: 0 auto;
  padding: 0 $space-6;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: $breakpoint-md) {
    padding: 0 $space-4;
  }
}

// Logo styling
.navbar-logo {
  display: flex;
  align-items: center;
  gap: $space-3;
  text-decoration: none;
  transition: transform $transition-base;
  
  &:hover {
    transform: scale(1.05);
  }
  
  img {
    width: 50px;
    height: auto;
    filter: drop-shadow(0 0 10px rgba(102, 126, 234, 0.5));
  }
  
  .logo-text {
    font-size: $text-xl;
    font-weight: $font-bold;
    background: $text-gradient-purple;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    @media (max-width: $breakpoint-sm) {
      display: none;
    }
  }
}

// Navigation menu
.navbar-menu {
  display: flex;
  align-items: center;
  gap: $space-2;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: $breakpoint-md) {
    gap: $space-1;
  }
}

.navbar-item {
  position: relative;
}

.navbar-link {
  display: block;
  padding: $space-2 $space-4;
  color: $text-secondary;
  font-size: $text-base;
  font-weight: $font-medium;
  text-decoration: none;
  transition: all $transition-base;
  border-radius: $radius-md;
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 80%;
    height: 2px;
    background: $primary-gradient;
    border-radius: $radius-full;
    transition: transform $transition-base;
  }
  
  &:hover {
    color: $text-primary;
    background: $glass-bg;
    
    &::before {
      transform: translateX(-50%) scaleX(1);
    }
  }
  
  &.active {
    color: $text-primary;
    background: $glass-bg-light;
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
    
    &::before {
      transform: translateX(-50%) scaleX(1);
    }
  }
  
  @media (max-width: $breakpoint-md) {
    padding: $space-2 $space-3;
    font-size: $text-sm;
  }
}

// Social bar styling
.navbar-social {
  @media (max-width: $breakpoint-md) {
    display: none;
  }
}
</style>