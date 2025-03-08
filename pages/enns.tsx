import { Box } from "@chakra-ui/react";
import SolEnn from "./sections/sol_enn";
import WithSubnavigation from "../components/navbar";
import LargeWithNewsletter from "../components/footer";
import Head from "next/head";

export default function EngineeringNeuralNets(){
    return(
        <Box>
            <Head>
                <title>Engineering neural networks</title>
            </Head>
            <WithSubnavigation/>
            <SolEnn/>
            <LargeWithNewsletter/>
        </Box>
    )
}