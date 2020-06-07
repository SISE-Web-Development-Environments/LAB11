<template>
  <div>
    <h1>Recipe Preview</h1>
    <div>
      {{ id }}
    </div>
    <div>
      {{ title }}
    </div>
    <div>
      <img :src="image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipePreview",
  mounted() {
    console.log("mounted 2");
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
};
</script>
