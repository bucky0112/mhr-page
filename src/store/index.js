import Vue from 'vue';
import Vuex from 'vuex';
import db from './db';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weapons: [],
  },
  mutations: {
    ADDWEAPON(state, payload) {
      state.weapons = [payload, ...state.weapons];
    },
  },
  actions: {
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
