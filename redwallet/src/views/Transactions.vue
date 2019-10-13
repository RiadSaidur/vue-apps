<template>
  <v-container>
    <h1 v-if="type === 'spend'" class="text-center mb-4 white--text">New Expense</h1>
    <h1 v-else class="white--text">New Income</h1>
    <v-form @submit.prevent >
      <v-text-field
      label='Title'
      v-model="title"
      dark
      ></v-text-field>
      <v-text-field
      label='Amount'
      v-model="amount"
      dark
      ></v-text-field>
      <v-btn @click="addRecord" dark>Submit</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'Transactions',
  props:['type'],
  data(){
    return{
      title: '',
      amount: ''
    }
  },
  methods:{
    ...mapMutations([
      'ADD_RECORD'
    ]),
    validate(){
      if(this.title=='' || this.amount=='' || isNaN(this.amount)) return false;
      else return true;
    },
    addRecord(){
      if(this.validate()){
        let date = new Date();
        date = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
        const record = {
          type: this.type,
          title: this.title,
          amount: parseInt(this.amount),
          date: date
        }
        this.title = '';
        this.amount = '';
        this.ADD_RECORD(record);
        alert('record added');
      }
    }
  }
};
</script>