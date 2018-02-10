<template>
  <div>
    <element-icon :faName="'image'" />
    <element-controller :id="id" />
    <element-input-text :name="'ClassName'" :text="className" @update="updateClassName" />
    <element-input-text :name="'Url'" :text="url" @update="updateUrl" />
    <element-input-text :name="'Alt'" :text="alt" @update="updateAlt" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ElementIcon from './parts/ElementIcon'
import ElementController from './parts/ElementController'
import ElementInputText from './parts/ElementInputText'

export default {
  name: 'ImageElement',
  props: ['id'],
  components: {
    ElementIcon,
    ElementController,
    ElementInputText
  },
  data () {
    return {
      url: '',
      alt: '',
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
          url: this.url,
          alt: this.alt,
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
    updateAlt (alt) {
      this.alt = alt
      this.update()
    },
    updateClassName (className) {
      this.className = className
      this.update()
    },
    formatHtml () {
      return `<img class="${this.className}" src="${this.url}" alt="${this.alt}">`
    },
    formatMarkdown () {
      return `![${this.alt}](${this.url})`
    }
  },
  created () {
    const context = this.getSectionById(this.id).context
    this.url = context.url || ''
    this.alt = context.alt || ''
    this.className = context.className || ''
  },
  mounted () {
    this.update()
  }
}
</script>
