import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: 0px;
  margin-left: 0px;
  display: flex;
  align-items: center;
  max-width: 1500px;
  height: 60px;
  border-top: 0.5px solid rgb(204, 204, 204);
  position: relative;
  justify-content: space-between;
`;
const Dropdown = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: 0px;
  margin-left: 0px;
  display: flex;
  align-items: center;
  max-width: 1500px;
  height: 60px;
  border-top: 0.5px solid rgb(204, 204, 204);
  border-bottom: 0.5px solid rgb(204, 204, 204);
  z-index: 40;
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  cursor: pointer;
`;
const Left = styled.div`
  display: flex;
  width: 67%;
`;
const LogoDiv = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
`;
const Logo = styled.img``;

const MenuDiv = styled.div`
  font-size: 12.2px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const MenuInnerDiv = styled.div`
  box-sizing: border-box;
  font-size: 12.2px;
  display: flex;
  left: -12vw;
  align-items: center;
  width: 100%;
  height: 60px;
  border-bottom: 0.5px solid rgb(204, 204, 204);
  background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box
    border-box;
  z-index: 1;
  padding: 0 150px;
`;
const MenuItemDiv = styled.div`
  height: 100%;
  padding: 20px 0;
  &:hover ${Dropdown} {
    display: block;
  }
`;
const MenuItem = styled.div`
  margin: 0 15px;
  font-weight: bold;
  word-spacing: 3px;
  letter-spacing: 0.1px;
  padding: 2px 0;
  text-align: center;
  max-height: 20px;
  min-height: 20px;
  display: block;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid red;
  }
`;
const Right = styled.div`
  display: flex;
  width: 11%;
  justify-content: space-between;
  & div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;
const FlagDiv = styled.div`
  width: 20px;
`;
const FlagImg = styled.img``;
const ProfileDiv = styled.div``;
const ProfileImg = styled.img``;
const Search = styled.div``;
const SearchImg = styled.img``;
const SearchText = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
const Topbar = styled.div`
  position: absolute;
  left: 100;
  right: 0;
  z-index: 10;
`;
const SearchContainer = styled.div`
  max-width: 50px;
  margin: auto;
  padding-right: 10px;
`;
const InputSearch = styled.input`
  border: none;
  width: 0px;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  transition: all 0.5s ease;
  float: right;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:focus {
    width: 650px;
    outline: none;
    border: 1px solid #ccc;
    padding: 4px 40px;
    font-weight: bolder;
    letter-spacing: 0.5px;
  }
`;
export const NavBar = ({ handleLoginClick }) => {
  const searchInput = useRef(null);
  function handleFocus() {
    searchInput.current.focus();
  }

  const handleClick = () => {
    handleLoginClick();
  };

  return (
    <div>
      <Container>
        <Left>
          <LogoDiv>
            <Logo src="https://cdn.modesens.com/static/img/20190228newlogo-black.svg" />
          </LogoDiv>
          <MenuDiv>
            <MenuItemDiv>
              <Link to={"/women"}>
                <MenuItem>
                  WOMEN
                  <Dropdown>
                    <MenuInnerDiv>
                      <MenuItem>SHOP ALL</MenuItem>
                      <MenuItem>CLOTHING</MenuItem>
                      <MenuItem>BAGS</MenuItem>
                      <MenuItem>SHOES</MenuItem>
                      <MenuItem>ACCESSORIES</MenuItem>
                      <Link to={"/product"}>
                        <MenuItem>BEAUTY</MenuItem>
                      </Link>
                      <MenuItem>
                        <span style={{ color: "red" }}> SALE </span>
                      </MenuItem>
                      <MenuItem>PRE-OWNED</MenuItem>
                      <MenuItem>OCCASION</MenuItem>
                    </MenuInnerDiv>
                  </Dropdown>
                </MenuItem>
              </Link>
            </MenuItemDiv>
            <MenuItemDiv>
              <Link to={"/men"}>
                <MenuItem>
                  MEN
                  <Dropdown>
                    <MenuInnerDiv>
                      <MenuItem>SHOP ALL</MenuItem>
                      <MenuItem>CLOTHING</MenuItem>
                      <MenuItem>BAGS</MenuItem>
                      <MenuItem>SHOES</MenuItem>
                      <MenuItem>ACCESSORIES</MenuItem>
                      <MenuItem>BEAUTY</MenuItem>
                      <MenuItem>KIDS</MenuItem>
                      <MenuItem>GROOMING</MenuItem>
                      <MenuItem>
                        <span style={{ color: "red" }}> SALE </span>
                      </MenuItem>
                      <MenuItem>PRE-OWNED</MenuItem>
                      <MenuItem>OCCASION</MenuItem>
                    </MenuInnerDiv>
                  </Dropdown>
                </MenuItem>
              </Link>
            </MenuItemDiv>
            <MenuItemDiv>
              <Link to={"/products"}>
                <MenuItem>
                  BEAUTY
                  <Dropdown>
                    <MenuInnerDiv>
                      <MenuItem>SHOP ALL</MenuItem>
                      <MenuItem>WOMEN'S BEAUTY</MenuItem>
                      <MenuItem>MEN'S GROOMING</MenuItem>
                      <MenuItem>KID'S CARE</MenuItem>
                    </MenuInnerDiv>
                  </Dropdown>
                </MenuItem>
              </Link>
            </MenuItemDiv>
            <MenuItemDiv>
              <Link to={"/kid"}>
                <MenuItem>
                  KIDS
                  <Dropdown>
                    <MenuInnerDiv>
                      <MenuItem>SHOP ALL</MenuItem>
                      <MenuItem>BABY GIRLS</MenuItem>
                      <MenuItem>BABY BOYS</MenuItem>
                      <MenuItem>GIRLS</MenuItem>
                      <MenuItem>BOYS</MenuItem>
                      <MenuItem>
                        <span style={{ color: "red" }}> SALE </span>
                      </MenuItem>
                    </MenuInnerDiv>
                  </Dropdown>
                </MenuItem>
              </Link>
            </MenuItemDiv>
            <MenuItemDiv>
              <Link to={"/"}>
                <MenuItem>HOME</MenuItem>
              </Link>
            </MenuItemDiv>
            <MenuItemDiv>
              <MenuItem>
                OFFER
                <Dropdown>
                  <MenuInnerDiv>
                    <MenuItem>COUPONS</MenuItem>
                    <MenuItem>
                      <span style={{ color: "red" }}>WOMEN'S SALE </span>
                    </MenuItem>
                    <MenuItem>
                      <span style={{ color: "red" }}>MEN'S SALE </span>
                    </MenuItem>
                  </MenuInnerDiv>
                </Dropdown>
              </MenuItem>
            </MenuItemDiv>
            <MenuItemDiv>
              <MenuItem>DESIGNERS</MenuItem>
            </MenuItemDiv>
            <MenuItemDiv>
              <MenuItem>
                COMMUNITY
                <Dropdown>
                  <MenuInnerDiv>
                    <MenuItem>DISCOVER</MenuItem>
                    <MenuItem>MY CLOSET</MenuItem>
                    <MenuItem>EDITORIAL</MenuItem>
                    <MenuItem>INFLUENCER PROGRAM</MenuItem>
                    <MenuItem>STYLIST</MenuItem>
                  </MenuInnerDiv>
                </Dropdown>
              </MenuItem>
            </MenuItemDiv>
            <MenuItemDiv>
              <MenuItem>WHY MODESENS</MenuItem>
            </MenuItemDiv>
          </MenuDiv>
        </Left>
        <Right>
          <FlagDiv>
            <FlagImg src="https://img.icons8.com/color/48/000000/usa.png" />
          </FlagDiv>
          <ProfileDiv onClick={handleClick}>
            <ProfileImg src="https://cdn.modesens.com/static/img/20200612account_b2.svg" />
          </ProfileDiv>
          <Search onClick={handleFocus}>
            <SearchImg src="https://cdn.modesens.com/static/img/20191109search_b.svg" />
            <SearchText>SEARCH</SearchText>
          </Search>
        </Right>
        <Topbar>
          <SearchContainer>
            <InputSearch
              className="fontAwesome"
              ref={searchInput}
              type="text"
              placeholder="&#xF002; Search by keyword or store URL"
            />
          </SearchContainer>
        </Topbar>
      </Container>
    </div>
  );
};
