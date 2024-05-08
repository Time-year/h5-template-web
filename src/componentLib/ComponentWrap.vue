<script setup lang="ts">
const props = defineProps<{
  componentId: string
}>()

const componentWrapRef = ref<HTMLElement | null>(null)

let appEl = ref<HTMLElement | null>(null)

const mouseOption = reactive({
  startX: 0,
  startY: 0,
  moveX: 0,
  moveY: 0,
  isMoveing: false,
  target: null as HTMLElement | null
})

const appElRect = computed(() => {
  if (!appEl.value) return null
  else return appEl.value.getBoundingClientRect()
})

const componentClick = () => {
  console.log('当前组件Id', props.componentId)
  // console.log(componentInstance)
}

const mouseDown = (_even: MouseEvent) => {
  mouseOption.isMoveing = true
  document.addEventListener('mousemove', mousemove)
  document.addEventListener('mouseup', mouseUp)
}

const mousemove = (even: MouseEvent) => {
  if (!mouseOption.isMoveing || !appElRect.value || !appEl.value) return
  if (
    even.pageX < appElRect.value.left + 8 ||
    even.pageY < appElRect.value.top ||
    !componentWrapRef.value ||
    even.pageX > appEl.value?.clientWidth + appElRect.value.left ||
    even.pageY > appElRect.value.top + appElRect.value.height
  )
    return

  const target = even.target as HTMLElement
  componentWrapRef.value.style.left =
    even.pageX - appElRect.value.left - target.clientWidth / 2 + 'px'
  componentWrapRef.value.style.top =
    even.pageY - appElRect.value.top - target.clientHeight / 2 + 'px'
}

const mouseUp = () => {
  mouseOption.isMoveing = false
  document.removeEventListener('mousemove', mousemove)
  document.removeEventListener('mouseup', mouseUp)
}

onMounted(() => {
  appEl.value = document.querySelector('#preview-main')
})
</script>
<template>
  <div
    ref="componentWrapRef"
    class="ComponentWrap w-fit h-fit absolute cursor-pointer border-2 border-dashed border-black hover:border-indigo-700 hover:border-2 px-2"
    :data-key="componentId"
    @click.stop="componentClick"
    @mousedown.stop="mouseDown"
  ></div>
</template>
<style lang="less" scoped></style>
