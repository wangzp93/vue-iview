<template>
<!--  <div class="home"></div>-->
  <video id="video" style="width: 100%;" autoplay muted loop>
    <source src="http://localhost:8080/video/live/preview_video/65c507fbba6f35db58c557245913013a_preview.mp4">
  </video>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        bgVideoList: [
            'https://img-baofun.zhhainiao.com/pcwallpaper_ugc/preview/f387a74f2c78fffcf0afa3291de9ece8_preview.mp4',
            'https://wallpaperm-mp4.duba.com/live/preview_video/f0fc83a8e6da477b9d2bd53368aecb5e_preview.mp4',
            'https://wallpaperm-mp4.duba.com/live/preview_video/65c507fbba6f35db58c557245913013a_preview.mp4',
            'https://wallpaperm-mp4.duba.com/live/preview_video/e472b3bb886bbd8e493b649b53ba62dd_preview.mp4',
            'https://img-baofun.zhhainiao.com/pcwallpaper_ugc/preview/566dcf7da99aa2ea8a87dd4cc0704404_preview.mp4',
        ],
      }
    }
  }
</script>

<style scoped lang="less">
.home {
  background-image: url("../assets/bg-img/yanlingji-2.gif");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 0 0;
}
</style>