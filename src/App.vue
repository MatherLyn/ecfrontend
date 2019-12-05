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
    max-width: 1920px;
  }

  label {
    display: block;
    text-align: left;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 14px;
    color: white;
  }

  input {
    display: block;
    width: 100%;
    outline: none;
    line-height: 24px;
    font-size: 16px;
    padding: 4px;
    box-sizing: border-box;
  }

  .form {
    width: 400px;
    padding: 40px;
    border-radius: 4px;
    background: rgba(3, 3, 3, .3);
  }

  .form-head {
    font-size: 20px;
    text-align: left;
    font-weight: 500;
    color: white;
  }

  .form-item {
    margin-bottom: 20px;
  }

  .form-item:last-of-type {
    margin-bottom: 0;
    margin-top: 40px;
  }

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .el-header {
    color: #333;
    line-height: 60px;
    height: 60px;
    z-index: 2;
    width: 100%;
    background: rgb(237, 244, 253);
    border-bottom: 1px solid rgb(225, 236, 243);
  }

  .head {
    float: left;
    font-size: 20px;
  }

  .submit-button {
    width: 100%;
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
