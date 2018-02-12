<template>
  <div class="addSectionButtons">
    <common-button
      :faName="'fas fa-heading'"
      :name="'Heading 1'"
      :isSelected="false"
      :short="short"
      @select="addSection('HeadingElementLevel1')"
    />
    <common-button
      :faName="'fas fa-heading'"
      :name="'Heading 2'"
      :isSelected="false"
      :short="short"
      @select="addSection('HeadingElementLevel2')"
    />
    <common-button
      :faName="'fas fa-heading'"
      :name="'Heading 3'"
      :isSelected="false"
      :short="short"
      @select="addSection('HeadingElementLevel3')"
    />
    <common-button
      :faName="'fas fa-paragraph'"
      :name="'Paragraph'"
      :isSelected="false"
      :short="short"
      @select="addSection('ParagraphElement')"
    />
    <common-button
      :faName="'fas fa-link'"
      :name="'Link'"
      :isSelected="false"
      :short="short"
      @select="addSection('AnchorElement')"
    />
    <common-button
      :faName="'fas fa-list-ol'"
      :name="'Ordered List'"
      :isSelected="false"
      :short="short"
      @select="addSection('OListElement')"
    />
    <common-button
      :faName="'fas fa-list-ul'"
      :name="'Unordered List'"
      :isSelected="false"
      :short="short"
      @select="addSection('UListElement')"
    />
    <common-button
      :faName="'fas fa-image'"
      :name="'Image'"
      :isSelected="false"
      :short="short"
      @select="addSection('ImageElement')"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CommonButton from '../common/CommonButton'

export default {
  props: ['short'],
  components: {
    CommonButton
  },
  methods: {
    ...mapActions([
      'addSection'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .addSectionButtons {
    display: flex;
    flex-wrap: wrap;
  }
</style>
