// Styles
import { Container, Flex } from "@/styles/Global";
import { Text, TextSpan } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { BackData, DBData, FrontData, PlusData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";
import { BsArrowDownShort } from "react-icons/bs";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  // StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
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
  BackGroundImgDiv,
  StackList,
} from "./style";

import { useEffect, useRef, useContext, MouseEvent } from "react";
import Typed from "typed.js";
import { MouseParallax, ScrollParallax } from "react-just-parallax";

import gifTest from "../../public/static/img/background/developer-activity-animate.svg";

import myPhoto from "../../public/static/img/profile/PortfolioImg-removebg-preview-new.png";
import myPhoto2 from "../../public/static/img/profile/Untitled Project_clipdrop-background-removal-new.png";
import { Loading } from "@/components/Loading";
import { HomeContext } from "../../providers/homeProvider";

import BackGroundtop from "../../public/static/img/background/wave.png";
import BackGroundBottom from "../../public/static/img/background/wave (1).png";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/meuprotifolio`;

  const { loading, setLoading } = useContext(HomeContext);

  const textAnimated = useRef(null);

  useEffect(() => {
    if (!loading) {
      const typedOptions = {
        strings: ["criar", "desenvolver", "participar de", "ajudar em"],
        typeSpeed: 130,
        backSpeed: 100,
        loop: true,
      };

      const typed = new Typed(textAnimated.current, typedOptions);
      return () => {
        typed.destroy();
      };
    }

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading, setLoading]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main id="home">
          <Header
            css={{
              background:
                "rgb(32,10,41) radial-gradient(circle, rgba(32,10,41,1) 0%, rgba(18,8,57,1) 100%)",
            }}
          >
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
                      <Text
                        css={{ marginTop: "20px" }}
                        type="body1"
                        color="grey2"
                      >
                        Descubra aqui, neste ambiente criado especialmente para
                        você, com alguns dos meus projetos e as stacks com as
                        quais sou familiarizado.
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
                          css={{
                            "@mobile": {
                              width: "350px",
                              height: "350px",
                              marginLeft: "-25px",
                            },
                          }}
                        />
                        <Text
                          as="h2"
                          css={{
                            marginLeft: "120px",
                            marginTop: "-40px",
                            width: "100%",
                            "@mobile": {
                              width: "284%",
                              marginLeft: "80px",
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
                  <Button
                    as="a"
                    type="outline"
                    target="_blank"
                    href={portfolioUrl}
                  >
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
              </HeaderContent>
            </Container>
            <div className="arrow bounce">
              <a href="#stack">
                <BsArrowDownShort fontSize={"2.6rem"} color="white" />
              </a>
            </div>
          </Header>
          <BackGroundImgDiv>
            {/* <AboutMeArea id="about_me">
              <div className="container">
                <Text
                  as="h2"
                  type="heading3"
                  color="grey5"
                  css={{
                    marginTop: "125px",
                    maxWidth: "20rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "54px",
                    marginBottom:"74px"
                  }}
                >
                  Um pouco sobre mim
                </Text>

                <AboutMeConatiner>
                  <div className="text_container">
                    <Text
                      as="span"
                      type="body1"
                      color="grey5"
                      css={{
                        marginTop: "-105px",
                        border: "solid 2px",
                        animation: `${changeBorderColorAnimation} 2s infinite alternate`,
                        borderRadius: "20px",
                        padding: "2rem 2rem",
                      }}
                    >
                      {" "}
                      Prazer, me chamo Willian! Sou baiano, tenho 22 anos e
                      acabei de me formar como Desenvolvedor Full Stack pela
                      Kenzie Academy. Iniciei o meu caminho com a formação em
                      engenharia civil na Universidade Federal da Bahia, mas o
                      que busco é seguir uma jornada profissional na área de
                      tecnologia. Assim, mesmo já tendo adquirido uma base
                      sólida de HTML, CSS, JavaScript, Typescript Node.js,
                      Python e frameworks como React, Django e bibliotecas,
                      busco seguir a minha jornada de aprendizado em ciência da
                      computação e sempre me atualizando através de cursos
                      licenciados. Me considero uma pessoa flexível, disposta e
                      determinada, e estou ansioso para encontrar uma
                      oportunidade para expandir e iniciar a minha jornada
                      profissional.
                    </Text>
                  </div>
                </AboutMeConatiner>
              </div>
            </AboutMeArea> */}

            <StackMargintop id="stack">
              {/* <Container></Container> */}
              <div className="container">
                <div>
                  <Text
                    as="h2"
                    type="heading3"
                    color="grey4"
                    css={{ marginBottom: "3rem" }}
                  >
                    Minhas Stacks:
                  </Text>
                  <StackList>
                    <div>
                      <Text as="h3" type="heading4" color="grey4">
                        Front
                      </Text>
                      <ul>
                        {FrontData.map((stack, index) => (
                          <Stack
                            key={index}
                            title={stack.title}
                            icon={stack.img}
                          />
                        ))}
                      </ul>
                    </div>
                    <div>
                      <Text as="h3" type="heading4" color="grey4">
                        Back
                      </Text>
                      <ul>
                        {BackData.map((stack, index) => (
                          <Stack
                            key={index}
                            title={stack.title}
                            icon={stack.img}
                          />
                        ))}
                      </ul>
                    </div>
                    <div>
                      <Text as="h3" type="heading4" color="grey4">
                        Banco de Dados
                      </Text>
                      <ul>
                        {DBData.map((stack, index) => (
                          <Stack
                            key={index}
                            title={stack.title}
                            icon={stack.img}
                          />
                        ))}
                      </ul>
                    </div>
                    <div>
                      <Text as="h3" type="heading4" color="grey4">
                        Ferramentas
                      </Text>
                      <ul>
                        {PlusData.map((stack, index) => (
                          <Stack
                            key={index}
                            title={stack.title}
                            icon={stack.img}
                          />
                        ))}
                      </ul>
                    </div>
                  </StackList>
                </div>
                <img src={gifTest} alt="" />
                {/* <StackCards>
                </StackCards> */}
              </div>
            </StackMargintop>
          </BackGroundImgDiv>

          <ProjectsArea id="projects">
            <hr />
            <div className="containerProjects">
              <ProjectsAreaSocialMediaMessage>
                <Text
                  as="h2"
                  type="heading4"
                  color="grey4"
                  css={{ marginTop: "7rem" }}
                >
                  Principais Projetos:
                </Text>
              </ProjectsAreaSocialMediaMessage>
              <ProjectsAreaContent>
                <Project />
              </ProjectsAreaContent>
            </div>
          </ProjectsArea>
          <Contacts />
        </main>
      )}
    </>
  );
};
