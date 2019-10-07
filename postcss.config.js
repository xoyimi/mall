module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,//视窗的宽度,对应设计稿宽度
      unitPrecision: 5,//指定"px"转换为视窗单位值的小数位数
      viewportUnit: 'vw',//指定需要转换为视窗的单位
      selectorBlackList: ['ignore','tab-bar'],//指定不需要转换的类
      minPixelValue: 1,
      mediaQuery:false,//允许在媒体查询中转换'px'
      exclude: [/TabBar/],
    }
  }
}
