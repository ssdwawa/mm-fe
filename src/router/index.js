import Vue from 'vue'
import Router from 'vue-router'
import goodList from '@/views/goodList'
import goodsDetail from '@/views/goodDetail'
import address from '@/views/address'
import Img from '@/views/img'
import Cart from '@/views/cart'
import success from '@/views/order'
Vue.use(Router)

export default new Router({
  mode :'history',
  routes: [
    {
      path: '/',
      name: 'goodList',
      component: goodList,
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart
    },
    {
      path:'/address',
      name:'address',
      component:address
    },
    {
      path:'/success',
      name:'success',
      component:success
    }
  ]
})
