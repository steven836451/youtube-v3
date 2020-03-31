<template>
  <div>
    <RenderContent
      :render-page-select="renderPageSelect"
      :page-num-select="renderPageNum"
      :current-page-select="currentPageSelect"
      :filter-page-num="filterPageNum"
    ></RenderContent>
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
  methods: {},
  computed: {
    ...mapGetters("CollectModule", ["renderFavoritePage", "favoritePageNum"]),
    ...mapState("CollectModule", ["currentPage"]),

    renderPageSelect() {
      return this.renderFavoritePage;
    },
    renderPageNum() {
      return this.favoritePageNum;
    },
    currentPageSelect() {
      return this.currentPage;
    },
    filterPageNum() {
      let filterNum = [];
      if (this.favoritePageNum > 5) {
        if (this.currentPage - 2 <= 1) {
          for (var i = 1; i < 6; i++) {
            filterNum.push(i);
          }
        } else if (this.currentPage + 2 >= this.favoritePageNum) {
          for (var i = this.favoritePageNum - 4; i < this.favoritePageNum + 1; i++) {
            filterNum.push(i);
          }
        } else {
          for (var i = this.currentPage - 2; i < this.currentPage + 3; i++) {
            filterNum.push(i);
          }
        }
      } else {
        for (var i = 1; i < this.favoritePageNum+1; i++) {
          filterNum.push(i);
        }
      }
      return filterNum;
    }
  },
  created() {}
};
</script>

<style>
</style>