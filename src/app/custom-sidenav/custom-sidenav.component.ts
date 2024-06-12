import { Component, Input, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

export type MenuItem = {
   icon  :string;
   lable : string;
   route : string;
}


@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
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
      route: 'employees'
    },
    {
      icon:  'laptop',
      lable: 'IT Assets',
      route: 'itAssets'
    },
    {
      icon:  'printer',
      lable: 'Printers & Inks',
      route: 'printers'
    },
    {
      icon:  'help',
      lable: 'IT Ticket',
      route: 'itTicket'
    },
    {
      icon:  'inbox',
      lable: 'IT Requests',
      route: 'itRequests'
    },
    {
      icon:  'local_shipping',
      lable: 'IT Suppliers',
      route: 'itSuppliers'
    },
    {
      icon:  'local_offer',
      lable: 'Quotations',
      route: 'quotations'
    },
    {
      icon:  'receipt',
      lable: 'Purchase Order',
      route: 'purchaseOrder'
    },
    {
      icon:  'file_copy',
      lable: 'Purchase Invoice',
      route: 'purchaseInvoice'
    },
    {
      icon:  'payment',
      lable: 'Payment Request',
      route: 'paymentRequest'
    },
    {
      icon:  'settings',
      lable: 'Settings',
      route: 'settings'
    },
  ]);

  sideNavCollapsed = signal(false);
  @Input() set collapsed(val:boolean){
    this.sideNavCollapsed.set(val);
  }

  profilePicSize = computed(()=>this.sideNavCollapsed()? '32': '100');

}
