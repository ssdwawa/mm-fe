<template>
    <div>
        <nav-header v-bind:islogine="isLogin" v-on:closeModal="closeModal" ref="toSon"></nav-header>
        <nav-bread>
            <span slot="bread">商品列表</span>
        </nav-bread>
        <div class="accessory-result-page accessory-page">
            <div class="container">
                <div class="filter-nav">
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="button" @click="search_mode()">Go!</button>
                    </span>
                    <input type="text" class="search-product" placeholder="search for..." ref="sea">
                    <svg class="icon icon-arrow-short">
                        <use xlink:href="#icon-arrow-short"></use>
                    </svg>
                    </a>
                    <a href="javascript:void(0)" class="filterby stopPop" @click="filterBy=true">Filter by</a>
                </div>
                <div class="accessory-result">
                    <!-- filter -->
                    <div class="filter stopPop" id="filter" v-bind:class="{'filterby-show':filterBy==true}">
                        <dl class="filter-price">
                            <dt>Price:</dt>
                            <dd>
                                <a href="javascript:void(0)" @click="priceALLcheck='all',filterBy=false,setPrice('false')" v-bind:class="{'cur':priceALLcheck=='all'}">All</a>
                            </dd>
                            <dd v-for="(price,index) in priceList">
                                <a href="javascript:void(0)" @click="priceALLcheck=index,filterBy=false,setPrice(index)" v-bind:class="{'cur':priceALLcheck==index}">{{price.startPrice}} - {{price.endPrice}}</a>
                            </dd>
                        </dl>
                    </div>

                    <!-- search result accessories list -->
                    <div class="accessory-list-wrap" v-if="show">
                        <div class="accessory-list col-4">
                            <ul>
                                <li v-for="item in goodList">
                                    <div class="pic">
                                        <a href="#"><img v-bind:src="'static/'+item.productImage" alt=""></a>
                                    </div>
                                    <div class="main">
                                        <div class="name">{{item.productName}}</div>
                                        <div class="price">{{item.salePrice}}</div>
                                        <div class="btn-area">
                                            <a href="javascript:;" class="btn btn--m" @click="addList(item)">加入购物车</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <a href="javascript:;" class="back" v-if="is_serach==true" @click="back()">返回首页</a>
                            <div class="p-l">
                                <span class="page"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div v-bind:class="{'md-overlay':filterBy==true}"></div>
        <modal v-bind:mdShow="mdShow" v-on:close="closeModal">
            <h1 class="pls-login" slot="message">
                请登陆!
            </h1>
            <div slot="btn-group">
                <a href="javascript:;" @click="mdShow=false,isLogin=true">去登陆</a>
                <a href="javascript:;" @click="mdShow=false">关闭</a>
            </div>
        </modal>
        <modal v-bind:mdShow="mdCartShow" v-on:close="closeModal">
            <h1 class="pls-login" slot="message">
                购买成功！
            </h1>
            <div slot="btn-group">
                <a href="javascript:;" @click="mdCartShow=false">继续购物</a>
                <router-link to="/cart">查看购物车</router-link>
            </div>
        </modal>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import '../assets/css/base.css'
import '../assets/css/product.css'
import axios from 'axios'
import '@/util/page/index'
import NavHeader from '@/components/nav-header.vue'
import NavFooter from '@/components/nav-footer.vue'
import NavBread from '@/components/nav-bread.vue'
import Modal from '@/components/modal.vue'
export default {

    //   name:'goodList',
    data() {
        return {
            msg: '',
            priceList: [{
                startPrice: 0,
                endPrice: 100
            },
            {
                startPrice: 100,
                endPrice: 500
            },
            {
                startPrice: 500,
                endPrice: 1000
            },
            {
                startPrice: 1000,
                endPrice: 5000
            }
            ],
            priceALLcheck: 'all',
            filterBy: false,
            goodList: [],
            sortMode: false,
            search: null,
            show: true,
            pageSize: 8,
            page: 1,
            max: '',
            pageCount: '',
            is_serach: false,
            mdShow: false,
            isLogin: false,
            mdCartShow: false,
        }
    },
    mounted() {
        this.loadList_search()
        this.pagee()
    },
    methods: {
        pagee: function() {
            var _this = this;
            $('.page').createPage(function(n) {
                // console.log(` n2:${_this.na}`)
                _this.page = n
                _this.loadList_search();
            }, {
                    pageCount: Math.ceil((_this.pageCount / 8)), //总页码,默认10
                })
        },
        getCookie: function(name) {
            var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return unescape(arr[2]);
            else
                return null;
        },
        loadList_search: function() {
            $.ajax({
                url: '/goods/index',
                method: 'post',
                data: {
                    pageSize: this.pageSize,
                    page: this.page,
                    priceLevel: this.priceALLcheck,
                    searchValue: this.search
                },
                async: false,
                success: (res) => {
                    if (res.status == 1) {
                        this.pageCount = res.result.count;
                        this.goodList = res.result.list;
                    } else {
                        this.goodList = []
                        this.pageCount = 1
                    }
                }
            })
        },
        setPrice: function(index) {
            let priceLevel = ''
            if (!this.is_serach) {
                if (index != 'false') {
                    priceLevel = this.priceALLcheck;
                    this.loadList_search();
                    this.pagee();
                } else if (index == 'false') {
                    priceLevel = ''
                    this.loadList_search();
                    this.pagee();
                }
            }
            else {
                if (index != 'false') {
                    priceLevel = this.priceALLcheck;
                    this.loadList_search();
                    this.pagee();
                } else if (index == 'false') {
                    priceLevel = ''
                    this.loadList_search();
                    this.pagee(this.max);
                }
            }
        },
        back: function() {
            this.search = '';
            this.loadList_search();
            this.is_serach = false;
            this.show = true;
            this.$refs.sea.value = '';
            this.pagee()
        },
        search_mode: function() {
            var _this = this;
            this.search = this.$refs.sea.value;
            this.is_serach = true;
            if (this.search) {
                this.loadList_search()
                this.pagee()
            }
            else {
                alert('请输入关键字')
            }
        },
        addList: function(item) {
            var userIdCook = this.getCookie('userId');
            axios.post('/users/addCart', {
                userId: userIdCook,
                productId: item.productId,
                productName: item.productName,
                productImage: item.productImage,
                salePrice: item.salePrice,
                productNum: 1,
                isChecked:0
            }).then((res) => {
                if (res.data.status == '1') {
                    this.mdCartShow = true;
                    this.$refs.toSon.getCartNum();
                }
                else if (res.data.status == 0) {
                    this.mdShow = true
                }
            })
        },
        closeModal: function() {
            this.mdShow = false;
            this.isLogin = false;
        },
    },
    components: {
        NavHeader,
        NavFooter,
        NavBread,
        Modal,
    }
}
</script>

<style>
.no_show {
    width: 100%;
    text-align: center;
}
</style>
