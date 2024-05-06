<script setup lang="ts">
import ComponentWrapper from './componentLib'
const isSideOpen = ref<boolean>(true)
const component = ref<string>('Button')
const componentInstance = ref<ComponentWrapper | null>(null)
const createPreview = (componentType: string) => {
  componentInstance.value = new ComponentWrapper(componentType)
}
</script>

<template>
  <div class="Index w-screen h-screen overflow-hidden bg-[#f7f7f7] flex">
    <div class="Index__setting w-1/4">
      <Side
        :model-value="true"
        :component="component"
        @updata-model-value="isSideOpen = $event"
      >
        <div class="component__list pt-20 px-20 flex flex-wrap gap-5">
          <div
            :class="[
              'component__list-item w-2/5  border-slate-300 cursor-pointer  border-2 border-dashed select-none'
            ]"
            @click="() => createPreview('Button')"
          >
            Button
          </div>
        </div>
      </Side>
    </div>
    <div
      class="Index__main w-2/4 h-full relative flex justify-center items-center"
    >
      <div
        class="Index__preview w-[375px] h-[758px] flex justify-center items-center relative"
      >
        <div
          class="Index__preview-main absolute top-11 overflow-hidden overflow-y-auto"
          id="preview-main"
        ></div>
      </div>
    </div>
    <div class="Index__setting w-1/4">
      <Side
        :model-value="true"
        :component="component"
        @updata-model-value="isSideOpen = $event"
      >
        <div class="component-button-edit"></div>
      </Side>
    </div>
  </div>
</template>

<style scoped lang="less">
.Index__main {
}

.Index__preview {
  background: url('/src/assets/img/phone.png') no-repeat center / 100% 100%;

  &-main {
    width: calc(100% - 40px);
    height: calc(100% - 60px);
    border-radius: 10px 10px 40px 40px;
  }
}
</style>
