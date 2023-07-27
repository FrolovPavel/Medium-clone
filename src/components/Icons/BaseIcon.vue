<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 18 18"
  >
    <g :fill="iconColor">
      <component :is="`icon-${icon}`"/>
    </g>
  </svg>
</template>

<script>
import IconHeart from '@/components/Icons/IconHeart'
import IconCompose from '@/components/Icons/IconCompose'
import IconSettings from '@/components/Icons/IconSettings'
import IconTrash from '@/components/Icons/IconTrash'
import IconPen from '@/components/Icons/IconPen'
import IconPlus from '@/components/Icons/IconPlus'

export default {
  name: 'BaseIcon',
  components: {IconHeart, IconCompose, IconSettings, IconTrash, IconPen, IconPlus},
  props: {
    icon: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>
