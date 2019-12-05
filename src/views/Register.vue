<template>
  <div>
    <el-container>
      <el-header style="text-align: right; font-size: 12px;">
        <div class="head">拼少少</div>
        <div style="margin-right: 20px;">为确保您账户的安全及正常使用，依《网络安全法》相关要求，6月1日起会员账户需绑定手机。如您还未绑定，请尽快完成，感谢您的理解及支持！</div>
      </el-header>
      <div class="register">
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
            <label for="email">电子邮箱</label>
            <el-input type="email" id="email" prefix-icon="el-icon-message" v-model="result.email"></el-input>
          </div>
          <div class="form-item">
            <el-button type="primary" class="submit-button">提交</el-button>
          </div>
        </div>
      </div>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
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
    }
  }
</script>

<style scoped>
  .register {
    width: 100vw;
    background: url(../assets/timg.jpg) no-repeat;
    background-size: cover;
    position: relative;
    padding: 100px;
    box-sizing: border-box;
  }
</style>