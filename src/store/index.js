
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        view: 'No1On',
        url:''
    },
    getters: {
        getView: state => {
            return state.view;
        },
        getUrl: state => {
            return state.url;
        },
    },
    mutations: {
        SET_VIEW: (state, payload) => {
            state.view = payload;
        },
        SET_URL:(state,payload) => {
            state.url = payload;
        }
    }
});