import { useMemo, useState } from "react";
import { Question } from "../utils/Question";
import { YesNoQuestion } from "../utils/YesNoQuestion";
import { SimpleQuestion } from "../utils/SimpleQuestion";
import { multipleChoiceQuestionAlias, simpleQuestionAlias, yesNoQuestionAlias } from "../lib/constants";

interface Props{
    inputQuestion : string
}


function QuizQuestion(props: Props) {
    const questionInfo = props.inputQuestion.split('#');
    const questionData : any = JSON.parse(questionInfo[0]).question;
    console.log(questionData);

    return (<div>
        {questionInfo[1] === simpleQuestionAlias && <div>
            <p>{questionData.questionText}</p>
            <input type='text' value={questionData.answerText}/>
        </div>}
        {questionInfo[1] === multipleChoiceQuestionAlias && <div>
            <p>{questionData.questionText}</p>
            {questionData.answers.map((item : string,index : number) => <p key={index}>{item}</p>)}
        </div>}
        {questionInfo[1] === yesNoQuestionAlias && <div>
            <p>{questionData.questionText}</p>
                <div>
                    <p>Yes</p>
                    {questionData.answerIsYes && <div>
                        <p>&tick;</p>
                    </div>}
                </div>
                <div>
                    <p>No</p>
                    {questionData.answerIsNo && <div>
                        <p>&tick;</p>
                    </div>}
                </div>
            </div>}
    </div>);
}


export default QuizQuestion;


function isYesNoQuestion(obj : any) {
    return obj instanceof YesNoQuestion;
}

function isSimpleQuestion(obj : any) {
    return obj instanceof SimpleQuestion;
}