<template>
  <div class="container">
    <select name="edges" id="edges" v-model="selectedEdge">
      <option
        :key="link.index"
        :value="link"
        v-for="link in data.links"
      >{{link.source.name}} -> {{link.target.name}}</option>
    </select>
    <button :disabled="!selectedEdge" @click="removeEdge">Remove edge</button>
  </div>
</template>

<script>
export default {
  name: "Controls",
  props: {
    data: Object
  },
  data: () => ({
    selectedEdge: null
  }),
  methods: {
    removeEdge() {
      this.$emit("remove-edge", this.selectedEdge);
      this.selectedEdge = null;
    }
  }
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: 300px 100px;
  grid-gap: 10px;
  margin-bottom: 20px;
  position: sticky;
  top: 10px;
}
</style>

