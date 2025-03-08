import { Box } from "@chakra-ui/react";
import SolHow from "./sections/sol_how";
import WithSubnavigation from "../components/navbar";
import LargeWithNewsletter from "../components/footer";
import FaqHow from "./sections/faq_how";
import Head from "next/head";

export default function HowItWorks(){
    return(
        <Box>
            <Head>
                <title>How it works</title>
            </Head>
            <WithSubnavigation/>
            <SolHow/>
            <FaqHow/>
            <LargeWithNewsletter/>
        </Box>
    )
}