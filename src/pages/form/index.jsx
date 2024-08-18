import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import logo from "./../../assets/logo2.svg";
import ContainerSml from "../../components/containerSml";
import { Title, Form } from "./style";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
// import { Firestore } from 'firebase/firestore';
// import { app } from '../../services/firebase';

const autoresList = [
  "Dayana B. Costa",
  "Emerson A. M. Ferreira",
  "Cristina T. Pérez",
  "Sávio Melo",
  "Roseneia Melo",
  "Hugo S. Peinado",
  "Bruno Leão",
  "Pedro A. V. F. Braga",
  "Douglas M. Brito",
  "Alisson S. Silva",
  "Caroline S. Araújo",
  "Carolina A. de Oliveira",
  "Vanessa C. Pacheco",
  "Mahara I. S. C. Lima",
  "Mirian C. F. Santos",
  "Natasha Thomas",
  "Elaine Alberte",
  "Luara Fernandes",
  "Rafael Sena",
  "Walisson Santos",
  "Rafaela Rey",
];

const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const [publications, setPublications] = useState([]);
  useEffect(() => {
    const publCollectionRef = collection(db, "publications");
    const getPublications = async () => {
      const data = await getDocs(publCollectionRef);
      setPublications(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPublications();
  }, []);

  const publCollectionRef = collection(db, "publications");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    data.autores = [data.primeroAutor, ...data.autores];
    data.autores = data.autores.concat(
      data.outrosAutores.split(";").filter((autor) => autor !== "")
    );
    delete data.outrosAutores;
    await createPublication(data);
  };

  const createPublication = async (data) => {
    data.dataCriacao = new Date().toISOString(); // Add the creation date to the data object

    const normalizedTitulo = data.titulo.toLowerCase().trim();
    if (
      publications.some(
        (publ) => publ.titulo.toLowerCase().trim() === normalizedTitulo
      )
    ) {
      alert("Trabalho já cadastrado!");
    } else {
      const docRef = await addDoc(publCollectionRef, data);
      console.log("Document written with ID: ", docRef.id);
      alert("Trabalho adicionado com sucesso!");
      window.location.reload();
    }
  };

  return (
    <ContainerSml>
      <img src={logo} alt="" />
      <Title>Registro de trabalhos</Title>
      <Title>GETEC Repository</Title>
      <button onClick={() => navigate("/view")}>Ir para visualização</button>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="titulo">Título</label>
        <input id="titulo" type="text" {...register("titulo")} />
        {errors.titulo && <span>{errors.titulo.message}</span>}
        <label>Primero Autor</label>
        <div className="checkbox">
          {autoresList.map((autor, index) => (
            <div key={index}>
              <input
                id={autor}
                type="radio"
                {...register("primeroAutor", { required: true })}
                value={autor}
              />
              <label htmlFor={autor}>{autor}</label>
            </div>
          ))}
        </div>
        {errors.primeroAutor && <span>{errors.primeroAutor.message}</span>}
        <label>Outros autores</label>
        <div className="checkbox">
          {autoresList.map((autor, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={autor + index}
                {...register("autores")}
                value={autor}
              />
              <label htmlFor={autor + index}>{autor}</label>
            </div>
          ))}
        </div>
        {errors.autores && <span>{errors.autores.message}</span>}
        <label htmlFor="outros">Autores não citados</label>
        <input
          id="outros"
          type="text"
          {...register("outrosAutores")}
          placeholder='Insira aqui os autores não citados acima - separe-os com ";" sem espaço'
        />
        {errors.outrosAutores && <span>{errors.outrosAutores.message}</span>}
        <label htmlFor="local">Local de publicação</label>
        <input
          id="local"
          type="text"
          {...register("localPublicacao", { required: true })}
        />
        {errors.localPublicacao && (
          <span>{errors.localPublicacao.message}</span>
        )}
        <label htmlFor="local">Ano de publicação</label>
        <input
          id="local"
          type="number"
          {...register("ano", { required: true })}
        />
        {errors.ano && <span>{errors.ano.message}</span>}
        <label htmlFor="areaPesquisa">Área de pesquisa</label>
        <select
          id="areaPesquisa"
          {...register("areaPesquisa", { required: true })}
        >
          <option value="">Selecione a área de pesquisa</option>
          <option value="prodManag">Production management</option>
          <option value="digital">Digital technology in construction</option>
          <option value="sustainable">
            Sustainable management in construction
          </option>
          <option value="perfomance">
            Perfomance measurement and benchmarking
          </option>
        </select>
        {errors.areaPesquisa && <span>{errors.areaPesquisa.message}</span>}
        <label htmlFor="tipo">Tipo de trabalho</label>
        <select id="tipo" {...register("tipoTrabalho", { required: true })}>
          <option value="">Selecione o tipo</option>
          <option value="artigo_periodico">Artigo em Periódico</option>
          <option value="artigo_congresso">Artigo em Congresso</option>
          <option value="dissertacoes_mestrado">
            Dissertações de Mestrado
          </option>
          <option value="teses_doutorado">Teses de Doutorado</option>
          <option value="tcc">Trabalho de Conclusão de Curso</option>
          <option value="livros">Livros e Capítulos</option>
        </select>
        {errors.tipoTrabalho && <span>{errors.tipoTrabalho.message}</span>}
        <label htmlFor="link">Link</label>
        <input
          id="link"
          type="text"
          {...register("link", { required: true })}
        />
        {errors.link && <span>{errors.link.message}</span>}
        <button type="submit">Adicionar</button>
      </Form>
    </ContainerSml>
  );
};

export default FormPage;
