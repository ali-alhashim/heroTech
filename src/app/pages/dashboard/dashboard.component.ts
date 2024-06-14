import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { Task } from '../../interfaces/task';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';


const taskData:Task[]= [
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



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatDividerModule,MatTableModule, MatSlideToggleModule, MatSortModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit {

  //set request to server to get user tasks & requests & IT assets
  tasksColumns: string[] = ['#', 'Title', 'Date', 'Status'];
  myTasks = new MatTableDataSource(taskData);


   constructor(private _liveAnnouncer: LiveAnnouncer) {}
   @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.myTasks.sort = this.sort;
  }

/** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


}
