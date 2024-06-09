

interface Props {
    defaultValue : string,
    onChange?: (arg : any) => void
}

function QuestionInputField(props : Props) {
    return (<input className='bg-white border-4 border-slate-400 mb-2' type='text' defaultValue={props.defaultValue} onChange={props.onChange}/>);
}

export default QuestionInputField;