import { useEffect, useMemo, useState } from "react";
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
import { useTasks } from "../../contexts/TaskProvider";
import TaskList from "./components/TaskList";


export default function Dashboard({ }) {

  const {
    tasks,
    loadTaskAssociated,
  } = useTasks()

  const [activeMenu, setActiveMenu] = useState(0);
  const [tasksAvaliable, setTasksAvaliable] = useState<TaskProps[]>([]);


  function handleFilterTasks(isFinished, tasksList: TaskProps[]) {
    const filteredTasks: TaskProps[] = tasksList.filter(
      ({ subTasks, userScore }) => (subTasks?.length <= userScore[0]?.level) === isFinished
    )
    
    return filteredTasks
  }

  function handleToggleMenu(menuItem: number) {
    setActiveMenu(menuItem)

    // sets the default unfinished tasks
    let isFinished = false

    // it is explicitly finished tasks it is sets as true
    if (menuItem === 1) isFinished = true

    const finishedTasks: TaskProps[] = handleFilterTasks(isFinished, tasks)

    return setTasksAvaliable(finishedTasks);

  }

  async function handleLoadTasks(){
    const allTasks = await loadTaskAssociated()

    const unfinishedTasks = handleFilterTasks(false, allTasks)

    setTasksAvaliable(unfinishedTasks)
  }

  useEffect(
    () => {
      handleLoadTasks()
    }, []
  )


  const Test = () => <>
      <TaskList tasksAvaliable={tasksAvaliable} />
    </>
  



  return (
    <S.Container>
      <HeaderBar>

      </HeaderBar>
      <S.StepContainer>
        <DefaultButtonGrouped
          onClick={() => handleToggleMenu(0)}
          variant={`left ${activeMenu !== 0 ? 'white' : ''}`}
        >
          Pendentes
        </DefaultButtonGrouped>
        <DefaultButtonGrouped
          onClick={() => handleToggleMenu(1)}
          variant={`right ${activeMenu !== 1 ? 'white' : ''}`}
        >
          Finalizadas
        </DefaultButtonGrouped>
      </S.StepContainer>
      <>



      <TaskList tasksAvaliable={tasksAvaliable} />



      </>
      <Footer />
    </S.Container>

  );
}
