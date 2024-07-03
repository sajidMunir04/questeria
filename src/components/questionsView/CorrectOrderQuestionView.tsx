
interface Props {
    questionText: string,
    answers: string[]
}

function CorrectOrderQuestionView(props : Props) {
    return (<div>
        <p>{props.questionText}</p>
        <div>
            {props.answers.map((item) => <p>{item}</p>)}
        </div>
    </div>);
}

export default CorrectOrderQuestionView;