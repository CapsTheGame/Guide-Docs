---
id: get-caps-vending-machines
title: Get caps (Vending machines)
---

import TOCInline from '@theme/TOCInline';

# Get caps (Vending machines)

## Using app interface

To burn your [tickets](./01-buy-tickets.md) and receive caps, go to the **"Vending machine"** page and click the **"Push"** button.

![PUSH button to open caps in vending machine](/img/open-caps-push-button-vending-machine.jpg#modal)

Confirm the action in your wallet, wait for the transaction to be confirmed on the loader, and then you will see which cap you received.

![Cap looted from vending machine](/img/looted-cap-vending-machine.jpg#modal)

## Using block explorer

Visit [blockscan.com↗](https://blockscan.com) and enter the [ticket smart contract address](../smart-contracts/01-tickets.md) to search. Select the network where you purchased tickets. Then go to **Contract** > **Write contract** tab. Press **"Connect to Web3"** button/link so you can connect your wallet and perform actions.

Find the ```requestNft``` function. Press **"Write"** and confirm action in your wallet.

![Request caps on BlockScan](/img/request-caps-using-block-explorer.jpg)

Result of transaction will be appeared on your wallet's explorer page, at **ERC-721 Token Txns** tab.

## Drop chance

Is the same for every collection.

| Rarity    | Chance each time |
|-----------|-----------------|
| Common    | 80%             |
| Uncommon  | 16%             |
| Rare      | 2.75%           |
| Epic      | 1%              |
| Legendary | 0.25%           |

## How randomness works

We use [API3 QRNG↗](https://api3.org/QRNG).

## Resolved known issues

<!-- Only show h3 headings -->
<TOCInline
  toc={toc.filter((node) => node.level === 3)}
  minHeadingLevel={3}
  maxHeadingLevel={3}
/>

### I've accidentally refreshed/closed the page before the cap was dropped

That doesn't affect the process. Just check your "My caps" page a few minutes later.