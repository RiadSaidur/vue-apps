<template>
  <v-container>
    <v-card dark>
      <v-card-text>Current Cash: {{cash}} BDT</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Cash',
  computed:{
    ...mapState([
      'cash'
    ])
    // cash(){
    //   return this.$store.state.cash;
    // }
  },
  methods:{
    
  }
};
</script>
