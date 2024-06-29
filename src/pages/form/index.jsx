import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import logo from './../../assets/logo2.svg';
import ContainerSml from '../../components/containerSml';
import { Title, Form } from './style';
// import { Firestore } from 'firebase/firestore';
// import { app } from '../../services/firebase';

const schema = z.object({
    titulo: z.string('Insira um título').min(1),
    primeiroAutor: z.array(z.string()).min(1,'Por favor, selecione o primeiro autor'),
    autores: z.array(z.string()),
    outrosAutores: z.string(),
    localPublicacao: z.string().min(1,'Por favor, insira um local de publicação'),
    ano: z.number('Insira um valor numérico'),
    tipoTrabalho: z.enum(['Type 1', 'Type 2', 'Type 3'], 'Selecione o tipo do trabalho'),
    areaPesquisa: z.enum(['prodManag', 'digital', 'sustainable', 'perfomance'], 'Selecione uma área de pesquisa'),
    link: z.string().url('Insira uma URL válida')
});

const autoresList = ['Dayana B. Costa', 'Emerson A. M. Ferreira', 'Cristina T. Pérez', 
    'Sávio Melo', 'Roseneia Melo', 'Hugo S. Peinado', 'Bruno Leão', 'Pedro A. V. F. Braga', 
    'Douglas M. Brito', 'Alisson S. Silva', 'Caroline S. Araújo', 'Carolina A. de Oliveira', 
    'Vanessa C. Pacheco', 'Mahara I. S. C. Lima', 'Mirian C. F. Santos', 'Natasha Thomas', 
    'Elaine Alberte', 'Luara Fernandes', 'Rafael Sena', 'Walisson Santos', 'Rafaela Rey'];

const FormPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    });

    const onSubmit = (data) => {
        data.autores = data.autores.concat(data.outrosAutores.split(';').filter((autor) => autor !== ''));
        console.log(data);
    };

    // remover natasha, bruno
    // pensar em forma de ordenação de autor

    // const db = Firestore(app)

    // const criarTrabalho = async (data) => {
    //     try {
    //         const docRef = await db.collection('trabalhos').add(data);
    //         console.log('Document written with ID: ', docRef.id);
    //         alert('Trabalho registrado com sucesso!')
    //     } catch (e) {
    //         console.error('Error adding document: ', e);
    //         alert('Houve um erro na adição do trabalho!')
    //     }
    // }
    return (
        <ContainerSml>
            <img src={logo} alt="" />
            <Title>Registro de trabalhos</Title>
            <Title>GETEC Repository</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <label>Título</label>
                <input type="text" {...register('titulo')} />
                {errors.titulo && <span>{errors.titulo.message}</span>}
                <label>Primero Autor</label>
                <div className="checkbox">
                    {autoresList.map((autor, index) => (
                        <div key={index}>
                            <input type="radio" {...register('primeroAutor')} value={autor} />
                            <label>{autor}</label>
                        </div>
                    ))}
                </div>              
                <label>Outros autores</label>
                <div className="checkbox">
                    {autoresList.map((autor, index) => (
                        <div key={index}>
                            <input type="checkbox" {...register('autores')} value={autor} />
                            <label>{autor}</label>
                        </div>
                    ))}
                </div>
                {errors.autores && <span>{errors.autores.message}</span>}
                <label>Outros Autores</label>
                <input type="text" {...register('outrosAutores')} placeholder='Insira aqui os autores não citados acima - separe-os com ";" sem espaço'/>
                {errors.outrosAutores && <span>{errors.outrosAutores.message}</span>}
                <label>Local de publicação</label>
                <input type="text" {...register('localPublicacao')} />
                {errors.localPublicacao && <span>{errors.localPublicacao.message}</span>}
                <label>Área de pesquisa</label>
                <select {...register('areaPesquisa')}>
                    <option value="">Selecione a área de pesquisa</option>
                    <option value="prodManag">Production management</option>
                    <option value="digital">Digital technology in construction</option>
                    <option value="sustainable">Sustainable management in construction</option>
                    <option value="perfomance">Perfomance measurement and benchmarking</option>
                </select>
                {errors.areaPesquisa && <span>{errors.areaPesquisa.message}</span>}
                <label>Tipo de trabalho</label>
                <select {...register('tipoTrabalho')}>
                    <option value="">Selecione o tipo</option>
                    <option value="Type 1">Artigo</option>
                    <option value="Type 2">Journal</option>
                    <option value="Type 3">Congresso</option>
                </select>
                {errors.tipoTrabalho && <span>{errors.tipoTrabalho.message}</span>}
                <label>Link</label>
                <input type="text" {...register('link')} />
                {errors.link && <span>{errors.link.message}</span>}
                <button type="submit">Adicionar</button>
            </Form>
        </ContainerSml>
    );
};

export default FormPage