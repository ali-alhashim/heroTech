export interface Employee {
    createdDate :Date;
    updatedDate :Date;
    id          :number;
    isActive    :boolean;
    isManager   :boolean;
    first_name  :string;
    last_name   :string;
    email       :string;  // also as username to login
    job_title   :string;
    badge_number:string; // company badge number also as username to login
    password    :string;
    national_id :number;
    hire_date   :Date;
    department_code  :string; // related to department table
    
}
