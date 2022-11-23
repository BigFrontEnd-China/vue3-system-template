<!--
*@Description:描述
*@Author: Jackson
*@CreateTime: 2022年11月08日 16:11:37
*@UpdateTime: ''
-->
<template>
  <div class="menu-list">
    <a-menu
      v-model:open-keys="openKeys"
      :accordion="true"
      :style="{ width: '200px', height: '100%' }"
      v-model:selected-keys="selectedKey"
      show-collapse-button
      breakpoint="xl"
      @collapse="onCollapse"
    >
      <a-sub-menu v-for="menu in routes" :key="menu.path">
        <template #icon><icon-apps></icon-apps></template>
        <template #title>{{ menu.meta.title }}</template>
        <a-menu-item
          v-for="childMenu in menu.children"
          :key="childMenu.path"
          @click="routeChange(childMenu)"
          >{{ childMenu.meta.title }}</a-menu-item
        >
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script setup>
  import { IconApps } from '@arco-design/web-vue/es/icon';
  import { Message } from '@arco-design/web-vue';
  import { useRouter } from 'vue-router';
  import { ref, onMounted } from 'vue';

  const openKeys = ref([]);
  const selectedKey = ref([]);
  const router = useRouter();
  const routes = router.options.routes.filter((route) => {
    return !route.isHidden;
  });
  function routeChange(childMenu) {
    selectedKey.value = [childMenu.path];
    router.push({ name: childMenu.name });
  }
  function onCollapse(type) {
    const content = type === 'responsive' ? '触发响应式收缩' : '点击触发收缩';
    
    Message.info({
      content,
      duration: 2000
    });
  }

  onMounted(() => {
    const currentRoute = router.currentRoute.value.path;
    selectedKey.value = [currentRoute];
    for (let index = 0; index < routes.length; index++) {
      const route = routes[index];
      const hasCurrentRoute = route.children.some((child) => {
        return child.path === currentRoute;
      });
      if (hasCurrentRoute) {
        openKeys.value = [route.path];
        return;
      }
    }
  });
</script>
<style lang="scss" scoped>
  .menu-list {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
</style>
