import sobreImagem from '../../assets/Denise.png'
import './sobre.css'
import gitImagem from '../../assets/github.png'
import linkedinImagem from '../../assets/linkedin.png'

function Sobre () {
    return(
        <>
        <div className="apresentacao">
            <h1>Olá, eu sou a Denise!</h1>
            <h3>
                Aluna de Front-end.
                Em transição de carreira, estudante e grande 
                entusiasta de Tecnologia e Geografia.
            </h3>            
            <img class="foto-denise"src={sobreImagem} alt="Denise Reis foto perfil"/>
            <hr></hr>
                <h2 className="text-sobre">
                    Bem vindes ao meu Portifólio Reprograma!
                </h2>
                <p className="text-intro">       
                    Aqui você poderá acessar todos os 
                    meus projetos desenvolvidos no Bootcamp da
                    Reprograma.
                </p>
            <div className="redes">
                <a target="blank" href="https://github.com/De-Reis"><img src={gitImagem}/></a>
                <a target="blank" href="https://www.linkedin.com/in/denise-reis-0a643b7b/"> <img src={linkedinImagem}/></a>        
            </div>
        </div>
        </>


    )
}

export default Sobre