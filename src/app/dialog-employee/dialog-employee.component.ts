import { Component,ChangeDetectionStrategy } from '@angular/core';
import { CommonModule , AsyncPipe} from '@angular/common';
import { FormsModule, FormControl , ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule, MatDialog} from '@angular/material/dialog';
import { Department } from '../interfaces/department';
import {provideNativeDateAdapter} from '@angular/material/core';
import {Observable} from 'rxjs';
import { departmentData } from '../mock-data';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-dialog-employee',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dialog-employee.component.html',
  styleUrl: './dialog-employee.component.css'
})
export class DialogEmployeeComponent {

  firstName = new FormControl('');
  lastName  = new FormControl('');
  badgeNumber = new FormControl('');
  mobileNumber = new FormControl('');
  nationalId   = new FormControl('');
  email = new FormControl('');
  jobTitle = new FormControl('');
  departmentCode = new FormControl<string | Department>('');
  departmentList = departmentData;
  birthDay   = new FormControl('');
  filteredOptions!: Observable<Department[]>;


  displayFn(department: Department): string {
  
    return department && department.department_code ? `${department.department_code} ${department.name}` : '';
  }


  ngOnInit() {
    this.filteredOptions = this.departmentCode.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.department_code || '';
        return name ? this._filter(name as string) : this.departmentList.slice();
      }),
    );
  }


  private _filter(name: string): Department[] {
    const filterValue = name.toLowerCase();

    return this.departmentList.filter(option => 
      option.department_code.toLowerCase().includes(filterValue) ||
      option.name.toLowerCase().includes(filterValue)  
    );
  }



  addNewEmployee()
  {

  }

}
