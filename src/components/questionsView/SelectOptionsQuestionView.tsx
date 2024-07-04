import QuestionText from "./questionsComponents/QuestionText";

interface Props {
    questionSections: string[],
    answerOptions: string[][]
}


function SelectOptionsQuestionView(props : Props) {
    return (<div>
        <div>
            {props.questionSections.map((item) => <QuestionText questionText={item}/>)}
        </div>
    </div>);
}

export default SelectOptionsQuestionView;