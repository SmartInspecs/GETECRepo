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
  let lang = localStorage.getItem("lang");

  const redirectPage = () => {
    window.location.href = publications.link;
  };

  const tipo = (tipo) => {
    if (tipo === "artigo_congresso") {
      return lang === "en" ? "Conference paper" : "Artigo em Congresso";
    } else if (tipo === "artigo_periodico") {
      return lang === "en" ? "Journal paper" : "Artigo em Periódico";
    } else if (tipo === "anais_evento") {
      return lang === "en"
        ? "Work published in event proceedings"
        : "Trabalho publicado em Anais de Evento";
    } else if (tipo === "dissertacoes_mestrado") {
      return lang === "en" ? "Master's thesis" : "Dissertações de Mestrado";
    } else if (tipo === "teses_doutorado") {
      return lang === "en" ? "Doctoral theses" : "Teses de Doutorado";
    } else if (tipo === "tcc") {
      return lang === "en"
        ? "Undergraduate theses"
        : "Trabalho de Conclusão de Curso";
    } else if (tipo === "livros") {
      return lang === "en" ? "Books and chapters" : "Livros e Capítulos";
    } else {
      return lang === "en" ? "Not added" : "Não adicionado";
    }
  };

  const areaPesquisa = (area) => {
    if (area === "prodManag") {
      return lang === "en" ? "Production management" : "Gestão da produção";
    } else if (area === "digital") {
      return lang === "en"
        ? "Digital technology in construction"
        : "Tecnologias digitais na construção";
    } else if (area === "sustainable") {
      return lang === "en"
        ? "Sustainable management in construction"
        : "Gestão sustentável na construção";
    } else if (area === "perfomance") {
      return lang === "en"
        ? "Perfomance measurement and benchmarking"
        : "Medição de desempenho e benchmarking";
    } else {
      return lang === "en" ? "Not added" : "Não adicionado";
    }
  };

  const autores = (autores) => {
    if (autores.length === 0) {
      return lang === "en" ? "Not added" : "Não adicionado";
    } else if (autores.length > 1) {
      return autores.join(", ");
    } else {
      return autores;
    }
  };

  //implementar tradução

  return (
    <CardWrapper
      id={publications.id ? publications.id : "Card"}
      onClick={redirectPage}
    >
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
