import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import mutationsType from './mutationsType'
import {header,book} from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    mutationsType,
    header,
    book
})