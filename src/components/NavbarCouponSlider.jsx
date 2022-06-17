import styled from "styled-components";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";

const SliderContainer = styled.div`
  width: 100%;
  height: 4vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.2s ease;
  transform: translateX(${(props) => props.sliderPosition * -100}vw);
`;
const ArrowDiv = styled.div`
  background-color: #000000;
  padding: 0 80px;
  width: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  opacity: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 30;
  right: 50;
  z-index: 2;
  cursor: pointer;
`;
const ContentDiv = styled.div`
  color: white;
  background: #000000;
  display: flex;
  height: 100%;
  width: 100vw;
  align-items: center;
  padding: 0 350px;
  justify-content: space-around;
  cursor: pointer;
`;
const ImgDiv = styled.div`
  width: 30px;
  display: flex;
  height: 100%;
  align-items: center;
`;
const ModelImg = styled.img`
  height: 70%;
`;
const Title = styled.h1`
  font-size: 14px;
  font-weight: bold;
  word-spacing: 2px;
`;
const Button = styled.button`
  display: flex;
  background-color: #f4442d;
  justify-content: center;
  gap: 4px;
  width: 17%;
  height: 80%;
  border: none;
  padding: 4px 4px;
  align-items: center;
`;
const BtnText = styled.div`
  font-weight: bold;
  font-size: 13px;
`;
export const NavbarCouponSlider = () => {
  let coupon = [
    {
      logo: "https://cdn.modesens.com/static/img/20180929logo.svg",
      title:
        "Download our Browser Extension and get three months of silver membership",
      screen: "https://cdn.modesens.com/static/img/20190228chromelogo.png",
      btnText: "Install Now",
      href: "https://chrome.google.com/webstore/detail/modesens-shopping-assista/cmfmhegpbogfmojekmidappigcfbgbcb/",
    },
    {
      logo: "https://cdn.modesens.com/static/img/20180929logo.svg",
      title:
        "Download the Modesens mobile app and get three months of silver membership",
      screen: "https://cdn.modesens.com/static/img/20220302phone.svg",
      btnText: "Download Now",
      href: "https://play.google.com/store/apps/details?id=com.modesens.androidapp&hl=en_GB&gl=US",
    },
    {
      title:
        "Check out our Summer Sales to find the hottest offers up to 70% off!",
    },
  ];

  const [sliderPosition, setsliderPosition] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setsliderPosition(sliderPosition > 0 ? sliderPosition - 1 : 0);
    } else {
      setsliderPosition(sliderPosition < 1 ? sliderPosition + 1 : 1);
    }
  };
  let i = 0;
  return (
    <SliderContainer>
      <ArrowDiv
        onClick={() => handleClick("left")}
        style={{ position: "absolute", left: "0px" }}
      >
        <ChevronLeftIcon
          style={{ margin: "auto", color: "white", fontSize: "30px" }}
        />
      </ArrowDiv>
      <Wrapper sliderPosition={sliderPosition}>
        {coupon.map((e) => {
          return (
            <a href={e.href} target="_blank" rel="noreferrer" key={i++}>
              <ContentDiv>
                <ImgDiv>
                  <ModelImg src={e.logo} />
                </ImgDiv>
                <div>
                  <Title title={e.title}>{e.title} </Title>
                </div>
                <Button>
                  <ModelImg src={e.screen} />
                  <BtnText>{e.btnText}</BtnText>
                </Button>
              </ContentDiv>
            </a>
          );
        })}
      </Wrapper>
      <ArrowDiv
        onClick={() => handleClick("right")}
        style={{ position: "absolute", right: "0px" }}
      >
        <ChevronRightIcon
          style={{ margin: "auto", color: "white", fontSize: "30px" }}
        />
      </ArrowDiv>
    </SliderContainer>
  );
};
