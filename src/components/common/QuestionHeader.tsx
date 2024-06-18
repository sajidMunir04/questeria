

interface Props{
    questionIndex: number
}

function QuestionHeader(props : Props) {
    return(<div className='bg-sky-700 h-12 overflow-hidden'>
        <p>Question No. {props.questionIndex + 1}</p>
    </div>);
}

export default QuestionHeader;