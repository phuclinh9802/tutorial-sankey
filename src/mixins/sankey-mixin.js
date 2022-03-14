export default {
  methods: {
    strToId(string) {
      return string.replace(/\s|'/g, "-").toLowerCase();
    },
    getGradientId(source, target) {
      return `gradient-${this.strToId(source)}-${this.strToId(target)}`;
    }
  }
};
