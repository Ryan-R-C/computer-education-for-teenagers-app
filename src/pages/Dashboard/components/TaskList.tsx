import { useEffect, useMemo, useState } from "react";
import * as S from "../Dashboard.styled";
import { Link } from "react-router-dom";

import Icons from "../../../components/icons";
import CardContainer from "../../../components/boxes/CardContainer";
import Bar from "../../../components/boxes/Bar";
import PlayIcon from "../../../components/icons/PlayIcon";
import { TaskPropsChildren } from "../../../types";



export default function TaskList({ tasksAvaliable }: TaskPropsChildren) {
  return (
    <>
     <S.TaskContainer>
          {
            tasksAvaliable?.map(
              ({
                title,
                subTasks,
                tasksFinished,
                icon,
                _id,
              },
                index
              ) => {
                const Icon = Icons[icon]

                const tasksQuantity = subTasks!.length

                {/* PEGAR A LENGHT DAS TASKS FINALIZADAS, CASO FOR IGUAL AO SUBTASKS DIMINUIR 1 */}
                const currentSubtaskId = (subTasks[tasksFinished || 0]._id)

                return (
                  <CardContainer key={_id + index}>
                    <S.TitleContainer>
                      <Link to={`/explanation-task/${currentSubtaskId}`}>
                        <S.IconContainer>
                          <Icon size={66} />
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
                        <Bar percentage={tasksFinished / tasksQuantity * 100} />
                        <p>{tasksFinished}/{tasksQuantity}</p>
                      </div>
                      <Link to={`/explanation-task/${currentSubtaskId}`}>
                        <PlayIcon size={50} />
                      </Link>
                    </S.BarContainer>
                  </CardContainer>
                )
              }
            )
          }
        </S.TaskContainer>
    </>
  )

}
