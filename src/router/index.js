import Vue from 'vue'
import Router from 'vue-router'
const Home=()=>import('../views/Home/Home')
const Classify=()=>import('../views/Classify/Classify')
const Rank=()=>import('../views/Rank/Rank')
const Bookrack =()=>import('../views/Bookrack/Bookrack')
const Book=()=>import('../components/Booklist/Book.vue')
const ReadBook=()=>import('../components/Booklist/ReadBook.vue')
const List=()=>import('../components/Booklist/List.vue')
const CategoryList=()=>import('../components/Category/CategoryList')
const SearchList=()=>import('../components/Search/SearchList')

Vue.use(Router)



const routes=[
    {
        path:'/',
        redirect:'/home',
        component:Home,
        
    },
    {
        path:'/home',
        component:Home,
        name:'home',
        meta: {
            keepAlive: true // 需要被缓存
          }
    },
    {
        path:'/classify',
        component:Classify,
        name:'classify',
        meta: {
            keepAlive: true // 需要被缓存
          }
    },
    {
        path:'/rank',
        component:Rank,
        name:'rank',
        meta: {
            keepAlive: true // 需要被缓存
          }
    },
    {
        path:'/bookrack',
        component:Bookrack,
        name:'bookrack',
        meta: {
            keepAlive: true // 需要被缓存
          }
    },
    {
        path:'/book/:id',
        name:'book',
        component:Book,
        meta:{
            keepAlive:true//缓存
        }
    },

    {
        path:'/readbook/:id',
        name:'readbook',
        component:ReadBook
    },
    {
        path:'/list/:id',
        name:'list',
        component:List
    },
    {
        path:'/categorylist/:major:gender',
        name:'categorylist',
        component:CategoryList
    },
    {
        path:'search/:val',
        name:'search',
        component:SearchList
    }




]








const router=new Router({
    routes,
    linkActiveClass: 'gaoliang'

})


export default router