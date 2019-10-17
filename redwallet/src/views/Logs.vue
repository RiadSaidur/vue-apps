<template>
  <LogItems :allTransactions='allTransactions' />
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import LogItems from '../components/LogItems'

export default {
  name: 'Logs',
  components:{
    LogItems
  },
  computed:{
    ...mapGetters([
      'allTransactions'
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