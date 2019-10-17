<template>
  <v-container>
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
    </v-form>
    <Popup @accepted='addRecord' @canceled='resetForm' type='save' />
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex';
import Popup from '../components/Popup'
export default {
  name: 'Transactions',
  props:['type'],
  components:{
    Popup
  },
  data(){
    return{
      title: '',
      amount: ''
    }
  },
  methods:{
    ...mapMutations([
      'ADD_RECORD',
      'CHANGE_TAB'
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
      }
    },
    resetForm(){
      this.title = '';
      this.amount = '';
    },
    updateTitle(){
      this.CHANGE_TAB(this.type);
    }
  },
  mounted(){
    this.updateTitle();
  }
};
</script>