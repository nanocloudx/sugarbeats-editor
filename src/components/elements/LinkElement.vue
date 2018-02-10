<template>
  <div>
    <element-icon :faName="'link'" />
    <element-controller :id="id" />
    <element-input-text :name="'ClassName'" :text="className" @update="updateClassName" />
    <element-input-text :name="'Url'" :text="url" @update="updateUrl" />
    <element-input-text :name="'Text'" :text="text" @update="updateText" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ElementIcon from './parts/ElementIcon'
import ElementController from './parts/ElementController'
import ElementInputText from './parts/ElementInputText'

export default {
  name: 'LinkElement',
  props: ['id'],
  components: {
    ElementIcon,
    ElementController,
    ElementInputText
  },
  data () {
    return {
      url: '',
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
          url: this.url,
          className: this.className,
          html: this.formatHtml(),
          markdown: this.formatMarkdown()
        }
      })
    },
    updateUrl (url) {
      this.url = url
      this.update()
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
      return `<p><a class="${this.className}" href="${this.url}">${this.text}</a></p>`
    },
    formatMarkdown () {
      return `[${this.text}](${this.url})`
    }
  },
  created () {
    const context = this.getSectionById(this.id).context
    this.url = context.url || ''
    this.text = context.text || ''
    this.className = context.className || ''
  },
  mounted () {
    this.update()
  }
}
</script>
