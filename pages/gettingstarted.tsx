import { Box } from "@chakra-ui/react";
import ResStart from "./sections/res_start";
import WithSubnavigation from "../components/navbar";
import LargeWithNewsletter from "../components/footer";
import Head from "next/head";

export default function GettingStarted(){
    return(
        <Box>
            <Head>
                <title>Getting started</title>
            </Head>
            <WithSubnavigation/>
            <ResStart/>
            <LargeWithNewsletter/>
        </Box>
    )
}