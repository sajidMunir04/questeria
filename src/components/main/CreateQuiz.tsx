import { ChangeEvent, Key, useState } from "react";
import { multipleChoiceQuestionAlias, saveFormDataURL, simpleQuestionAlias, yesNoQuestionAlias } from "../lib/constants";
import SimpleButton from "../common/SimpleButton";
import MultipleChoiceQuestion from "../questions/MultipleChoiceQuestion";
import { QuestionsType } from "../utils/questions";
import TrueFalseQuestion from "../questions/TrueFalseQuestion";
import SimpleQuestion from "../questions/SimpleQuestion";
import axios from "axios";
import FillBlanksQuestion from "../questions/FillBlanksQuestion";
import DragAndDropQuestion from "../questions/DragAndDropQuestion";
import SelectOptionsQuestion from "../questions/SelectOptionsQuestion";
import MatchingQuestion from "../questions/MatchingQuestion";


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
        const questions = [...quizQuestions,QuestionsType.TrueFalseQuestion];
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

    const handleFillBlanksQuestion = () => {
        const questions = [...quizQuestions,QuestionsType.FillBlanksQuestion];
        const questionData = [...questionsData,''];
        setQuestionsData(questionData);
        setQuizQuestions(questions);
        setQuestionAddStatus(false);
    }

    const handleDragAndDropQuestion = () => {
        const questions = [...quizQuestions,QuestionsType.DragAndDropQuestion];
        const questionData = [...questionsData,''];
        setQuestionsData(questionData);
        setQuizQuestions(questions);
        setQuestionAddStatus(false);
    }

    const handleMatchingQuestion = () => {
        const questions = [...quizQuestions,QuestionsType.MatchingQuestion];
        const questionData = [...questionsData,''];
        setQuestionsData(questionData);
        setQuizQuestions(questions);
        setQuestionAddStatus(false);
    }

    const handleSelectOptionsQuestion = () => {
        const questions = [...quizQuestions,QuestionsType.SelectOptionsQuestion];
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
        const response = await axios.post(saveFormDataURL,mergedData);
        console.log(response);
    }

    const handleDeleteQuestion = (index : number) => {
        const questions = questionsData.filter((question,questionIndex) => questionIndex !== index);
        setQuestionsData(questions);

        const questionTypes = quizQuestions.filter((question,questionIndex) => questionIndex !== index);
        setQuizQuestions(questionTypes);
    }

    const handleMoveUpQuestion = (index : number) => {

        if (index <= 0)
            return;

        const questions = questionsData;
        const temp = questions[index];
        questions[index] = questions[index - 1];
        questions[index -1] = temp;
        setQuestionsData(questions);

        const questionTypes = quizQuestions;
        const typeTemp = questionTypes[index];
        questionTypes[index] = questionTypes[index -1];
        questionTypes[index -1] = typeTemp;
        setQuizQuestions(questionTypes);
    }

    const handleMoveDownQuestion = (index : number) => {
        if (index >= questionsData.length)
            return;

        const questions = questionsData;
        const temp = questions[index];
        questions[index] = questions[index - 1];
        setQuestionsData(questions);

        const questionTypes = quizQuestions;
        setQuizQuestions(questionTypes);
    }

    return (<div className='mt-1 w-full p-10 h-full overflow-hidden'>
        <h3 className='font-poppinsBold text-36px'>Create New Quiz</h3>
        <div className='h-5/6 overflow-hidden'>
            <div className='h-full overflow-scroll'>
            {quizQuestions.map(function (item: QuestionsType,index: number){
                if (item === QuestionsType.MultipleChoiceQuestion) {
                    return <MultipleChoiceQuestion index={index} deleteQuestion={() => handleDeleteQuestion(index)} 
                    canEdit={false} moveDown={() => handleMoveDownQuestion(index)} moveUp={() => handleMoveUpQuestion(index)} handleDataChange={handleQuestionDataChange}/>
                }
                else if (item === QuestionsType.TrueFalseQuestion) {
                    return <TrueFalseQuestion canEdit={false} deleteQuestion={() => handleDeleteQuestion(index)}
                    moveDown={() => handleMoveDownQuestion(index)} moveUp={() => handleMoveUpQuestion(index)} index={index} handleDataChange={handleQuestionDataChange}/>
                } 
                else if (item === QuestionsType.SimpleQuestion) {
                    return <SimpleQuestion deleteQuestion={() => handleDeleteQuestion(index)}  canEdit={false} 
                    moveDown={() => handleMoveDownQuestion(index)} moveUp={() => handleMoveUpQuestion(index)} index={index} handleDataChange={handleQuestionDataChange}/>
                }
                else if (item === QuestionsType.FillBlanksQuestion) {
                    return <FillBlanksQuestion deleteQuestion={() => handleDeleteQuestion(index)} canEdit={false} 
                    moveDown={() => handleMoveDownQuestion(index)} moveUp={() => handleMoveUpQuestion(index)} index={index} handleDataChange={handleQuestionDataChange}/>
                }
                else if (item === QuestionsType.DragAndDropQuestion) {
                    return <DragAndDropQuestion deleteQuestion={() => handleDeleteQuestion(index)} canEdit={false} 
                    moveDown={() => handleMoveDownQuestion(index)} moveUp={() => handleMoveUpQuestion(index)} index={index} handleDataChange={handleQuestionDataChange}/>
                }
                else if (item === QuestionsType.SelectOptionsQuestion) {
                    return <SelectOptionsQuestion deleteQuestion={() => handleDeleteQuestion(index)} canEdit={false} 
                    moveDown={() => handleMoveDownQuestion(index)} moveUp={() => handleMoveUpQuestion(index)} index={index} handleDataChange={handleQuestionDataChange}/>
                }
                else if (item === QuestionsType.MatchingQuestion) {
                    return <MatchingQuestion deleteQuestion={() => handleDeleteQuestion(index)} canEdit={false} 
                    moveDown={() => handleMoveDownQuestion(index)} moveUp={() => handleMoveUpQuestion(index)} index={index} handleDataChange={handleQuestionDataChange}/>
                }
            })}
            <div className='mt-8 flex'>
                <p className='p-4 bg-white mb-5 h-min cursor-pointer' onClick={() => setQuestionAddStatus(!addingQuestion)}>Add Question &#10148;</p>
                {addingQuestion && <div className='ml-0 w-max h-max bg-white mb-10'>
                    <p className='p-4 border-y-1 cursor-pointer' onClick={handleMultipleChoiceQuestionButton}>Multiple Choice Question</p>
                    <p className='p-4 border-y-1 cursor-pointer' onClick={handleYesNoQuestionButton}>Yes No Question</p>
                    <p className='p-4 border-y-1 cursor-pointer' onClick={handleSimpleQuestion}>Simple Question</p>
                    <p className='p-4 border-y-1 cursor-pointer' onClick={handleFillBlanksQuestion}>Fill Blanks Question</p>
                    <p className='p-4 border-y-1 cursor-pointer' onClick={handleDragAndDropQuestion}>Drag and Drop Question</p>
                    <p className='p-4 border-y-1 cursor-pointer' onClick={handleMatchingQuestion}>Matching Question</p>
                    <p className='p-4 border-y-1 cursor-pointer' onClick={handleSelectOptionsQuestion}>Select Options Question</p>                   
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