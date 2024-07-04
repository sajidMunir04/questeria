
interface Props {
    questionText: string
}

function QuestionText(props : Props) {
    return <p className='font-poppinsSemiBold text-3xl cursor-context-menu'>{props.questionText}</p>;
}

export default QuestionText;