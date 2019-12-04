<template>
  <div id="app">
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu router :default-openeds="['1', '3']">
            <el-menu-item index="/orderlist">
              <template slot="title"><i class="el-icon-document-checked"></i>订单管理</template>
            </el-menu-item>
            <el-menu-item index="/settings">
              <template slot="title"><i class="el-icon-setting"></i>个人设置</template>
            </el-menu-item>
          </el-menu>
        </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
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
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
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
</style>
