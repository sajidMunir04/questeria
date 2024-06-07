import './App.css'
import 'tailwindcss/tailwind.css';
import NavSection from './components/common/NavSection';
import { useState } from 'react';
import Dashboard from './components/main/Dashboard';
import Quizzes from './components/main/Quizzes';
import CreateQuiz from './components/main/CreateQuiz';
import DashboardHeader from './components/common/DashboardHeader';

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

  return (<div className='flex w-100 h-100'>
    <NavSection onDashboardButtonClick={handleDashboardButton} 
    onQuizzesButtonClick={handleQuizzesButton} onCreateQuizButtonClick={handleCreateQuizButton}/>
    <div className='flex flex-col w-4/5 h-max' >
    {<>
      {selectedView === SelectedView.Dashboard && <DashboardHeader/>}
      {selectedView === SelectedView.Quizzes && <DashboardHeader/>}
      {selectedView === SelectedView.CreateQuiz && <DashboardHeader/>}
    </>}
    {<>
    {selectedView === SelectedView.Dashboard && <Dashboard/>}
    {selectedView === SelectedView.Quizzes && <Quizzes/>}
    {selectedView === SelectedView.CreateQuiz && <CreateQuiz/>}
    </>}
    </div>
</div>);
}


enum SelectedView{
  Dashboard,
  Quizzes,
  CreateQuiz
}

export default App;
