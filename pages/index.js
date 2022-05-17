import { Button } from '@chakra-ui/button'
import { Box, Flex, Text} from '@chakra-ui/layout'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import Head from 'next/head'
import { useMoralis } from 'react-moralis'
import Balance from '../components/Balance'
import Header from '../components/Header'
import Nft from '../components/Nft'
import Profile from '../components/profile'
import Send from '../components/Send'
import Swap from '../components/Swap'
import Transactions from '../components/Transactions'

export default function Home() {

  const { isAuthenticated, authenticate, user, logout, isLoggingOut } = useMoralis()
  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>
            Login | Dashboard
          </title>
        </Head>
        <Flex direction="column" justifyContent="center" alignItems="center" width="100vw" height="100vh" bgGradient="linear(to-br, purple.400, blue.300)">
          <Text fontSize="5xl" fontWeight="bold" color="white" paddingBottom="20px">Welcome to MetaVin</Text>
          <Button colorScheme="purple" size="lg" margin="6" onClick={() => authenticate({
            signingMessage:"Sign to login to MetaVin"
          })}>Login with Metamask</Button>
        </Flex>
      </>
    )
  }
  return (
    <>
      <Head>
        <title>METAVIN</title>
      </Head>
      <Flex direction="column" width="100vw" height="100vh">
        <Header user={user} logout={logout} isLoggingOut={isLoggingOut}/>
        <Box flex="1" bg="black" px="44" py="20">
          <Tabs size="lg" colorScheme="purple" align="center" variant="enclosed">
            <TabList>
              <Tab fontWeight="bold" color="white">Profile</Tab>
              <Tab fontWeight="bold" color="white">Balance</Tab>
              <Tab fontWeight="bold" color="white">Transactions</Tab>
              <Tab fontWeight="bold" color="white">Send ETH</Tab>
              <Tab fontWeight="bold" color="white">Swap</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Profile user={user}/>
              </TabPanel>
              <TabPanel>
                <Balance user={user}/>
              </TabPanel>
              <TabPanel>
                <Transactions user={user}/>
              </TabPanel>
              <TabPanel>
                <Send/>
              </TabPanel>
              <TabPanel>
                <Swap user={user}/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  )
}