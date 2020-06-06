<template>
  <div></div>
</template>

<script>
export default {
  props: {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    readyInMinutes: { type: Number, required: true },
    image: { type: String, required: true },
    aggregateLikes: {
      type: Number,
      required: false,
      default() {
        return undefined;
      }
    }
  }
};
</script>
