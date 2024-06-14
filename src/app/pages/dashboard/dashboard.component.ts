import { Component, ViewChild, AfterViewInit} from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { Task } from '../../interfaces/task';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {taskData} from '../../mock-data'
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
            MatDividerModule, 
            MatTableModule, 
            MatSlideToggleModule, 
            MatSortModule, 
            MatPaginatorModule ,
            FormsModule,
            MatIconModule, 
            CommonModule,
          ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  taskSearchTerm :string ='';
  tasksColumns: string[] = ['#', 'Title', 'Date', 'Status'];
  myTasks = new MatTableDataSource(taskData);



  cardBodyHeight: string = '';
  maximizeContent() 
  {
      if(this.cardBodyHeight !='fit-content')
        {
          this.cardBodyHeight ='fit-content';
        }
      else
      {
        this.cardBodyHeight =''
      }
      
     
  }



  constructor(private _liveAnnouncer: LiveAnnouncer) {

    if (this.taskSearchTerm.length > 0) 
    {
    this.myTasks.filterPredicate = (data: Task, filter: string) => 
    {
      const searchTerm = filter.trim().toLowerCase();
      return data.title.toLowerCase().includes(searchTerm);
    };
    }

  }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  

  searchTask()
  {
    //filter task
    if (this.taskSearchTerm.length > 0) 
    {
      
      this.myTasks.filter = this.taskSearchTerm.trim().toLowerCase();
    }
  }


  ngAfterViewInit() 
  {
    this.myTasks.sort = this.sort;
    this.myTasks.sortingDataAccessor = (item: Task, property: string): string | number => {
      switch (property) {
        case '#': return item.id;
        case 'Title': return item.title;
        case 'Date': return item.createdDate.getTime();
        case 'Status': return item.isCompleted ? 1 : 0;
        default: return '';
      }
    };

    this.myTasks.paginator = this.paginator;
  }



  announceSortChange(sortState: Sort) 
  {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


}
