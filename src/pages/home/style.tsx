import { styled } from "@/styles/stitches.config";
import { Flex } from "@/styles/Global";
import { Button } from "@/styles/Buttons";
import {  keyframes } from "@stitches/react";

import dots from "@/public/static/img/background/dots.svg";

const bounceAnimation = keyframes({
  '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
  '40%': { transform: 'translateY(-30px)' },
  '60%': { transform: 'translateY(-15px)' },
});

export const Header = styled("header", {
  backgroundColor: "$grey1",
  padding: "11rem 0 5rem 0",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  backgroundAttachment: "fixed",
  borderBottom: "2px solid $grey5",

  "& .arrow":{
    textAlign: 'center',
    marginTop: '8%',
    "@mobile": {
      marginTop: '20%',
    },

    "& span":{
      color: "$brand1"
    }
  },

  "& .bounce":{
    animation: `${bounceAnimation} 2s infinite `,
  },

  "@tablet": {
    backgroundPosition: "right -10% center",
  },
  "@mobile": {
    padding: "9rem 0 2rem 0",
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
  gap:"1rem",

  "@mobile": {
    gap:"1rem",
    marginTop: "$3",
  },
  [`& ${Button}`]: {
    overflow: "hidden",
  },

  "@mobileButton": {
    [`& ${Button}`]: {
      marginTop: "$2",
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
    width: "90%",
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

import BackGroundImg1 from "../../public/static/img/background/low-poly-grid-haikei1.png";
import BackGroundImg2 from "../../public/static/img/background/low-poly-grid-haikei2.png";
import BackGroundImg3 from "../../public/static/img/background/low-poly-grid-haikei3.png";

// const animatedBackground = keyframes({
//   "0%": {
//     backgroundImage: `url(${BackGroundImg})`,
//     backgroundPosition: "0 0",
//   },
//   "25%": {
//     backgroundImage: `url(${BackGroundImg1})`,
//     backgroundPosition: "25% 0",
//   },
//   "50%": {
//     backgroundImage: `url(${BackGroundImg2})`,
//     backgroundPosition: "50% 0",
//   },
//   "75%": {
//     backgroundImage: `url(${BackGroundImg3})`,
//     backgroundPosition: "75% 0",
//   },
//   "100%": {
//     backgroundImage: `url(${BackGroundImg})`,
//     backgroundPosition: "100% 0",
//   },

// });

function getRandomValue(min:number, max:number) {
  return Math.random() * (max - min) + min;
}

const animatedBackground = keyframes({
  "0%": {
    backgroundImage: `url(${BackGroundImg3})`,
    backgroundPosition: `${getRandomValue(0, 10)}% ${getRandomValue(0, 10)}%`,
  },
  "50%": {
    backgroundImage: `url(${BackGroundImg2})`,
    backgroundPosition: `${getRandomValue(0, 10)}% ${getRandomValue(0, 10)}%`,
  },
  "100%": {
    backgroundImage: `url(${BackGroundImg3})`,
    backgroundPosition: `${getRandomValue(0, 10)}% ${getRandomValue(0, 10)}%`,
  },
});

export const BackGroundImgDiv = styled("div", {

  backgroundPosition: "0px 0px",
  backgroundSize: "200px 200px",
  animation: `${animatedBackground} 15s linear infinite alternate`,
  animationFillMode: "forwards",
});

export const AboutMeArea = styled('section', {
  position:"relative",
  marginBottom: '-3.55rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent:"center",
  alignItems: "center",

  ["& .container"]:{
    display: "flex",
    flexDirection: "column",
    width: "95%",
    color:"Aqua"
  }
});


export const AboutMeConatiner = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  gap: "10%",
  width: "90%",
  marginTop: "60px",
  "@mobile": {
    alignSelf: "flex-start",
    width: "90%",
    flexDirection:"column",
    gap:"5rem",
  },

  ["& .image_container"]:{
    width: "30%",
  },

  ["& .text_container"]:{
    width: "60%",
    display: "flex",
    alignItems:"center",
    "@mobile": {
      width: "100%",
    },
  }
});

export const StackSection = styled("div", {
  backgroundColor: "$grey4",
  padding: "4rem 0 2rem 0",
});

// export const StackCards = styled("div", {
//   display: "flex",
//   flexWrap: "wrap",
//   justifyContent: "center",
//   padding: "3.8rem 0",
//   gap: "6rem",

//   "@tablet": {
//     gridTemplateColumns: "1fr 1fr 1fr",
//   },

//   "@mobile": {
//     gridTemplateColumns: "1fr 1fr",
//   },

//   "@mobileLittle": {
//     display: "flex",
//     overflow: "auto",
//     margin: "0 -1rem",
//     paddingInline: "1rem",
//   },
// });

export const StackMargintop = styled("div", {
  marginBottom: "-18rem",
  position:"relative",
  display: "flex",
  justifyContent:"center",
  padding: "120px 0px",

  ["& .container"]:{
    display:"flex",
    flexDirection: "row",
    gap:"1rem",
    width: "80%",

    "@mobile": {
      flexDirection:"column",
      gap:"5rem"
    },

    ["& div"]:{
      width:"60%",
      "@mobile": {
        width:"100%",
      },
    },

    ["& img"]:{
      width:"45%",
      transform: "scaleX(-1)",
      "@mobile": {
        alignSelf:"center",
        width:"50%"
      },
    }
  }
});
export const StackList = styled("ul", {
  display:"flex",
  flexDirection: "column",
  gap:"3rem",

  ["& div"]:{
    display:"flex",
    flexDirection: "column",
    gap: "1.5rem",

    ["& ul"]:{
      display:"flex",
      flexWrap: "wrap",
      flexDirection: "row",
      gap:"1.5rem"
    }
  }
});

export const ProjectsArea = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems:"center",
  marginTop: "8rem",
  padding: "$section 0",
  backgroundImage: `url(${dots})`,
  backgroundRepeat: "repeat-x",
  backgroundPosition: "left top 11rem",
  ["& hr"]:{  
    width:"100%",
},
  ["& .containerProjects"]:{  
    width:"80%",
},

  "@tablet": {
    backgroundPosition: "right top 8rem",
    padding: "$sectionMobile 0",
    marginTop: "14rem",
  },

});


export const ProjectsAreaContent = styled("div", {

  // width: "100%",
  // display: "grid",
  // gridTemplateColumns: "repeat(2, 1fr)",
  // gridGap: "4rem",
  // "@mobile": {
  //   gridTemplateColumns: "1fr",
  //   overflow: "hidden",
  // },
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

export const Test = styled("div", {
  "@mobile": {
    height: "10rem",
  },
  "@ForText1": {
    height: "11rem",
  },
  "@ForText2": {
    height: "12rem",
  },
  "@ForText3": {
    height: "12rem",
  },
  "@ForText4": {
    height: "15rem",
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
