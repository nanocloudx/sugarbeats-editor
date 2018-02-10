<template>
  <div id="app">
    <h1>しゅごいえでぃたー(実装中)</h1>
    <div>
      <h2>Editor</h2>
      <append-buttons @add="addSection" />
      <template v-for="section in sectionList">
        <component
          :is="section.type"
          :key="section.id"
          :id="section.id"
        />
      </template>
    </div>
    <div>
      <h2>Preview</h2>
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
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import AppendButtons from './components/AppendButtons'
import PreviewButtons from './components/PreviewButtons'
import Heading1Element from './components/elements/Heading1Element'
import Heading2Element from './components/elements/Heading2Element'
import Heading3Element from './components/elements/Heading3Element'
import ParagraphElement from './components/elements/ParagraphElement'
import LinkElement from './components/elements/LinkElement'
import OrderedListElement from './components/elements/OrderedListElement'
import UnorderedListElement from './components/elements/UnorderedListElement'
import ImageElement from './components/elements/ImageElement'

export default {
  name: 'app',
  components: {
    AppendButtons,
    PreviewButtons,
    Heading1Element,
    Heading2Element,
    Heading3Element,
    ParagraphElement,
    LinkElement,
    OrderedListElement,
    UnorderedListElement,
    ImageElement
  },
  computed: {
    ...mapState([
      'sectionList',
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
      'updatePreviewTarget',
      'addSection'
    ])
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.previewRender {
  margin: 10px 0;
  padding: 10px;
  border: 5px solid #555;
}
.previewCode {
  margin: 10px 0;
  padding: 10px;
  border: 5px solid #555;
  background-color: #333;
  color: #fff;
  font-family: Menlo, monospace;
  white-space: pre;
}
</style>
