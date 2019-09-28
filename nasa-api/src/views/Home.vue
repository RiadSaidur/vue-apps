<template>
  <v-app>

    <v-container class="pt-10 ma-0">

      <h2 class="font-weight-black text-center">What do you wanna see?</h2>

      <v-list v-for="category in categories" :key="category.id">

        <v-list-item >
          <v-btn flat @click="navto(category.id)">
            {{ category.title }}
          </v-btn>
        </v-list-item>

      </v-list>

    </v-container>

  </v-app>
</template>

<script>
export default {
  data(){
    return{
      categories: [
        {
          id: 1,
          title: `NASA Photo of the Day`,
          route: `photofday`
        },
        {
          id: 2,
          title: `**Maybe I'll put something here**`,
          route: `about`
        }
      ]
    }
  },
  methods: {
    navto(id){
      const route = {name: this.categories[id-1].route};
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
  p{
    cursor: pointer;
  }
</style>