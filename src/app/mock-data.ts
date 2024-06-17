import {Task} from './interfaces/task';
import { Employee } from './interfaces/employee';
import { Department } from './interfaces/department';
export const taskData: Task[] = 
[
  {
    id: 1,
    title: 'IT request waiting for your approval',
    isCompleted: false,
    ownerId: 15,
    assignedBy: 0,
    createdDate: new Date(2024, 5, 14) // Year, Month[0-11], [1-30-31-29]
  },
  {
    id: 2,
    title: 'IT Ticket Assigned to you [Ticket#1950]',
    isCompleted: false,
    ownerId: 15,
    assignedBy: 13,
    createdDate: new Date(2024, 5, 1) // Year, Month[0-11], [1-30-31-29]
  },
  {
    id: 3,
    title: 'IT Ticket Assigned to you [Ticket#1955]',
    isCompleted: true,
    ownerId: 15,
    assignedBy: 13,
    createdDate: new Date(2024, 4, 20), // Year, Month[0-11], [1-30-31-29]
    note: 'I replaced user computer too old '
  },
  {
    id: 4,
    title: 'Network issue reported by user',
    isCompleted: false,
    ownerId: 20,
    assignedBy: 5,
    createdDate: new Date(2024, 5, 13) // Year, Month[0-11], [1-30-31-29]
  },
  {
    id: 5,
    title: 'Software installation request',
    isCompleted: true,
    ownerId: 25,
    assignedBy: 8,
    createdDate: new Date(2024, 5, 10), // Year, Month[0-11], [1-30-31-29]
    note: 'Installed required software on user machine'
  },
  {
    id: 6,
    title: 'IT request waiting for your approval',
    isCompleted: false,
    ownerId: 30,
    assignedBy: 15,
    createdDate: new Date(2024, 5, 12) // Year, Month[0-11], [1-30-31-29]
  },
  {
    id: 7,
    title: 'Security incident reported [Incident#4500]',
    isCompleted: true,
    ownerId: 15,
    assignedBy: 7,
    createdDate: new Date(2024, 4, 25), // Year, Month[0-11], [1-30-31-29]
    note: 'Security incident resolved'
  },
  {
    id: 8,
    title: 'Hardware upgrade required',
    isCompleted: false,
    ownerId: 35,
    assignedBy: 3,
    createdDate: new Date(2024, 5, 5) // Year, Month[0-11], [1-30-31-29]
  },
  {
    id: 9,
    title: 'IT Ticket Assigned to you [Ticket#1960]',
    isCompleted: false,
    ownerId: 15,
    assignedBy: 13,
    createdDate: new Date(2024, 5, 9) // Year, Month[0-11], [1-30-31-29]
  },
  {
    id: 10,
    title: 'New user account creation',
    isCompleted: true,
    ownerId: 40,
    assignedBy: 9,
    createdDate: new Date(2024, 4, 30), // Year, Month[0-11], [1-30-31-29]
    note: 'Created new user account successfully'
  }
  ];



  export const employeeData:Employee[] = [

    {
      "id": 1,
      "isActive": true,
      "isManager": true,
      "first_name": "Ali",
      "last_name": "Alhashim",
      "badge_number": "A0954",
      "department_code":"DAMM-IT"
  },
  {
      "id": 2,
      "isActive": false,
      "isManager": false,
      "first_name": "Lina",
      "last_name": "Smith",
      "badge_number": "B2034",
      "department_code":"JED-SALES"
  },
  {
      "id": 3,
      "isActive": true,
      "isManager": false,
      "first_name": "John",
      "last_name": "Doe",
      "badge_number": "C3456",
      "department_code":"DAMM-HR"
  },
  {
      "id": 4,
      "isActive": false,
      "isManager": true,
      "first_name": "Emma",
      "last_name": "Johnson",
      "badge_number": "D7890",
      "department_code":"DAMM-HR"
  },
  {
      "id": 5,
      "isActive": true,
      "isManager": true,
      "first_name": "Michael",
      "last_name": "Brown",
      "badge_number": "A1123",
      "department_code":"RHD-FINANCE"
  },
  {
      "id": 6,
      "isActive": true,
      "isManager": false,
      "first_name": "Sophia",
      "last_name": "Martinez",
      "badge_number": "F4567",
      "department_code":"DAMM-FINANCE"
  },
  {
      "id": 7,
      "isActive": false,
      "isManager": false,
      "first_name": "David",
      "last_name": "Wilson",
      "badge_number": "G8901",
      "department_code":"RHD-FINANCE"
  },
  {
      "id": 8,
      "isActive": true,
      "isManager": true,
      "first_name": "Olivia",
      "last_name": "Taylor",
      "badge_number": "H2345",
      "department_code":"DAMM-MARKETING"
  },
  {
      "id": 9,
      "isActive": false,
      "isManager": false,
      "first_name": "James",
      "last_name": "Anderson",
      "badge_number": "I6789",
      "department_code":"DAMM-MARKETING"
  },
  {
      "id": 10,
      "isActive": true,
      "isManager": false,
      "first_name": "Charlotte",
      "last_name": "Thomas",
      "badge_number": "J0123",
      "department_code":"DAMM-MARKETING"
  }

  ];


  export const departmentData:Department[] = 
  [
   {
    department_code : 'DAMM-MARKETING',
    name:'Marketing'
   },
   {
    department_code : 'RHD-FINANCE',
    name:'Finance'
   },
   {
    department_code : 'DAMM-FINANCE',
    name:'Finance'
   },
   {
    department_code : 'DAMM-HR',
    name:'HR'
   },
   {
    department_code : 'JED-SALES',
    name:'Sales'
   },
   
  ];



