import { createContext, useState, useEffect, useContext } from "react";
import TaskService from "../service/Tasks";

import { TaskProps, ReactProps } from "../types";

export const TasksContext = createContext({});

export default function TasksProvider({ children }: ReactProps) {
  const [tasks, setTask] = useState<TaskProps[] | any>();

  const [loadingSubmit, setLoadingSubmit] = useState(false);

  async function loadTask(filter?: string) {
    setLoadingSubmit(false);

    console.log(filter);
    const allTask = await TaskService.listWithManyFilters(filter);
    setTask(allTask);

    return allTask;
  }

  async function findTask(_id: string) {
    try {
      setLoadingSubmit(true);
      const selectedTask = await TaskService.find(_id);

      return selectedTask;
    }
    
    catch (e) {
      console.log("error", e);
      setLoadingSubmit(false);
    }
  }

  async function createTask(data: TaskProps) {
    try {
      setLoadingSubmit(true);
      const isCreated = await TaskService.create(data);
      if (isCreated) await loadTask();

      return isCreated;
    }
    
    catch (e) {
      console.log("error", e);
      setLoadingSubmit(false);
    }
  }

  async function updateTask(_id: string, data: TaskProps) {
    try {
      setLoadingSubmit(true);

      const isUpdated = await TaskService.update(_id, data);
      if (isUpdated) await loadTask();

      return isUpdated;
    }
    
    catch (e) {
      console.log("error", e);
      setLoadingSubmit(false);
    }
  }

  async function deleteTask(_id: string) {
    try {
      setLoadingSubmit(true);
      await TaskService.delete(_id);
      loadTask();
    }
    
    catch (e) {
      console.log("error", e);
      setLoadingSubmit(false);
    }
  }


  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTask,
        loadTask,
        createTask,
        findTask,
        updateTask,
        deleteTask,
        loadingSubmit,
        setLoadingSubmit,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);

  const {
    tasks,
    setTask,
    loadTask,
    createTask,
    findTask,
    updateTask,
    deleteTask,
    loadingSubmit,
    setLoadingSubmit,
  }: any = context;

  return {
    tasks,
    setTask,
    loadTask,
    createTask,
    findTask,
    updateTask,
    deleteTask,
    loadingSubmit,
    setLoadingSubmit,
  };
}
