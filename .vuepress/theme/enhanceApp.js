// import VueRouter from 'vue-router'

// import Home from './components/Home.vue'
import VueAnalytics from 'vue-analytics'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  // options, // the options for the root Vue instance
  router // the router instance for the app
  // siteData // site metadata
}) => {
  // import styles
  require('./styles/index.scss')
  // add routes
  // router.addRoutes([{ path: '/foo', component: Home }])
  // Setup analytics
  Vue.use(VueAnalytics, {
    id: 'UA-116621358-3',
    router
  })
}
