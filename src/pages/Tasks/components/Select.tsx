import { useEffect, useState } from 'react'
import * as S from '../Tasks.styled'

import { OptionProps, TaskComponentProps } from '../../../types'

import ButtonOption from '../../../components/buttons/ButtonOption'
import Title from '../../../components/typography/Title'
import { useTaskController } from '../../../contexts/TaskControllerProvider'

export default function SelectTaskComponent({ task }: TaskComponentProps) {
  const { setIsCorrectAnswer, setCurrentQuestion, loadingSubmit } = useTaskController()

  const [selectedOptions, setSelectedOptions] = useState<(string | number)[]>([])

  function getSelectedOptionValue(option: string | number) {
    const optionSelected: OptionProps[] | undefined = task?.options?.filter((element) => element?._id === option)

    if (!optionSelected) return

    const titleSelected: OptionProps | undefined = optionSelected?.at(0)

    if (!titleSelected) return

    return titleSelected
  }

  function removeFromSelectedList(value) {
    const allSelectedOptions: (string | number)[] = [...selectedOptions]

    for (let i = allSelectedOptions.length - 1; i >= 0; i--) {
      if (allSelectedOptions[i] === value) {
        allSelectedOptions.splice(i, 1)
      }
    }

    setSelectedOptions(allSelectedOptions)
    handleCheckIsCorrect(allSelectedOptions)
  }

  function addToList(optionId: number | string) {
    if (loadingSubmit) return

    const allSelectedOptions = [...selectedOptions]

    const isSelectedaAlready = allSelectedOptions.includes(optionId)

    if (isSelectedaAlready) return removeFromSelectedList(optionId)

    allSelectedOptions.push(optionId)

    setSelectedOptions(allSelectedOptions)

    handleCheckIsCorrect(allSelectedOptions)
  }

  function handleCheckIsCorrect(optionIds: (number | string)[]) {
    const totalCorrects: OptionProps[] | undefined = task.options
      ?.filter((option) => option.isCorrect === true)
      .sort((previous: OptionProps, next: OptionProps) =>
        previous!._id! > next!._id! ? 1 : next!._id! > previous!._id! ? -1 : 0,
      )

    const userAnwer: OptionProps[] | undefined = optionIds
      .map((optionId) => getSelectedOptionValue(optionId)!)
      .sort((previous: OptionProps, next: OptionProps) =>
        previous?._id! > next?._id! ? 1 : next!._id! > previous!._id! ? -1 : 0,
      )

    const isCorrect = JSON.stringify(userAnwer) === JSON.stringify(totalCorrects)

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

      <S.OptionsSelected>
        <S.OptionsContainer>
          {selectedOptions.map((option, _id) => {
            const buttonProps = getSelectedOptionValue(option)
            return <ButtonOption key={_id} onClick={() => addToList(buttonProps?._id!)}>{buttonProps?.title}</ButtonOption>
          })}
        </S.OptionsContainer>
      </S.OptionsSelected>

      <S.OptionsContainer>
        {task?.options?.map(({ title, _id }) => (
          <ButtonOption key={_id} isUnSet={selectedOptions.includes(_id!)} onClick={() => addToList(_id!)}>
            {title}
          </ButtonOption>
        ))}
      </S.OptionsContainer>
    </>
  )
}
