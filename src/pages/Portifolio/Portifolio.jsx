import { useState, useEffect } from 'react'
import { BsArrowReturnRight } from 'react-icons/bs'
import Header from '../../components/Header/Header'
import image from '../../assets/projetos.svg'
import axios from 'axios'

import './portifolio.css'

const list = [
  {
    id: 1,
    nome: 'Meu primeiro site ',
    descricao: 'Um site de apresentação feito na oficina de seleção.',
    conteudo: 'Feito com html, css e js.',
    imagem: 'https://media.giphy.com/media/R44PRGGkA7Ptpd2bRd/giphy.gif',
    link: 'https://denise-reis.netlify.app/'
  },
  {
    id: 2,
    nome: 'M de Maravilhosa',
    descricao: 'Um site sobre uma mulher forte e inspiradora ',
    conteudo: 'Feito com html, css e js.',
    imagem: 'https://media0.giphy.com/media/E4WbgIE71iO9lToNQ2/giphy.gif?cid=790b7611304c0acf171842cdf4730f0bb43f9ae7bceb892c&rid=giphy.gif&ct=g',
    link: 'https://reprogramaprojeto1-mariellefranco.netlify.app/'
  },
  {
    id: 3,
    nome: 'Meu diário na Reprograma',
    descricao: 'Meu primeiro site react onde eu descrevi meus 4 momentos mais marcantes na Reprograma',
    conteudo: 'React: fundamentos, components e props.',
    imagem: 'https://media2.giphy.com/media/KMwUvVRzfzuXneS0Lb/giphy.gif?cid=790b76112a0bf614ad0e5d6d1bbe66fdfd84634861d14f4a&rid=giphy.gif&ct=g',
    link: 'https://guileless-liger-fe8995.netlify.app/'
  },
  {
    id: 4,
    nome: 'Meu Portfólio',
    descricao: 'Um site em react do meu primeiro portfólio',
    conteudo: 'React: fundamentos, components, rotas, hooks, eventos e consumos de API.',
    imagem: 'https://media3.giphy.com/media/IXuI2mtxOQ6saHmaLQ/giphy.gif?cid=790b76113eaa96bccced5cc0d18e9d5906ae774212c2eb4c&rid=giphy.gif&ct=g',
    link: ''
  }
]

function Portifolio() {
  const [repos, setRepos] = useState([])
  const baseURL = 'https://api.github.com/users/de-reis/repos'

  useEffect(()=> {
    axios
      .get(baseURL)
      .then((response) => setRepos(response.data))
  }, [])

  return(
   <>
    <Header 
      image={image} 
      description="ilustracao mulher com site"
    >
      Meus Projetos
    </Header>

    <div className="cartao-container">
      {
        list.map(projeto => {
          return(
            <div className="cartao" key={projeto.id}>
              <h1>{projeto.nome}</h1>
              <img src={projeto.imagem} alt={"gif do projeto "+ projeto.nome}/>
              <p>{projeto.descricao}</p>
              <a href={projeto.link} className="enter-repo" target="_blank">
                <BsArrowReturnRight siz={16} color="#111"/>
              </a>
            </div>
          )
        })
      }
    </div>
    <h2 className="titulo">Outros Projetos no meu Github</h2>  
    <div className="card-container">
      {
        repos.map(repo => {
          return(
            <div className="card" key={repo.id}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <a href={repo.html_url} className="enter-repo" target="_blank">
                <BsArrowReturnRight siz={16} color="#fff"/>
              </a>
            </div>
          )
        })
      }
    </div>
   </>
  )
 }
 
 export default Portifolio
