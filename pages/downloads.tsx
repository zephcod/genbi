import { Box } from "@chakra-ui/react";
import ResDownload from "./sections/res_downloads";
import WithSubnavigation from "../components/navbar";
import LargeWithNewsletter from "../components/footer";
import FaqDownload from "./sections/faq_download";
import Head from "next/head";

export default function Downloads(){
    return(
        <Box>
            <Head>
                <title>Gennbi Downloads</title>
            </Head>
            <WithSubnavigation/>
            <ResDownload/>
            <FaqDownload/>
            <LargeWithNewsletter/>
        </Box>
    )
}