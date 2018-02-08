<template>
  <div>
    <button @click="add('Heading1Element')">
      <i class="fas fa-heading"></i>
      <span>Heading 1</span>
    </button>
    <button @click="add('Heading2Element')">
      <i class="fas fa-heading"></i>
      <span>Heading 2</span>
    </button>
    <button @click="add('Heading3Element')">
      <i class="fas fa-heading"></i>
      <span>Heading 3</span>
    </button>
    <button @click="add('ParagraphElement')">
      <i class="fas fa-paragraph"></i>
      <span>Paragraph</span>
    </button>
    <button @click="add('LinkElement')">
      <i class="fas fa-link"></i>
      <span>Link</span>
    </button>
    <button @click="add('OrderedListElement')">
      <i class="fas fa-list-ol"></i>
      <span>OrderedList</span>
    </button>
    <button @click="add('UnorderedListElement')">
      <i class="fas fa-list-ul"></i>
      <span>UnorderedList</span>
    </button>
    <button @click="add('ImageElement')">
      <i class="fas fa-image"></i>
      <span>Image</span>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    add (target) {
      this.$emit('add', target)
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
