<template>
  <ButtonCounter :disabled="flag" />
</template>

<script>
import ButtonCounter from "./ButtonCounter";
export default {
  components: {
    ButtonCounter
  },
  data() {
    return {
      flag: true
    };
  }
};
</script>
