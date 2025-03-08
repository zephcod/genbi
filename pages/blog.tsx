import { Box } from "@chakra-ui/react";
import BlogPage from "./sections/blogpage";
import WithSubnavigation from "../components/navbar";
import LargeWithNewsletter from "../components/footer";
import Head from "next/head";

export default function Blogs(){
    return(
        <Box>
            <Head>
                <title>Gennbi Blog</title>
            </Head>
            <WithSubnavigation/>
            <BlogPage/>
            <LargeWithNewsletter/>
        </Box>
    )
}