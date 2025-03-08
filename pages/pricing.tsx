import { Box } from "@chakra-ui/react";
import ThreeTierPricing from "./sections/price";
import WithSubnavigation from "../components/navbar";
import LargeWithNewsletter from "../components/footer";
import FaqPricing from "./sections/faq_pricing";
import Head from "next/head";

export default function Price(){
    return(
        <Box>
        <Head>
            <title>Gennbi Pricing</title>
        </Head>
            <WithSubnavigation/>
            <ThreeTierPricing/>
            <FaqPricing/>
            <LargeWithNewsletter/>
        </Box>
    )
}