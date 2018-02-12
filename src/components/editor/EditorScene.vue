<template>
  <div class="editorScene" :class="{ half: scene === 'BOTH'}">
    <add-section-buttons :short="scene === 'BOTH'" />
    <template v-for="section in sectionList">
      <component
        :is="section.type"
        :key="section.id"
        :id="section.id"
      />
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddSectionButtons from './AddSectionButtons'
import HeadingElementLevel1 from './elements/HeadingElementLevel1'
import HeadingElementLevel2 from './elements/HeadingElementLevel2'
import HeadingElementLevel3 from './elements/HeadingElementLevel3'
import ParagraphElement from './elements/ParagraphElement'
import AnchorElement from './elements/AnchorElement'
import OListElement from './elements/OListElement'
import UListElement from './elements/UListElement'
import ImageElement from './elements/ImageElement'

export default {
  components: {
    AddSectionButtons,
    HeadingElementLevel1,
    HeadingElementLevel2,
    HeadingElementLevel3,
    ParagraphElement,
    AnchorElement,
    OListElement,
    UListElement,
    ImageElement
  },
  computed: {
    ...mapState([
      'scene',
      'sectionList'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .editorScene {
    width: 100%;
    min-height:70vh;
    margin: 0 20px;
    &.half {
      width: 50%;
    }
  }
</style>
