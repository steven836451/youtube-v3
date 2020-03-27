<template>
  <div class="page">
    <div class="firstPage">
      <a href @click.prevent="getCurrentPage(1)">
        <i class="fas fa-fast-backward"></i>
      </a>
    </div>
    <div class="prev">
      <a href @click.prevent="getCurrentPage(currentPage-1)">
        <i class="fas fa-angle-double-left"></i>
      </a>
    </div>
    <div>
      <ul class="pageNum">
        <li v-for="num in pageNum" :key="num" @click.prevent="getCurrentPage(num)">
          <a href>{{num}}</a>
        </li>
      </ul>
    </div>
    <div class="next">
      <a href @click.prevent="getCurrentPage(currentPage+1)">
        <i class="fas fa-angle-double-right"></i>
      </a>
    </div>
    <div class="lastPage">
      <a href @click.prevent="getCurrentPage(pageNum)">
        <i class="fas fa-fast-forward"></i>
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  props: ["pageNum", "currentPage"],
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
  color: black;
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

@media (max-width: 960px) {
  .pageNum {
    li {
      margin: 0 15px;
    }
  }
  .firstPage,
  .lastPage,
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
  .firstPage,
  .lastPage,
  .prev,
  .next {
    margin: 0 10px;
  }
}
</style>