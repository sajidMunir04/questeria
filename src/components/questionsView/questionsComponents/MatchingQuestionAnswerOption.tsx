
interface Props {
    text: string
}

function MatchingQuestionAnswerOption(props : Props) {
    return (<div>
        <p>{props.text}</p>
    </div>);
}

export default MatchingQuestionAnswerOption;