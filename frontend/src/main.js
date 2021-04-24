import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

// new Vue({
//   methods: {
//     scoll_down: function() {
//       const el = document.getElementById('map_div')
//       el.scrollIntoView({ behavior: 'smooth' })
//     }
//   }
// })

// export default {
// methods: {
//   goto(refName) {
//     var element = this.$refs[refName];
//     var top = element.offsetTop;

//     window.scrollTo(0, top);
//   }
// }
// };
