import { useState } from "react";
import * as S from "./Dashboard.styled";
import { Link, useNavigate } from "react-router-dom";

import DefaultButtonBorderFeatured from "../../components/buttons/DefaultButtonBorderFeatured";
import FeaturedButtonBorderFeatured from "../../components/buttons/FeaturedButtonBorderFeatured";
import FlexContainer from "../../components/boxes/FlexContainer";
import Icons from "../../components/icons";
import CardContainer from "../../components/boxes/CardContainer";
import { TaskProps } from "../../types";
import Bar from "../../components/boxes/Bar";
import PlayIcon from "../../components/icons/PlayIcon";
import DefaultButtonGrouped from "../../components/buttons/ButtonGrouped";
import HeaderBar from "../../components/boxes/header/HeaderBar";
import Footer from "../../components/boxes/Footer";

var tasks: TaskProps[] = [
  {
    title: "Arquitetura de computadores",
    tasksQuantity: 10, // isFinished = tasksQuantity == tasksFinished
    tasksFinished: 10,
    icon: "CpuIcon",
    id: "1",
  },
  {
    title: "Lógica",
    tasksQuantity: 12, // isFinished = tasksQuantity == tasksFinished
    tasksFinished: 8,
    icon: "ConnectionIcon",
    id: "1",
  },
  {
    title: "História da Internet",
    tasksQuantity: 10, // isFinished = tasksQuantity == tasksFinished
    tasksFinished: 0,
    icon: "WebIcon",
    id: "1",
  },
]

export default function Dashboard( {}) {
  const [activeMenu, setActiveMenu] = useState(0);
  const [tasksAvaliable, setTasksAvaliable] = useState<TaskProps[]>(handleFilterTasks(false));


  function handleFilterTasks(isFinished){
    const filteredTasks: TaskProps[] = tasks.filter(
      ({tasksQuantity, tasksFinished}) =>  (tasksQuantity === tasksFinished) === isFinished
    )
    return filteredTasks
  
  }

  function handleToggleMenu(menuItem: number){
    setActiveMenu(menuItem)

    // sets the default unfinished tasks
    let isFinished = false

    // it is explicitly finished tasks it is sets as true
    if(menuItem === 1) isFinished = true
    
    const finishedTasks: TaskProps[] = handleFilterTasks(isFinished)

    return setTasksAvaliable(finishedTasks);  

  }


  


  return (
    <S.Container>
      <HeaderBar>
        
      </HeaderBar>
      <S.StepContainer>
          <DefaultButtonGrouped
            onClick={() => handleToggleMenu(0)}
            variant={`left ${ activeMenu !== 0 ? 'white' : ''}`}
            >
            Pendentes
          </DefaultButtonGrouped>
          <DefaultButtonGrouped
            onClick={() => handleToggleMenu(1)}
            variant={`right ${ activeMenu !== 1 ? 'white' : ''}`}
            >
            Finalizadas
          </DefaultButtonGrouped>
      </S.StepContainer>
      <>
        <S.TaskContainer>
          {
            tasksAvaliable?.map(
              ({
                title,
                tasksQuantity,
                tasksFinished,
                icon,
                id,
              },
              index
              ) => {
                const Icon = Icons[icon]

                return (
                  <CardContainer key={id + index}>
                  <S.TitleContainer>
                    <Link to={`/explanation-task/${id}`}>
                      <S.IconContainer>
                        <Icon  size={66} />
                      </S.IconContainer>
                    </Link>
                    <p>
                      {
                        title
                      }
                    </p>
                  </S.TitleContainer>

                  <S.BarContainer>
                    <div>
                      <Bar percentage={tasksFinished / tasksQuantity * 100}/>
                      <p>{tasksFinished}/{tasksQuantity}</p>
                    </div>
                    <Link to={`/explanation-task/${id}`}>
                      <PlayIcon size={50}/>
                    </Link>
                  </S.BarContainer>
                </CardContainer>
              )              
              }
              )
          }

        </S.TaskContainer>
      </>
      <Footer/>
    </S.Container>

  );
}
