import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OptionsProvider from './contexts/OptionsProvider'
import QuestionProvider from './contexts/QuestionProvider'
import SubTaskProvider from './contexts/SubTaskProvider'
import TaskControllerProvider from './contexts/TaskControllerProvider'
import TaskProvider from './contexts/TaskProvider'
import UserScoresProvider from './contexts/UserScoresProvider'
import UsersProvider from './contexts/UsersProvider'
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
import TaskExplanation from './pages/TaskExplanation'
import Tasks from './pages/Tasks'

export const footerProps = [
  {
    icon: 'HomeIcon',
    path: '/',
  },
  {
    icon: 'TaskSquareIcon',
    path: '/dashboard/',
  },
]

const RoutesApp = () => {
  return (
    <TaskProvider>
      <SubTaskProvider>
        <QuestionProvider>
          <OptionsProvider>
            <UsersProvider>
              <UserScoresProvider>
                <TaskControllerProvider>
                  <BrowserRouter>
                    <Routes>
                      <Route path="/" element={<LandingPage />} />
                      <Route path="/dashboard/" element={<Dashboard />} />
                      <Route path="/explanation-task/:_id" element={<TaskExplanation />} />
                      <Route path="/task/:_id" element={<Tasks />} />
                    </Routes>
                  </BrowserRouter>
                </TaskControllerProvider>
              </UserScoresProvider>
            </UsersProvider>
          </OptionsProvider>
        </QuestionProvider>
      </SubTaskProvider>
    </TaskProvider>
  )
}

export default RoutesApp
