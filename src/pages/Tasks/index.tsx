import { useEffect, useState } from "react";
import * as S from "./Tasks.styled";
import { Link, useNavigate } from "react-router-dom";

import DefaultButtonBorderFeatured from "../../components/buttons/DefaultButtonBorderFeatured";
import FeaturedButtonBorderFeatured from "../../components/buttons/FeaturedButtonBorderFeatured";
import FlexContainer from "../../components/boxes/FlexContainer";

import Icons from "../../components/icons";

import CardContainer from "../../components/boxes/CardContainer";
import { OptionProps, QuestionProps, TaskProps } from "../../types";
import Bar from "../../components/boxes/Bar";
import PlayIcon from "../../components/icons/PlayIcon";
import DefaultButtonGrouped from "../../components/buttons/ButtonGrouped";
import HeaderBar from "../../components/boxes/header/HeaderBar";
import Footer from "../../components/boxes/Footer";
import UncheckIcon from "../../components/icons/UncheckIcon";
import CheckIcon from "../../components/icons/CheckIcon";
import ButtonOption from "../../components/buttons/ButtonOption";
import DefaultButtonEmphasis from "../../components/buttons/DefaultButtonEmphasis";
import Title from "../../components/typography/Title";
import SelectTaskComponent from "./components/Select";
import SelectOptionComponent from "./components/Options";
import SelectImageOptionComponent from "./components/ImageOptions";
import { useTaskController } from "../../contexts/TaskControllerProvider";
import MessageIcon from "../../components/icons/MessageIcon";
import FlagIcon from "../../components/icons/FlagIcon";
import { error } from "console";
export default function Tasks({ }) {
  const {
    isCorrectAnswer,setIsCorrectAnswer,
    loadingSubmit, setLoadingSubmit,
    currentQuestion,
    errors, setErrors,
    hits,   setHits,
  } = useTaskController()

  const [currentTask, setCurrentTask] = useState(0);

  const [taksAvaliable, setTaksAvaliable] = useState<number>(1);
  const [tasksDone, setTasksDone] = useState<number>(0);


  // Criar um componente baseado em todas as funcionalidades ao invés de criar um global cheio de ifs
  // em caso de select
  // apenas 100% correto caso todos os elementos selecionados forem verdadeiros

  const tasks: QuestionProps[] = [
    {

      question: 'string',
      answer: 'string',
      isCorrect: false,
      type: 'choise',
      image: 'https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg',

      options: [
        {
          title: 'is Boolean',
          isCorrect: false,
          id: 0
        },
        {
          title: 'is Number',
          isCorrect: false,
          id: 1
        },
        {
          title: 'is String',
          isCorrect: true,
          id: 2
        },
        {
          title: 'is Array',
          isCorrect: false,
          id: 3
        },
      ]
    },
    {

      question: 'What is a string ?',
      answer: 'string',
      isCorrect: false,
      type: 'select',
      image: 'https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg',

      options: [
        {
          title: 'is Boolean',
          isCorrect: false,
          id: 0
        },
        {
          title: 'is Number',
          isCorrect: false,
          id: 1
        },
        {
          title: 'characters',
          isCorrect: true,
          id: 2
        },
        {
          title: 'is Array of',
          isCorrect: true,
          id: 3
        },
      ]
    },
    {
      question: 'string',
      answer: 'string',
      isCorrect: false,
      type: 'selectImage',
      image: 'https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg',

      options: [
        {
          image: 'https://www.tiquetaque.com/_next/static/images/Evite-dores-de-cabeca-75eda1b99d8f1df818db53aae8d6f96a.png',
          title: 'is Boolean',
          isCorrect: false,
          id: 0
        },
        {
          image: 'https://www.kindpng.com/picc/m/185-1857873_yellow-objects-png-banana-png-transparent-png.png',
          title: 'is Number',
          isCorrect: false,
          id: 1
        },
        {
          image: 'https://www.nicepng.com/png/detail/46-466836_diamond-e-25-asset-inanimate-objects-assets.png',
          title: 'is String',
          isCorrect: true,
          id: 2
        },
        {
          image: 'https://www.pngarts.com/files/4/Object-PNG-Image.png',
          title: 'is Array',
          isCorrect: false,
          id: 3
        },
      ]

    }
  ]

  const TaskComponentProps = {
    selectImage: SelectImageOptionComponent,
    select: SelectTaskComponent,
    choise: SelectOptionComponent,
  }

  async function handleSubmitTasks() {
    if(!loadingSubmit) return setLoadingSubmit(true);


    if (isCorrectAnswer) setHits(hits + 1)
    else setErrors(errors + 1)

    setTasksDone(tasksDone+1)

    if (currentTask < tasks.length - 1){

      setCurrentTask(currentTask + 1)
      setLoadingSubmit(false)
      
    }

    else {
      // terminar a atividade haha
    }

  }


  useEffect(
    () => {
      setTaksAvaliable(tasks.length)

    }, 
  )





  


  return (
    <S.Container>
      <HeaderBar>
        <Bar percentage={tasksDone / taksAvaliable * 100} />

        <S.ScoreContainer>

          <S.ItemScore>
            <UncheckIcon />
            {
              errors
            }
          </S.ItemScore>

          <S.ItemScore>
            <CheckIcon />
            {
              hits
            }
          </S.ItemScore>

        </S.ScoreContainer>

      </HeaderBar>

      <div>
        <S.TaskContainer>
          <S.AnswerContainer>
            {
              tasks.map(
                (task, i) => {
                  const Task = TaskComponentProps[task!.type!]
                  return (
                    i == currentTask && <Task task={task} key={i}>
                    </Task>
                  )
                }
              )
            }

            {/* Manual Set */}
            {/* <SelectTaskComponent task={task} /> */}
            {/* <SelectOptionComponent task={task}/> */}
            {/* <SelectImageOptionComponent task={taskImage}/> */}

          </S.AnswerContainer>
        </S.TaskContainer>
      </div>

      {/* <S.ResponseContainer theme={`${ true && `show ${true ? `correct` : `wrong`} `}`}> */}
      <S.ResponseContainer theme={`${ loadingSubmit && `show ${isCorrectAnswer ? `correct` : `wrong`} `}`}>
        <div className="messageContainer">
            {
             isCorrectAnswer ? (
              <div>
                <Title>
                  Certo!
                </Title>
              </div>
              ) : (
                <div>
                <Title>
                  Resposta correta:
                </Title>
                  <p>
                    {
                      currentQuestion?.answer
                    }
                  </p>
                </div>
              )
            }
          <div className="iconsContainer">
            <MessageIcon color="white"/>
            <FlagIcon    color="white"/>
          </div>
          </div>
      </S.ResponseContainer>

      <S.SubmitContainer>


        
        
        <DefaultButtonEmphasis
        theme={(!isCorrectAnswer &&  loadingSubmit) && 'error' }
        onClick={() => handleSubmitTasks()}>
          Responder
        </DefaultButtonEmphasis>
        
      </S.SubmitContainer>
        
        {/*
          dependendo da resposta é exibido uma mensagem
            erro -> explicação
            acerto -> elogio
        */}
        
    </S.Container>

  );
}
