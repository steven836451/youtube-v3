<template>
  <div>
    <RenderContent :render-page-select="renderPageSelect" :page-num-select="renderPageNum" :current-page-select="currentPageSelect"></RenderContent>
  </div>
</template>


<script>
import RenderContent from "./RenderContent";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  components: {
    RenderContent
  },
  data() {
    return {};
  },
  methods: {
  },
  computed: {
    ...mapGetters("CollectModule",["renderFavoritePage","favoritePageNum"]),
    ...mapState("CollectModule", ["currentPage"]),
    
    renderPageSelect(){
        return this.renderFavoritePage
    },
    renderPageNum(){
        return this.favoritePageNum
    },
    currentPageSelect(){
      return this.currentPage
    }
  },
  created() {
  }
};
</script>

<style>
</style>