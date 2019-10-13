<template>
    <v-card-text class="text-uppercase red--text">Current Cash: <span class="white--text">{{cash}}</span> BDT</v-card-text>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Cash',
  computed:{
    ...mapState([
      'cash'
    ])
  }
};
</script>
