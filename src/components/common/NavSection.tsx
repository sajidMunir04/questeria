import { SelectedView } from "../../App";

interface Props {
    onDashboardButtonClick:() => void,
    onQuizzesButtonClick:() => void,
    onCreateQuizButtonClick:() => void,
    selectedView : SelectedView
}


function NavSection(props : Props)  {
    return (<div className="flex items-center flex-col justify-start bg-purple-background h-full w-2/12">
        <div className='h-1/10 overflow-hidden'>
            <img className='m-auto max-w-full' src="/images/common/logo.png"/>
        </div>
        <nav className='flex flex-col w-4/6 mr-0'>
            <button type='button' className={props.selectedView === SelectedView.Dashboard ? 'border-none font-poppinsMedium text-custom-color-one rounded-l-full w-full' : 'border-none rounded-none font-poppinsMedium bg-transparent text-custom-color-one'} onClick={props.onDashboardButtonClick}>Dashboard</button>
            <button type='button' className={props.selectedView === SelectedView.Quizzes ? 'border-none font-poppinsMedium text-custom-color-one rounded-l-full w-full' : 'border-none rounded-none font-poppinsMedium bg-transparent text-custom-color-one'} onClick={props.onQuizzesButtonClick}>My Quizzes</button>
            <button type='button' className={props.selectedView === SelectedView.CreateQuiz ? 'border-none font-poppinsMedium text-custom-color-one rounded-l-full w-full' : 'border-none rounded-none font-poppinsMedium bg-transparent text-custom-color-one'} onClick={props.onCreateQuizButtonClick}>Create Quiz</button>
        </nav>
    </div>);
}

export default NavSection;