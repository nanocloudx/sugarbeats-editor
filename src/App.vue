<template>
  <div id="app">
    <header-section />
    <div class="separator">
      <editor-scene v-show="scene === 'EDITOR' || scene === 'BOTH'" />
      <preview-scene v-show="scene === 'PREVIEW' || scene === 'BOTH'" />
    </div>
    <footer-section />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EditorScene from './components/editor/EditorScene'
import PreviewScene from './components/preview/PreviewScene'
import HeaderSection from './components/app/HeaderSection'
import FooterSection from './components/app/FooterSection'

export default {
  name: 'app',
  components: {
    EditorScene,
    PreviewScene,
    HeaderSection,
    FooterSection
  },
  computed: {
    ...mapState([
      'scene'
    ])
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #181c1f;
  color: #fff;
}
.separator {
  display: flex;
  justify-content: space-around;
}
</style>
