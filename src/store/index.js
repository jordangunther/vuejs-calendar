import Vue from 'vue';
import Vuex from 'vuex';

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentYear: 2019,
        currentMonth: 5,
        eventFormPosX: 0,
        eventFormPosY: 0,
        eventFormActive: false,
        events: [
            { description: 'Random event 1', date: moment('2019-05-06', 'YYYY-MM-DD') },
            { description: 'Random event 2', date: moment('2019-05-07', 'YYYY-MM-DD') },
            { description: 'Random event 3', date: moment('2019-06-08', 'YYYY-MM-DD') }
        ]
    },
    mutations: {
        setCurrentMonth(state, payload) {
            state.currentMonth = payload;
        },
        setCurrentYear(state, payload) {
            state.currentYear = payload;
        },
        eventFormPos(state, payload) {
            state.eventFormPosX = payload.x;
            state.eventFormPosY = payload.y;
        },
        eventFormActive(state, payload) {
          state.eventFormActive = payload;
        }
    }
});