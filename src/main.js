import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import axios from 'axios';
import '@/assets/style.css';
// ================================================== 20240603 - S ==================================================
import formatNumber from '@/api/FormatNumber';
// ================================================== 20240603 - E ==================================================

import '@/assets/styles/style.css';
// 실제 데이터를 json으로 주고받기 위해 무언가 요청할 때 사용할 수 있도록 설정
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

const app = createApp(App);

app.use(store)
   .use(router)
   .mount('#app');

// axios 설정
app.config.globalProperties.axios = axios;
app.config.productionTip = false;

// ================================================== 20240603 - S ==================================================
app.config.globalProperties.formatNumber = formatNumber;
// ================================================== 20240603 - E ==================================================
app.config.productionTip = false;
