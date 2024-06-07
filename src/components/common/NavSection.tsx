
interface Props {
    onDashboardButtonClick:() => void,
    onQuizzesButtonClick:() => void,
    onCreateQuizButtonClick:() => void
}


function NavSection(props : Props)  {
    return (<div className="flex items-center flex-col justify-start w-1/5">
        <div className='h-1/10 overflow-hidden'>
            <img className='m-auto max-w-full' src="/images/common/logo.png"/>
        </div>
        <nav className='flex flex-col w-100'>
            <button type='button' onClick={props.onDashboardButtonClick}>Dashboard</button>
            <button type='button' onClick={props.onQuizzesButtonClick}>My Quizzes</button>
            <button type='button' onClick={props.onCreateQuizButtonClick}>Create Quiz</button>
        </nav>
    </div>);
}

export default NavSection;