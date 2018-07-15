import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'admin', component: AdminComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
