<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <RegisterPage/> -->
    <ButtonCounter />
    <ButtonCounter />
    <DisableButton />
    <MessageLine sender="Eran" message="hello everyone!!!" />
    <MessagesPage />
  </div>
</template>

<script>
// import HelloWorld from './pages/HelloWorld.vue'
// import RegisterPage from './pages/RegisterPage'
import MessagesPage from "./pages/MessagesPage";
import ButtonCounter from "./components/ButtonCounter";
import DisableButton from "./components/DisableButton";
import MessageLine from "./components/MessageLine";

export default {
  name: "App",
  components: {
    ButtonCounter,
    DisableButton,
    MessageLine,
    MessagesPage
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
