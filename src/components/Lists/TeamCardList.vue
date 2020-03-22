<template>
  <section class="list">
    <TeamCard v-for="member in members" :key="member.id" :member="member"></TeamCard>
  </section>
</template>

<script>
import TeamCard from "@/components/TeamCard.vue";

export default {
  components: {
    TeamCard
  },
  data() {
    return {
      members: [
        {
          id: 0,
          name: "Aldhair Vera",
          position: "CEO / Main Programmer / Game Designer",
          icon: "AldhairVeraLogo.png",
          socialMediaUrl: "https://www.instagram.com/al_vera15/"
        },
        {
          id: 1,
          name: "Nancy Rojas",
          position: "UX Designer / 3d Artist / Technical Artist",
          icon: "AldhairVeraLogo.png",
          socialMediaUrl: "https://www.instagram.com/i_am_nhymer/"
        }
        // {
        //   id: 2,
        //   name: "Karla Agraz",
        //   position: "Front End Developer",
        //   icon:"AldhairVeraLogo.png"
        // }
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
  justify-items: center;
}
</style>