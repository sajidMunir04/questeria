
interface Props {
    questionText: string,
    firstAnswers: string[],
    secondAnswers: string[]
}


function MatchingQuestionView(props : Props) {
    return (<div>
            <p>{props.questionText}</p>
            <div>
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