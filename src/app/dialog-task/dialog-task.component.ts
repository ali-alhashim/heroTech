import { Component ,OnInit} from '@angular/core';
import { MatDialogModule, MatDialog} from '@angular/material/dialog';
import { CommonModule , AsyncPipe} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, FormControl , ReactiveFormsModule} from '@angular/forms';

import { employeeData } from '../mock-data';
import { Employee } from '../interfaces/employee';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-dialog-task',
  standalone: true,
  imports: [MatDialogModule, CommonModule, MatInputModule,FormsModule, MatAutocompleteModule, AsyncPipe, ReactiveFormsModule],
  templateUrl: './dialog-task.component.html',
  styleUrl: './dialog-task.component.css'
})



export class DialogTaskComponent implements OnInit{

  employeeList = employeeData;
  myControl = new FormControl<string | Employee>('');
  filteredOptions!: Observable<Employee[]>;

  assigneeTo = '';
  

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.badge_number || '';
        return name ? this._filter(name as string) : this.employeeList.slice();
      }),
    );
  }

  private _filter(name: string): Employee[] {
    const filterValue = name.toLowerCase();

    return this.employeeList.filter(option => 
      option.badge_number.toLowerCase().includes(filterValue) ||
      option.first_name.toLowerCase().includes(filterValue)   ||
      option.last_name.toLowerCase().includes(filterValue)
    );
  }

  displayFn(employee: Employee): string {
  
    return employee && employee.badge_number ? `${employee.first_name} ${employee.last_name} ${employee.badge_number}` : '';
  }



  constructor(private taskDialog:MatDialog)
  {

  }



  addNewTask(){
    const selectedEmployee = this.myControl.value as Employee;
    console.log(`Add new Task assigneeTo: ${selectedEmployee.first_name} ${selectedEmployee.badge_number}`);
  }

  

}