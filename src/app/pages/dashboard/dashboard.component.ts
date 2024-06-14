import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { Task } from '../../interfaces/task';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatDividerModule,MatTableModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  //set request to server to get user tasks & requests & IT assets
  tasksColumns: string[] = ['#', 'Title', 'Date', 'Status'];
  myTasks : Task[]=[
    {
      id:1,
      title:'IT request waitting your approval',
      isCompleted:false,
      ownerId:15,
      assignedBy:0,
      createdDate:  new Date(2024, 5, 14),  // Year, Month[0-11], [1-30-31-29]
    },
    {
     id:2,
     title:'IT Ticket Assigned to you [Ticket#1950]',
     isCompleted:false,
     ownerId:15,
     assignedBy:13,
     createdDate:  new Date(2024, 5, 1),  // Year, Month[0-11], [1-30-31-29]
     },
     {
       id:3,
       title:'IT Ticket Assigned to you [Ticket#1955]',
       isCompleted:true,
       ownerId:15,
       assignedBy:13,
       createdDate:  new Date(2024, 4, 20),  // Year, Month[0-11], [1-30-31-29]
       note:'I replaced user computer too old '
       }
   ] 

}
