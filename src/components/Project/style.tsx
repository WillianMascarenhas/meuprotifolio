import { changeColorAnimation } from "@/pages/home/style";
import { styled } from "@stitches/react";

export const Projectslist = styled("ul", {
  display: "flex",
  listStyle: "none",
  gap: "3rem",
  width: "100%",
  marginTop: "4rem",
  flexWrap: "wrap",
  "& .card": {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    backgroundColor: "$grey1",
    border: "solid 1px transparent",
    borderRadius: "10px",
    transition: '0.4s ease-out',
    boxShadow: '0px 0px 13px 0px #ac9aed',
    WebkitBoxShadow: '0px 0px 6px 0px #ac9aed',
    MozBoxShadow: '0px 0px 6px 0px #ac9aed',
    color: "White",

    "& img": {
      alignSelf: "center",
      width: "95%",
      height: "40%",
      border: "solid 1px transparent",
      borderRadius: "10px",
      marginTop: "7px",
      marginBottom: "1rem",
      position: "relative",
    },
    "& .info_container": {
      width: "91%",
      display: "flex",
      flexDirection: "column",
      margin: "0 auto",
      marginTop: "7px",
      gap: "1rem",

      "& p":{
        fontSize: '0.8rem',
        color: '$grey2',
        height: "100px",
      }
    },
    "& .container_buttons": {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      gap: "10%",
      margin: "1rem 0rem 1.5rem 0rem",

      "& .div_button": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "0.5rem",
        "& span": {
          marginTop: "4px",
          fontSize: "1.3rem",
        },

        "& a": {
          color: "White",
        },

        "&:hover": {
          "& span": {
            animation: `${changeColorAnimation} 2s infinite alternate`,
          },
          "& a": {
            animation: `${changeColorAnimation} 2s infinite alternate`,
          },
        },
      },
    },
    "&:hover": {
      transform: 'translateY(-5%) scale(1.03)',
      boxShadow: '0px 0px 13px 0px #4717F6',
      WebkitBoxShadow: '0px 0px 23px 0px #4717F6',
      MozBoxShadow: '0px 0px 23px 0px #4717F6',
    },
  },
});
