---
id: check-your-tickets-balance
title: Check your tickets balance
---

# Check your tickets balance

## Using app interface

The **"Vending machine"** page shows your ticket balance.

![Tickets balance on the vending machine screen](/img/tickets-balance-on-vending-machine.jpg#modal)

The **"My caps"** page shows your ticket balance. 

![Balance of the tickets](/img/my-tickets-balance.jpg)

You can also [transfer tickets](./03-transfer-tickets.md) to any address from here.

## Using block explorer 

Visit [blockscan.com↗](https://blockscan.com) and enter the [ticket smart contract address](../smart-contracts/01-tickets.md) to search. Select the network where you purchased tickets. Then go to **Contract** > **Read contract** tab. 

Find the ```balanceOf``` function and enter your ```account``` (address, 0x...) and token ``id`` (uint256, number 1). Then press **"Query"**.

![Check tickets balance on BlockScan](/img/check-tickets-balance-on-block-scan.jpg)