
interface Props {
    text: string
}


function DraggableOption(props : Props) {
    return (<div>
        <p>{props.text}</p>
    </div>);
}

export default DraggableOption;