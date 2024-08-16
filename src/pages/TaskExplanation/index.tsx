import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as S from './LandingPage.styled'

import HeaderBar from '../../components/boxes/header/HeaderBar'
import DefaultButtonEmphasis from '../../components/buttons/DefaultButtonEmphasis'
import MoreIcon from '../../components/icons/MoreIcon'
import Title from '../../components/typography/Title'
import { useSubTasks } from '../../contexts/SubTaskProvider'

export default function TaskExplanation() {
  const { subTasks, setSubTask, findSubTask } = useSubTasks()

  const { _id } = useParams()

  async function handleLoadSubTask(_id) {
    const currentSubTask = await findSubTask(_id)

    setSubTask(currentSubTask)
  }

  useEffect(() => {
    handleLoadSubTask(_id)
  }, [_id])

  return (
    <S.Container>
      <S.ImageContainer
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), url(${subTasks?.image})`,
        }}
      >
        <HeaderBar>
          <div className="back">
            <MoreIcon size={45} />
          </div>
        </HeaderBar>
      </S.ImageContainer>
      <S.WelcomeHolder>
        <div className="content">
          <Title>{subTasks?.title}</Title>
          {subTasks?.content?.map((content, index) => <p key={index}>{content}</p>)}
        </div>
        <S.ButtonsContainer>
          <S.GetStartedContainer>
            <Link to={`/task/${subTasks?._id}`}>
              <DefaultButtonEmphasis>Ir para lição</DefaultButtonEmphasis>
            </Link>
          </S.GetStartedContainer>
        </S.ButtonsContainer>
      </S.WelcomeHolder>
    </S.Container>
  )
}
