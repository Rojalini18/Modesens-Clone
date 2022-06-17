import { Slidingnew } from "../components/womencomponents/Slidingnew";
import { Bhead } from "../components/Bhead";
import { Brand } from "../components/Brand";
import Slide from "../components/womencomponents/Slider";
import { Trending } from "../components/Trending";
import SlideItem from "../components/womencomponents/trendNew";
import RecentView from "../components/womencomponents/recentlyViewed";
import CommunityPost from "../components/womencomponents/communityPosts";
import { Bottom } from "../components/Bottom";
import "./Home.css";
export const Women = () => {
  return (
    <>
      <Slidingnew />
      <Bhead />
      <Brand />
      <Slide />
      <Trending trend={"Trending Now"} />
      <SlideItem />
      <Trending trend={"Recently Viewed"} />
      <RecentView />
      <Trending trend={"Community Posts"} />
      <CommunityPost />
      <Bottom />
    </>
  );
};
