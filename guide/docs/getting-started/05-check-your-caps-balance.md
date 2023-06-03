---
id: check-your-caps-balance
title: Check your caps balance
---

# Check your caps balance

## Using app interface

The **"My caps"** page shows your balance of caps. If you have more than one of the same cap with the same condition, they will automatically gather into a stack.

![Balance of the caps](/img/check-my-caps-balance.jpg)

You can also [transfer caps](./06-transfer-caps.md) to any address from here.

## Using block explorer

Visit [blockscan.com↗](https://blockscan.com) and enter the [caps smart contract address](../smart-contracts/02-caps.md) to search. Select the network where you own caps. Then go to **Contract** > **Read contract** tab.

Find the ```balanceOfWallet``` function, enter your ```account``` (address, 0x...). Then press **"Query"**.

You will see the list of owned ```tokenIds```.

![Get tokenIds balance of wallet with caps](/img/get-tokenids-balance-of-wallet-with-caps.jpg)

Now use the ```_tokenIdToConditionId``` function, enter your ```tokenId``` (uint256, number). Then press **"Query"**.

You will obtain the ```conditionId``` of the chosen ```tokenId```.

![Find the conditionId of caps tokenId](/img/find-the-condition-id-of-caps-tokenid.jpg)

Now, using [collections](../collections/collections.md) tables, you can identify the name of the cap and it's condition with this ```conditionId```.