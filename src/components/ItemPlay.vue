<template>
  <div class="container">
    <div class="box">
      <div class="top">
        <video
        id="myVideo"
        class="video-js vjs-big-play-centered"
        style="width: 100%;height: auto"
        ref="videoPlayer"
      ></video>
      </div>
      <div class="bottom">
          <h1 class="text">{{setItem.snippet.title}}</h1>
          <p class="text"><pre>{{setItem.snippet.description}}</pre></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import videojs from "video.js";

export default {
  data() {
    return {
      myVideo: null,
    };
  },
  methods: {
    getVideo() {
      this.myVideo = videojs("myVideo", {
        autoplay: false,
        controls: true,
        bigPlayButton: true,
        sourceOrder: true,
        textTrackDisplay: false,
        posterImage: false,
        errorDisplay: false,
        flash: { hls: { withCredentials: false } },
        html5: { hls: { withCredentials: false } },
        hls: {
          withCredentials: true
        },
        sources: [
          {
            type: "rtmp/mp4",
            src: "rtmp://184.72.239.149/vod/&mp4:BigBuckBunny_115k.mov"
          },
          {
            withCredentials: false,
            type: "application/x-mpegURL",
            src:
              "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
          }
        ],
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
          progressControl: true,
          customControlSpacer: true,
        }
      });
    }
  },
  computed: {
    ...mapGetters("ItemPlayModule", ["setItem"])
  },
  created() {},
  mounted() {
    this.getVideo();
  },
  beforeDestroy(){
  },
  destroyed(){
    this.myVideo.dispose();
  }
};
</script>

<style lang="scss" scoped>

.container {
  position: relative;
  max-width: 1440px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 60px;
}
.box {
  padding: 20px;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.top {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}
.bottom {
  width: 100%;
  h1 {
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    line-height: 1.2yrem;
  }
  pre {
    white-space: pre-wrap;
  }
}
.vjs-tech{
  position: relative;
}
</style>