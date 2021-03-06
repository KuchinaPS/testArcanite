import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import VueTheMask from 'vue-the-mask'
import App from './App.vue'

Vue.config.productionTip = false
locale.use(lang);
Vue.use(ElementUI);
Vue.use(VueTheMask)

new Vue({
  render: h => h(App),
}).$mount('#app')
