import {ethers, upgrades} from "hardhat";

async function main() {
    const Demo = await ethers.getContractFactory("Demo");
    console.log("Deploying Demo...");
    const demo = await upgrades.deployProxy(Demo, [101], {initializer: 'initialize'});
    console.log("Demo deployed to:", demo.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
