import { UserScoreProps } from "../../types"
import generateBson from "../bsonGenerator"

export function getUserId(){
    let userId = localStorage.getItem("userId")

    if(!userId){
        userId = generateBson()

        console.log(userId)

        setUserId(userId)
    }

    return userId
}


export function setUserId(_id){
    localStorage.setItem("userId" , _id)
}



export function getUserScore(): UserScoreProps | null{
    let userScore: UserScoreProps | null = JSON.parse(localStorage.getItem("userScore") || '{}')

    return userScore
}


export function setUserScore(scoreData){
    const scoreDataParsed = JSON.stringify(scoreData)
    localStorage.setItem("userScore" , scoreDataParsed)
}






export function getTaskId(): string | null{
    let taskId: string | null = localStorage.getItem("taskId") || '{}'

    return taskId
}


export function setTaskId(scoreData){
    localStorage.setItem("taskId" , scoreData)
}