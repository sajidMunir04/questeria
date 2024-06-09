
interface Props {
    defaultValue : string,
    onChange?: (arg: any) => void,
    isCorrectAnswer: boolean,
    onClick?: (arg: any) => void,
    canEdit: boolean,
    onDelete: () => void
}


function MCQAnswerInputField(props : Props) {
    return (
    <div className='w-full mb-3 flex items-center justify-between'>
    <input className='bg-slate-100 h-10 border-2 rounded-s-md border-slate-300 w-1/2' type='text' defaultValue={props.defaultValue} 
    onChange={props.onChange}/>
    {props.canEdit && <>
    {props.isCorrectAnswer && <div className='flex border-2 border-lime-400 w-8 h-8 ml-5 rounded-full' onClick={props.onClick}>
    {props.isCorrectAnswer ? <p className='m-auto text-lime-400'>&#10004;</p> : <p></p>}
    </div>}
    {!props.isCorrectAnswer && <button className='flex ml-5 rounded-full text-center' onClick={props.onClick}>Mark as Correct
    </button>}
    {props.isCorrectAnswer && <p className='ml-3'>Correct Answer</p>}
    <button onClick={props.onDelete}><img className='w-6 h-6'  src="/images/common/delete.png"/></button>
    </>}
    </div>);
}


export default MCQAnswerInputField;