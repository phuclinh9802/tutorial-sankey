<template>
  <text
    :x="data.x0 < width / 2 ? data.x1 + 6 : data.x0 - 6"
    :y="(data.y1 + data.y0) / 2"
    :style="titleStyles"
  >{{data.name}}</text>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "NodeTitle",
  props: {
    data: Object,
    colors: Function,
    length: Number,
    width: Number
  },
  computed: {
    titleStyles() {
      return {
        fill: d3.rgb(this.colors(this.data.index / this.length)).darker(),
        alignmentBaseline: "middle",
        textAnchor: this.data.x0 < this.width / 2 ? "start" : "end",
        fontSize: 10,
        fontFamily: "sans-serif",
        pointerEvents: "none"
      };
    }
  }
};
</script>

