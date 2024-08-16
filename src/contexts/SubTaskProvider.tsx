import { createContext, useContext, useState } from 'react'
import SubTaskService from '../service/SubTasks'

import { ReactProps, SubTaskProps } from '../types'

export const SubTasksContext = createContext({})

export default function SubTasksProvider({ children }: ReactProps) {
  const [subTasks, setSubTask] = useState<SubTaskProps[] | any>()

  const [loadingSubmit, setLoadingSubmit] = useState(false)

  async function loadSubTask(filter?: string) {
    setLoadingSubmit(false)

    const allSubTask = await SubTaskService.listWithManyFilters(filter)
    setSubTask(allSubTask)

    return allSubTask
  }

  async function findSubTask(_id: string) {
    try {
      setLoadingSubmit(true)
      const selectedSubTask = await SubTaskService.find(_id)

      return selectedSubTask
    } catch (e) {
      console.error('error', e)
      setLoadingSubmit(false)
    }
  }

  async function createSubTask(data: SubTaskProps) {
    try {
      setLoadingSubmit(true)
      const isCreated = await SubTaskService.create(data)
      if (isCreated) await loadSubTask()

      return isCreated
    } catch (e) {
      console.error('error', e)
      setLoadingSubmit(false)
    }
  }

  async function updateSubTask(_id: string, data: SubTaskProps) {
    try {
      setLoadingSubmit(true)

      const isUpdated = await SubTaskService.update(_id, data)
      if (isUpdated) await loadSubTask()

      return isUpdated
    } catch (e) {
      console.error('error', e)
      setLoadingSubmit(false)
    }
  }

  async function deleteSubTask(_id: string) {
    try {
      setLoadingSubmit(true)
      await SubTaskService.delete(_id)
      loadSubTask()
    } catch (e) {
      console.error('error', e)
      setLoadingSubmit(false)
    }
  }

  return (
    <SubTasksContext.Provider
      value={{
        subTasks,
        setSubTask,
        loadSubTask,
        createSubTask,
        findSubTask,
        updateSubTask,
        deleteSubTask,
        loadingSubmit,
        setLoadingSubmit,
      }}
    >
      {children}
    </SubTasksContext.Provider>
  )
}

export function useSubTasks() {
  const context = useContext(SubTasksContext)

  const {
    subTasks,
    setSubTask,
    loadSubTask,
    createSubTask,
    findSubTask,
    updateSubTask,
    deleteSubTask,
    loadingSubmit,
    setLoadingSubmit,
  }: any = context

  return {
    subTasks,
    setSubTask,
    loadSubTask,
    createSubTask,
    findSubTask,
    updateSubTask,
    deleteSubTask,
    loadingSubmit,
    setLoadingSubmit,
  }
}
