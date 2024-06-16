import { Component ,OnInit, ChangeDetectionStrategy} from '@angular/core';
import { MatDialogModule, MatDialog} from '@angular/material/dialog';
import { CommonModule , AsyncPipe} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, FormControl ,FormGroup, ReactiveFormsModule} from '@angular/forms';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { employeeData } from '../mock-data';
import { Employee } from '../interfaces/employee';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatNativeDateModule } from '@angular/material/core'; 
@Component({
  selector: 'app-dialog-task',
  standalone: true,
  imports: [
    MatDialogModule, 
    CommonModule, 
    MatInputModule,
    FormsModule, 
    MatAutocompleteModule, 
    AsyncPipe, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dialog-task.component.html',
  styleUrl: './dialog-task.component.css'
})



export class DialogTaskComponent implements OnInit{
  taskTitle    = new FormControl('');
  employeeList = employeeData;
  assigneeTo   = new FormControl<string | Employee>('');
  deadlineDate = new FormControl(this.getDefaultDeadline());
  filteredOptions!: Observable<Employee[]>;

  
  
  // for filter
  ngOnInit() {
    this.filteredOptions = this.assigneeTo.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.badge_number || '';
        return name ? this._filter(name as string) : this.employeeList.slice();
      }),
    );
  }

  // for filter
  private _filter(name: string): Employee[] {
    const filterValue = name.toLowerCase();

    return this.employeeList.filter(option => 
      option.badge_number.toLowerCase().includes(filterValue) ||
      option.first_name.toLowerCase().includes(filterValue)   ||
      option.last_name.toLowerCase().includes(filterValue)
    );
  }

  //for filter
  displayFn(employee: Employee): string {
  
    return employee && employee.badge_number ? `${employee.first_name} ${employee.last_name} ${employee.badge_number}` : '';
  }



  constructor(private taskDialog:MatDialog)
  {
    
  }


 // here send post request to server to save in backend server 
 // for security you have to add user session + csrf token
 // backend server will check the session and csrf + user permission if all ok server will save the task with response task saved 
  addNewTask(){
    const selectedEmployee = this.assigneeTo.value as Employee;

    console.log(`title of Task : ${this.taskTitle.value}`);
    console.log(`Add new Task assigneeTo: ${selectedEmployee.first_name} ${selectedEmployee.badge_number}`);
    console.log(`the Deadline Date for the task  ${this.deadlineDate.value}`);
  }


  
  getDefaultDeadline(): Date {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 7); // Add 7 days to current date
    return currentDate;
  }

  

}
