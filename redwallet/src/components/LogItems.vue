<template>
  <v-container>
    <v-layout column class="my-4 align-center">
      <v-flex class="">
        <v-card v-for="(log, index) in logs" :key='index' @click="navto({path: `/items/${log.title}`})" class="mb-2" width='500' dark>
          <v-card-title class="pb-0">{{ log.title }}</v-card-title>
          <v-card-text class="pb-0">{{ log.date }}</v-card-text>
          <v-card-text>
            <v-layout>
              <v-flex>{{ log.amount }}</v-flex>
              <v-flex xs1>
                <v-icon v-if="income(log.type)">mdi-arrow-up-bold-outline</v-icon>
                <v-icon v-else>mdi-arrow-down-bold-outline</v-icon>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'LogItems',
  data(){
    return{
      logs: ''
    }
  },
  props:[
    'today',
    'allTransactions'
  ],
  methods:{
    income: type => {
      if(type === 'income') return true;
      else return false;
    },
    navto(route){
      this.$router.push(route);
    }
  },
  mounted(){
    if(this.today) this.logs = this.today;
    else if(this.allTransactions) this.logs = this.allTransactions;
  }
}
</script>