<template>
  <article class="box">
    <!-- click="sucees" -->
    <router-link :to="{ name: 'gameData', params: { id: game.id, game:game } }" >
      <img class="cardimage" :src="require(`@/assets/${game.icon}`)" width="150" />
      <!-- <img class="cardimage" src="@/assets/Icon.png" width="150" /> -->
    </router-link>
    <h2 class="cardtext">{{game.name}}</h2>
  </article>
</template>

<script>
// import router from "../router";

export default {
  props: {
    game: Object
  },
  // methods:{
  //   sucees:function(data){
  //       router.push({
  //         name:"currentGame",
  //         params:{
  //           items:data
  //         }
  //       })
  //   }
  // }
};
</script>

<style lang="scss" scoped>
.box {
  margin: auto;
  padding: 1%;
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