import { ChangeEvent, Key, useState } from "react";
import { multipleChoiceQuestionAlias, saveFormDataURL, simpleQuestionAlias, yesNoQuestionAlias } from "../lib/constants";
import SimpleButton from "../common/SimpleButton";
import MultipleChoiceQuestion from "../questions/MultipleChoiceQuestion";
import { QuestionsType } from "../utils/questions";
import YesNoQuestion from "../questions/YesNoQuestion";
import SimpleQuestion from "../questions/SimpleQuestion";


function CreateQuiz() {

    const [addingQuestion, setQuestionAddStatus] = useState(false);
    const [quizQuestions,setQuizQuestions] = useState<QuestionsType[]>([]);
    const [questionsData,setQuestionsData] = useState<string[]>([]);

    const handleMultipleChoiceQuestionButton = () => {
        const questions = [...quizQuestions,QuestionsType.MultipleChoiceQuestion];
        const questionData = [...questionsData,''];
        setQuestionsData(questionData);
        setQuizQuestions(questions);
        setQuestionAddStatus(false);
    }

    const handleYesNoQuestionButton = () => {
        const questions = [...quizQuestions,QuestionsType.YesNoQuestion];
        const questionData = [...questionsData,''];
        setQuestionsData(questionData);
        setQuizQuestions(questions);
        setQuestionAddStatus(false);
    }


    const handleSimpleQuestion = () => {
        const questions = [...quizQuestions,QuestionsType.SimpleQuestion];
        const questionData = [...questionsData,''];
        setQuestionsData(questionData);
        setQuizQuestions(questions);
        setQuestionAddStatus(false);
    }

    const handleQuestionDataChange = (newQuestionData: string,index : number) => {
        const newData = questionsData;
        for (let i = 0; i < newData.length; i++)
        {
            if (i === index) {
                newData[i] = newQuestionData;
            }   
        }

        setQuestionsData(newData);
        console.log(newData);
    }

    const handleCreateForm = async() => {
        let mergedData = '';
        questionsData.forEach((item) => mergedData += item);
        console.log(mergedData);
        const response = await fetch(saveFormDataURL,{
            method: "POST",
            body: mergedData
        })
        console.log(response);
        const result = await response.json();
        console.log(result);
    }

    return (<div className='mt-1 w-full p-10 h-full overflow-hidden'>
        <h3 className='font-poppinsBold text-36px'>Create New Quiz</h3>
        <div className='h-5/6 overflow-hidden'>
            <div className='h-full overflow-scroll'>
            {quizQuestions.map(function (item: QuestionsType,index: number){
                if (item === QuestionsType.MultipleChoiceQuestion) {
                    return <MultipleChoiceQuestion index={index} deleteQuestion={() => {
                        const questions = questionsData.filter((question,questionIndex) => questionIndex !== index);
                        setQuestionsData(questions);

                        const questionTypes = quizQuestions.filter((question,questionIndex) => questionIndex !== index);
                        setQuizQuestions(questionTypes);

                    }} canEdit={false} handleDataChange={handleQuestionDataChange}/>
                }
                else if (item === QuestionsType.YesNoQuestion) {
                    return <YesNoQuestion canEdit={false} deleteQuestion={() => {
                        const questions = questionsData.filter((question,questionIndex) => questionIndex !== index);
                        setQuestionsData(questions);

                        const questionTypes = quizQuestions.filter((question,questionIndex) => questionIndex !== index);
                        setQuizQuestions(questionTypes);

                    }} index={index} handleDataChange={handleQuestionDataChange}/>
                } 
                else if (item === QuestionsType.SimpleQuestion) {
                    return <SimpleQuestion deleteQuestion={() => {
                        const questions = questionsData.filter((question,questionIndex) => questionIndex !== index);
                        setQuestionsData(questions);

                        const questionTypes = quizQuestions.filter((question,questionIndex) => questionIndex !== index);
                        setQuizQuestions(questionTypes);

                    }} canEdit={false} index={index} handleDataChange={handleQuestionDataChange}/>
                }
            })}
            <div className='mt-8 flex'>
                <p className='p-4 bg-white mb-5 h-min cursor-pointer' onClick={() => setQuestionAddStatus(!addingQuestion)}>Add Question &#10148;</p>
                {addingQuestion && <div className='ml-0 w-max h-max bg-white mb-10'>
                    <p className='p-4 border-y-1 cursor-pointer' onClick={handleMultipleChoiceQuestionButton}>Multiple Choice Question</p>
                    <p className='p-4 border-y-1 cursor-pointer' onClick={handleYesNoQuestionButton}>Yes No Question</p>
                    <p className='p-4 border-y-1 cursor-pointer' onClick={handleSimpleQuestion}>Simple Question</p>
                </div>}
            </div>
            </div>
        </div>
        <div>
            <SimpleButton buttonText={"Create Form"} onClick={handleCreateForm} />
        </div>
    </div>);
}

export default CreateQuiz;