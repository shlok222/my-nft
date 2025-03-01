async function main() {
  const [deployer] = await ethers.getSigners();

  // Grab the contract factory
  const MyNFT = await ethers.getContractFactory("MyNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy(deployer.address); // Pass the deployer's address as the initial owner
  
  // Wait for the contract to be deployed
  await myNFT.waitForDeployment(); // Changed from deployed() to waitForDeployment()

  // Get the contract address after deployment
  console.log("Contract deployed to address:", await myNFT.getAddress()); // Changed from myNFT.address to getAddress()
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
