<template>
  <path
    :d="link(data)"
    :stroke-width="data.width"
    :stroke="`url(#${gradientId})`"
    fill="none"
    stroke-opacity="0.5"
  />
</template>

<script>
import { sankeyLinkHorizontal } from "d3-sankey";
import sankeyMixin from "@/mixins/sankey-mixin";

export default {
  name: "Link",
  props: {
    data: Object,
    length: Number,
    colors: Function
  },
  mixins: [sankeyMixin],
  computed: {
    link() {
      return sankeyLinkHorizontal();
    },
    gradientId() {
      return this.getGradientId(this.data.source.name, this.data.target.name);
    }
  }
};
</script>