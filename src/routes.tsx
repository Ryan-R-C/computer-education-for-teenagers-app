import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskControllerProvider from "./contexts/TaskControllerProvider";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import TaskExplanation from "./pages/TaskExplanation";
import Tasks from "./pages/Tasks";
import Test from "./pages/Test";

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
          <TaskControllerProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/dashboard/" element={<Dashboard />} />
                <Route path="/explanation-task/:id" element={<TaskExplanation />} />
                <Route path="/task/:id" element={<Tasks />} />
                <Route path="/test/" element={<Test />} />
                {/*
                <Route path="/cadastro" element={<SignUp />} /> */}
            
              </Routes>
            </BrowserRouter>
          </TaskControllerProvider>
  )
};

export default RoutesApp;
