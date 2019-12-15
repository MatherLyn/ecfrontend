<template>
  <div class="head">
    <div class="logo">
      <router-link to="/">一个购物网站</router-link>
    </div>
    <div class="login" v-if="type">
      <router-link to="/login" v-if="offline">登录</router-link>
      <span class="quit" v-else>注销</span>
    </div>
     <!-- v-if="type" -->
  </div>
</template>

<script>
  export default {
    props: [
      "type"
    ],
    data () {
      return {
        offline: this.$store.state.offline
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .head {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: left;
    padding: 0 40px;
    background-color: rgb(80, 80, 100);
    box-sizing: border-box;
    display: flex;
  }

  .head > div > a {
    color: #fff;
  }

  .logo {
    width: 50%;
    text-align: left;
  }

  .login {
    width: 50%;
    text-align: right;
  }

  .quit {
    color: #fff;
  }

  .quit:hover {
    cursor: pointer;
  }
</style>