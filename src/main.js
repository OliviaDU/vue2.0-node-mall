// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import VueLazyLoad from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import { currency } from './util/currency'

import './assets/css/base.css'
import './assets/css/login.css'
import './assets/css/product.css'

Vue.use(Vuex);
Vue.use(VueLazyLoad, {
    loading: '/static/loading-svg/loading-bars.svg'
});
Vue.use(infiniteScroll);
Vue.filter('currency', currency);

Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        cartCount: 0
    },
    mutations: {
        updateCartCount(state, cartCount) {
            state.cartCount += cartCount;
        },
        initCartCount(state, cartCount) {
            state.cartCount = cartCount;
        }
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})