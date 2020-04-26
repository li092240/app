<template>
 <div class="home" >
     <!-- 轮播 -->
      <mt-swipe :auto="4000">
  <mt-swipe-item  v-for="(item,i) in booklunbo" :key="i"><img @click="lunbo(item.link)" :src="item.img" alt>
  </mt-swipe-item>
  
</mt-swipe>
<!-- 搜索 -->
<Search></Search>
<!-- 分类 -->
<div class="con" v-for="item in booktitle" :key="item.id">
    <p class="p1">{{item.title}}</p>
    <SubBook :booklistid="{id:item._id}"></SubBook>
    <div class="shux">
      加载更多
    </div>
  
</div>




 </div>
</template>

<script>
import '../../font/fonts-user'
import Search from '../../components/Search/Search'
// import {request} from '../../network/request'

 export default {
   data () {
     return {
        booktitle:{},
         booklunbo:{}

     }
   },

created(){
  this.getbook()

},










methods:{
   getbook(){
//轮播图数据
 this.$axios.get('/api/recommendPage/node/spread/575f74f27a4a60dc78a435a3?pl=ios').then(res=>{
          //  console.log(res)
           if(res.data.ok){
             this.booklunbo=res.data.data.slice(1, 5)
           }
        });


//首页分类数据

 this.$axios.get('/api/recommendPage/nodes/5910018c8094b1e228e5868f').then(res=>{
           var arr =res.data.data
           if(res.data.ok){
            //  this.booklist=this.imgurl(res.data.data.book)
            this.booktitle=arr.filter(item=>{
              //  return arrs.includes(item.order!=2);
              return item.title!="m站顶部banner"
            })
           }
        });



   }






   
 },




   components: {
     Search
   }
 }
</script>
<style lang="scss" scope>
.home {
  .mint-swipe{
    height: 120px;
  }
  .con{
    margin-top: 10px;
  }
  .p1 {
    font-size: 13px;
    color: #333;
    border-left: 2px solid #00c98c;
    padding-left: 10px;
    margin-bottom: 10px;
  }
  img {
    width: 100%;
  }
  .shux {
    //   border-top: 1px solid #EAEAEA;
    height: 44px;
    text-align: center;
    line-height: 44px;
    box-shadow: 0px 2px 1px #eaeaea;
    p {
      font-size: 12px;
      color: #666;
    }
  }
}
</style>
