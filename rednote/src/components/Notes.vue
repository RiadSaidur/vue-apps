<template>
  <div>
    <div v-for="note in notes" :key="note.id">
      <v-card>
        <v-card-title>{{note.title}}</v-card-title>
        <v-card-text class="white--text">
          {{note.note}}
        </v-card-text>

        <v-card-actions>
          <v-btn text @click="edit({path: `/${note.id}/edit`})">
            <v-icon left>mdi-all-inclusive</v-icon>
            <span>Edit</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  props:['notes'],
  methods:{
    edit(route){
      this.$router.push(route);
    }
  }
}
</script>