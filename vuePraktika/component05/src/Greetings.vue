<template>
  <div>
    <h1>Hello {{name}}!</h1>
    <button @click="changeName">Not {{name}}?</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: "Anton"
    };
  },
  methods: {
    changeName() {
      this.name = this.name == "Anton" ? "Olga" : "Anton";
    }
  }
};
</script>

<style>
</style>
