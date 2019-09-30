<template>
<v-container>

  <v-toolbar dense flat class="white">
    <v-btn @click="previous">
      <v-icon left>mdi-chevron-left</v-icon>
      <span>Previous</span>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn @click="next">
      <span>Next</span>
      <v-icon right>mdi-chevron-right</v-icon>
    </v-btn>
  </v-toolbar>

  <v-layout row wrap>

    <v-flex xs12 md4 v-for="(photo, index) in photos" :key="index" class="pa-2">

      <v-card flat outlined class="mx-auto grey lighten-4">

      <v-img :src="photo.source" class="ma-auto my-2" max-width="500"></v-img>
      
      <v-card-text> {{ photo.date }} <br> Rover: {{ photo.rover }}  </v-card-text>

      <v-btn :href="photo.source" target="blank">Full Size</v-btn>

    </v-card>

    </v-flex>

  </v-layout>
</v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: `Mars`,

  data(){
    return{
      date: 1000,
      apiKey: 'jRfHYNpuR6AhsBJswdaTk4PhBLlpIJfH8vfHL7XH',
      page: 1,
      manifest: `https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=jRfHYNpuR6AhsBJswdaTk4PhBLlpIJfH8vfHL7XH`,
      mars: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos`,
      photos: []
    }
  },

  methods: {

    next(){
      this.page++;
      this.getPhotos();
    },

    previous(){
      if(this.page == 1) return;
      this.page--;
      this.getPhotos();
    },

    getPhotos(){
      axios.get(this.manifest)
      .then(response => {
        const data = response.data.photo_manifest;
        this.date = data.max_sol - 10;
      })
      .then(()=>{
        
        const marsURL = `${this.mars}?sol=${this.date}&page=${this.page}&api_key=${this.apiKey}`;

        axios.get(marsURL)
        .then(response => {
          this.photos = [];

          let data = response.data.photos;

          const length = data.length;
          for(let i=0; i<length; i++){
            const photo = {
              date: data[i].earth_date,
              source: data[i].img_src,
              rover: data[i].rover.name
            }
            this.photos.push(photo);
          }
        });
      });
    }
  },

  mounted(){
    this.getPhotos();
  }
}
</script>