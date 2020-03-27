<template>
  <div>
    <RenderContent
      :render-page-select="renderPageSelect"
      :page-num-select="renderPageNum"
      :current-page-select="currentPageSelect"
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
    ...mapActions("HomeModule", ["getData"])
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
    currentPageSelect() {
      return this.currentPage;
    }
  },
  created() {
    this.getData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
