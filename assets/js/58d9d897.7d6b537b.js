"use strict";(self.webpackChunklogos_documentation_website_template=self.webpackChunklogos_documentation_website_template||[]).push([[683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(d,".").concat(h)]||u[h]||c[h]||o;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2,description:"Codex is building a Decentralized Durability Storage Engine"},r="How to use Codex",l={unversionedId:"how",id:"how",title:"How to use Codex",description:"Codex is building a Decentralized Durability Storage Engine",source:"@site/docs/how.md",sourceDirName:".",slug:"/how",permalink:"/how",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Codex is building a Decentralized Durability Storage Engine"},sidebar:"defaultSidebar",previous:{title:"Home",permalink:"/"},next:{title:"Blog",permalink:"/blog"}},d={},s=[{value:"Build and Run",id:"build-and-run",level:2},{value:"CLI Options",id:"cli-options",level:3},{value:"Example: running two Codex clients",id:"example-running-two-codex-clients",level:3},{value:"Interacting with the client",id:"interacting-with-the-client",level:2},{value:"<code>/api/codex/v1/connect/{peerId}</code>",id:"apicodexv1connectpeerid",level:3},{value:"<code>/api/codex/v1/download/{id}</code>",id:"apicodexv1downloadid",level:3},{value:"<code>/api/codex/v1/upload</code>",id:"apicodexv1upload",level:3},{value:"<code>/api/codex/v1/info</code>",id:"apicodexv1info",level:3}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-use-codex"},"How to use Codex"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The Codex project aims to create a decentralized durability engine that allows persisting data in p2p networks. In other words, it allows storing files and data with predictable durability guarantees for later retrieval.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"WARNING: This project is under active development and is considered pre-alpha.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://opensource.org/licenses/Apache-2.0"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/License-Apache%202.0-blue.svg",alt:"License: Apache"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://opensource.org/licenses/MIT"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/License-MIT-blue.svg",alt:"License: MIT"})),"\n",(0,a.kt)("a",{parentName:"p",href:"#stability"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/stability-experimental-orange.svg",alt:"Stability: experimental"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/status-im/nim-codex/actions?query=workflow%3ACI+branch%3Amain"},(0,a.kt)("img",{parentName:"a",src:"https://github.com/status-im/nim-codex/actions/workflows/ci.yml/badge.svg?branch=main",alt:"CI"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://codecov.io/gh/status-im/nim-codex"},(0,a.kt)("img",{parentName:"a",src:"https://codecov.io/gh/status-im/nim-codex/branch/main/graph/badge.svg?token=XFmCyPSNzW",alt:"Codecov"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/CaJTh24ddQ"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/895609329053474826",alt:"Discord"}))),(0,a.kt)("h2",{id:"build-and-run"},"Build and Run"),(0,a.kt)("p",null,"For detailed instructions on preparing to build nim-codex see ",(0,a.kt)("a",{parentName:"p",href:"BUILDING.md"},(0,a.kt)("em",{parentName:"a"},"Building Codex")),"."),(0,a.kt)("p",null,"To build the project, clone it and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make update && make exec\n")),(0,a.kt)("p",null,"The executable will be placed under the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," directory under the project root."),(0,a.kt)("p",null,"Run the client with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"build/codex\n")),(0,a.kt)("h3",{id:"cli-options"},"CLI Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"build/codex --help\nUsage:\n\ncodex [OPTIONS]... command\n\nThe following options are available:\n\n     --log-level            Sets the log level [=LogLevel.INFO].\n     --metrics              Enable the metrics server [=false].\n     --metrics-address      Listening address of the metrics server [=127.0.0.1].\n     --metrics-port         Listening HTTP port of the metrics server [=8008].\n -d, --data-dir             The directory where codex will store configuration and data..\n -l, --listen-port          Specifies one or more listening ports for the node to listen on. [=0].\n -i, --listen-ip            The public IP [=0.0.0.0].\n     --udp-port             Specify the discovery (UDP) port [=8090].\n     --net-privkey          Source of network (secp256k1) private key file (random|<path>) [=random].\n -b, --bootstrap-node       Specifies one or more bootstrap nodes to use when connecting to the network..\n     --max-peers            The maximum number of peers to connect to [=160].\n     --agent-string         Node agent string which is used as identifier in network [=Codex].\n -p, --api-port             The REST Api port [=8080].\n -c, --cache-size           The size in MiB of the block cache, 0 disables the cache [=100].\n     --persistence          Enables persistence mechanism, requires an Ethereum node [=false].\n     --eth-provider         The URL of the JSON-RPC API of the Ethereum node [=ws://localhost:8545].\n     --eth-account          The Ethereum account that is used for storage contracts [=EthAddress.none].\n     --eth-deployment       The json file describing the contract deployment [=string.none].\n\nAvailable sub-commands:\n\ncodex initNode\n")),(0,a.kt)("h3",{id:"example-running-two-codex-clients"},"Example: running two Codex clients"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'build/codex --data-dir="$(pwd)/Codex1" -i=127.0.0.1\n')),(0,a.kt)("p",null,"This will start codex with a data directory pointing to ",(0,a.kt)("inlineCode",{parentName:"p"},"Codex1")," under the current execution directory and announce itself on the DHT under ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"."),(0,a.kt)("p",null,"To run a second client that automatically discovers nodes on the network, we need to get the Signed Peer Record (SPR) of first client, Client1. We can do this by querying the ",(0,a.kt)("inlineCode",{parentName:"p"},"/info")," endpoint of the node's REST API."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"curl http://127.0.0.1:8080/api/codex/v1/info")),(0,a.kt)("p",null,"This should output information about Client1, including its PeerID, TCP/UDP addresses, data directory, and SPR:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "16Uiu2HAm92LGXYTuhtLaZzkFnsCx6FFJsNmswK6o9oPXFbSKHQEa",\n  "addrs": [\n    "/ip4/0.0.0.0/udp/8090",\n    "/ip4/0.0.0.0/tcp/49336"\n  ],\n  "repo": "/repos/status-im/nim-codex/Codex1",\n  "spr": "spr:CiUIAhIhAmqg5fVU2yxPStLdUOWgwrkWZMHW2MHf6i6l8IjA4tssEgIDARpICicAJQgCEiECaqDl9VTbLE9K0t1Q5aDCuRZkwdbYwd_qLqXwiMDi2ywQ5v2VlAYaCwoJBH8AAAGRAh-aGgoKCAR_AAABBts3KkcwRQIhAPOKl38CviplVbMVnA_9q3N1K_nk5oGuNp7DWeOqiJzzAiATQ2acPyQvPxLU9YS-TiVo4RUXndRcwMFMX2Yjhw8k3A"\n}\n')),(0,a.kt)("p",null,"Now, let's start a second client, Client2. Because we're already using the default ports TCP (:8080) and UDP (:8090) for the first client, we have to specify new ports to avoid a collision. Additionally, we can specify the SPR from Client1 as the bootstrap node for discovery purposes, allowing Client2 to determine where content is located in the network."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'build/codex --data-dir="$(pwd)/Codex2" -i=127.0.0.1 --api-port=8081 --udp-port=8091 --bootstrap-node=spr:CiUIAhIhAmqg5fVU2yxPStLdUOWgwrkWZMHW2MHf6i6l8IjA4tssEgIDARpICicAJQgCEiECaqDl9VTbLE9K0t1Q5aDCuRZkwdbYwd_qLqXwiMDi2ywQ5v2VlAYaCwoJBH8AAAGRAh-aGgoKCAR_AAABBts3KkcwRQIhAPOKl38CviplVbMVnA_9q3N1K_nk5oGuNp7DWeOqiJzzAiATQ2acPyQvPxLU9YS-TiVo4RUXndRcwMFMX2Yjhw8k3A\n')),(0,a.kt)("p",null,"There are now two clients running. We could upload a file to Client1 and download that file (given its CID) using Client2, by using the clients' REST API."),(0,a.kt)("h2",{id:"interacting-with-the-client"},"Interacting with the client"),(0,a.kt)("p",null,"The client exposes a REST API that can be used to interact with the clients. These commands could be invoked with any HTTP client, however the following endpoints assume the use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," command."),(0,a.kt)("h3",{id:"apicodexv1connectpeerid"},(0,a.kt)("inlineCode",{parentName:"h3"},"/api/codex/v1/connect/{peerId}")),(0,a.kt)("p",null,"Connect to a peer identified by its peer id. Takes an optional ",(0,a.kt)("inlineCode",{parentName:"p"},"addrs")," parameter with a list of valid ",(0,a.kt)("a",{parentName:"p",href:"https://multiformats.io/multiaddr/"},"multiaddresses"),". If ",(0,a.kt)("inlineCode",{parentName:"p"},"addrs")," is absent, the peer will be discovered over the DHT."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl "127.0.0.1:8080/api/codex/v1/connect/<peer id>?addrs=<multiaddress>"\n')),(0,a.kt)("h3",{id:"apicodexv1downloadid"},(0,a.kt)("inlineCode",{parentName:"h3"},"/api/codex/v1/download/{id}")),(0,a.kt)("p",null,"Download data identified by a ",(0,a.kt)("inlineCode",{parentName:"p"},"Cid"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},' curl -vvv "127.0.0.1:8080/api/codex/v1/download/<Cid of the content>" --output <name of output file>\n')),(0,a.kt)("h3",{id:"apicodexv1upload"},(0,a.kt)("inlineCode",{parentName:"h3"},"/api/codex/v1/upload")),(0,a.kt)("p",null,"Upload a file, upon success returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cid")," of the uploaded file."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -vvv -H "content-type: application/octet-stream" -H Expect: -T "<path to file>" "127.0.0.1:8080/api/codex/v1/upload" -X POST\n')),(0,a.kt)("h3",{id:"apicodexv1info"},(0,a.kt)("inlineCode",{parentName:"h3"},"/api/codex/v1/info")),(0,a.kt)("p",null,"Get useful node info such as its peer id, address and SPR."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -vvv "127.0.0.1:8080/api/codex/v1/info"\n')))}c.isMDXComponent=!0}}]);