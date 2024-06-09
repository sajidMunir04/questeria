
interface Props {
    defaultValue : string,
    onChange?:(arg: any) => void
}

function AnswerInputField(props : Props) {
    return (<input type='text' defaultValue={props.defaultValue} onChange={props.onChange}/>);
}

export default AnswerInputField;