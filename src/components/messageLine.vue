<template>
  <li>{{ sender }}) {{ message }} (at timestamp: {{ timestamp }})</li>
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
      required: true
    }
  }
};
</script>
