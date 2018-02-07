<template>
  <div id="app">
    <h1>しゅごいえでぃたー</h1>
    <div>
      <h2>Editor</h2>
      <template v-for="section in sectionList">
        <component
          :is="section.type"
          :key="section.id"
          :id="section.id"
        />
      </template>
      <div>
        <button @click="addSection('Heading1')">Heading1</button>
        <button @click="addSection('Heading2')">Heading2</button>
        <button @click="addSection('Paragraph')">Paragraph</button>
      </div>
    </div>
    <div>
      <h2>Preview</h2>
      <div>
        <button @click="updatePreviewTarget('RENDER')">Render</button>
        <button @click="updatePreviewTarget('HTML')">HTML</button>
        <button @click="updatePreviewTarget('MARKDOWN')">Markdown</button>
        <button @click="updatePreviewTarget('JSON')">JSON</button>
      </div>
      <div v-show="previewTarget === 'RENDER'">
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
import Heading1 from './components/Heading1.vue'
import Heading2 from './components/Heading2.vue'
import Paragraph from './components/Paragraph.vue'

export default {
  name: 'app',
  components: {
    Heading1,
    Heading2,
    Paragraph
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
