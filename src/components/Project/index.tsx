import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { Projectslist } from "./style";

import FastCommerce from "../../public/static/img/projects/hamburgueria.png";
import DestinosKenzie from "../../public/static/img/projects/destinos-kenzie.png";

export const Project = (): JSX.Element => {
  return (
    <>
      <Projectslist>
        <li className="card">
          <img
            className="img_container"
            src={DestinosKenzie}
            alt="Imagem do projeto"
          />
          <div className="info_container">
            <h2>Destinos Kenzier</h2>
            <p>
              Projeto de rede social para viajantes, onde podem compartilhar
              experiências em cidades visitadas, oferecendo feedbacks valiosos
              para outros usuários interessados em ir para esses lugares.
            </p>
            <div className="container_buttons">
              <div className="div_button">
                <span>
                  <FaGithub />
                </span>
                <a target="_blank" href="https://github.com/M3-Projeto-Final-Grupo-2/projeto-final-m3/tree/main">
                  Repositório
                </a>
              </div>
              <div className="div_button">
                <span>
                  <FaShare />
                </span>
                <a target="_blank" href="https://projeto-final-m3-seven.vercel.app/">
                  Visualizar
                </a>
              </div>
            </div>
          </div>
        </li>

        <li className="card">
          <img
            className="img_container"
            src={FastCommerce}
            alt="Imagem do Projeto"
          />
          <div className="info_container">
            <h2>FastCommerce</h2>
            <p>
              Site baseado em um e-commerce, especialmente desenvolvido para
              atender ao setor de fast food.
            </p>
            <div className="container_buttons">
              <div className="div_button">
                <span>
                  <FaGithub />
                </span>
                <a
                  target="_blank"
                  href="https://github.com/WillianMascarenhas/FastCommerce"
                >
                  Repositório
                </a>
              </div>
              <div className="div_button">
                <span>
                  <FaShare />
                </span>
                <a target="_blank" href="https://fastcommerce.vercel.app/">
                  Visualizar
                </a>
              </div>
            </div>
          </div>
        </li>

        {/* <li className="card">
          <img
            className="img_container"
            src="https://florencioo.vercel.app/_next/image?url=%2Fimages%2Fhabitum.png&w=256&q=75"
            alt=""
          />
          <div className="info_container">
            <h2>Nome do projeto</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            </p>
            <div className="container_buttons">
              <div className="div_button">
                <span>
                  <FaGithub />
                </span>
                <a target="_blank" href="">
                  Repositório
                </a>
              </div>
              <div className="div_button">
                <span>
                  <FaShare />
                </span>
                <a target="_blank" href="">
                  Visualizar
                </a>
              </div>
            </div>
          </div>
        </li> */}
      </Projectslist>
    </>
  );
};
