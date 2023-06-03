---
id: transfer-caps
title: Transfer caps
---

# Transfer caps

:::note
Transferring caps to another address does not reduce their [condition](09-how-caps-loose-quality.md).
:::

## Using app interface

Visit the **"My caps"** page. 

Press on the any cap, and then **"Transfer"**.

![How to transfer caps](/img/how-to-transfer-caps.jpg#modal)

You will enter the transfer caps page. Press **"Pick"** to open the picking modal. 

![Pick the caps modal trigger](/img/pick-the-caps-modal-trigger.jpg#modal)

Choose the caps you would like to transfer pressing on them, and close modal by tapping outside.

:::caution
You can transfer up to 20 caps per transaction
:::

![Pick the caps modal](/img/pick-the-caps-modal.jpg#modal)

Enter recipient address. Then press **"Transfer"** and confirm action in your wallet.

![Transfer my caps to another address](/img/transfer-my-caps-to-another-address.jpg)

After successfull transfer you will be redirected to "My caps" page.

## Using block explorer

Visit [blockscan.com↗](https://blockscan.com) and enter the [caps smart contract address](../smart-contracts/02-caps.md) to search. Select the network where you own caps. Then go to **Contract** > **Write contract** tab. Press **"Connect to Web3"** button/link so you can connect your wallet and perform actions.

Find the ```batchTransferFrom``` function and enter your own ```from``` (address, 0x...), ```tokenIds``` array (uint256, numbers which can be found using [```balanceOfWallet```](./05-check-your-caps-balance.md#using-block-explorer) read function) and recipients ```to``` (address, 0x...). Then press **"Write"** and confirm action in your wallet.

![How to transfer my caps using block explorer](/img/how-to-transfer-my-caps-using-blockscan.jpg)

Result of transaction will be appeared on block explorer's **Transactions** tab.