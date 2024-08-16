import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as S from './Tasks.styled'

import Bar from '../../components/boxes/Bar'
import HeaderBar from '../../components/boxes/header/HeaderBar'
import DefaultButtonEmphasis from '../../components/buttons/DefaultButtonEmphasis'
import CheckIcon from '../../components/icons/CheckIcon'
import FlagIcon from '../../components/icons/FlagIcon'
import MessageIcon from '../../components/icons/MessageIcon'
import UncheckIcon from '../../components/icons/UncheckIcon'
import Title from '../../components/typography/Title'
import { useSubTasks } from '../../contexts/SubTaskProvider'
import { useTaskController } from '../../contexts/TaskControllerProvider'
import { QuestionProps } from '../../types'
import SelectImageOptionComponent from './components/ImageOptions'
import SelectOptionComponent from './components/Options'
import SelectTaskComponent from './components/Select'

const TaskComponentProps = {
  image: SelectImageOptionComponent,
  select: SelectTaskComponent,
  choise: SelectOptionComponent,
  option: SelectOptionComponent,
}

export default function Tasks() {
  const {
    isCorrectAnswer,
    loadingSubmit,
    setLoadingSubmit,
    currentQuestion,
    errors,
    setErrors,
    hits,
    setHits,
    handleSubmitTasks,
  } = useTaskController()

  const { findSubTask } = useSubTasks()

  const { _id } = useParams()

  const navigate = useNavigate()

  const [currentTask, setCurrentTask] = useState(0)

  const [tasks, setTasks] = useState<QuestionProps[]>([])

  const [taksAvaliable, setTaksAvaliable] = useState<number>(1)
  const [tasksDone, setTasksDone] = useState<number>(0)

  async function handleNextTask() {
    if (!loadingSubmit) return setLoadingSubmit(true)

    if (isCorrectAnswer) setHits(hits + 1)
    else setErrors(errors + 1)

    setTasksDone(tasksDone + 1)

    if (currentTask < tasks?.length - 1) {
      setCurrentTask(currentTask + 1)
      setLoadingSubmit(false)
    } else {
      await handleSubmitTasks()

      navigate(`/dashboard`)
    }
  }

  async function handleLoadSubTask(_id) {
    const { questions } = await findSubTask(_id)

    setTasks(questions)
    setTaksAvaliable(questions.length)
  }

  useEffect(() => {
    handleLoadSubTask(_id)
  }, [_id])

  return (
    <S.Container>
      <S.SubContainer>
        <HeaderBar>
          <Bar percentage={(tasksDone / taksAvaliable) * 100} />
          <S.ScoreContainer>
            <S.ItemScore>
              <UncheckIcon />
              {errors}
            </S.ItemScore>
            <S.ItemScore>
              <CheckIcon />
              {hits}
            </S.ItemScore>
          </S.ScoreContainer>
        </HeaderBar>
        <div>
          <S.TaskContainer>
            <S.AnswerContainer>
              {tasks?.map((task, i) => {
                const Task = TaskComponentProps[task?.type!]

                return <>{i === currentTask && <Task task={task} key={i}></Task>}</>
              })}
            </S.AnswerContainer>
          </S.TaskContainer>
        </div>
        <S.ResponseContainer theme={`${loadingSubmit && `show ${isCorrectAnswer ? `correct` : `wrong`} `}`}>
          <div className="messageContainer">
            {isCorrectAnswer ? (
              <div>
                <Title>Certo!</Title>
              </div>
            ) : (
              <div>
                <Title>Resposta correta:</Title>
                <p>{currentQuestion?.answer}</p>
              </div>
            )}
            <div className="iconsContainer">
              <MessageIcon color="white" />
              <FlagIcon color="white" />
            </div>
          </div>
        </S.ResponseContainer>
        <div style={{ height: '75px' }}></div>
        <S.SubmitContainer theme={!isCorrectAnswer && loadingSubmit && 'float'}>
          <DefaultButtonEmphasis theme={!isCorrectAnswer && loadingSubmit && 'error'} onClick={() => handleNextTask()}>
            Responder
          </DefaultButtonEmphasis>
        </S.SubmitContainer>
      </S.SubContainer>
    </S.Container>
  )
}
