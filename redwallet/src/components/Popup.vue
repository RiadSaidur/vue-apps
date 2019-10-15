<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn
        color="red lighten-2"
        dark
        v-on="on"
      >
      Save
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>
        Save Changes?
      </v-card-title>

      <v-card-text class="my-4">
        Once changed, you cannot revert back these changes
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="warning" text @click="canceled">
          Cancel
        </v-btn>
        <v-btn color="primary" text @click="accepted">
          I accept
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Popup',
  data(){
    return{
      dialog: false
    }
  },
  methods:{
    canceled(){
      this.dialog = false;
      this.$emit('canceled');
      return;
    },
    accepted(){
      this.dialog = false;
      this.$emit('accepted');
      return;
    }
  }
}
</script>