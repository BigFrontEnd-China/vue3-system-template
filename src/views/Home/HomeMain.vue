<!--
*@Description:描述
*@Author: Jackson
*@CreateTime: 2022年11月08日 19:33:57
*@UpdateTime: ''
-->
<template>
  <div>
    <a-button type="primary" @click="handleRedirect()">GO HomeIndex</a-button>
  </div>
</template>
<script setup>
  import { onMounted } from 'vue';
  import { getData } from '@/service/api/index';
  import router from '@/router';
  const handleRedirect = () => {
    router.go(-1);
  };
  function getTest() {
    getData().then((res) => {
      console.log(res);
    });
  }
  onMounted(() => {
    getTest();
  });
</script>
<style lang="less" scoped></style>
