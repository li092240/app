<template>
 <div ref="books" class="book">
     <ul class="mui-table-view">
         <li class="mui-table-view-cell mui-media">
             <a href="" class>
           <img  class="mui-media-object mui-pull-left" :src="books.cover" alt="">
           <div class="mui-media-body">
               {{books.title}}
               <p class="mui-ellipsis">
                   <span>{{books.author}}</span>
                   <span class="span2">{{books.cat}}</span>
                   <span>{{wordCount}}字</span>
               </p>
               <p>
                   <span>{{books.isSerial?'连载中':'完结'}}</span>
                   <span>{{books.minorCateV2}}</span>
               </p>
           </div>
             </a>
            <!-- 加入书架阅读 -->
            <Read :booklinks="this.books._id"></Read>

         </li>
     </ul>

   <ul class="mui-table-view mui-grid-view">
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <div class="mui-media-body">
          <p>追人气</p>
        </div>
        <div class="mui-media-body">
          <p class="body-p">{{latelyFollower}}</p>
        </div>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <div class="mui-media-body">
          <p>读者留存率</p>
        </div>
        <div class="mui-media-body">
          <p class="body-p">{{books.retentionRatio}}%</p>
        </div>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4">
        <div class="mui-media-body">
          <p>日更新字数/天</p>
        </div>
        <div class="mui-media-body">
          <p class="body-p">{{books.serializeWordCount}}</p>
        </div>
      </li>
    </ul>
    <!-- 书籍简介 -->
    <div class="long" @click="el">
      <p class="pop" ref="pl" >{{books.longIntro}}</p>
      <span ref="span" :flag="flag" class="mui-icon mui-icon-arrowdown" ></span>

    </div>
    <!-- 目录 -->
    <div>
       <router-link :to="{name:'readbook',params:{id:this.books._id,show:true}}" class="mulu" tag="p">
        <span>目录</span>
      <span>{{books.updated| formatDate}}</span>
      <span>{{books.lastChapter}}</span>
      </router-link>
    </div>
    <!-- 评论 -->
   <Comment></Comment>
   <!-- 同类推荐 -->
   <Recommend @book-top="topshow" :recid="books._id"></Recommend>





 </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
import { BOOK_PAGE } from '../../store/mutationsType'
import { Toast } from 'mint-ui'
import {formatDate} from '../../time/time.js'
import Read from '../Booklist/Read.vue'
import Recommend from '../Recommend/Recommend'
import Comment from '../Comment/Comment.vue'

import {book,books,bookcatalog,bookrecommend} from '../../network/request'

 export default {
   data () {
     return {
         books:{},
         flag:true,
          limit: 5,
             aa:'',
      booklinks:[],
      booktitle:[],
      recommentlist:[]

     }
   },


    filters:{
      formatDate(time){
        var date=new Date(time);
        return formatDate(date,"yyyy-MM-dd hh:mm")
      }


    },




   created(){
      this.SET_HEADER_INFO({
			headtitle: '同类推荐',
			headtype: BOOK_PAGE
    });

     this.getlist()

   },

computed:{
    wordCount(){
        return this.books.wordCount>10000
        ?parseInt(this.books.wordCount/10000)+"万"
        :this.books.wordCount
    },
    latelyFollower(){
      return this.books.latelyFollower>1000
      ?parseInt(this.books.latelyFollower/1000)+"k"
      :this.books.latelyFollower;
    }

},






methods:{
...mapMutations([
    'SET_HEADER_INFO',
      'SET_BOOK'

]),
    getlist(){
      Toast('加载中')
        books(this.$route.params.id).then(res=>{
            if(res.status===200){
                this.books=this.imgURL(res.data)               
            }
        })
    },
    
    imgURL(arr){
        arr.cover=unescape(arr.cover)
        console.log('hhhh')
        arr.cover=arr.cover.replace("/agent/","")
        return arr
        
    },
    topshow(){
        this.$refs.books.scrollTop=0;
        console.log('123')
    },
    

//书籍简介
el(){
  if(this.flag){
    this.$refs.pl.className="";
    this.$refs.span.className="mui-icon mui-icon-arrowup";
    this.flag=false
  }else{
    this.$refs.pl.className="pop";
    this.$refs.span.className="mui-icon mui-icon-arrowdown"
    this.flag=true
  }
}




},






   components: {
       Read,
       Comment,
       Recommend

   }
 }
</script>

<style lang="scss" scoped>
.book {
  position: relative;
  top: 0;
  .mui-table-view {
    .mui-media-body {
      font-size: 14px;
    }
    img {
      max-width: 64px;
      height: 100px;
    }
    .span2 {
      border-right: 1px solid #666;
      border-left: 1px solid #666;
      padding: 0px 5px;
    }
    span {
      font-size: 12px;
      color: #666;
      margin-right: 5px;
    }
  }
  .body-p {
    color: #333;
  }
  .long {
    padding: 10px;
    p {
      color: #333;
      font-size: 12px;
    }
    .pop {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
    span {
      margin-top: -25px;
      display: flex;
      justify-content: flex-end;
    }
  }
  .mulu {
    padding: 10px;
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    :nth-child(1) {
      font-size: 14px;
      color: #333;
    }
    :nth-child(2) {
      padding: 0px 10px;
    }
  }
}
</style>
