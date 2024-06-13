export interface Request {
    id         :number;
    isCompleted:boolean;
    createdDate:Date;
    updatedDate:Date;
    ownerId    :number;
    stage      :number;
}
