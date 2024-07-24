import React, { useState, useEffect } from "react";
import { ContainerView, FormFilter } from "./style";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";
import { Link } from "react-router-dom";
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

  const redirect = () => {
    window.location.href = "https://getec.eng.ufba.br/";
  };

  const search = (e) => {
    e.preventDefault();
    const search = e.target.value;
    setSearchPubl(
      publications.filter(
        (publ) =>
          publ.titulo.toLowerCase().includes(search.toLowerCase()) ||
          publ.autores.join().toLowerCase().includes(search.toLowerCase()) ||
          publ.localPublicacao.toLowerCase().includes(search.toLowerCase())
      )
    );
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
        <Link>Scientific Production</Link>
        <Link>Researches</Link>
        <Link>Events</Link>
        <button onClick={redirect}>Go to our website</button>
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
            <div className="year" id="year">
              <h3 htmlFor="year">Per year</h3>
              <div>
                <div className="item">
                  <label htmlFor="2018">{`<2018`}</label>
                  <input type="checkbox" name="" id="2018" value="2018" />
                </div>
                <div className="item">
                  <label htmlFor="2019">2019</label>
                  <input type="checkbox" name="" id="2019" value="2019" />
                </div>
                <div className="item">
                  <label htmlFor="2020">2020</label>
                  <input type="checkbox" name="" id="2020" value="2020" />
                </div>
                <div className="item">
                  <label htmlFor="2021">2021</label>
                  <input type="checkbox" name="" id="2021" value="2021" />
                </div>
                <div className="item">
                  <label htmlFor="2022">2022</label>
                  <input type="checkbox" name="" id="2022" value="2022" />
                </div>
                <div className="item">
                  <label htmlFor="2023">2023</label>
                  <input type="checkbox" name="" id="2023" value="2023" />
                </div>
                <div className="item">
                  <label htmlFor="2024">2024</label>
                  <input type="checkbox" name="" id="2024" value="2024" />
                </div>
              </div>
            </div>
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
            <button type="submit">Filter</button>
          </FormFilter>
        </div>
        <div className="view-section__works">
          <div className="cards">
            {!searchPubl.length ? (
              <p>No publications found.</p>
            ) : (
              searchPubl.map((publ, index) => (
                <CardLg key={index} publ={{ publ }} />
              ))
            )}
          </div>
        </div>
      </div>
    </ContainerView>
  );
};

export default ViewPage;
