import { openapi } from '@elysiajs/openapi'

const openApiPlugin = openapi({
    provider: 'scalar',
    path: '/docs',
    documentation: {
        info: {
            title: 'Qortex - Unified Storage, Auth & File Sharing Platform',
            version: '1.0.0',
            description: 'Qortex empowers developers with unified file storage, authentication, and secure file sharing. Enterprise-grade security with intuitive APIs for modern development workflows.'
        },
        security: [
            {
                'X-Access-Token': []
            }
        ],
        components: {
            securitySchemes: {
              'X-Access-Token': {
                type: 'apiKey',
                in: 'header',
                name: 'X-Access-Token',
                description: 'Access Token for the API',
              }
            },
        },
        tags: [
            
        ]
    },
    scalar: {
        theme: "dark",
        metaData: {
          title: "Documentation | API Reference | Qortex",
          description: "Qortex empowers developers with unified file storage, authentication, and secure file sharing. Enterprise-grade security with intuitive APIs for modern development workflows.",
          image: "https://qortex.quadbits.cloud/public/logo-maintex-storage-light.svg",
          url: "https://qortex.quadbits.cloud/docs",
          type: "website",
          locale: "en_US",
          siteName: "Qortex API Docs",
          imageWidth: 1200,
          imageHeight: 630,
          favicon: "https://qortex.quadbits.cloud/public/favicon.ico"
        },
        favicon: "https://qortex.quadbits.cloud/public/favicon.ico",
        customCss: "body:before{content:\"\";position:fixed;top:0;left:0;width:100%;height:100vh;z-index:0;background:url(\"/public/bg-login.png\")}.references-rendered[data-v-097f69f2]{background:#00000033}.scalar-app.bg-sidebar-b-1{background-color:#00000038}.section-flare{display:none}.sidebar[data-v-db673c0a]{background:#111111}.references-rendered[data-v-c81c86d6]{background:#1d1d1d}.introduction-card[data-v-3358908f]{gap:1rem}.active_page.sidebar-heading[data-v-fa7fb2b8],.active_page.sidebar-heading[data-v-fa7fb2b8]:hover{background:#262626}.sidebar-heading[data-v-fa7fb2b8]{padding-block:0.35rem}.section-container:has( ~ .footer):before,.tag-section-container:before{background:0 0}.scalar-app .text-sidebar-c-2:has(a[target=\"_blank\"]){display:none}.darklight-reference[data-v-c81c86d6]{padding-bottom:0}.scalar-api-references-standalone-search[data-v-c81c86d6]{padding-top:15px}.dark-mode{--scalar-border-color:#393939}.show-more[data-v-c46d29d9]{margin-left:0;margin-right:auto;background:#343434;padding:12px 20px;border-radius:9px}.show-more[data-v-c46d29d9]:focus,.show-more[data-v-c46d29d9]:hover{background:#292929}.scalar-app .text-sidebar-c-2:has(a[target=\"_blank\"]){display:none}.darklight-reference[data-v-c81c86d6]{padding-bottom:0}.scalar-api-references-standalone-search[data-v-c81c86d6]{padding-top:15px}.dark-mode{--scalar-border-color:#393939;--scalar-color-2:#fcfcfc}.show-more[data-v-c46d29d9]{margin-left:0;margin-right:auto;background:#343434;padding:12px 20px;border-radius:9px}.show-more[data-v-c46d29d9]:focus,.show-more[data-v-c46d29d9]:hover{background:#292929}h1.section-header-label{color:#fafafa;margin-top:2rem}.section-header[data-v-f8e38d9f]{margin-top:1.35rem;font-size:1.75rem}.badge[data-v-2a0118c0]{background:#c3ffda1a;padding:5px 8px;border-radius:7px;border:1px solid #c3ffda14}.badge[data-v-2a0118c0]:nth-child(2){background:#ffaf4c1f;border-color:#ffaf4c1f}.scalar-app label.font-medium{height:40px;background:#222425}.scalar-card-header[data-v-34675578]{padding-block:12px;background:#222425}div#scalar-refs-0-26{background:#22232500;padding-block:8px}div#scalar-refs-0-26 div{color:#34b9bc;font-size:18px}#headlessui-disclosure-button-scalar-refs-0-18,#scalar-refs-0-1{background:#222325;padding-block:12px}#scalar-refs-0-1{max-height:40px;min-height:40px}.section[data-v-393971a5]{padding: 50px 0px;}.section-header-label {color: #fafafa;}.section-flare{display:none}.sidebar[data-v-db673c0a]{background:#151515}.references-rendered[data-v-c81c86d6]{background:#1d1d1d}.introduction-card[data-v-3358908f]{gap:1rem}.active_page.sidebar-heading[data-v-fa7fb2b8],.active_page.sidebar-heading[data-v-fa7fb2b8]:hover{background:#262626}.sidebar-heading[data-v-fa7fb2b8]{padding-block:0.35rem}.section-container:has( ~ .footer):before,.tag-section-container:before{background:0 0}.scalar-app .text-sidebar-c-2:has(a[target=\"_blank\"]){display:none}.darklight-reference[data-v-c81c86d6]{padding-bottom:0}.scalar-api-references-standalone-search[data-v-c81c86d6]{padding-top:15px}.dark-mode{--scalar-border-color:#393939}.show-more[data-v-c46d29d9]{margin-left:0;margin-right:auto;background:#343434;padding:12px 20px;border-radius:9px}.show-more[data-v-c46d29d9]:focus,.show-more[data-v-c46d29d9]:hover{background:#292929}.scalar-app .text-sidebar-c-2:has(a[target=\"_blank\"]){display:none}.darklight-reference[data-v-c81c86d6]{padding-bottom:0}.scalar-api-references-standalone-search[data-v-c81c86d6]{padding-top:15px}.dark-mode{--scalar-border-color:#393939;--scalar-color-2:#eaeaea}.show-more[data-v-c46d29d9]{margin-left:0;margin-right:auto;background:#343434;padding:12px 20px;border-radius:9px}.show-more[data-v-c46d29d9]:focus,.show-more[data-v-c46d29d9]:hover{background:#292929}h1.section-header-label{color:#fafafa;margin-top:2rem}.section-header[data-v-f8e38d9f]{margin-top:1.35rem;font-size:1.75rem}.badge[data-v-2a0118c0]{background:#c3ffda1a;padding:5px 8px;border-radius:7px;border:1px solid #c3ffda14}.badge[data-v-2a0118c0]:nth-child(2){background:#ffaf4c1f;border-color:#ffaf4c1f}.scalar-app label.font-medium{height:40px;background:#222425}.scalar-card-header[data-v-34675578]{padding-block:12px;background:#262829}div#scalar-refs-0-26{background:#22232500;padding-block:8px}div#scalar-refs-0-26 div{color:#34b9bc;font-size:18px"
    }
})

export default openApiPlugin