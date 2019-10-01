import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  //these are the lifecycle hooks for directives
  bind(el, binding, vnode) {
    if(binding.arg == 'background') {
      el.style.backgroundColor = binding.value;
    } else {
      el.style.color = binding.value;
    }
  }

}); //v-highlight

new Vue({
  el: '#app',
  render: h => h(App)
})
