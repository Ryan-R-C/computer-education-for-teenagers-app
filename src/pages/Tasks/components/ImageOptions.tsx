import { useState } from 'react'
import * as S from '../Tasks.styled'

import { TaskComponentProps } from '../../../types'

import ImageButtonOption from '../../../components/buttons/ImageButtonOption'
import Title from '../../../components/typography/Title'
import { useTaskController } from '../../../contexts/TaskControllerProvider'

export default function SelectImageOptionComponent({ task }: TaskComponentProps) {
  const { setIsCorrectAnswer, setCurrentQuestion, loadingSubmit } = useTaskController()

  const [selectedOptions, setSelectedOptions] = useState<string | number>()

  function addToList(optionId: number | string) {
    if (loadingSubmit) return

    setCurrentQuestion(task)

    const allSelectedOptions = selectedOptions

    const isSelectedaAlready = allSelectedOptions === optionId

    if (isSelectedaAlready) return

    setSelectedOptions(optionId)
  }

  function handleCheckIsCorrect(optionId: number | string, isCorrect: boolean) {
    if (loadingSubmit) return

    addToList(optionId)

    if (isCorrect) setIsCorrectAnswer(true)
    else setIsCorrectAnswer(false)
  }

  return (
    <>
      <S.Question>
        <div className="space">
          <Title>{task?.question}</Title>
        </div>
      </S.Question>
      <div>
        <S.TaskContainer>
          <S.AnswerContainer>
            <S.OptionsContainer>
              {task?.options?.map(({ title, _id, image, isCorrect }) => (
                <>
                  <ImageButtonOption
                    image={image}
                    key={_id}
                    isSelected={selectedOptions === _id}
                    onClick={() => handleCheckIsCorrect(_id!, isCorrect!)}
                  >
                    {title}
                  </ImageButtonOption>
                </>
              ))}
            </S.OptionsContainer>
          </S.AnswerContainer>
        </S.TaskContainer>
      </div>
    </>
  )
}
