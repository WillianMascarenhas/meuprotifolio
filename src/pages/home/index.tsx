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
} from "./style";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/meuprotifolio`;

  const textAnimated = useRef(null);
  useEffect(() => {
    const typed = new Typed(textAnimated.current, {
      strings: [
        // 'Eu sou um desenvolvedor Web que, ama <span ref={textAnimatedSpan} class="name"></span> novos projetos',
        // `Me chamo <span class="name">${userData.nameUser}</span>.`
        "criar",
        "desenvolver",
        "participar de",
        "ajudar em"
      ],
      typeSpeed: 70,
      backSpeed: 60,
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
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">Ola, meu nome é {userData.nameUser}</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              Sou um desenvolvedor Web que ama{" "}
              <div>
                <TextSpan
                  ref={textAnimated}
                  as="span"
                  type="heading2"
                  color="brand1"
                />{" "}
              novos projetos
              </div>
            </Text>
            <Text type="body1" color="grey2">
              Discover here in this environment, created especially for you, all
              my projects and technologies
            </Text>
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
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
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
