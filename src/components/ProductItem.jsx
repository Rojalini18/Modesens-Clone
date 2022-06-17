import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Button = styled.button`
  border: 1px solid black;
  margin: 0 auto;
  width: 85%;
  position: absolute;
  font-weight: bold;
  top: 56%;
  bottom: 34%;
  display: none;
  background: rgba(255, 255, 255, 0.6) none repeat scroll 0% 0% / auto
    padding-box border-box;
  z-index: 99;
`;
const Container = styled.div`
  border: 1px solid #f5f5f5;
  position: relative;
  width: 24%;
  padding: 0 20px;
  overflow: hidden;
  height: 370px;
  &:hover ${Button} {
    display: block;
  }
`;

const SlideItem = styled.img`
  height: 100%;
  width: 90%;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: auto;
`;
const HeartDIv = styled.div`
  position: absolute;
  left: 88%;
  bottom: 93%;
  /* top: ; */
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  text-align: center;
  margin-top: -40px;

  & span {
    font-size: 12px;
    color: gray;
  }
  & h6 {
    font-size: 13px;
    font-weight: bold;
    margin: 0;
  }
`;
const HeartImg = styled.img``;

const ProductItem = ({ value }) => {
  console.log("prodItem", value);

  const [userDt, setuserDt] = useState([]);
  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    console.log("data");
    let datas = await fetch(`https://modesense-masai.herokuapp.com/${value}`);

    let data = await datas.json();
    setuserDt(data.data);
    console.log("ddd", data);
  }
  console.log(userDt, "fsfsfsf");
  const handleUser = (e) => {
    localStorage.setItem("IndData", JSON.stringify(e));
    console.log(e, "eee");
  };

  return (
    <div>
      <Wrapper>
        {userDt.map((e) => {
          return (
            <Container
              onClick={() => {
                handleUser(e);
              }}
            >
              <Link to={`${e._id}`}>
                <HeartDIv>
                  <HeartImg src="https://cdn.modesens.com/static/img/20210601heart.svg" />
                </HeartDIv>
                <div
                  style={{
                    display: "flex",
                    border: "none",
                    justifyContent: "center",
                    padding: "20px 8px",
                  }}
                >
                  <div
                    style={{
                      width: "80%",
                      height: "220px",
                      overflow: "hidden",
                    }}
                  >
                    <SlideItem src={e.image_url} />
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button>Quick View</Button>
                </div>
                <TextDiv className="textDiv">
                  <h5
                    style={{
                      fontSize: "15px",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {e.brand}
                  </h5>
                  <p
                    style={{
                      fontSize: "12px",
                      textAlign: "center",
                      color: "gray",
                    }}
                  >
                    {e.title}
                  </p>
                  <h6>
                    ${e.price}-${e.offprice}
                  </h6>
                  <span>
                    {Math.floor(Math.random() * (20 - 5 + 1)) + 5}-store
                  </span>
                </TextDiv>
              </Link>
            </Container>
          );
        })}
      </Wrapper>
    </div>
  );
};

export default ProductItem;
