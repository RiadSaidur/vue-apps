<template>
  <v-container>
    <SettingsForm />
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex';
import SettingsForm from '../components/SettingsForm'

export default {
  name: 'Settings',
  components: {
    SettingsForm
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