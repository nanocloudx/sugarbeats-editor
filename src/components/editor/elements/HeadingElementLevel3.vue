<template>
  <div>
    <element-icon :faName="'heading'" />
    <element-controller :id="id" />
    <element-input-text :name="'ClassName'" :text="className" @update="updateClassName" />
    <element-input-text :name="'Text'" :text="text" @update="updateText" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ElementIcon from './parts/ElementIcon'
import ElementController from './parts/ElementController'
import ElementInputText from './parts/ElementInputText'

export default {
  props: ['id'],
  components: {
    ElementIcon,
    ElementController,
    ElementInputText
  },
  data () {
    return {
      text: '',
      className: ''
    }
  },
  computed: {
    ...mapGetters([
      'getSectionById'
    ])
  },
  methods: {
    ...mapActions([
      'updateSection'
    ]),
    update () {
      this.updateSection({
        id: this.id,
        context: {
          text: this.text,
          className: this.className,
          html: this.formatHtml(),
          markdown: this.formatMarkdown()
        }
      })
    },
    updateText (text) {
      this.text = text
      this.update()
    },
    updateClassName (className) {
      this.className = className
      this.update()
    },
    formatHtml () {
      return `<h3 class="${this.className}">${this.text}</h3>`
    },
    formatMarkdown () {
      return `### ${this.text}`
    }
  },
  created () {
    const context = this.getSectionById(this.id).context
    this.text = context.text || ''
    this.className = context.className || ''
  },
  mounted () {
    this.update()
  }
}
</script>
