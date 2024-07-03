import React, { useState, useEffect } from 'react'
import { ContainerView } from './style'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import {db} from '../../services/firebase'
import { useNavigate } from 'react-router-dom'

const ViewPage = () => {
    const [publications, setPublications] = useState([])
    const publCollectionRef  = collection(db, 'publications')
    useEffect(() => {
        const getPublications = async () => {
            const data = await getDocs(publCollectionRef);
            setPublications(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getPublications()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const navigate = useNavigate()

    const deletePubli = async (id) => {
        const userDoc = doc(db, 'publications', id);
        await deleteDoc(userDoc);
        alert('deletado com sucesso!', id);
        window.location.reload();
    }
return (
    <ContainerView>
            <div>ViewPage</div>
            <button onClick={() => navigate("/registro")}>Voltar para registro</button>
            <div className='list'>
                    {publications.length === 0 ? (
                            <p>Nenhuma publicação encontrada.</p>
                    ) : (
                            publications.map((publ, index) => (
                                    <ul key={index}>
                                            <li>
                                                    <span>{publ.titulo}</span>
                                                    <span>{publ.primeroAutor}</span>
                                                    <button onClick={() => deletePubli(publ.id)}>Excluir</button>
                                            </li>
                                    </ul>
                            ))
                    )}
            </div>
    </ContainerView>
)
}

export default ViewPage