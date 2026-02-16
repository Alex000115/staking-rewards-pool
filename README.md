# Staking Rewards Pool

This repository provides a robust and gas-efficient smart contract for incentivizing liquidity or long-term holding. It follows the industry-standard "Synthetix" algorithm for calculating rewards per token, ensuring fair distribution even as the total staked amount fluctuates.

## How it Works


1. **Deposit:** Users stake their `StakingToken` into the pool.
2. **Reward Accumulation:** The contract tracks the `rewardPerToken` based on the time elapsed and the total supply of staked tokens.
3. **Claiming:** Users can call `getReward()` at any time to transfer their accumulated earnings to their wallet.
4. **Withdrawal:** Users can unstake their tokens, which triggers a final reward calculation for their account.

## Features
* **Real-time Reward Calculation:** No need for manual snapshots; rewards are calculated on every interaction.
* **Flexible Reward Duration:** Admins can set specific timeframes for reward distribution.
* **Security:** Integrated with `ReentrancyGuard` and `SafeERC20` to prevent common token-related exploits.

## Tech Stack
* **Solidity:** 0.8.20
* **Library:** OpenZeppelin (SafeERC20, ReentrancyGuard, Ownable)
