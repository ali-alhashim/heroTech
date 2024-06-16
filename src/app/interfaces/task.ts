export interface Task 
{
    id         :number;
    title      :string;
    isCompleted:boolean;
    ownerId    :number;
    assignedBy :number;
    createdDate:Date;    // Note: Months are 0-indexed in JavaScript example first month = 0
    updatedDate?:Date;
    deadline?   :Date;
    note?       :string;
}
