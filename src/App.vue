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
    min-width: 900px;
    background-color: rgb(245, 247, 250);
  }

  label {
    display: block;
    text-align: left;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 14px;
    color: #fff;
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

  a {
    color: #333;
    text-decoration: none;
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
    margin-top: 30px;
  }

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .el-header {
    padding: 0 !important;
    width: 100%;
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
  
  .el-pagination {
    margin-top: 20px;
    text-align: right;
    padding-top: 2rem;
  }

  .el-tabs__nav-scroll {
    padding-left: 20px;
    
  }

  .el-tabs__nav-wrap::after {
    
  }

  .el-tabs__item {
    color: rgb(64, 158, 255) !important;
    letter-spacing: 1px !important;
    font-weight: 600 !important;
    font-size: 16px !important;
  }
</style>
