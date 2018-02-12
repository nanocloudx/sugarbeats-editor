<template>
  <div>
    <element-icon :faName="'list-ol'" />
    <element-controller :id="id" />
    <element-input-text :name="'ListClassName'" :text="listClassName" @update="updateListClassName" />
    <element-input-text :name="'ItemClassName'" :text="itemClassName" @update="updateItemClassName" />
    <element-input-text-area :name="'Text'" :text="text" @update="updateText" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ElementIcon from './parts/ElementIcon'
import ElementController from './parts/ElementController'
import ElementInputTextArea from './parts/ElementInputTextArea'
import ElementInputText from './parts/ElementInputText'

export default {
  props: ['id'],
  components: {
    ElementIcon,
    ElementController,
    ElementInputTextArea,
    ElementInputText
  },
  data () {
    return {
      text: '',
      listClassName: '',
      itemClassName: ''
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
          listClassName: this.listClassName,
          itemClassName: this.itemClassName,
          html: this.formatHtml(),
          markdown: this.formatMarkdown()
        }
      })
    },
    updateText (text) {
      this.text = text
      this.update()
    },
    updateListClassName (listClassName) {
      this.listClassName = listClassName
      this.update()
    },
    updateItemClassName (itemClassName) {
      this.itemClassName = itemClassName
      this.update()
    },
    formatHtml () {
      const items = this.text.split(/\r\n|\n/)
      return `<ol class="${this.listClassName}">\n${items.map(item => `  <li class="${this.itemClassName}">${item}</li>`).join('\n')}\n</ol>`
    },
    formatMarkdown () {
      const items = this.text.split(/\r\n|\n/)
      return `${items.map(item => `1. ${item}`).join('\n')}`
    }
  },
  created () {
    const context = this.getSectionById(this.id).context
    this.text = context.text || ''
    this.listClassName = context.listClassName || ''
    this.itemClassName = context.itemClassName || ''
  },
  mounted () {
    this.update()
  }
}
</script>
