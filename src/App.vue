<template>
  <div>
    <Controls :data="data" @remove-edge="removeEdge" v-if="data"/>
    <Sankey :data="data"/>
  </div>
</template>

<script>
import Sankey from "./components/Sankey.vue";
import Controls from "./components/Controls.vue";

export default {
  name: "App",
  components: { Sankey, Controls },
  data: () => ({
    data: null,
    edgeToRemove: null
  }),
  async mounted() {
    const response = await fetch(
      "https://raw.githubusercontent.com/ozlongblack/d3/master/energy.json"
    );
    this.data = await response.json();
  },
  methods: {
    removeEdge(edge) {
      console.log(edge);
      // TODO Remove edge functionality
      // const source = edge.source;
      // const target = edge.target;
      // const sourceUsedAnywhere =
      //   this.data.links.filter(
      //     link =>
      //       link.source.name === source.name || link.target.name === source.name
      //   ).length > 1;
      // const targetUsedAnywhere =
      //   this.data.links.filter(
      //     link =>
      //       link.target.name === source.name || link.target.name === target.name
      //   ).length > 1;
      // if (!sourceUsedAnywhere) this.data.nodes.splice(edge.source.index, 1);
      // if (!targetUsedAnywhere) this.data.nodes.splice(edge.target.index, 1);
      // this.data.links.splice(edge.index, 1);
    }
  }
};
</script>

