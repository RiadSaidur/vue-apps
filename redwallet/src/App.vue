<template>
  <v-app>
    <v-app-bar app dark>
      <Heading />
      <v-spacer></v-spacer>
      <router-link to='/logs'><v-btn text><v-icon>mdi-calendar-outline</v-icon></v-btn></router-link>
      <router-link to='/'><v-btn text><v-icon>mdi-home-outline</v-icon></v-btn></router-link>
      <router-link to='/profile'><v-btn text><v-icon>mdi-account-outline</v-icon></v-btn></router-link>
    </v-app-bar>

    <v-content class="grey darken-2">
      <router-view></router-view>
    </v-content >
    <v-footer dark app><Cash /></v-footer>
  </v-app>
</template>

<script>
import Heading from './components/Heading'
import Cash from './components/Cash'

export default {
  name: 'App',
  components:{
    Heading,
    Cash
  }
};
</script>

<style>
a{
  text-decoration: none;
}
</style>