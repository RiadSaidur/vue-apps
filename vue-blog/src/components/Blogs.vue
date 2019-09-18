<template>
  <div class="container">
    <PostBlog @newPost='addPost' @logOut='logOut' />
    <Posts :moreInfo="moreInfo" />
  </div>
</template>

<script>
import PostBlog from "./PostBlog"
import Posts from './Posts.vue'

export default {
  name: 'home',
  components:{
    Posts,
    PostBlog
  },
  data(){
    return{
      moreInfo: [
        {
          title: "Riad",
          msg: "Web Developer"
        },
        {
          title: "Rakib",
          msg: "Genius Developer"
        },
        {
          title: "Akash",
          msg: "Bolla Developer"
        }
      ]
    }
  },
  methods: {
    addPost(newPost){
      this.moreInfo = [...this.moreInfo, newPost];
    },
    logOut(){
      this.$emit('logOut');
    }
  }
}
</script>

<style scoped>
  
</style>