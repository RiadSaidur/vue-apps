import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cash: 7000,
    logs:[
      {
        type: 'spend',
        title: 'books',
        amount: 300,
        date:"13/9/2019"
      },
      {
        type: 'income',
        title: 'salary',
        amount: 5500,
        date:"13/9/2019"
      },
      {
        type: 'spend',
        title: 'shoes',
        amount: 2000,
        date:"27/6/2029"
      },
      {
        type: 'income',
        title: 'dhanda',
        amount: 500,
        date:"13/9/2019"
      },
      {
        type: 'spend',
        title: 'coke',
        amount: 500,
        date:"27/6/2029"
      },
      {
        type: 'spend',
        title: 'cake',
        amount: 2500,
        date:"27/6/2019"
      },
      {
        type: 'income',
        title: 'dhanda again',
        amount: 900,
        date:"13/9/2019"
      },
    ]
  },
  getters:{
    today: state => {
      let date = new Date();
      date = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
      return state.logs.filter(log => {
        return log.date === date;
      })
    }
  },
  mutations: {
    ADD_RECORD: (state, record) => {
      state.logs.push(record);
      if(record.type === 'income') state.cash += record.amount;
      else if(record.type === 'spend') state.cash -= record.amount;
    }
  },
  actions: {
    
  }
})
