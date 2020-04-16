<template>
  <article class="box">
    <a target="_blank" :href="`${member.socialMediaUrl}`">
      <div class="container">
        <img class="cardimage" :src="require(`@/assets/MemberIcons/${member.icon}`)" width="150" />
        <div class="positionContainer">
          <div class="positionAlign">
            <span>{{member.position}}</span>
          </div>
        </div>
      </div>
    </a>
    <h2 class="cardtext">{{member.name}}</h2>
  </article>
</template>


<script>
export default {
  props: {
    member: Object
  }
};
</script>

<style lang="scss" scoped>
.box {
  // background:rgba(255, 255, 255, 0.333);
  margin: auto;
  padding: 1%;
  border-radius: 10%;
  color: white;
}

.cardimage {
  //   -webkit-box-sizing: border-box;
  //   -moz-box-sizing: border-box;
  //   box-sizing: border-box;
  border-radius: 10%;
  // border-color: white;
  // border-width: 20px;
  background: white;
  padding: 5px;
  -webkit-transition: 0.2s ease;
  -moz-transition: 0.2s ease;
  -o-transition: 0.2s ease;
  -ms-transition: 0.2s ease;

  transition: 0.2s ease;
}

.container:hover .cardimage {
  border-radius: 50%;
}

.cardtext {
  font-size: 20px;
}

.container {
  position: relative;
}

.positionContainer {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  width: 100%;
  height: 100%;
  border-radius: 10%;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  transition: all 0.2s ease;
  color: #fff;
  font-size: 1.3em;
  overflow: hidden;
  line-height: 1.5em;
  border-radius: 10%;
}

.container:hover .positionContainer {
  opacity: 1;
  -ms-filter: none;
  filter: none;
  color: #fff;
  border-radius: 50%;
}

.positionAlign {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 0.7em;
}
</style>