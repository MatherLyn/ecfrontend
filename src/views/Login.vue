<template>
  <div>
    <Header :type="false"/>
    <main class="register">
      <div class="form">
        <div class="form-item">
          <div class="form-head">登录</div>
        </div>
        <div class="form-item">
          <label for="username">用户名</label>
          <el-input type="text" id="username" prefix-icon="el-icon-user" v-model="user.name"></el-input>
        </div>
        <div class="form-item">
          <label for="password">密码</label>
          <el-input type="password" id="password" prefix-icon="el-icon-lock" v-model="user.password"></el-input>
        </div>
        <div class="form-item" style="overflow: hidden;">
          <router-link to="/register" style="float: left; color: black;">注册账号</router-link>
          <router-link to="/modifypassword" style="float: right; color: black;">忘记密码？</router-link>
        </div>
        <div class="form-item" style="margin-bottom: 0;" v-show="msg">
          <span class="tips">* </span><span>{{msg}}</span>
        </div>
        <div class="form-item">
          <el-button type="primary" class="submit-button" @click="onSubmit">提交</el-button>
        </div>
      </div>
    </main>
    <Footer :type="true"/>
    <Tips :content="'登录成功'" v-if="successful"/>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  import Tips from '../components/Tips'
  export default {
    data () {
      return {
        user: {
          name: '',
          password: ''
        },
        msg: '',
        successful: false
      }
    },
    methods: {
      onSubmit() {
        this.axios.post('/api/login', this.user)
        .then(response => {
          const responseData = response.data
          if (responseData.code) {
            this.$store.state.token = responseData.token
            this.$store.state.offline = false
            this.successful = true
            setTimeout(() => {
              this.$router.push({ path: '/analysis' })
            }, 2000);
          } else {
            this.msg = responseData.msg
          }
        })
      }
    },
    components: {
      Header,
      Footer,
      Tips
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

  .tips {
    color: #ff4040;
  }
</style>