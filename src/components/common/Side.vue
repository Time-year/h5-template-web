<script setup lang="ts">
interface IProps {
  modelValue: boolean
  component: string
}
defineProps<IProps>()
</script>
<template>
  <Transition
    appear
    appear-active-class="animate__animated animate__fadeInRight"
    leave-active-class="animate__animated animate__fadeOutRight"
  >
    <div v-if="modelValue" class="Side w-full h-screen bg-white shadow-xl">
      <slot />
    </div>
  </Transition>
</template>
<style lang="less" scoped>
.Side {
}
</style>
