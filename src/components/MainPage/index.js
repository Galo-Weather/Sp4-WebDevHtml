import styled from "styled-components";
import React from 'react';
import mainGif from '../../imgs/capaGif.gif';
import problemaImagem from '../../imgs/problemaImagem.jpg';


const Home = styled.section`
`
const HomeContainer = styled.div`
    align-items: start;
    text-align: center;

    @media (min-width: 1100px) {
        margin-top: 6.5em;
        padding: 2em 0 em 0;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: auto auto;
    }
`
const HomeTxt1 = styled.div`
    padding: 1em;
    p {
        font-size: 3em;
        font-weight: bold;
        margin: 0;
        color: #0f62fe;
      }
    @media (min-width: 1100px) {
        padding: 0;
        grid-column-start: 1; 
        grid-column-end: 3;
    }
`
const HomeImg = styled.figure`
    padding: 1em;
    
    img {
        max-width: 100%;
        border-radius: 4em;
    }
    @media (min-width: 1100px) {
        padding: 1em;
        text-align: center;
        grid-column: 2;
        grid-row: 2;
        margin: 0;
        img {
            border-radius: 4em;
        }
    }
`
const HomeTxt2 = styled.div`
    padding: 1em;

    p:first-child {
        margin-bottom: 0.5em;
        font-size: 2em;
        font-weight: bold;
        color: #0f62fe;
      }
    p {
        margin-bottom: 0.5em;
        font-size: 1.2em;
      }
      @media (min-width: 1100px) {
        display: flex;
        flex-direction: column;
        padding: 2em;
        text-align: center;
        grid-column: 1;
        grid-row: 2;
    }

`
const ProblemaContainer = styled.section`
    background: linear-gradient(#ffffff, #f0eded 15%);
    text-align: center;
`
const Container = styled.div`

@media (min-width: 1100px) {
    padding: 2em 0 4em 0;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
}
`
const ProblemaImg = styled.figure`
    margin-top: 1em;
    padding: 1em 1em 0 1em;
    img{
        max-width: 100%;
        border-radius: 5em;

    }

    @media (min-width: 1100px) {
        margin: 0;
        padding: 1em;
        text-align: center;
        grid-column: 1;

        img{
            max-width: 100%;
        }
    }
`
const ProblemaTxT = styled.div`
    padding: 1em;

    p:first-child {
        margin-bottom: 0.5em;
        font-size: 2em;
        font-weight: bold;
        color: #0f62fe;
      }

      p {
        margin-bottom: 0.5em;
        font-size: 1.2em;
        line-height: 1.5;
      }

      @media (min-width: 1100px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2em;
        text-align: center;
        grid-column: 2;
    }
`
const CausaContainer = styled.section`
    width: auto;
    background: linear-gradient(#f0eded, #ffffff 15%);
    padding: 1em;
    h1{
        margin-top: 1em;
        margin-bottom: 0.5em;
        font-size: 3em;
        text-align: center;
        color: #0f62fe;
        font-weight: bold;
    }
`
const CausaContent = styled.div`

@media (min-width: 1100px) {
    display: flex;
    padding: 1em;
}
`

function MainPage() {
    return (
        <>
            <>
                <Home>
                    <HomeContainer>
                        <HomeTxt1>
                            <p>Cidades Sustentáveis:</p>
                            <p>O desafio</p>
                        </HomeTxt1>
                        <HomeImg>
                            <img
                                src={mainGif}
                                alt='gif sustentabilidade'></img>
                        </HomeImg>
                        <HomeTxt2>
                            <p>O Desafio da IBM:</p>
                            <p>A IBM está dedicada a enfrentar o desafio de tornar as cidades mais sustentáveis, buscando soluções inovadoras que equilibrem o desenvolvimento econômico, social e ambiental. Em nosso projeto, focamos em São Paulo, uma cidade que enfrenta o grave problema dos alagamentos urbanos. Nosso compromisso é contribuir com soluções eficazes para mitigar esses impactos, visando um ambiente mais seguro e habitável para as futuras gerações, alinhados com os Objetivos de Desenvolvimento Sustentável da ONU.</p>
                        </HomeTxt2>
                    </HomeContainer>
                </Home>
            </>
            <>
                <ProblemaContainer>
                    <Container>
                        <ProblemaImg>
                            <img
                                src={problemaImagem}
                                alt="inundação"></img>
                        </ProblemaImg>
                        <ProblemaTxT>
                            <p>Enchentes em São Paulo</p>
                            <p>São Paulo enfrenta enchentes frequentes, especialmente durante os períodos de chuvas intensas.
                                A rápida expansão urbana, falta de áreas permeáveis, obstrução de córregos e infraestrutura insuficiente
                                tornam a cidade altamente vulnerável.</p>
                            <p>A infraestrutura muitas vezes não suporta o volume de chuvas, resultando em alagamentos e sérios prejuízos econômicos e sociais.</p>
                            <p>A falta de planejamento leva à construção em áreas de risco, agravando a situação. Além disso, a intensa urbanização leva à
                                impermeabilização do solo, dificultando a absorção da água e contribuindo para o acúmulo nas ruas.</p>
                            <p>É vital uma colaboração efetiva entre governos, empresas e a comunidade. Políticas sustentáveis e a gestão responsável da água são essenciais para garantir um
                                futuro seguro e resiliente para a cidade e seus habitantes.</p>

                        </ProblemaTxT>
                    </Container>
                </ProblemaContainer>
            </>
            <>
                <CausaContainer>
                    <h1>Principais causas</h1>
                    <CausaContent>
                    </CausaContent>
                </CausaContainer>
            </>
        </>
    );
}

export default MainPage