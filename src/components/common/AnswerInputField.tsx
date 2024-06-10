
interface Props {
    defaultValue : string,
    onChange?:(arg: any) => void
}

function AnswerInputField(props : Props) {
    return (<input className='bg-slate-100 mb-5 h-11 border-2 rounded-s-md border-slate-300 w-1/1' type='text' defaultValue={props.defaultValue} onChange={props.onChange}/>);
}

export default AnswerInputField;