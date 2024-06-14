export interface Request {
    id         :number; //auto serial number
    isCompleted:boolean;
    createdDate:Date;
    updatedDate:Date;
    ownerId    :number; // request by
    stage      :number; // current stage of approval chain
    approval_chain:string; // approval chain group code example : IT-Request-Approval-Chain realted to  approval_chain table for any documents
}
