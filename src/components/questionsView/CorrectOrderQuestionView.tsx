import QuestionText from "./questionsComponents/QuestionText";

interface Props {
    questionText: string,
    answers: string[]
}

function CorrectOrderQuestionView(props : Props) {
    return (<div>
        <QuestionText questionText={props.questionText}/>
        <div>
            {props.answers.map((item) => <p>{item}</p>)}
        </div>
    </div>);
}

export default CorrectOrderQuestionView;