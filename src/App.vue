<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <RegisterPage/> -->
    <buttonCounter></buttonCounter>
    <disableButton></disableButton>
    <messageLine sender="Eran" message="hello everyone!!!"></messageLine>
    <messagesPage></messagesPage>
  </div>
</template>

<script>
// import HelloWorld from './pages/HelloWorld.vue'
// import RegisterPage from './pages/RegisterPage'
import messagesPage from "./pages/messagesPage";
import buttonCounter from "./components/buttonCounter";
import disableButton from "./components/disableButton";
import messageLine from "./components/messageLine";

export default {
  name: "App",
  components: {
    buttonCounter,
    disableButton,
    messageLine,
    messagesPage
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
