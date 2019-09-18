<template>
  <div class="hello">
    <div class="blog">
       <ul>
         <li v-for="info in moreInfo" :key="info.title">
           <h2> {{ info.title }} </h2>
           <p> {{info.msg}} </p>
         </li>
       </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'posts',
  props:['moreInfo']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  padding: 0;
}
  /* .hello{
    width: 100vw;
    position: relative;
  } */
  /* .blog{
    position: absolute;
    width: 80vw;
  } */
  ul{
    list-style: none;
  }

  ul li:nth-child(odd){
    background-color: #eee;
  }

  li{
    /* width: 100vw; */
    line-height: 2rem;
    border: 1px solid gray;
    border-radius: 10px;
    margin: 1rem 0;
  }

  li:last-child {
    margin-bottom: 0px;
  }
</style>
