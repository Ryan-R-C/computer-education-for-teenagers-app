import { useLayoutEffect, useState } from "react";
import * as S from "./LandingPage.styled";
import { Link, useNavigate } from "react-router-dom";

import WelcomeContainer from '../../components/boxes/WelcomeContainer';
import Title from '../../components/typography/Title';
import astronaut from '../../assets/astronaut.png'
import Step from "../../components/buttons/Step";
import DefaultButtonEmphasis from "../../components/buttons/DefaultButtonEmphasis";

export default function LandingPage( {}) {
  const [step, setStep] = useState(0);


  const navigate = useNavigate();

  const stepsMessages = [
    {
      title: "Dolly Guaraná",
      description: "Beba muito líquido"
    },
    {
      title: "Dolly, O melhor!",
      description: "Cuidado com o sol"
    },
    {
      title: "Dolly!!",
      description: "Pratique muito esporte"
    },
  ]

  


  return (
    <S.Container>
      <S.ImageContainer>
        <img src={astronaut} alt="" />
      </S.ImageContainer>
      <>
        <WelcomeContainer height={'41vh'}>
            <S.WelcomeHolder>
              <div className="content">
                <Title>
                  {
                    stepsMessages[step]?.title
                  }
                </Title>
                <p>
                  {
                    stepsMessages[step]?.description
                  }
                </p>
              </div>
              <S.ButtonsContainer>
                <S.StepContainer>
                {stepsMessages.map((x, i) =>
                  <Step
                  key={i}
                  current={step === i}
                  onClick={() => setStep(i)}
                  />
                )}
                </S.StepContainer>
                <S.GetStartedContainer>
                  <Link to="/dashboard/">
                    <DefaultButtonEmphasis>
                      Iniciar
                    </DefaultButtonEmphasis>
                  </Link>
                </S.GetStartedContainer>
              </S.ButtonsContainer>
            </S.WelcomeHolder>
        </WelcomeContainer>
      </>
    </S.Container>

  );
}
