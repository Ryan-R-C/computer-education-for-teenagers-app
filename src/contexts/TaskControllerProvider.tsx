import { createContext, useContext, useState } from 'react'
import UserScoreService from '../service/UserScores'

import { QuestionProps, ReactProps, TaskProps } from '../types'
import { getTaskId, getUserId, setUserScore } from '../utils/localStorage'

export const TaskControllerContext = createContext({})

export default function TaskControllerProvider({ children }: ReactProps) {
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false)
  const [currentQuestion, setCurrentQuestion] = useState<TaskProps[]>()
  const [currentTask, setCurrentTask] = useState<QuestionProps[]>()
  const [errors, setErrors] = useState(0)
  const [hits, setHits] = useState(0)

  const [loadingSubmit, setLoadingSubmit] = useState(false)

  async function handleSubmitTasks() {
    const userId = getUserId()
    const taskId = getTaskId()

    const userScore = {
      hits: hits,
      misses: errors,
      user: userId,
      task: taskId,
      level: 1,
    }

    const updatedUserScore = await UserScoreService.createOrUpdate(userScore)

    if (updatedUserScore) setUserScore(userScore)

    setLoadingSubmit(false)
  }

  return (
    <TaskControllerContext.Provider
      value={{
        handleSubmitTasks,
        isCorrectAnswer,
        setIsCorrectAnswer,
        loadingSubmit,
        setLoadingSubmit,
        currentQuestion,
        setCurrentQuestion,
        currentTask,
        setCurrentTask,
        errors,
        setErrors,
        hits,
        setHits,
      }}
    >
      {children}
    </TaskControllerContext.Provider>
  )
}

export function useTaskController() {
  const context = useContext(TaskControllerContext)

  const {
    handleSubmitTasks,
    isCorrectAnswer,
    setIsCorrectAnswer,
    loadingSubmit,
    setLoadingSubmit,
    currentQuestion,
    setCurrentQuestion,
    currentTask,
    setCurrentTask,
    errors,
    setErrors,
    hits,
    setHits,
  }: any = context

  return {
    handleSubmitTasks,
    isCorrectAnswer,
    setIsCorrectAnswer,
    loadingSubmit,
    setLoadingSubmit,
    currentQuestion,
    setCurrentQuestion,
    currentTask,
    setCurrentTask,
    errors,
    setErrors,
    hits,
    setHits,
  }
}
