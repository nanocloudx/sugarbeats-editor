<template>
  <div class="elementController">
    <button class="button" @click="moveUpSection(id)"><i class="fas fa-arrow-up"></i></button>
    <button class="button" @click="moveDownSection(id)"><i class="fas fa-arrow-down"></i></button>
    <button class="button" @click="duplicateSection(id)"><i class="far fa-copy"></i></button>
    <button class="button" @click="removeSection(id)"><i class="far fa-trash-alt"></i></button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ElementController',
  props: ['id'],
  methods: {
    ...mapActions([
      'moveUpSection',
      'moveDownSection',
      'duplicateSection',
      'removeSection'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .elementController {
    display: inline-block;
    .button {
      border: none;
      padding: 5px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
    }
  }
</style>
