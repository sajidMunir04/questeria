
interface Props {
    questionText: string
}

function QuestionText(props : Props) {
    return <p>{props.questionText}</p>;
}

export default QuestionText;