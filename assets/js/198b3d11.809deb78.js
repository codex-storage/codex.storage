"use strict";(self.webpackChunkcodex_docusaurus_template=self.webpackChunkcodex_docusaurus_template||[]).push([[501],{84594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={displayed_sidebar:null,sidebar_class_name:"hidden",hide_table_of_contents:!0,hide_title:!0,pagination_prev:null,pagination_next:null},i="**Codex R&D Update for Week of Jan 12, 2024**",l={unversionedId:"news",id:"news",title:"**Codex R&D Update for Week of Jan 12, 2024**",description:"The Codex team continues to make progress with various initiatives to wrap up the demo for the Q1/Q2 public testnet release. An internal testnet has been running for the past few weeks and has been used to test the latest version of Codex and can be accessed using the Codex Testnet Starter documentation.",source:"@site/root-pages/news.md",sourceDirName:".",slug:"/news",permalink:"/news",draft:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:null,sidebar_class_name:"hidden",hide_table_of_contents:!0,hide_title:!0,pagination_prev:null,pagination_next:null}},s={},p=[{value:"<strong>Epic: Nim Improvements</strong>",id:"epic-nim-improvements",level:2},{value:"<strong>Epic: Wiring the Proving System</strong>",id:"epic-wiring-the-proving-system",level:2},{value:"<strong>Epic: Improve Client Stability</strong>",id:"epic-improve-client-stability",level:2},{value:"<strong>Epic: End-to-end Testing</strong>",id:"epic-end-to-end-testing",level:2},{value:"<strong>Epic: Block Merkelization</strong>",id:"epic-block-merkelization",level:2},{value:"<strong>Epic: nim-poseidon2</strong>",id:"epic-nim-poseidon2",level:2},{value:"<strong>Epic: Wiring the Proving System</strong>",id:"epic-wiring-the-proving-system-1",level:2},{value:"<strong>Epic: 2023 Testnet setup</strong>",id:"epic-2023-testnet-setup",level:2},{value:"<strong>Epic: Improve Client Stability</strong>",id:"epic-improve-client-stability-1",level:2},{value:"<strong>Epic: End-to-end Testing</strong>",id:"epic-end-to-end-testing-1",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"codex-rd-update-for-week-of-jan-12-2024"},(0,a.kt)("strong",{parentName:"h1"},"Codex R&D Update for Week of Jan 12, 2024")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The Codex team continues to make progress with various initiatives to wrap up the demo for the Q1/Q2 public testnet release. An internal testnet has been running for the past few weeks and has been used to test the latest version of Codex and can be accessed using the Codex Testnet Starter documentation."),(0,a.kt)("p",{parentName:"blockquote"},"Ongoing and new lines of research and development will soon begin in preparation for the next version of Codex used for the mainnet release.. Here are the updates from different team members and their ongoing work. ")),(0,a.kt)("h1",{id:"development"},(0,a.kt)("strong",{parentName:"h1"},"Development")),(0,a.kt)("p",null,"Development is currently broken into three distinct teams:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Client, Testing, and Infrastructure"),(0,a.kt)("li",{parentName:"ol"},"Marketplace"),(0,a.kt)("li",{parentName:"ol"},"Research")),(0,a.kt)("p",null,"The different teams have actively moving on various fronts. The following are their team updates to various ongoing Epics."),(0,a.kt)("h1",{id:"client"},(0,a.kt)("strong",{parentName:"h1"},"Client")),(0,a.kt)("h2",{id:"epic-nim-improvements"},(0,a.kt)("strong",{parentName:"h2"},"Epic: Nim Improvements")),(0,a.kt)("p",null,"Completed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nim-lang/langserver/issues/154"},"Filed issue for adding Atlas / non-Nimble support for packages")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nim-lang/atlas/pull/108"},"Start working on Atlas command changes"))),(0,a.kt)("p",null,"Ongoing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/elcritch/apatheia"},"Create a repo as a place to start implementing some core async-threading tools for Chronos like worker pool & disk io on top of the ThreadSignalPtr primitive"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"plans to support refc & orc")))),(0,a.kt)("h2",{id:"epic-wiring-the-proving-system"},(0,a.kt)("strong",{parentName:"h2"},"Epic: Wiring the Proving System")),(0,a.kt)("p",null,"Completed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Wrapped ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/arkworks-rs/circom-compat"},"ark-circom")," in a C FFI via:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codex-storage/circom-compat-ffi"},"nim-circom-compat")," and"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codex-storage/circom-compat-ffi"},"circom-compat-ffi"))))),(0,a.kt)("p",null,"Ongoing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codex-storage/codex-storage-proofs-circuits"},"Integration of codex-storage-proofs-circuits")," with a ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/codex-storage/nim-codex/pull/686"},"PR in nim-codex"))),(0,a.kt)("h2",{id:"epic-improve-client-stability"},(0,a.kt)("strong",{parentName:"h2"},"Epic: Improve Client Stability")),(0,a.kt)("p",null,"Completed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codex-storage/nim-codex/pull/691"},"Updated profiler branch for debugging")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codex-storage/nim-chronos/pull/7"},"Ported the profiler to Chronos V4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gmega/alternate-test-runner/"},"Wrote separate test runner for two client test to try to figure out the origin of a file size bug which magically disappeared"))),(0,a.kt)("p",null,"Ongoing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codex-storage/nim-codex/pull/678"},"Finish work to take down draft flag from PR Expiry per dataset")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codex-storage/nim-codex/pull/631"},"Write tests for PR Safe block deletion (with ref count)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codex-storage/nim-codex/pull/680"},"Look into the CI/docker packaging/local build tooling for Waku and Nimbus as part of build improvements PR")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codex-storage/nim-codex/pull/673"},"Chronos V4 branch")),(0,a.kt)("li",{parentName:"ul"},"Pinned versions for Chronos and json-rpc")),(0,a.kt)("h1",{id:"marketplace"},(0,a.kt)("strong",{parentName:"h1"},"Marketplace")),(0,a.kt)("h2",{id:"epic-end-to-end-testing"},(0,a.kt)("strong",{parentName:"h2"},"Epic: End-to-end Testing")),(0,a.kt)("p",null,"Completed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codex-storage/nim-codex/pull/662"},"Rebased multinode integration test refactor which had two failing tests due to the erasure coding changes")),(0,a.kt)("li",{parentName:"ul"},"Rebased Marketplace integration test suite"),(0,a.kt)("li",{parentName:"ul"},"Added support for Result types using formatIt for logging proxy"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codex-storage/codex-contracts-eth/pull/79"},"Finished the verifier contract")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codex-storage/codex-contracts-eth/pull/82"},"Deployed a dummy verifier on local networks for testing")),(0,a.kt)("li",{parentName:"ul"},"Finished updates to nim-ethers, all tests passing, including in Nim v2"),(0,a.kt)("li",{parentName:"ul"},"Fixed an issue in the nim-ethers json-rpc update",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Derived Signers could not access the derived getAddress and sendTransaction when their async raises were updated with SignerError")))),(0,a.kt)("p",null,"Ongoing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Continue work on updating nim-ethers to support json-rpc breaking changes"),(0,a.kt)("li",{parentName:"ul"},"Continue work on supporting json-rpc breaking changes and pulling out utils/json to its own lib"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codex-storage/nim-codex/pull/683"},"Integrate contract changes into nim-codex")),(0,a.kt)("li",{parentName:"ul"},"Look into removing wait For in integration tests"),(0,a.kt)("li",{parentName:"ul"},"Review and clean up nim-ethers changes",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Try to figure out a cleaner way to handle exceptions instead of catching all CatchableErrors"))),(0,a.kt)("li",{parentName:"ul"},"Start tweaking the nim-json api to normalize both serialize and deserialize pragmas, with modes: OptOut, OptIn, and Strict"),(0,a.kt)("li",{parentName:"ul"},"WIP on adding PATCH call for Availabilities")),(0,a.kt)("h1",{id:"research"},(0,a.kt)("strong",{parentName:"h1"},"Research")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"2024 R&D Goals"),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"Proving system and aggregation improvements (folding or lookups)"),(0,a.kt)("li",{parentName:"ol"},"Aggregator/validator design"),(0,a.kt)("li",{parentName:"ol"},"DHT improvements"),(0,a.kt)("li",{parentName:"ol"},"Tokenomics and incentive design"),(0,a.kt)("li",{parentName:"ol"},"Bandwidth incentives"),(0,a.kt)("li",{parentName:"ol"},"Dynamic data (appendable data)"))),(0,a.kt)("p",null,"Completed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Frobenius endomorphism & pairing implementation"),(0,a.kt)("li",{parentName:"ul"},"Review the Solidity Groth16 verifier")),(0,a.kt)("p",null,"Ongoing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DAS simulator improvements to cover more diffusion models"),(0,a.kt)("li",{parentName:"ul"},"Start DAS sample query mechanism design"),(0,a.kt)("li",{parentName:"ul"},"Proof recursion ideation")),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"codex-rd-update-for-week-of-december-11-2023"},(0,a.kt)("strong",{parentName:"h1"},"Codex R&D Update for Week of December 11, 2023")),(0,a.kt)("p",null,"The Codex dev team is moving forward rapidly. The organisation\u2019s development efforts mainly focus on launching the beta testnet by the end of the year. Following are some recent research and development highlights. "),(0,a.kt)("h1",{id:"development-1"},(0,a.kt)("strong",{parentName:"h1"},"Development")),(0,a.kt)("p",null,"Development is currently broken into three distinct sub-teams: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Client, Testing, and Infrastructure"),(0,a.kt)("li",{parentName:"ol"},"Marketplace "),(0,a.kt)("li",{parentName:"ol"},"Research ")),(0,a.kt)("p",null,"Below are summaries of each sub-team."),(0,a.kt)("h1",{id:"client-1"},(0,a.kt)("strong",{parentName:"h1"},"Client")),(0,a.kt)("p",null,"For the client, the team is focused on these primary tasks: block merkelization, Poseidon2 Nim-poseidon2 implementation, and wiring the proving system. "),(0,a.kt)("p",null,"The client is the software that runs on the user\u2019s local machine. It has all the components to handle the endpoints integration, data, block management, erasure coding, and interactions with the marketplace. "),(0,a.kt)("p",null,"See currently exposed endpoints for the Codex client (conform to OpenAPI specification) at: ",(0,a.kt)("a",{parentName:"p",href:"https://api.codex.storage"},"https://api.codex.storage")),(0,a.kt)("p",null,"Active work is ongoing to integrate the above Codex client endpoints to be accessible via the Codex frontend written in React here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/codex-storage/codex-frontend"},"https://github.com/codex-storage/codex-frontend")),(0,a.kt)("h2",{id:"epic-block-merkelization"},(0,a.kt)("strong",{parentName:"h2"},"Epic: Block Merkelization")),(0,a.kt)("p",null,"For block merkelization, the team is focused on reducing metadata overhead. They are optimising the structure for handling and indexing block data. This effort requires changes in block Merkelization. These are the most recent efforts, which can be publicly viewed on GitHub:   "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Merkelization concrete PR (merged)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codex-storage/nim-codex/pull/566"},"https://github.com/codex-storage/nim-codex/pull/566")),(0,a.kt)("li",{parentName:"ul"},"Working on nim-datastore to support atomic updates (in review)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codex-storage/nim-datastore/pull/58"},"https://github.com/codex-storage/nim-datastore/pull/58")),(0,a.kt)("li",{parentName:"ul"},"Working on safe block deletion - using ref-counting"),(0,a.kt)("li",{parentName:"ul"},"Continuing work for #566 to integrate with Poseidon2 and the proving system")),(0,a.kt)("h2",{id:"epic-nim-poseidon2"},(0,a.kt)("strong",{parentName:"h2"},"Epic: nim-poseidon2")),(0,a.kt)("p",null,"Poseidon2 is a faster version of the original Poseidon hash function used in zero-knowledge systems (zk). Nim-Poseidon2 is the Nim implementation the Codex team is developing to work efficiently and effectively with the Codex client. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Merged outstanding PRs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codex-storage/nim-poseidon2/pull/7"},"https://github.com/codex-storage/nim-poseidon2/pull/7")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codex-storage/nim-poseidon2/pull/8"},"https://github.com/codex-storage/nim-poseidon2/pull/8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codex-storage/nim-poseidon2/pull/9"},"https://github.com/codex-storage/nim-poseidon2/pull/9")),(0,a.kt)("li",{parentName:"ul"},"Added keyed compress"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codex-storage/nim-poseidon2/pull/10"},"https://github.com/codex-storage/nim-poseidon2/pull/10")),(0,a.kt)("li",{parentName:"ul"},"Updated Merkle root with extra bits to mitigate possible attacks"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codex-storage/nim-poseidon2/pull/11"},"https://github.com/codex-storage/nim-poseidon2/pull/11")),(0,a.kt)("li",{parentName:"ul"},"Fixed compilation problem with Constantine and secp256k1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codex-storage/nim-codex/pull/625"},"https://github.com/codex-storage/nim-codex/pull/625"))),(0,a.kt)("h2",{id:"epic-wiring-the-proving-system-1"},(0,a.kt)("strong",{parentName:"h2"},"Epic: Wiring the Proving System")),(0,a.kt)("p",null,"The proving system comprises a SNARK circuit that generates the proof. A Storage Provider must also submit the marketplace contract to prove it faithfully stores the associated slot data. Additional components, such as the trusted setup ceremony, hash functions, and the multiple manifests generated for different purposes, are included in the proving system. The team is working on ensuring the proving system is built out and functions to successfully remote audit the slot data by validators. These stories represent the most recent efforts: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nim reference implementation of the proof input generation (WIP)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codex-storage/codex-storage-proofs-circuits/tree/master/reference/nim/proof_input"},"https://github.com/codex-storage/codex-storage-proofs-circuits/tree/master/reference/nim/proof_input")),(0,a.kt)("li",{parentName:"ul"},"Ongoing implementation of Groth16 (WIP)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codex-storage/nim-groth16"},"https://github.com/codex-storage/nim-groth16"))),(0,a.kt)("h1",{id:"testing-and-infrastructure"},(0,a.kt)("strong",{parentName:"h1"},"Testing and Infrastructure")),(0,a.kt)("p",null,"The testing and infrastructure group is preparing to deploy tens or hundreds of nodes and efficiently monitor the activity. This is crucial for a successful launch of the testnet. The following are the epics and stories of development for this process. The main areas of concern are ensuring the testnet is set up and configured properly. It will also include ensuring the client maintains a suitable level of stability. "),(0,a.kt)("h2",{id:"epic-2023-testnet-setup"},(0,a.kt)("strong",{parentName:"h2"},"Epic: 2023 Testnet setup")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configure TCP/UDP port forwarding for Testnet deployment"),(0,a.kt)("li",{parentName:"ul"},"Configure Pods placement for D/C-Tests runners and tests workload"),(0,a.kt)("li",{parentName:"ul"},"Check available options to build a service to get Codex Public IP for announcement"),(0,a.kt)("li",{parentName:"ul"},"Deploy Codex Bootstrap nodes for Testnet"),(0,a.kt)("li",{parentName:"ul"},"Deploy Geth Bootstrap nodes for Testnet")),(0,a.kt)("h2",{id:"epic-improve-client-stability-1"},(0,a.kt)("strong",{parentName:"h2"},"Epic: Improve Client Stability")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ongoing debugging of performance and stability issues in the testing environment"),(0,a.kt)("li",{parentName:"ul"},"Tooling developed "),(0,a.kt)("li",{parentName:"ul"},"Elastic search log retrieval ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/codex-storage/logtools"},"https://github.com/codex-storage/logtools")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://vimeo.com/884370956/e8a32a58c8?share=copy"},"https://vimeo.com/884370956/e8a32a58c8?share=copy")),(0,a.kt)("li",{parentName:"ul"},"DHT fixes related to performance and stability "),(0,a.kt)("li",{parentName:"ul"},"Fix: queue messages when there is no encryption key"),(0,a.kt)("li",{parentName:"ul"},"Fix: arrive at working keys in case of simultaneous cross-connect"),(0,a.kt)("li",{parentName:"ul"},"Fix timeout and delete")),(0,a.kt)("h1",{id:"marketplace-1"},(0,a.kt)("strong",{parentName:"h1"},"Marketplace")),(0,a.kt)("p",null,"The marketplace is a smart contract deployed on a blockchain. This smart contract defines all the logic required for users to ask for storage, store collaterals, assign storage nodes to user datasets, settle payments, deal with storage failures, storage provider proof issuance, and all the contract interactions."),(0,a.kt)("h2",{id:"epic-end-to-end-testing-1"},(0,a.kt)("strong",{parentName:"h2"},"Epic: End-to-end Testing")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Working on integration testing cleanup (WIP)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codex-storage/nim-codex/pull/607"},"https://github.com/codex-storage/nim-codex/pull/607")),(0,a.kt)("li",{parentName:"ul"},"Debugging various issues for end-to-end testing")),(0,a.kt)("h1",{id:"research-1"},(0,a.kt)("strong",{parentName:"h1"},"Research")),(0,a.kt)("p",null,"Current research is mostly halted due to focus on implementing past research for the imminent launch of the testnet. Ongoing efforts include: "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Near-term:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ongoing \u201cGroth16 prover\u201d research and analysis. "),(0,a.kt)("li",{parentName:"ul"},"Details for the functionality of the current proof system"),(0,a.kt)("li",{parentName:"ul"},"Hash and Merkle tree conventions to make them safe"),(0,a.kt)("li",{parentName:"ul"},"Continuing research for Codex\u2019s use of erasure coding")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Long-term:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Figuring out how to aggregate proofs (proof compression) for proving system"),(0,a.kt)("li",{parentName:"ul"},"Determining the correct proof system for Codex")))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);