<template>
  <v-app>
    <v-app-bar app dark>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to='/'>
          <span class="red--text">RED</span>
          <span class="font-weight-light white--text">wallet</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to='/about'><v-btn text><v-icon>mdi-calendar</v-icon></v-btn></router-link>
      <router-link to='/'><v-btn text><v-icon>mdi-home</v-icon></v-btn></router-link>
      <v-btn text><v-icon>mdi-delete</v-icon></v-btn>
    </v-app-bar>

    <v-content class="grey darken-2">
      <router-view></router-view>
    </v-content >
    <v-footer dark app><Cash /></v-footer>
  </v-app>
</template>

<script>
import Cash from './components/Cash'

export default {
  name: 'App',
  components:{
    Cash
  }
};
</script>

<style>
a{
  text-decoration: none;
}
</style>