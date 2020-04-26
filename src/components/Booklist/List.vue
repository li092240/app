<template>
 <div>
<LsubBook :booklist="booklist"></LsubBook>


 </div>
</template>

<script>
import {mapState} from "vuex"
import {BOOK_PAGE} from '../../store/mutationsType.js'
import {booklist,bookrecommend} from '../../network/request'
import LsubBook from '../Booklist/LsubBook.vue'
 export default {
   data () {
     return {
          page: 1,
      id: this.$route.params.id,
      booklistid: [],
      booklist: []

     }
   },

computed:{
...mapState(["header"])

},

created(){

this.getlist(this.id)


},




methods:{
      getlist(id) {
      if (this.header.headtype === BOOK_PAGE) {
        bookrecommend(id).then(res => {
          if (res.status === 200) {
            this.booklist = res.data.books;
          }
        });
      } else {
        booklist(id, this.page).then(res => {
          if (res.data.data.length === 0) {
            return [];
          }
          if (res.status === 200) {
            res.data.data.forEach(item => {
              this.booklist.push(item.book);
            });
          }
        });
      }
    }

},




   components: {
       LsubBook

   }
 }
</script>

<style>

 
</style>
