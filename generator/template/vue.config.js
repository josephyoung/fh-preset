const config = require('./src/config');

module.exports = {
  configureWebpack: {
    name: config.name,
    devtool: 'source-map',
  },
  publicPath: config.baseUrl,
  outputDir: 'dist',
  assetsDir: '',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  productionSourceMap: true,
  lintOnSave: 'error',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/style/variables.scss";',
      },
    },
  },
  devServer: {
    host: 'localhost',
    port: '3000',
    proxy: {
      '/mock': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        pathRewrite: {
          '^/mock': '',
        },
      },
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
