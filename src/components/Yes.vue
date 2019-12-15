<template>
  <div class="container">
    <div class="hook"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .container {
    position: relative;
    float: left;
    width: 30px;
    height: 30px;
    background-color: rgb(64, 158, 255);
    border-radius: 50%;
    border-top: .1px solid transparent;
  }

  .hook {
    width: 18px;
    height: 9px;
    margin-top: 8px;
    margin-left: 5px;
    transform: rotate(-45deg);
    overflow: hidden;
  }

  .hook::before, .hook::after {
    position: absolute;
    content: "";
    background-color: #fff;
  }

  .hook::before {
    left: 0;
    bottom: 0;
    width: 2px;
    height: 9px;
    animation: leftHook .5s linear 0s 1 both;
  }

  .hook::after {
    left: 0;
    bottom: 0;
    width: 18px;
    height: 2px;
    animation: bottomHook .5s linear .5s 1 both;
  }

  @keyframes leftHook {
    0% {top: -100%;}
    100% {top: 0;}
  }

  @keyframes bottomHook {
    0% {left: -100%;}
    100% {left: 0;}
  }
</style>