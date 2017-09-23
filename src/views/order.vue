<template>
  <div>
    <div class="container">
      <div class="page-title-normal">
        <h2 class="page-title-h2">
          <span>check out</span>
        </h2>
      </div>
      <!-- 进度条 -->
      <div class="check-step">
        <ul>
          <li class="cur">
            <span>Confirm</span> address</li>
          <li class="cur">
            <span>Make</span> payment</li>
          <li class="cur">
            <span>Order</span> confirmation</li>
        </ul>
      </div>

      <div class="order-create">
        <div class="order-create-pic"><img src="../img/ok-2.png" alt=""></div>
        <div class="order-create-main">
          <h3>Congratulations! <br>Your order is under processing!</h3>
          <div class="order-create-btn-wrap">
            <div class="btn-r-wrap">
              <a href="javascript:;" class="btn btn--m" @click="back()">Goods List</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/css/base.css'
import '../assets/css/checkout.css'
export default {
  name: 'name',
  data: function() {
    return {}
  },
  methods: {
    back:function(){
      this.$router.push({path:'/'})
    }
  }
}
</script>

<style scoped>
  .btn-r-wrap{
    text-align: center;
  }
</style>