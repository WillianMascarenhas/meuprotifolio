import { Text } from "@/styles/Text";
import { Circle, MainContainer, Shadow, Wrapper } from "./style";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Loading = () => {
  useEffect(() =>{
    AOS.init({
      duration: 10,
      easing: "ease-in-out-back",
    });
  },[])
  return (
    <MainContainer data-aos="zoom-out">
      <Wrapper>
        <Circle className="circle" css={{ left: "15%" }} />
        <Circle
          className="circle"
          css={{ left: "45%", animationDelay: "0.2s"}}
        />
        <Circle
          className="circle"
          css={{ right: "15%", animationDelay: "0.3s" }}
        />
        <Shadow className="shadow" css={{ left: "15%" }} />
        <Shadow
          className="shadow"
          css={{ left: "45%", animationDelay: "0.2s" }}
        />
        <Shadow
          className="shadow"
          css={{ right: "15%", animationDelay: "0.3s" }}
        />
      </Wrapper>
      {/* <Text as="h2" type="heading3" color="grey5" css={{marginTop:"25px"}}>Carregando</Text> */}
    </MainContainer>
  );
};
