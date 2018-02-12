<template>
  <div class="previewButtons">
    <common-button
      :faName="'fas fa-window-maximize'"
      :name="'Browser'"
      :isSelected="previewTarget === 'BROWSER'"
      @select="updatePreviewTarget('BROWSER')"
    />
    <common-button
      :faName="'fas fa-code'"
      :name="'HTML'"
      :isSelected="previewTarget === 'HTML'"
      @select="updatePreviewTarget('HTML')"
    />
    <common-button
      :faName="'far fa-arrow-alt-circle-down'"
      :name="'Markdown'"
      :isSelected="previewTarget === 'MARKDOWN'"
      @select="updatePreviewTarget('MARKDOWN')"
    />
    <common-button
      :faName="'fab fa-js-square'"
      :name="'JSON'"
      :isSelected="previewTarget === 'JSON'"
      @select="updatePreviewTarget('JSON')"
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
      'previewTarget'
    ])
  },
  methods: {
    ...mapActions([
      'updatePreviewTarget'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .previewButtons {
    display: flex;
  }
</style>
