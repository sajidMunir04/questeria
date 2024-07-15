import { useState } from "react";
import AccountPanel from "../components/common/AccountPanel";
import DashboardHeader from "../components/common/DashboardHeader";
import NavSection from "../components/common/NavSection";
import CreateQuiz from "../components/main/CreateQuiz";
import Dashboard from "../components/main/Dashboard";
import Quizzes from "../components/main/Quizzes";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { AuthenticationState } from "../components/authentication/authState";
import LoginForm from "../components/authentication/LoginForm";
import SignupForm from "../components/authentication/SignupForm";
import { setToNone } from "../app/slices/authenticationSlice";


function MainPage() {

    const [selectedView,setSelectedView] = useState<SelectedView>(SelectedView.Dashboard);
    const authState = useAppSelector((state) => state.authenticationState.authState);
    const dispatch = useAppDispatch();

    const handleDashboardButton = () => {
      setSelectedView(SelectedView.Dashboard);
    }
  
    const handleQuizzesButton = () => {
      setSelectedView(SelectedView.Quizzes);
    }
  
    const handleCreateQuizButton = () => {
      setSelectedView(SelectedView.CreateQuiz);
    }


    return (<div className='flex w-full h-full bg-slate-100'>

      {(authState === AuthenticationState.LoginForm || authState === AuthenticationState.SignUpForm || 
      authState === AuthenticationState.NotAuthorized) && 
      <div className='w-full h-full absolute bg-slate-100 flex z-10'>
        <button type='button' className='absolute top-0 right-4 w-8 h-8' onClick={() => {
          dispatch(setToNone())
        }}><img className='w-full h-full' src="public/images/common/close.svg"/></button>
      {(authState === AuthenticationState.LoginForm || authState === AuthenticationState.NotAuthorized) && <LoginForm/>}
      {authState === AuthenticationState.SignUpForm && <SignupForm/>}
      </div>}
        <NavSection onDashboardButtonClick={handleDashboardButton}
        onQuizzesButtonClick={handleQuizzesButton} onCreateQuizButtonClick={handleCreateQuizButton} selectedView={selectedView}/>
        <div className='flex flex-col w-full h-full p-4' >
        {<div className='flex h-24'>
          <DashboardHeader/>
          <div className='w-1/5'>
          <AccountPanel/>
            </div>
        </div>}
        {<>
        {selectedView === SelectedView.Dashboard && <Dashboard/>}
        {selectedView === SelectedView.Quizzes && <Quizzes/>}
        {selectedView === SelectedView.CreateQuiz && <CreateQuiz/>}
        </>}
        </div>
    </div>);
}



export enum SelectedView{
    Dashboard,
    Quizzes,
    CreateQuiz
  }

export default MainPage;