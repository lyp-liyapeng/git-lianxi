import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 导入组件
import Layout from '@/views/Layout/Index.vue';
import Login from '@/views/Login/Index.vue';
import Home from '@/views/Home/Index.vue';

// 异步组件
// 产品管理
const Product = () => import("@/views/Product/Product.vue")
const List = () => import("@/views/Product/List/List.vue")
const Category = () => import("@/views/Product/Category/Category.vue")

// 订单管理
const Order = () => import("@/views/Order/Order.vue")
const OrderList = () => import("@/views/Order/OrderList/OrderList.vue")
const Collect = () => import("@/views/Order/Collect/Collect.vue")
const Check = () => import("@/views/Order/Check/Check.vue")

// 广告分类
const Adv = () => import("@/views/Adv/Adv.vue")
const AdvList = () => import("@/views/Adv/AdvList/AdvList.vue")


// 系统管理
const System = () => import("@/views/System/System.vue")
const Role = () => import("@/views/System/Role/Role.vue")
const Department = () => import("@/views/System/Department/Department.vue")

// 配置路由
const routes = [
  {
    path: "/",
    name: 'layout',
    component: Layout,
    // 二级路由
    children: [
      {
        path: '/',
        // name: 'home',
        component: Home
      },
      {
        path: '/product',
        name: 'product',
        component: Product,
        // 三级路由
        children: [
          {
            path: "list",// /product/list
            name: "list",
            component: List
          },
          {
            path: "category",
            name: "category",
            component: Category
          },

        ]
      },
      {
        path: '/order',
        name: 'order',
        component: Order,
        children: [
          {
            path: "orderlist",
            name: "orderlist",
            component: OrderList
          },
          {
            path: "collect",
            name: "collect",
            component: Collect
          },
          {
            path: "check",
            name: "check",
            component: Check
          },
        ]
      },
      {
        path: '/adv',
        name: 'adv',
        component: Adv,
        children:[
          {
            path:'advlist',
            name:'advlist',
            component:AdvList
          }
        ]
      },
      {
        path: '/system',
        name: 'system',
        component: System,
        children:[
          {
            path:'role',
            name:'role',
            component:Role
          },
          {
            path:'department',
            name:'department',
            component:Department
          },
        ]
      },

    ]
  },
  {
    path: "/login",
    name: 'login',
    component: Login
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router