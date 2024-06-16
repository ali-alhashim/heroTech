import { Component, ViewChild, AfterViewInit, inject} from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { Task } from '../../interfaces/task';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSlideToggle, MatSlideToggleModule,MatSlideToggleChange  } from '@angular/material/slide-toggle';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {taskData} from '../../mock-data'
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {DialogTaskComponent} from '../../dialog-task/dialog-task.component'
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
            MatTooltipModule,
            MatFormFieldModule,
            MatInputModule,
            FormsModule,
            MatDialogModule,
          ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  

  taskSearchTerm :string ='';
  tasksColumns: string[] = ['#', 'Title', 'Date', 'Status'];
  myTasks = new MatTableDataSource(taskData);



  // maximize card of task
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



  constructor(private _liveAnnouncer: LiveAnnouncer, private taskDialog:MatDialog) 
  {

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


  //sort task
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


  openTaskDialog()
  {
    this.taskDialog.open(DialogTaskComponent,{
      width:'60%',
      height:'400px'
    })
  }



  onToggleChange(taskId: number, event: MatSlideToggleChange) {
    if (event.checked) {
      const confirmed = confirm(`Are you sure you want to close Task# ${taskId}?`);
      if (confirmed) {
        console.log("You confirmed, so the task will be sent to the server to update the database.");
        this.updateTaskStatus(taskId, event.checked);
        event.source.disabled = true;
      } else {
        console.log("You canceled, nothing will be sent.");
        event.source.checked = false; // Revert the toggle state
      }
    }
  }

  updateTaskStatus(taskId: number, isCompleted: boolean) {
    // Logic to update the task status on the server
    console.log(`Task ${taskId} status updated to: ${isCompleted}`);
    
  }

 


}
