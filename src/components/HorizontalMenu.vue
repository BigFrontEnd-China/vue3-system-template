<!--
*@Description:描述
*@Author: Jackson
*@CreateTime: 2022年11月08日 16:11:37
*@UpdateTime: ''
-->
<template>
  <div class="menu-list">
    <a-menu
      mode="horizontal"
      v-model:selected-keys="selectedKey"
      show-collapse-button
    >
      <a-sub-menu v-for="menu in routes" :key="menu.path">
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
  import { useRouter } from 'vue-router';
  import { ref, onMounted } from 'vue';
  const selectedKey = ref([]);
  const router = useRouter();
  const routes = router.options.routes.filter((route) => {
    return !route.isHidden;
  });
  function routeChange(childMenu) {
    selectedKey.value = [childMenu.path];
    router.push({ name: childMenu.name });
  }

  onMounted(() => {
    const currentRoute = router.currentRoute.value.path;
    selectedKey.value = [currentRoute];
  });
</script>
<style lang="scss" scoped>
  .menu-list {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
</style>
