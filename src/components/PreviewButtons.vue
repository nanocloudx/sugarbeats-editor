<template>
  <div>
    <button @click="preview('BROWSER')">
      <i class="fas fa-window-maximize"></i>
      <span>Browser</span>
    </button>
    <button @click="preview('HTML')">
      <i class="fas fa-code"></i>
      <span>HTML</span>
    </button>
    <button @click="preview('MARKDOWN')">
      <i class="far fa-arrow-alt-circle-down"></i>
      <span>Markdown</span>
    </button>
    <button @click="preview('JSON')">
      <i class="fab fa-js-square"></i>
      <span>JSON</span>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    preview (target) {
      this.$emit('preview', target)
    }
  }
}
</script>

<style lang="scss" scoped>
  button {
    box-sizing: border-box;
    width: 100px;
    font-size: 20px;
    line-height: 12px;
    padding: 5px;
    span {
      font-size: 12px;
      &:before {
        content: '\a';
        white-space: pre;
      }
    }
  }
</style>
