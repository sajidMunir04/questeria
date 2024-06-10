

interface Props {
    defaultValue : string,
    onChange?: (arg : any) => void
}

function QuestionInputField(props : Props) {
    return (<input minLength={8} maxLength={66} className='bg-slate-100 mb-5 h-11 border-2 rounded-s-md border-slate-300 w-full' type='text' defaultValue={props.defaultValue} onChange={props.onChange}/>);
}

export default QuestionInputField;