import { Component, Input, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon';


export type MenuItem = {
   icon  :string;
   lable : string;
   route : string;
}


@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})
export class CustomSidenavComponent {

  menuItems = signal<MenuItem[]>([
    {
      icon:  'dashboard',
      lable: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon:  'person',
      lable: 'Employees',
      route: 'Employees'
    },
    {
      icon:  'laptop',
      lable: 'IT Assets',
      route: 'ITAssets'
    },
    {
      icon:  'printer',
      lable: 'Printers & Inks',
      route: 'printers'
    },
    {
      icon:  'help',
      lable: 'IT Ticket',
      route: 'ITTicket'
    },
    {
      icon:  'inbox',
      lable: 'IT Requests',
      route: 'ITRequests'
    },
    {
      icon:  'local_shipping',
      lable: 'IT Suppliers',
      route: 'ITRequest'
    },
    {
      icon:  'local_offer',
      lable: 'Quotations',
      route: 'Quotations'
    },
    {
      icon:  'receipt',
      lable: 'Purchase Order',
      route: 'PurchaseOrder'
    },
    {
      icon:  'file_copy',
      lable: 'Purchase Invoice',
      route: 'PurchaseInvoice'
    },
    {
      icon:  'payment',
      lable: 'Payment Request',
      route: 'PaymentRequest'
    },
    {
      icon:  'settings',
      lable: 'Settings',
      route: 'Settings'
    },
  ]);

  sideNavCollapsed = signal(false);
  @Input() set collapsed(val:boolean){
    this.sideNavCollapsed.set(val);
  }

  profilePicSize = computed(()=>this.sideNavCollapsed()? '32': '100');

}
