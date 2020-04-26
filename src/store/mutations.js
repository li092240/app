import {
    SET_HEADER_INFO,
  SET_BOOK,
  BOOK_UPDATE,
  BOOK_USERCOLOR,
  BOOK_USERFONT

}from './mutationsType'
import{
    setStore
}from './const'
export default{
    [SET_HEADER_INFO](state,header){
        state.header.headtype=header.headtype
        state.header.headtitle=header.headtitle
    },
    [SET_BOOK](state,book){
        state.bookdata=book
        setStore('SHEFLBOOK',state.bookdata)
    },
    [BOOK_UPDATE](state, books) {
        state.bookselldata = books
        setStore('BOOK_UPDATE', state.bookselldata)
      },
      [BOOK_USERCOLOR](state, usercolor) {
        state.usercolor = usercolor
        setStore('BOOK_USERCOLOR', state.usercolor)
      },
      [BOOK_USERFONT](state, userfont) {
        state.userfont = userfont
        setStore('BOOK_USERFONT', state.userfont)
      }
    }

