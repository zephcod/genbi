import { Box } from "@chakra-ui/react";
import SolBi from "./sections/sol_bi";
import WithSubnavigation from "../components/navbar";
import LargeWithNewsletter from "../components/footer";
import Head from "next/head";

export default function BuilderInformatics(){
    return(
        <Box>
            <Head children={undefined}>
                <title>Builder Informatics</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <WithSubnavigation/>
            <SolBi/>
            <LargeWithNewsletter/>
        </Box>
    )
}