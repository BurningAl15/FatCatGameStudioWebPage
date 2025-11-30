<template>
  <article class="game-card glass-card">
    <router-link 
      :to="{ name: 'gameData', params: { id: currentGame.id, game: currentGame } }"
      class="card-link"
    >
      <div class="card-image-wrapper">
        <img 
          class="card-image" 
          :src="require(`@/assets/GameIcon/${currentGame.icon}`)" 
          :alt="currentGame.name"
        />
        <div class="card-overlay">
          <span class="play-icon">▶</span>
        </div>
      </div>
      
      <div class="card-content">
        <h3 class="card-title">{{ currentGame.name }}</h3>
        <p v-if="currentGame.description" class="card-description">
          {{ currentGame.description }}
        </p>
      </div>
    </router-link>
  </article>
</template>

<script>
export default {
  props: {
    game: Object
  },
  data() {
    return {
      currentGame: this.game
    };
  }
};
</script>

<style lang="scss" scoped>
@use "@/styles/design-system.scss" as *;

.game-card {
  overflow: hidden;
  transition: all $transition-base;
  cursor: pointer;

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 
                0 0 30px rgba(102, 126, 234, 0.4);

    .card-image {
      transform: scale(1.1);
    }

    .card-overlay {
      opacity: 1;
    }

    .card-title {
      background: $text-gradient-rainbow;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
}

.card-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.card-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: $radius-xl;
  background: $bg-dark-3;
  margin-bottom: $space-4;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform $transition-slow;
  background: white;
  padding: $space-2;
  border-radius: $radius-xl;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(102, 126, 234, 0.8) 0%, 
    rgba(118, 75, 162, 0.8) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity $transition-base;
  border-radius: $radius-xl;
}

.play-icon {
  font-size: $text-5xl;
  color: $text-primary;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  animation: pulse 2s infinite;
}

.card-content {
  padding: 0 $space-2 $space-2;
}

.card-title {
  font-size: $text-xl;
  font-weight: $font-bold;
  color: $text-primary;
  margin-bottom: $space-2;
  line-height: $leading-tight;
  transition: all $transition-base;
}

.card-description {
  font-size: $text-sm;
  color: $text-secondary;
  line-height: $leading-relaxed;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
</style>