---
id: tickets
title: Tickets contracts
---

import TOCInline from '@theme/TOCInline';

# Tickets smart contracts

## 1) Monsters

| Chain    | Address                                    |
| -------- | ------------------------------------------ |
| Ethereum | [0x2292Eb9Bd4D1260A063E2D63D02914660009F67C](https://etherscan.io/address/0xdAC17F958D2ee523a2206206994597C13D831ec7) |
| Polygon  | [0x4D0dcd4f71dde1B156C4Bf964E983685a8393d62](https://polygonscan.com/address/0x0000000000c2d145a2526bd8c716263bfebe1a72) |
| Binance  | [0xC4681Aa1F77F25eE430090055782CaBfdDDDaca1](https://bscscan.com/address/0x2170ed0880ac9a755fd29b2688956bd959f933f8) |
| Fantom   | [0xD588036Dc74303849E0e1056c6f98C598dcE32b3](https://ftmscan.com/address/0xa0cc33dd6f4819d473226257792afe230ec3c67f) |

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