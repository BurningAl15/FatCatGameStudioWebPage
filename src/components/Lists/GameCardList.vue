<template>
  <section class="games-section">
    <div v-if="isLoading" class="loading">
      <div class="spinner"></div>
      <p>Loading games...</p>
    </div>

    <div v-else-if="error" class="error-message">
      <p>{{ error }}</p>
    </div>

    <div v-else class="games-grid">
      <GameCard 
        v-for="game in games" 
        :key="game.id" 
        :game="game" 
        class="animate-fade-in-up"
      />
    </div>

    <div v-if="!isLoading && games.length === 0" class="no-games">
      <p>No games available yet. Stay tuned!</p>
    </div>
  </section>
</template>

<script>
import GameCard from "@/components/GameCard.vue";
import EventService from "@/services/EventService.js";

export default {
  components: {
    GameCard
  },
  data() {
    return {
      games: [],
      isLoading: true,
      error: null
    };
  },
  async created() {
    try {
      const response = await EventService.getEvents();
      this.games = response.data || [];
      this.isLoading = false;
    } catch (err) {
      console.error("Error loading games:", err);
      this.error = "Failed to load games. Please try again later.";
      this.isLoading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@use "@/styles/design-system.scss" as *;

.games-section {
  width: 100%;
  padding: $space-8 0;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: $space-8;
  max-width: $container-xl;
  margin: 0 auto;
  padding: 0 $space-6;

  @media (max-width: $breakpoint-md) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: $space-6;
    padding: 0 $space-4;
  }

  @media (max-width: $breakpoint-sm) {
    grid-template-columns: 1fr;
    gap: $space-4;
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

.error-message {
  text-align: center;
  padding: $space-12 $space-6;
  color: $error;
  font-size: $text-lg;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: $radius-lg;
  max-width: 600px;
  margin: $space-8 auto;
}

.no-games {
  text-align: center;
  padding: $space-16 $space-6;
  color: $text-secondary;
  font-size: $text-xl;
  font-weight: $font-medium;
}
</style>