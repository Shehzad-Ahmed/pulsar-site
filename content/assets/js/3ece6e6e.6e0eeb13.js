"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[60985],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=l(n),h=i,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||o;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=h;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[u]="string"==typeof e?e:i,s[1]=r;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},13922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const o={id:"concepts-multi-tenancy",title:"Multi Tenancy",sidebar_label:"Multi Tenancy",original_id:"concepts-multi-tenancy"},s=void 0,r={unversionedId:"concepts-multi-tenancy",id:"version-2.8.x/concepts-multi-tenancy",title:"Multi Tenancy",description:"Pulsar was created from the ground up as a multi-tenant system. To support multi-tenancy, Pulsar has a concept of tenants. Tenants can be spread across clusters and can each have their own authentication and authorization scheme applied to them. They are also the administrative unit at which storage quotas, message TTL, and isolation policies can be managed.",source:"@site/versioned_docs/version-2.8.x/concepts-multi-tenancy.md",sourceDirName:".",slug:"/concepts-multi-tenancy",permalink:"/docs/2.8.x/concepts-multi-tenancy",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.8.x/concepts-multi-tenancy.md",tags:[],version:"2.8.x",frontMatter:{id:"concepts-multi-tenancy",title:"Multi Tenancy",sidebar_label:"Multi Tenancy",original_id:"concepts-multi-tenancy"},sidebar:"version-2.8.x/docsSidebar",previous:{title:"Geo Replication",permalink:"/docs/2.8.x/concepts-replication"},next:{title:"Authentication and Authorization",permalink:"/docs/2.8.x/concepts-authentication"}},c={},l=[{value:"Tenants",id:"tenants",level:2},{value:"Namespaces",id:"namespaces",level:2},{value:"Namespace change events and topic-level policies",id:"namespace-change-events-and-topic-level-policies",level:3}],p={toc:l};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pulsar was created from the ground up as a multi-tenant system. To support multi-tenancy, Pulsar has a concept of tenants. Tenants can be spread across clusters and can each have their own ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.8.x/security-overview"},"authentication and authorization")," scheme applied to them. They are also the administrative unit at which storage quotas, ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.8.x/cookbooks-retention-expiry#time-to-live-ttl"},"message TTL"),", and isolation policies can be managed."),(0,i.kt)("p",null,"The multi-tenant nature of Pulsar is reflected mostly visibly in topic URLs, which have this structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},"\npersistent://tenant/namespace/topic\n\n")),(0,i.kt)("p",null,"As you can see, the tenant is the most basic unit of categorization for topics (more fundamental than the namespace and topic name)."),(0,i.kt)("h2",{id:"tenants"},"Tenants"),(0,i.kt)("p",null,"To each tenant in a Pulsar instance you can assign:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/security-authorization"},"authorization")," scheme"),(0,i.kt)("li",{parentName:"ul"},"The set of ",(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/reference-terminology#cluster"},"clusters")," to which the tenant's configuration applies")),(0,i.kt)("h2",{id:"namespaces"},"Namespaces"),(0,i.kt)("p",null,"Tenants and namespaces are two key concepts of Pulsar to support multi-tenancy."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pulsar is provisioned for specified tenants with appropriate capacity allocated to the tenant."),(0,i.kt)("li",{parentName:"ul"},"A namespace is the administrative unit nomenclature within a tenant. The configuration policies set on a namespace apply to all the topics created in that namespace. A tenant may create multiple namespaces via self-administration using the REST API and the ",(0,i.kt)("a",{parentName:"li",href:"/docs/2.8.x/reference-pulsar-admin"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," CLI tool. For instance, a tenant with different applications can create a separate namespace for each application.")),(0,i.kt)("p",null,"Names for topics in the same namespace will look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},"\npersistent://tenant/app1/topic-1\n\npersistent://tenant/app1/topic-2\n\npersistent://tenant/app1/topic-3\n\n")),(0,i.kt)("h3",{id:"namespace-change-events-and-topic-level-policies"},"Namespace change events and topic-level policies"),(0,i.kt)("p",null,"Pulsar is a multi-tenant event streaming system. Administrators can manage the tenants and namespaces by setting policies at different levels. However, the policies, such as retention policy and storage quota policy, are only available at a namespace level. In many use cases, users need to set a policy at the topic level. The namespace change events approach is proposed for supporting topic-level policies in an efficient way. In this approach, Pulsar is used as an event log to store namespace change events (such as topic policy changes). This approach has a few benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Avoid using ZooKeeper and introduce more loads to ZooKeeper."),(0,i.kt)("li",{parentName:"ul"},"Use Pulsar as an event log for propagating the policy cache. It can scale efficiently."),(0,i.kt)("li",{parentName:"ul"},"Use Pulsar SQL to query the namespace changes and audit the system.")),(0,i.kt)("p",null,"Each namespace has a ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.8.x/concepts-messaging#system-topic"},"system topic")," named ",(0,i.kt)("inlineCode",{parentName:"p"},"__change_events"),". This system topic stores change events for a given namespace. The following figure illustrates how to leverage it to update topic-level policies."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Leverage the system topic to update topic-level policies",src:n(70574).Z,width:"1510",height:"536"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Pulsar Admin clients communicate with the Admin Restful API to update topic-level policies."),(0,i.kt)("li",{parentName:"ol"},"Any broker that receives the Admin HTTP request publishes a topic policy change event to the corresponding system topic (",(0,i.kt)("inlineCode",{parentName:"li"},"__change_events"),") of the namespace."),(0,i.kt)("li",{parentName:"ol"},"Each broker that owns a namespace bundle(s) subscribes to the system topic (",(0,i.kt)("inlineCode",{parentName:"li"},"__change_events"),") to receive the change events of the namespace."),(0,i.kt)("li",{parentName:"ol"},"Each broker applies the change events to its policy cache."),(0,i.kt)("li",{parentName:"ol"},"Once the policy cache is updated, the broker sends the response back to the Pulsar Admin clients.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"By default, the system topic is disabled. To enable topic-level policy (",(0,i.kt)("inlineCode",{parentName:"p"},"topicLevelPoliciesEnabled"),"=",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"), you need to enable the system topic by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"systemtopicenabled")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/broker.conf")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/standalone.conf")," file.")))}u.isMDXComponent=!0},70574:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/system-topic-for-topic-level-policies-326a54c4c9a23081ef9bf8d9646601eb.svg"}}]);