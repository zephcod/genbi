import { Box } from "@chakra-ui/react";
import SplitScreen from "../components/hero";
import WithSubnavigation from "../components/navbar";
import LargeWithNewsletter from "../components/footer";
import SimpleThreeColumns from "./sections/hero_feature";
import BasicStatistics from "../pages/sections/stats";
import SplitWithImage from "./sections/column_feature";
import SplitWithImage2 from "./sections/column2_feature";
import CallToActionWithVideo from "./sections/herovideo";
import CallToActionWithAnnotation from "./sections/cta_headline";
import GridListWithCTA from "./sections/cta2";
export default function Home(){
  return(
    <Box>

<WithSubnavigation/>
<SplitScreen/>
<CallToActionWithAnnotation/>
<CallToActionWithVideo/>
<SplitWithImage/>
<SimpleThreeColumns/>
<SplitWithImage2/>
<BasicStatistics/>
<GridListWithCTA/>
<LargeWithNewsletter/>
    </Box>
  )
}