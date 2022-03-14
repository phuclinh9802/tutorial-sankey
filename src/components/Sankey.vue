<template>
  <div>
    <svg :width="width" :height="height" v-if="data">
      <g>
        <defs>
          <Gradient
            :colors="colors"
            :data="link"
            :length="length"
            :key="`${link.source.name}-${link.target.name}`"
            v-for="link in links"
          ></Gradient>
        </defs>
        <Link
          :data="link"
          :colors="colors"
          :length="length"
          :key="`${link.source.name}-${link.target.name}`"
          v-for="link in links"
        ></Link>
      </g>
      <g>
        <Node
          :data="node"
          :colors="colors"
          :length="length"
          :width="width"
          :key="node.name"
          v-for="node in nodes"
        ></Node>
        <NodeTitle
          :data="node"
          :colors="colors"
          :length="length"
          :width="width"
          :key="node.name + node.index"
          v-for="node in nodes"
        ></NodeTitle>
      </g>
    </svg>
  </div>
</template>

<script>
import * as d3 from "d3";
import { sankey, sankeyJustify } from "d3-sankey";
import sankeyMixin from "../mixins/sankey-mixin";
import Node from "./Sankey/Node.vue";
import NodeTitle from "./Sankey/NodeTitle.vue";
import Link from "./Sankey/Link.vue";
import Gradient from "./Sankey/Gradient.vue";

export default {
  name: "Sankey",
  components: { Node, NodeTitle, Link, Gradient },
  props: {
    data: Object
  },
  mixins: [sankeyMixin],
  data: () => ({
    width: 700,
    height: 600,
    nodes: [],
    links: [],
    sankey: null
  }),
  methods: {
    updateSankey() {
      this.sankey = sankey()
        .nodeAlign(sankeyJustify)
        .nodeWidth(10)
        .nodePadding(10)
        .extent([[0, 0], [this.width, this.height]]);
      const { nodes, links } = this.sankey(this.data);
      this.nodes = nodes;
      this.links = links;
    }
  },
  computed: {
    colors() {
      return d3.interpolateCividis;
    },
    length() {
      return this.nodes.length;
    }
  },
  watch: {
    data: {
      deep: true,
      immediate: true,
      handler(data) {
        if (!data) return;
        this.updateSankey();
      }
    }
  }
};
</script>