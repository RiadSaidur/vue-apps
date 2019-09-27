<template>
  <nav>

    <v-toolbar>
      <v-toolbar-title>NASA API</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn depressed @click="navto({name: 'home'})">
          <v-icon left>mdi-home</v-icon>
          <span>Home</span>
        </v-btn>
        <v-btn depressed @click="navto({name: 'about'})">
          <v-icon left>mdi-account-circle</v-icon>
          <span>About</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

  </nav>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    navto(route){
      this.$router.push(route);
    }
  }
}
</script>

<style scoped>
  .image{
    cursor: pointer;
  }
</style>