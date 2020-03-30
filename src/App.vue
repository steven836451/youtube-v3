<template>
  <div>
    <div class="content">
      <Navbar></Navbar>
      <router-view />
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
.content{
  min-height: calc(100vh - 130px);
}
</style>
