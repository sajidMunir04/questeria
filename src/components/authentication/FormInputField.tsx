import { ChangeEvent } from "react";

interface Props {
    inputType : string,
    placeHolder: string,
    label: string,
    onChange: (arg : string) => void
}


function FormInputField(props : Props) {
    return (
    <label className='flex flex-col mb-3 font-poppinsBold'>{props.label}
    <input type={props.inputType} onChange={(e: ChangeEvent<HTMLInputElement>) => {props.onChange(e.target.value)}} className='bg-slate-100 mb-5 p-1 h-11 mt-1 border-2 border-slate-300 w-full rounded-md font-poppinsMedium' placeholder={props.placeHolder}/>
    </label>);
}

export default FormInputField;