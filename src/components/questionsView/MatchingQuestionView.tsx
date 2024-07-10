import QuestionText from "./questionsComponents/QuestionText";

interface Props {
    questionText: string,
    firstAnswers: string[],
    secondAnswers: string[]
}


function MatchingQuestionView(props : Props) {
    return (<div>
        <QuestionText questionText={props.questionText}/>
            <div className='flex justify-between'>
                <div>
                    {props.firstAnswers.map((item) => <div><p>{item}</p></div>)}
                </div>
                <div>
                    {props.secondAnswers.map((item) => <div><p>{item}</p></div>)}
                </div>
            </div>
    </div>);
}

export default MatchingQuestionView;