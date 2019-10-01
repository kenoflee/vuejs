import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  //these are the lifecycle hooks for directives
  bind(el, binding, vnode) {
    el.style.backgroundColor = 'green';
  }

}); //v-highlight

new Vue({
  el: '#app',
  render: h => h(App)
})
