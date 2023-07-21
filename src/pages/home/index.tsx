// Styles
import { Container, Flex } from "@/styles/Global";
import { Text, TextSpan } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
  HeaderText,
  StackMargintop,
  HeaderTextImg,
  HeaderImg,
  Test,
  AboutMeArea,
  changeColorAnimation,
  changeBackGroundColorAnimation,
  AboutMeConatiner,
  changeBorderColorAnimation,
} from "./style";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { MouseParallax, ScrollParallax } from "react-just-parallax";

import myPhoto from "../../public/static/img/profile/PortfolioImg-removebg-preview-new.png";
import myPhoto2 from "../../public/static/img/profile/Untitled Project_clipdrop-background-removal_clipdrop-enhance.png";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/meuprotifolio`;

  const textAnimated = useRef(null);
  useEffect(() => {
    const typed = new Typed(textAnimated.current, {
      strings: ["criar", "desenvolver", "participar de", "ajudar em"],
      // strings: ["participar de"],
      typeSpeed: 130,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <HeaderTextImg>
                <HeaderText>
                  <Text as="h2" type="heading3" color="grey5">
                    Olá, seja bem vindo!
                  </Text>
                  <Test>
                    <Text as="h1" type="heading2" color="grey5">
                      Sou um desenvolvedor Web Fullstack que ama{" "}
                      <div>
                        <TextSpan
                          ref={textAnimated}
                          as="span"
                          type="heading2"
                          color="brand1"
                          css={{
                            animation: `${changeColorAnimation} 2s infinite alternate`,
                          }}
                        />{" "}
                        novos projetos
                      </div>
                    </Text>
                  </Test>
                  <Text css={{ marginTop: "20px" }} type="body1" color="grey2">
                    Descubra aqui, neste ambiente criado especialmente para
                    você, com alguns dos meus projetos e as stacks com as quais
                    sou familiarizado.
                  </Text>
                </HeaderText>
                <HeaderImg>
                  {/* <MouseParallax> */}
                  <ScrollParallax>
                    <UserImage
                      src={myPhoto}
                      alt={userData.nameUser}
                      title={userData.nameUser}
                      width={"350px"}
                      height={"350px"}
                    />
                    <Text
                      as="h2"
                      css={{
                        marginLeft: "120px",
                        marginTop: "-40px",
                        width: "100%",
                        "@mobile": {
                          width: "284%",
                          marginLeft: "55px",
                          marginTop: "-45px",
                        },
                      }}
                      color="grey4"
                    >
                      {userData.nameUser}
                    </Text>
                  </ScrollParallax>
                  {/* </MouseParallax> */}
                </HeaderImg>
              </HeaderTextImg>
            </Flex>
            <HeaderButtonsArea>
              <Button
                as="a"
                type="primary"
                href="#projects"
                css={{ height: "3rem" }}
              >
                Ver projetos
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                Ver portifólio
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{
                  "&:hover": {
                    color: "$grey1",
                    animation: `${changeBackGroundColorAnimation} 1s infinite alternate`,
                    border: "none",
                    transition: "0.4s",
                  },
                  width: "3rem",
                  height: "3rem",
                }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <AboutMeArea id="about_me">
              <Text
                as="h2"
                type="heading3"
                color="grey5"
                css={{
                  marginTop: "125px",
                }}
              >
                Um pouco sobre mim
              </Text>
              <AboutMeConatiner>
                <div className="image_container">
                  <MouseParallax strength={0.05}>
                    <UserImage
                      src={myPhoto2}
                      alt={userData.nameUser}
                      title={userData.nameUser}
                      width={"450px"}
                      height={"450px"}
                      css={{}}
                    />
                  </MouseParallax>
                </div>
                <div className="text_container">
                  <Text
                    as="span"
                    type="body1"
                    color="grey5"
                    css={{
                      marginTop: "-105px",
                      border: "solid 3px",
                      animation: `${changeBorderColorAnimation} 2s infinite alternate`,
                      borderRadius: "20px",
                      padding: "2rem 2rem"
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    asperiores explicabo, voluptates aliquid perferendis
                    voluptatibus magnam esse in corporis, necessitatibus nobis,
                    earum iure? Esse veritatis voluptates minima soluta at
                    voluptatum?
                  </Text>
                </div>
              </AboutMeConatiner>
            </AboutMeArea>
            <StackMargintop>
              <Text as="h2" type="heading3" color="grey4">
                Minhas Stacks:
              </Text>
              <StackCards>
                {stackData.map((stack, index) => (
                  <Stack key={index} title={stack.title} icon={stack.img} />
                ))}
              </StackCards>
            </StackMargintop>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meu projetos:
              </Text>
              <Text as="p" type="body1" color="grey2">
                Alguns dos meus projetos{" "}
                {/* <Text as="span" color="brand1">
                  side projects
                </Text> */}
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
