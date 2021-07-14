import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './registerServiceWorker'
import router from './router'
import store from './store'
import globalMixin from './mixins/global'
createApp(App).use(store).use(router).use(VueAxios, axios).mixin(globalMixin).mount('#app')
// app.config.globalProperties.axios=axios
