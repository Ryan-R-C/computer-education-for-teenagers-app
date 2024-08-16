import { createContext, useContext, useState } from 'react'
import UserScoreService from '../service/UserScores'

import { ReactProps, UserScoreProps } from '../types'
import { getUserId, getUserScore, setUserScore } from '../utils/localStorage'

export const UserScoresContext = createContext({})

export default function UserScoresProvider({ children }: ReactProps) {
  const [userScores, setUserScores] = useState<UserScoreProps[] | any>()

  const [loadingSubmit, setLoadingSubmit] = useState(false)

  async function loadUserScore(filter?: string) {
    setLoadingSubmit(false)

    const allUserScore = await UserScoreService.listWithManyFilters(filter)
    setUserScores(allUserScore)

    return allUserScore
  }

  async function findUserScore(_id: string) {
    try {
      setLoadingSubmit(true)
      const selectedUserScore = await UserScoreService.find(_id)

      return selectedUserScore
    } catch (e) {
      console.error('error', e)
      setLoadingSubmit(false)
    }
  }

  async function createUserScore(data: UserScoreProps) {
    try {
      setLoadingSubmit(true)
      const isCreated = await UserScoreService.create(data)
      if (isCreated) await loadUserScore()

      return isCreated
    } catch (e) {
      console.error('error', e)
      setLoadingSubmit(false)
    }
  }

  async function updateUserScore(_id: string, data: UserScoreProps) {
    try {
      setLoadingSubmit(true)

      const isUpdated = await UserScoreService.update(_id, data)
      if (isUpdated) await loadUserScore()

      return isUpdated
    } catch (e) {
      console.error('error', e)
      setLoadingSubmit(false)
    }
  }

  async function deleteUserScore(_id: string) {
    try {
      setLoadingSubmit(true)
      await UserScoreService.delete(_id)
      loadUserScore()
    } catch (e) {
      console.error('error', e)
      setLoadingSubmit(false)
    }
  }

  async function findOrCreateUserScore() {
    try {
      setLoadingSubmit(true)

      const userScore = getUserScore()

      const userScoreId = userScore?._id || '0'

      const user = getUserId()

      const data = {
        user,
      }

      const userData = await UserScoreService.findOrCreate(userScoreId, data)

      const parsedUserData = JSON.stringify(userData)

      setUserScore(parsedUserData)

      return userData
    } catch (e) {
      console.error('error', e)
      setLoadingSubmit(false)
    }
  }

  return (
    <UserScoresContext.Provider
      value={{
        userScores,
        setUserScores,
        loadUserScore,
        createUserScore,
        findOrCreateUserScore,
        findUserScore,
        updateUserScore,
        deleteUserScore,
        loadingSubmit,
        setLoadingSubmit,
      }}
    >
      {children}
    </UserScoresContext.Provider>
  )
}

export function useUserScores() {
  const context = useContext(UserScoresContext)

  const {
    userScores,
    setUserScores,
    loadUserScore,
    createUserScore,
    findOrCreateUserScore,
    findUserScore,
    updateUserScore,
    deleteUserScore,
    loadingSubmit,
    setLoadingSubmit,
  }: any = context

  return {
    userScores,
    setUserScores,
    loadUserScore,
    createUserScore,
    findOrCreateUserScore,
    findUserScore,
    updateUserScore,
    deleteUserScore,
    loadingSubmit,
    setLoadingSubmit,
  }
}
