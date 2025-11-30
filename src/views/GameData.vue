<template>
  <div class="game-detail-page">
    <div class="container">
      <!-- Back button -->
      <router-link to="/" class="back-button">
        <span>←</span> Back to Games
      </router-link>

      <div v-if="game" class="game-content">
        <!-- Hero Section -->
        <div class="game-hero glass-card animate-fade-in-up">
          <div class="game-icon-wrapper">
            <img 
              :src="require(`@/assets/GameIcon/${game.icon}`)" 
              :alt="game.name"
              class="game-icon"
            />
          </div>
          
          <div class="game-info">
            <h1 class="game-title text-gradient">{{ game.name }}</h1>
            
            <div class="platforms">
              <span 
                v-for="platform in game.platforms" 
                :key="platform" 
                class="platform-badge"
              >
                {{ platform }}
              </span>
            </div>

            <p v-if="game.genre" class="genre">
              <strong>Genre:</strong> {{ game.genre }}
            </p>
            
            <p class="description">{{ game.description }}</p>

            <!-- Store Links -->
            <div v-if="game.storeLinks" class="store-links">
              <a 
                v-if="game.storeLinks.googlePlay" 
                :href="game.storeLinks.googlePlay" 
                target="_blank"
                rel="noopener noreferrer"
                class="store-btn google-play"
              >
                <span>📱</span> Google Play
              </a>
              
              <a 
                v-if="game.storeLinks.appstore" 
                :href="game.storeLinks.appstore" 
                target="_blank"
                rel="noopener noreferrer"
                class="store-btn app-store"
              >
                <span>🍎</span> App Store
              </a>
              
              <a 
                v-if="game.storeLinks.itch" 
                :href="game.storeLinks.itch" 
                target="_blank"
                rel="noopener noreferrer"
                class="store-btn itch-io"
              >
                <span>🎮</span> Itch.io
              </a>

              <a 
                v-if="game.storeLinks.youtube" 
                :href="game.storeLinks.youtube" 
                target="_blank"
                rel="noopener noreferrer"
                class="store-btn youtube"
              >
                <span>▶️</span> Watch Trailer
              </a>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="loading">
        <div class="spinner"></div>
        <p>Loading game details...</p>
      </div>
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  name: "GameData",
  data() {
    return {
      game: null
    };
  },
  async created() {
    try {
      const response = await EventService.getEvent(this.$route.params.id);
      this.game = response.data;
    } catch (error) {
      console.error("Error loading game:", error);
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
@use "@/styles/design-system.scss" as *;

.game-detail-page {
  min-height: 100vh;
  background: linear-gradient(135deg, $bg-dark-1 0%, $bg-dark-2 100%);
  padding: $space-8 $space-4;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
}

.container {
  max-width: $container-lg;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: $space-2;
  color: $accent-cyan;
  text-decoration: none;
  font-weight: $font-semibold;
  font-size: $text-base;
  margin-bottom: $space-6;
  transition: all $transition-fast;

  span {
    font-size: $text-lg;
  }

  &:hover {
    color: lighten($accent-cyan, 10%);
    transform: translateX(-4px);
  }
}

.game-hero {
  padding: $space-10 $space-8;
  display: flex;
  gap: $space-8;
  align-items: flex-start;

  @media (max-width: $breakpoint-md) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: $space-6 $space-4;
  }
}

.game-icon-wrapper {
  flex-shrink: 0;
  width: 200px;
  height: 200px;
  border-radius: $radius-xl;
  overflow: hidden;
  background: white;
  padding: $space-4;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);

  @media (max-width: $breakpoint-md) {
    width: 150px;
    height: 150px;
  }
}

.game-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.game-info {
  flex: 1;
}

.game-title {
  font-size: $text-4xl;
  font-weight: $font-black;
  margin-bottom: $space-4;
  line-height: $leading-tight;

  @media (max-width: $breakpoint-md) {
    font-size: $text-3xl;
  }
}

.platforms {
  display: flex;
  flex-wrap: wrap;
  gap: $space-2;
  margin-bottom: $space-4;

  @media (max-width: $breakpoint-md) {
    justify-content: center;
  }
}

.platform-badge {
  background: linear-gradient(135deg, $primary-purple, $primary-blue);
  color: $text-primary;
  padding: $space-1 $space-3;
  border-radius: $radius-full;
  font-size: $text-sm;
  font-weight: $font-semibold;
  box-shadow: 0 2px 10px rgba(102, 126, 234, 0.4);
}

.genre {
  color: $text-secondary;
  margin-bottom: $space-4;
  font-size: $text-base;

  strong {
    color: $text-primary;
  }
}

.description {
  color: $text-secondary;
  line-height: $leading-relaxed;
  font-size: $text-lg;
  margin-bottom: $space-6;
}

.store-links {
  display: flex;
  flex-wrap: wrap;
  gap: $space-3;

  @media (max-width: $breakpoint-md) {
    justify-content: center;
  }
}

.store-btn {
  display: inline-flex;
  align-items: center;
  gap: $space-2;
  padding: $space-3 $space-5;
  border-radius: $radius-lg;
  text-decoration: none;
  font-weight: $font-semibold;
  font-size: $text-base;
  transition: all $transition-base;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  span {
    font-size: $text-xl;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }

  &.google-play {
    background: linear-gradient(135deg, #34a853, #4285f4);
    color: white;
  }

  &.app-store {
    background: linear-gradient(135deg, #555, #000);
    color: white;
  }

  &.itch-io {
    background: linear-gradient(135deg, #fa5c5c, #ff2449);
    color: white;
  }

  &.youtube {
    background: linear-gradient(135deg, #ff0000, #cc0000);
    color: white;
  }
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: $space-16 0;
  color: $text-secondary;

  .spinner {
    width: 50px;
    height: 50px;
    border: 4px solid $glass-border;
    border-top-color: $primary-purple;
    border-radius: $radius-full;
    animation: spin 1s linear infinite;
    margin-bottom: $space-4;
  }

  p {
    font-size: $text-lg;
    font-weight: $font-medium;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>