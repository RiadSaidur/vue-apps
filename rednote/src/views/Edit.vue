<template>
  <div>
    <h2>Edit Note {{id}}</h2>
    <v-form>
      <v-textarea label='title' v-model="title"></v-textarea>
      <v-textarea label='note' v-model="note"></v-textarea>
      <v-btn @click='save'>Save</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  props:['id']
}
</script>