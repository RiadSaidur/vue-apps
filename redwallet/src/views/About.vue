<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
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