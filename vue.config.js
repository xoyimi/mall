/* 自定义配置文件 */
module.exports = {
  configureWebpack: {
    resolve: {
      /* 配置别名  默认配置 @为src  */
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}