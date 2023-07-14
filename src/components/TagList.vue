<template>
  <ul class="tag-list">
    <li
      v-for="item in iterator"
      :key="item"
      class="tag-list__item"
    >
      <app-tag
        :view="viewTags"
        :link="link ? {...link, params: {slug: item}} : null"
      >
        {{ item }}
      </app-tag>
    </li>
  </ul>
</template>

<script>
import AppTag from '@/components/Tag'

export default {
  name: 'AppTagList',
  components: {AppTag},
  props: {
    iterator: {
      type: Array,
      required: true
    },
    viewTags: {
      type: String,
      required: false
    },
    link: {
      type: Object,
      required: false,
      default: null
    }
  }
}
</script>

<style lang="scss">
.tag-list {
  display: flex;
  gap: 8px 4px;
  flex-wrap: wrap;
}

</style>
