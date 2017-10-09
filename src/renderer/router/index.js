import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/Home').default
    },
    {
      path: '/online',
      name: 'online',
      component: require('@/components/views/OnlineTools/index').default
    },
    {
      path: '/online/base64',
      name: 'base64',
      component: require('@/components/views/ImgToBase64/index').default
    },
    {
      path: '/online/codeformat',
      name: 'codeformat',
      component: require('@/components/views/CodeFormat/index').default
    },
    // {
    //   path: '/json',
    //   name: 'json',
    //   component: require('@/components/views/Json/index').default
    // },
    // {
    //   path: '/unicode',
    //   name: 'unicode',
    //   component: require('@/components/views/Unicode/index').default
    // },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
