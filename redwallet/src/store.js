import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tab: '',
    current:{
      cash: 0,
      income: 0,
      budget: 0,
      savingTarget: 0
    },
    logs:[]
  },
  getters:{
    today: state => {
      let date = new Date();
      date = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
      return state.logs.filter(log => {
        return log.date === date;
      })
    },
    allTransactions: state => {
      return state.logs;
    }
  },
  mutations: {
    ADD_RECORD: (state, record) => {
      state.logs.unshift(record);
      if(record.type === 'income') state.current.cash += record.amount;
      else if(record.type === 'spend') state.current.cash -= record.amount;
    },
    UPDATE: (state, collection) => {
      state.current.cash = collection.cash;
      state.current.income = collection.income;
      state.current.budget = collection.budget;
      state.current.savingTarget = collection.target;
    },
    CHANGE_TAB: (state, title) => {
      state.tab = title;
    },
    DELETE: (state, item) => {
      const idx = state.logs.findIndex(log =>{
        return log.title === item;
      });
      state.logs.splice(idx, 1);
    }
  },
  actions: {
    setData: (context, collection) => {
      context.commit('UPDATE', collection);
    },
    setTitle: (context, title) => {
      context.commit('CHANGE_TAB', title);
    },
    deleteData: (context, item) => {
      context.commit('DELETE', item);
    }
  }
})
