<template>
  <li v-if="timestamp">
    ({{ sender }}) {{ message }} (at timestamp: {{ timestamp }})
  </li>
  <li v-else>({{ sender }}) {{ message }}</li>
</template>

<script>
export default {
  props: {
    sender: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    timestamp: {
      type: Number,
      required: false,
      default: () => undefined
    }
  }
};
</script>
