import {createApp} from 'vue'
import App from './app.vue'
import nuxUi from 'nux-ui'
const app = createApp(App)
app.use(nuxUi);

app.mount('#app')