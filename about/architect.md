---
title: Description and architecture
sidebar_position: 2
---

Codex is building a durable data storage engine that is fully decentralized, providing corruption and censorship resistance to web3 applications. It innately protects network participants by giving hosts plausible deniability over the data they store, and clients provable durability guarantees—up to 99.999999999%—while remaining storage and bandwidth efficient.

These four key features combine to differentiate Codex from existing projects in the decentralized storage niche:

- **Erasure coding:** Provides efficient data redundancy, which increases data durability guarantees.

- **ZK-based proof-of-retrievability:** For lightweight data durability assurances.

- **Lazy repair mechanism:** For efficient data reconstruction and loss prevention.

- **Incentivization:**  To encourage rational behavior, widespread network participation, and the efficient provision of finite network resources.

<br />

### Incentivized decentralization

Incentivization mechanisms are one of the key pieces missing from traditional file-sharing networks. Codex believes that a robust marketplace-based incentive structure will ensure wide participation across the node types detailed below.

The development of an adequate incentive structure is driven by the following goals: 

- Supply and demand to encourage optimum network resource usage.

- Increase participation by enabling nodes to utilize their competitive advantages to maximize profits.

- Prevent spam and discourage malicious participation. 

Although still to be finalized, the Codex incentive structure will involve a marketplace of participants who want to store data, and those provisioning storage posting collateral, with the latter bidding on open storage contracts. This structure aims to ensure that participants' incentives align, resulting in Codex functioning as intended.

<br />

### Network architecture

Codex is composed of multiple node types, each taking a different role in the network's operation. Similarly, the hardware demands for each node type vary, enabling those operating resource-restricted devices to participate.

**Storage nodes**

As Codex's long-term reliable storage providers, storage nodes stake collateral based on the collateral posted on the request side of contracts, and the number of slots that a contract has. This is tied to the durability demanded by the user. Failure to provide periodic proof of data possession results in slashing penalties.

**Caching nodes**

Anyone can contribute to Codex as an ephemeral node by caching and serving popular content without requiring reliable or abundant storage. These caching nodes act to scale the network during periods of high demand.

**Client nodes**

Client nodes make requests for other nodes to store, find, and retrieve data. Most of the Codex network will be Client nodes, and these participants can double as caching nodes to offset the cost of the network resources they consume. 

When a node commits to a storage contract and a user uploads data, the network will proactively verify that the storage node is online and that the data is retrievable. Storage nodes then broadcast proofs of data possession over random intervals. 

If the storage node sends invalid proofs or fails to provide them in time, the network evicts the storage node from the slot, and the slot will become available for the first node that generates a valid proof for that slot. 

When the contract is reposted, some of the faulty node's collateral pays for the new storage node's bandwidth fees. Erasure coding complements the repair scheme by allowing the reconstruction of the missing chunks from data in other slots within the same storage contract hosted by faultless storage nodes.

<br/>

![architect](/subpages/architect.png)

<br/>

[Read the Codex whitepaper](https://codex.storage/docs/codex-whitepaper.pdf)