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
      :style="{ width: '212px', height: '100%' }"
      v-model:selected-keys="selectedKey"
    >
      <template v-for="menu in routes" :key="menu.path">
        <a-sub-menu :key="menu.path" v-if="!menu.meta.onlyShowChild">
          <template #icon><icon-apps></icon-apps></template>
          <template #title>{{ menu.meta.title }}</template>
          <a-menu-item
            v-for="childMenu in menu.children"
            :key="childMenu.path"
            v-show="!childMenu.isHidden"
            @click="routeChange(childMenu)"
          >
            <template #icon><icon-apps></icon-apps></template>
            {{ childMenu.meta.title }}</a-menu-item
          >
        </a-sub-menu>
        <a-menu-item
          v-else
          v-for="childMenu in menu.children"
          :key="childMenu.path"
          v-show="!childMenu.isHidden"
          @click="routeChange(childMenu)"
        >
          <template #icon><icon-apps></icon-apps></template>
          {{ childMenu.meta.title }}
        </a-menu-item>
      </template>
    </a-menu>
  </div>
</template>
<script setup>
  import { IconApps } from '@arco-design/web-vue/es/icon';
  import { useRouter } from 'vue-router';
  import { ref, onMounted } from 'vue';
  const openKeys = ref([]);
  const selectedKey = ref([]);
  const router = useRouter();
  let routes = [];
  routes = router.options.routes.filter((route) => {
    return !route.isHidden;
  });
  function routeChange(menu) {
    selectedKey.value = [menu.path];
    router.push({ name: menu.name });
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
    height: calc(100% - 172px);
  }
</style>
