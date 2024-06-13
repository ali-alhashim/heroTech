import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatDividerModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
