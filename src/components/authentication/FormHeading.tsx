

interface Props {
    text: string
}

function FormHeading(props : Props) {
    return(<div className='w-full h-20 bg-purple-background overflow-hidden rounded-t-3xl flex'>
        <p className='m-auto font-poppinsBold text-white text-3xl'></p>
    </div>)
}

export default FormHeading;