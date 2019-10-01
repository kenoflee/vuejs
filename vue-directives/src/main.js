import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  //these are the lifecycle hooks for directives
  bind(el, binding, vnode) {
    let delay = 0;
    if(binding.modifiers['delayed']) {
      delay = 3000;
    };

    setTimeout(()=> {
      if(binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay)
    
  }

}); //v-highlight

new Vue({
  el: '#app',
  render: h => h(App)
})
