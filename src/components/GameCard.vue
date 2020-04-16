<template>
  <article class="box">
    <!-- click="sucees" -->
    <router-link :to="{ name: 'gameData', params: { id: currentGame.id, game:currentGame } }">
      <img class="cardimage" :src="require(`@/assets/GameIcon/${currentGame.icon}`)" width="150" />
      <!-- <img class="cardimage" src="@/assets/Icon.png" width="150" /> -->
    </router-link>
    <h2 class="cardtext">{{currentGame.name}}</h2>
  </article>
</template>

<script>
// import router from "../router";

export default {
  props: {
    game: Object
  },
  data() {
    return {
      currentGame: this.game
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  margin: auto;
  padding: 2.5%;
  border-radius: 10%;
  color: white;
}

.cardimage {
  border-radius: 10%;
  background: white;
  padding: 5px;
  transition: 0.2s ease;
}

.cardimage:hover {
  border-radius: 50%;
}

.cardtext {
  font-size: 15px;
}
</style>