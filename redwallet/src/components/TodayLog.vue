<template>
  <v-layout column class="my-4">
    <v-card v-for="(log, index) in today" :key='index' class="mb-2" width='100%' dark>
      <v-card-title class="pb-0">{{ log.title }}</v-card-title>
      <v-card-text class="pb-0">{{ log.date }}</v-card-text>
      <v-card-text>
        <v-layout>
          <v-flex>{{ log.amount }}</v-flex>
          <v-flex xs1>
            <v-icon v-if="income(log.type)">mdi-arrow-up-bold</v-icon>
            <v-icon v-else>mdi-arrow-down-bold</v-icon>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TodayLog',
  computed:{
    ...mapGetters([
      'today'
    ])
  },
  methods:{
    income: type => {
      if(type === 'income') return true;
      else return false;
    }
  }
}
</script>