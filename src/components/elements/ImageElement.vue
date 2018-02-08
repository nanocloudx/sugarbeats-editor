<template>
  <div class="line">
    <div class="controller">
      <p>
        Image
        <button @click="moveUpSection(id)">↑</button>
        <button @click="removeSection(id)">x</button>
        <button @click="moveDownSection(id)">↓</button>
      </p>
    </div>
    <div class="editor">
      <p>
        <label>Url<input type="text" v-model="url" @keyup="update"></label>
        <label>Alternate<input type="text" v-model="alt" @keyup="update"></label>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ImageElement',
  props: ['id'],
  data () {
    return {
      url: '',
      alt: ''
    }
  },
  methods: {
    ...mapActions([
      'updateSection',
      'moveUpSection',
      'moveDownSection',
      'removeSection'
    ]),
    update () {
      this.updateSection({
        id: this.id,
        context: {
          url: this.url,
          alt: this.alt,
          html: this.formatHtml(),
          markdown: this.formatMarkdown()
        }
      })
    },
    formatHtml () {
      return `<img src="${this.url}" alt="${this.alt}">`
    },
    formatMarkdown () {
      return `![${this.alt}](${this.url})`
    }
  },
  mounted () {
    this.update()
  }
}
</script>

<style scoped>
  .line {
    overflow: hidden;
  }
  .controller {
    float: left;
  }
  .editor {
    float: left;
  }
</style>
