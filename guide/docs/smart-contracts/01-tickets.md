---
id: tickets
title: Tickets contracts
---

import TOCInline from '@theme/TOCInline';

# Tickets smart contracts

## 1) Monsters

| Chain    | Address                                    |
| -------- | ------------------------------------------ |
| Ethereum | [0xB03eA7E56a60679Db61BC0775E42E344968e7CbB](https://etherscan.io/address/0xB03eA7E56a60679Db61BC0775E42E344968e7CbB) |
| Polygon  | [0xb2e7c4D821312fcB896eB0451F300364a9Ca93F0](https://polygonscan.com/address/0xb2e7c4D821312fcB896eB0451F300364a9Ca93F0) |
| Binance  | [0xCe811d6BE095f2aaFD06D0813420D825C818db56](https://bscscan.com/address/0xCe811d6BE095f2aaFD06D0813420D825C818db56) |
| Fantom   | [0xc8314921661533241FD7448D805957ecda45EFB4](https://ftmscan.com/address/0xc8314921661533241FD7448D805957ecda45EFB4) |

## Functions

<!-- Only show h3 headings -->
<TOCInline
  toc={toc.filter((node) => node.level === 3)}
  minHeadingLevel={3}
  maxHeadingLevel={3}
/>

### `_requestIdToRandomStatus`
<div class="inherited-function">Airnode QRNG Protocol by API3</div>

Returns the cap [`conditionId`](../getting-started/05-check-your-caps-balance.md#using-block-explorer) from random RequestNumbers.

:::info
You can find the hex for input in the logs under RequestNumbers output after a successful call of the [`requestNft`](../getting-started/04-get-caps-vending-machines.md#using-block-explorer) function.
:::

### `airnode`
<div class="inherited-function">Airnode QRNG Protocol by API3</div>

Oracle address.

> [What is Airnode?↗](https://dapi-docs.api3.org/explore/airnode/what-is-airnode.html)

### `airnodeRrp`
<div class="inherited-function">Airnode QRNG Protocol by API3</div>

Oracle address.

> [How does Airnode work?↗](https://dapi-docs.api3.org/explore/airnode/how-does-airnode-work.html)

### `balanceOf`
<div class="inherited-function">ERC1155 by OpenZeppelin</div>

Returns amount of tickets on the address.

:::info
`id` is always 1
:::

### `balanceOfBatch`
<div class="inherited-function">ERC1155 by OpenZeppelin</div>

Returns the total amount of tickets across multiple addresses.

### `endpointIdUint256`
<div class="inherited-function">Airnode QRNG Protocol by API3</div>

Endpoint for random generation.

### `getLatestPrice`
<div class="inherited-function">Price Feeds by Chainlink</div>

Returns the price of the native network currency in USD used to calculate the [ticket purchase price](../collections/01-monsters.md#ticket-price) at the time of the transaction (only for the 1st collection).

### `isApprovedForAll`
<div class="inherited-function">ERC1155 by OpenZeppelin</div>

Check if the address owner is allowed to spend any amount of tickets from their address to the chosen contract address.

:::caution
Do not give this kind of approval to random individuals or phishing sites.
:::

### `maxReward`

Amount of tickets which can be minted for free. Used to [distribute](../collections/01-monsters.md#distribution) 20'000 tickets to promotion multisig controlled budget and 1'000 tickets to creators as their own personal good (only for the 1st collection).

### `maxSupply`
<div class="inherited-function">ERC1155 by OpenZeppelin</div>

The maximum amount of tickets that can be minted (100'000 always).

### `nftContract`

Address that has the right to burn tickets and mint caps.

### `owner`
<div class="inherited-function">Ownable by OpenZeppelin</div>

Address that always controls the right to [**sendReward**], [**setNftCollectionAddress**], [**setRequestParameters**] and [**transferOwnership**].

### `payee` 
<div class="inherited-function">PaymentSplitter by OpenZeppelin</div>

Two addresses (with index 0 and 1) of the founders have the right to withdraw received income from selling 79,000 tickets as their own personal gain (only for the 1st collection).