<template>
  <div>
    <video id="video" style="width: 100%;" autoplay muted loop>
      <source src="https://img-baofun.zhhainiao.com/fs/live/preview_video/65c507fbba6f35db58c557245913013a_preview.mp4">
    </video>
    <div id="output"></div>
  </div>
</template>

<script>
export default {
  name: "cate",
  mounted() {
    this.$nextTick(() => {
      (function(){
        var video, output;
        var scale = 1;
        var initialize = function() {
          output = document.getElementById("output");
          video = document.getElementById("video");
          video.addEventListener('click',captureImage);
        };

        var captureImage = function() {
          var canvas = document.createElement("canvas");
          canvas.width = video.videoWidth * scale;
          canvas.height = video.videoHeight * scale;
          canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

          var img = document.createElement("img");
          img.src = canvas.toDataURL("image/png");
          output.appendChild(img);
        };

        initialize();
      })();
    })
  },
  methods: {

  }
}
</script>

<style scoped>

</style>