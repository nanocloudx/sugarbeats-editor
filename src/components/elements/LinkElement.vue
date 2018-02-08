<template>
  <div class="line">
    <div class="controller">
      <p>
        Link
        <button @click="moveUpSection(id)">↑</button>
        <button @click="removeSection(id)">x</button>
        <button @click="moveDownSection(id)">↓</button>
      </p>
    </div>
    <div class="editor">
      <p>
        <label>Url<input type="text" v-model="url" @keyup="update"></label>
        <label>Text<input type="text" v-model="text" @keyup="update"></label>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LinkElement',
  props: ['id'],
  data () {
    return {
      text: '',
      url: ''
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
          text: this.text,
          url: this.url,
          html: this.formatHtml(),
          markdown: this.formatMarkdown()
        }
      })
    },
    formatHtml () {
      return `<p><a href="${this.url}">${this.text}</a></p>`
    },
    formatMarkdown () {
      return `[${this.text}](${this.url})`
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
