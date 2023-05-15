import { createRouter, createWebHistory } from 'vue-router'
import AllDesigns from './components/AllDesigns.vue'
import AddDesign from './components/AddDesign.vue'

const routes = [
  { path: '/', component: AllDesigns },
  { path: '/add-design', component: AddDesign }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
