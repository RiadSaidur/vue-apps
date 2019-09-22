<template>
  <nav>
    <v-toolbar flat>
      <v-toolbar-title>
        <span>RED</span>
        <span>note</span>
      </v-toolbar-title>
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
  methods: {
    navto(route){
      this.$router.push(route);
    }
  }
}
</script>