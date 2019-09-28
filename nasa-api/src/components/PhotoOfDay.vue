<template>
  <div>
    <v-container>
    
    <router-link to="/">
      <v-btn class="mb-2">
        <v-icon left>mdi-home</v-icon>
        <span>Back to Home</span>
      </v-btn>
    </router-link>

    <v-card flat outlined class="mx-auto grey lighten-4">

      <v-card-title>
        {{ title }}
      </v-card-title>

      <v-img :src="image" class="ma-auto my-2" max-width="500"></v-img>
      
      <v-card-text> {{ copyright }} </v-card-text>

      <v-card-text>
        {{ description }}
      </v-card-text>

    </v-card>

    </v-container>
  </div>
</template>

<script>

import axios from "axios"

export default {
  name: 'PhotoOfDay',

  data(){
    return{
      title: `image title`,
      image: `http://images-assets.nasa.gov/image/0302063/0302063~orig.jpg`,
      description: `description`,
      copyright: `copyright here`,
      url: `https://api.nasa.gov/planetary/apod?api_key=jRfHYNpuR6AhsBJswdaTk4PhBLlpIJfH8vfHL7XH`
    }
  },

  mounted(){
    axios.get(this.url)
    .then( response => {
      this.copyright = response.data.copyright;
      this.title  = response.data.title;
      this.description = response.data.explanation;
      this.image = response.data.url;
    })
  }
}
</script>