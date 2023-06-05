<!--
*@Description:描述
*@Author: Jackson
*@CreateTime: 2022年11月08日 17:46:29
*@UpdateTime: ''
-->
<template>
  <div class="main-page">
    <!-- 设置水平或者垂直菜单布局，应用到项目当中直接删除另一种Layout；不需要增加条件判断 -->
    <Layout v-if="true">
      <template #header><div class="header">header</div></template>
      <template #sider><VerticalMenu></VerticalMenu></template>
    </Layout>
    <Layout v-else>
      <template #header
        ><div class="header-horizontal">
          <HorizontalMenu></HorizontalMenu></div
      ></template>
    </Layout>
  </div>
</template>
<script setup>
  import Layout from '@/components/Layout.vue';
  import VerticalMenu from '@/components/VerticalMenu.vue';
  import HorizontalMenu from '@/components/HorizontalMenu.vue';
</script>
<style lang="less" scoped>
  .main-page {
    width: 100%;
    height: 100%;
    .header {
      height: 48px;
      line-height: 48px;
      font-size: 28px;
      border: 1px solid rgba(16, 27, 47, 0.1);
      box-shadow: 0px 1px 4px 0px rgba(16, 27, 47, 0.1);
      text-align: center;
    }
    .header-horizontal {
      height: 64px;
      box-shadow: 0px 1px 4px 0px rgba(16, 27, 47, 0.1);
    }
  }
</style>
