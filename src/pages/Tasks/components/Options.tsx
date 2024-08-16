import { useEffect, useState } from 'react'
import * as S from '../Tasks.styled'

import { TaskComponentProps } from '../../../types'

import ButtonOption from '../../../components/buttons/ButtonOption'
import Title from '../../../components/typography/Title'
import { useTaskController } from '../../../contexts/TaskControllerProvider'

export default function SelectOptionComponent({ task }: TaskComponentProps) {
  const { setIsCorrectAnswer, setCurrentQuestion, loadingSubmit } = useTaskController()

  const [selectedOptions, setSelectedOptions] = useState<string | number>()

  function addToList(optionId: number | string) {
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

  useEffect(() => {
    setCurrentQuestion(task)
  }, [])

  return (
    <>
      <S.Question>
        <S.ImageContainer>
          <img src={task.image} alt="" />
        </S.ImageContainer>
        <Title>{task?.question}</Title>
      </S.Question>

      <S.OptionsContainer>
        {task?.options?.map(({ title, _id, isCorrect }) => (
          <S.ButtonsContainer key={_id}>
            <ButtonOption key={_id} isSelected={selectedOptions === _id} onClick={() => handleCheckIsCorrect(_id!, isCorrect!)}>
              {title}
            </ButtonOption>
          </S.ButtonsContainer>
        ))}
      </S.OptionsContainer>
    </>
  )
}
