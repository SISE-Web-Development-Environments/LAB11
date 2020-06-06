<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <RegisterPage/> -->
    <buttonCounter></buttonCounter>
    <disableButton></disableButton>
    <messagesPage></messagesPage>
  </div>
</template>

<script>
// import HelloWorld from './pages/HelloWorld.vue'
// import RegisterPage from './pages/RegisterPage'
import messagesPage from "./pages/messagesPage";
import buttonCounter from "./components/buttonCounter";
import disableButton from "./components/disableButton";

export default {
  name: "App",
  components: {
    buttonCounter,
    disableButton,
    messagesPage
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
