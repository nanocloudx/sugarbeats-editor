<template>
  <div class="elementIcon">
    <p class="icon"><i :class="`fas fa-${faName}`"></i></p>
  </div>
</template>

<script>
export default {
  name: 'ElementIcon',
  props: ['faName']
}
</script>

<style lang="scss" scoped>
  .elementIcon {
    display: inline-block;
    .icon {
      font-size: 16px;
    }
  }
</style>
