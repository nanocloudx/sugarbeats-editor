<template>
  <div class="previewScene" :class="{ half: scene === 'BOTH'}">
    <preview-buttons @preview="updatePreviewTarget" />
    <div v-show="previewTarget === 'BROWSER'">
      <div class="previewRender" v-html="getHtml"></div>
    </div>
    <div v-show="previewTarget === 'HTML'">
      <div class="previewCode">{{ getHtml }}</div>
    </div>
    <div v-show="previewTarget === 'MARKDOWN'">
      <div class="previewCode">{{ getMarkdown }}</div>
    </div>
    <div v-show="previewTarget === 'JSON'">
      <div class="previewCode">{{ getJSON }}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import PreviewButtons from './PreviewButtons'

export default {
  components: {
    PreviewButtons
  },
  computed: {
    ...mapState([
      'scene',
      'previewTarget'
    ]),
    ...mapGetters([
      'getHtml',
      'getMarkdown',
      'getJSON'
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
  .previewScene {
    width: 100%;
    margin: 0 20px;
    &.half {
      width: 50%;
    }
  }
  .previewRender, .previewCode {
    min-height:70vh;
    margin: 10px 0;
    padding: 10px;
    border: 5px solid #555;
  }
  .previewRender {
    word-break: break-all;
    background-color: #fff;
    color: #333;
  }
  .previewCode {
    background-color: #333;
    color: #fff;
    font-family: Menlo, monospace;
    white-space: pre;
  }
</style>
