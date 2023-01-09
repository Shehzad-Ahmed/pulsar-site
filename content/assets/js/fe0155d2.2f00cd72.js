"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[89303],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),u=n,m=d["".concat(c,".").concat(u)]||d[u]||g[u]||a;return r?o.createElement(m,i(i({ref:t},p),{},{components:r})):o.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2341:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={id:"concepts-tiered-storage",title:"Tiered Storage",sidebar_label:"Tiered Storage",original_id:"concepts-tiered-storage"},i=void 0,s={unversionedId:"concepts-tiered-storage",id:"version-2.8.x/concepts-tiered-storage",title:"Tiered Storage",description:"Pulsar's segment oriented architecture allows for topic backlogs to grow very large, effectively without limit. However, this can become expensive over time.",source:"@site/versioned_docs/version-2.8.x/concepts-tiered-storage.md",sourceDirName:".",slug:"/concepts-tiered-storage",permalink:"/docs/2.8.x/concepts-tiered-storage",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.8.x/concepts-tiered-storage.md",tags:[],version:"2.8.x",frontMatter:{id:"concepts-tiered-storage",title:"Tiered Storage",sidebar_label:"Tiered Storage",original_id:"concepts-tiered-storage"}},c={},l=[],p={toc:l};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Pulsar's segment oriented architecture allows for topic backlogs to grow very large, effectively without limit. However, this can become expensive over time."),(0,n.kt)("p",null,"One way to alleviate this cost is to use Tiered Storage. With tiered storage, older messages in the backlog can be moved from BookKeeper to a cheaper storage mechanism, while still allowing clients to access the backlog as if nothing had changed."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Tiered Storage",src:r(30090).Z,width:"1110",height:"697"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Data written to BookKeeper is replicated to 3 physical machines by default. However, once a segment is sealed in BookKeeper it becomes immutable and can be copied to long term storage. Long term storage can achieve cost savings by using mechanisms such as ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Reed%E2%80%93Solomon_error_correction"},"Reed-Solomon error correction")," to require fewer physical copies of data.")),(0,n.kt)("p",null,"Pulsar currently supports S3, Google Cloud Storage (GCS), and filesystem for ",(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/en/cookbooks-tiered-storage/"},"long term store"),". Offloading to long term storage triggered via a Rest API or command line interface. The user passes in the amount of topic data they wish to retain on BookKeeper, and the broker will copy the backlog data to long term storage. The original data will then be deleted from BookKeeper after a configured delay (4 hours by default)."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For a guide for setting up tiered storage, see the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.8.x/cookbooks-tiered-storage"},"Tiered storage cookbook"),".")))}d.isMDXComponent=!0},30090:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/pulsar-tiered-storage-72d8b53762992cfeaa58ae3b48dd2522.png"}}]);