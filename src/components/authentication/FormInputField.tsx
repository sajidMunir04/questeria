
interface Props {
    inputType : string,
    placeHolder: string,
    label: string
}


function FormInputField(props : Props) {
    return (
    <label className='flex flex-col mb-5'>{props.label}
    <input type={props.inputType} className='bg-slate-100 mb-5 h-11 border-2 border-slate-300 w-full rounded-md' placeholder={props.placeHolder}/>
    </label>);
}

export default FormInputField;