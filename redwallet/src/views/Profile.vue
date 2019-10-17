<template>
  <v-conatiner>
    <v-card class="mx-auto" height="100%" max-width="720" dark>
      <v-list>
        <v-list-item-group v-for="(items, index) in menuItems" :key='index'>
          <router-link :to='items.link'>
            <v-list-item>
              <v-list-item-icon><v-icon>{{items.icon}}</v-icon></v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{items.title}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-conatiner>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Profile',
  data(){
    return{
      menuItems:[
        {
          link: '/settings',
          icon: 'mdi-settings-outline',
          title: 'Settings'
        },
        {
          link: '/about',
          icon: 'mdi-settings-outline',
          title: 'About'
        }
      ]
    }
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