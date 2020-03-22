<template>
  <keep-alive>
      <BodyGameData :game="game" />
  </keep-alive>
</template>

<script>
import BodyGameData from "@/components/BodyGameData.vue";
export default {
  props: ["id", "game"],
  components: {
    BodyGameData
  }
};
</script>