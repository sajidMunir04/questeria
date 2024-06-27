
interface Props {
    defaultValue : string,
    onChange: (arg: any) => void,
    canEdit: boolean,
    onDelete: () => void
}


function MCQAnswerInputField(props : Props) {
    return ( 
    <div className='w-full mb-3 flex items-center justify-start'>
    <input className='bg-slate-100 h-10 border-2 rounded-s-md border-slate-300 w-1/2' type='text' defaultValue={props.defaultValue} 
    onChange={props.onChange}/>
    <button className='ml-6' onClick={props.onDelete}><img className='w-6 h-6'  src="/images/common/delete.png"/></button>
    </div>);
}


export default MCQAnswerInputField;