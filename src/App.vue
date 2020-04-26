<template>
  <div id="app">
<mt-header v-if="fag" ref="header" fixed title="悦书阁" style="height:25px">
  <div @click="getback" v-show="flag" slot="left">
    <mt-button icon="back"></mt-button>
  </div>
  <mt-button @click="getuser" slot="right">
<svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-yonghu1"></use>
</svg>
  </mt-button>
</mt-header>

<!-- //底部 -->
 <mt-tabbar ref="tabbar" v-if="fag" fixed>
  <mt-tab-item>
    <router-link :to="{name:'home'}" tag="div">
    <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-shouye"></use>
</svg>
    <h4>首页</h4>
    </router-link>
  </mt-tab-item>
  <mt-tab-item >
    <router-link :to="{name:'bookrack'}" tag="div">
<svg class="icon" aria-hidden="true">
  <use xlink:href="#icon--"></use>
</svg>
     <h4>书架</h4>
    </router-link>
  </mt-tab-item>
  <mt-tab-item>
    <router-link :to="{name:'classify'}" tag="div">
<svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-fenlei"></use>
</svg>
    <h4>分类</h4>
    </router-link>
  </mt-tab-item>
  <mt-tab-item>
    <router-link :to="{name:'rank'}" tag="div">
<svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-paihangbang-"></use>
</svg>
    <h4>排行</h4>
    </router-link>
  </mt-tab-item>
</mt-tabbar>
<keep-alive>
  <transition>
<router-view v-if="$route.meta.keepAlive" :appref="$refs" @fangfa="show"></router-view>
	</transition>
</keep-alive>
  <transition>
<router-view v-if="!$route.meta.keepAlive" :appref="$refs" @fangfa="show"></router-view>
	</transition>





    
  </div>
</template>

<script>
import './font/fonts-user'

export default {
  name: 'App',
  data(){
    return{
      fag:true,
      flag:true

    }
  },

mounted(){
  this.boxheight=document.documentElement.clientHeight
  console.log(this.boxheight)

},



methods:{
getback(){
  this.$router.go(-1)
},


show(data){
this.fag=data
},

getuser(){
  this.$router.push({name:'user'})
}



},


  components: {
  
  }
}
</script>
<style lang="scss" scoped>
*{margin: 0;padding: 0;}
body{
background-color: #fff;
}
.app{
background-color: #fff;
  margin-top: 30px;
  margin-bottom: 52px;
  .mint-header.is-fixed{
    z-index: 99;
  }
  .mint-header{
    height: 15px;
  }
.mint-tabbar > .mint-tab-item.is-selected{
  color: #555;
  // background-color: #EFEFF4;
  background-color: #00C98C;
}
.mint-header{
  background-color: #00C98C;
}
.mint-tab-item{
  padding: 0;

}
.mint-tab-item-label{
  h1{
    font-size: 9px;
  }
}
动画
.v-enter{
opacity: 0;	
transform: translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
position: absolute;
}
.v-enter-active,.v-leave-active{
transition: all .3s ease;
}
}

</style>
