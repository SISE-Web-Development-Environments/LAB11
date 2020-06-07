<template>
  <div id="app">
    Hello World!
    <MainPage />
  </div>
</template>

<script>
import MainPage from "./pages/MainPage";
export default {
  name: "App",
  components: {
    MainPage
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
