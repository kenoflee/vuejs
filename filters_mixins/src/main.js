import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', (string) => {
  return string.toLowerCase();
})

/**
 * In this example, global mixin gets invoked 3 times
 * 
 * 1. in the new Vue() instance
 * 2. in the App.vue
 * 3. in the List.vue
 */

Vue.mixin({
  created() {
    console.log('Global Mixin - Created Hook');
  },
});

new Vue({
  el: '#app',
  render: h => h(App)
})
