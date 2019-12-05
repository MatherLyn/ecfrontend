<template>
  <el-menu router :default-active="$route.path" active-text-color="#409EFF">
    <el-menu-item index="/analysis">
      <template slot="title"><i class="el-icon-s-platform"></i>分析报表</template>
    </el-menu-item>
    <el-menu-item index="/productlist">
      <template slot="title"><i class="el-icon-s-goods"></i>商品管理</template>
    </el-menu-item>
    <el-menu-item index="/orderlist">
      <template slot="title"><i class="el-icon-s-order"></i>订单日志</template>
    </el-menu-item>
    <el-menu-item index="/settings" style="position: absolute; bottom: 0; width: 100%;">
      <template slot="title"><i class="el-icon-s-tools"></i>个人设置</template>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  
</style>