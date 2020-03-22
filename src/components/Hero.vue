<template>
  <div>
    <img class="LogoHero" :alt="`${heroIcon.description}`" :src="require(`@/assets/${heroIcon.icon}`)"  />
  </div>
</template>

<script>
export default {
  props:{
    heroIcon:Object
  }
}
</script>

<style lang="scss" scoped>
.LogoHero {
  margin: auto;
  // background: $logoCircleColor;
  border-radius: 20%;
  padding: 10px;
  margin: 5%;
//   margin-bottom: 10%;
}
</style>