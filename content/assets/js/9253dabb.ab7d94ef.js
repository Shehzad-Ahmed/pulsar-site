"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[64548],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return a?r.createElement(h,l(l({ref:t},s),{},{components:a})):r.createElement(h,l({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},71777:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const o={id:"document-contribution",title:"Updating document"},l=void 0,i={unversionedId:"document-contribution",id:"document-contribution",title:"Updating document",description:"This guide explains the organization of Pulsar documentation and website repos and the workflow of updating various Pulsar documents.",source:"@site/contribute/document-contribution.md",sourceDirName:".",slug:"/document-contribution",permalink:"/contribute/document-contribution",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/document-contribution.md",tags:[],version:"current",lastUpdatedBy:"Zike Yang",lastUpdatedAt:1679010933,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{id:"document-contribution",title:"Updating document"},sidebar:"sidebarDevelopment",previous:{title:"Introduction",permalink:"/contribute/document-intro"},next:{title:"Release policy",permalink:"/contribute/release-policy"}},p={},u=[{value:"Source repositories",id:"source-repositories",level:2},{value:"Update versioned docs",id:"update-versioned-docs",level:2},{value:"Update reference docs",id:"update-reference-docs",level:2},{value:"Update configuration docs",id:"update-configuration-docs",level:3},{value:"Update command-line tool docs",id:"update-command-line-tool-docs",level:3},{value:"Update client/function matrix",id:"update-clientfunction-matrix",level:2}],s={toc:u},c="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This guide explains the organization of Pulsar documentation and website repos and the workflow of updating various Pulsar documents."),(0,n.kt)("h2",{id:"source-repositories"},"Source repositories"),(0,n.kt)("p",null,"Currently, the source of documents and website (where the docs are finally published) are located at the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-site"},"apache/pulsar-site")," repo."),(0,n.kt)("h2",{id:"update-versioned-docs"},"Update versioned docs"),(0,n.kt)("p",null,"If you want to update versioned docs, go to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-site/tree/main/versioned_docs"},"versioned_docs folder")," to find your desired one."),(0,n.kt)("p",null,"For versions prior to 2.8, Pulsar releases versioned docs for each patch release. You can update the exact versioned doc."),(0,n.kt)("p",null,"For versions start from 2.8, Pulsar release versioned docs for each minor release. Apart from updating the content, you should take care of adding specific instructions."),(0,n.kt)("p",null,"For example, if you want to add docs for an improvement introduced in 2.8.2, you can add the following instructions:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},":::note\n\nThis <fix / improvment> is available for 2.8.2 and later versions.\n\n:::\n")),(0,n.kt)("h2",{id:"update-reference-docs"},"Update reference docs"),(0,n.kt)("p",null,"If you want to update ",(0,n.kt)("a",{parentName:"p",href:"pathname:///reference/"},"Pulsar reference docs"),", you should update the corresponding source files."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Some reference docs are generated from code ",(0,n.kt)("strong",{parentName:"li"},"automatically"),". If you want to update the docs, you need to update the source code files."),(0,n.kt)("li",{parentName:"ul"},"Some configuration docs are updated ",(0,n.kt)("strong",{parentName:"li"},"manually")," using markdown files.")),(0,n.kt)("h3",{id:"update-configuration-docs"},"Update configuration docs"),(0,n.kt)("p",null,"Docs for configs of bundled components are generated from command-line tools ",(0,n.kt)("strong",{parentName:"p"},"automatically"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Components"),(0,n.kt)("th",{parentName:"tr",align:null},"Update where ..."))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Broker"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/ServiceConfiguration.java"},"org.apache.pulsar.broker.ServiceConfiguration"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"WebSocket"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-websocket/src/main/java/org/apache/pulsar/websocket/service/WebSocketProxyConfiguration.java"},"org.apache.pulsar.websocket.service.WebSocketProxyConfiguration"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Proxy"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-proxy/src/main/java/org/apache/pulsar/proxy/server/ProxyConfiguration.java"},"org.apache.pulsar.proxy.server.ProxyConfiguration"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Standalone"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/ServiceConfiguration.java"},"org.apache.pulsar.broker.ServiceConfiguration"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Client"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/conf/ClientConfigurationData.java"},"org.apache.pulsar.client.impl.conf.ClientConfigurationData"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Producer"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/conf/ProducerConfigurationData.java"},"org.apache.pulsar.client.impl.conf.ProducerConfigurationData"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Consumer"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/conf/ConsumerConfigurationData.java"},"org.apache.pulsar.client.impl.conf.ConsumerConfigurationData"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Reader"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/conf/ReaderConfigurationData.java"},"org.apache.pulsar.client.impl.conf.ReaderConfigurationData"))))),(0,n.kt)("p",null,"Docs for configs of external components (whose source code is hosted outside the Pulsar repositories) are updated ",(0,n.kt)("strong",{parentName:"p"},"manually"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Components"),(0,n.kt)("th",{parentName:"tr",align:null},"Update where ..."))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BookKeeper"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar-site/blob/main/static/reference/next/config/reference-configuration-bookkeeper.md"},"reference-configuration-bookkeeper.md"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Log4j"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar-site/blob/main/static/reference/next/config/reference-configuration-log4j.md"},"reference-configuration-log4j.md"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Log4j shell"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar-site/blob/main/static/reference/next/config/reference-configuration-log4j-shell.md"},"reference-configuration-log4j-shell.md"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ZooKeeper"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar-site/blob/main/static/reference/next/config/reference-configuration-zookeeper.md"},"reference-configuration-zookeeper.md"))))),(0,n.kt)("h3",{id:"update-command-line-tool-docs"},"Update command-line tool docs"),(0,n.kt)("p",null,"Docs for bundled Java-based command-line tools are generated ",(0,n.kt)("strong",{parentName:"p"},"automatically"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Components"),(0,n.kt)("th",{parentName:"tr",align:null},"Update where\u2026"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pulsar"),(0,n.kt)("td",{parentName:"tr",align:null},"Different subcommands of ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/bin/pulsar"},"bin/pulsar")," are updated in different code files")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pulsar-admin"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master/pulsar-client-tools/src/main/java/org/apache/pulsar/admin/cli"},"Classes under the admin command-line folder"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pulsar-client"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master/pulsar-client-tools/src/main/java/org/apache/pulsar/client/cli"},"Classes under the client command-line folder"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pulsar-perf"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("li",null,(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master/pulsar-testclient/src/main/java/org/apache/pulsar/proxy/socket/client"},"The ",(0,n.kt)("inlineCode",{parentName:"a"},"websocket-producer")," subcommand")),(0,n.kt)("li",null,(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master/pulsar-testclient/src/main/java/org/apache/pulsar/testclient"},"Other subcommands")))))),(0,n.kt)("p",null,"Docs for external command-line tools or bare scripts are updated ",(0,n.kt)("strong",{parentName:"p"},"manually"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Components"),(0,n.kt)("th",{parentName:"tr",align:null},"Update where\u2026"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pulsar-shell"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar-site/blob/main/static/reference/next/pulsar-shell/pulsar-shell.md"},"pulsar-shell.md"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pulsar-daemon"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar-site/blob/main/static/reference/next/pulsar-daemon/pulsar-daemon.md"},"pulsar-daemon.md"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"bookkeeper"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar-site/blob/main/static/reference/next/bookkeeper/bookkeeper.md"},"bookkeeper.md"))))),(0,n.kt)("h2",{id:"update-clientfunction-matrix"},"Update client/function matrix"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1YHYTkIXR8-Ql103u-IMI18TXLlGStK8uJjDsOOA0T20/edit#gid=1784579914"},"Pulsar Feature Matrix")," outlines every feature supported by the Pulsar client and function."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"It's public and everyone has access to edit it. You can reach out to ",(0,n.kt)("inlineCode",{parentName:"li"},"dev@pulsar.apache.org")," if you have problems in editing."),(0,n.kt)("li",{parentName:"ul"},"This matrix will be moved to the Pulsar website (instead of the spreadsheet) in the future."))),(0,n.kt)("p",null,"If you want to update the Pulsar Feature Matrix, follow the steps below."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Submit your code and doc PRs."),(0,n.kt)("li",{parentName:"ol"},"Get your PR reviewed and merged."),(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1YHYTkIXR8-Ql103u-IMI18TXLlGStK8uJjDsOOA0T20/edit#gid=1784579914"},"Pulsar Feature Matrix"),", check the box in the corresponding cell with the links of PRs and doc site.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Client Feature Matrix Workflow",src:a(3476).Z,width:"584",height:"442"})))}d.isMDXComponent=!0},3476:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/client-matrix-workflow-e5e553d47d971e39c37b9ed5cdee3ff3.png"}}]);