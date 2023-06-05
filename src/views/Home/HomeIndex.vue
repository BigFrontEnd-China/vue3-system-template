<!--
*@Description:描述
*@Author: Jackson
*@CreateTime: 2022年11月08日 19:33:57
*@UpdateTime: ''
-->
<template>
  <div>
    <h3>{{ $filters.formatDate(new Date().getTime()) }}</h3>
    <h3>{{ $filters.formatDate(new Date().getTime(), 'YYYY-MM-DD') }}</h3>
    <h3>{{ $filters.formatDate(new Date().getTime(), 'YYYY-MM') }}</h3>
    <h3>{{ $filters.formatDate(new Date().getTime(), 'YYYY年MM月') }}</h3>
    <a-button type="primary" @click="handleRedirect()">去详情页</a-button>
  </div>
</template>
<script setup>
  import { getCurrentInstance, onMounted } from 'vue';
  import router from '@/router';
  import { useUserStore } from '@/store/user';
  const store = useUserStore();
  const {
    appContext: {
      config: { globalProperties: global }
    }
  } = getCurrentInstance();

  const handleRedirect = () => {
    router.push({
      name: 'HomeMain'
    });
  };
  onMounted(() => {
    console.log(store.userInfo);
    global.$api.getxxxList().then(() => {});
  });
</script>
<style lang="less" scoped></style>
