<template>
  <v-container>
    <v-flex class="justify-space-around" row nowrap>
      <router-link to='/transactions/income'>
        <v-btn dark>
          <v-icon left>mdi-book-plus</v-icon>
          Income
        </v-btn>
      </router-link>
      <router-link to='/transactions/spend'>
        <v-btn dark>
          <v-icon left>mdi-book-minus</v-icon>
          Expense
        </v-btn>
      </router-link>
    </v-flex>
    <TodayLog />
  </v-container>
</template>

<script>
import TodayLog from '../components/TodayLog';

export default {
  components: {
    TodayLog
  }
}
</script>