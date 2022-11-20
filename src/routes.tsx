import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskControllerProvider from "./contexts/TaskControllerProvider";
import TaskProvider from "./contexts/TaskProvider";
import SubTaskProvider from "./contexts/SubTaskProvider";
import QuestionProvider from "./contexts/QuestionProvider";
import OptionsProvider from "./contexts/OptionsProvider";
import UsersProvider from "./contexts/UsersProvider";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import TaskExplanation from "./pages/TaskExplanation";
import Tasks from "./pages/Tasks";
import Test from "./pages/Test";
import UserScoresProvider from "./contexts/UserScoresProvider";

export const footerProps = [
  {
    icon: "HomeIcon",
    path: "/dashboard/",
  },
  {
    icon: "TaskSquareIcon",
    path: "/last-task/"
  },
  {
    icon: "ProfileIcon",
    path: "/profile/"
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
                            <Route path="/test/" element={<Test />} />
                            {/*
                            <Route path="/cadastro" element={<SignUp />} />
                            */}
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
};

export default RoutesApp;
