---
title: Description and architecture
sidebar_position: 2
---

Codex is building a data storage engine that is fully decentralized, yielding the advantages of corruption and censorship resistance. The solution protects network participants by giving hosts plausible deniability over the data they store and clients provable durability guarantees—up to 99.999999999%—while remaining cost-efficient and highly performant.

Four key features combined differentiate Codex from existing projects in the decentralized storage niche:

- **Erasure coding:** For efficient data durability guarantees and opportunities for nodes to self-repair

- **ZK-based proof-of-retrievability:** For lightweight data availability assurances

- **Lazy repair mechanism:** For more efficient data reconstruction

- **Incentivization:** To encourage widespread network participation and the provision of finite network resources—namely bandwidth and storage space.

<br />

### Incentivized decentralization

Incentivization mechanisms are among the key pieces missing from traditional file-sharing networks. Codex believes that a robust marketplace-based incentive structure will ensure wide participation across the node types detailed above.

The development of an adequate incentive structure is driven by the following goals:

- Supply and demand to encourage optimum network resource usage.

- Increase participation by enabling nodes to utilize their competitive advantages to maximize profits.

- Prevent spam and discourage malicious participation.

Although still to be finalized, the Codex incentive structure will revolve around participants staking collateral to be rewarded for acting in support of the network and penalized for failing to perform the duties described above. Generally, the provision of bandwidth and storage resources must be incentivized as it is difficult to imagine altruistic participation beyond that of the most ideologically driven participants.

<br />

### Network architecture

Codex is made up of multiple node types, each taking a different role in the network's operation. Similarly, the hardware demands for each node type vary, enabling those operating resource-restricted devices to participate.

**Storage nodes:** Long-term reliable storage providers, storage nodes stake collateral proportional to the amount of data they're willing to store. Failure to provide periodic proof of data possession results in slashing penalties.

**Validator nodes:** Validator nodes collect, validate and submit proofs to an adjudicator contract. Staked collateral incentivizes validator nodes to only submit valid proofs.

**Ephemeral nodes:** Anyone can contribute to Codex as an ephemeral—meaning short lasting—node by caching and serving popular content without requiring reliable or abundant storage. These ephemeral nodes act to scale the network during periods of high demand.

**Regular nodes:** Also known as client nodes, regular nodes request other nodes to store, find and retrieve data. Most of the Codex network will be regular nodes and these participants can double as ephemeral nodes to offset the cost of the network resources they consume.

When a node commits to a storage contract and a user uploads data, the network will proactively verify that the storing node is online and that the data is retrievable. Storage nodes broadcast proofs of data possession over random intervals.

If the storage node sends invalid proofs or fails to provide them in time, the network will repost the contract for any other storage node to accept. When the contract is reposted, some of the faulty node's collateral pays for the new storage node's bandwidth fees. Erasure coding complements active verification by allowing the reconstruction of the full set from a subset of the data.

![architect](/subpages/architect.png)
