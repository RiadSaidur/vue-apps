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
      let key = 0;
      if(localStorage.notes){
        key = localStorage.key;
        key++;
        localStorage.key = key;
        const newNote = {
          id: key,
          title: this.title,
          note: this.note
        };
        let notes = JSON.parse(localStorage.notes);
        notes.push(newNote);
        console.log(notes);
      } else{
        localStorage.notes = key;
        const newNote = {
          id: key,
          title: this.title,
          note: this.note
        };
        localStorage.notes = JSON.stringify(newNote);
        // console.log('shite again', localStorage.notes);
      }
      this.title = '';
      this.note = '';
    }
  }
}
</script>