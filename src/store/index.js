import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentYear: 2019,
        currentMonth: 5
    },
    mutations: {
        setCurrentMonth(state, payload) {
            state.currentMonth = payload;
        }
    }
});