import {Task} from './interfaces/task';

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