import { createContext, useState, useEffect, useContext } from "react";
// import FitCultural from "service/fitCultural/fitCultural";

import { ReactProps, QuestionProps, TaskProps } from "../types";

export const TaskControllerContext = createContext({});

export default function TaskControllerProvider({ children }: ReactProps) {
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<TaskProps[]>();
  const [currentTask, setCurrentTask] = useState<QuestionProps[]>();
  const [errors, setErrors] = useState(0);
  const [hits, setHits] = useState(0);


  const [loadingSubmit, setLoadingSubmit] = useState(false);


  async function findFitCultural(_id: string) {
    try {
      setLoadingSubmit(true);
      // const selectedFitCultural = await FitCultural.find(_id);
      const selectedFitCultural = {};

      return selectedFitCultural;
    } catch (e) {
      console.log("error", e);
      setLoadingSubmit(false);
    }
  }

  return (
    <TaskControllerContext.Provider
      value={{
        findFitCultural,
        isCorrectAnswer,setIsCorrectAnswer,
        loadingSubmit, setLoadingSubmit,
        currentQuestion, setCurrentQuestion,
        currentTask, setCurrentTask,
        errors, setErrors,
        hits, setHits,
      }}
    >
      {children}
    </TaskControllerContext.Provider>
  );
}


export function useTaskController() {
  const context = useContext(TaskControllerContext);

  const {
    findFitCultural,
    isCorrectAnswer,setIsCorrectAnswer,
    loadingSubmit, setLoadingSubmit,
    currentQuestion, setCurrentQuestion,
    currentTask, setCurrentTask,
    errors, setErrors,
    hits,   setHits,
  }: any = context;

  return {
    findFitCultural,
    isCorrectAnswer,setIsCorrectAnswer,
    loadingSubmit, setLoadingSubmit,
    currentQuestion, setCurrentQuestion,
    currentTask, setCurrentTask,
    errors, setErrors,
    hits,   setHits,
  };
}