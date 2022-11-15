import { createContext, useState, useEffect, useContext } from "react";
import QuestionService from "../service/Questions";

import { QuestionProps, ReactProps } from "../types";

export const QuestionsContext = createContext({});

export default function QuestionsProvider({ children }: ReactProps) {
  const [questions, setQuestion] = useState<QuestionProps[] | any>();

  const [loadingSubmit, setLoadingSubmit] = useState(false);

  async function loadQuestion(filter?: string) {
    setLoadingSubmit(false);

    const allQuestion = await QuestionService.listWithManyFilters(filter);
    setQuestion(allQuestion);

    return allQuestion;
  }

  async function findQuestion(_id: string) {
    try {
      setLoadingSubmit(true);
      const selectedQuestion = await QuestionService.find(_id);

      return selectedQuestion;
    }
    
    catch (e) {
      console.log("error", e);
      setLoadingSubmit(false);
    }
  }

  async function createQuestion(data: QuestionProps) {
    try {
      setLoadingSubmit(true);
      const isCreated = await QuestionService.create(data);
      if (isCreated) await loadQuestion();

      return isCreated;
    }
    
    catch (e) {
      console.log("error", e);
      setLoadingSubmit(false);
    }
  }

  async function updateQuestion(_id: string, data: QuestionProps) {
    try {
      setLoadingSubmit(true);

      const isUpdated = await QuestionService.update(_id, data);
      if (isUpdated) await loadQuestion();

      return isUpdated;
    }
    
    catch (e) {
      console.log("error", e);
      setLoadingSubmit(false);
    }
  }

  async function deleteQuestion(_id: string) {
    try {
      setLoadingSubmit(true);
      await QuestionService.delete(_id);
      loadQuestion();
    }
    
    catch (e) {
      console.log("error", e);
      setLoadingSubmit(false);
    }
  }


  return (
    <QuestionsContext.Provider
      value={{
        questions,
        setQuestion,
        loadQuestion,
        createQuestion,
        findQuestion,
        updateQuestion,
        deleteQuestion,
        loadingSubmit,
        setLoadingSubmit,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}

export function useQuestions() {
  const context = useContext(QuestionsContext);

  const {
    questions,
    setQuestion,
    loadQuestion,
    createQuestion,
    findQuestion,
    updateQuestion,
    deleteQuestion,
    loadingSubmit,
    setLoadingSubmit,
  }: any = context;

  return {
    questions,
    setQuestion,
    loadQuestion,
    createQuestion,
    findQuestion,
    updateQuestion,
    deleteQuestion,
    loadingSubmit,
    setLoadingSubmit,
  };
}
