<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-brand">
        <img class="footer-logo" :src="logoImage" alt="FatCat Game Studio" width="60" />
        <p class="footer-text">FatCat Game Studio 2025</p>
      </div>

      <div class="footer-links">
        <ul>
          <li>
            <router-link to="/privacy">Privacy Policies</router-link>
          </li>
          <li>
            <a href="mailto:fatcatgamestudio@gmail.com">Contact</a>
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
@use "@/styles/design-system.scss" as *;

.footer {
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  border-top: 1px solid $glass-border;
  backdrop-filter: blur(10px);
  margin-top: auto;
  padding: $space-8 0;
}

.footer-container {
  max-width: $container-xl;
  margin: 0 auto;
  padding: 0 $space-6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: $space-8;

  @media (max-width: $breakpoint-md) {
    flex-direction: column;
    gap: $space-6;
    padding: 0 $space-4;
  }
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: $space-4;
}

.footer-logo {
  transition: transform $transition-base;
  filter: drop-shadow(0 0 10px rgba(102, 126, 234, 0.3));

  &:hover {
    transform: scale(1.05);
  }
}

.footer-text {
  font-size: $text-lg;
  font-weight: $font-medium;
  color: $text-secondary;
  margin: 0;
}

.footer-links {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: $space-4;

  @media (max-width: $breakpoint-md) {
    align-items: center;
  }

  ul {
    list-style: none;
    display: flex;
    gap: $space-6;
    margin: 0;
    padding: 0;

    @media (max-width: $breakpoint-sm) {
      flex-direction: column;
      gap: $space-3;
      align-items: center;
    }
  }

  li {
    margin: 0;
  }

  a {
    color: $text-secondary;
    text-decoration: none;
    font-weight: $font-medium;
    transition: color $transition-fast;
    padding: $space-2;

    &:hover {
      color: $accent-cyan;
    }
  }
}
</style>
