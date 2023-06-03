---
id: transfer-tickets
title: Transfer tickets
---

# Transfer tickets

## Using app interface

Visit the **"My caps"** page. 

Press on the ticket, and then **"Transfer"**.

![Tickets lookup in my caps page](/img/tickets-lookup-in-my-caps-page.jpg#modal)

Enter the amount and recipient address. Then press **"Transfer"** and confirm action in your wallet.

![How to transfer caps tickets](/img/how-to-transfer-caps-tickets.jpg)

After successfull transfer you will be redirected to "My caps" page.

## Using block explorer

Visit [blockscan.com↗](https://blockscan.com) and enter the [ticket smart contract address](../smart-contracts/01-tickets.md) to search. Select the network where you purchased tickets. Then go to **Contract** > **Write contract** tab. Press **"Connect to Web3"** button/link so you can connect your wallet and perform actions.

Find the ```safeTransferFrom``` function and enter your own ```from``` (address, 0x...) and recipients ```to``` (address, 0x...), also token ``id`` (uint256, number 1) and ```amount``` of tickets (uint256, number). The data (bytes) can contain empty array or simply put "0x" here. Then press **"Write"** and confirm action in your wallet.

![Check tickets balance on BlockScan](/img/transfer-caps-tickets-using-block-explorer.jpg)

Result of transaction will be appeared on block explorer's **Transactions** tab.