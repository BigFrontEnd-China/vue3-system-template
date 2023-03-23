const { defineConfig } = require('@vue/cli-service');
const port = process.env.port || 9999;
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port,
    open: {
      target: [`http://localhost:${port}`]
    },
    proxy: 'http://localhost:9999'
  },
  chainWebpack(config) {
    // set svg-sprite-loader
    const svgRule = config.module.rule('svg');
    svgRule.exclude.add([path.resolve('src/components/svgIcons')]);
    config.plugin('html').tap((args) => {
      args[0].title = 'vue3+arcoDesign+pnpm项目模板';
      return args;
    });
    // 添加要替换的 loader
    config.module
      .rule('svg-icon')
      .test(/\.(svg)(\?.*)?$/)
      .include.add([path.resolve('src/components/svgIcons')])
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end();
    // 使用@arco-themes自定义风格 使用方法参考 https://arco.design/docs/designlab/guideline
    // config.module.rule('less').oneOfs.store.forEach((item) => {
    //   item
    //     .use('style-resources-loader')
    //     .loader('style-resources-loader')
    //     .options({
    //       patterns: [
    //         path.resolve('node_modules/@arco-themes/vue-custom/theme.less')
    //       ]
    //     })
    //     .end();
    // });
  }
});
