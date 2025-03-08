import { Box } from "@chakra-ui/react";
import TermsAndConditions from "./sections/terms";
import WithSubnavigation from "../components/navbar";
import LargeWithNewsletter from "../components/footer";
import Head from "next/head";

export default function Terms(){
    return(
        <Box>
            <Head>
                <title>Terms and Conditions</title>
            </Head>
            <WithSubnavigation/>
            <TermsAndConditions/>
            <LargeWithNewsletter/>
        </Box>
    )
}