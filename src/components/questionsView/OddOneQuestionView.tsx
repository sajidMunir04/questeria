
interface Props {
    questionText: string,
    answers: string[]
}

function OddOneQuestionView (props : Props) {
    return (<div>
            <p>{props.questionText}</p>
            <div>
                {props.answers.map((item) => <div><p>{item}</p></div>)}
            </div>
    </div>);
}

export default OddOneQuestionView;