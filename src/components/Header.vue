<template>
  <div class="head">
    <div class="logo">
      <router-link to="/">一个购物网站</router-link>
    </div>
    <div class="login" v-if="type">
      <router-link to="/login" v-if="offline">登录</router-link>
      <span class="quit" v-else><span class="hello">你好，{{name}}</span><span class="logout" @click="doLogount">注销</span></span>
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
        offline: this.$store.state.offline,
        name: this.$store.state.username
      }
    },
    methods: {
      doLogount () {
        if (confirm('确定要注销吗')) {
          alert('注销成功')
          this.$store.state.offline = true
          this.$store.state.username = ''
          this.offline = true
          this.$router.push({ path: '/' })
          return
        }
        alert('保持登录状态')
      }
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
    font-size: 14px;
  }

  .hello {
    margin-right: 40px;
  }

  .logout {
    font-size: 12px;
  }

  .logout:hover {
    cursor: pointer;
  }
</style>