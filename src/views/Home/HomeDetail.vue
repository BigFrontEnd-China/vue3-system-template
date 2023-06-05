<!--
*@Description:描述
*@Author: Jackson
*@CreateTime: 2022年11月08日 19:33:57
*@UpdateTime: ''
-->
<template>
  <div>
    <h2>这里是详情页！！！</h2>
    <a-button type="primary" @click="handleRedirect()">回主页</a-button>
  </div>
</template>
<script setup>
  import { onMounted } from 'vue';
  import router from '@/router';
  const handleRedirect = () => {
    router.go(-1);
  };
  onMounted(() => {});
</script>
<style lang="less" scoped></style>
