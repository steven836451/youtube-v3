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
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import RenderContent from "./RenderContent";

export default {
  name: "HelloWorld",
  components: {
    RenderContent
  },
  data() {
    return {};
  },
  methods: {
    // ...mapActions("HomeModule", ["getData"])
  },
  computed: {
    ...mapGetters("HomeModule", ["renderPage", "allPageNum"]),
    ...mapState("HomeModule", ["currentPage"]),
    renderPageSelect() {
      return this.renderPage;
    },
    renderPageNum() {
      return this.allPageNum;
    },
    filterPageNum() {
      const filterNum =[];
      if(this.currentPage-2<=1){
        for(var i=1;i<6;i++){
          filterNum.push(i)
        }
      }
      else if(this.currentPage+2>=this.allPageNum){
        for (var i=this.allPageNum-4;i<this.allPageNum+1;i++){
          filterNum.push(i)
        }
      }
      else{
        for(var i=this.currentPage-2;i<this.currentPage+3;i++){
          filterNum.push(i)
        }
      }
      return filterNum
    },
    currentPageSelect() {
      return this.currentPage;
    }
  },
  created() {
    // this.getData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
