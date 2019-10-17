<template>
  <v-form>
    <v-text-field
    label="Set Cash"
    v-model="newCash"
    dark
    ></v-text-field>
    <v-text-field
    label="Monthly Income"
    v-model="newIncome"
    dark
    ></v-text-field>
    <v-text-field
    label='Budget'
    v-model="newBudget"
    dark
    ></v-text-field>
    <v-text-field
    label='Saving Target'
    v-model="newTarget"
    dark
    ></v-text-field>
    <Popup @accepted='updateStore' @canceled='formValues' type='save' />
  </v-form>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Popup from './Popup'

export default {
  name: 'SettingsForm',
  components: {
    Popup
  },
  data(){
    return{
      newCash: '',
      newIncome: '',
      newBudget: '',
      newTarget: '',
    }
  },
  computed: {
    ...mapState([
      'current'
    ])
  },
  mounted(){
    this.formValues();
  },
  methods:{
    ...mapActions([
      'setData'
    ]),
    updateStore(){
      const collection = {
        cash: parseInt(this.newCash),
        income: parseInt(this.newIncome),
        budget: parseInt(this.newBudget),
        target: parseInt(this.newTarget)
      }
      this.setData(collection);
    },
    formValues(){
      this.newCash = this.current.cash;
      this.newIncome = this.current.income;
      this.newBudget = this.current.budget;
      this.newTarget = this.current.savingTarget;
    }
  }
}
</script>