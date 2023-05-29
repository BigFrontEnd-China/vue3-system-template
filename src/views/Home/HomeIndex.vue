<!--
*@Description:描述
*@Author: Jackson
*@CreateTime: 2022年11月08日 19:33:57
*@UpdateTime: ''
-->
<template>
  <div>
    <a-button type="primary" @click="handleRedirect()">GO HomeMain</a-button>
  </div>
</template>
<script setup>
  import { getCurrentInstance, onMounted } from 'vue';
  import router from '@/router';
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
    global.$api.getxxxList().then(() => {});
  });
</script>
<style lang="less" scoped></style>
