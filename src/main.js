import { createApp,h } from 'vue'
import Home from './Pages/Home.vue'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'
import Services from './Pages/Services'

// simple routes
const routes = {
    '/': Home,
    '/about': About,
    '/contact':Contact,
    '/projects':Projects,
    '/services':Services
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

