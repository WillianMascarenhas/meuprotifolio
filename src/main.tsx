import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "@/styles/Global";
import { Home } from "@/pages/home";
import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HomeProvider } from "./providers/homeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle>
      <HomeProvider>
      <NavBar />
        <Home />
        <Footer />
      </HomeProvider>
    </GlobalStyle>
  </React.StrictMode>
);
