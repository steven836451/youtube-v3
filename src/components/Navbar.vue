<template>
    <div class="header">
      <div class="container">
      <h2>Youtube</h2>
      <nav class="nav">
        <router-link to="/helloworld">首頁</router-link>
        <router-link to="/collect">我的最愛</router-link>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  max-width: 1440px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}
.header {
  background-color: #fff;
  position: fixed;
  width: 100%;
  height: 60px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  line-height: 60px;
  margin-bottom: 20px;
  z-index: 10;
}
h2 {
  display: inline-block;
  margin-left: 26px;
}
.nav {
  margin-left: 26px;
  display: inline-block;
  font-size: 0;
  a {
    margin: 10px;
    color: #000;
    font-size: 18px;
    text-decoration: none;
    padding: 10px;
    &:hover {
      background-color: rgb(197, 197, 197);
    }
  }
}

</style>