import { Slidingnew } from "../components/homecomponents/Slidingnew";
import { Bhead } from "../components/Bhead";
import { Brand } from "../components/Brand";
import Slide from "../components/homecomponents/Slider";
import { Trending } from "../components/Trending";
import SlideItem from "../components/homecomponents/trendNew";
import RecentView from "../components/womencomponents/recentlyViewed";
import CommunityPost from "../components/womencomponents/communityPosts";
import { Bottom } from "../components/Bottom";

import "./Home.css";
export const Home = () => {
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
