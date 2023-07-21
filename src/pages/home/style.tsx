import { styled } from "@/styles/stitches.config";
import { Flex } from "@/styles/Global";
import { Button } from "@/styles/Buttons";
import { css } from "@stitches/react";
import {  keyframes } from "@stitches/react";

import meIlustration from "@/public/static/img/background/me-ilustration.svg";
import backgroundImg from "@/public/static/img/background/header-bg.svg";

import dots from "@/public/static/img/background/dots.svg";

export const Header = styled("header", {
  backgroundColor: "$grey1",
  // backgroundColor: "aqua",
  padding: "12rem 0 8rem 0",
  // backgroundImage: `url(${backgroundImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  backgroundAttachment: "fixed",
  borderBottom: "2px solid $grey5",
  "@tablet": {
    backgroundPosition: "right -10% center",
  },
  "@mobile": {
    padding: "9rem 0 6rem 0",
    backgroundImage: `none`,
  },
  "@mobileLittle": {
    padding: "9rem 0 0 0",
  },
});

export const HeaderContent = styled("div", {
  maxWidth: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "$2",
  "@tablet": {
    width: "100%",
    marginTop: "0rem",
  },
  "@mobile": {
    width: "100%",
    marginTop: "0rem",
  },
});

export const HeaderButtonsArea = styled(Flex, {

  [`& ${Button}`]: {
    marginRight: "$2",
    overflow: "hidden",
  },

  "@mobileButton": {
    [`& ${Button}`]: {
      marginRight: "$2",
      marginTop: "$3",
      overflow: "hidden",
      width: "100%",
    },

    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    gridGap: "$2",
    marginBottom: "$2",
  },
});

export const UserImage = styled("img", {
  borderRadius: "50%",
  
  "@mobile": {
    width: "19rem",
    height: "19rem",
    marginLeft: "-25px"
  },
});

export const LogoImage = styled("img", {
  borderRadius: "50%",
  "@mobile": {
    width: "4.25rem",
    height: "4.25rem",
  },
});

export const StackSection = styled("div", {
  backgroundColor: "$grey4",
  padding: "4rem 0 2rem 0",
});

export const StackCards = styled("div", {
  // display: "grid",
  // gridTemplateColumns: "1fr 1fr 1fr 1fr",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: "3.8rem 0",
  gap: "6rem",
  // marginTop: "10rem",

  "@tablet": {
    gridTemplateColumns: "1fr 1fr 1fr",
  },

  "@mobile": {
    gridTemplateColumns: "1fr 1fr",
  },

  "@mobileLittle": {
    display: "flex",
    overflow: "auto",
    margin: "0 -1rem",
    paddingInline: "1rem",
  },
});

export const AboutMeArea = styled("section", {
  height: "1000px",
  backgroundColor: "BurlyWood",
  marginTop: "12rem",
  marginBottom: "5rem",
  display: "flex",
  flexDirection: "column",
  alignItems:"center",

  "&div": {
    backgroundColor: "Black"
  }
});

export const ProjectsArea = styled("section", {
  padding: "$section 0",
  backgroundColor: "$grey0",
  backgroundImage: `url(${dots})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left top 11rem",
  "@tablet": {
    backgroundPosition: "right top 8rem",
    padding: "$sectionMobile 0",
  },
});

export const ProjectsAreaSocialMediaMessage = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",

  "@mobile": {
    width: "100%",
    position: "static",
    order: "2",
    marginTop: "5rem",
  },
});

export const ProjectsAreaContent = styled("div", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "4rem",
  "@mobile": {
    gridTemplateColumns: "1fr",
    overflow: "hidden",
  },
});

export const ProjectAreaWrapperColumns = styled("div", {
  position: "relative",
  alignItems: "flex-start",
  "@mobile": {
    flexDirection: "column",
  },
});


export const HeaderTextImg = styled("div", {
  display: "flex",
  gap: "4rem",
  "@mobile": {
    gap: "0",
    flexDirection: "column-reverse",
  },
});

export const HeaderText = styled("div", {
  width: "60%",
  display: "flex",
  flexDirection: "column",
  gap: "0.7rem",

  "@mobile": {
    marginTop:"5rem"
  },
});

export const HeaderImg = styled("div", {
  width: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems:"center",
  justifyContent:"center",
  marginTop: "-50px",
  marginBottom: "35px",
});

export const StackMargintop = styled("div", {
  marginTop: "17rem",
  "@mobile": {
    marginTop: "3rem",
  },
  "@tablet": {
    marginTop: "3rem",gridTemplateColumns: "1fr 1fr 1fr",
  },
});
export const Test = styled("div", {
  "@mobile": {
    height: "13rem",
  },
  "@ForText1": {
    height: "10rem",
  },
  "@ForText2": {
    height: "22rem",
  },
  "@ForText3": {
    height: "19rem",
  },
  "@ForText4": {
    height: "21rem",
  },
});


export const changeColorAnimation = keyframes({
  "0%": {
    color: "$brand2",
  },
  "25%": {
    color: "#5c1fec",
  },
  "50%": {
    color: "#7026e2",
  },
  "75%": {
    color: "#882fd6",
  },
  "100%": {
    color: "$brand1",
  },
});

export const changeBorderColorAnimation = keyframes({
  "0%": {
    borderColor: "$brand2",
  },
  "25%": {
    borderColor: "#5c1fec",
  },
  "50%": {
    borderColor: "#7026e2",
  },
  "75%": {
    borderColor: "#882fd6",
  },
  "100%": {
    borderColor: "$brand1",
  },
});

export const changeBackGroundColorAnimation = keyframes({
  "0%": {
    backgroundColor: "$brand2",
  },
  "25%": {
    backgroundColor: "#5c1fec",
  },
  "50%": {
    backgroundColor: "#7026e2",
  },
  "75%": {
    backgroundColor: "#882fd6",
  },
  "100%": {
    backgroundColor: "$brand1",
  },
});