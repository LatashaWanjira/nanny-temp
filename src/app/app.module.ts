import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Title } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NewNannyComponent } from './new-nanny/new-nanny.component';
import { EditNannyComponent } from './edit-nanny/edit-nanny.component';
import { NannyDetailsComponent } from './nanny-details/nanny-details.component';
import { NannyListComponent } from './nanny-list/nanny-list.component';

const routes: Routes = [
  { path: "admin-login", component: AdminLoginComponent },
  { path: "dashboard", component: AdminDashboardComponent, data: { title: 'Dashboard' } },
  { path: "new-nanny", component: NewNannyComponent },
  { path: "edit-nanny", component: EditNannyComponent },
  { path: "nannies", component: NannyListComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    NewNannyComponent,
    EditNannyComponent,
    NannyDetailsComponent,
    NannyListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
