import { Component, ViewChild } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {employeeData} from '../../mock-data';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Employee } from '../../interfaces/employee';
@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [
    MatDividerModule,
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    MatSortModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  employeeSearchTerm:string ='';
  employeesData = new MatTableDataSource(employeeData);
  EmployeeColumns:string[] = ['#', 'First_Name', 'Last_Name', 'Badge_Number', 'Department_Code'];

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

   announceSortChange(sortState: Sort) 
   {
     if (sortState.direction) {
       this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
     } else {
       this._liveAnnouncer.announce('Sorting cleared');
     }
   }



   searchEmployee()
   {
    if (this.employeeSearchTerm.length > 0) 
      {
        
        this.employeesData.filter = this.employeeSearchTerm.trim().toLowerCase();
      }
   }


   openEmployeeDialog()
   {

   }

   constructor(private _liveAnnouncer: LiveAnnouncer)
   {

    if (this.employeeSearchTerm.length > 0) 
      {
      this.employeesData.filterPredicate = (data: Employee, filter: string) => 
      {
        const searchTerm = filter.trim().toLowerCase();
        return data.badge_number.toLowerCase().includes(searchTerm);
      };
      }

   }

   @ViewChild(MatSort) sort!: MatSort;
   @ViewChild(MatPaginator) paginator!: MatPaginator;



   ngAfterViewInit() 
   {
     this.employeesData.sort = this.sort;
     this.employeesData.sortingDataAccessor = (item: Employee, property: string): string | number => {
       switch (property) {
         case '#': return item.id;
         case 'First_Name': return item.first_name;
         case 'Last_Name': return item.last_name;
         case 'Badge_Number': return item.badge_number;
         case 'Department_Code': return item.department_code || '';
         default: return '';
       }
     };
 
     this.employeesData.paginator = this.paginator;
   }

}
