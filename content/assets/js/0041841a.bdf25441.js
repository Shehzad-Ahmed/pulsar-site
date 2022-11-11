"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[84841],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=p(n),g=r,N=s["".concat(d,".").concat(g)]||s[g]||m[g]||l;return n?a.createElement(N,i(i({ref:e},u),{},{components:n})):a.createElement(N,i({ref:e},u))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},85162:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(t){let{children:e,hidden:n,className:i}=t;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},e)}},65488:(t,e,n)=>{n.d(e,{Z:()=>g});var a=n(87462),r=n(67294),l=n(86010),i=n(72389),o=n(67392),d=n(7094),p=n(12466);const u="tabList__CuJ",m="tabItem_LNqP";function s(t){var e;const{lazy:n,block:i,defaultValue:s,values:g,groupId:N,className:k}=t,c=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=g??c.map((t=>{let{props:{value:e,label:n,attributes:a}}=t;return{value:e,label:n,attributes:a}})),h=(0,o.l)(f,((t,e)=>t.value===e.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===s?s:s??(null==(e=c.find((t=>t.props.default)))?void 0:e.props.value)??c[0].props.value;if(null!==b&&!f.some((t=>t.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:C}=(0,d.U)(),[v,T]=(0,r.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:A}=(0,p.o5)();if(null!=N){const t=y[N];null!=t&&t!==v&&f.some((e=>e.value===t))&&T(t)}const S=t=>{const e=t.currentTarget,n=w.indexOf(e),a=f[n].value;a!==v&&(A(e),T(a),null!=N&&C(N,String(a)))},P=t=>{var e;let n=null;switch(t.key){case"Enter":S(t);break;case"ArrowRight":{const e=w.indexOf(t.currentTarget)+1;n=w[e]??w[0];break}case"ArrowLeft":{const e=w.indexOf(t.currentTarget)-1;n=w[e]??w[w.length-1];break}}null==(e=n)||e.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},k)},f.map((t=>{let{value:e,label:n,attributes:i}=t;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,key:e,ref:t=>w.push(t),onKeyDown:P,onClick:S},i,{className:(0,l.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":v===e})}),n??e)}))),n?(0,r.cloneElement)(c.filter((t=>t.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},c.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==v})))))}function g(t){const e=(0,i.Z)();return r.createElement(s,(0,a.Z)({key:String(e)},t))}},80682:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),l=n(65488),i=n(85162);const o={id:"functions-cli",title:"Pulsar Functions CLI and YAML configs",sidebar_label:"CLI and YAML configs"},d=void 0,p={unversionedId:"functions-cli",id:"functions-cli",title:"Pulsar Functions CLI and YAML configs",description:"Pulsar admin CLI for Pulsar Functions",source:"@site/docs/functions-cli.md",sourceDirName:".",slug:"/functions-cli",permalink:"/docs/next/functions-cli",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/functions-cli.md",tags:[],version:"current",frontMatter:{id:"functions-cli",title:"Pulsar Functions CLI and YAML configs",sidebar_label:"CLI and YAML configs"},sidebar:"docsSidebar",previous:{title:"Package Go Functions",permalink:"/docs/next/functions-package-go"},next:{title:"Window Functions: Context",permalink:"/docs/next/window-functions-context"}},u={},m=[{value:"Pulsar admin CLI for Pulsar Functions",id:"pulsar-admin-cli-for-pulsar-functions",level:2},{value:"YAML configurations for Pulsar Functions",id:"yaml-configurations-for-pulsar-functions",level:2},{value:"ConsumerConfig",id:"consumerconfig",level:5},{value:"ProducerConfig",id:"producerconfig",level:5},{value:"Resources",id:"resources",level:6},{value:"WindowConfig",id:"windowconfig",level:6},{value:"CryptoConfig",id:"cryptoconfig",level:6},{value:"Example",id:"example",level:3}],s={toc:m};function g(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pulsar-admin-cli-for-pulsar-functions"},"Pulsar admin CLI for Pulsar Functions"),(0,r.kt)("p",null,"The Pulsar admin interface enables you to create and manage Pulsar Functions through CLI. For the latest and complete information, including commands, flags, and descriptions, refer to ",(0,r.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},"Pulsar admin CLI"),"."),(0,r.kt)("h2",{id:"yaml-configurations-for-pulsar-functions"},"YAML configurations for Pulsar Functions"),(0,r.kt)("p",null,"You can configure a function by using a predefined YAML file. The following table outlines the required fields and arguments."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Related Command Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"runtimeFlags"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Any flags that you want to pass to a runtime (for process & Kubernetes runtime only).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tenant"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--tenant")),(0,r.kt)("td",{parentName:"tr",align:null},"The tenant of a function.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--namespace")),(0,r.kt)("td",{parentName:"tr",align:null},"The namespace of a function.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--name")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of a function.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"className"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--classname")),(0,r.kt)("td",{parentName:"tr",align:null},"The class name of a function.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"functionType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--function-type")),(0,r.kt)("td",{parentName:"tr",align:null},"The built-in function type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inputs"),(0,r.kt)("td",{parentName:"tr",align:null},"List",(0,r.kt)("inlineCode",{parentName:"td"},"<String>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-i"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--inputs")),(0,r.kt)("td",{parentName:"tr",align:null},"The input topics of a function. Multiple topics can be specified as a comma-separated list.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customSerdeInputs"),(0,r.kt)("td",{parentName:"tr",align:null},"Map",(0,r.kt)("inlineCode",{parentName:"td"},"<String,String>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--custom-serde-inputs")),(0,r.kt)("td",{parentName:"tr",align:null},"The mapping from input topics to SerDe class names.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topicsPattern"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--topics-pattern")),(0,r.kt)("td",{parentName:"tr",align:null},"The topic pattern to consume from a list of topics under a namespace. ",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Note:")," ",(0,r.kt)("inlineCode",{parentName:"td"},"--input")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"--topic-pattern")," are mutually exclusive. For Java functions, you need to add the SerDe class name for a pattern in ",(0,r.kt)("inlineCode",{parentName:"td"},"--custom-serde-inputs"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customSchemaInputs"),(0,r.kt)("td",{parentName:"tr",align:null},"Map",(0,r.kt)("inlineCode",{parentName:"td"},"<String,String>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--custom-schema-inputs")),(0,r.kt)("td",{parentName:"tr",align:null},"The mapping from input topics to schema properties.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customSchemaOutputs"),(0,r.kt)("td",{parentName:"tr",align:null},"Map",(0,r.kt)("inlineCode",{parentName:"td"},"<String,String>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--custom-schema-outputs")),(0,r.kt)("td",{parentName:"tr",align:null},"The mapping from output topics to schema properties.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inputSpecs"),(0,r.kt)("td",{parentName:"tr",align:null},"Map",(0,r.kt)("inlineCode",{parentName:"td"},"<String,"),(0,r.kt)("a",{parentName:"td",href:"#consumerconfig"},"ConsumerConfig"),(0,r.kt)("inlineCode",{parentName:"td"},">")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--input-specs")),(0,r.kt)("td",{parentName:"tr",align:null},"The mapping from inputs to custom configurations.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-o"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--output")),(0,r.kt)("td",{parentName:"tr",align:null},"The output topic of a function. If none is specified, no output is written.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"producerConfig"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#producerconfig"},"ProducerConfig")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--producer-config")),(0,r.kt)("td",{parentName:"tr",align:null},"The custom configurations for producers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"outputSchemaType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-st"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--schema-type")),(0,r.kt)("td",{parentName:"tr",align:null},"The built-in schema type or custom schema class name used for message outputs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"outputSerdeClassName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--output-serde-classname")),(0,r.kt)("td",{parentName:"tr",align:null},"The SerDe class used for message outputs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"logTopic"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--log-topic")),(0,r.kt)("td",{parentName:"tr",align:null},"The topic that the logs of a function are produced to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"processingGuarantees"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--processing-guarantees")),(0,r.kt)("td",{parentName:"tr",align:null},"The processing guarantees (delivery semantics) applied to a function. Available values: ",(0,r.kt)("inlineCode",{parentName:"td"},"ATLEAST_ONCE"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ATMOST_ONCE"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"EFFECTIVELY_ONCE"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"MANUAL"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"retainOrdering"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--retain-ordering")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether functions consume and process messages in order or not.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"retainKeyOrdering"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--retain-key-ordering")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether functions consume and process messages in key order or not.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batchBuilder"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--batch-builder")),(0,r.kt)("td",{parentName:"tr",align:null},"Use ",(0,r.kt)("inlineCode",{parentName:"td"},"producerConfig.batchBuilder")," instead. ",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Note"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"batchBuilder")," will be deprecated in code soon.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forwardSourceMessageProperty"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--forward-source-message-property")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the properties of input messages are forwarded to output topics or not during processing. When the value is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", the forwarding is disabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"userConfig"),(0,r.kt)("td",{parentName:"tr",align:null},"Map",(0,r.kt)("inlineCode",{parentName:"td"},"<String,Object>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--user-config")),(0,r.kt)("td",{parentName:"tr",align:null},"User-defined config key/values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secrets"),(0,r.kt)("td",{parentName:"tr",align:null},"Map",(0,r.kt)("inlineCode",{parentName:"td"},"<String,Object>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--secrets")),(0,r.kt)("td",{parentName:"tr",align:null},"The mapping from secretName to objects that encapsulate how the secret is fetched by the underlying secrets provider.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"runtime"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"The runtime of a function. Available values: ",(0,r.kt)("inlineCode",{parentName:"td"},"java"),",",(0,r.kt)("inlineCode",{parentName:"td"},"python"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"go"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autoAck"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--auto-ack")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the framework acknowledges messages automatically or not. ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Note"),": This configuration will be deprecated in future releases. If you specify a delivery semantic, the framework automatically acknowledges messages. If you do not want the framework to auto-ack messages, set the ",(0,r.kt)("inlineCode",{parentName:"td"},"processingGuarantees")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"MANUAL"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxMessageRetries"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--max-message-retries")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of retries to process a message before giving up.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deadLetterTopic"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--dead-letter-topic")),(0,r.kt)("td",{parentName:"tr",align:null},"The topic used for storing messages that are not processed successfully.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--subs-name")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of Pulsar source subscription used for input-topic consumers if required.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parallelism"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--parallelism")),(0,r.kt)("td",{parentName:"tr",align:null},"The parallelism factor of a function, that is, the number of function instances to run.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resources"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#resources"},"Resources")),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fqfn"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--fqfn")),(0,r.kt)("td",{parentName:"tr",align:null},"The Fully Qualified Function Name (FQFN) of a function.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"windowConfig"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#windowconfig"},"WindowConfig")),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeoutMs"),(0,r.kt)("td",{parentName:"tr",align:null},"Long"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--timeout-ms")),(0,r.kt)("td",{parentName:"tr",align:null},"The message timeout (in milliseconds).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jar"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--jar")),(0,r.kt)("td",{parentName:"tr",align:null},"The path of the JAR file for a function (written in Java). It also supports URL paths that workers can download the package from, including HTTP, HTTPS, file (file protocol assuming that file already exists on worker host), and function (package URL from packages management service).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"py"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--py")),(0,r.kt)("td",{parentName:"tr",align:null},"The path of the main Python/Python wheel file for a function (written in Python). It also supports URL paths that workers can download the package from, including HTTP, HTTPS, file (file protocol assuming that file already exists on worker host), and function (package URL from packages management service).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"go"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--go")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the main Go executable binary for the function (written in Go).  It also supports URL paths that workers can download the package from, including HTTP, HTTPS, file (file protocol assuming that file already exists on worker host), and function (package URL from packages management service).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cleanupSubscription"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the subscriptions that a function creates or uses should be deleted or not when the function is deleted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customRuntimeOptions"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--custom-runtime-options")),(0,r.kt)("td",{parentName:"tr",align:null},"A string that encodes options to customize the runtime.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxPendingAsyncRequests"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--max-message-retries")),(0,r.kt)("td",{parentName:"tr",align:null},"The max number of pending async requests per instance to avoid a large number of concurrent requests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exposePulsarAdminClientEnabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the Pulsar admin client is exposed to function context or not. By default, it is disabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subscriptionPosition"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--subs-position")),(0,r.kt)("td",{parentName:"tr",align:null},"The position of Pulsar source subscription used for consuming messages from a specified location. The default value is ",(0,r.kt)("inlineCode",{parentName:"td"},"Latest"),".")))),(0,r.kt)("h5",{id:"consumerconfig"},"ConsumerConfig"),(0,r.kt)("p",null,"The following table outlines the nested fields and related arguments under the ",(0,r.kt)("inlineCode",{parentName:"p"},"inputSpecs")," field."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Related Command Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"schemaType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"serdeClassName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isRegexPattern"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"schemaProperties"),(0,r.kt)("td",{parentName:"tr",align:null},"Map",(0,r.kt)("inlineCode",{parentName:"td"},"<String,String>")),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consumerProperties"),(0,r.kt)("td",{parentName:"tr",align:null},"Map",(0,r.kt)("inlineCode",{parentName:"td"},"<String,String>")),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"receiverQueueSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cryptoConfig"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#cryptoconfig"},"CryptoConfig")),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Refer to ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin-api/src/main/java/org/apache/pulsar/common/functions/CryptoConfig.java"},"code"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"poolMessages"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,r.kt)("h5",{id:"producerconfig"},"ProducerConfig"),(0,r.kt)("p",null,"The following table outlines the nested fields and related arguments under the ",(0,r.kt)("inlineCode",{parentName:"p"},"producerConfig")," field."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Related Command Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxPendingMessages"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"The max size of a queue that holds messages pending to receive an acknowledgment from a broker.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxPendingMessagesAcrossPartitions"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of ",(0,r.kt)("inlineCode",{parentName:"td"},"maxPendingMessages")," across all partitions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useThreadLocalProducers"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cryptoConfig"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#cryptoconfig"},"CryptoConfig")),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Refer to ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin-api/src/main/java/org/apache/pulsar/common/functions/CryptoConfig.java"},"code"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batchBuilder"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--batch-builder")),(0,r.kt)("td",{parentName:"tr",align:null},"The type of batch construction method. Available values: ",(0,r.kt)("inlineCode",{parentName:"td"},"DEFAULT")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"KEY_BASED"),". The default value is ",(0,r.kt)("inlineCode",{parentName:"td"},"DEFAULT"),".")))),(0,r.kt)("h6",{id:"resources"},"Resources"),(0,r.kt)("p",null,"The following table outlines the nested fields and related arguments under the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," field."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Related Command Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cpu"),(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--cpu")),(0,r.kt)("td",{parentName:"tr",align:null},"The CPU in cores that need to be allocated per function instance (for Kubernetes runtime only).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ram"),(0,r.kt)("td",{parentName:"tr",align:null},"Long"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ram")),(0,r.kt)("td",{parentName:"tr",align:null},"The RAM in bytes that need to be allocated per function instance (for process/Kubernetes runtime only).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disk"),(0,r.kt)("td",{parentName:"tr",align:null},"Long"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--disk")),(0,r.kt)("td",{parentName:"tr",align:null},"The disk in bytes that need to be allocated per function instance (for Kubernetes runtime only).")))),(0,r.kt)("h6",{id:"windowconfig"},"WindowConfig"),(0,r.kt)("p",null,"The following table outlines the nested fields and related arguments under the ",(0,r.kt)("inlineCode",{parentName:"p"},"windowConfig")," field."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Related Command Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"windowLengthCount"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--window-length-count")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of messages per window.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"windowLengthDurationMs"),(0,r.kt)("td",{parentName:"tr",align:null},"Long"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--window-length-duration-ms")),(0,r.kt)("td",{parentName:"tr",align:null},"The time duration (in milliseconds) per window.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slidingIntervalCount"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--sliding-interval-count")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of messages after which a window slides.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"slidingIntervalDurationMs"),(0,r.kt)("td",{parentName:"tr",align:null},"Long"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--sliding-interval-duration-ms")),(0,r.kt)("td",{parentName:"tr",align:null},"The time duration after which a window slides.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lateDataTopic"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxLagMs"),(0,r.kt)("td",{parentName:"tr",align:null},"Long"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"watermarkEmitIntervalMs"),(0,r.kt)("td",{parentName:"tr",align:null},"Long"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestampExtractorClassName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"actualWindowFunctionClassName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,r.kt)("h6",{id:"cryptoconfig"},"CryptoConfig"),(0,r.kt)("p",null,"The following table outlines the nested fields and related arguments under the ",(0,r.kt)("inlineCode",{parentName:"p"},"cryptoConfig")," field."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Related Command Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cryptoKeyReaderClassName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Refer to ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin-api/src/main/java/org/apache/pulsar/common/functions/CryptoConfig.java"},"code"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cryptoKeyReaderConfig"),(0,r.kt)("td",{parentName:"tr",align:null},"Map",(0,r.kt)("inlineCode",{parentName:"td"},"<String, Object>")),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"encryptionKeys"),(0,r.kt)("td",{parentName:"tr",align:null},"String[]"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"producerCryptoFailureAction"),(0,r.kt)("td",{parentName:"tr",align:null},"ProducerCryptoFailureAction"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consumerCryptoFailureAction"),(0,r.kt)("td",{parentName:"tr",align:null},"ConsumerCryptoFailureAction"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"The following example shows how to configure a function using YAML or JSON."),(0,r.kt)(l.Z,{defaultValue:"YAML",values:[{label:"YAML",value:"YAML"},{label:"JSON",value:"JSON"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"YAML",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'tenant: "public"\nnamespace: "default"\nname: "config-file-function"\ninputs: \n  - "persistent://public/default/config-file-function-input-1"\n  - "persistent://public/default/config-file-function-input-2"\noutput: "persistent://public/default/config-file-function-output"\njar: "function.jar"\nparallelism: 1\nresources: \n  cpu: 8\n  ram: 8589934592\nautoAck: true\nuserConfig:\n  foo: "bar"\n'))),(0,r.kt)(i.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tenant": "public",\n  "namespace": "default",\n  "name": "config-file-function",\n  "inputs": [\n    "persistent://public/default/config-file-function-input-1",\n    "persistent://public/default/config-file-function-input-2"\n  ],\n  "output": "persistent://public/default/config-file-function-output",\n  "jar": "function.jar",\n  "parallelism": 1,\n  "resources": {\n    "cpu": 8,\n    "ram": 8589934592\n  },\n  "autoAck": true,\n  "userConfig": {\n    "foo": "bar"\n  }\n}\n')))))}g.isMDXComponent=!0}}]);