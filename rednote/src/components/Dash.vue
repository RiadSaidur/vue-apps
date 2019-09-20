<template>
  <div>
    <v-btn @click="navto({name: 'new'})">
      <v-icon left>mdi-newspaper-plus</v-icon>
      <span>New Note</span>
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    navto(route){
      this.$router.push(route);
    }
  }
}
</script>