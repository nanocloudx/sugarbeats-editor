<template>
  <div class="elementInputTextArea">
    <label>
      {{ name }}
      <textarea
        v-model="currentText"
        @input="onInput"
      ></textarea>
    </label>
  </div>
</template>

<script>
export default {
  name: 'ElementInputTextArea',
  props: ['name', 'text'],
  data () {
    return {
      currentText: this.text
    }
  },
  methods: {
    onInput () {
      this.$emit('update', this.currentText)
    }
  }
}
</script>

<style lang="scss" scoped>
.elementInputTextArea {
  display: inline-block;
}
</style>
