import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Test from '@/components/Test'
import InventoryCheck from '@/components/InventoryCheck'

Vue.use(Router)

export default new Router({
  routes: [
  	// Search bar
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
    	path: '/inventory',
    	name: 'inventory-check',
    	component: InventoryCheck
    },
    {
    	path: '/instructions',
    	name: 'instructions',
    	component: Test
    }
  ]
})
