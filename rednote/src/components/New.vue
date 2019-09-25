<template>
  <div>
    <h2>New Note</h2>
    <v-form>
      <v-textarea label='title' v-model="title"></v-textarea>
      <v-textarea label='note' v-model="note"></v-textarea>
      <v-btn @click='save'>Save</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title: '',
      note: ''
    }
  },
  methods: {
    save(){
      let id = 0;
      if(localStorage.notes){
        id = localStorage.id;
        id++;
        localStorage.id = id;
        const newNote = {
          id: id,
          title: this.title,
          note: this.note
        };
        let notes = [];
        const temp = JSON.parse(localStorage.notes);
        const size = temp.length;
        for(let i=0; i<size; i++){
          notes.push(temp[i]);
        }
        notes.push(newNote);
        localStorage.notes = JSON.stringify(notes);
      } else{
        localStorage.id = id;
        const newNote = {
          id: id,
          title: this.title,
          note: this.note
        };
        localStorage.notes = JSON.stringify(newNote);
      }
      this.title = '';
      this.note = '';
    }
  }
}
</script>