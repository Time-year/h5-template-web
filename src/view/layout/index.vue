<template>
  <div class="layout w-screen h-screen">
    <Layout>
      <LayoutSider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <div class="logo h-[32px] bg-white/30 m-[16px]" />
        <Menu v-model:selectedKeys="selectedKeys" theme="dark">
          <MenuItem key="1">
            <AppstoreAddOutlined />
            <span>创建应用</span>
          </MenuItem>
        </Menu>
      </LayoutSider>
      <Layout>
        <LayoutHeader
          style="background: #fff; padding: 0 24px; text-align: left"
        >
          <MenuUnfoldOutlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <MenuFoldOutlined
            v-else
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
        </LayoutHeader>
        <LayoutContent
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff'
          }"
        >
        </LayoutContent>
      </Layout>
    </Layout>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import {
  Layout,
  LayoutContent,
  LayoutHeader,
  Menu,
  MenuItem,
  LayoutSider
} from 'ant-design-vue'
import {
  AppstoreAddOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons-vue'
const selectedKeys = ref<string[]>(['1'])
const collapsed = ref<boolean>(false)

const getMenusApi = async () => {
  try {
    const res = await fetch('/api/admin/menus')
    res.json().then(k => {
      console.log(k)
    })
  } catch (error) {}
}

// getMenusApi()
</script>
<style lang="less" scoped>
.ant-layout {
  display: flex;
  width: 100vw;
  min-height: 100vh;
}

// ::v-deep(.ant-menu-title-content) {
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }
</style>
