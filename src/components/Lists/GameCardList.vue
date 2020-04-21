<template>
  <section class="list">
    <GameCard v-for="game in games" :key="game.id" :game="game" />
  </section>
</template>

<script>
import GameCard from "@/components/GameCard.vue";

export default {
  components: {
    GameCard
  },
  data() {
    return {
      games: [
        {
          id: 0,
          name: "Flappy Kitten",
          icon: "Icon.png",
          description:
            "Play in a incredible kitten world and unlock all the kittens!"
        },
        {
          id: 1,
          name: "Lost In Space",
          icon: "Icon2.png",
          description:
            "Survive in the space until you can found someone to help you!"
        },
        {
          id: 2,
          name: "Flappy Kitten",
          icon: "Icon.png",
          description:
            "Play in a incredible kitten world and unlock all the kittens!"
        },
        {
          id: 3,
          name: "Lost In Space",
          icon: "Icon2.png",
          description:
            "Survive in the space until you can found someone to help you!"
        },
        {
          id: 4,
          name: "Flappy Kitten",
          icon: "Icon.png",
          description:
            "Play in a incredible kitten world and unlock all the kittens!"
        },
        {
          id: 5,
          name: "Lost In Space",
          icon: "Icon2.png",
          description:
            "Survive in the space until you can found someone to help you!"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  max-width: 60%;
  margin: auto;
  flex-wrap: wrap;
}
@media (max-width:900px){
  .list {
  display: flex;
  max-width: 90%;
  margin: auto;
  flex-wrap: wrap;
}
}
</style>