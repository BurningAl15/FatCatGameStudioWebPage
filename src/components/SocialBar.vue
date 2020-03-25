<template>
  <ul class="side">
    <!-- <li class="element">
      <a target="_blank" href="/">
        <img class="iconProperties" src="@/assets/icons/facebook.svg" width="35" />
      </a>
    </li> -->
    <li class="element">
      <a target="_blank" href="https://twitter.com/FatCatGameSt">
        <img class="iconProperties" src="@/assets/icons/twitter.svg" width="35" />
      </a>
    </li>
    <li class="element">
      <a target="_blank" href="https://www.youtube.com/channel/UC172ipp9sT53n7IsHMa3bfw/">
        <img class="iconProperties" src="@/assets/icons/youtube.svg" width="35" />
      </a>
    </li>
    <li class="element">
      <a target="_blank" href="https://www.instagram.com/fatcatgamestudio/">
        <img class="iconProperties" src="@/assets/icons/instagram.svg" width="35" />
      </a>
    </li>
    <li class="element">
      <a target="_blank" href="mailto:fatcatgamestudio.oc@gmail.com">
        <img class="iconProperties" src="@/assets/icons/parcel.svg" width="35" />
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.iconProperties {
  // color:white;
  width: 30px;
  background: white;
  border-radius: 50%;
  padding: 3px;
  transition: 0.3s ease;
}

.iconProperties:hover {
  width: 35px;

  transform: translate(0, -2px);
  background: aquamarine;
}
</style>