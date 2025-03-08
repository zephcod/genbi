import { Box } from "@chakra-ui/react";
import Workflows from "./sections/workflows";
import WithSubnavigation from "../components/navbar";
import LargeWithNewsletter from "../components/footer";
import Head from "next/head";

export default function Workflow(){
    return(
        <Box>
            <Head>
                <title>Workflows</title>
            </Head>
            <WithSubnavigation/>
            <Workflows/>
            <LargeWithNewsletter/>
        </Box>
    )
}