import { useState, useEffect } from 'react'
import { BsArrowReturnRight } from 'react-icons/bs'
import Header from '../../components/Header/Header'
import image from '../../assets/projetos.svg'
import axios from 'axios'

import './portifolio.css'

const list = [
  {
    id: 1,
    nome: 'Quero ser devMeu ',
    descricao: 'Um site com conteúdos de introdução à programação.',
    conteudo: 'Feito com html, css e js.',
    imagem: 'https://media.giphy.com/media/NpKOhpooYL1Rr7Uuav/giphy.gif',
    link: 'https://queroserdev.com/'
  },
  {
    id: 2,
    nome: 'TODO list',
    descricao: 'Uma aplicação em react para fazer um todo list ',
    conteudo: 'React hooks e testar os componente com testing library.',
    imagem: 'https://media.giphy.com/media/OUxAsqI6AeAGqMQhFz/giphy.gif',
    link: 'https://thirsty-noyce-28045f.netlify.app/'
  },
  {
    id: 3,
    nome: 'Rick And Morty',
    descricao: 'Um site em react para demonstrar e buscar personagens de Ricky and Morty',
    conteudo: 'React: fundamentos, components, hooks, eventos e consumos de API.',
    imagem: 'https://media.giphy.com/media/fB9TNMAGEPmq3Z1Iye/giphy.gif',
    link: 'https://rickandmortytiktok.netlify.app/'
  },
  {
    id: 4,
    nome: 'Meu Portfolio',
    descricao: 'Um site em react para demonstrar meu portfolio',
    conteudo: 'React: fundamentos, components, rotas, hooks, eventos e consumos de API.',
    imagem: 'https://media.giphy.com/media/RaT2tOOlt1WPIb7sGA/giphy.gif',
    link: 'https://portfolio-aula-react.netlify.app/'
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
