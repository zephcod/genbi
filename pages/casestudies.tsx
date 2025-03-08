import { Box } from "@chakra-ui/react";
import CaseStudies from "./sections/casestudies";
import WithSubnavigation from "../components/navbar";
import LargeWithNewsletter from "../components/footer";
import Head from "next/head";

export default function CaseStudy(){
    return(
        <Box>
            <Head>
                <title>Gennbi Case Studies</title>
            </Head>
            <WithSubnavigation/>
            <CaseStudies/>
            <LargeWithNewsletter/>
        </Box>
    )
}