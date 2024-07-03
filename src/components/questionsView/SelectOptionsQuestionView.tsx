
interface Props {
    questionSections: string[],
    answerOptions: string[][]
}


function SelectOptionsQuestionView(props : Props) {
    return (<div>
        <div>
            {props.questionSections.map((item) => <p>{item}</p>)}
        </div>
    </div>);
}

export default SelectOptionsQuestionView;