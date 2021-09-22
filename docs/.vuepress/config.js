const themeConfig = require("./config/themeConfig")
const plugins = require("./config/plugins")

module.exports = {
  theme: 'vdoing', // 使用主题插件 vuepress-theme-vdoing
  title: 'WZL', // 网站的标题，它将显示在导航栏（navbar）上
  description: '志霖的博客', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // <link> 标签，插入到 <head></head>之间
  ],
  themeConfig,
  plugins
}