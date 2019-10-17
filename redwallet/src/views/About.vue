<template>
  <v-container>
    <v-card dark height='50vh' width='720' class="ma-auto">
      <v-card-title dark>WALLET APP</v-card-title>
      <v-card-text>This Wallet App is created using:</v-card-text>
      <v-card-text v-for="(tech, idx) in techs" :key="idx" class="mb-0 pb-0">## {{tech}}</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'About',
  data(){
    return{
      techs: [
        'Vue 2',
        'Vue-Router',
        'Vuex',
        'Vuetify'
      ]
    }
  },
  methods: {
    ...mapMutations([
      'CHANGE_TAB'
    ]),
    updateTitle(){
      this.CHANGE_TAB(this.$route.name);
    }
  },
  mounted(){
    this.updateTitle();
  }
}
</script>