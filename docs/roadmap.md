---
title: Development roadmap
sidebar_position: 4
---

Codex is currently in its first proof of concept iteration, codenamed Dagger. Before Katana—the name of the forthcoming MVP main net release, expected by the end of 2023—we aim to deliver two additional PoC clients, Scimitar and Longsword.

- **Dagger:** Codex's first PoC and its current version.

- **Scimitar:** The PoC-2 client will implement fast erasure coding, the marketplace and partial durability guarantees—expected end of Q2 2023.

- **Longsword:** Codex PoC-3 will improve on the SNARK-based proof-of-retrievability mechanism and add bandwidth incentives to the marketplace—expected end of Q3 2023.

- **Katana:** Codex v1 brings payment channels to the network, adds the bandwidth-preserving lazy repair scheme and makes further improvements to durability guarantees.

The Codex team's subgroups are working on the major milestones detailed below to deliver Codex as a truly unstoppable data storage engine for web3.

- **Testing:**

  - Develop and maintain Testnet and Devnet

- **Client:**

  - Launch Scimitar
  - Develop initial data repair and ZK proving scheme
  - Launch Longsword
  - Deploy Codex v1.0

- **Marketplace:**

  - Develop the marketplace for integration in PoC-2.
  - Develop the marketplace bandwidth incentivization structure.

- **Research:**
  - Write the initial ZK proving scheme
  - Conduct data availability sampling research with the Ethereum Foundation

<br/>

### Roadmap rationale

We believe the above roadmap to be the most logical approach to building a data storage engine with stronger durability guarantees and resistance to censorship than currently offered by Codex's centralized or decentralized counterparts while remaining resistant to censorship.

First, we must establish a mechanism through which users can initiate a contract with a storage provider to host their data. Then, we can add the data redundancy required for retrievability. Next, the system needs a way to prove the hosts still have data available. Finally, repairs must be incentivized. Naturally, each layer of sophistication requires testing for economic and technical feasibility.

[Contribute to Codex](https://github.com/codex-storage)
