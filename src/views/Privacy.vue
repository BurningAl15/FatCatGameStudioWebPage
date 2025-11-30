<template>
  <div class="privacy-page">
    <div class="container">
      <div class="header animate-fade-in-down">
        <h1 class="text-gradient">🛡️ Privacy Policies</h1>
        <p class="subtitle">FatCat Game Studio - Game Privacy Policies</p>
      </div>

      <div v-if="isLoading" class="loading">
        <div class="spinner"></div>
        <p>Loading games...</p>
      </div>

      <div v-else class="games-grid">
        <!-- Game cards with privacy policies -->
        <router-link 
          v-for="game in gamesWithPrivacy" 
          :key="game.id"
          :to="game.privacyPolicy" 
          class="game-card glass-card animate-fade-in-up"
        >
          <div class="card-icon">
            <img :src="require(`@/assets/GameIcon/${game.icon}`)" :alt="game.name" />
          </div>
          <h2>{{ game.name }}</h2>
          <p>{{ game.description }}</p>
          <span class="btn btn-primary">View Policy →</span>
        </router-link>

        <!-- Games without privacy policies -->
        <div 
          v-for="game in gamesWithoutPrivacy" 
          :key="'no-policy-' + game.id"
          class="game-card glass-card coming-soon animate-fade-in-up"
        >
          <div class="card-icon">
            <img :src="require(`@/assets/GameIcon/${game.icon}`)" :alt="game.name" />
          </div>
          <h2>{{ game.name }}</h2>
          <p>{{ game.description }}</p>
          <span class="btn btn-secondary">Coming Soon</span>
          <div class="badge">No Policy</div>
        </div>
      </div>

      <div class="footer glass-card animate-fade-in-up">
        <h3>📧 Contact</h3>
        <p>For privacy and data inquiries:</p>
        <p>
          <strong>Email:</strong> 
          <a href="mailto:fatcatgamestudio@gmail.com">fatcatgamestudio@gmail.com</a>
        </p>
        <p class="copyright">© 2025 FatCat Game Studio. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  name: 'Privacy',
  data() {
    return {
      games: [],
      isLoading: true
    };
  },
  computed: {
    gamesWithPrivacy() {
      return this.games.filter(game => game.privacyPolicy);
    },
    gamesWithoutPrivacy() {
      return this.games.filter(game => !game.privacyPolicy);
    }
  },
  async created() {
    try {
      const response = await EventService.getEvents();
      this.games = response.data || [];
      this.isLoading = false;
    } catch (error) {
      console.error("Error loading games:", error);
      this.isLoading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@use "@/styles/design-system.scss" as *;

.privacy-page {
  min-height: 100vh;
  padding: $space-12 $space-4;
}

.container {
  max-width: $container-xl;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: $space-12;

  h1 {
    font-size: $text-5xl;
    font-weight: $font-black;
    margin-bottom: $space-3;

    @media (max-width: $breakpoint-md) {
      font-size: $text-4xl;
    }
  }

  .subtitle {
    font-size: $text-xl;
    color: $text-secondary;
    font-weight: $font-medium;
  }
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
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
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: $space-6;
  margin-bottom: $space-12;

  @media (max-width: $breakpoint-sm) {
    grid-template-columns: 1fr;
  }
}

.game-card {
  padding: $space-8;
  text-decoration: none;
  color: $text-primary;
  transition: all $transition-base;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 
                0 0 30px rgba(102, 126, 234, 0.4);
  }

  .card-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto $space-4;
    background: white;
    border-radius: $radius-xl;
    padding: $space-2;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  h2 {
    font-size: $text-2xl;
    font-weight: $font-bold;
    margin-bottom: $space-3;
    background: $text-gradient-rainbow;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    color: $text-secondary;
    line-height: $leading-relaxed;
    margin-bottom: $space-6;
    font-size: $text-base;
  }

  .btn {
    display: inline-block;
    padding: $space-3 $space-6;
    border-radius: $radius-lg;
    font-weight: $font-semibold;
    transition: all $transition-fast;
  }

  .btn-primary {
    background: linear-gradient(135deg, $primary-purple, $primary-blue);
    color: white;
  }

  .btn-secondary {
    background: rgba(255, 255, 255, 0.1);
    color: $text-secondary;
    cursor: not-allowed;
  }

  &.coming-soon {
    opacity: 0.7;
    cursor: not-allowed;

    &:hover {
      transform: none;
      box-shadow: $shadow-md;
    }
  }

  .badge {
    position: absolute;
    top: $space-4;
    right: $space-4;
    background: linear-gradient(135deg, #f59e0b, #ef4444);
    color: white;
    padding: $space-1 $space-3;
    border-radius: $radius-full;
    font-size: $text-xs;
    font-weight: $font-bold;
  }
}

.footer {
  text-align: center;
  padding: $space-8;

  h3 {
    font-size: $text-2xl;
    font-weight: $font-bold;
    margin-bottom: $space-4;
  }

  p {
    color: $text-secondary;
    line-height: $leading-relaxed;
    margin-bottom: $space-3;
  }

  a {
    color: $accent-cyan;
    text-decoration: none;
    font-weight: $font-semibold;

    &:hover {
      text-decoration: underline;
    }
  }

  .copyright {
    margin-top: $space-6;
    font-size: $text-sm;
    opacity: 0.7;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
