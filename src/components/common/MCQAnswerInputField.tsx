
interface Props {
    defaultValue : string,
    onChange?: (arg: any) => void,
    isCorrectAnswer: boolean
}


function MCQAnswerInputField(props : Props) {
    return (
    <div>
    <input className='bg-white border-4 border-slate-400' type='text' defaultValue={props.defaultValue} 
    onChange={props.onChange}/>
    </div>);
}


export default MCQAnswerInputField;