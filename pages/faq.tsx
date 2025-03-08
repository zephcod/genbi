import { Box } from "@chakra-ui/react";
import ResFaq from "./sections/res_faq";
import WithSubnavigation from "../components/navbar";
import LargeWithNewsletter from "../components/footer";
import Head from "next/head";

export default function FAQ(){
    return(
        <Box>
            <Head>
                <title>Gennbi FAQ</title>
            </Head>
            <WithSubnavigation/>
            <ResFaq/>
            <LargeWithNewsletter/>
        </Box>
    )
}