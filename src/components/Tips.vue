<template>
  <div class="tips-page">
    <div class="tips">
      <Yes />
      <div class="content">{{content}}</div>
    </div>
  </div>
</template>

<script>
  import Yes from '../components/Yes'
  export default {
    props: [
      'content'
    ],
    data () {
      return {
        
      }
    },
    methods: {

    },
    components: {
      Yes
    }
  }
</script>

<style scoped>
  .tips-page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(30, 30, 30, .2);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3000;
  }

  .tips {
    height: 30px;
    border-radius: 4px;
    background-color: rgb(240, 240, 240);
    padding: 20px 60px;
    line-height: 30px;
    font-size: 20px;
    overflow: hidden;
  }

  .content {
    float: left;;
    margin-left: 10px;
    line-height: 30px;
    font-size: 18px;
  }
</style>