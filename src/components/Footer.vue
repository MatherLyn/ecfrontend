<template>
  <div class="foot">
    <div>一个购物网站</div>
  </div>
</template>

<script>
  export default {
    props: [
      "type"
    ],
    data () {
      return {
        
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .foot {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: left;
    padding: 0 40px;
    background-color: rgb(80, 80, 100);
    color: #fff;
    box-sizing: border-box;
  }
</style>