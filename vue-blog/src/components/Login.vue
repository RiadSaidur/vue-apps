<template>
  <div class="container">
    <div class="login" v-if="!allow">
      <form @submit.prevent="auth">
        <input type="text" v-model="id" placeholder="user">
        <input type="password" v-model="pass" placeholder="password">
        <input type="submit" value="Log In">
      </form>
    </div>
    <div v-if="allow">
      <Blogs @logOut='logOut' />
    </div>
  </div>
</template>

<script>
import Blogs from './Blogs.vue'
export default {
  name: 'login',
  components:{
    Blogs
  },
  data(){
    return{
      allow: false,
      id: "",
      pass: "",
      users: [
        {
          ids: 'riad',
          passes: 1234
        },
        {
          ids: 'rakib',
          passes: 1234
        }
      ]
    }
  },
  methods: {
    auth(){
      for(let i=0; i<2; i++){
        if(this.users[i].ids == this.id){
          if(this.users[i].passes ==  this.pass){
            this.allow = true;
            this.pass="";
            return;
          }
        }
      }
      this.pass="";
      this.allow = false;
    },
    logOut(){
      this.allow = false;
    }
  }
}
</script>

<style scoped>
  input{
    display: block;
    height: 3rem;
    width: 50vw;
    margin-bottom: 1rem;
    border-radius: 10px;
    font-size: 1.2rem;
  }
  .login{
    display: flex;
    /* align-items: center; */
    justify-content: center;
  }
  input[type='submit']{
    border: none;
    cursor: pointer;
    background-color: #42b983;
  }
  input[type='submit']:active{
    transform: scale(.95);
    transition: 100ms ease-in-out;
  }
  input[type='submit']:focus{
    outline: none;
  }
</style>