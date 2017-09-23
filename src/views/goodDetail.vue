<template>
  <div>
      <nav-header></nav-header>
      <nav-bread>
            <span slot="bread">商品详细</span>
        </nav-bread>
      <h1>产品</h1>
      <nav-footer></nav-footer>
  </div>
</template>

<script>
import '../assets/css/base.css'
import '../assets/css/product.css'
import axios from 'axios'
import NavHeader from '@/components/nav-header.vue'
import NavFooter from '@/components/nav-footer.vue'
import NavBread from '@/components/nav-bread.vue'
export default {

    //   name:'goodList',
    data() {
        return {
            
        }
    },
    mounted() {

    },
    methods: {
        
    },
    components: {
        NavHeader,
        NavFooter,
        NavBread
    }
}
</script>
