<template>
  <div class="page">
    <!-- <div class="firstPage">
      <a href @click.prevent="getCurrentPage(1)">
        <i class="fas fa-fast-backward"></i>
      </a>
    </div> -->
    <div class="prev">
      <a href @click.prevent="getCurrentPage(currentPage-1)">
        <i class="fas fa-angle-double-left"></i>
      </a>
    </div>
    <div>
      <ul class="pageNum">
        <li @click.prevent="getCurrentPage(1)" v-if="currentPage-3 >= 1"><a href>1</a></li>
        <li v-if="currentPage-3 >= 1">...</li>
        <li v-for="num in filterPageNum" :key="num" @click.prevent="getCurrentPage(num)">
          <a href :class="{selectColor : num == currentPage}">{{num}}</a>
        </li>
        <li v-if="currentPage+3 <= pageNum">...</li>
        <li @click.prevent="getCurrentPage(pageNum)" v-if="currentPage+3 <= pageNum"><a href>{{pageNum}}</a></li>
      </ul>
    </div>
    <div class="next">
      <a href @click.prevent="getCurrentPage(currentPage+1)">
        <i class="fas fa-angle-double-right"></i>
      </a>
    </div>
    <!-- <div class="lastPage">
      <a href @click.prevent="getCurrentPage(pageNum)">
        <i class="fas fa-fast-forward"></i>
      </a>
    </div> -->
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  props: ["pageNum", "currentPage","filterPageNum"],
  data() {
    return {};
  },
  methods: {
    getCurrentPage(num) {
      const select = this.$route.path.split("/")[1];
      scrollTo(0, 0);
      if (num < 1 || num > this.pageNum) {
        return;
      }
      if (select == "helloworld") {
        this.$store.commit("HomeModule/CURRENTPAGE", num);
      } else {
        this.$store.commit("CollectModule/CURRENTPAGE", num);
      }
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  font-size: 24px;
  display: flex;
  a{
    color: rgb(107, 107, 107);
  }
}
.pageNum {
  display: flex;
  li {
    margin: 0 20px;
    a {
      text-decoration: none;
    }
  }
}
.firstPage,
.lastPage,
.prev,
.next {
  margin: 0 20px;
}
.selectColor{
  color: black !important; 
  font-weight: bold;
  text-decoration: underline !important;
}
@media (max-width: 960px) {
  .pageNum {
    li {
      margin: 0 15px;
    }
  }
  // .firstPage,
  // .lastPage,
  .prev,
  .next {
    margin: 0 15px;
  }
}

@media (max-width: 640px) {
  .pageNum {
    li {
      margin: 0 10px;
    }
  }
  // .firstPage,
  // .lastPage,
  .prev,
  .next {
    margin: 0 10px;
  }
}
</style>