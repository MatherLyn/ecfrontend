<template>
  <div class="popup">
    <div class="popup-form" @click="stopCapturing">
      <div class="close"><el-button icon="el-icon-close" circle class="close-btn" @click="popupClose"></el-button></div>
      <div class="header">新增产品</div>
      <div class="unit">
        <label class="popup-label" for="1">产品名称</label>
        <el-input
          placeholder="请输入内容"
          v-model="result.name"
          clearable
          id="1">
        </el-input>
      </div>
      <div class="unit">
        <label class="popup-label" for="2">产品价格</label>
        <el-input
          placeholder="请输入内容"
          v-model="result.price"
          clearable
          id="2">
        </el-input>
      </div>
      <div class="unit">
        <label class="popup-label" for="3">产品库存</label>
        <el-input
          placeholder="请输入内容"
          v-model="result.stock"
          clearable
          id="3">
        </el-input>
      </div>
      <div class="msg" :class="{'error': error}" v-show="msg">{{msg}}</div>
      <div class="unit">
        <el-button type="primary" class="submit-btn" @click="submit">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'type'
    ],
    data () {
      return {
        msg: '',
        error: false,
        result: {
          name: '',
          price: '',
          stock: ''
        }
      }
    },
    methods: {
      popupClose () {
        this.$emit('popupClose')
        document.body.style.overflow = 'auto'
      },
      stopCapturing () {
        // 防止点击form表单时事件冒泡触发关闭
        event.stopImmediatePropagation()
      },
      submit () {
        if (!this.result.name || !this.result.price || !this.result.stock) {
          this.error = true
          this.msg = '信息不能为空！'
          return
        }
        this.axios.post('/api/addProduct', this.result)
        .then(response => {
          if (response.data.code) {
            this.error = false
            this.$emit('updateList')
          } else {
            this.error = true
          }
          this.msg = response.data.data
        })
      }
    }
  }
</script>

<style scoped>
  .popup-label {
    text-align: left;
    margin: 20px 0 10px;
    font-size: 14px;
    line-height: 14px;
    color: #333;
  }

  .popup {
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: #00000050;
    left: 0;
    top: 0;
    z-index: 6;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .popup-form {
    width: 450px;
    background-color: #fff;
    border-radius: 5px;
    padding: 30px;
    box-sizing: border-box;
  }

  .close {
    display: flex;
    flex-direction: row-reverse;
  }

  .close-btn {
    width: 20px;
    height: 20px;
    padding: 0 !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header {
    font-size: 20px;
    color: #333;
  }

  .msg {
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: -20px;
    color: #333;
  }

  .error {
    color: red;
  }

  .submit-btn {
    margin-top: 40px;
    width: 100%;
  }
</style>