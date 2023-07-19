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
} from "./style";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { MouseParallax, ScrollParallax } from "react-just-parallax";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/meuprotifolio`;

  const textAnimated = useRef(null);
  useEffect(() => {
    const typed = new Typed(textAnimated.current, {
      strings: ["criar", "desenvolver", "participar de", "ajudar em"],
      typeSpeed: 80,
      backSpeed: 75,
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
                    Olá seja bem vindo!
                  </Text>
                  <Text as="h1" type="heading2" color="grey5">
                    Sou um desenvolvedor Web Fullstack que ama{" "}
                    <div>
                      <TextSpan
                        ref={textAnimated}
                        as="span"
                        type="heading2"
                        color="brand1"
                        css={{ "&:hover": { color: "$brand2", transition: "0.4s", } }}
                      />{" "}
                      novos projetos
                    </div>
                  </Text>
                  <Text css={{ marginTop: "20px" }} type="body1" color="grey2">
                    Descubra aqui, neste ambiente criado especialmente para
                    você, alguns dos meus projetos e as stacks com as quais sou
                    familiarizado.
                  </Text>
                </HeaderText>
                <HeaderImg>
                  <ScrollParallax>
                    <UserImage
                      src={`https://github.com/${userData.githubUser}.png`}
                      alt={userData.nameUser}
                      title={userData.nameUser}
                      width={"200px"}
                      height={"200px"}
                    />
                    <Text
                      as="h2"
                      css={{ marginLeft: "22px",marginTop: "10px", width: "100%" }}
                      color="grey4"
                    >
                      {userData.nameUser}
                    </Text>
                  </ScrollParallax>
                </HeaderImg>
              </HeaderTextImg>
            </Flex>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Ver projetos
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                Ver portifólio
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
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
