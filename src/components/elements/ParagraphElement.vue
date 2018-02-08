<template>
  <div class="line">
    <div class="controller">
      <p>
        Paragraph
        <button @click="moveUpSection(id)">↑</button>
        <button @click="removeSection(id)">x</button>
        <button @click="moveDownSection(id)">↓</button>
      </p>
    </div>
    <div class="editor">
      <p><label><textarea v-model="text" @keyup="update"></textarea></label></p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ParagraphElement',
  props: ['id'],
  data () {
    return {
      text: ''
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
          html: this.formatHtml(),
          markdown: this.formatMarkdown()
        }
      })
    },
    formatHtml () {
      return `<p>${this.text}</p>`
    },
    formatMarkdown () {
      return `${this.text}`
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
