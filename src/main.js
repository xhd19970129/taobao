// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import header from './pages/header'
import headerDown from './pages/headerDown'
import IndexPage from './components/index'
import Spinner1 from './components/spinner1'
import Spinner2 from './components/spinner2'
import Spinner3 from './components/spinner3'
import Foot from './components/foot'
import footerUp from './pages/footerUp'
import mobilePhone from './components/mobilePhone'
import xiaomi from './pages/xiaomi'


Vue.config.productionTip = false
Vue.use(VueRouter)

let router = new VueRouter({
	mode:'history',
	routes:[
		{
			path:'/',
			components:{
				indexpage:IndexPage,
				spinner1:Spinner1,
				spinner2:Spinner2,
				foot:Foot,
				header:header,
				headerDown:headerDown,
				footerUp:footerUp,
			},
			children:[
			{
				path:'/',
				components:{
					spinner3:Spinner3
				}
			}
			]
		},
		{
			path:'/mobilePhone',
			component:mobilePhone
		},
		{
			path:'/mobilePhone/xiaomi',
			component:xiaomi
		},
	]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
