import MatchingQuestionAnswerOption from "./questionsComponents/MatchingQuestionAnswerOption";
import QuestionText from "./questionsComponents/QuestionText";

interface Props {
    questionText: string,
    firstAnswers: string[],
    secondAnswers: string[]
}


function MatchingQuestionView(props : Props) {
    return (<div>
        <QuestionText questionText={props.questionText}/>
            <div className='flex justify-between mt-3'>
                <div>
                    {props.firstAnswers.map((item) => <MatchingQuestionAnswerOption text={item}/>)}
                </div>
                <div>
                    {props.secondAnswers.map((item) => <MatchingQuestionAnswerOption text={item}/>)}
                </div>
            </div>
    </div>);
}

export default MatchingQuestionView;