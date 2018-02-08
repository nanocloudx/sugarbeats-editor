<template>
  <div class="line">
    <div class="controller">
      <p>
        OrderedList
        <button @click="moveUpSection(id)">↑</button>
        <button @click="removeSection(id)">x</button>
        <button @click="moveDownSection(id)">↓</button>
      </p>
    </div>
    <div class="editor">
      <p>
        <label><textarea v-model="text" @keyup="update"></textarea></label>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'OrderedListElement',
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
      const items = this.text.split(/\r\n|\n/)
      return `<ol>\n${items.map(item => `  <li>${item}</li>`).join('\n')}\n</ol>`
    },
    formatMarkdown () {
      const items = this.text.split(/\r\n|\n/)
      return `${items.map(item => `1. ${item}`).join('\n')}`
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
