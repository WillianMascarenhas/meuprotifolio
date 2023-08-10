import { createTheme, globalCss, styled } from "@stitches/react";
import { ReactNode } from "react";

interface GlobalStyleProps {
  children: ReactNode;
}

export const Container = styled("div", {
  maxWidth: "$container",
  margin: "0 auto",
  padding: "0 1rem",

  "@tablet": {
    maxWidth: "$containerTablet",
  },
});

export const Flex = styled("div", {
  display: "flex",
  gap: "$1",
  alignItems: "center",
});

export const Box = styled("div", {
  maxWidth: "100%",
});

export const colors = {
  color: {
    brand1: {
      color: "$brand1",
    },
    brand2: {
      color: "$brand2",
    },
    brand3: {
      color: "$brand3",
    },
    brand5: {
      color: "$brand5",
    },
    brand7: {
      color: "$brand5",
    },
    grey1: {
      color: "$grey1",
    },

    grey2: {
      color: "$grey2",
    },

    grey3: {
      color: "$grey3",
    },

    grey4: {
      color: "$grey4",
    },

    grey5: {
      color: "$grey5",
    },
    grey6: {
      color: "$grey6",
    },
  },
};

export const globalStyles = globalCss({
  "body":{
    background:
    "rgb(32,10,41) radial-gradient(circle, rgba(32,10,41,1) 0%, rgba(18,8,57,1) 100%)",
    overflowX:"clip"
  },
  "*": {
    margin: 0,
    padding: 0,
    // fontFamily: "'Inter', sans-serif",
    fontFamily: "'Poppins', sans-serif",
    boxSizing: "border-box",
    
    "&":{
      scrollbarWidth: "7px",
      scrollbarColor: "#261d3a #0E0B16"
    },
    "&::-webkit-scrollbar" :{
      width: "7px"
    },
    "&::-webkit-scrollbar-track" :{
      backgroundColor: "#0E0B16"
    },
    "&::-webkit-scrollbar-thumb" :{
      backgroundColor: "#261d3a",
      borderRadius: "10px",
    },
    
  },
  html: {
    scrollBehavior: "smooth",
  },
  a: { textDecoration: "none" },
});

export const GlobalStyle = ({ children }: GlobalStyleProps): JSX.Element => {

  const theme = createTheme({
    colors: {
      brand1: "#A239CA",
      brand2: "#4717F6",

      greyRGB: "#0e0b16f1",
      grey0: "#0E0B16",
      grey1: "#0a0a10",
      grey2: "#868E96",
      grey3: "#E9ECEF",
      grey4: "#F8F9FA",
      grey5: "#F8F9FA",

      socialInstagram: "#CF50AC",
      socialFacebook: "#506CCF",
      socialLinkedin: "#0E76A8",

      whiteFixed: "#E7DFDD",
      mode: "#E7DFDD",
    },
    sizes: {
      container: "75rem",
      containerTablet: "40rem",
    },
    space: {
      1: "0.5rem",
      2: "1rem",
      3: "2rem",
      4: "3rem",
      5: "4rem",
      section: "10rem",
      sectionMobile: "4rem",
    },
    fonts: {
      titles: '"IBM Plex Sans", sans-serif;',
      texts: '"Inter", sans-serif',
    },
    fontSizes: {
      title1: "2.75rem",
      title2: "1.75rem",
      title3: "1.50rem",
      title4: "1.25rem",
      text1: "1rem",
      text2: "0.875rem",

      // Mobile
      title1Mobile: "$title2",
      title2Mobile: "$title3",
    },
    lineHeights: {
      title1: "3.8rem",
      title2: "2.75rem",
      title3: "2.5rem",
      title4: "1.25rem",
      text1: "1.75rem",
      text2: "1.75rem",

      // Mobile
      title1Mobile: "$title2",
      title2Mobile: "$title3",
    },

    radii: {
      1: "0.5rem",
      2: "0.25rem",
    },
  });

  globalStyles();

  const App = styled("div", {
    minHeight: "100vh",
  });

  return <App className={theme}>{children}</App>;
};
