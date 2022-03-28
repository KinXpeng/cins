module.exports = {
  devServer: {
    port: '8000',
    open: true,
  },
  publicPath: './',
  outputDir: 'pages', // 输出文件目录(默认dist文件夹)
  productionSourceMap: false, // 去掉打包后的map文件
};
