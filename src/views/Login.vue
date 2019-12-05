<template>
  <div>
    <Header />
    <main class="register">
      <div class="form">
        <div class="form-item">
          <div class="form-head">登录</div>
        </div>
        <div class="form-item">
          <label for="username">用户名</label>
          <el-input type="text" id="username" prefix-icon="el-icon-user" v-model="result.result"></el-input>
        </div>
        <div class="form-item">
          <label for="password">密码</label>
          <el-input type="password" id="password" prefix-icon="el-icon-lock" v-model="result.password"></el-input>
        </div>
        <div class="form-item">
          <el-button type="primary" class="submit-button">提交</el-button>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  export default {
    data () {
      return {
        result: {
          username: '',
          password: '',
          email: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    },
    components: {
      Header,
      Footer
    }
  }
</script>

<style scoped>
  .register {
    background: url(../assets/timg.jpg) no-repeat;
    background-size: cover;
    position: relative;
    padding: 100px;
    box-sizing: border-box;
  }
</style>