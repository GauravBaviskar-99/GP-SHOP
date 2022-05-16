import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'shared/Guards/admin.guard';
import { AuthGuard } from 'shared/Guards/auth.guard';
import { AdminOrdersComponent } from './Components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './Components/admin-products/admin-products.component';
import { ProductFormComponent } from './Components/product-form/product-form.component';

const routes: Routes = [
    {
        path: 'admin/products/new',
        component: ProductFormComponent,
        canActivate: [AuthGuard, AdminGuard]
    },
    {
        path: 'admin/products/:id',
        component: ProductFormComponent,
        canActivate: [AuthGuard, AdminGuard]
    },
    {
        path: 'admin/products',
        component: AdminProductsComponent,
        canActivate: [AuthGuard, AdminGuard]
    },

    {
        path: 'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuard, AdminGuard]
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }