import { useEffect, useState } from "react";
import * as S from "../Tasks.styled";
import { Link, useNavigate } from "react-router-dom";

import { OptionProps, QuestionProps, TaskComponentProps } from "../../../types";

import ButtonOption from "../../../components/buttons/ButtonOption";
import Title from "../../../components/typography/Title";
import { useTaskController } from "../../../contexts/TaskControllerProvider";

export default function SelectOptionComponent({ task }: TaskComponentProps) {

  const {
    isCorrectAnswer, setIsCorrectAnswer,
    setCurrentQuestion,
    loadingSubmit, setLoadingSubmit
  } = useTaskController()
  
  
  const [selectedOptions, setSelectedOptions] = useState<(string | number)>();
  
  function addToList(optionId: number | string) {

    const allSelectedOptions = selectedOptions

    const isSelectedaAlready = allSelectedOptions == optionId


    if (isSelectedaAlready) return;


    setSelectedOptions(optionId)

  }


  function handleCheckIsCorrect(optionId: number | string, isCorrect: boolean) {
    if(!!loadingSubmit) return;

    addToList(optionId)

    if (isCorrect) setIsCorrectAnswer(true)
    else setIsCorrectAnswer(false)

  }


  useEffect(
    () => {
      setCurrentQuestion(task)
    }, []
  )



  return (
    <>
      <S.Question>
        <S.ImageContainer>
          <img src={task.image} alt="" />
        </S.ImageContainer>
        <Title>
          {task?.question}
        </Title>
      </S.Question>

      {/* Options list */}
      <S.OptionsContainer>
        {
          task?.options?.map(
            ({ title, id, isCorrect }) => (
              <S.ButtonsContainer>
                <ButtonOption key={id} isSelected={selectedOptions == id} onClick={() => handleCheckIsCorrect(id!, isCorrect!)}>
                  {title}
                </ButtonOption>
              </S.ButtonsContainer>
            )
          )
        }
      </S.OptionsContainer>

    </>
  );
}
