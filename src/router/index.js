import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载
const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const Category = () => import('views/category/Category')
const Profile = () => import('views/profile/Profile')
const Detail =()=> import('views/detail/Detail')
//1.安装插件
Vue.use(VueRouter)

// 2.配置对应映射关系(要在创建对象之前配置)
const routes = [{
  path: '',
  redirect: '/home'
}, {
  path: '/home',
  component: Home
}, {
  path: '/cart',
  component: Cart
}, {
  path: '/category',
  component: Category
}, {
  path: '/profile',
  component: Profile
},{
  path:'/detail/:iid',
  component:Detail
}]

//2.创建对象
const router = new VueRouter({
  routes,
  mode: 'history'
})

//3.导出路由
export default router