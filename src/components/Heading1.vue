<template>
  <div class="line">
    <div class="controller">
      <p>
        Heading1
        <button @click="moveUpSection(id)">↑</button>
        <button @click="removeSection(id)">x</button>
        <button @click="moveDownSection(id)">↓</button>
      </p>
    </div>
    <div class="editor">
      <p><label><input type="text" v-model="text" @keyup="update"></label></p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Heading1',
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
      return `<h1>${this.text}</h1>`
    },
    formatMarkdown () {
      return `# ${this.text}`
    }
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
