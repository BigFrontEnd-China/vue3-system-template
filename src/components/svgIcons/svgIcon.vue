<!--
*@Description:描述
*@Author: Jackson
*@CreateTime: 2023年03月23日 11:05:41
*@UpdateTime: ''
-->
<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>
<style lang="less" scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: none;
    overflow: hidden;
    font-size: 1em;
  }
  .icon-code {
    vertical-align: 0;
  }
</style>
<script>
  export default {
    name: 'SvgIcon',
    props: {
      type: {
        type: String,
        required: true
      },
      // 使用iconfont 字体svg
      useIconFont: {
        type: Boolean,
        default: false
      },
      // eslint-disable-next-line vue/require-default-prop
      className: {
        type: String
      }
    },
    computed: {
      iconName() {
        const prefix = this.useIconFont ? '' : 'icon-';
        return `#${prefix}${this.type}`;
      },
      svgClass() {
        if (this.className) {
          return 'svg-icon ' + this.className;
        } else {
          return 'svg-icon';
        }
      }
    }
  };
</script>
