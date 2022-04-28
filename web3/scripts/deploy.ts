import { ethers } from "hardhat";

async function main() {
  const Casino = await ethers.getContractFactory("Casino");
  const casino = await Casino.deploy(100);

  await casino.deployed();

  console.log("Casino deployed to:", casino.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
