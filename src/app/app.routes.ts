import { Routes } from '@angular/router';
import {DashboardComponent} from '../app/pages/dashboard/dashboard.component'
import { EmployeesComponent } from './pages/employees/employees.component';
import { ItAssetsComponent } from './pages/it-assets/it-assets.component';
import { PrintersComponent } from './pages/printers/printers.component';
import { ItTicketComponent } from './pages/it-ticket/it-ticket.component';
import { ItRequestsComponent } from './pages/it-requests/it-requests.component';
import { ItSuppliersComponent } from './pages/it-suppliers/it-suppliers.component';
import { PurchaseOrderComponent } from './pages/purchase-order/purchase-order.component';
import { PurchaseInvoiceComponent } from './pages/purchase-invoice/purchase-invoice.component';
import { PaymentRequestComponent } from './pages/payment-request/payment-request.component';
import { SettingsComponent } from './pages/settings/settings.component';
export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'dashboard',
    },
    {
        path:'dashboard',
        component: DashboardComponent,
    },
    {
        path :'employees',
        component:EmployeesComponent,
    },
    {
        path:'itAssets',
        component:ItAssetsComponent,
    },
    {
        path:'printers',
        component:PrintersComponent,
    },
    {
        path:'itTicket',
        component:ItTicketComponent,
    },
    {
        path:'itRequests',
        component:ItRequestsComponent,
    },
    {
        path:'itSuppliers',
        component:ItSuppliersComponent,
    },
    {
        path:'purchaseOrder',
        component:PurchaseOrderComponent,
    },
    {
        path:'purchaseInvoice',
        component:PurchaseInvoiceComponent,
    },
    {
        path:'paymentRequest',
        component:PaymentRequestComponent,
    },
    {
        path:'settings',
        component:SettingsComponent,
    },
];
