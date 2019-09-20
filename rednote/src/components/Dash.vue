<template>
  <div>
    <v-btn @click="navto({name: 'new'})">
      <v-icon left>mdi-newspaper-plus</v-icon>
      <span>New Note</span>
    </v-btn>
    <Notes :notes='notes'/>
  </div>
</template>

<script>
import Notes from './Notes'
export default {
  components: {
    Notes
  },
  data(){
    return{
      notes: [
        {
          id: 1,
          title: "Lorem 1",
          note: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea consequatur voluptate laudantium, ex labore, esse dolor eos nemo illum doloribus voluptatum saepe nihil harum aperiam alias qui in, fugit asperiores!"
        },
        {
          id: 2,
          title: "Lorem 2",
          note: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea consequatur voluptate laudantium, ex labore, esse dolor eos nemo illum doloribus voluptatum saepe nihil harum aperiam alias qui in, fugit asperiores!"
        },
        {
          id: 3,
          title: "Lorem 3",
          note: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea consequatur voluptate laudantium, ex labore, esse dolor eos nemo illum doloribus voluptatum saepe nihil harum aperiam alias qui in, fugit asperiores!"
        },
        {
          id: 4,
          title: "Lorem 4",
          note: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea consequatur voluptate laudantium, ex labore, esse dolor eos nemo illum doloribus voluptatum saepe nihil harum aperiam alias qui in, fugit asperiores!"
        },
        {
          id: 5,
          title: "Lorem 5",
          note: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea consequatur voluptate laudantium, ex labore, esse dolor eos nemo illum doloribus voluptatum saepe nihil harum aperiam alias qui in, fugit asperiores!"
        }
      ]
    }
  },
  methods: {
    navto(route){
      this.$router.push(route);
    }
  }
}
</script>