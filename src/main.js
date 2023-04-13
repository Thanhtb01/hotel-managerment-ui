import { createApp } from 'vue'
import App from './App.vue'
import VueX from 'vuex'

const store = createStore({
    state () {
      return {
        count: 0
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })

const app = createApp(App).mount('#app');

app.use(VueX);
app.use(store);




