<template>
    <header class="header">
        <symbol id="icon-cart" viewBox="0 0 38 32">
            <title>cart</title>
            <path class="path1" d="M37.759 0h-4.133c-0.733 0.004-1.337 0.549-1.434 1.255l-0.546 4.342c-0.081 0.484-0.496 0.849-0.997 0.849-0.005 0-0.009-0-0.014-0h-27.604c-0.003 0-0.007-0-0.011-0-1.674 0-3.031 1.357-3.031 3.031 0 0.34 0.056 0.666 0.159 0.971l2.52 8.062c0.385 1.194 1.486 2.043 2.785 2.043 0.126 0 0.25-0.008 0.372-0.023l22.983 0.002c0.515 0.131 0.626 0.768 0.626 1.283 0.005 0.044 0.009 0.095 0.009 0.146 0 0.501-0.294 0.933-0.718 1.134l-22.439 0.003c-0.354 0-0.642 0.287-0.642 0.642s0.287 0.642 0.642 0.642h22.745l0.131-0.071c0.919-0.392 1.551-1.287 1.551-2.33 0-0.058-0.002-0.116-0.006-0.173 0.021-0.108 0.033-0.24 0.033-0.376 0-1.072-0.732-1.973-1.724-2.23l-23.357-0.004c-0.063 0.008-0.135 0.013-0.209 0.013-0.719 0-1.332-0.455-1.566-1.093l-2.53-8.095c-0.048-0.154-0.076-0.332-0.076-0.515 0-0.973 0.782-1.764 1.752-1.778h27.657c1.159-0.004 2.112-0.883 2.232-2.011l0.547-4.345c0.010-0.083 0.078-0.147 0.161-0.152l4.133-0c0.354 0 0.642-0.287 0.642-0.642s-0.287-0.642-0.642-0.642z"></path>
            <path class="path2" d="M31.323 9.69c-0.022-0.003-0.048-0.004-0.074-0.004-0.328 0-0.598 0.248-0.633 0.567l-0.809 7.268c-0.003 0.022-0.004 0.048-0.004 0.074 0 0.328 0.248 0.598 0.567 0.633l0.074 0c0.001 0 0.003 0 0.004 0 0.327 0 0.596-0.246 0.632-0.563l0.809-7.268c0.003-0.022 0.004-0.048 0.004-0.074 0-0.328-0.248-0.598-0.567-0.633z"></path>
            <path class="path3" d="M27.514 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM27.514 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
            <path class="path4" d="M9.599 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM9.599 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
        </symbol>
        <div class="navbar">
            <!-- <div class="navbar-left-container">
                                                                                    <a href="/">
                                                                                        <img class="navbar-brand-logo" src="static/logo.png"></a>
                                                                                </div>
                                                                                <div class="navbar-right-container" style="display: flex;">
                                                                                    <div class="navbar-menu-container">
                                                                                        <!--<a href="/" class="navbar-link">我的账户</a>-->
            <div class="navbar-link-a">买买提</div>
            <div v-show="loginName==false">
                <a href="javascript:void(0)" class="navbar-link" @click="islogin=true">Login </a>
                <span> | </span>
                <a href="javascript:void(0)" class="navbar-link" @click="toReg()">register</a>
            </div>
            <div v-show="loginName==true">
                <router-link to="/cart">欢迎！ {{userLoginName}}({{cartNum}})</router-link>
                <span> | </span>
                <a href="javascript:void(0)" class="navbar-link" @click="logout()">Logout</a>
            </div>
            <div class="wrap to-login" v-if="islogin||islogine">

                <div class="bg">
                    <p>
                        <input class="login" type="text" placeholder="请输入用户名" v-model="userName">
                    </p>
                    <p>
                        <input class="login" type="password" placeholder="请输入密码" v-model="userPwd">
                    </p>

                </div>
                <p class="alert">
                    <span v-show="errTips==true">账号或密码错误！</span>

                </p>
                <div class="login-block">
                    <button class="login-button" @click="toLogin()">登陆</button>
                    <button class="login-button" @click="toReg()">去注册</button>
                </div>
            </div>
            <div class="wrap to-reg" v-if="isReg">
                <div class="to-reg">
                    <div class="bg">
                        <p>
                            <input class="login" type="text" placeholder="请输入用户名" v-model="userRegName" v-on:blur="check('regName')">
                        </p>
                        <p>
                            <input class="login" type="password" placeholder="请输入密码" v-model="userRegPwd">
                        </p>
                        <p>
                            <input class="login" type="password" placeholder="确认密码" v-model="userComPwd" v-on:blur="check('comPwd')">
                        </p>
                    </div>
                    <p class="alert">
                        <span v-show="userNameAl==true">账号已经存在</span>
                        <span v-show="pwdWrong==true">密码不一致</span>
                    </p>
                    <p class="login-block">
                        <button class="login-button" @click="Reg()">注册</button>
                    </p>
                </div>
            </div>
        </div>
        <modal v-bind:mdShow="mdShow">
            <h1 class="pls-login" slot="message">
               请登陆！
            </h1>
            <div slot="btn-group">
                <router-link to="/">返回首页</router-link>
            </div>
        </modal>
        <div class="md-overlay" v-if="islogin||islogine ||isReg" @click="closeModal(),islogin=false"></div>
    </header>
</template>

<script>
import '../assets/css/login.css';
import axios from 'axios';
import Modal from '@/components/modal.vue';
export default {
    props: ['islogine'],
    data() {
        return {
            msg: '',
            islogin: false,
            userName: '',
            userPwd: '',
            errTips: false,
            userLoginName: '',
            loginName: false,
            isReg: false,
            userRegName: '',
            userRegPwd: '',
            userComPwd: '',
            pwdWrong: false,
            userNameAl: false,
            regWrong: false,
            cartNum:0,
            mdShow:false,
        }
    },
    mounted() {
        this.checklogin()
        this.getCartNum();
    },
    methods: {
        checklogin: function() {
            axios.get('users/checklogin').then((res) => {
                if (res.data.status == 1) {
                    this.loginName = true;
                    this.userLoginName = res.data.result
                }
                else if(document.location.pathname!='/'){
                    this.mdShow=true
                    
                }
            })
        },
        toLogin: function() {
            axios.post('users/login', {
                userName: this.userName,
                userPwd: this.userPwd
            }).then((res) => {
                if (res.data.status == 1) {
                    this.userName = '';
                    this.userPwd = '';
                    alert(`登陆成功！`)
                    this.errTips = false;
                    this.islogin = false;
                    // this.islogine=false;
                    this.loginName = true;
                    this.userLoginName = res.data.result.userName;
                    this.closeModal();
                    this.getCartNum();
                }
                else if (res.data.status == 2) {
                    this.errTips = true
                }
            })
        },
        logout: function() {
            axios.post('/users/logout').then((res) => {
                if (res.data.status == 1) {
                    this.loginName = false;

                }
            })
        },
        closeModal: function() {
            this.$emit('closeModal')
            this.isReg = false;
            this.islogin = false;
        },
        toReg: function() {
            this.isReg = true;
            this.islogin = false;
            this.userRegName = '';
            this.userRegPwd = '';
            this.userComPwd = '';
            this.pwdWrong = false;
            this.regWrong = false;
        },
        check: function(acce) {
            if (acce == 'regName') {

            }
            else if (acce == 'comPwd') {
                if (this.userRegPwd != this.userComPwd) {
                    this.pwdWrong = true;
                    this.regWrong = true;
                }
                else {
                    this.pwdWrong = false
                }
            }
        },
        Reg: function() {
            this.check('regName');
            this.check('comPwd');
            if (this.regWrong) {
                return
            }
            else {
                axios.post('/users/reg', {
                    userName: this.userRegName,
                    userPwd: this.userComPwd
                }).then((res) => {
                    if (res.data.status == 1) {
                        alert('注册成功')
                        this.userName=this.userRegName;
                        this.userPwd=this.userComPwd;
                        this.closeModal();
                        this.toLogin();
                    }
                })
            }
        },
        getCookie: function(name) {
            var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return unescape(arr[2]);
            else
                return null;
        },
        getCartNum:function(){
            axios.post('/users/getCart',{
                userId:this.getCookie('userId')
            }).then((res)=>{
                if(res.data.status==1){
                    this.cartNum=res.data.result
                }
            })
        }
    },
    components: {
        Modal,
    }
}
</script>

<style>

</style>
