<template>
  <linearGradient
    :id="gradientId"
    :x1="data.source.x1"
    :x2="data.target.x0"
    gradientUnits="userSpaceOnUse"
  >
    <stop offset="0" :stop-color="colors(data.source.index / length)"></stop>
    <stop offset="100%" :stop-color="colors(data.target.index / length)"></stop>
  </linearGradient>
</template>

<script>
import sankeyMixin from "@/mixins/sankey-mixin";

export default {
  name: "Gradient",
  props: {
    data: Object,
    colors: Function,
    length: Number
  },
  mixins: [sankeyMixin],
  computed: {
    gradientId() {
      return this.getGradientId(this.data.source.name, this.data.target.name);
    }
  }
};
</script>

