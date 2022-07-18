export const themeData = JSON.parse("{\"base\":\"/zgdoc_management\",\"logo\":\"/images/logo.png\",\"navbar\":[{\"text\":\"体系分组\",\"children\":[{\"text\":\"SubGroup\",\"children\":[\"/group/sub/foo.md\",\"/group/sub/bar.md\"]}]},{\"text\":\"\",\"children\":[{\"text\":\"Always active\",\"link\":\"/\",\"activeMatch\":\"/\"},{\"text\":\"Active on /foo/\",\"link\":\"/not-foo/\",\"activeMatch\":\"^/foo/\"}]}],\"sidebar\":[{\"text\":\"Java体系\",\"link\":\"/01_java/jvm/\",\"children\":[{\"text\":\"Java性能优化与实践\",\"link\":\"/01_java/jvm/\",\"sidebarDepth\":2}]},{\"text\":\"AI相关\",\"children\":[{\"text\":\"AI基础知识\",\"link\":\"/09_AI/ai_base/\"}]},{\"text\":\"工具\",\"children\":[{\"text\":\"Git原理及实践\",\"link\":\"/03_tools/git_skill/\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
