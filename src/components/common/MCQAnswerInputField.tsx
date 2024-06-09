
interface Props {
    defaultValue : string,
    onChange?: (arg: any) => void,
    isCorrectAnswer: boolean,
    onClick?: (arg: any) => void
}


function MCQAnswerInputField(props : Props) {
    return (
    <div className='flex items-center h-10'>
    <input className='bg-white border-4 border-slate-400' type='text' defaultValue={props.defaultValue} 
    onChange={props.onChange}/>
    <label className='flex' onClick={props.onClick}  style={{color: 'white', border: 'none' , borderRadius: '50px'}}>
    <input type='checkbox' className='m-auto ml-5 bg-white w-8 h-8'/>
    </label>
    </div>);
}


export default MCQAnswerInputField;