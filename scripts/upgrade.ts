import {ethers, upgrades} from "hardhat";

async function main() {
    const proxyAddress = '0x8b7b9EB688c0aa00D3c53Eb369c88E4386750966';

    const Demo = await ethers.getContractFactory("Demo");
    console.log("Preparing upgrade...");
    // 升级合约
    await upgrades.upgradeProxy(proxyAddress, Demo);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
