const { defineConfig } = require('@vue/cli-service');
const port = process.env.port || 8888;
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port,
    open: {
      target: [`http://localhost:${port}`]
    },
    proxy: 'http://localhost:8080'
  }
});
