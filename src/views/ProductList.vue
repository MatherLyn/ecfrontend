<template>
  <div>
    <el-container style="height: 100vh;">
      <el-header style="text-align: right; font-size: 12px">
        <div class="head">拼少少后台管理系统</div>
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
      <el-container style="height: calc(100vh - 60px); margin-top: 60px; padding-top: 2px;">
        <el-aside width="200px" style="background: transparent">
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
            <el-menu-item index="/settings" style="position: absolute; bottom: 0; width: 100%; z-index: 2; background: #fff;">
              <template slot="title"><i class="el-icon-s-tools"></i>个人设置</template>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="id" label="编号" fixed="left"></el-table-column>
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column prop="price" label="价格"></el-table-column>
            <el-table-column prop="stock" label="库存"></el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableData: [],
      }
    },
    methods: {

    },
    created() {
      this.axios.get('/api/productList')
      .then(response => {
        this.tableData = response.data.data
      })
    },
  }
</script>

<style scoped>
  
</style>