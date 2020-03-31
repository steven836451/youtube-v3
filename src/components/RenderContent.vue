<template>
  <div class="container">
    <div class="box">
      <loading :active.sync="isLoading"></loading>
      <div
        class="singleItem"
        v-for="item in renderPageSelect"
        :key="item.id"
        @click="itemPlay(item)"
      >
        <div class="card-top">
          <img :src="item.snippet.thumbnails.medium.url" alt />
          <span class="duration">{{item.contentDetails.duration | duration}}</span>
          <a class="favorite" href @click.prevent="favoriteToggle(item.id, $event)">
            <i :class="isFavorite(item.id)"></i>
          </a>
        </div>
        <div class="card-bottom">
          <h3 class="ellipsis title">{{item.snippet.title}}</h3>
          <p class="ellipsis">{{item.snippet.description}}</p>
        </div>
      </div>
    </div>
    <Page
      class="pagination"
      :page-num="pageNumSelect"
      :current-page="currentPageSelect"
      :filter-page-num="filterPageNum"
      v-if="renderPageSelect.length > 0"
    ></Page>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import Page from "./Page";

export default {
  props: ["renderPageSelect", "pageNumSelect", "currentPageSelect","filterPageNum"],
  components: {
    Page
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions("HomeModule", ["getData"]),
    favoriteToggle(id, event) {
      this.$store.commit("CollectModule/FAVORITETOGGLE", { id, event });
    },
    isFavorite(id) {
      if (this.favoriteItemsId.includes(id)) {
        return "fas fa-heart";
      }
      return "far fa-heart";
    },
    itemPlay(item) {
      this.$store.commit("ItemPlayModule/SETITEM", item);
      this.$router.push(`/itemplay/${item.id}`);
    }
  },
  computed: {
    ...mapGetters(["isLoading"]),
    ...mapState("CollectModule", ["favoriteItemsId"])
  },
  watch: {},
  created() {
    this.getData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  padding-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 20px;
}
.singleItem {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  min-width: 0;
  max-width: 320px;
  margin: 20px;
  .card-top {
    position: relative;
    img {
      max-width: 320px;
      width: 100%;
      height: auto;
    }
    span {
      position: absolute;
      right: 5px;
      bottom: 7px;
      color: #fff;
      background-color: #000;
      font-size: 14px;
      padding: 2px;
      border-radius: 5px;
    }
    .favorite {
      position: absolute;
      right: 5px;
      top: 7px;
      font-size: 24px;
      color: red;
    }
  }
  .card-bottom {
    padding: 10px;
    .title {
      margin-bottom: 15px;
    }
  }
  &:hover {
    cursor: pointer;
  }
}
.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
}
.pagination {
  justify-content: center;
}

@media (max-width:1100px){
  .box{
    justify-content: center;
  }
}


</style>

