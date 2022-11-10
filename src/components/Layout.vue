<!--
*@Description:描述
*@Author: Jackson
*@CreateTime: 2022年11月08日 16:11:37
*@UpdateTime: ''
-->
<template>
  <div class="layout">
    <a-layout-header>
      <slot name="header"></slot>
    </a-layout-header>
    <a-layout class="main">
      <a-layout-sider style="width: auto"
        ><slot name="sider"></slot
      ></a-layout-sider>
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
    <a-layout-footer><slot name="footer"></slot></a-layout-footer>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .layout {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .main {
      flex: 1;
      display: flex;
    }
  }
</style>
