<template>
  <div>
    <h2>Edit Note {{id}}</h2>
    <v-form>
      <v-textarea label='title' v-model="title"></v-textarea>
      <v-textarea label='note' v-model="note"></v-textarea>
      <v-btn @click="save({name: 'home'})">Save</v-btn>
    </v-form>
    <div class="dlt">
      <v-btn @click="dlt({name: 'home'})">Delete Note</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props:['id'],
  data(){
    return{
      index: '',
      title: '',
      note: ''
    }
  },
  methods: {
    save(route){
      let data = JSON.parse(localStorage.notes);

      data.splice(this.index, 1);

      const newNote = {
        id: this.id,
        title: this.title,
        note: this.note
      };

      data.push(newNote);
      
      localStorage.notes = JSON.stringify(data);
      
      this.$router.push(route);
    },
    dlt(route){
      let data = JSON.parse(localStorage.notes);

      data.splice(this.index, 1);

      localStorage.notes = JSON.stringify(data);

      this.$router.push(route);
    }
  },
  mounted(){
    let data = JSON.parse(localStorage.notes);

    const length = data.length;
    for(let i=0; i<length; i++){
      if(data[i].id == this.id){
        this.index = i;
        this.title = data[i].title;
        this.note =  data[i].note;
        break;
      }
    }
  }
}
</script>

<style scoped>
  .dlt{
    padding: 1rem 0;
  }
</style> scoped>

</style>