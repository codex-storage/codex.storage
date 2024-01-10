(self.webpackChunkcodex_docusaurus_template=self.webpackChunkcodex_docusaurus_template||[]).push([[775],{18055:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var a=o(87462),i=(o(67294),o(3905)),n=o(67124);const r={title:"Frequently asked questions",hide_table_of_contents:!0,sidebar_label:"FAQ"},s="Frequently asked questions",d={unversionedId:"faq",id:"faq",title:"Frequently asked questions",description:"Codex is a state-of-the-art, decentralized storage protocol that provides a solution for highly durable data storage with high decentralization, aiming to resist censorship and prevent single points of failure inherent in centralized systems.",source:"@site/about/faq.mdx",sourceDirName:".",slug:"/faq",permalink:"/about/faq",draft:!1,tags:[],version:"current",frontMatter:{title:"Frequently asked questions",hide_table_of_contents:!0,sidebar_label:"FAQ"},sidebar:"defaultSidebar",previous:{title:"Core contributors",permalink:"/about/team"}},c={},l=[],h={toc:l};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"frequently-asked-questions"},"Frequently asked questions"),(0,i.kt)(n.AccordionItem,{title:"What is Codex?",mdxType:"AccordionItem"},"Codex is a state-of-the-art, decentralized storage protocol that provides a solution for highly durable data storage with high decentralization, aiming to resist censorship and prevent single points of failure inherent in centralized systems."),(0,i.kt)(n.AccordionItem,{title:"How is Codex different from centralized storage solutions (eg. Google Cloud)?",mdxType:"AccordionItem"},"Unlike centralized systems, Codex is designed to offer data durability, resiliency to cloud failures, and censorship resistance, making it vital for use cases like preserving factual history records."),(0,i.kt)(n.AccordionItem,{title:"What kind of durability does Codex promise?",mdxType:"AccordionItem"},"While no system can promise absolute data loss protection, Codex's architecture, economic incentives, and encoding algorithms aim to provide high data durability with the novel implementation of techniques such as Erasure Coding and Lazy Repair."),(0,i.kt)(n.AccordionItem,{title:"What is Data Durability?",mdxType:"AccordionItem"},"Data Durability means how likely it is that data will stay safe over time. For instance, a storage system with durability of eleven nines (99.999999999%) means there's a very tiny chance (0.0000000001%) of losing data. In simple terms, you might lose only one file out of a million over ten million years. Data Durability is crucial because losing even a little data can be a big problem. Codex uses techniques like erasure coding to keep data safe. This method splits data and stores it in different places. So, if a piece is lost or damaged, the other pieces can be used to recreate the original data. This keeps users' data secure and intact."),(0,i.kt)(n.AccordionItem,{title:"What is Erasure Coding and how does it relate to data storage in Codex?",mdxType:"AccordionItem"},'Erasure Coding is a way to protect data by breaking it into parts, adding extra data for safety, and then spreading these parts across various locations or systems. On Codex, this involves splitting data into pieces, known as "shards," along with extra "parity shards" for backup. These parity shards are created using mathematical formulas based on the original data, helping to rebuild the data if some shards go missing or get damaged. This method lets Codex offer consistent and reliable data storage, meaning that as long as a certain number of shards (N out of M) are safe, the entire original data can be perfectly restored, ensuring a high level of data safety.'),(0,i.kt)(n.AccordionItem,{title:"What is Lazy Repair in the context of Codex?",mdxType:"AccordionItem"},"Lazy Repair is a method in distributed storage systems for managing data issues. In Codex, if a piece of data (a shard) is lost or damaged, the system doesn't fix it right away. It waits until there's enough damage to make repair worthwhile. This is efficient because it saves resources by not addressing small problems that don't harm the overall data. The system only repairs when the number of good shards drops too low, balancing resource use with keeping data safe and available."),(0,i.kt)(n.AccordionItem,{title:"Is Codex part of Logos?",mdxType:"AccordionItem"},"Yes, Codex is expected to serve as the storage pillar of Logos, the protocol protecting Logos organizational data, aligning with the broader Logos initiative."),(0,i.kt)(n.AccordionItem,{title:"How does Codex compare to other decentralized storage solutions currently out on the market?",mdxType:"AccordionItem"},"Codex distinguishes itself from other storage solutions in the market through several key features: having an Advanced Marketplace and Data Distribution, and using SNARKS for Data Loss Detection."),(0,i.kt)(n.AccordionItem,{title:"How do the Advanced Marketplace and Data Distribution work?",mdxType:"AccordionItem"},'Codex features an advanced marketplace that promotes high levels of decentralization and efficient data distribution. This structure prevents the concentration of data in a few large nodes, enhancing the efficiency of data repair and retrieval. In contrast, other protocols design their systems to create "supernodes".'),(0,i.kt)(n.AccordionItem,{title:"How does Codex use SNARKS for Data Loss Detection?",mdxType:"AccordionItem"},"Codex incorporates succinct non-interactive arguments of knowledge (SNARKS) for efficient and reliable data loss detection. Storage Providers (SPs) respond to challenges by sending proofs to Proof Aggregators, who verify and post these proofs to the blockchain. If an SP fails to prove possession of data or sends invalid proof, their collateral is slashed, providing an economic incentive to ensure data durability."),(0,i.kt)(n.AccordionItem,{title:"Can Codex be used for cold storage by blockchain networks?",mdxType:"AccordionItem"},"Yes, Codex is discussing with various blockchain projects to preserve their full chain state and history in a way that resists censorship and does not require full history to be stored locally by every node."),(0,i.kt)(n.AccordionItem,{title:"Is Codex currently operational?",mdxType:"AccordionItem"},"Codex is currently undergoing extensive internal testing. The upcoming public testnet is planned for Q1 2024."),(0,i.kt)(n.AccordionItem,{title:"What types of data can be stored on Codex?",mdxType:"AccordionItem"},"Codex can handle various types of data but is particularly suited for mission-critical history and state information for Web3 applications that need to remain unaltered, and accessible."),(0,i.kt)(n.AccordionItem,{title:"Will every node be required to store full data history in Codex?",mdxType:"AccordionItem"},"No, the design allows for storing vast amounts of data without requiring every node to store the full history."),(0,i.kt)(n.AccordionItem,{title:"What are all the different types of nodes in Codex\u2019s network?",mdxType:"AccordionItem"},"Codex consists of a p2p network of Storage Nodes, Aggregator Nodes, Caching Nodes, and Client Nodes."),(0,i.kt)(n.AccordionItem,{title:"What is a Storage Node?",mdxType:"AccordionItem"},"Storage nodes provide long-term reliable storage. For a storage node to operate it needs to stake a collateral proportional to the amount of data it's willing to store. Once the collateral has been staked and the node begins to store data, it needs to periodically provide proof of data possession. If a node fails to provide proof in time, it is penalized with a portion of its stake; if the node fails to provide proof several times in a row, it loses the entirety of the stake."),(0,i.kt)(n.AccordionItem,{title:"What is an Aggregator Node?",mdxType:"AccordionItem"},'Aggregator nodes are in charge of collecting, validating, and submitting proofs to an adjudicator contract which rewards and penalizes storage and other validator nodes. A validator node also needs to stake collateral to be able to participate in the validation process. Note that we don\'t use the term "adjudicator contract" in the literal sense of an Ethereum contract. We use it to indicate anything that executes on a consensus engine.'),(0,i.kt)(n.AccordionItem,{title:"What is a Caching Node?",mdxType:"AccordionItem"},"Bandwidth incentives allow anyone to operate as a caching node, profiting only from caching and serving popular content. We expect this to have the emergent property of an organic CDN, where nodes with spare bandwidth but limited or unreliable storage can collectively scale the network depending on current demands. Any node can become a caching node for any period, even ephemeral nodes."),(0,i.kt)(n.AccordionItem,{title:"What is a Client Node?",mdxType:"AccordionItem"},"Client Nodes engage with other nodes to store, find, and retrieve data from the network. We expect regular nodes to be the most common type of node in the Codex Network. These will consume services offered by other nodes in exchange for payments. A regular node can also be a caching node by storing previously consumed data that other nodes can retrieve from it. This allows nodes to offset some of the cost of participating in the network and it's expected to allow the majority of nodes to participate on an almost free basis after an initial entree fee. Unlike the other types of nodes, we expect the regular nodes to have intermittent up-time as they are running on personal computers and mobile devices."),(0,i.kt)(n.AccordionItem,{title:"Can I build my application on top of Codex?",mdxType:"AccordionItem"},"Not yet. Stay tuned for more updates from the Codex project for when you can utilize your application on top of the Codex network."),(0,i.kt)(n.AccordionItem,{title:"Does Codex have a token?",mdxType:"AccordionItem"},"No Codex token has been issued yet. Please be wary of impersonators claiming the issuance of Codex tokens or any form of Codex airdrop."),(0,i.kt)(n.AccordionItem,{title:"What role will the Codex token have in the network?",mdxType:"AccordionItem"},"The Codex token is a utility token, serving as collateral for Storage Providers and a means of compensation in the storage contracts."),(0,i.kt)(n.AccordionItem,{title:"Can I or would I be able to use my storage to participate in the Codex network?",mdxType:"AccordionItem"},"Yes. The testnet phase is set for Q1 2024, stay tuned."),(0,i.kt)(n.AccordionItem,{title:"Can I use Codex right now?",mdxType:"AccordionItem"},"Not yet. However, you will be able to participate in the testnet phase of Q1 2024. Stay tuned."))}u.isMDXComponent=!0},67124:(e,t,o)=>{"use strict";var a=o(65701);o.o(a,"AccordionItem")&&o.d(t,{AccordionItem:function(){return a.AccordionItem}}),o.o(a,"Box")&&o.d(t,{Box:function(){return a.Box}}),o.o(a,"CallToActionButton")&&o.d(t,{CallToActionButton:function(){return a.CallToActionButton}}),o.o(a,"CallToActionSection")&&o.d(t,{CallToActionSection:function(){return a.CallToActionSection}}),o.o(a,"FeatureList")&&o.d(t,{FeatureList:function(){return a.FeatureList}}),o.o(a,"Grid")&&o.d(t,{Grid:function(){return a.Grid}}),o.o(a,"Hero")&&o.d(t,{Hero:function(){return a.Hero}}),o.o(a,"HeroAction")&&o.d(t,{HeroAction:function(){return a.HeroAction}}),o.o(a,"HeroActions")&&o.d(t,{HeroActions:function(){return a.HeroActions}}),o.o(a,"HeroDescription")&&o.d(t,{HeroDescription:function(){return a.HeroDescription}}),o.o(a,"HeroInfo")&&o.d(t,{HeroInfo:function(){return a.HeroInfo}}),o.o(a,"HeroTitle")&&o.d(t,{HeroTitle:function(){return a.HeroTitle}}),o.o(a,"HeroVideo")&&o.d(t,{HeroVideo:function(){return a.HeroVideo}}),o.o(a,"JobsPerDepartment")&&o.d(t,{JobsPerDepartment:function(){return a.JobsPerDepartment}}),o.o(a,"ProfileCard")&&o.d(t,{ProfileCard:function(){return a.ProfileCard}}),o.o(a,"Roadmap")&&o.d(t,{Roadmap:function(){return a.Roadmap}}),o.o(a,"SocialCard")&&o.d(t,{SocialCard:function(){return a.SocialCard}})},46102:()=>{}}]);