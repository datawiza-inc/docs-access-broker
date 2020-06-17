module.exports = {
  title: 'Datawiza Access Broker',
  description: 'Datawiza Access Broker: Identity-Aware Proxy, Cloud Native, Cloud-Managed',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-145768030-3' // UA-00000000-0
      }
    ]
  ],
  themeConfig: {
//    displayAllHeaders: true, 
//    logo: '/logo_datawiza.png',
 //   repo: 'vuejs/vuepress',
 //   editLinks: false,
  //  editLinkText: "Edit this page on GitHub",
    sidebar: getSidebar()
  }
}

function getSidebar(){
  return [
    {
      title: '',
      collapsable: false,
      //path: "/",
      type: "group",
      sidebarDepth: 0,
      children: [
        '',
        'architecture',
        'prerequisites'
      ]
    },
    {
      title: 'Tutorials',
      collapsable: false,
      type: "group",
      sidebarDepth: 0,
      children: [
        'tutorial/web-app-azure',
        'tutorial/web-app-okta'
      ]
    },
    {
      title: 'Step-by-Step Configuration',
      collapsable: false,
      //path: "/step-by-step/",
      type: "group",
      sidebarDepth: 0,
      children: [
        'step-by-step/step1',
        'step-by-step/step2',
        'step-by-step/step3',
        'step-by-step/step4',
        'step-by-step/step5'
      ]
    },
    {
      title: 'IdP Configuration Guide',
      collapsable: false,
      //path: "/step-by-step/",
      type: "group",
      sidebarDepth: 0,
      children: [
        'idp/azure',
        'idp/okta'
      ]
    }

  ]
}

