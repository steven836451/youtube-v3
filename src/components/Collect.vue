<template>
  <div>
    <RenderContent
      :render-page-select="renderPageSelect"
      :page-num-select="renderPageNum"
      :current-page-select="currentPageSelect"
      :filter-page-num="filterPageNum"
    ></RenderContent>
    <div class="blank" v-if="favoriteItems == 0">
      <div class="blankBox">
        <p>無任何收藏</p>
        <div>
          <router-link to="/helloworld">前往首頁</router-link>
        </div>
      </div>
    </div>
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
    ...mapGetters("CollectModule", [
      "renderFavoritePage",
      "favoritePageNum",
      "favoriteItems"
    ]),
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
      //判斷總頁數是否大於五，若無則直接渲染
      if (this.favoritePageNum > 5) {
        //進入總頁數大於5的邏輯
        if (this.currentPage - 2 <= 1) {
          for (var i = 1; i < 6; i++) {
            filterNum.push(i);
          }
        } else if (this.currentPage + 2 >= this.favoritePageNum) {
          for (
            var i = this.favoritePageNum - 4;
            i < this.favoritePageNum + 1;
            i++
          ) {
            filterNum.push(i);
          }
        } else {
          for (var i = this.currentPage - 2; i < this.currentPage + 3; i++) {
            filterNum.push(i);
          }
        }
      }
      // 渲染總頁數小於5
      else {
        for (var i = 1; i < this.favoritePageNum + 1; i++) {
          filterNum.push(i);
        }
      }
      return filterNum;
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.blankBox {
  position: relative;
  max-width: 500px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}
p {
  font-size: 24px;
  margin-bottom: 20px;
}
a {
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  background-color: #94482c;
  padding: 10px 15px;
  border-radius: 0.5rem;
  &:hover{
    opacity: 0.8;
    transition: 0.8s;
  }
}
</style>