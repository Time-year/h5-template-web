<script setup lang="ts">
import { CSSProperties } from 'vue'

const loginTypes = [
  {
    label: '账号密码登录',
    value: 'account',
    component: 'Account'
  },
  {
    label: '手机号登录',
    value: 'mobile',
    component: 'Mobile'
  }
]

const actionComponentIndex = ref<number>(0)

const tabItemRefs = ref<HTMLElement[]>([])

const mainRef = ref<HTMLElement | null>(null)

const currentTabItemRect = computed(() => {
  const { width } = useElementSize(
    tabItemRefs.value[actionComponentIndex.value]
  )
  const { left } = useElementBounding(
    tabItemRefs.value[actionComponentIndex.value]
  )
  const { left: parentLetf } = useElementBounding(mainRef.value)

  return <CSSProperties>{
    width: `${width.value}px`,
    left: `${left.value - parentLetf.value - 52}px`
  }
})
</script>
<template>
  <div class="index flex justify-center">
    <main
      ref="mainRef"
      class="bg-red flex flex-col items-center w-fit h-auto relative"
    >
      <header class="flex flex-col items-center select-none">
        <h1 class="index__title text-3xl font-black mt-10">H5 Template</h1>
        <div class="index__desc text-sm text-gray-500">
          H5 Template是一个基于现代web的H5模板工具
        </div>
      </header>
      <main class="index__main mt-7">
        <div class="index__tabs flex gap-5 cursor-pointer relative">
          <div
            v-for="(item, index) in loginTypes"
            ref="tabItemRefs"
            :key="item.value"
            class="index__tabs-item hover:text-[#1677ff]/80 duration-300 transition-all"
            :class="[
              index === actionComponentIndex
                ? 'text-[#1677ff]'
                : 'text-gray-500'
            ]"
            @click="() => (actionComponentIndex = index)"
          >
            {{ item.label }}
          </div>
          <div
            class="index__tips absolute h-[1px] transition-all bg-[#1677ff] left-0 bottom-[-10px] duration-300"
            :style="currentTabItemRect"
          ></div>
        </div>
      </main>
    </main>
  </div>
</template>
<style lang="less" scoped>
.index {
  width: 100vw;
  height: 100vh;
  background: url('@/assets/img/login/login_bg.png') no-repeat center / 100%
    100%;
}
</style>
