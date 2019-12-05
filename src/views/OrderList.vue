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
          <div class="title">
            <el-dropdown @command="handleCommand">
              <el-button type="primary">
                {{curCheck}}<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="id">编号</el-dropdown-item>
                <el-dropdown-item command="name">名称</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-input
              placeholder="请输入想要查找的键名"
              v-model="checkValue"
              label="编号"
              clearable
              class="product-input">
            </el-input>
            <el-button type="primary" icon="el-icon-search" @click="doFilter">查找</el-button>
          </div>
          <el-table :data="showData">
            <el-table-column prop="id" label="编号" fixed="left"></el-table-column>
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column prop="price" label="价格"></el-table-column>
            <el-table-column prop="stock" label="库存"></el-table-column>
            <el-table-column
              fixed="right"
              prop="manipulation"
              label="操作">
              <template slot-scope="scope">
                <el-button @click="checkItem(scope.row)" type="text" size="small">查看</el-button>
                <el-button @click="modifyItem(scope.row)" type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="10"
            layout="sizes, prev, pager, next"
            :total="length"
          ></el-pagination>
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
        curCheck: '编号',
        check: 'id',
        checkValue: '',
        search: '',
        tableData: [],
        showData: [],
        popup: false,
        showId: '',
        showType: '',
        showModel: '',
        showStock: '',
        showMsg: '',
        curSize: 10,
        curPage: 1,
        filtering: false,
        showPopup: false
      }
    },
    methods: {
      handleCommand (command) {
        switch (command) {
          case 'id': {
            this.curCheck = '编号'
            break;
          }
          case 'name': {
            this.curCheck = '名称'
            break;
          }
        }
        this.check = command
      },
      doFilter () {
        this.handleCurrentChange(this.curPage)
        this.filtering = true
        this.search = this.checkValue
        if (!this.search) {
          this.filtering = false
          return
        }
        this.showData = this.tableData.filter(item => {
          return item[this.check].toString().toLowerCase().includes(this.search.toString().toLowerCase())
        })
        this.filtering = true
      },
      filterType (value, row, column) {
        const property = column['property']
        return row[property] === value
      },
      checkItem (row) {
        const id = parseInt(row.id)
        // this.axios.get(`/api/     id=${id}`)
        // .then(response => {
        //   const responseData = response.data
        //   if (!responseData.code) {
        //     this.showMsg = responseData.status
        //     return
        //   }
        //   this.showMsg = ''
        //   this.showId = responseData.id
        //   this.showType = responseData.type
        //   this.showModel = responseData.model
        //   this.showStock = responseData.stock
        //   this.popup = true
        // })
      },
      modifyItem (row) {
        this.workPiece.id = parseInt(row.id)
        this.workPiece.type = row.type
        this.workPiece.model = row.model
        this.workPiece.stock = parseInt(row.stock)
        console.log(this.workPiece)
        // this.axios.post('/api/workpiece/append', this.workPiece)
        // .then(response => {
        //   console.log(response)
        // })
      },
      handleSizeChange (val) {
        this.curSize = val
        const start = (this.curPage - 1) * val
        this.showData = this.tableData.slice(start, start + val)
      },
      handleCurrentChange (val) {
        this.curPage = val
        const start = (val - 1) * this.curSize
        this.showData = this.tableData.slice(start, start + this.curSize)
      },
      showPopupState () {
        this.showPopup = true
      },
      closePopup () {
        this.showPopup = false
      }
    },
    computed: {
      length () {
        if (this.filtering) return this.showData.length
        return this.tableData.length
      }
    },
    created() {
      this.axios.get('/api/productList')
      .then(response => {
        this.tableData = response.data.data
        this.showData = response.data.data
      })
    },
    components: {
      Header,
      Menu
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
    margin-bottom: 2rem;
  }

  .product-input {
    margin: 0 2rem;
  }
</style>