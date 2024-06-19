

interface Props{
    questionIndex: number,
    onDeleteButtonClick: () => void
}

function QuestionHeader(props : Props) {
    return(<div className='h-12 overflow-hidden bg-purple-background flex p-8 rounded-t-2xl justify-start items-center'>
        <p className='text-white font-poppinsBold font-24'>Question No. {props.questionIndex + 1}</p>
        <button onClick={props.onDeleteButtonClick}>Delete</button>
    </div>);
}

export default QuestionHeader;