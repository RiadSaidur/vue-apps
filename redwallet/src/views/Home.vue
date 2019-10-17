<template>
  <v-container>
    <v-flex class="justify-space-around" row nowrap>
      <router-link to='/transactions/income'>
        <v-btn dark width='10rem'>
          <v-icon left>mdi-plus-circle-outline</v-icon>
          Income
        </v-btn>
      </router-link>
      <router-link to='/transactions/spend'>
        <v-btn dark width='9rem'>
          <v-icon left>mdi-minus-circle-outline</v-icon>
          Expense
        </v-btn>
      </router-link>
    </v-flex>
    <LogItems :today='today'/>
  </v-container>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import LogItems from '../components/LogItems'

export default {
  components: {
    LogItems
  },
  computed:{
    ...mapGetters([
      'today'
    ])
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