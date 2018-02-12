<template>
  <div class="header">
    <div class="title">
      <h1 class="title-main"><a href="/">sugarbeats</a> editor</h1>
      <span class="title-sub">(nightly v0.20180212.1)</span>
    </div>
    <scene-buttons />
  </div>
</template>

<script>
import SceneButtons from '../app/SceneButtons'
export default {
  components: {
    SceneButtons
  }
}
</script>

<style lang="scss" scoped>
  .header {
    padding: 15px 20px;
    display: flex;
    .title {
      margin-right: auto;
      a {
        color: #3569a4;
        text-decoration: none;
      }
      .title-main {
        font-size: 22px;
      }
      .title-sub {
        font-size: 12px;
      }
    }
  }
</style>
