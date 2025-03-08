import { Box } from "@chakra-ui/react";
import PrivacyPolicy from "./sections/privacy";
import WithSubnavigation from "../components/navbar";
import LargeWithNewsletter from "../components/footer";
import Head from "next/head";

export default function PrivacyPolicies(){
    return(
        <Box>
            <Head>
                <title>Privacy Policy</title>
            </Head>
            <WithSubnavigation/>
            <PrivacyPolicy/>
            <LargeWithNewsletter/>
        </Box>
    )
}