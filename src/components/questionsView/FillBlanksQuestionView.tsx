
interface Props {
    questionSections: string[]
}


function FillBlanksQuestionView(props : Props) {
    return (<div>
        <div>
            {
                props.questionSections.map((item) => <div><p>{item}</p></div>)
            }
        </div>   
    </div>);
}

export default FillBlanksQuestionView;