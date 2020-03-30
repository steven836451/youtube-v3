<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <router-link to="/hellowworld">
          <i class="fab fa-youtube fa-3x"></i>
          <h2>Youtube</h2>
        </router-link>
      </div>

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
  display: flex;
}
.header {
  background-color: #fff;
  position: fixed;
  width: 100%;
  height: 60px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  line-height: 60px;
  margin-bottom: 20px;
  z-index: 10;
}
.logo {
  a {
    display: flex;
    text-decoration: none;
    color :#000;
  }
  .fa-youtube {
    color: red;
    line-height: 60px;
  }
  h2 {
      display: inline-block;
      margin-left: 5px;
    }
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
      // background-color: rgb(197, 197, 197);
      font-weight: bold;
    }
  }
}
</style>