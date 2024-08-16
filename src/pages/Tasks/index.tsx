import { useEffect, useState } from "react";
import * as S from "./Tasks.styled";
import { Link, useNavigate, useParams } from "react-router-dom";

import DefaultButtonBorderFeatured from "../../components/buttons/DefaultButtonBorderFeatured";
import FeaturedButtonBorderFeatured from "../../components/buttons/FeaturedButtonBorderFeatured";
import FlexContainer from "../../components/boxes/FlexContainer";

import Icons from "../../components/icons";

import CardContainer from "../../components/boxes/CardContainer";
import { OptionProps, QuestionProps, SubTaskProps, TaskProps } from "../../types";
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
import { useSubTasks } from "../../contexts/SubTaskProvider";


const TaskComponentProps = {
  image: SelectImageOptionComponent,
  select: SelectTaskComponent,
  choise: SelectOptionComponent,
  option: SelectOptionComponent,
}

export default function Tasks({ }) {
  const {
    isCorrectAnswer,setIsCorrectAnswer,
    loadingSubmit, setLoadingSubmit,
    currentQuestion,
    errors, setErrors,
    hits,   setHits,
    handleSubmitTasks
  } = useTaskController()

  const {
    findSubTask,
  } = useSubTasks()

  const { _id } = useParams()
  
  let navigate = useNavigate();



  const [currentTask, setCurrentTask] = useState(0);
  
  const [tasks, setTasks] = useState<QuestionProps[]>([]);

  const [taksAvaliable, setTaksAvaliable] = useState<number>(1);
  const [tasksDone, setTasksDone] = useState<number>(0);

  async function handleNextTask() {
    if(!loadingSubmit) return setLoadingSubmit(true);


    if (isCorrectAnswer) setHits(hits + 1)
    else setErrors(errors + 1)

    setTasksDone(tasksDone+1)

    if (currentTask < tasks?.length - 1){

      setCurrentTask(currentTask + 1)
      setLoadingSubmit(false)
      
    }

    else {
      await handleSubmitTasks()

      navigate(
        `/dashboard`
      );

    }

  }



  async function handleLoadSubTask(_id){
    const { questions } = await findSubTask(_id)

    console.log(questions)
    
    setTasks(questions)
    setTaksAvaliable(questions.length)
  }

  useEffect(
    () => {
      handleLoadSubTask(_id)
    }, [_id]
  )


  


  return (
    <S.Container>
      <S.SubContainer>
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
                tasks?.map(
                  (task, i) => {
                    const Task = TaskComponentProps[task?.type!]
        
                    return (
                        <>
                        {
                          i ===currentTask && <Task task={task} key={i}>
                          </Task>
                        }
                      </>
                    )
                  }
                )
              }
            </S.AnswerContainer>
          </S.TaskContainer>
        </div>
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
        <div style={{height: "75px"}}>

        </div>
        <S.SubmitContainer
        theme={(!isCorrectAnswer &&  loadingSubmit) && 'float' }
        >
        
        
          <DefaultButtonEmphasis
          theme={(!isCorrectAnswer &&  loadingSubmit) && 'error' }
          onClick={() => handleNextTask()}>
            Responder
          </DefaultButtonEmphasis>
        
        </S.SubmitContainer>
      </S.SubContainer>
    </S.Container>

  );
}
