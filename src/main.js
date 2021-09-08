import { createApp,h } from 'vue'
import App from './App.vue'
import About from './Pages/About'
import Contact from './Pages/Contact'

// simple routes
const routes = {
    '/': App,
    '/about': About,
    '/contact':Contact
}
  
const SimpleRouter = {
    name:'SimpleRouter',
    data: () => ({
      currentRoute: window.location.pathname
    }),
  
    computed: {
      CurrentComponent() {
        return routes[this.currentRoute] || 'Not Found'
      }
    },
  
    render() {
      return h(this.CurrentComponent)
    }
}

createApp(SimpleRouter).mount('#app')

