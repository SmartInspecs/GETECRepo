import React, { useState, useEffect } from "react";
import { ContainerView, FormFilter } from "./style";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";
import logo from "./../../assets/logo2.svg";
import searchIcon from "./../../assets/search-icon.svg";
import CardLg from "../../components/cardLg";

const ViewPage = () => {
  const [publications, setPublications] = useState([]);
  const [autorList, setAutorList] = useState([]);
  const [searchPubl, setSearchPubl] = useState([]);

  useEffect(() => {
    const publCollectionRef = collection(db, "publications");
    const getPublications = async () => {
      const data = await getDocs(publCollectionRef);
      setPublications(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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

  const deletePubli = async (id) => {
    const userDoc = doc(db, "publications", id);
    await deleteDoc(userDoc);
    alert("deletado com sucesso!", id);
    window.location.reload();
  };

  return (
    <ContainerView>
      <nav className="nav">
        <img src={logo} alt="logotipo do GETEC" />
        <p onClick={() => redirect()}>Scientific Production</p>
        <p onClick={() => redirect("research.html")}>Researches</p>
        <p onClick={() => redirect("event.html")}>Events</p>
        <button onClick={() => redirect("index.html")}>
          Go to our website
        </button>
      </nav>
      <div className="hero">
        <h1>Welcome to GETEC Repository</h1>
        <p>
          Here you can find all GETEC scientific productions, articles, theses
          and so on
        </p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by title, author or publication"
            onChange={search}
          />
          <button>
            <img src={searchIcon} alt="lupa" />
            Search
          </button>
        </div>
      </div>
      <div className="view-section">
        <div className="view-section__filter">
          <h2>Filters</h2>
          <FormFilter>
            <div className="research-area">
              <label htmlFor="research-area">Research Area</label>
              <select name="" id="research-area">
                <option value="">Selecione a área de pesquisa</option>
                <option value="prodManag">Production management</option>
                <option value="digital">
                  Digital technology in construction
                </option>
                <option value="sustainable">
                  Sustainable management in construction
                </option>
                <option value="perfomance">
                  Perfomance measurement and benchmarking
                </option>
              </select>
            </div>
            <div className="tipo-trabalho">
              <label htmlFor="tipo-trabalho">Type of Work</label>
              <select name="" id="tipo-trabalho">
                <option value="">Selecione o tipo do trabalho</option>
                <option value="artigo_congresso">Artigo em Congresso</option>
                <option value="artigo_periodico">Artigo em periódico</option>
                <option value="anais_evento">
                  Trabalho publicado em Anais de Evento
                </option>
                <option value="dissertacoes_mestrado">
                  Dissertações de Mestrado
                </option>
                <option value="teses_doutorado">Teses de Doutorado</option>
                <option value="tcc">Trabalho de Conclusão de Curso</option>
                <option value="livros">Livros e Capítulos</option>
              </select>
            </div>
            <div className="autores">
              <label htmlFor="autor">Author</label>
              <select name="" id="autor">
                <option value="all">All</option>
                {autorList.map((autor, index) => (
                  <option key={index} value={autor}>
                    {autor}
                  </option>
                ))}
              </select>
            </div>
            <button id="filter" type="button" onClick={filter}>
              Filter
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
