import './index.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { store } from './providers/store'
import router from './providers/router'
import { PrimeVue, PrimeVueConfig, ToastService } from '@/shared/ui/primeVueConfig';

const app = createApp(App)

app.use(store)
app.use(router)
app.use(PrimeVue, PrimeVueConfig);
app.use(ToastService);

export default app