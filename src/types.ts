import { ReactNode, CSSProperties } from "react"

export interface iData {
    _id:    string
    value: string
}


export interface ReactProps {
    children?: ReactNode,
    style?: CSSProperties,
    onClick?: (e: any) => any,
}


export interface ButtonProps extends ReactProps {
    size?:    string | number
    color?:   string
    variant?: "Bold" | "Linear" | "Outline" | "Broken" | "Bulk" | "TwoTone" | undefined
}

  

export interface FeaturedButtonProps extends ReactProps {
  variant?: string 
  theme?: string
}




export interface OptionButtonProps extends ReactProps {
  isSelected?: boolean,
  isUnSet?: boolean, 
}

 

export interface OptionImageButtonProps extends OptionButtonProps {
  image?: string
}

  

export interface StepProps extends ReactProps {
  current?: boolean
}



export interface PercentageProps extends ReactProps {
  percentage?: number
}



export interface CircledTriangleProps extends ReactProps {
  position?: "top" | "bottom" | "right" | "left"; 
  side?:     "left" | "right"
}


export interface ContainerProps extends ReactProps {
  height?: number | string
}

export interface TaskProps  {
  
  title:         string,
  tasksQuantity: number, // isFinished = tasksQuantity === tasksFinished
  tasksFinished: number,
  icon:          string,
  _id:            string,

  tasks?: QuestionProps[]  
  subTasks: string[];
  userScore: UserScoreProps[]
  
}


export interface SubTaskProps  {
  content?: string | string[],
  questions?: QuestionProps[],
}



export interface QuestionProps  {
  _id?: string,
  question?: string,
  answer?: string,
  description?: string,
  isCorrect?: boolean,
  image?: string,
  type?: 'select' | 'choise' | 'selectImage',
  options?: OptionProps[],
}



export interface TaskComponentProps extends ReactProps, QuestionProps {
  task: QuestionProps
}

export interface OptionProps  {
  title: string,
  isCorrect: boolean,
  description?: string,
  _id?: string | number,
  image?: string,
}



export interface TaskPropsChildren  {
  tasksAvaliable?: TaskProps[]
  tasks?: TaskProps[]
}

export interface UserProps  {
  _id:      string,
  email:    string,
  nome:     string,
  nickName: string,
}


export interface UserScoreProps  {
  _id?:    string,
  user:   string,
  hits:   number,
  misses: number,
  level: number
}
