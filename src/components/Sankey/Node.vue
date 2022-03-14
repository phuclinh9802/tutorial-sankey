<template>
  <rect
    :x="data.x0"
    :y="data.y0"
    :width="data.x1 - data.x0"
    :height="data.y1 - data.y0"
    :fill="colors(data.index / length)"
  />
</template>

<script>
import * as d3 from "d3";

export default {
  name: "Node",
  props: {
    data: Object,
    colors: Function,
    length: Number,
    width: Number
  },
  computed: {
    textStyle() {
      return {
        fill: d3.rgb(this.colors(this.data.index / this.length)).darker(),
        alignmentBaseline: "middle",
        textAnchor: this.data.x0 < this.width / 2 ? "start" : "end",
        fontSize: 9
      };
    }
  }
};
</script>