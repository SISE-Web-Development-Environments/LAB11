<template>
  <div>
    <RecipePreview
      v-for="r in recipes"
      :key="r.id"
      :id="r.id"
      :title="r.title"
      :image="r.image"
    />
  </div>
</template>

<script>
import RecipePreview from "../components/RecipePreview";
export default {
  name: "MainPage",
  components: {
    RecipePreview
  },
  mounted() {
    console.log("mounted");
  },
  data() {
    return {
      recipes: [
        {
          id: 641726,
          title: "Dulce De Leche Brownies",
          readyInMinutes: 45,
          image: "https://spoonacular.com/recipeImages/641726-556x370.jpg",
          aggregateLikes: 29
        },
        {
          id: 651389,
          title: "Medenjaci - Croatian Honey Spice Cookies",
          readyInMinutes: 45,
          image: "https://spoonacular.com/recipeImages/651389-556x370.jpg",
          aggregateLikes: 6
        }
      ]
    };
  }
};
</script>
