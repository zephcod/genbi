import { Box } from "@chakra-ui/react";
import Documentaions from "./sections/documentation";
import WithSubnavigation from "../components/navbar";
import LargeWithNewsletter from "../components/footer";
import Head from "next/head";

export default function Documentation(){
    return(
        <Box>
            <Head>
                <title>Gennbi Documentation</title>
            </Head>
            <WithSubnavigation/>
            <Documentaions/>
            <LargeWithNewsletter/>
        </Box>
    )
}