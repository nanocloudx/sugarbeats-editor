<template>
  <div class="sceneButtons">
    <common-button
      :faName="'far fa-edit'"
      :name="'Editor'"
      :isSelected="scene === 'EDITOR'"
      @select="updateScene('EDITOR')"
    />
    <common-button
      :faName="'fas fa-exchange-alt'"
      :name="'Both'"
      :isSelected="scene === 'BOTH'"
      @select="updateScene('BOTH')"
    />
    <common-button
      :faName="'fas fa-desktop'"
      :name="'Preview'"
      :isSelected="scene === 'PREVIEW'"
      @select="updateScene('PREVIEW')"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CommonButton from '../common/CommonButton'

export default {
  components: {
    CommonButton
  },
  computed: {
    ...mapState([
      'scene'
    ])
  },
  methods: {
    ...mapActions([
      'updateScene'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .sceneButtons {
    display: flex;
  }
</style>
