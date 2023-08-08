import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueModular from '@/plugins/VueModular.js'
import LoginModule from '@/modules/login'
import ProductsModule from '@/modules/products'

function bootApp() {
    createApp(App)
        .use(VueModular,
            {
                /**
                 * list of your modules to install in vue app (required)
                 */
                modules: [
                    LoginModule,
                    ProductsModule
                ],

                /**
                 * You can pass default config to vue app like router , ... (optional)
                 */
                configs: {
                    router
                }
            })
        .mount('#app');
}

bootApp();
