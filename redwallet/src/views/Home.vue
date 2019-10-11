<template>
  <v-container>
    <v-flex>
      <router-link to='/expenses'><v-btn>New Expense</v-btn></router-link>
      <router-link to='/expenses'><v-btn>New Income</v-btn></router-link>
    </v-flex>
    <Log />
  </v-container>
</template>

<script>
import Log from '../components/Log';

export default {
  components: {
    Log
  }
};
</script>
