export const siteData = JSON.parse("{\"base\":\"/zgdoc_management2/\",\"lang\":\"en-US\",\"title\":\"攀岩飞鱼技术体系\",\"description\":\"构建可靠的大型分布式系统\",\"head\":[[\"link\",{\"rel\":\"shortcut icon\",\"type\":\"image/x-icon\",\"href\":\"/favicon.ico\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
