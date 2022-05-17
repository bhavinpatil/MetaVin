import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/layout";
import Moralis from "moralis";
import CustomContainer from "./CustomContainer";

export default function Swap() {

    Moralis.initPlugins()
    const dex = Moralis.Plugins.oneInch

    async function swap(){
        const NATIVE_ADDRESS = "";
    }

    return (
        <CustomContainer>
            <Text fontSize="xl" fontWeight="bold">Swap</Text>
            <div id="swapbox">
                <image />
                <span>Select Token</span>
            </div>

            <div id="swapbox">
                <image />
                <span>Select Token</span>
            </div>
            <div>Estimated Gas Fees:<span></span></div>
            <Button borderRadius="12px" colorScheme="purple">Swap</Button>
        </CustomContainer>
    )
}