<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-title>
        <span>RED</span>
        <span>note</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn depressed @click="navto({name: 'home'})">
          <span>Home</span>
          <v-icon right>mdi-home</v-icon>
        </v-btn>
        <v-btn depressed @click="navto({name: 'about'})">About</v-btn>
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