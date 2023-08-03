import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { Projectslist } from "./style";

export const Project = (): JSX.Element => {
  return (
    <>
      <Projectslist>
        <li className="card">
          <img className="img_container" src="https://florencioo.vercel.app/_next/image?url=%2Fimages%2Fhabitum.png&w=256&q=75" alt=""  />
          <div className="info_container">

          <h2>Nome do projeto</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          </p>
          <div className="container_buttons">
            <div className="div_button">
              <span><FaGithub/></span>
              <a target="_blank" href="">Repositório</a>
            </div>
            <div className="div_button">
              <span><FaShare/></span>
              <a target="_blank" href="">Visualizar</a>
            </div>
          </div>
          </div>
        </li>
        <li className="card">
          <img className="img_container" src="https://florencioo.vercel.app/_next/image?url=%2Fimages%2Fhabitum.png&w=256&q=75" alt="" />
          <div className="info_container">

          <h2>Nome do projeto</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          </p>
          <div className="container_buttons">
            <div className="div_button">
              <span><FaGithub/></span>
              <a target="_blank" href="">Repositório</a>
            </div>
            <div className="div_button">
              <span><FaShare/></span>
              <a target="_blank" href="">Visualizar</a>
            </div>
          </div>
          </div>
        </li>
        <li className="card">
          <img className="img_container" src="https://florencioo.vercel.app/_next/image?url=%2Fimages%2Fhabitum.png&w=256&q=75" alt="" />
          <div className="info_container">

          <h2>Nome do projeto</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          </p>
          <div className="container_buttons">
            <div className="div_button">
              <span><FaGithub/></span>
              <a target="_blank" href="">Repositório</a>
            </div>
            <div className="div_button">
              <span><FaShare/></span>
              <a target="_blank" href="">Visualizar</a>
            </div>
          </div>
          </div>
        </li>
      </Projectslist>
    </>
  );
};
