<template>
  <button
    class="commonButton"
    :class="{selected: isSelected}"
    @click="onClick"
  >
    <i :class="faName"></i>
    <span v-if="!short" class="name">{{ name }}</span>
  </button>
</template>

<script>
export default {
  props: ['faName', 'name', 'isSelected', 'short'],
  methods: {
    onClick () {
      this.$emit('select')
    }
  }
}
</script>

<style lang="scss" scoped>
.commonButton {
  box-sizing: border-box;
  color: #8b939b;
  background-color: #181c1f;
  font-size: 20px;
  line-height: 12px;
  padding: 5px 10px;
  border: none;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  transition: border .2s ease;
  outline: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &.selected {
    background-color: #0b0b0b;
    color: #fff;
  }
  &:hover {
    border-bottom: 3px solid #CCAC55;
  }
  .name {
    font-size: 12px;
    margin-left: 5px;
  }
}
</style>
