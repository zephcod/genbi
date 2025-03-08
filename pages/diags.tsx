import { Box } from "@chakra-ui/react";
import SolDiag from "./sections/sol_diag";
import WithSubnavigation from "../components/navbar";
import LargeWithNewsletter from "../components/footer";
import Head from "next/head";

export default function Diagnostics(){
    return(
        <Box>
            <Head>
                <title>Gennbi Diagnostics</title>
            </Head>
            <WithSubnavigation/>
            <SolDiag/>
            <LargeWithNewsletter/>
        </Box>
    )
}