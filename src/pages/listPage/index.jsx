import React, { useEffect, useState } from "react";
import { PaperContainer, PaperView } from "./style";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";

const ListPage = () => {
  const [publications, setPublications] = useState([]);
  useEffect(() => {
    const publCollectionRef = collection(db, "publications");
    const getPublications = async () => {
      const data = await getDocs(publCollectionRef);
      setPublications(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPublications();
  }, []);

  const deletePubli = async (id) => {
    const userDoc = doc(db, "publications", id);
    await deleteDoc(userDoc);
    alert("deletado com sucesso!", id);
    window.location.reload();
  };

  return (
    <PaperContainer>
      {publications.length === 0 ? (
        <h2>Visite a página inicial para carregar as publicações</h2>
      ) : (
        publications.map((elem, index) => (
          <PaperView key={index}>
            <h2>{elem.titulo}</h2>
            <span>{elem.autores.join(", ")}</span>
            <span>{elem.localPublicacao}</span>
            <span>{elem.ano}</span>
            <button onClick={() => deletePubli(elem.id)}>Excluir</button>
          </PaperView>
        ))
      )}
    </PaperContainer>
  );
};

export default ListPage;
