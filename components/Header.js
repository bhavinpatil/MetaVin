import { Button } from "@chakra-ui/react";
import { Center, Flex, Text } from "@chakra-ui/layout";

export default function Header({user, logout, isLoggingOut}){
    return(
        <header>
            <Flex px="10" py="6" justifyContent="space-between" bg="#2D242F" color="white">
                <Center>
                    <Text fontSize="xl" fontWeight="bold">MetaVin</Text>
                </Center>
                <Center>
                    <Text>{user.getUsername()}</Text>
                    <Button ml="4" colorScheme="purple" onClick={logout} _disabled={isLoggingOut}>Logout</Button>
                </Center>
            </Flex>
        </header>
    )
}