import { useLayoutEffect, useState } from "react";
import * as S from "./LandingPage.styled";
import { Link, useNavigate } from "react-router-dom";

import WelcomeContainer from '../../components/boxes/WelcomeContainer';
import Title from '../../components/typography/Title';
import astronaut from '../../assets/astronaut.png'
import Step from "../../components/buttons/Step";
import DefaultButtonEmphasis from "../../components/buttons/DefaultButtonEmphasis";
import Bar from "../../components/boxes/Bar";
import HeaderBar from "../../components/boxes/header/HeaderBar";
import MoreIcon from "../../components/icons/MoreIcon";

export default function TaskExplanation( {}) {
  const [step, setStep] = useState(0);


  const stepsMessages = {
      title: "Como Surgiu a Internet?",
      description: [
        `Como surgiu a internet? A ARPANet (Rede de Agencias de  Projetos de Pesquisa Avançada ou Rede da Agência de Projetos de Pesquisa Avançada dos Estados Unidos), uma rede de comunicação de computadores com finalidades militares surgiu no ano de em...,
        1969. A ideia era conectar várias universidades para a troca de informações entre elas, tanto para fins de comunicação, a comunicação entre computadores era muito mais rápida que uma carta,
         quanto para segurança, caso houvesse algum acidente com a máquina a infomação ainda existiria em outros computadores`,
      ],

    }

    const url = `http://www.pedromigao.com.br/ourodetolo/wp-content/uploads/2011/06/arpanet.jpg`


  


  return (
    <S.Container>
      <S.ImageContainer
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), url(${url})`

      }}
      >
        <HeaderBar>
        <div className="back">
          <MoreIcon size={45}/>
        </div>

      </HeaderBar>
        
      </S.ImageContainer>
      <>
       
            <S.WelcomeHolder>
              <div className="content">
                <Title>
                  {
                    stepsMessages.title
                  }
                </Title>
                <p>
                  {
                    stepsMessages.description[step]
                  }
                </p>
              </div>
              <S.ButtonsContainer>
                <S.StepContainer>
                {stepsMessages.description.map((x, i) =>
                  <Step
                  key={i}
                  current={step === i}
                  onClick={() => setStep(i)}
                  />
                )}
                </S.StepContainer>
                <S.GetStartedContainer>
                  <Link to="/task/:id">
                    <DefaultButtonEmphasis>
                      Ir para lição
                    </DefaultButtonEmphasis>
                  </Link>
                </S.GetStartedContainer>
              </S.ButtonsContainer>
            </S.WelcomeHolder>
      </>
    </S.Container>

  );
}
