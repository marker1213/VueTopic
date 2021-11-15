import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home.vue'
//路由懒加载
const About = () => import('@/views/about/About.vue')
const Blogdetail = () => import('@/views/blogdetail/Blogdetail.vue')
const AddBlog = ()=>import('@/views/edit/AddBlog.vue')
const StudyPath = ()=>import('@/views/path/Path.vue')
const Profile = ()=>import('@/views/profile/Profile.vue') 

//子路由懒加载
const UserHome = ()=>import('@/views/profile/children/UserHome.vue')
const UserSet = ()=>import('@/views/profile/children/UserSet.vue')
const UserPassage = ()=>import('@/views/profile/children/UserPassage.vue')
const Favorite = ()=>import('@/views/profile/children/favorite.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/blogdetail',
    name: 'blogdetail',
    component: Blogdetail
  },
  {
    path: '/addblog',
    name: 'addblog',
    component: AddBlog
  },
  {
    path: '/studypath',
    name: 'studypath',
    component: StudyPath
  },
  {
    path: '/profile',
    component: Profile,
    children: [
      { //嵌套默认路由
        path: '',
        redirect: 'userhome'
      },
      {
        path: 'userhome',
        name:'userhome',
        component: UserHome
      },
      {
        path: 'userpassage',
        name:'userpassage',
        component: UserPassage
      },
      {
        path: 'userset',
        name:'userset',
        component: UserSet
      },
      {
        path: 'favorite',
        name:'favorite',
        component: Favorite
      },
    ]

  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
