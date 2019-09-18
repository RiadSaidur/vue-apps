<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>REDblog</h1>
    <Login/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
export default {
  name: 'home',
  components: {
    Login
  }
}
</script>
