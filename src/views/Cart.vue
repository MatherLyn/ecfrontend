<template>
  <div>
    <el-container>
      <el-header>
        <Header :type="1"/>
      </el-header>
      <el-main>
        <div class="header">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>购物车</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="cart">
          <div class="breadcrumb">
            <el-steps :active="2" simple style="background-color: #fff;">
              <el-step title="浏览/查询" icon="el-icon-s-order"></el-step>
              <el-step title="添加购物车" icon="el-icon-s-goods"></el-step>
              <el-step title="完成购买" icon="el-icon-s-claim"></el-step>
            </el-steps>
          </div>
          <el-tabs v-model="cart" class="tab">
            <el-tab-pane label="我的购物车" name="cart">
              <span slot="label"><i class="el-icon-shopping-cart-full"></i> 我的行程</span>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import Header from '../components/Header'
  export default {
    data () {
      return {
        
      }
    },
    methods: {

    },
    components: {
      Header
    }
  }
</script>

<style scoped>
  .cart {
    margin-top: 20px;
    background-color: #fff;
    padding: 20px;
  }

  .breadcrumb {
    width: 800px;
    float: right;
    overflow: hidden;
  }

  .tab {
    margin-top: 46px;
  }
</style>