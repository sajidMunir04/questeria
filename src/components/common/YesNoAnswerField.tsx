

interface Props {
    value: string,
    isCorrect: boolean,
    onClick: (arg: any) => void
}

function YesNoAnswerInputField(props : Props) {
    return (<div>
        <label>
            <input onClick={props.onClick} type='checkbox'/>{props.value}
        </label>
    </div>);
}

export default YesNoAnswerInputField;