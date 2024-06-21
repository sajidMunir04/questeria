

interface Props{
    questionIndex: number,
    onDeleteButtonClick: () => void,
    onMoveUpButtonClick: () => void,
    onMoveDownButtonClick: () => void
}

function QuestionHeader(props : Props) {
    return(<div className='h-12 overflow-hidden bg-purple-background flex p-8 rounded-t-2xl justify-between items-center'>
        <p className='text-white font-poppinsBold font-24'>Question No. {props.questionIndex + 1}</p>
        <div>
        <button onClick={props.onDeleteButtonClick}>Delete</button>
        <button onClick={props.onDeleteButtonClick}>Move Up</button>
        <button onClick={props.onDeleteButtonClick}>Move Down</button>
        </div>
    </div>);
}

export default QuestionHeader;