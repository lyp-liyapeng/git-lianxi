<template>
  <div class="my-menu">
      <!-- 
          el-menu：导航菜单
              default-active：default-active	当前激活菜单的 index
              collapse	是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）	boolean	—	false
              background-color	菜单的背景色（仅支持 hex 格式）	string	—	#ffffff
              text-color	菜单的文字颜色（仅支持 hex 格式）	string	—	#303133
              active-text-color	当前激活菜单的文字颜色（仅支持 hex 格式）	string	—	#409EFF
              router	是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转

          el-menu-item：导航项目
          el-submenu：下拉列表

       -->
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo" :collapse="isCollapse" background-color="#112f50"
          text-color="#fff" router>
          <el-menu-item index="" >
              <span slot="title">商城后台管理系统</span>
          </el-menu-item>
          <el-menu-item index="/">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="/product">
              <template slot="title">
                  <i class="el-icon-s-cooperation"></i>
                  <span slot="title">产品管理</span>
              </template>
              <el-menu-item-group>
                  <el-menu-item index="/product/list"><i class="el-icon-tickets"></i> 产品列表</el-menu-item>
                  <el-menu-item index="/product/category"><i class="el-icon-tickets"></i>产品分类</el-menu-item>
              </el-menu-item-group>
          </el-submenu>
          <el-submenu index="/order">
              <template slot="title">
                  <i class="el-icon-s-cooperation"></i>
                  <span slot="title">订单管理</span>
              </template>
              <el-menu-item-group>
                  <el-menu-item index="/order/orderlist"><i class="el-icon-tickets"></i>订单列表</el-menu-item>
                  <el-menu-item index="/order/collect"><i class="el-icon-tickets"></i>汇总清单</el-menu-item>
                  <el-menu-item index="/order/check"><i class="el-icon-tickets"></i>订单审核</el-menu-item>
              </el-menu-item-group>
          </el-submenu>
          <el-submenu index="/adv">
              <template slot="title">
                  <i class="el-icon-s-cooperation"></i>
                  <span slot="title">广告分类</span>
              </template>
              <el-menu-item-group>
                  <el-menu-item index="/adv/advlist"><i class="el-icon-tickets"></i>广告列表</el-menu-item>
              </el-menu-item-group>
          </el-submenu>
          
      </el-menu>
  </div>
</template>

<script>
export default {
  data() {
      return {
        //   isCollapse: false
      };
    },
  props:['isCollapse']

}
</script>

<style lang="less" scoped>
.el-menu {
  border-right: none;
//   width: 200px;
  position: fixed;
  top: 0;
  bottom: 0;
}
.is-active{
  color: #fff !important;
  background-color: #1e78bf !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>