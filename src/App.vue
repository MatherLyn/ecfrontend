<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    
  },
  data() {
    return {
      
    }
  }
};
</script>

<style>
  body {
    margin: 0;
  }

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .el-header {
    background-color: #FFEEEE;
    color: #333;
    line-height: 60px;
    box-shadow: 0px 4px 4px #EEEEEE;
    position: fixed;
    z-index: 2;
    width: 100%;
  }

  .head {
    float: left;
    font-size: 20px;
  }
  
  .el-aside {
    color: #333;
  }

  .el-main {
    text-align: left;
  }

  .el-col {
    text-align: center;
  }

  .el-menu {
    height: 100%;
  }
</style>
