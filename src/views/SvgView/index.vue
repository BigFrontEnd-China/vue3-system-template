<!--
*@Description: 当前所有的svg icon, 只用于开发环境 ！！！
*@Author: Jackson
*@CreateTime: 2023年03月23日 11:05:41
*@UpdateTime: ''
-->
<template>
  <div class="hy-svg">
    <div v-for="(item, index) in svgList" :key="index" class="hy-svg__item">
      <Clipboard
        tag="figcaption"
        style="cursor: pointer"
        :text="formatText(item)"
        @onSuccess="handleSuccess"
      >
        <div class="hy-svg__icon">
          <svg-icon :type="item"></svg-icon>
        </div>
        <span class="hy-svg__text">{{ item }}</span>
      </Clipboard>
    </div>
  </div>
</template>
<script>
  import Clipboard from '@/components/Clipboard';
  const requireAll = (requireContext) => {
    const resource = {};
    requireContext.keys().forEach((item) => {
      const src = item.replace(/(?:.*?)(\w+)\.js$/, '$1');
      const result = requireContext(item);
      resource[src] = 'default' in result ? result.default : result;
    });
    return resource;
  };

  const modules = requireAll(
    require.context('../../components/svgIcons/src', false, /\.svg$/)
  );

  export default {
    components: {
      Clipboard
    },
    data() {
      return {
        activeName: 'first',
        svgList: []
      };
    },
    mounted() {
      this.svgInit();
    },
    methods: {
      formatText(icon) {
        return `<svg-icon type="${icon}"></svg-icon>`;
      },
      svgInit() {
        this.svgList = Object.keys(modules).reduce((arr, item) => {
          arr.push(item.replace(/^\.\/([\w-]+?)\.svg$/, '$1'));
          return arr;
        }, []);
      },
      handleSuccess(row) {
        alert(`成功拷贝：${row.text}`);
      }
    }
  };
</script>

<style lang="less" scoped>
  .hy-svg {
    height: 100%;
    overflow: auto;

    &::after {
      clear: both;
      display: block;
      overflow: hidden;
      font-size: 0;
    }

    .hy-svg__item {
      float: left;
      width: 5%;
      margin: 5px 0;
      padding: 10px 0;
      text-align: center;

      &:hover {
        color: #ffffff;
        border-radius: 4px;
        background-color: rgba(#1890ff, 0.2);

        .hy-svg__icon {
          transform: scale(1.2);
        }
      }

      .hy-svg__icon {
        display: block;
        color: inherit;
        font-style: normal;
        line-height: 0;
        text-align: center;
        text-transform: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        margin: 15px 0 15px;
        font-size: 45px;
        transition: transform 0.3s ease-in-out;
        will-change: transform;
      }

      .hy-svg__text {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: rgba(0, 0, 0, 0.85);
        font-size: 16px;
        font-variant: tabular-nums;
        line-height: 1.5715;
        list-style: none;
        font-feature-settings: 'tnum';
        position: relative;
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
      }
    }
  }
</style>
