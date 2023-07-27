<template>
  <div class="article-preview-skeleton">
    <div
      v-for="n in 8"
      :key="n"
      class="article-preview-skeleton__card"
    >
      <div class="article-preview-skeleton__head">
        <div class="article-preview-skeleton__author">
          <div class="article-preview-skeleton__avatar"></div>
          <div class="article-preview-skeleton__info"></div>
        </div>
        <div class="article-preview-skeleton__favorite"></div>
      </div>
      <div class="article-preview-skeleton__middle">
        <div class="article-preview-skeleton__title"></div>
        <div class="article-preview-skeleton__text"></div>
        <div class="article-preview-skeleton__text"></div>
      </div>
      <div class="article-preview-skeleton__footer">
        <div class="article-preview-skeleton__read"></div>
        <div class="article-preview-skeleton__tags">
          <div class="article-preview-skeleton__tag"></div>
          <div class="article-preview-skeleton__tag"></div>
          <div class="article-preview-skeleton__tag"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppArticlePreviewSkeleton'
}
</script>

<style lang="scss">
@import '../../assets/scss/vars';

.article-preview-skeleton {
  width: 100%;


  &__card {
    padding: 24px 0;
    border-bottom: 1px solid $greyLight;
  }

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
  }

  &__author {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__avatar {
    border-radius: 100%;
    width: 32px;
    height: 32px;
    background: linear-gradient(90deg, $greyLight 25%, #e6e6e6 37%, $greyLight 63%);
    background-size: 400% 100%;
    animation: loading 1.4s ease infinite;
  }

  &__info {
    border-radius: $mainBR;
    width: 100px;
    height: 32px;
    background: linear-gradient(90deg, $greyLight 25%, #e6e6e6 37%, $greyLight 63%);
    background-size: 400% 100%;
    animation: loading 1.4s ease infinite;
  }

  &__favorite {
    border-radius: $mainBR;
    width: 60px;
    height: 28px;
    background: linear-gradient(90deg, $greyLight 25%, #e6e6e6 37%, $greyLight 63%);
    background-size: 400% 100%;
    animation: loading 1.4s ease infinite;
  }

  &__middle {
    margin-bottom: 10px;
  }

  &__title {
    border-radius: $mainBR;
    width: 50%;
    height: 27px;
    background: linear-gradient(90deg, $greyLight 25%, #e6e6e6 37%, $greyLight 63%);
    background-size: 400% 100%;
    animation: loading 1.4s ease infinite;
    margin-bottom: 8px;
  }

  &__text {
    border-radius: $mainBR;
    width: 100%;
    height: 18px;
    background: linear-gradient(90deg, $greyLight 25%, #e6e6e6 37%, $greyLight 63%);
    background-size: 400% 100%;
    animation: loading 1.4s ease infinite;
    margin-bottom: 4px;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__read {
    border-radius: $mainBR;
    width: 70px;
    height: 16px;
    background: linear-gradient(90deg, $greyLight 25%, #e6e6e6 37%, $greyLight 63%);
    background-size: 400% 100%;
    animation: loading 1.4s ease infinite;
  }

  &__tags {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__tag {
    border-radius: $mainBR;
    width: 70px;
    height: 22px;
    background: linear-gradient(90deg, $greyLight 25%, #e6e6e6 37%, $greyLight 63%);
    background-size: 400% 100%;
    animation: loading 1.4s ease infinite;
  }

  @keyframes loading {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
}
</style>
