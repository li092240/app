<template>
  <div>
    <Category :arr="arr"></Category>
  </div>
</template>
<script>
import Category from '../../components/Category/Category'
import {bookcly} from '../../network/request'
export default {
    data() {
        return {
            bookcly:[],
            arr:[]
        }
    },
    components:{
       Category 
    },
    created(){
      this.getbookfly()
    },
    methods:{
      getbookfly(){
          bookcly().then(res=>{
              var data=res.data
              if(res.status===200){ //通过for of 重新遍历数组
                  for( let [key,value] of Object.entries(data)){// Object.entries方法返回一个数组
                      let obj=null;
                      if(key=="male"){
                          obj = {
                                    title: '男生',
                                    gender: 'male',
                                    catList: value
                                };
                      }else if(key==="female"){
                           obj = {
                                    title: '女生',
                                    gender: 'female',
                                    catList: value
                                };
                      }else if(key==="press"){
                          obj = {
                                    title: '出版',
                                    gender: 'press',
                                    catList: value
                                };
                      }
                       if (obj !== null) {
                            this.arr.push(obj);
                        }
                  }                
              }
          })
      }
    }
}
</script>