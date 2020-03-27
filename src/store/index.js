import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

import HomeModule from "./home";
import CollectModule from './collect';
import ItemPlayModule from './itemPlay';


Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
    state: {
       isLoading:false,
    },
    actions: {
       isLoading({commit},payload){
        commit("LOADING",payload)
       } 
    },
    mutations: {
        LOADING(state,payload){
            state.isLoading = payload;
        }
    },
    getters: {
        isLoading: (state) => state.isLoading,
    },
    modules:{
        HomeModule,
        CollectModule,
        ItemPlayModule
    }
})