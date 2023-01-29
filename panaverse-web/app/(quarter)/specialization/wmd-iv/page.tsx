'use client'
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/navBar";
import { cardsVariants, introVariants } from "@/app/utils/motions";
import { Box, ChakraProvider, Flex, theme,Text,useColorModeValue, Grid, GridItem, Link, UnorderedList, ListItem, Divider, OrderedList } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Quarter4WMD(){
    return (
      <ChakraProvider cssVarsRoot={undefined} theme={theme}>
        <NavBar></NavBar>
        <Box>
          <Flex direction={"column"}>
            
            <motion.nav
              variants={introVariants}
              initial="hidden"
              whileInView="show"
            >
              <Text
                align="center"
                fontSize={["20px", "25px", "25px"]}
                textColor={useColorModeValue("blue.600", "blue.200")}
                fontWeight="bold"
              >
                Web 3 and Metaverse Quarter IV
              </Text>
            </motion.nav>
             <motion.nav variants={cardsVariants} initial="hidden" whileInView="show">
            <Flex mx="30px">
              <Grid templateColumns="repeat(10, 1fr)">
                <GridItem colEnd={[3,2]} textAlign="left">
                  {" "}
                  <Text
                    mt="40px"
                    fontSize={"2xl"}
                    fontWeight={"bold"}
                  >
                    {" "}
                    Description:
                  </Text>
                </GridItem>
                <GridItem colStart={[2,3]} colEnd={11}>
                  <Text
                    borderRadius={"12px"}
                    boxShadow="dark-lg"
                    align={["justify"]}
                    my="20px"
                    p="20px"
                  >
                    In this course you will learn how to develop Web 3.0 DApps, 
                    create a project, deploy it in production, write smart contracts, 
                    unit test them, and create user interfaces for them. 
                    We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc. 
                    Please note that in order to develop Web 3 applications you also need to build on top of
                    Web 2.0 technologies which we have already covered in the previous quarters.
                    <br></br>
                    <Link  textColor={"blue.500"}
                      target="_blank"
                      href=" https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db">
                  https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db
                  </Link>
                  </Text>
                  
                </GridItem>
              </Grid>
            </Flex>
            </motion.nav>
            <motion.nav variants={cardsVariants} initial="hidden" whileInView="show">
            <Flex mx="30px">
              <Grid templateColumns="repeat(10, 1fr)">
                <GridItem colEnd={[3,2]} textAlign="left">
                  <Text
                    mt="40px"
                    
                    fontSize={"xl"}
                    fontWeight={"bold"}
                  >
                    {" "}
                    Blockchain and Metaverse Theory{" "}
                  </Text>
                </GridItem>
                <GridItem colStart={[2,3]} colEnd={11}>
                  <Text
                    borderRadius={"12px"}
                    boxShadow="dark-lg"
                    align={["justify"]}
                    my="20px"
                    p="20px"
                  >
                    <UnorderedList>
                      <ListItem>
                        {" "}
                        The Metaverse: And How It Will Revolutionize Everything by Matthew Ball
                        <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0"
                    >
                      https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0
                    </Link>
                      </ListItem>

                      <ListItem> Mastering Blockchain - Fourth Edition by Imran Bashir
                      <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067"
                    >
                      https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067
                    </Link>
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </GridItem>
              </Grid>
            </Flex>
            </motion.nav>
          <motion.nav variants={cardsVariants} initial="hidden" whileInView="show">
           < Flex mx="30px">
              <Grid templateColumns="repeat(10, 1fr)">
                <GridItem colEnd={[3,2]} textAlign="left">
                  <Text
                    mt="40px"
                    fontSize={"xl"}
                    fontWeight={"bold"}
                  >
                    {" "}
                    Smart Contract Development in Solidity{" "}
                  </Text>
                </GridItem>
                <GridItem colStart={[2,3]} colEnd={11}>
                  <Text
                    borderRadius={"12px"}
                    boxShadow="dark-lg"
                    align={["justify"]}
                    my="20px"
                    p="20px"
                  >
                    <UnorderedList>
                    <ListItem>
                    Solidity Programming Essentials - Second Edition By Ritesh Modi
                    <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181"
                    >
                      https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181
                    </Link>
                    </ListItem>
                      <ListItem>
                      Solidity Learning Repo
                      <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://github.com/panaverse/defi-dapps-solidity-smart-contracts"
                    >
                     https://github.com/panaverse/defi-dapps-solidity-smart-contracts
                    </Link>
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </GridItem>
              </Grid>
            </Flex>
            </motion.nav>
            <motion.nav variants={cardsVariants} initial="hidden" whileInView="show">
            < Flex mx="30px">
              <Grid templateColumns="repeat(10, 1fr)">
                <GridItem colEnd={[3,2]} textAlign="left">
                  <Text
                    mt="40px"
                    fontSize={"xl"}
                    fontWeight={"bold"}
                  >
                    {" "}
                    Dapp Learning Repo
                    {" "}
                  </Text>
                </GridItem>
                <GridItem colStart={[2,3]} colEnd={11}>
                  <Text
                    borderRadius={"12px"}
                    boxShadow="dark-lg"
                    align={["justify"]}
                    my="20px"
                    p="20px"
                  >
                    <UnorderedList>
                    <ListItem>
                    <Link
                    textColor={"blue.500"}
                    target="_blank"
                    href="https://github.com/panaverse/dapps-nextjs">
                    https://github.com/panaverse/dapps-nextjs
                    </Link>
                    </ListItem>
                    <ListItem>
                    Tokennomics
                    </ListItem>
                    </UnorderedList>
                  </Text>
                </GridItem>
              </Grid>
            </Flex>


            </motion.nav>
              <motion.nav variants={cardsVariants} initial="hidden" whileInView="show">
            < Flex mx="30px">
              <Grid templateColumns="repeat(10, 1fr)">
                <GridItem colEnd={[3,2]} textAlign="left">
                  <Text
                    mt="40px"
                    fontSize={"xl"}
                    fontWeight={"bold"}
                  >
                    {" "}
                    Blockchain Project: Create a Token and Launch ICO/IEO/IDO
                  </Text>
                </GridItem>
                <GridItem colStart={[2,3]} colEnd={11}>
                  <Text
                    borderRadius={"12px"}
                    boxShadow="dark-lg"
                    align={["justify"]}
                    my="20px"
                    p="20px"
                  >
                    <UnorderedList>
                    <ListItem>
                    As you probably know, the ICO ("Initial Coin Offering") industry has been booming, 
                    and it's completely reinventing the way new startups kickstart themselves.
                    In fact, have a look at Wikipedia's list of highest crowdfunding projects 
                    <Link
                    textColor={"blue.500"}
                    target="_blank"
                    href="https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects">
                        https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects</Link>
                    and you'll notice that blockchain projects absolutely dominate the list.

                    </ListItem>
                    <Divider/>
                    <ListItem>
                    Understand the difference between IDO vs. IEO vs. ICO 
                    <Link
                    textColor={"blue.500"}
                    target="_blank"
                    href="https://phemex.com/blogs/what-is-a-dex-ido">
                        https://phemex.com/blogs/what-is-a-dex-ido
                        </Link>
                    </ListItem>
                    <ListItem>
                    ICO list at ICO Drops
                    <Link
                    textColor={"blue.500"}
                    target="_blank"
                    href="https://icodrops.com">
                        https://icodrops.com
                        </Link>
                    </ListItem>

                    <ListItem>
                    ICO List of Best New Initial Coin Offerings
                      <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://topicolist.com/"
                    > https://topicolist.com/                    
                    </Link>
                      </ListItem>

                      <ListItem>
                      Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOsTop-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOs
                    <br></br>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://cryptototem.com/ico-list/"
                    >
                      https://cryptototem.com/ico-list/
                    </Link> 
                      </ListItem>
                      <ListItem>
                      ICO List Online
                      <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.icolistingonline.com"
                    >
                      https://www.icolistingonline.com
                    </Link> 

                      </ListItem>
                      <ListItem>
                      Binance IEO List
                      <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://coincodex.com/ieo-list/binance/"
                    >
                     https://coincodex.com/ieo-list/binance/
                    </Link> 
                      </ListItem>
                      <ListItem>
                      Binance Launchpad 
                      <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://www.coinspeaker.com/ieo/platform/binance-launchpad/"
                    >
                     https://www.coinspeaker.com/ieo/platform/binance-launchpad/
                    </Link> 
                      </ListItem>
                      <ListItem>
                      IEO List
                      <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://icomarks.com/ieo"
                    >
                     https://icomarks.com/ieo
                    </Link> 
                      </ListItem>
                      <ListItem>
                      Polkastarter
                      <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://polkastarter.com"
                    >
                     https://polkastarter.com
                    </Link> 
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </GridItem>
              </Grid>
            </Flex>
            </motion.nav>
          
            <motion.nav variants={cardsVariants} initial="hidden" whileInView="show">
            < Flex mx="30px">
              <Grid templateColumns="repeat(10, 1fr)">
                <GridItem colEnd={[3,2]} textAlign="left">
                  <Text
                    mt="40px"
                    fontSize={"xl"}
                    fontWeight={"bold"}
                  >
                    {" "}
                    Project Part 1
                     {" "}
                  </Text>
                </GridItem>
                <GridItem colStart={[2,3]} colEnd={11}>
                  <Text
                    borderRadius={"12px"}
                    boxShadow="dark-lg"
                    align={["justify"]}
                    my="20px"
                    p="20px"
                  >
                   <UnorderedList>
                <ListItem>
                      How to Launch a IEO on Binance Launchpad
                      <br></br>
                      Read How to Launch an IEO
                    <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://appinventiv.com/blog/how-to-launch-an-ieo/"
                    >https://appinventiv.com/blog/how-to-launch-an-ieo/     
                    </Link>
                </ListItem>
                  </UnorderedList>
                  </Text>
                </GridItem>
              </Grid>
            </Flex>
            </motion.nav>


          <motion.nav variants={cardsVariants} initial="hidden" whileInView="show">
            <Flex mx="30px">
              <Grid templateColumns="repeat(10, 1fr)">
                <GridItem colEnd={[3,2]} textAlign="left">
                  {" "}
                  <Text
                    mt="40px"
                    fontSize={"xl"}
                    fontWeight={"bold"}
                  >
                    {" "}
                    Project Part 2
                  </Text>
                </GridItem>
                <GridItem colStart={[2,3]} colEnd={11}>
                <Text
                    borderRadius={"12px"}
                    boxShadow="dark-lg"
                    align={["justify"]}
                    my="20px"
                    p="20px"
                  >
                <UnorderedList>
                <ListItem>
                      How to Launch a IDO on Polkastarter
                        <br/>
                        Review the [list of top fundraising platforms]
                    <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://cryptorank.io/fundraising-platforms"
                    >https://cryptorank.io/fundraising-platforms 
                    </Link>
                      </ListItem>
                      <ListItem>
                      Your second task of the project is to make a google slides presentation on how to start a IDO on the Polkastarte
                       
                    <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href=" https://polkastarter.com/ "
                    > https://polkastarter.com/ 
                    </Link>
                      </ListItem>
                      </UnorderedList>
                      </Text>
                </GridItem>
              </Grid>
            </Flex>
            </motion.nav>
             <motion.nav variants={cardsVariants} initial="hidden" whileInView="show">
            <Flex mx="30px">
              <Grid templateColumns="repeat(10, 1fr)">
                <GridItem colEnd={[3,2]} textAlign="left">
                  {" "}
                  <Text
                   mt="40px"
                   fontSize={"xl"}
                   fontWeight={"bold"}
                  >
                    {" "}
                    Project Part 3
                  </Text>
                </GridItem>
                <GridItem colStart={[2,3]} colEnd={11}>
                <Text
                    borderRadius={"12px"}
                    boxShadow="dark-lg"
                    align={["justify"]}
                    my="20px"
                    p="20px"
                  >
                    <UnorderedList>
                <ListItem>
                       Create a Pako Token
                    <Divider/>
                    By creating a token and related contracts, you'll also learn how to handle money sent to your contracts, which should come in handy if you want to create some kind of paid decentralized service in the future
                      </ListItem>
                      <ListItem>
                      Therefore, for the sake of this chapter, let's imagine that our  Pako DApp uses its own coin – the Pako Token. We will create two contracts – one for the token itself and one for the token crowd sale (the ICO).
                    <Divider/>
                    Now Create your own Pako ERC20 Token and deploy it on a testnet. The Token should be to use OpenZeppelin contracts. You will use the Hardhat development environment. Also, write at least twenty automated tests. We will be using Solidity and Typescript for development
                      </ListItem>
                      </UnorderedList>
                      </Text>
                </GridItem>
              </Grid>
            </Flex>
            </motion.nav>

              <motion.nav variants={cardsVariants} initial="hidden" whileInView="show">
            < Flex mx="30px">
              <Grid templateColumns="repeat(10, 1fr)">
                <GridItem colEnd={[3,2]} textAlign="left">
                  <Text
                    mt="40px"
                    fontSize={"xl"}
                    fontWeight={"bold"}
                  >
                    {" "}
                    Project Part 4{" "}
                  </Text>
                </GridItem>
                <GridItem colStart={[2,3]} colEnd={11}>
                  <Text
                    borderRadius={"12px"}
                    boxShadow="dark-lg"
                    align={["justify"]}
                    my="20px"
                    p="20px"
                  >
                    <UnorderedList>
                    <ListItem>
                    Develop Crowd Sale Contract 
                    <Divider/>
                    This contract will be responsible for allowing users to exchange ETH for our Pako Token. In order to do that we need to set a price for our token (1 ETH = 100 Pako Token)
                    </ListItem>
                    <ListItem>
                    Implement a payable buyToken() function. 

Emit a BuyTokens event that will log who’s the buyer, the amount of ETH sent and the amount of Token bought

                    </ListItem>
                    <ListItem>
                    Transfer 75% of the Tokens to the Crowd Sale contract at deployment time. i.e. Right after the contract is deployed, we want the token contract to send 75% of our token supply to it. While 25% remain in our personal "owner" account.
                    </ListItem>
                    <Divider/>

                    <ListItem>
                    You can use the openzeppelin crowd sale contracts
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://docs.openzeppelin.com/contracts/4.x/crowdsales"
                    >
                    https://docs.openzeppelin.com/contracts/4.x/crowdsales 
                    </Link>
                    however you will have to update the code to the latest solidity version.
                    </ListItem>

                      <ListItem>
                      Also write extensive tests, for example we will simply send a transaction of 1 ETH from a random account to the contract. After the transaction, we should expect the account to have received Pako, while the contract's balance should have been reduced.
                      <Divider/>
                      Note: Before you get started writing the token contract we suggest you review the access control
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://docs.openzeppelin.com/contracts/4.x/access-control"
                    >https://docs.openzeppelin.com/contracts/4.x/access-control
                    </Link>
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </GridItem>
              </Grid>
            </Flex>
            </motion.nav>
            
            <motion.nav variants={cardsVariants} initial="hidden" whileInView="show">
            < Flex mx="30px">
              <Grid templateColumns="repeat(10, 1fr)">
                <GridItem colEnd={[3,2]} textAlign="left">
                  <Text
                   mt="40px"
                   fontSize={"xl"}
                   fontWeight={"bold"}
                  >
                    {" "}
                    Project Part 5 {" "}
                  </Text>
                </GridItem>
                <GridItem colStart={[2,3]} colEnd={11}>
                  <Text
                    borderRadius={"12px"}
                    boxShadow="dark-lg"
                    align={["justify"]}
                    my="20px"
                    p="20px"
                  >
                    <UnorderedList>
                    <ListItem>
                    Trying it with MetaMask
                    <Divider/>
                    While it's always good to test your code, it's often more satisfying to see the results of your work wrapped in a nice UI. Let's see how we can deploy our contracts and get some Pako tokens into our MetaMask wallet!
                     <br></br>
                     We start by running our deployment scripts for the test network so that the new token contracts are uploaded and deployed.
                     <br/>
                     When it's done, take note of what addresses the contracts were uploaded to and copy it!
                     <br/>
                     Now head to MetaMask, and send a transaction of 1 ETH to the crowd sale contract address. If your MetaMask wallet doesn't have any ethers, remember that you can use any faucet.
                    
                    </ListItem>
                    <Divider/>
                    <ListItem>
                    After the transaction has been confirmed, you might be confused about why you can't see any tokens in your wallet. It turns out that you need to manually add the token address in MetaMask in order to "register" it – after all, there are so many tokens out there, there's no way MetaMask could list them all by default!
                    <br/>
                    To do this, open the side menu and click on the "Add token" button to get started:

Once you're on the token page, click on "Add custom token" and paste in the token contract's address in the address field.

After confirming that you want to add the token, you should be able to see your Pako balance right next to your ETH balance in the wallet. How cool!

                    </ListItem>
                    </UnorderedList>
                  </Text>
                </GridItem>
              </Grid>
            </Flex>
            </motion.nav>

            <motion.nav variants={cardsVariants} initial="hidden" whileInView="show">
            < Flex mx="30px">
              <Grid templateColumns="repeat(10, 1fr)">
                <GridItem colEnd={[3,2]} textAlign="left">
                  <Text
                   mt="40px"
                   fontSize={"xl"}
                   fontWeight={"bold"}
                  >
                    {" "}
                    Project Part 6
                     {" "}
                  </Text>
                </GridItem>
                <GridItem colStart={[2,3]} colEnd={11}>
                  <Text
                    borderRadius={"12px"}
                    boxShadow="dark-lg"
                    align={["justify"]}
                    my="20px"
                    p="20px"
                  >
                   <Text>Trying it with Multisignature Wallets</Text> 
                    <OrderedList>
                    <ListItem>
                    Read
                    <Link  textColor={"blue.500"}
                      target="_blank" href="https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/">
                   https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/
                    </Link>
                    </ListItem>

                    <ListItem>
                    Now use Gnosis Safe with multi-sigs to do what you did in the last part.

                    <Link  textColor={"blue.500"}
                      target="_blank" href="https://gnosis-safe.io/">
                    https://gnosis-safe.io/
                    </Link>
                    </ListItem>
                    <Divider/>
                    </OrderedList>
                  </Text>
                </GridItem>
              </Grid>
            </Flex>
            </motion.nav>
            <motion.nav variants={cardsVariants} initial="hidden" whileInView="show">
            < Flex mx="30px">
              <Grid templateColumns="repeat(10, 1fr)">
                <GridItem colEnd={[3,2]} textAlign="left">
                  <Text
                    mt="40px"
                    fontSize={"xl"}
                    fontWeight={"bold"}
                  >
                    {" "}
                    Project Part 7{" "}
                  </Text>
                </GridItem>
                <GridItem colStart={[2,3]} colEnd={11}>
                  <Text
                    borderRadius={"12px"}
                    boxShadow="dark-lg"
                    align={["justify"]}
                    my="20px"
                    p="20px"
                  >
                   Sending Tokens using Ethers.js 

                    <UnorderedList>
                    <ListItem>
                    Write a Typescript program to send Pako Token to some friend's address using Ethers.js.
                    You may follow this tutorial 
                    <Divider/>
                    <Link  textColor={"blue.500"}
                      target="_blank" href="https://ethereum.org/en/developers/tutorials/send-token-etherjs/">
                  https://ethereum.org/en/developers/tutorials/send-token-etherjs/
                    </Link>
                    </ListItem>
                    </UnorderedList>
                  </Text>
                </GridItem>
              </Grid>
            </Flex>
            </motion.nav> 
            <motion.nav variants={cardsVariants} initial="hidden" whileInView="show">
            < Flex mx="30px">
              <Grid templateColumns="repeat(10, 1fr)">
                <GridItem colEnd={[3,2]} textAlign="left">
                  <Text
                      mt="40px"
                    fontSize={"xl"}
                    fontWeight={"bold"} 
                  >
                    {" "}
                    Project Part 8{" "}
                  </Text>
                </GridItem>
                <GridItem colStart={[2,3]} colEnd={11}>
                  <Text
                    borderRadius={"12px"}
                    boxShadow="dark-lg"
                    align={["justify"]}
                    my="20px"
                    p="20px"
                  >
                   Advance: Create, Deploy, Mint, and Sell an NFT

                    <UnorderedList>
                    <ListItem>
                    Read this NFT tutorial series 
                    <Divider/>
                    <Link  textColor={"blue.500"}
                      target="_blank" href="hhttps://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/">
                   https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/
                    </Link>
                    </ListItem>
                    <Divider/>

                    <ListItem>
                    Create a NFT contract using the [OpenZepplen ERC721 NFT Standard]
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://docs.openzeppelin.com/contracts/4.x/erc721"
                    >
                  https://docs.openzeppelin.com/contracts/4.x/erc721
                    </Link>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://docs.openzeppelin.com/contracts/4.x/erc721#Presets"
                    >
                   You may use the Preset ERC721 contract
                    </Link>
                    </ListItem>
                      <ListItem>
                      Deploy your NFT contract on a testnet, mint it, and view it on the MetaMask wallet and list it on OpenSea Marketplace for sale.
                      <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href=" https://opensea.io/"
                    > https://opensea.io/ 
                    </Link>
                      </ListItem>
                      <ListItem>
                      Implement a ERC721 Market
                    <Divider/>
                    <Link
                      textColor={"blue.500"}
                      target="_blank"
                      href="https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/"
                    >
                     https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/
                    </Link> 
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </GridItem>
              </Grid>
            </Flex>
            </motion.nav> 


          </Flex>
        </Box>
        <Footer></Footer>
      </ChakraProvider>
    );
}