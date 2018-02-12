<template>
  <div class="elementInputText">
    <p>
      <label>
        {{ name }}
        <input
          type="text"
          v-model="currentText"
          @input="onInput"
        >
      </label>
    </p>
  </div>
</template>

<script>
export default {
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
  .elementInputText {
    display: inline-block;
  }
</style>
