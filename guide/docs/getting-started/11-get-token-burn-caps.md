---
id: get-token-burn-caps
title: Get token (Burn caps)
---

# Get token (Burn caps)

The only way to mint a CAPS token ![CAPS token logo](/img/token-logo.svg#token-logo) is to burn your caps.

The maximum total supply of tokens is fixed at 21,000,000 and will be distributed equally across the 4 networks: Ethereum, Polygon, Fantom, and Binance (with 5,250,000 tokens for each network).

![CAPS token distribution, tokenomics](/img/caps-token-distribution.jpg#presentation)

Each collection's total value is halved, starting from the first collection.

## Using app interface

Visit the **"Burn"** page.

:::warning Attention
First, you will need to activate approval so that the ([token contract](../smart-contracts/04-token.md)) can burn your caps. Check your wallet and confirm the approval.
:::

![CAPS burning waiting for approval message](/img/caps-burn-waiting-for-approval.jpg)

Press **"Pick"** to open the picking modal.

![Burn the caps pick button](/img/burn-the-caps-pick-button.jpg#modal)

Choose the caps you would like to transfer pressing on them, and close modal by tapping outside.

![Pick the caps to burn modal](/img/pick-the-caps-to-burn-modal.jpg#modal)

:::caution
You can burn up to 20 caps per transaction
:::

The number of tokens you'll receive will be automatically calculated. Press **"Burn"** and confirm action in your wallet.

![Calculate burned caps price](/img/calculate-burned-caps-price.jpg)

:::tip
The lower the condition of your cap, the greater amount of tokens you will receive.
:::

## Universal formula

All cap values are fixed, determined, and calculated by a formula:

`(((Max supply / Networks) / (2^Collection number)) / Rarity types) / (Drop chance * (Total caps in collection / Networks)) / 100 * (Condition level * 9.0909))`

Example calculation for Legendary, completely erased cap from 1st collection: 

`(((21000000/4/(2^1))/5)/(0.0025*(400000/4))/100*(11*9.0909)) = 2099.9979`

## Burning table

Look for the exact amount of tokens you can receive by burning your caps.

| Rarity   | Condition (%) | 1st collection | 2nd collection | n collection |
| -------- | ---------     | ----------     | --------     | -------- |
| Legendary | Sealed       | 190.9089       | 95.4544        | 190.9089 / 2^(n-1) |
|          | 90 to 100     | 381.8178       | 190.9089       | 381.8178 / 2^(n-1) |
|          | 80 to 90      | 572.7267       | 286.3633       | 572.7267 / 2^(n-1) |
|          | 70 to 80      | 763.6356       | 381.8178       | 763.6356 / 2^(n-1) |
|          | 60 to 70      | 954.5445       | 477.2722       | 954.5445 / 2^(n-1) |
|          | 50 to 60      | 1145.4534      | 572.7267       | 1145.4534 / 2^(n-1) |
|          | 40 to 50      | 1336.3623      | 668.1811       | 1336.3623 / 2^(n-1) |
|          | 30 to 40      | 1527.2712      | 763.6356       | 1527.2712 / 2^(n-1) |
|          | 20 to 30      | 1718.1801      | 859.0900       | 1718.1801 / 2^(n-1) |
|          | 10 to 20      | 1909.0890      | 954.5445       | 1909.0890 / 2^(n-1) |
|          | 0 to 10       | 2099.9979      | 1049.9989      | 2099.9979 / 2^(n-1) |
| Epic     | Sealed        | 47.7272        | 23.8636        | 47.7272 / 2^(n-1) |
|          | 90 to 100     | 95.4544        | 47.7272        | 95.4544 / 2^(n-1) |
|          | 80 to 90      | 143.1816       | 71.5908        | 143.1816 / 2^(n-1) |
|          | 70 to 80      | 190.9089       | 95.4544        | 190.9089 / 2^(n-1) |
|          | 60 to 70      | 238.6361       | 119.3180       | 238.6361 / 2^(n-1) |
|          | 50 to 60      | 286.3633       | 143.1816       | 286.3633 / 2^(n-1) |
|          | 40 to 50      | 334.0905       | 167.0452       | 334.0905 / 2^(n-1) |
|          | 30 to 40      | 381.8178       | 190.9089       | 381.8178 / 2^(n-1) |
|          | 20 to 30      | 429.5450       | 214.7725       | 429.5450 / 2^(n-1) | 
|          | 10 to 20      | 477.2722       | 238.6361       | 477.2722 / 2^(n-1) |
|          | 0 to 10       | 524.9994       | 262.4997       | 524.9994 / 2^(n-1) |
| Rare     | Sealed       | 17.3553        | 8.6776         | 17.3553 / 2^(n-1) |
|          | 90 to 100    | 34.7107        | 17.3553        | 34.7107 / 2^(n-1) |
|          | 80 to 90     | 52.0660        | 26.0330        | 52.0660 / 2^(n-1) |
|          | 70 to 80     | 69.4214        | 34.7107        | 69.4214 / 2^(n-1) |
|          | 60 to 70     | 86.7767        | 43.3883        | 86.7767 / 2^(n-1) |
|          | 50 to 60     | 104.1321       | 52.0660        | 104.1321 / 2^(n-1) |
|          | 40 to 50     | 121.4874       | 60.7437        | 121.4874 / 2^(n-1) |
|          | 30 to 40     | 138.8428       | 69.4214        | 138.8428 / 2^(n-1) |
|          | 20 to 30     | 156.1981       | 78.0990        | 156.1981 / 2^(n-1) |
|          | 10 to 20     | 173.5535       | 86.7767        | 173.5535 / 2^(n-1) |
|          | 0 to 10      | 190.9089       | 95.4544        | 190.9089 / 2^(n-1) |
| Uncommon | Sealed       | 2.9829         | 1.4914         | 2.9829 / 2^(n-1) |
|          | 90 to 100    | 5.9659         | 2.9829         | 5.9659 / 2^(n-1) |
|          | 80 to 90     | 8.9488         | 4.4744         | 8.9488 / 2^(n-1) |
|          | 70 to 80     | 11.9318        | 5.9659         | 11.9318 / 2^(n-1) |
|          | 60 to 70     | 14.9147        | 7.4573         | 14.9147 / 2^(n-1) |
|          | 50 to 60     | 17.8977        | 8.9488         | 17.8977 / 2^(n-1) |
|          | 40 to 50     | 20.8806        | 10.4403        | 20.8806 / 2^(n-1) |
|          | 30 to 40     | 23.8636        | 11.9318        | 23.8636 / 2^(n-1) |
|          | 20 to 30     | 26.8465        | 13.4232        | 26.8465 / 2^(n-1) |
|          | 10 to 20     | 29.8295        | 14.9147        | 29.8295 / 2^(n-1) |
|          | 0 to 10      | 32.8124        | 16.4062        | 32.8124 / 2^(n-1) |
| Common   | Sealed       | 0.5965         | 0.2982         | 0.5965 / 2^(n-1) |
|          | 90 to 100    | 1.1931         | 0.5965         | 1.1931 / 2^(n-1) |
|          | 80 to 90     | 1.7897         | 0.8948         | 1.7897 / 2^(n-1) |
|          | 70 to 80     | 2.3863         | 1.1931         | 2.3863 / 2^(n-1) |
|          | 60 to 70     | 2.9829         | 1.4914         | 2.9829 / 2^(n-1) |
|          | 50 to 60     | 3.5795         | 1.7897         | 3.5795 / 2^(n-1) |
|          | 40 to 50     | 4.1761         | 2.0880         | 4.1761 / 2^(n-1) |
|          | 30 to 40     | 4.7727         | 2.3863         | 4.7727 / 2^(n-1) |
|          | 20 to 30     | 5.3693         | 2.6846         | 5.3693 / 2^(n-1) |
|          | 10 to 20     | 5.9659         | 2.9829         | 5.9659 / 2^(n-1) |
|          | 0 to 10      | 6.5424         | 3.2812         | 6.5424 / 2^(n-1) |