import { useEffect, useLayoutEffect, useState } from "react";
import * as S from "./LandingPage.styled";
import { Link, useNavigate } from "react-router-dom";

import WelcomeContainer from '../../components/boxes/WelcomeContainer';
import Title from '../../components/typography/Title';
import astronaut from '../../assets/astronaut.png'
import Step from "../../components/buttons/Step";
import DefaultButtonEmphasis from "../../components/buttons/DefaultButtonEmphasis";
import { useUsers } from "../../contexts/UsersProvider";

export default function LandingPage({}) {

  const {
    findOrCreateUser,
  } = useUsers()

  async function handleSetOrFindData(){
    await findOrCreateUser()
  }

  useEffect(
    () => {
      handleSetOrFindData()
    }, []
  )


  const [step, setStep] = useState(0);

  const stepsMessages = [
    {
      title: "Computação",
      description: "Aprenda computação de forma simples! Você pode aprender tópicos importântes para a computação!",
    },
    { 
      title: "História",
      description: "Conhece um pouco da história da computação e da internet? Sabia do importânte papel feminino na computação? Conhece de onde veio as ideias do primeiro computador caseiro?"
    },
    {
      title: "Arquitetura",
      description: "Você entende quais são os componentes da Arquitetura de computadores? Sabe o que faz a memória RAM, memória ROM e a CPU?"
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
