<!--
*@Description:描述
*@Author: Jackson
*@CreateTime: 2022年11月08日 19:33:57
*@UpdateTime: ''
-->
<template>
  <div>HomeMain</div>
</template>
<script setup>
  import { onMounted } from 'vue';
  import { getData } from '@/service/api/index';
  function getTest() {
    getData().then((res) => {
      console.log(res);
    });
  }
  onMounted(()=>{
    getTest()
  })
</script>
<style lang="less" scoped></style>
