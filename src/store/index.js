import Vue from 'vue';
import Vuex from 'vuex';
import db from './db';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weapons: [],
  },
  mutations: {
    GETWEAPONS(state, payload) {
      state.weapons = payload;
    },
    ADDWEAPON(state, payload) {
      state.weapons = [payload, ...state.weapons];
    },
  },
  actions: {
    getWaepons: async (context) => {
      const ref = db.collection('WEAPONS');
      const result = await ref.get();
      const payload = [];
      result.forEach((item) => {
        payload.push({
          id: item.id,
          ...item.data(),
        });
      });
      context.commit('GETWEAPONS', payload);
    },
    addWeapon: async (context, payload) => {
      const ref = db.collection('WEAPONS');
      const addRef = await ref.add(payload);
      context.commit('ADDWEAPON', {
        id: addRef.id,
        ...payload,
      });
    },
  },
  modules: {
  },
});
