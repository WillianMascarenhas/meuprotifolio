import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { BoxFooter, Footer as FooterWrapper } from "./style";
import { UserImage } from "@/pages/home/style";
import { userData } from "@/utils/userData";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Button } from "@/styles/Buttons";
import { HomeContext } from "../../providers/homeProvider";
import { useContext } from "react";
// import { HandEffect } from "../HandEffect";

export const Footer = (): JSX.Element => {
  const { loading, setLoading } = useContext(HomeContext);
  return (
    <>
    {
      loading ? null :(
      <FooterWrapper id="social-media">
        <Container>
          <Flex>
            <UserImage
              src={`https://github.com/${userData.githubUser}.png`}
              alt={userData.nameUser}
              title={userData.nameUser}
              width={"70px"}
              height={"70px"}
            />
            <BoxFooter css={{ marginLeft: "$2" }}>
              <Text type="heading4" color="grey5" css={{ marginBottom: "$2" }}>
                Muito obrigado! {/* <HandEffect /> */}
              </Text>
              <Text type="body1" color="grey2" css={{ width: "50%" }}>
                Para qualquer informação a mais ou algum feedback, você pode
                entrar em contato também através das redes sociais!
              </Text>
            </BoxFooter>
          </Flex>
          <Flex
            css={{
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "$2",
            }}
          >
            <Button
              className="instagram"
              type="circle"
              as="a"
              target="_blank"
              href={`https://instagram.com/${userData.instagramUser}`}
            >
              <FaInstagram />
            </Button>
            <Button
              className="facebook"
              type="circle"
              as="a"
              target="_blank"
              href={`https://fb.com/${userData.facebookUser}`}
            >
              <FaFacebookF />
            </Button>
            <Button
              className="linkedin"
              type="circle"
              as="a"
              target="_blank"
              href={`https://linkedin.com/in/${userData.linkedinUser}`}
            >
              <FaLinkedinIn />
            </Button>
          </Flex>
        </Container>
      </FooterWrapper>
      )
    }
    </>
  );
};
