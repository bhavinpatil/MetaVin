import { Box } from "@chakra-ui/layout";

export default function CustomContainer({children}) {
    return(
        <Box bg="white" width="full" height="full" px="20" py="10" rounded="lg" shadow="lg" textAlign="left">
            {children}
        </Box>
    )
}