import Header from '../../components/Header/Header'
import image from '../../assets/projetos.svg'

function Portifolio () {
    return(
        <Header 
            image={image} 
            description="ilustração mulher fazendo projeto"
        >
            Meus projetos
        </Header>
    )
}

export default Portifolio