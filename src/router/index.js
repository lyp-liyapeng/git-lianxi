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
const  Redact =() => import('@/views/Product/List/Redact.vue')

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
    component: Layout
    ,
    meta: {
      tit: '布局'
    },
    // 二级路由
    children: [
      {
        path: '/',
        // name: 'home',
        component: Home,
        meta: {
          tit: '首页'
        }
      },
      {
        path: '/product',
        name: 'product',
        component: Product
        ,
        meta: {
          tit: '产品管理'
        },

        // 三级路由
        children: [
          {
            path: "list",// /product/list
            name: "list",
            component: List,
            meta: {
              tit: '产品表格'
            }
          },
          {
            path: "category",
            name: "category",
            component: Category,
            meta: {
              tit: '产品分类'
            }
          },
          {
            path: "redact",
            name: "redact",
            component: Redact,
            meta: {
              tit: '编辑页'
            }
          },

        ]
      },
      {
        path: '/order',
        name: 'order',
        component: Order,
        meta: {
          tit: '订单管理'
        },
        children: [
          {
            path: "orderlist",
            name: "orderlist",
            component: OrderList,
            meta: {
              tit: '订单列表'
            }
          },
          {
            path: "collect",
            name: "collect",
            component: Collect,
            meta: {
              tit: '汇总清单'
            }
          },
          {
            path: "check",
            name: "check",
            component: Check,
            meta: {
              tit: '订单审核'
            }
          },
        ]
      },
      {
        path: '/adv',
        name: 'adv',
        component: Adv,
        meta: {
          tit: '广告分类'
        },
        children: [
          {
            path: 'advlist',
            name: 'advlist',
            component: AdvList,
            meta: {
              tit: '广告列表'
            }
          }
        ]
      },
      {
        path: '/system',
        name: 'system',
        component: System,
        meta: {
          tit: '数据表格'
        },
        children: [
          {
            path: 'role',
            name: 'role',
            component: Role,
            meta: {
              tit: '数据表格'
            }
          },
          {
            path: 'department',
            name: 'department',
            component: Department,
            meta: {
              tit: '数据表格'
            }
          },
        ]
      },

    ]
  },
  {
    path: "/login",
    name: 'login',
    component: Login,
    meta: {
      tit: '登录页'
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router