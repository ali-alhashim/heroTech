export interface Task 
{
    id         :number;
    title      :string;
    isCompleted:boolean;
    ownerId    :number;
    assignedBy :number;
    createdDate:Date;
    updatedDate:Date;
}
