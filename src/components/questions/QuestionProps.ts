

export interface QuestionProps{
    canEdit: boolean,
    index: number,
    handleDataChange:(data: string,index : number) => void
}