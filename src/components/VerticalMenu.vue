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
        <a-sub-menu
          :key="menu.path"
          v-if="!menu.meta.onlyShowChild"
          v-show="!menu.meta.isHidden"
        >
          <template #icon><i :class="[menu.meta.icon]"></i></template>
          <template #title>{{ menu.meta.title }}</template>
          <a-menu-item
            v-for="childMenu in menu.children"
            :key="childMenu.path"
            v-show="!childMenu.meta.isHidden"
            @click="routeChange(childMenu)"
          >
            <template #icon><i :class="[childMenu.meta.icon]"></i></template>
            {{ childMenu.meta.title }}</a-menu-item
          >
        </a-sub-menu>
        <a-menu-item
          v-else
          v-for="childMenu in menu.children"
          :key="childMenu.path"
          v-show="!childMenu.meta.isHidden"
          @click="routeChange(childMenu)"
        >
          <template #icon><i :class="[childMenu.meta.icon]"></i></template>
          {{ childMenu.meta.title }}
        </a-menu-item>
      </template>
    </a-menu>
  </div>
</template>
<script setup>
  import { useRouter } from 'vue-router';
  import { ref, onMounted } from 'vue';
  const openKeys = ref([]);
  const selectedKey = ref([]);
  const router = useRouter();
  let routes = [];
  routes = router.options.routes.filter((route) => {
    return !route.isHidden;
  });
  const routeChange = (menu, type) => {
    if (type) {
      selectedKey.value = menu.children ? [menu.children[0].path] : [menu.path];
      openKeys.value = [menu.path];
    } else {
      selectedKey.value = [menu.path];
    }
    router.push({ name: menu.name });
  };

  onMounted(() => {
    const currentRoute = router.currentRoute.value;
    selectedKey.value = [currentRoute.path];
    if (currentRoute.meta.isHidden && currentRoute.meta.isActiveParent) {
      selectedKey.value = [currentRoute.path.replace(/\/\w+$/, '')];
    }
    for (let index = 0; index < routes.length; index++) {
      const route = routes[index];
      const hasCurrentRoute = route.children.some((child) => {
        return child.path === currentRoute.path;
      });
      if (hasCurrentRoute) {
        openKeys.value = [route.path];
        return;
      }
    }
  });
</script>
<style lang="less" scoped>
  .menu-list {
    box-sizing: border-box;
    width: 100%;
    height: calc(100% - 172px);
  }
</style>
