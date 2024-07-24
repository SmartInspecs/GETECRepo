import React from "react";
import { CardWrapper } from "./style";

// {
//     id: 1,
//     tipoTrabalho: "artigo_congresso",
//     localPublicacao: "SBC",
//     ano: 2021,
//     areaPesquisa: "prodManag",
//     titulo: "Um título qualquer",
//     autores: ['Dayana B. Costa', 'Hugo S. Peinado'],
//     link: 'https://www.google.com',
// }

const CardLg = ({ publ }) => {
  let publications = publ.publ;

  const tipo = (tipo) => {
    if (tipo === "artigo_congresso") {
      return "Artigo em Congresso";
    } else if (tipo === "artigo_periodico") {
      return "Artigo em Periódico";
    } else if (tipo === "anais_evento") {
      return "Trabalho publicado em Anaís de Evento";
    } else if (tipo === "dissertacoes_mestrado") {
      return "Dissertações de Mestrado";
    } else if (tipo === "teses_doutorado") {
      return "Teses de Doutorado";
    } else if (tipo === "tcc") {
      return "Trabalho de Conclusão de Curso";
    } else if (tipo === "livros") {
      return "Livros e Capítulos";
    } else {
      return "Não adicionado";
    }
  };

  const areaPesquisa = (area) => {
    if (area === "prodManag") {
      return "Production management";
    } else if (area === "digital") {
      return "Digital technology in construction";
    } else if (area === "sustainable") {
      return "Sustainable management in construction";
    } else if (area === "perfomance") {
      return "Perfomance measurement and benchmarking";
    } else {
      return "Não adicionado";
    }
  };

  const autores = (autores) => {
    if (autores.length === 0) {
      return "Não adicionado";
    } else if (autores.length > 1) {
      return autores.join(", ");
    } else {
      return autores;
    }
  };

  return (
    <CardWrapper id={publications.id ? publications.id : "Card"}>
      <div className="header">
        <span>{tipo(publications.tipoTrabalho)}</span>
        <p>
          {publications.localPublicacao
            ? publications.localPublicacao
            : "Não adicionado"}
        </p>
      </div>
      <div className="info">
        <p className="info__titulo">
          {publications.titulo ? publications.titulo : "Não adicionado"}
        </p>
        <p className="info__autores">{autores(publications.autores)}</p>
      </div>
      <div className="footer">
        <p className="footer__ano">
          {publications.ano ? publications.ano : "Não adicionado"}
        </p>
        <p className="footer_area">{areaPesquisa(publications.areaPesquisa)}</p>
      </div>
    </CardWrapper>
  );
};

export default CardLg;
