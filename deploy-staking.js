const hre = require("hardhat");

async function main() {
  const STAKING_TOKEN = "0x..."; 
  const REWARDS_TOKEN = "0x...";

  const Staking = await hre.ethers.getContractFactory("StakingRewards");
  const staking = await Staking.deploy(STAKING_TOKEN, REWARDS_TOKEN);

  await staking.waitForDeployment();
  console.log(`Staking Rewards Pool deployed to: ${await staking.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
