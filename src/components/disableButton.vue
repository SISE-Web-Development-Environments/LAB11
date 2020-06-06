<template>
  <div>
    <buttonCounter :disabled="flag"></buttonCounter>
  </div>
</template>

<script>
import buttonCounter from "./buttonCounter";
export default {
  components: {
    buttonCounter
  },
  data() {
    return {
      flag: true
    };
  }
};
</script>
