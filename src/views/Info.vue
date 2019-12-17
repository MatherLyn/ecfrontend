<template>
  <div>
    <el-container>
      <el-header style="height: auto;">
        <Header :type="true"/>
        <div class="store">
          <img src="../assets/shop.jpg" alt="店铺" class="store-logo">
          <span class="store-name">一家自营店</span>
        </div>
      </el-header>
      <el-main style="padding: 40px 0;">
        <div class="item">
          <img src="../assets/airjordanbasketball-1.jpg" alt="" class="item-img">
          <div class="item-info">
            <div class="item-clause"><span>编号：</span>{{item.id}}</div>
            <div class="item-clause"><span>名称：</span>{{item.name}}</div>
            <div class="item-clause"><span>价格：</span>￥{{item.price}}</div>
            <div class="item-clause"><span>库存：</span>剩余 {{item.stock}} 件</div>
            <div class="item-clause"><span>数量：</span>
              <el-input v-model="number" @input="handleChange" style="width: 80px; margin-right: 20px;" class="number-input"></el-input>
              <el-button type="primary" icon="el-icon-plus" style="padding: 9px 16px;" @click="handleNumberPlus"></el-button>
              <el-button icon="el-icon-minus" style="padding: 9px 16px;" @click="handleNumberMinus"></el-button>
            </div>
            <div class="item-clause"><span>总价：</span>￥{{totalPrice}}</div>
            <div class="button-container">
              <button class="buy" @click="$router.push({ path: '/pay' })">立即购买</button>
              <button class="cart" @click="addToCart">加入购物车</button>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import Header from '../components/Header';
  export default {
    data () {
      return {
        msg: '',
        item: {},
        number: 1,
        order: {}
      }
    },
    methods: {
      handleChange () {
        if (/\D/.test(this.number)) {
          console.log(12123)
          this.number = 1
          return
        }
        if (this.number >= this.item.stock) {
          this.number = this.item.stock
        }
        if (this.number < 1) {
          this.number = 1
        }
      },
      handleNumberPlus () {
        if (this.number >= this.item.stock) {
          return
        }
        this.number++
      }, 
      handleNumberMinus () {
        if (this.number === 1) {
          return
        }
        this.number--
      },
      addToCart () {
        this.order.commodity = this.item.name
        this.order.price = this.item.price
        this.order.quantity = this.number
        this.order.totalPrice = this.totalPrice
        this.order.Customer = this.$store.state.username
        this.axios.post('/api/placeOrder', this.order, { headers: { 'Authorization': `Bearer ${this.$store.state.token}` } })
        .then(response => {
          console.log(response)
          this.$router.push({ path: '/cart' })
        })
      }
    },
    created () {
      this.axios.get(`/api/product?itemId=${this.$route.query.itemId}`).then(res => {
        if (res.data.code) {
          this.item = res.data.data[0]
          console.log(this.item)
        } else {
          this.msg = res.data.msg
        }
      })
    },
    components: {
      Header
    },
    computed: {
      totalPrice () {
        return this.item.price * this.number
      }
    }
  }
</script>

<style scoped>
  .store {
    border-bottom: 1px solid #bbb;
    padding: 10px 0;
    background-color: rgb(246, 246, 246);
    display: flex;
    justify-content: center;
  }

  .store-logo {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  .store-name {
    line-height: 40px;
    font-weight: 600;
  }

  .item {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    font-weight: 500;
    font-size: 20px;
  }

  @media screen and (max-width: 1100px) {
    .item {
      width: 800px;
    }
  }

  @media screen and (max-width: 900px) {
    .item {
      width: 600px;
    }
  }

  .item-img {
    width: 300px;
  }

  .item-info {
    width: calc(100% - 40px);
    padding: 0 20px;
    position: relative;
  }

  .item-clause {
    line-height: 52px;
  }

  .number-input > input {
    height: 34px;
  }

  .button-container {
    display: flex;
    position: absolute;
    bottom: 0;
    width: calc(100% - 40px);
  }

  .button-container > button {
    width: calc(50% - 5px);
    border: 1px solid rgb(64, 158, 255);
    box-sizing: border-box;
    font-size: 14px;
    line-height: 14px;
    padding: 14px 0;
    outline: none;
  }

  .button-container > button:hover {
    cursor: pointer;
  }

  .buy {
    margin-right: 10px;
    background-color: rgb(64, 158, 255);
    color: #fff;
  }

  .buy:hover {
    background-color: rgb(44, 138, 255);
  }

  .cart {
    background-color: rgb(237, 237, 255);
    color: rgb(64, 158, 255);
  }

  .cart:hover {
    background-color: rgb(245, 245, 255);
  }
</style>