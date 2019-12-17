<template>
  <el-container style="color: #333; background-color: rgb(245, 245, 250)">
    <el-header>
      <Header :type="true"/>
    </el-header>
    <el-main>
      <div class="filter">
        <el-input placeholder="请输入想要查找的商品" v-model="filter" clearable>
          <el-select v-model="select" slot="prepend" placeholder="请选择" class="filter-select">
            <el-option label="商品名称" value="1"></el-option>
            <el-option label="商品ID" value="2"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="doFilter">搜索</el-button>
        </el-input>
      </div>
      <div class="product-list" style="display: flex; flex-wrap: wrap;">
        <div v-for="item in showTable" :key="item.id" class="item" @click="$router.push({ path: '/info', query: {itemId: item.id} })">
          <div class="img-container">
            <img src="../assets/airjordanbasketball-1.jpg" alt="商品图片" class="item-img">
          </div>
          <div class="item-info">
            <div class="item-name">{{item.name}}</div>
            <div class="item-price">￥{{item.price}}</div>
          </div>
        </div>
      </div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="length">
      </el-pagination>
    </el-main>
  </el-container>
</template>

<script>
  import Header from '../components/Header'
  export default {
    data () {
      return {
        productList: [],
        filter: '',
        select: '',
        showTable: [],
        pageSize: 10,
        curPage: 1,
        length: 0
      }
    },
    methods: {
      doFilter () {
        if (!this.select || !this.filter) {
          this.showTable = this.productList
          this.length = this.productList.length
          return
        }
        this.curPage = 1
        if (this.select == 1) {
          this.showTable = this.productList.filter(item => {
            return item.name.toLowerCase().includes(this.filter.toString().toLowerCase())
          })
          this.length = this.showTable.length
          return
        }
        if (this.select == 2) {
          this.filter = parseInt(this.filter)
          if (this.filter === NaN) {
            this.showTable = []
            this.length = this.showTable.length
            return
          }
          const index = this.filter - 1
          if (!this.productList[index]) {
            this.showTable = []
            this.length = this.showTable.length
            return
          }
          this.showTable = this.productList.slice(index, this.filter)
          this.length = this.showTable.length
          return
        }
      },
      handleSizeChange (val) {
        this.pageSize = val
        this.showTable = this.productList.slice(this.start, this.end)
      },
      handleCurrentChange (val) {
        this.curPage = val
        this.showTable = this.productList.slice(this.start, this.end)
      }
    },
    components: {
      Header
    },
    computed: {
      start () {
        return (this.curPage - 1) * this.pageSize
      },
      end () {
        return this.curPage * this.pageSize
      }
    },
    created () {
      this.axios.get('/api/productList').then(response => {
        const responseData = response.data
        if (responseData.code) {
          this.productList = responseData.data
          this.showTable = this.productList.slice(this.start, this.end)
          this.length = this.productList.length
        } else {
          alert(responseData.msg)
        }
      })
    }
  }
</script>

<style scoped>
  .logo {
    width: 50%;
    text-align: left;
    box-sizing: border-box;
    padding: 20px;
    line-height: 20px;
  }

  .login {
    width: 50%;
    text-align: right;
    box-sizing: border-box;
    padding: 20px;
    padding-right: 40px;
    line-height: 20px;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
  }

  .filter {
    display: flex;
    padding: 10px;
  }

  .filter-select {
    width: 130px;
  }

  .item {
    width: calc(20% - 40px);
    margin: 9px;
    border: 1px solid #bbb;
    display: flex;
    flex-direction: column;
    padding: 10px;
    transition: .2s;
  }

  .item:hover {
    cursor: pointer;
    border-color: rgb(50, 50, 100);
  }

  .img-container {
    width: 100%;
    overflow: hidden;
  }

  .item-img {
    width: 100%;
    margin-top: -24px;
  }

  .item-info {
    display: flex;
    flex-direction: column;
  }

  .item-name {
    width: 100%;
    line-height: 30px;
    text-align: center;
  }

  .item-price {
    color: rgb(50, 50, 100);
    font-weight: 600;
    width: 100%;
    line-height: 30px;
    text-align: center;
  }
</style>