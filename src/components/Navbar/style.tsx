import { styled } from "@/styles/stitches.config";
import { Flex, Container } from "@/styles/Global";
import { Button } from "@/styles/Buttons";

export const Navbar = styled("nav", {
  background: "$greyRGB",
  borderBottom: "2px solid $brand1",
  position: "fixed",
  inset: 0,
  bottom: "auto",
  padding: "1rem 0",
  width: "100%",
  zIndex: "99999",

  [`& ${Container}`]: {
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
    "@mobile": {
      flexDirection: "column",
    },
  },
});

export const LogoTipo = styled(Flex, {
  alignItems: "center",
});

export const LogoTipoText = styled("span", {
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "$grey4",
  fontFamily: '"IBM Plex Sans"',
  "@mobile": {
    fontSize: "1rem",
  },
});

export const NavbarLinks = styled(Flex, {
  "a": {
    fontFamily: "inherit",
    fontWeight: 800,
    textDecoration: "none",
    cursor: "pointer",
    position: "relative",
    border: "none",
    background: "none",
    transitionTimingFunction: "cubic-bezier(0.25, 0.8, 0.25, 1)",
    transitionDuration: "400ms",
    transitionProperty: "color",
    "&:focus, &:hover": {
      color: "$brand1",
      "&:after": {
        width: "100%",
        left: "0%",
      },
    },
    "&:after": {
      content: '""',
      pointerEvents: "none",
      bottom: "-2px",
      left: "50%",
      position: "absolute",
      width: "0%",
      height: "2px",
      backgroundColor: "$brand1",
      transitionTimingFunction: "cubic-bezier(0.25, 0.8, 0.25, 1)",
      transitionDuration: "400ms",
      transitionProperty: "width, left",
    },
  },
  "@mobile": {
    marginTop: "$3",
    flexDirection: "column",
    alignItems: "flex-start",
    "& a": {
      width: "100%",
      justifyContent: "flex-start",
      paddingLeft: 0,
    },
  },
});

export const NavbarMobileArea = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});