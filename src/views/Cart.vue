<template>
  <div>
    <el-container>
      <el-header>
        <Header :type="true"/>
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
            <el-tab-pane>
              <span slot="label"><i class="el-icon-shopping-cart-full"></i> 我的购物车</span>
            </el-tab-pane>
          </el-tabs>
          <el-table
            :data="cart"
            >
            <el-table-column
              prop="id"
              label="订单编号"
              >
            </el-table-column>
            <el-table-column
              prop="commodity"
              label="商品名称"
              >
            </el-table-column>
            <el-table-column
              prop="price"
              label="商品单价"
              >
            </el-table-column>
            <el-table-column
              prop="quantity"
              label="购买数量"
              >
            </el-table-column>
            <el-table-column
              prop="totalPrice"
              label="商品总价"
              >
            </el-table-column>
            <el-table-column
              label="操作"
              fixed="right">
              <template slot-scope="scope">
                <el-button @click="handleCheck(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small" @click="handleDelete">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="submit">
            <el-button type="primary" @click="doSubmit">确认购买</el-button>
            <el-button type="normal" @click="$router.push({ path:'/' })">继续购物</el-button>
          </div>
        </div>
      </el-main>
    </el-container>
    <Tips :content="msg" v-if="successful"/>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Tips from '../components/Tips'
  export default {
    data () {
      return {
        cart: [],
        successful: false,
        msg: ''
      }
    },
    methods: {
      handleCheck (row) {
        console.log(row)
      },
      handleDelete () {

      },
      doSubmit () {
        this.axios.get(`/api/buy?username=${this.$store.state.username}`)
        .then(response => {
          if (response.data.code) {
            this.successful = true
            this.msg = response.data.msg
            setTimeout(() => {
              this.successful = false
            }, 3000);
          }
        })
      }
    },
    components: {
      Header,
      Tips
    },
    created () {
      const token = this.$store.state.token
      this.axios.get('/api/order', { headers: { 'Authorization': `Bearer ${token}` } })
      .then(response => {
        const responseData = response.data
        if (responseData.code) {
          this.cart = responseData.data.map(item => {
            item.price = `￥ ${item.price}`
            item.totalPrice = `￥ ${item.totalPrice}`
            return item
          })
          console.log(this.cart)
        }
      })
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

  .submit {
    margin-top: 40px;
    text-align: right;
  }

  @media screen and (max-width: 1000px) {
    .breadcrumb {
      width: 600px;
    }

    .el-steps {
      padding: 0 48px !important;
    }

    .tab {
      margin-top: 20px;
    }
  }

</style>