<template>
  <div>
    <el-container style="height: 100vh;">
      <el-header>
        <Header />
      </el-header>
      <el-container style="padding-top: 2px;">
        <el-aside width="200px" style="background: transparent">
          <Menu />
        </el-aside>
        
        <el-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Menu from '../components/Menu'
  export default {
    data () {
      return {
        
      }
    },
    methods: {

    },
    components: {
      Header,
      Menu
    }
  }
</script>

<style scoped>
  
</style>