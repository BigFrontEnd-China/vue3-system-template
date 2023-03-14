<!--
*@Description:描述
*@Author: Jackson
*@CreateTime: 2022年11月08日 16:11:37
*@UpdateTime: ''
-->
<template>
  <div class="menu-list">
    <a-menu mode="horizontal" v-model:selected-keys="selectedKey">
      <template v-for="menu in routes" :key="menu.path">
        <a-sub-menu v-if="!menu.meta.onlyShowChild" @click="routeChange(menu)">
          <template #title>{{ menu.meta.title }}</template>
          <!-- 使用插槽屏蔽下拉图标 -->
          <template #expand-icon-right></template>
          <template #expand-icon-down></template>
          <a-menu-item
            v-for="childMenu in menu.children"
            :key="childMenu.path"
            v-show="!childMenu.isHidden"
            @click="routeChange(childMenu)"
            >{{ childMenu.meta.title }}</a-menu-item
          >
        </a-sub-menu>
        <template v-else>
          <a-menu-item
            v-for="childMenu in menu.children"
            :key="childMenu.path"
            @click="routeChange(childMenu)"
            >{{ childMenu.meta.title }}</a-menu-item
          >
        </template>
      </template>
    </a-menu>
    <!-- <a-menu v-else mode="horizontal" v-model:selected-keys="selectedKey">
      <a-menu-item
        v-for="menu in routes"
        :key="menu.path"
        @click="routeChange(menu)"
        >{{ menu.meta.title }}</a-menu-item
      >
    </a-menu> -->
  </div>
</template>
<script setup>
  import { useRouter } from 'vue-router';
  import { ref, onMounted } from 'vue';
  const openKeys = ref([]);
  // const collapsed = ref(false);
  const selectedKey = ref([]);
  const router = useRouter();
  const routes = router.options.routes.filter((route) => {
    return !route.isHidden;
  });
  function routeChange(menu) {
    selectedKey.value = [menu.path];
    router.push({ name: menu.name });
  }

  onMounted(() => {
    const currentRoute = router.currentRoute.value.path;
    selectedKey.value = [currentRoute];
    console.log(router.currentRoute);
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
