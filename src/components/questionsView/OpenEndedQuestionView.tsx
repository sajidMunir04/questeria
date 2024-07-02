
interface Props {
    questionText: string
}


function OpenEndedQuestion(props : Props) {
    return (<div>
        <p>{props.questionText}</p>
        <input type='text' />
    </div>);
}

export default OpenEndedQuestion;