import { styled } from "../../styles/stitches.config";
import { keyframes } from "@stitches/react";
import { Text } from "../../styles/Text";

export const scaleUp = keyframes({
  "0%": { transform: "translateY(15%) ", transition:"0.3s", },
  "100%": { transform: "translateY(140%)", transition:"0.3s", },
});

export const StackCard = styled("li", {
  borderRadius: "$1",
  background: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  border: "solid 1px $grey2",
  padding: "7px",

  [`& ${Text}`]: {
    opacity: 0,
    position: "absolute",
    transform: "translateY(15%)",
    background: "$grey0",
    boxShadow: "drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.12))",
    padding: "0.4rem 1rem",
    borderRadius: "$1",
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: "500",
    whiteSpace: "nowrap",
    color: "$grey5",
    transition:"0.4s",
    zIndex: "10",

    "&:before": {
      // content: "",
      // zIndex: "-1",
      // bottom: "-5px",
      // position: "absolute",
      // width: 0,
      // height: 0,
      // borderLeft: "25px solid transparent",
      // borderRight: "25px solid transparent",
      // borderTop: "25px solid $whiteFixed",
      // transform: "translateX(-50%)",
      // left: "50%",
    },
  },

  "&:hover": {
    [`& ${Text}`]: {
      opacity: 1,
      top: 0,
      transform: "translateY(140%)",
      animation: `${scaleUp} 200ms`,
    },
  },
});
