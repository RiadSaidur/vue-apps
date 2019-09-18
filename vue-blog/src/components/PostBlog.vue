<template>
  <div class="post">
    <div class="signOut">
      <button @click="logOut">Log Out</button>
    </div>
    <form @submit.prevent='postBlog(event)'>
      <input type="text" v-model="title" placeholder="blog title">
      <textarea v-model="msg" cols="5" rows="3" placeholder="blog"></textarea>
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
export default {
  name: "PostBlog",
  data(){
    return{
        title: "",
        msg: ""
    }
  },
  methods:{
    postBlog(){
      event.preventDefault;
      const newPost = {
        title: this.title,
        msg: this.msg
      }
      this.$emit('newPost', newPost)
      this.title="";
      this.msg="";
    },
    logOut(){
      this.$emit('logOut');
    }
  }
}
</script>

<style scoped>
  .post{
    padding: 2rem 0;
    background-color: grey;
  }
  input, textarea{
    width: 90vw;
    display: block;
    margin: 0 auto .5rem auto;
  }
  input{
    height: 2rem;
  }
  textarea{
    height: 4rem;
  }
</style>