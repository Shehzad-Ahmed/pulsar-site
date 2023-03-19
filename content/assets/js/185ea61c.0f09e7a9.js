"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3322],{3905:(a,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>g});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function i(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function o(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),p=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):i(i({},e),a)),t},c=function(a){var e=p(a.components);return n.createElement(l.Provider,{value:e},a.children)},d="mdxType",u={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,r=a.originalType,l=a.parentName,c=o(a,["components","mdxType","originalType","parentName"]),d=p(t),m=s,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return t?n.createElement(g,i(i({ref:e},c),{},{components:t})):n.createElement(g,i({ref:e},c))}));function g(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=a,o[d]="string"==typeof a?a:s,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(a,e,t)=>{t.d(e,{Z:()=>i});var n=t(67294),s=t(86010);const r={tabItem:"tabItem_Ymn6"};function i(a){let{children:e,hidden:t,className:i}=a;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,i),hidden:t},e)}},65488:(a,e,t)=>{t.d(e,{Z:()=>u});var n=t(87462),s=t(67294),r=t(86010),i=t(72389),o=t(67392),l=t(7094),p=t(12466);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function d(a){const{lazy:e,block:t,defaultValue:i,values:d,groupId:u,className:m}=a,g=s.Children.map(a.children,(a=>{if((0,s.isValidElement)(a)&&"value"in a.props)return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??g.map((a=>{let{props:{value:e,label:t,attributes:n}}=a;return{value:e,label:t,attributes:n}})),v=(0,o.l)(k,((a,e)=>a.value===e.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===i?i:i??g.find((a=>a.props.default))?.props.value??g[0].props.value;if(null!==h&&!k.some((a=>a.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${k.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:T}=(0,l.U)(),[b,N]=(0,s.useState)(h),y=[],{blockElementScrollPositionUntilNextRender:I}=(0,p.o5)();if(null!=u){const a=f[u];null!=a&&a!==b&&k.some((e=>e.value===a))&&N(a)}const S=a=>{const e=a.currentTarget,t=y.indexOf(e),n=k[t].value;n!==b&&(I(e),N(n),null!=u&&T(u,String(n)))},w=a=>{let e=null;switch(a.key){case"Enter":S(a);break;case"ArrowRight":{const t=y.indexOf(a.currentTarget)+1;e=y[t]??y[0];break}case"ArrowLeft":{const t=y.indexOf(a.currentTarget)-1;e=y[t]??y[y.length-1];break}}e?.focus()};return s.createElement("div",{className:(0,r.Z)("tabs-container",c.tabList)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},m)},k.map((a=>{let{value:e,label:t,attributes:i}=a;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:b===e?0:-1,"aria-selected":b===e,key:e,ref:a=>y.push(a),onKeyDown:w,onClick:S},i,{className:(0,r.Z)("tabs__item",c.tabItem,i?.className,{"tabs__item--active":b===e})}),t??e)}))),e?(0,s.cloneElement)(g.filter((a=>a.props.value===b))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},g.map(((a,e)=>(0,s.cloneElement)(a,{key:e,hidden:a.props.value!==b})))))}function u(a){const e=(0,i.Z)();return s.createElement(d,(0,n.Z)({key:String(e)},a))}},80055:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=t(87462),s=(t(67294),t(3905)),r=t(65488),i=t(85162);const o={id:"admin-api-transactions",title:"Manage transactions",sidebar_label:"Transactions"},l=void 0,p={unversionedId:"admin-api-transactions",id:"version-2.11.x/admin-api-transactions",title:"Manage transactions",description:"This page only shows some frequently used operations.",source:"@site/versioned_docs/version-2.11.x/admin-api-transactions.md",sourceDirName:".",slug:"/admin-api-transactions",permalink:"/docs/2.11.x/admin-api-transactions",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/admin-api-transactions.md",tags:[],version:"2.11.x",frontMatter:{id:"admin-api-transactions",title:"Manage transactions",sidebar_label:"Transactions"},sidebar:"docsSidebar",previous:{title:"Schemas",permalink:"/docs/2.11.x/admin-api-schemas"},next:{title:"Kafka client wrapper",permalink:"/docs/2.11.x/adaptors-kafka"}},c={},d=[{value:"Transaction resources",id:"transaction-resources",level:2},{value:"GetSlowTransactions",id:"getslowtransactions",level:3},{value:"ScaleTransactionCoordinators",id:"scaletransactioncoordinators",level:3},{value:"Transaction stats",id:"transaction-stats",level:2},{value:"Get transaction metadata",id:"get-transaction-metadata",level:3},{value:"Get transaction stats in transaction pending ack",id:"get-transaction-stats-in-transaction-pending-ack",level:3},{value:"Get transaction stats in transaction buffer",id:"get-transaction-stats-in-transaction-buffer",level:3},{value:"Transaction coordinator stats",id:"transaction-coordinator-stats",level:2},{value:"Get coordinator stats",id:"get-coordinator-stats",level:3},{value:"Get coordinator internal stats",id:"get-coordinator-internal-stats",level:3},{value:"Transaction pending ack stats",id:"transaction-pending-ack-stats",level:2},{value:"Get transaction pending ack stats",id:"get-transaction-pending-ack-stats",level:3},{value:"Get transaction pending ack internal stats",id:"get-transaction-pending-ack-internal-stats",level:3},{value:"Get position stats in pending ack",id:"get-position-stats-in-pending-ack",level:3},{value:"Transaction buffer stats",id:"transaction-buffer-stats",level:2},{value:"Get transaction buffer stats",id:"get-transaction-buffer-stats",level:3}],u={toc:d},m="wrapper";function g(a){let{components:e,...t}=a;return(0,s.kt)(m,(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"This page only shows ",(0,s.kt)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,s.kt)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more, see ",(0,s.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/"},"Pulsar admin doc"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,s.kt)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,s.kt)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/2.11.x/"},"Java admin API doc"),".")))),(0,s.kt)("h2",{id:"transaction-resources"},"Transaction resources"),(0,s.kt)("h3",{id:"getslowtransactions"},"GetSlowTransactions"),(0,s.kt)("p",null,"In the production environment, there may be some long-lasting transactions that have never been completed. You can get these slow transactions that have survived over a certain time under a coordinator or all coordinators in the following ways."),(0,s.kt)(r.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin transactions slow-transactions -c 1 -t 1s\n"))),(0,s.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/transactions-rest-api?version=2.11.0&apiversion=v3#operation/getSlowTransactions"},"GET /admin/v3/transactions/slowTransactions/:timeout"))),(0,s.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"admin.transactions().getSlowTransactionsByCoordinatorId(coordinatorId, timeout, timeUnit)\n//Or get slow transactions from all coordinators\nadmin.transactions().getSlowTransactions(timeout, timeUnit)\n")))),(0,s.kt)("p",null,"The following is an example of the returned values."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "(0,3)": {\n    "txnId": "(0,3)",\n    "status": "OPEN",\n    "openTimestamp": 1658120122474,\n    "timeoutAt": 300000,\n    "producedPartitions": {},\n    "ackedPartitions": {}\n  },\n  "(0,2)": {\n    "txnId": "(0,2)",\n    "status": "OPEN",\n    "openTimestamp": 1658120122471,\n    "timeoutAt": 300000,\n    "producedPartitions": {},\n    "ackedPartitions": {}\n  },\n  "(0,5)": {\n    "txnId": "(0,5)",\n    "status": "OPEN",\n    "openTimestamp": 1658120122478,\n    "timeoutAt": 300000,\n    "producedPartitions": {},\n    "ackedPartitions": {}\n  },\n  "(0,4)": {\n    "txnId": "(0,4)",\n    "status": "OPEN",\n    "openTimestamp": 1658120122476,\n    "timeoutAt": 300000,\n    "producedPartitions": {},\n    "ackedPartitions": {}\n  },\n  "(0,7)": {\n    "txnId": "(0,7)",\n    "status": "OPEN",\n    "openTimestamp": 1658120122482,\n    "timeoutAt": 300000,\n    "producedPartitions": {},\n    "ackedPartitions": {}\n  },\n  "(0,10)": {\n    "txnId": "(0,10)",\n    "status": "OPEN",\n    "openTimestamp": 1658120122488,\n    "timeoutAt": 300000,\n    "producedPartitions": {},\n    "ackedPartitions": {}\n  },\n  "(0,6)": {\n    "txnId": "(0,6)",\n    "status": "OPEN",\n    "openTimestamp": 1658120122480,\n    "timeoutAt": 300000,\n    "producedPartitions": {},\n    "ackedPartitions": {}\n  },\n  "(0,9)": {\n    "txnId": "(0,9)",\n    "status": "OPEN",\n    "openTimestamp": 1658120122486,\n    "timeoutAt": 300000,\n    "producedPartitions": {},\n    "ackedPartitions": {}\n  },\n  "(0,8)": {\n    "txnId": "(0,8)",\n    "status": "OPEN",\n    "openTimestamp": 1658120122484,\n    "timeoutAt": 300000,\n    "producedPartitions": {},\n    "ackedPartitions": {}\n  },\n  "(0,11)": {\n    "txnId": "(0,11)",\n    "status": "OPEN",\n    "openTimestamp": 1658120122490,\n    "timeoutAt": 300000,\n    "producedPartitions": {},\n    "ackedPartitions": {}\n  }\n}\n')),(0,s.kt)("h3",{id:"scaletransactioncoordinators"},"ScaleTransactionCoordinators"),(0,s.kt)("p",null,"When the performance of transactions reaches a bottleneck due to the insufficient number of transaction coordinators, you can scale the number of the transaction coordinators in the following ways."),(0,s.kt)(r.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin transactions scale-transactionCoordinators -r 17\n"))),(0,s.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/transactions-rest-api?version=2.11.0&apiversion=v3#operation/scaleTransactionCoordinators"},"GET /admin/v3/transactions/transactionCoordinator/:replicas"))),(0,s.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"admin.transactions().scaleTransactionCoordinators(replicas);\n")))),(0,s.kt)("h2",{id:"transaction-stats"},"Transaction stats"),(0,s.kt)("h3",{id:"get-transaction-metadata"},"Get transaction metadata"),(0,s.kt)("p",null,"The transaction metadata that can be retrieved include:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"txnId:")," The ID of this transaction."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"status:")," The status of this transaction."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"openTimestamp:")," The open time of this transaction."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"timeoutAt:")," The timeout of this transaction."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"producedPartitions:")," The partitions or topics that messages have been sent to with this transaction."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"ackedPartitions:")," The partitions or topics where messages have been acknowledged with this transaction.")),(0,s.kt)("p",null,"Use one of the following ways to get your transaction metadata."),(0,s.kt)(r.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin transactions transaction-metadata -m 1 -l 1\n"))),(0,s.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/transactions-rest-api?version=2.11.0&apiversion=v3#operation/getTransactionMetadata"},"GET /admin/v3/transactions/transactionMetadata/:mostSigBits/:leastSigBits"))),(0,s.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"admin.transactions().getTransactionMetadata(txnID);\n")))),(0,s.kt)("p",null,"The following is an example of the returned values."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n "txnId" : "(1,18)",\n "status" : "ABORTING",\n "openTimestamp" : 1656592983374,\n "timeoutAt" : 5000,\n "producedPartitions" : {\n   "my-topic" : {\n     "startPosition" : "127:4959",\n     "aborted" : true\n   }\n },\n "ackedPartitions" : {\n   "my-topic" : {\n     "mysubName" : {\n       "cumulativeAckPosition" : null\n     }\n   }\n }\n}\n')),(0,s.kt)("h3",{id:"get-transaction-stats-in-transaction-pending-ack"},"Get transaction stats in transaction pending ack"),(0,s.kt)("p",null,"The transaction stats in transaction pending ack that can be retrieved include:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"cumulativeAckPosition:")," The position that this transaction cumulatively acknowledges in this subscription.")),(0,s.kt)("p",null,"Use one of the following ways to get transaction stats in pending ack:"),(0,s.kt)(r.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin transactions transaction-in-pending-ack-stats -m 1 -l 1 -t my-topic -s mysubname\n"))),(0,s.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/transactions-rest-api?version=2.11.0&apiversion=v3#operation/getTransactionInPendingAckStats"},"GET /admin/v3/transactions/transactionInPendingAckStats/:tenant/:namespace/:topic/:subName/:mostSigBits/:leastSigBits"))),(0,s.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"admin.transactions().getTransactionInPendingAckStats(txnID, topic, subname);\n")))),(0,s.kt)("p",null,"The following is an example of the returned value."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n "cumulativeAckPosition" : "137:49959"\n }\n')),(0,s.kt)("h3",{id:"get-transaction-stats-in-transaction-buffer"},"Get transaction stats in transaction buffer"),(0,s.kt)("p",null,"The transaction stats in the transaction buffer that can be retrieved include:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"startPosition:")," The start position of this transaction in the transaction buffer."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"aborted:")," The flag of whether this transaction has been aborted.")),(0,s.kt)("p",null,"Use one of the following ways to get transaction stats in transaction buffer:"),(0,s.kt)(r.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin transactions transaction-in-buffer-stats -m 1 -l 1 -t my-topic\n"))),(0,s.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/transactions-rest-api?version=2.11.0&apiversion=v3#operation/getTransactionInBufferStats"},"GET /admin/v3/transactions/transactionInBufferStats/:tenant/:namespace/:topic/:mostSigBits/:leastSigBits"))),(0,s.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"admin.transactions().getTransactionInBufferStatsAsync(txnID, topic);\n")))),(0,s.kt)("p",null,"The following is an example of the returned values."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n "startPosition" : "137:49759",\n "aborted" : false\n}\n')),(0,s.kt)("h2",{id:"transaction-coordinator-stats"},"Transaction coordinator stats"),(0,s.kt)("p",null,"The transaction coordinator (TC) is a module inside a Pulsar broker. It maintains the entire life cycle of transactions and handles transaction timeout."),(0,s.kt)("h3",{id:"get-coordinator-stats"},"Get coordinator stats"),(0,s.kt)("p",null,"The transaction coordinator stats that can be retrieved include:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"state:"),"  The state of this transaction coordinator."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"leastSigBit:s")," The sequence ID of this transaction coordinator."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"lowWaterMark:")," The low watermark of this transaction coordinator."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"ongoingTxnSize:")," The total number of ongoing transactions in this transaction coordinator."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"recoverStartTime:")," The start timestamp of transaction coordinator recovery. ",(0,s.kt)("inlineCode",{parentName:"li"},"0L")," means no startup."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"recoverEndTime:")," The end timestamp of transaction coordinator recovery. ",(0,s.kt)("inlineCode",{parentName:"li"},"0L")," means no startup.")),(0,s.kt)("p",null,"Use one of the following ways to get transaction coordinator stats:"),(0,s.kt)(r.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin transactions coordinator-stats -c 1\n"))),(0,s.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/transactions-rest-api?version=2.11.0&apiversion=v3#operation/getCoordinatorStats"},"GET /admin/v3/transactions/coordinatorStats"))),(0,s.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"admin.transactions().getCoordinatorStatsById(coordinatorId);\n//Or get all coordinator stats.\nadmin.transactions().getCoordinatorStats();\n")))),(0,s.kt)("p",null,"The following is an example of the returned values."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "state" : "Ready",\n  "leastSigBits" : 1,\n  "lowWaterMark" : 0,\n  "ongoingTxnSize" : 0,\n  "recoverStartTime" : 1657021892377,\n  "recoverEndTime" : 1657021892378\n}\n')),(0,s.kt)("h3",{id:"get-coordinator-internal-stats"},"Get coordinator internal stats"),(0,s.kt)("p",null,"The coordinator's internal stats that can be retrieved include:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"transactionLogStats:")," The stats of the transaction coordinator log."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"managedLedgerName:")," The name of the managed ledger where the transaction coordinator log is stored."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"managedLedgerInternalStats:")," The internal stats of the managed ledger where the transaction coordinator log is stored. See ",(0,s.kt)("inlineCode",{parentName:"li"},"[managedLedgerInternalStats](/docs/2.11.x/admin-api-topics#get-internal-stats)")," for more details.")),(0,s.kt)("p",null,"Use one of the following ways to get coordinator\u2019s internal stats:"),(0,s.kt)(r.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin transactions coordinator-internal-stats -c 1 -m\n"))),(0,s.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/transactions-rest-api?version=2.11.0&apiversion=v3#operation/getCoordinatorInternalStats"},"GET /admin/v3/transactions/coordinatorInternalStats/:coordinatorId"))),(0,s.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"admin.transactions().getCoordinatorInternalStats(coordinatorId, metadata);\n")))),(0,s.kt)("p",null,"The following is an example of the returned values."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n "transactionLogStats" : {\n   "managedLedgerName" : "pulsar/system/persistent/__transaction_log_1",\n   "managedLedgerInternalStats" : {\n     "entriesAddedCounter" : 3,\n     "numberOfEntries" : 3,\n     "totalSize" : 63,\n     "currentLedgerEntries" : 3,\n     "currentLedgerSize" : 63,\n     "lastLedgerCreatedTimestamp" : "2022-06-30T18:18:05.88+08:00",\n     "waitingCursorsCount" : 0,\n     "pendingAddEntriesCount" : 0,\n     "lastConfirmedEntry" : "13:2",\n     "state" : "LedgerOpened",\n     "ledgers" : [ {\n       "ledgerId" : 13,\n       "entries" : 0,\n       "size" : 0,\n       "offloaded" : false,\n       "metadata" : "LedgerMetadata{formatVersion=3, ensembleSize=1, writeQuorumSize=1, ackQuorumSize=1, state=CLOSED, length=63, lastEntryId=2, digestType=CRC32C, password=OMITTED, ensembles={0=[10.20.240.119:3181]}, customMetadata={component=base64:bWFuYWdlZC1sZWRnZXI=, pulsar/managed-ledger=base64:cHVsc2FyL3N5c3RlbS9wZXJzaXN0ZW50L19fdHJhbnNhY3Rpb25fbG9nXzE=, application=base64:cHVsc2Fy}}",\n       "underReplicated" : false\n     } ],\n     "cursors" : {\n       "transaction.subscription" : {\n         "markDeletePosition" : "13:2",\n         "readPosition" : "13:3",\n         "waitingReadOp" : false,\n         "pendingReadOps" : 0,\n         "messagesConsumedCounter" : 3,\n         "cursorLedger" : 22,\n         "cursorLedgerLastEntry" : 1,\n         "individuallyDeletedMessages" : "[]",\n         "lastLedgerSwitchTimestamp" : "2022-06-30T18:18:05.932+08:00",\n         "state" : "Open",\n         "numberOfEntriesSinceFirstNotAckedMessage" : 1,\n         "totalNonContiguousDeletedMessagesRange" : 0,\n         "subscriptionHavePendingRead" : false,\n         "subscriptionHavePendingReplayRead" : false,\n         "properties" : { }\n       }\n     }\n   }\n }\n}\n')),(0,s.kt)("h2",{id:"transaction-pending-ack-stats"},"Transaction pending ack stats"),(0,s.kt)("p",null,"Pending ack maintains message acknowledgments within a transaction before a transaction completes. If a message is in the pending acknowledge state, the message cannot be acknowledged by other transactions until the message is removed from the pending acknowledge state."),(0,s.kt)("h3",{id:"get-transaction-pending-ack-stats"},"Get transaction pending ack stats"),(0,s.kt)("p",null,"The transaction pending ack state stats that can be retrieved include:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"state:")," The state of this transaction coordinator."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"lowWaterMark:")," The low watermark of this transaction coordinator."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"ongoingTxnSize:")," The total number of ongoing transactions in this transaction coordinator."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"recoverStartTime:")," The start timestamp of transaction pendingAck recovery. ",(0,s.kt)("inlineCode",{parentName:"li"},"0L")," means no startup."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"recoverEndTime:")," The end timestamp of transaction pendingAck recovery. ",(0,s.kt)("inlineCode",{parentName:"li"},"0L")," means no startup.")),(0,s.kt)("p",null,"Use one of the following ways to get transaction pending ack stats:"),(0,s.kt)(r.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin.transactions()s pending-ack-stats -t my-topic -s mysubName -l\n"))),(0,s.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/transactions-rest-api?version=2.11.0&apiversion=v3#operation/getPendingAckStats"},"GET /admin/v3/transactions/pendingAckStats/:tenant/:namespace:/:topic:/:subName"))),(0,s.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"admin.transactions().getPendingAckStats(topic, subName, lowWaterMarks)\n")))),(0,s.kt)("p",null,"The following is an example of the returned values."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "state" : "Ready",\n  "lowWaterMarks" : {\n    "1" : 0\n  },\n  "ongoingTxnSize" : 1,\n  "recoverStartTime" : 1657021899202,\n  "recoverEndTime" : 1657021899203\n}\n')),(0,s.kt)("h3",{id:"get-transaction-pending-ack-internal-stats"},"Get transaction pending ack internal stats"),(0,s.kt)("p",null,"The transaction pending ack internal stats that can be retrieved include:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"transactionLogStats:")," The stats of the transaction pending ack log."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"managedLedgerName:")," The name of the managed ledger where the transaction pending ack log is stored."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"managedLedgerInternalStats:")," The internal stats of the managed ledger where the transaction coordinator log is stored. See ",(0,s.kt)("inlineCode",{parentName:"li"},"[managedLedgerInternalStats](/docs/2.11.x/admin-api-topics#get-internal-stats)")," for more details.")),(0,s.kt)("p",null,"Use one of the following ways to get transaction pending ack internal stats:"),(0,s.kt)(r.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin transactions pending-ack-internal-stats -t my-topic -s mysubName -m\n"))),(0,s.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/transactions-rest-api?version=2.11.0&apiversion=v3#operation/getPendingAckInternalStats"},"GET /admin/v3/transactions/pendingAckInternalStats/:tenant/:namespace:/:topic:/:subName"))),(0,s.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"admin.transactions().getPendingAckInternalStats(topic, subName, boolean metadata);\n")))),(0,s.kt)("p",null,"The following is an example of the returned values."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n "pendingAckLogStats" : {\n   "managedLedgerName" : "public/default/persistent/my-topic-mysubName__transaction_pending_ack",\n   "managedLedgerInternalStats" : {\n     "entriesAddedCounter" : 2247,\n     "numberOfEntries" : 2247,\n     "totalSize" : 37212,\n     "currentLedgerEntries" : 104,\n     "currentLedgerSize" : 1732,\n     "lastLedgerCreatedTimestamp" : "2022-06-30T19:02:09.746+08:00",\n     "waitingCursorsCount" : 0,\n     "pendingAddEntriesCount" : 52,\n     "lastConfirmedEntry" : "64:51",\n     "state" : "LedgerOpened",\n     "ledgers" : [ {\n       "ledgerId" : 56,\n       "entries" : 2195,\n       "size" : 36346,\n       "offloaded" : false,\n       "metadata" : "LedgerMetadata{formatVersion=3, ensembleSize=1, writeQuorumSize=1, ackQuorumSize=1, state=CLOSED, length=36346, lastEntryId=2194, digestType=CRC32C, password=OMITTED, ensembles={0=[10.20.240.119:3181]}, customMetadata={component=base64:bWFuYWdlZC1sZWRnZXI=, pulsar/managed-ledger=base64:cHVibGljL2RlZmF1bHQvcGVyc2lzdGVudC9teS10b3BpYy1teXN1Yk5hbWVfX3RyYW5zYWN0aW9uX3BlbmRpbmdfYWNr, application=base64:cHVsc2Fy}}",\n       "underReplicated" : false\n     }, {\n       "ledgerId" : 64,\n       "entries" : 0,\n       "size" : 0,\n       "offloaded" : false,\n       "metadata" : "LedgerMetadata{formatVersion=3, ensembleSize=1, writeQuorumSize=1, ackQuorumSize=1, state=CLOSED, length=866, lastEntryId=51, digestType=CRC32C, password=OMITTED, ensembles={0=[10.20.240.119:3181]}, customMetadata={component=base64:bWFuYWdlZC1sZWRnZXI=, pulsar/managed-ledger=base64:cHVibGljL2RlZmF1bHQvcGVyc2lzdGVudC9teS10b3BpYy1teXN1Yk5hbWVfX3RyYW5zYWN0aW9uX3BlbmRpbmdfYWNr, application=base64:cHVsc2Fy}}",\n       "underReplicated" : false\n     } ],\n     "cursors" : {\n       "__pending_ack_state" : {\n         "markDeletePosition" : "56:-1",\n         "readPosition" : "56:0",\n         "waitingReadOp" : false,\n         "pendingReadOps" : 0,\n         "messagesConsumedCounter" : 0,\n         "cursorLedger" : 57,\n         "cursorLedgerLastEntry" : 0,\n         "individuallyDeletedMessages" : "[]",\n         "lastLedgerSwitchTimestamp" : "2022-06-30T18:55:26.842+08:00",\n         "state" : "Open",\n         "numberOfEntriesSinceFirstNotAckedMessage" : 1,\n         "totalNonContiguousDeletedMessagesRange" : 0,\n         "subscriptionHavePendingRead" : false,\n         "subscriptionHavePendingReplayRead" : false,\n         "properties" : { }\n       }\n     }\n   }\n }\n}\n')),(0,s.kt)("h3",{id:"get-position-stats-in-pending-ack"},"Get position stats in pending ack"),(0,s.kt)("p",null,"The position stats in pending ack include:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"PendingAck")," The position is in pending ack stats."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"MarkDelete")," The position is already acknowledged."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"NotInPendingAck")," The position is not acknowledged within a transaction."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"PendingAckNotReady")," The pending ack has not been initialized."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"InvalidPosition")," The position is invalid, for example, batch index > batch size.")),(0,s.kt)("p",null,"If you want to know whether the position has been acknowledged, you can use one of the following ways to get position stats pending ack:"),(0,s.kt)(r.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin transactions position-stats-in-pending-ack -t my-topic -s mysubName -l 15 -e 6\n"))),(0,s.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/transactions-rest-api?version=2.11.0&apiversion=v3#operation/getPositionStatsInPendingAck"},"GET /admin/v3/transactions/pendingAckStats\n/:tenant/:namespace:/:topic:/:subName/:ledgerId/:entryId?batchIndex=batchIndex"))),(0,s.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"admin.transactions().getPositionStatsInPendingAckAsync(topic, subName, ledgerId, entryId, lowWaterMarks);\n")))),(0,s.kt)("p",null,"The following is an example of the returned values."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "State" : "MarkDelete"\n}\n')),(0,s.kt)("h2",{id:"transaction-buffer-stats"},"Transaction buffer stats"),(0,s.kt)("p",null,"Transaction buffer handles messages produced to a topic partition within a transaction.\nThe messages in the transaction buffer are not visible to consumers until the transactions are committed. The messages in the transaction buffer are discarded when the transactions are aborted."),(0,s.kt)("h3",{id:"get-transaction-buffer-stats"},"Get transaction buffer stats"),(0,s.kt)("p",null,"The transaction buffer stats that can be retrieved include:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"state:")," The state of this transaction buffer."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"maxReadPosition:")," The maximum read position of this transaction buffer."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"lastSnapshotTimestamps:")," The last snapshot timestamp of this transaction buffer."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"lowWaterMarks (Optional):")," The low watermark details of the transaction buffer."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"ongoingTxnSize:")," The total number of ongoing transactions in this transaction buffer."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"recoverStartTime:")," The start timestamp of transaction buffer recovery. ",(0,s.kt)("inlineCode",{parentName:"li"},"0L")," means no startup."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"recoverEndTime:")," The end timestamp of transaction buffer recovery. ",(0,s.kt)("inlineCode",{parentName:"li"},"0L")," means no startup.")),(0,s.kt)("p",null,"Use one of the following ways to get transaction buffer stats:"),(0,s.kt)(r.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin transactions transaction-buffer-stats -t my-topic -l\n"))),(0,s.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/transactions-rest-api?version=2.11.0&apiversion=v3#operation/getTransactionBufferStats"},"GET /admin/v3/transactions/transactionBufferStats/:tenant/:namespace:/:topic:/:subName"))),(0,s.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"admin.transactions().getTransactionBufferStats(topic, lowWaterMarks);\n")))),(0,s.kt)("p",null,"The following is an example of the returned values."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "state" : "Ready",\n  "maxReadPosition" : "38:101",\n  "lastSnapshotTimestamps" : 1657021903534,\n  "lowWaterMarks" : {\n    "1" : -1,\n    "2" : -1\n  },\n  "ongoingTxnSize" : 0,\n  "recoverStartTime" : 1657021892850,\n  "recoverEndTime" : 1657021893372\n}\n')))}g.isMDXComponent=!0}}]);