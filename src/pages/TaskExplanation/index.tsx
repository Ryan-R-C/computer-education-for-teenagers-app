import { useEffect, useLayoutEffect, useState } from "react";
import * as S from "./LandingPage.styled";
import { Link, useNavigate, useParams } from "react-router-dom";

import WelcomeContainer from '../../components/boxes/WelcomeContainer';
import Title from '../../components/typography/Title';
import astronaut from '../../assets/astronaut.png'
import Step from "../../components/buttons/Step";
import DefaultButtonEmphasis from "../../components/buttons/DefaultButtonEmphasis";
import Bar from "../../components/boxes/Bar";
import HeaderBar from "../../components/boxes/header/HeaderBar";
import MoreIcon from "../../components/icons/MoreIcon";
import { useSubTasks } from "../../contexts/SubTaskProvider";

export default function TaskExplanation( {}) {

  const {
    subTasks,
    setSubTask,
    findSubTask,
  } = useSubTasks()

  const { _id } = useParams()

  async function handleLoadSubTask(_id){
    const currentSubTask = await findSubTask(_id)

    setSubTask(currentSubTask)
  }

  useEffect(
    () => {
      handleLoadSubTask(_id)
    }, [_id]
  )


  return (
    <S.Container>
      <S.ImageContainer
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), url(${subTasks?.image})`
      }}
      >
        <HeaderBar>
        <div className="back">
          <MoreIcon size={45}/>
        </div>

      </HeaderBar>
        
      </S.ImageContainer>
        <S.WelcomeHolder>
          <div className="content">
            <Title>
              {
                subTasks?.title
              }
            </Title>
            {
              subTasks?.content?.map(
                (content, index) => (
                  <p key={index}>
                    {
                      content
                    }
                  </p>
                )
              )
            }
          </div>
          <S.ButtonsContainer>
            <S.GetStartedContainer>
              <Link to={`/task/${subTasks?._id}`}>
                <DefaultButtonEmphasis>
                  Ir para lição
                </DefaultButtonEmphasis>
              </Link>
            </S.GetStartedContainer>
          </S.ButtonsContainer>
        </S.WelcomeHolder>
    </S.Container>

  );
}
