import { useState } from "react";
import * as S from "../Tasks.styled";
import { Link, useNavigate } from "react-router-dom";

import { OptionProps, QuestionProps, TaskComponentProps } from "../../../types";

import ButtonOption from "../../../components/buttons/ButtonOption";
import ImageButtonOption from "../../../components/buttons/ImageButtonOption";
import Title from "../../../components/typography/Title";
import { useTaskController } from "../../../contexts/TaskControllerProvider";
import { load } from "nock/types";

export default function SelectImageOptionComponent({ task }: TaskComponentProps) {

  const {
    isCorrectAnswer,
    setIsCorrectAnswer, setCurrentQuestion,
    loadingSubmit, setLoadingSubmit
  } = useTaskController()

  const [selectedOptions, setSelectedOptions] = useState<(string | number)>();

  function addToList(optionId: number | string) {
    if(!!loadingSubmit) return;

    console.log(loadingSubmit)

    setCurrentQuestion(task)

    const allSelectedOptions = selectedOptions

    const isSelectedaAlready = allSelectedOptions ===optionId

    if (isSelectedaAlready) return;

    setSelectedOptions(optionId)
  }



  function handleCheckIsCorrect(optionId: number | string, isCorrect: boolean) {
    if(!!loadingSubmit) return;
    

    addToList(optionId)

    if (isCorrect) setIsCorrectAnswer(true)
    else setIsCorrectAnswer(false)

  }



  return (
    <>
      <S.Question>
        <div className="space">
          <Title>
            {task?.question}
          </Title>
        </div>
      </S.Question>
      <div>
        <S.TaskContainer>
          <S.AnswerContainer>
            <S.OptionsContainer>
              {
                task?.options?.map(
                  ({ title, _id, image, isCorrect }) => (
                    <>
                      <ImageButtonOption image={image} key={_id} isSelected={selectedOptions ===_id} onClick={() => handleCheckIsCorrect(_id!, isCorrect!)}>
                        {title}
                      </ImageButtonOption>
                    </>
                  )
                )
              }
            </S.OptionsContainer>

          </S.AnswerContainer>
        </S.TaskContainer>
      </div>


    </>
  );
}
