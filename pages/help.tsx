import { Box } from "@chakra-ui/react";
import HelpCenter from "./sections/help";
import WithSubnavigation from "../components/navbar";
import LargeWithNewsletter from "../components/footer";
import Head from "next/head";

export default function Help(){
    return(
        <Box>
            <Head>
                <title>Help Center</title>
            </Head>
            <WithSubnavigation/>
            <HelpCenter/>
            <LargeWithNewsletter/>
        </Box>
    )
}