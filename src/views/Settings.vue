<template>
  <div>
    <el-container style="height: 100vh;">
      <el-header style="text-align: right; font-size: 12px">
        <div class="head">拼少少后台管理系统</div>
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
      <el-container style="height: calc(100vh - 60px); margin-top: 60px; padding-top: 2px;">
        <el-aside width="200px" style="background: transparent">
          <el-menu router :default-active="$route.path" active-text-color="#409EFF">
            <el-menu-item index="/analysis">
              <template slot="title"><i class="el-icon-s-platform"></i>分析报表</template>
            </el-menu-item>
            <el-menu-item index="/productlist">
              <template slot="title"><i class="el-icon-s-goods"></i>商品管理</template>
            </el-menu-item>
            <el-menu-item index="/orderlist">
              <template slot="title"><i class="el-icon-s-order"></i>订单日志</template>
            </el-menu-item>
            <el-menu-item index="/settings" style="position: absolute; bottom: 0; width: 100%;">
              <template slot="title"><i class="el-icon-s-tools"></i>个人设置</template>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <el-main>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动时间">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="即时配送">
              <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源">
              <el-radio-group v-model="form.resource">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
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
</style>