import Vue from 'vue';
import './plugins/axios';
import 'bootstrap';
import './assets//style/all.scss';
import mixin from './mixin.js';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuelidate from 'vuelidate';
import VueSocketio from 'vue-socket.io-extended';
import io from 'socket.io-client';
import ip from '../config/ip.js';

Vue.config.productionTip = false;
Vue.use(VueSocketio, io(ip.dev.chaos_server, { path: '/chaos' }));
Vue.use(Vuelidate);
Vue.mixin(mixin);

router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && store.state.key == null) {
        next({ name: 'Login' });
    } else {
        next();
    }
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
