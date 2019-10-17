<template>
  <v-toolbar-title class="headline text-uppercase">
    <router-link to='/'>
      <span class="red--text">RED</span>
      <span class="font-weight-light white--text">{{tab}}</span>
    </router-link>
  </v-toolbar-title>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Heading',
  computed:{
    ...mapState([
      'tab'
    ])
  }
}
</script>