---
displayed_sidebar: null
sidebar_class_name: hidden
hide_table_of_contents: true
hide_title: true
pagination_prev: null
pagination_next: null
---

# **Codex R&D Update for Week of Jan 12, 2024**

>The Codex team continues to make progress with various initiatives to wrap up the demo for the Q1/Q2 public testnet release. An internal testnet has been running for the past few weeks and has been used to test the latest version of Codex and can be accessed using the Codex Testnet Starter documentation.
>
>Ongoing and new lines of research and development will soon begin in preparation for the next version of Codex used for the mainnet release.. Here are the updates from different team members and their ongoing work. 

# **Development**

Development is currently broken into three distinct teams:

1. Client, Testing, and Infrastructure
2. Marketplace
3. Research

The different teams have actively moving on various fronts. The following are their team updates to various ongoing Epics.

# **Client**

## **Epic: Nim Improvements**

Completed:

- [Filed issue for adding Atlas / non-Nimble support for packages](https://github.com/nim-lang/langserver/issues/154)
- [Start working on Atlas command changes](https://github.com/nim-lang/atlas/pull/108)


Ongoing:

- [Create a repo as a place to start implementing some core async-threading tools for Chronos like worker pool & disk io on top of the ThreadSignalPtr primitive](https://github.com/elcritch/apatheia)
  - plans to support refc & orc

## **Epic: Wiring the Proving System**

Completed:

- Wrapped [ark-circom](https://github.com/arkworks-rs/circom-compat) in a C FFI via:
  - [nim-circom-compat](https://github.com/codex-storage/circom-compat-ffi) and
  - [circom-compat-ffi](https://github.com/codex-storage/circom-compat-ffi)

Ongoing:

- [Integration of codex-storage-proofs-circuits](https://github.com/codex-storage/codex-storage-proofs-circuits) with a [PR in nim-codex](https://github.com/codex-storage/nim-codex/pull/686)

## **Epic: Improve Client Stability**

Completed:

- [Updated profiler branch for debugging](https://github.com/codex-storage/nim-codex/pull/691)
- [Ported the profiler to Chronos V4](https://github.com/codex-storage/nim-chronos/pull/7)
- [Wrote separate test runner for two client test to try to figure out the origin of a file size bug which magically disappeared](https://github.com/gmega/alternate-test-runner/)

Ongoing:

- [Finish work to take down draft flag from PR Expiry per dataset](https://github.com/codex-storage/nim-codex/pull/678)
- [Write tests for PR Safe block deletion (with ref count)](https://github.com/codex-storage/nim-codex/pull/631)
- [Look into the CI/docker packaging/local build tooling for Waku and Nimbus as part of build improvements PR](https://github.com/codex-storage/nim-codex/pull/680)
- [Chronos V4 branch](https://github.com/codex-storage/nim-codex/pull/673)
- Pinned versions for Chronos and json-rpc

# **Marketplace** 

## **Epic: End-to-end Testing**

Completed:

- [Rebased multinode integration test refactor which had two failing tests due to the erasure coding changes](https://github.com/codex-storage/nim-codex/pull/662)
- Rebased Marketplace integration test suite
- Added support for Result types using formatIt for logging proxy
- [Finished the verifier contract](https://github.com/codex-storage/codex-contracts-eth/pull/79)
- [Deployed a dummy verifier on local networks for testing](https://github.com/codex-storage/codex-contracts-eth/pull/82)
- Finished updates to nim-ethers, all tests passing, including in Nim v2
- Fixed an issue in the nim-ethers json-rpc update
  - Derived Signers could not access the derived getAddress and sendTransaction when their async raises were updated with SignerError

Ongoing:

- Continue work on updating nim-ethers to support json-rpc breaking changes
- Continue work on supporting json-rpc breaking changes and pulling out utils/json to its own lib
- [Integrate contract changes into nim-codex](https://github.com/codex-storage/nim-codex/pull/683)
- Look into removing wait For in integration tests
- Review and clean up nim-ethers changes
  - Try to figure out a cleaner way to handle exceptions instead of catching all CatchableErrors
- Start tweaking the nim-json api to normalize both serialize and deserialize pragmas, with modes: OptOut, OptIn, and Strict
- WIP on adding PATCH call for Availabilities

# **Research**

>2024 R&D Goals
>1. Proving system and aggregation improvements (folding or lookups)
>2. Aggregator/validator design
>3. DHT improvements
>4. Tokenomics and incentive design
>5. Bandwidth incentives
>6. Dynamic data (appendable data)
   
Completed:

- Frobenius endomorphism & pairing implementation
- Review the Solidity Groth16 verifier

Ongoing:

- DAS simulator improvements to cover more diffusion models
- Start DAS sample query mechanism design
- Proof recursion ideation

***

# **Codex R&D Update for Week of December 11, 2023**

The Codex dev team is moving forward rapidly. The organisation’s development efforts mainly focus on launching the beta testnet by the end of the year. Following are some recent research and development highlights. 

# **Development** 

Development is currently broken into three distinct sub-teams: 

1. Client, Testing, and Infrastructure
2. Marketplace 
3. Research 

Below are summaries of each sub-team.

# **Client**

For the client, the team is focused on these primary tasks: block merkelization, Poseidon2 Nim-poseidon2 implementation, and wiring the proving system. 

The client is the software that runs on the user’s local machine. It has all the components to handle the endpoints integration, data, block management, erasure coding, and interactions with the marketplace. 

See currently exposed endpoints for the Codex client (conform to OpenAPI specification) at: <https://api.codex.storage>

Active work is ongoing to integrate the above Codex client endpoints to be accessible via the Codex frontend written in React here: <https://github.com/codex-storage/codex-frontend>

## **Epic: Block Merkelization** 

For block merkelization, the team is focused on reducing metadata overhead. They are optimising the structure for handling and indexing block data. This effort requires changes in block Merkelization. These are the most recent efforts, which can be publicly viewed on GitHub:   

- Merkelization concrete PR (merged)
- <https://github.com/codex-storage/nim-codex/pull/566>
- Working on nim-datastore to support atomic updates (in review)
- <https://github.com/codex-storage/nim-datastore/pull/58>
- Working on safe block deletion - using ref-counting
- Continuing work for #566 to integrate with Poseidon2 and the proving system

## **Epic: nim-poseidon2**

Poseidon2 is a faster version of the original Poseidon hash function used in zero-knowledge systems (zk). Nim-Poseidon2 is the Nim implementation the Codex team is developing to work efficiently and effectively with the Codex client. 

- Merged outstanding PRs
- <https://github.com/codex-storage/nim-poseidon2/pull/7>
- <https://github.com/codex-storage/nim-poseidon2/pull/8>
- <https://github.com/codex-storage/nim-poseidon2/pull/9>
- Added keyed compress
- <https://github.com/codex-storage/nim-poseidon2/pull/10>
- Updated Merkle root with extra bits to mitigate possible attacks
- <https://github.com/codex-storage/nim-poseidon2/pull/11>
- Fixed compilation problem with Constantine and secp256k1
- <https://github.com/codex-storage/nim-codex/pull/625>

## **Epic: Wiring the Proving System**

The proving system comprises a SNARK circuit that generates the proof. A Storage Provider must also submit the marketplace contract to prove it faithfully stores the associated slot data. Additional components, such as the trusted setup ceremony, hash functions, and the multiple manifests generated for different purposes, are included in the proving system. The team is working on ensuring the proving system is built out and functions to successfully remote audit the slot data by validators. These stories represent the most recent efforts: 

- Nim reference implementation of the proof input generation (WIP)
- <https://github.com/codex-storage/codex-storage-proofs-circuits/tree/master/reference/nim/proof_input>
- Ongoing implementation of Groth16 (WIP)
- <https://github.com/codex-storage/nim-groth16>

# **Testing and Infrastructure**

The testing and infrastructure group is preparing to deploy tens or hundreds of nodes and efficiently monitor the activity. This is crucial for a successful launch of the testnet. The following are the epics and stories of development for this process. The main areas of concern are ensuring the testnet is set up and configured properly. It will also include ensuring the client maintains a suitable level of stability. 

## **Epic: 2023 Testnet setup**

- Configure TCP/UDP port forwarding for Testnet deployment
- Configure Pods placement for D/C-Tests runners and tests workload
- Check available options to build a service to get Codex Public IP for announcement
- Deploy Codex Bootstrap nodes for Testnet
- Deploy Geth Bootstrap nodes for Testnet

## **Epic: Improve Client Stability**

- Ongoing debugging of performance and stability issues in the testing environment
- Tooling developed 
- Elastic search log retrieval <https://github.com/codex-storage/logtools>
- <https://vimeo.com/884370956/e8a32a58c8?share=copy>
- DHT fixes related to performance and stability 
- Fix: queue messages when there is no encryption key
- Fix: arrive at working keys in case of simultaneous cross-connect
- Fix timeout and delete

# **Marketplace**

The marketplace is a smart contract deployed on a blockchain. This smart contract defines all the logic required for users to ask for storage, store collaterals, assign storage nodes to user datasets, settle payments, deal with storage failures, storage provider proof issuance, and all the contract interactions.

## **Epic: End-to-end Testing**

- Working on integration testing cleanup (WIP)
- <https://github.com/codex-storage/nim-codex/pull/607>
- Debugging various issues for end-to-end testing

# **Research** 

Current research is mostly halted due to focus on implementing past research for the imminent launch of the testnet. Ongoing efforts include: 

**Near-term:**

- Ongoing “Groth16 prover” research and analysis. 
- Details for the functionality of the current proof system
- Hash and Merkle tree conventions to make them safe
- Continuing research for Codex’s use of erasure coding

**Long-term:**

- Figuring out how to aggregate proofs (proof compression) for proving system
- Determining the correct proof system for Codex

