import { useState } from "react";
import useMedia from "use-media";
import { userData } from "@/utils/userData";

import {
  Navbar as NavbarWrapper,
  LogoTipo,
  LogoTipoText,
  NavbarLinks,
  NavbarMobileArea,
} from "./style";

import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Button, Link } from "@/styles/Buttons";
import { Container, Flex } from "@/styles/Global";
import { LogoImage } from "@/pages/home/style";

import ImgSite from "../../public/static/img/favicon/Design_sem_nome__3_-removebg-preview.png"

export interface MenuButtonOpen {
  open: Boolean;
  setOpen: (value: Boolean) => void;
}

export const NavBar = (): JSX.Element => {

  const isWide = useMedia({ maxWidth: "991px" });

  document.title = userData.nameUser;

  const [open, setOpen] = useState(false);

  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <NavbarWrapper>
      <Container>
        <NavbarMobileArea>
          <LogoTipo>
            {/* <LogoTipoText>{userData.nameUser}</LogoTipoText> */}
            <LogoImage
                      src={ImgSite}
                      alt="Logo do site"
                      title="Portfólio de Willian Mascarenhas"
                      width={"80px"}
                      height={"70px"}
                    />
          </LogoTipo>
          {isWide && (
            <Button
              type="icon"
              onClick={OpenMenu}
              aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
            >
              {!open ? <FaBars /> : <IoClose />}
            </Button>
          )}
        </NavbarMobileArea>
        <Flex>
          {isWide ? open && <NavLinks /> : <NavLinks />}
        </Flex>
      </Container>
    </NavbarWrapper>
  );
};

export const NavLinks = (): JSX.Element => {
  return (
    <NavbarLinks>
      <Link type="btLink" as="a" color="grey4" href={`#home`}>
        Home
      </Link>
      <Link type="btLink" as="a" color="grey4" href={`#projects`}>
        Projetos
      </Link>
      <Link type="btLink" as="a" color="grey4" href={`#contact`}>
        Contato
      </Link>
      <Link type="btLink" as="a" color="grey4" href={`#social-media`}>
        Redes Sociais
      </Link>
    </NavbarLinks>
  );
};
