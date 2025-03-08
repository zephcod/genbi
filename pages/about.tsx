import { Box } from "@chakra-ui/react";
import SimpleAbout from "./sections/aboutus";
import WithSubnavigation from "../components/navbar";
import LargeWithNewsletter from "../components/footer";
import FaqAbout from "./sections/faq_about";
import Head from "next/head";

export default function About(){
    return(
        <Box>
            <Head>
                <title>About Gennbi</title>
            </Head>
            <WithSubnavigation/>
            <SimpleAbout/>
            <FaqAbout/>
            <LargeWithNewsletter/>
        </Box>
    )
}