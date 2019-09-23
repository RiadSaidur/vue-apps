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
      notes:[]
    }
  },
  methods: {
    navto(route){
      this.$router.push(route);
    }
  },
  mounted() {
    if (localStorage.notes) {
      let note = JSON.parse(localStorage.notes);
      const size = note.length;
      for(let i=0; i<size; i++){
        this.notes.push(note[i]);
      }
    } else{
      console.log('shite');
    }
  }
}
</script>