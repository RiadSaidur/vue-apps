<template>
  <v-container>
    <v-layout column class="my-4 align-center">
      <v-card width='500' dark>
        <v-card-title class="pb-0">{{ item[0].title }}</v-card-title>
        <v-card-text class="pb-0">{{ item[0].date }}</v-card-text>
        <v-card-text>{{ item[0].amount }}</v-card-text>
          <v-layout>
            <v-flex class="ml-3">
              <Popup type='delete' @accepted='deleteItem'/>
            </v-flex>
            <v-flex xs1 class="mr-2">
              <v-icon v-if="income(item[0].type)">mdi-arrow-up-bold-outline</v-icon>
              <v-icon v-else>mdi-arrow-down-bold-outline</v-icon>
            </v-flex>
          </v-layout>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Popup from '../components/Popup'
export default {
  name: 'Items',
  components:{
    Popup
  },
  props:[
    'id'
  ],
  data(){
    return{
      item: ''
    }
  },
  computed:{
    ...mapState([
      'logs'
    ])
  },
  methods:{
    ...mapActions([
      'deleteData'
    ]),
    income: type => {
      if(type === 'income') return true;
      else return false;
    },
    deleteItem(){
      this.deleteData(this.id);
      this.$router.push('/logs');
    }
  },
  created(){
    this.item = this.logs.filter(log => {
      return log.title === this.id;
    })
  }
}
</script>