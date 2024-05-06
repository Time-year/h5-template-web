<script setup lang="ts">
import Button, { ButtonProp } from './Button'
interface IProp {
  classButtonInstace: Button
}
const props = defineProps<IProp>()

const options = ref<ButtonProp>(props.classButtonInstace.getProps())
</script>
<template>
  <div
    :class="[
      'index flex',
      options.width ? `w-[${options.width}px]` : 'w-fit',
      options.width ? `h-[${options.width}px]` : 'h-fit',
      {
        'justify-center': options.contentCenter,
        'items-center': options.contentItemsCenter
      }
    ]"
  >
    {{ options.content }}
  </div>
</template>
<style lang="less" scoped>
.index {
}
</style>
