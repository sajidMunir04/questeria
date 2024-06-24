import './App.css'
import 'tailwindcss/tailwind.css';
import NavSection from './components/common/NavSection';
import { useState } from 'react';
import Dashboard from './components/main/Dashboard';
import Quizzes from './components/main/Quizzes';
import CreateQuiz from './components/main/CreateQuiz';
import DashboardHeader from './components/common/DashboardHeader';
import AccountPanel from './components/common/AccountPanel';

function App() {

  const [selectedView,setSelectedView] = useState<SelectedView>(SelectedView.Dashboard);

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

export default App;
