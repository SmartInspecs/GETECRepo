import React, { useState, useEffect } from "react";
import { ContainerView, FormFilter } from "./style";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";
import logo from "./../../assets/logo2.svg";
import searchIcon from "./../../assets/search-icon.svg";
import CardLg from "../../components/cardLg";

const ViewPage = () => {
  const [publications, setPublications] = useState([]);
  const [autorList, setAutorList] = useState([]);
  const [searchPubl, setSearchPubl] = useState([]);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const publCollectionRef = collection(db, "publications");
    const getPublications = async () => {
      const data = await getDocs(publCollectionRef);
      setPublications(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      localStorage.setItem(
        "publications",
        JSON.stringify(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
      const uniqueAutorList = [];
      data.docs.forEach((doc) => {
        const work = doc.data();
        work.autores.forEach((autor) => {
          if (!uniqueAutorList.includes(autor)) {
            uniqueAutorList.push(autor);
          }
        });
      });
      setAutorList(uniqueAutorList);
      localStorage.setItem("lang", "en");
    };
    getPublications();
  }, []);

  const redirect = (local) => {
    window.location.href = `https://getec.eng.ufba.br/${local}`;
  };

  const search = (e) => {
    e.preventDefault();
    const search = e.target.value;
    const results = publications.filter(
      (publ) =>
        publ.titulo.toLowerCase().includes(search.toLowerCase()) ||
        publ.autores.join().toLowerCase().includes(search.toLowerCase()) ||
        publ.localPublicacao.toLowerCase().includes(search.toLowerCase())
    );
    if (results.length === 0) {
      alert("No results found");
    }
    setSearchPubl(results);
  };

  const filter = () => {
    const researchArea = document.getElementById("research-area").value;
    const autor = document.getElementById("autor").value;
    const tipo = document.getElementById("tipo-trabalho").value;
    const results = publications.filter(
      (publ) =>
        (researchArea === "" || publ.areaPesquisa === researchArea) &&
        (autor === "all" || publ.autores.includes(autor)) &&
        (tipo === "" || publ.tipoTrabalho === tipo)
    );
    if (results.length === 0) {
      alert("No results found");
    }
    setSearchPubl(results);
  };

  const changeLang = () => {
    if (lang === "pt") {
      localStorage.setItem("lang", "en");
      setLang("en");
    } else {
      localStorage.setItem("lang", "pt");
      setLang("pt");
    }
  };

  return (
    <ContainerView>
      <nav className="nav">
        <img src={logo} alt="logotipo do GETEC" />
        <p onClick={() => redirect()}>
          {lang === "en" ? "Scientific Production" : "Produções Científicas"}
        </p>
        <p onClick={() => redirect("research.html")}>
          {lang === "en" ? "Research" : "Linhas de Pesquisa"}
        </p>
        <p onClick={() => redirect("event.html")}>
          {lang === "en" ? "Events" : "Eventos"}
        </p>
        <button className="lang-btn" onClick={changeLang}>
          {lang === "en" ? "PT-BR" : "EN"}
        </button>
        <button className="goto-btn" onClick={() => redirect("index.html")}>
          {lang === "en" ? "Go to our website" : "Ir para o site"}
        </button>
      </nav>
      <div className="hero">
        <h1>
          {lang === "en"
            ? "Welcome to GETEC Repository"
            : "Bem-Vindo ao repositório do GETEC"}
        </h1>
        <p>
          {lang === "en"
            ? "Here you can find all GETEC scientific productions, articles, theses and so on"
            : "Aqui você pode encontrar todas as produções científicas do GETEC, artigos, teses e mais"}
        </p>
        <div className="search-bar">
          <input
            type="text"
            placeholder={
              lang === "en"
                ? "Search by title, author or publication"
                : "Pesquise por título, autor ou publicação"
            }
            onChange={search}
          />
          <button>
            <img src={searchIcon} alt="lupa" />
            {lang === "en" ? "Search" : "Buscar"}
          </button>
        </div>
      </div>
      <div className="view-section">
        <div className="view-section__filter">
          <h2>{lang === "en" ? "Filters" : "Filtros"}</h2>
          <FormFilter>
            <div className="research-area">
              <label htmlFor="research-area">
                {lang === "en" ? "Research Area" : "Área de Pesquisa"}
              </label>
              <select name="" id="research-area">
                <option value="">
                  {lang === "en"
                    ? "Select the Research Area"
                    : "Selecione a área de pesquisa"}
                </option>
                <option value="prodManag">
                  {lang === "en"
                    ? "Production management"
                    : "Gestão de produção"}
                </option>
                <option value="digital">
                  {lang === "en"
                    ? "Digital technology in construction"
                    : "Tecnologia digital na construção"}
                </option>
                <option value="sustainable">
                  {lang === "en"
                    ? "Sustainable management in construction"
                    : "Gestão sustentável na construção"}
                </option>
                <option value="perfomance">
                  {lang === "en"
                    ? "Perfomance measurement and benchmarking"
                    : "Medição de desempenho e benchmarking"}
                </option>
              </select>
            </div>
            <div className="tipo-trabalho">
              <label htmlFor="tipo-trabalho">
                {lang === "en" ? "Type of Work" : "Tipo do trabalho"}
              </label>
              <select name="" id="tipo-trabalho">
                <option value="">
                  {lang === "en"
                    ? "Select the type of work"
                    : "Selecione o tipo do trabalho"}
                </option>
                <option value="artigo_congresso">
                  {lang === "en" ? "Conference paper" : "Artigo em Congresso"}
                </option>
                <option value="artigo_periodico">
                  {lang === "en" ? "Journal paper" : "Artigo em periódico"}
                </option>
                <option value="dissertacoes_mestrado">
                  {lang === "en"
                    ? "Master's thesis"
                    : "Dissertações de Mestrado"}
                </option>
                <option value="teses_doutorado">
                  {lang === "en" ? "Doctoral theses" : "Teses de Doutorado"}
                </option>
                <option value="tcc">
                  {lang === "en"
                    ? "Undergraduate theses"
                    : "Trabalho de Conclusão de Curso"}
                </option>
                <option value="livros">
                  {lang === "en" ? "Books and chapters" : "Livros e Capítulos"}
                </option>
              </select>
            </div>
            <div className="autores">
              <label htmlFor="autor">
                {lang === "en" ? "Author" : "Autor"}
              </label>
              <select name="" id="autor">
                <option value="all">
                  {lang === "en"
                    ? "Select the first author"
                    : "Selecione o primeiro autor"}
                </option>
                {autorList.map((autor, index) => (
                  <option key={index} value={autor}>
                    {autor}
                  </option>
                ))}
              </select>
            </div>
            <button id="filter" type="button" onClick={filter}>
              {lang === "en" ? "Filter" : "Filtrar"}
            </button>
          </FormFilter>
        </div>
        <div className="view-section__works">
          <div className="cards">
            {!searchPubl.length
              ? publications.map((publ, index) => (
                  <CardLg key={index} publ={{ publ }} />
                ))
              : searchPubl.map((publ, index) => (
                  <CardLg key={index} publ={{ publ }} />
                ))}
          </div>
        </div>
      </div>
    </ContainerView>
  );
};

export default ViewPage;
