import { useNavigate } from 'react-router-dom'
import * as S from '../Dashboard.styled'

import Bar from '../../../components/boxes/Bar'
import CardContainer from '../../../components/boxes/CardContainer'
import Icons from '../../../components/icons'
import PlayIcon from '../../../components/icons/PlayIcon'
import { TaskPropsChildren } from '../../../types'

import { setTaskId } from '../../../utils/localStorage'

function getTasksFinished(level, tasksQuantity) {
  if (!level) return 0
  else if (level >= tasksQuantity) return tasksQuantity
  else return level
}

export default function TaskList({ tasksAvaliable }: TaskPropsChildren) {
  const navigate = useNavigate()

  function handleLocaleTask(taskId: string, subtaskId: string) {
    setTaskId(taskId)

    navigate(`/explanation-task/${subtaskId}`)
  }

  return (
    <>
      <S.TaskContainer>
        {tasksAvaliable?.map(({ title, subTasks, userScore, icon, _id }, index) => {
          const Icon = Icons[icon]

          const level = userScore[0]?.level
          const tasksQuantity = subTasks?.length
          const tasksFinished = getTasksFinished(level, tasksQuantity)

          const currentSubtaskId: string = subTasks[tasksFinished] || subTasks[tasksFinished - 1]

          return (
            <CardContainer key={`${_id}` + index}>
              <S.TitleContainer>
                <section onClick={() => handleLocaleTask(_id, currentSubtaskId!)}>
                  <S.IconContainer>
                    <Icon size={66} />
                  </S.IconContainer>
                </section>
                <p>{title}</p>
              </S.TitleContainer>

              <S.BarContainer>
                <div>
                  <Bar percentage={(tasksFinished / tasksQuantity) * 100} />
                  <p>
                    {tasksFinished}/{tasksQuantity}
                  </p>
                </div>
                <section onClick={() => handleLocaleTask(_id, currentSubtaskId!)}>
                  <PlayIcon size={50} />
                </section>
              </S.BarContainer>
            </CardContainer>
          )
        })}
      </S.TaskContainer>
    </>
  )
}
