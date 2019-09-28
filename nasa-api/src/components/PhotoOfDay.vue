<template>
  <div>
    <v-container>
    
    <router-link to="/">
      <v-btn class="mb-2">
        <v-icon left>mdi-home</v-icon>
        <span>Back to Home</span>
      </v-btn>
    </router-link>

    <v-card flat outlined class="mx-auto">

      <v-img :src="image" class="ma-auto my-2" max-width="500"></v-img>
      
      <v-card-text>caption here</v-card-text>

      <v-card-title>
        image title
      </v-card-title>

      <v-card-text>
        description
      </v-card-text>

      <v-card-action>
        <v-btn>
          more
        </v-btn>
      </v-card-action>

    </v-card>

    </v-container>
  </div>
</template>

<script>
export default {
  name: 'PhotoOfDay',

  data(){
    return{
      image: `http://images-assets.nasa.gov/image/0302063/0302063~orig.jpg`
    }
  },

  computed: {
    //
  }
}
</script>