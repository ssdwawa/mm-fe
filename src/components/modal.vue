<template>
    <div>
        <div class="wrap-d" v-show="mdShow" >
            <div class="bg">
                <slot name="message"></slot>
            </div>
             <slot name="address"></slot>
            <p class="alert">
            </p>
            <slot name="btn-group"></slot>
        </div>
        <div class="md-overlay" v-if="mdShow" @click="closeModal()"></div>

    </div>
</template>

<script>
import '../assets/css/login.css';
export default {
    props: ['mdShow'],
    data: function() {
        return {}
    },
    methods: {
        closeModal:function(){
            this.$emit('close')
        }
    }
}
</script>

<style>

</style>