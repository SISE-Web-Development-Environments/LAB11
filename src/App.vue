<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <RegisterPage/> -->
    <buttonCounter></buttonCounter>
  </div>
</template>

<script>
// import HelloWorld from './pages/HelloWorld.vue'
// import RegisterPage from './pages/RegisterPage'
import buttonCounter from "./components/button-counter";

export default {
  name: "App",
  components: {
    buttonCounter
  }
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
