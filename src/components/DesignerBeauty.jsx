import React from "react";
import styled from "styled-components";

const DesignerBeauty = () => {
  const Container = styled.div`
    /* border: 1px solid red; */
  `;
  const Header = styled.h1`
    font-weight: bolder;
    font-size: 28px;
    /* border: 1px solid red; */
  `;
  const SubHead = styled.p`
    font-size: 14px;
    /* border: 1px solid red; */
    text-align: left;
  `;
  return (
    <div>
      <Container>
        <Header>Designer Beauty</Header>
        <SubHead>
          Shop designer beauty with price comparison across 500+ stores in one
          place. Discover the latest designer beauty at ModeSens.
        </SubHead>
      </Container>
    </div>
  );
};

export default DesignerBeauty;
