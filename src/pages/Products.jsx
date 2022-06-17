import DesignerBeauty from "../components/DesignerBeauty";
import ProductItem from "../components/ProductItem";
import styled from "styled-components";
import { FilterDiv } from "../components/FilterDiv";
import { Grid } from "../components/Grid";
const Wrapper = styled.div`
  display: flex;
`;
const Left = styled.div`
  /* border: 1px solid red; */
  width: 25%;
  border-right: 1px solid #f5f5f5;
`;
const Right = styled.div`
  /* border: 1px solid red; */
  width: 75%;
  padding-left: 10px;
`;
export const Products = ({ value }) => {
  console.log("product", value);
  return (
    <div>
      <Wrapper>
        <Left>
          <FilterDiv />
        </Left>
        <Right>
          <DesignerBeauty />
          <Grid />
          <ProductItem value={value} />
        </Right>
      </Wrapper>
    </div>
  );
};
