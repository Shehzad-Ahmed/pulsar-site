"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[62243],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=l(n),d=a,m=y["".concat(p,".").concat(d)]||y[d]||u[d]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[y]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47347:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={id:"security-encryption",title:"Pulsar Encryption",sidebar_label:"End-to-End Encryption",original_id:"security-encryption"},o=void 0,s={unversionedId:"security-encryption",id:"version-2.9.x/security-encryption",title:"Pulsar Encryption",description:"Applications can use Pulsar encryption to encrypt messages on the producer side and decrypt messages on the consumer side. You can use the public and private key pair that the application configures to perform encryption. Only the consumers with a valid key can decrypt the encrypted messages.",source:"@site/versioned_docs/version-2.9.x/security-encryption.md",sourceDirName:".",slug:"/security-encryption",permalink:"/docs/2.9.x/security-encryption",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.9.x/security-encryption.md",tags:[],version:"2.9.x",frontMatter:{id:"security-encryption",title:"Pulsar Encryption",sidebar_label:"End-to-End Encryption",original_id:"security-encryption"},sidebar:"version-2.9.x/docsSidebar",previous:{title:"Authorization and ACLs",permalink:"/docs/2.9.x/security-authorization"},next:{title:"Extending",permalink:"/docs/2.9.x/security-extending"}},p={},l=[{value:"Asymmetric and symmetric encryption",id:"asymmetric-and-symmetric-encryption",level:2},{value:"Producer",id:"producer",level:2},{value:"Consumer",id:"consumer",level:2},{value:"Get started",id:"get-started",level:2},{value:"Key rotation",id:"key-rotation",level:2},{value:"Enable encryption at the producer application",id:"enable-encryption-at-the-producer-application",level:2},{value:"Decrypt encrypted messages at the consumer application",id:"decrypt-encrypted-messages-at-the-consumer-application",level:2},{value:"Handle failures",id:"handle-failures",level:2}],c={toc:l};function y(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Applications can use Pulsar encryption to encrypt messages on the producer side and decrypt messages on the consumer side. You can use the public and private key pair that the application configures to perform encryption. Only the consumers with a valid key can decrypt the encrypted messages."),(0,a.kt)("h2",{id:"asymmetric-and-symmetric-encryption"},"Asymmetric and symmetric encryption"),(0,a.kt)("p",null,"Pulsar uses a dynamically generated symmetric AES key to encrypt messages(data). You can use the application-provided ECDSA (Elliptic Curve Digital Signature Algorithm) or RSA (Rivest\u2013Shamir\u2013Adleman) key pair to encrypt the AES key(data key), so you do not have to share the secret with everyone."),(0,a.kt)("p",null,"Key is a public and private key pair used for encryption or decryption. The producer key is the public key of the key pair, and the consumer key is the private key of the key pair."),(0,a.kt)("p",null,"The application configures the producer with the public key. You can use this key to encrypt the AES data key. The encrypted data key is sent as part of message header. Only entities with the private key (in this case the consumer) are able to decrypt the data key which is used to decrypt the message."),(0,a.kt)("p",null,"You can encrypt a message with more than one key. Any one of the keys used for encrypting the message is sufficient to decrypt the message."),(0,a.kt)("p",null,"Pulsar does not store the encryption key anywhere in the Pulsar service. If you lose or delete the private key, your message is irretrievably lost, and is unrecoverable."),(0,a.kt)("h2",{id:"producer"},"Producer"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt text",src:n(74939).Z,title:"Pulsar Encryption Producer",width:"960",height:"540"})),(0,a.kt)("h2",{id:"consumer"},"Consumer"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt text",src:n(18012).Z,title:"Pulsar Encryption Consumer",width:"960",height:"540"})),(0,a.kt)("h2",{id:"get-started"},"Get started"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create your ECDSA or RSA public and private key pair by using the following commands.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"ECDSA\uff08for Java clients only)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\nopenssl ecparam -name secp521r1 -genkey -param_enc explicit -out test_ecdsa_privkey.pem\nopenssl ec -in test_ecdsa_privkey.pem -pubout -outform pem -out test_ecdsa_pubkey.pem\n\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"RSA (for C++, Python and Node.js clients)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\nopenssl genrsa -out test_rsa_privkey.pem 2048\nopenssl rsa -in test_rsa_privkey.pem -pubout -outform pkcs8 -out test_rsa_pubkey.pem\n\n")))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the public and private key to the key management and configure your producers to retrieve public keys and consumers clients to retrieve private keys.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader")," interface, specifically ",(0,a.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader.getPublicKey()")," for producer and ",(0,a.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader.getPrivateKey()")," for consumer, which Pulsar client invokes to load the key.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Add the encryption key name to the producer builder: PulsarClient.newProducer().addEncryptionKey("myapp.key").')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add CryptoKeyReader implementation to producer or consumer builder: PulsarClient.newProducer().cryptoKeyReader(keyReader) / PulsarClient.newConsumer().cryptoKeyReader(keyReader).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Sample producer application:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\nclass RawFileKeyReader implements CryptoKeyReader {\n\n    String publicKeyFile = "";\n    String privateKeyFile = "";\n\n    RawFileKeyReader(String pubKeyFile, String privKeyFile) {\n        publicKeyFile = pubKeyFile;\n        privateKeyFile = privKeyFile;\n    }\n\n    @Override\n    public EncryptionKeyInfo getPublicKey(String keyName, Map<String, String> keyMeta) {\n        EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n        try {\n            keyInfo.setKey(Files.readAllBytes(Paths.get(publicKeyFile)));\n        } catch (IOException e) {\n            System.out.println("ERROR: Failed to read public key from file " + publicKeyFile);\n            e.printStackTrace();\n        }\n        return keyInfo;\n    }\n\n    @Override\n    public EncryptionKeyInfo getPrivateKey(String keyName, Map<String, String> keyMeta) {\n        EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n        try {\n            keyInfo.setKey(Files.readAllBytes(Paths.get(privateKeyFile)));\n        } catch (IOException e) {\n            System.out.println("ERROR: Failed to read private key from file " + privateKeyFile);\n            e.printStackTrace();\n        }\n        return keyInfo;\n    }\n}\n\nPulsarClient pulsarClient = PulsarClient.builder().serviceUrl("pulsar://localhost:6650").build();\n\nProducer producer = pulsarClient.newProducer()\n                .topic("persistent://my-tenant/my-ns/my-topic")\n                .addEncryptionKey("myappkey")\n                .cryptoKeyReader(new RawFileKeyReader("test_ecdsa_pubkey.pem", "test_ecdsa_privkey.pem"))\n                .create();\n\nfor (int i = 0; i < 10; i++) {\n    producer.send("my-message".getBytes());\n}\n\nproducer.close();\npulsarClient.close();\n\n')),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Sample Consumer Application:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\nclass RawFileKeyReader implements CryptoKeyReader {\n\n    String publicKeyFile = "";\n    String privateKeyFile = "";\n\n    RawFileKeyReader(String pubKeyFile, String privKeyFile) {\n        publicKeyFile = pubKeyFile;\n        privateKeyFile = privKeyFile;\n    }\n\n    @Override\n    public EncryptionKeyInfo getPublicKey(String keyName, Map<String, String> keyMeta) {\n        EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n        try {\n            keyInfo.setKey(Files.readAllBytes(Paths.get(publicKeyFile)));\n        } catch (IOException e) {\n            System.out.println("ERROR: Failed to read public key from file " + publicKeyFile);\n            e.printStackTrace();\n        }\n        return keyInfo;\n    }\n\n    @Override\n    public EncryptionKeyInfo getPrivateKey(String keyName, Map<String, String> keyMeta) {\n        EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n        try {\n            keyInfo.setKey(Files.readAllBytes(Paths.get(privateKeyFile)));\n        } catch (IOException e) {\n            System.out.println("ERROR: Failed to read private key from file " + privateKeyFile);\n            e.printStackTrace();\n        }\n        return keyInfo;\n    }\n}\n\nPulsarClient pulsarClient = PulsarClient.builder().serviceUrl("pulsar://localhost:6650").build();\nConsumer consumer = pulsarClient.newConsumer()\n                .topic("persistent://my-tenant/my-ns/my-topic")\n                .subscriptionName("my-subscriber-name")\n                .cryptoKeyReader(new RawFileKeyReader("test_ecdsa_pubkey.pem", "test_ecdsa_privkey.pem"))\n                .subscribe();\nMessage msg = null;\n\nfor (int i = 0; i < 10; i++) {\n    msg = consumer.receive();\n    // do something\n    System.out.println("Received: " + new String(msg.getData()));\n}\n\n// Acknowledge the consumption of all messages at once\nconsumer.acknowledgeCumulative(msg);\nconsumer.close();\npulsarClient.close();\n\n')),(0,a.kt)("h2",{id:"key-rotation"},"Key rotation"),(0,a.kt)("p",null,"Pulsar generates a new AES data key every 4 hours or after publishing a certain number of messages. A producer fetches the asymmetric public key every 4 hours by calling CryptoKeyReader.getPublicKey() to retrieve the latest version."),(0,a.kt)("h2",{id:"enable-encryption-at-the-producer-application"},"Enable encryption at the producer application"),(0,a.kt)("p",null,"If you produce messages that are consumed across application boundaries, you need to ensure that consumers in other applications have access to one of the private keys that can decrypt the messages. You can do this in two ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The consumer application provides you access to their public key, which you add to your producer keys."),(0,a.kt)("li",{parentName:"ol"},"You grant access to one of the private keys from the pairs that producer uses. ")),(0,a.kt)("p",null,"When producers want to encrypt the messages with multiple keys, producers add all such keys to the config. Consumer can decrypt the message as long as the consumer has access to at least one of the keys."),(0,a.kt)("p",null,"If you need to encrypt the messages using 2 keys (",(0,a.kt)("inlineCode",{parentName:"p"},"myapp.messagekey1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"myapp.messagekey2"),"), refer to the following example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient.newProducer().addEncryptionKey("myapp.messagekey1").addEncryptionKey("myapp.messagekey2");\n\n')),(0,a.kt)("h2",{id:"decrypt-encrypted-messages-at-the-consumer-application"},"Decrypt encrypted messages at the consumer application"),(0,a.kt)("p",null,"Consumers require to access one of the private keys to decrypt messages that the producer produces. If you want to receive encrypted messages, create a public or private key and give your public key to the producer application to encrypt messages using your public key."),(0,a.kt)("h2",{id:"handle-failures"},"Handle failures"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Producer/Consumer loses access to the key",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Producer action fails to indicate the cause of the failure. Application has the option to proceed with sending unencrypted messages in such cases. Call ",(0,a.kt)("inlineCode",{parentName:"li"},"PulsarClient.newProducer().cryptoFailureAction(ProducerCryptoFailureAction)")," to control the producer behavior. The default behavior is to fail the request."),(0,a.kt)("li",{parentName:"ul"},"If consumption fails due to decryption failure or missing keys in consumer, the application has the option to consume the encrypted message or discard it. Call ",(0,a.kt)("inlineCode",{parentName:"li"},"PulsarClient.newConsumer().cryptoFailureAction(ConsumerCryptoFailureAction)")," to control the consumer behavior. The default behavior is to fail the request. Application is never able to decrypt the messages if the private key is permanently lost."))),(0,a.kt)("li",{parentName:"ul"},"Batch messaging",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If decryption fails and the message contains batch messages, client is not able to retrieve individual messages in the batch, hence message consumption fails even if cryptoFailureAction() is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"ConsumerCryptoFailureAction.CONSUME"),"."))),(0,a.kt)("li",{parentName:"ul"},"If decryption fails, the message consumption stops and the application notices backlog growth in addition to decryption failure messages in the client log. If the application does not have access to the private key to decrypt the message, the only option is to skip or discard backlogged messages.")))}y.isMDXComponent=!0},18012:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pulsar-encryption-consumer-2831a122b5b79a1619d00af823b2506c.jpg"},74939:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pulsar-encryption-producer-1d7f4562a5c743e0442a0ec472ca8ef6.jpg"}}]);