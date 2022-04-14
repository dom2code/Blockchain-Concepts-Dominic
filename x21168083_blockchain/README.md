**BlockchainConcepts_x21168083**

Aim of the project is to issue an Ethereum ERC20 token on an Ethereum testnet to N accounts using a node.js application

Below are the steps to attain the scope of the project.

**#step 1:** Create a Metamask wallet account to manage the ethereum coins. It can be added as plugin in Firefox/Chrome browser. ROPSTEN test network should be selected while creating an account. Give your account address and acoount's private key in "OWNER_ADDRESS" and "SUPER_SECRET_PRIVATE_KEY" field in .env file respectively

**#step 2:** Using the link https://faucet.egorfine.com/ ,  test ethereum coins can be added to the Metamask account by providing the unique metamask account ID.

**#step 3:** Open Remix IDE using the link https://remix.ethereum.org, where the contract can be compiled and deployed to above metamask account. 
- Create a anyname.sol file in Remix IDE workspace
- Copy the code from ditribute.sol file and paste it to the above file
- Give your unique ID for ERC token contract, Token name and description
- select solidity compiler from left pane and Choose "0.8.0" compiler from the dropdown and compile the contract
- Select the Deploy & run transactions from the left pane. Select the environment as "Injected web3" and verify your plugged in metamask account number is displayed in the Account field.
- Select the your unique ID contract compiled abouve in the contract field
- Click on Deploy button
- Click on confirm button in your metamask account when popped up
- Wait for sometime and check the Remix IDE logs for Deployment successful message and also check your account activity tab, whether the "Contract Deployement" is successful.
- Select the contract deployment activity and verify the status is "confirmed", transasction amount, Gas fees, and other details.
- Click on "View on block explorer" to open the transaction in the etherscan. Verify an unique "Transaction Hash" is created.
- Copy the contract address and paste in "CONTRACT_ADDRESS" of .env file.
- Copy the ABI from Remix IDE and paste in "Contract.js" file ABI field.

**#Step 4:** Open https://infura.io and create a new account. 
- Login back and click on "Create new project" button in the dashboard.
- Select product as "ethereum" and give any desired project name in the overlay screen.
- Then select the project from the dashboard and select the "Project Settings" button displayed in top right corner of the page.
- Copy the Project ID and paste it in "INFURA_TOKEN" field in .env file.

**#Step 5:** To access the docker repository: https://hub.docker.com/repository/docker/dominic21168083/x21168083-dominic/general

- To pull from docker: docker pull dominic21168083/x21168083-dominic:latest

- To set port and get the process ID : docker run -d -p 8080:8080 dominic21168083/x21168083-dominic:latest 

- Open http://localhost:8080/ in the browser

- Click on Upload and select the accounts.txt file

- Wait for 3 to 5 minutes and run: docker logs --details <Paste Process ID from above> --> View the transactions/distribution of tokens to accounts provided in account.txt files has been made


<------------END--------------->
