import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhonebookListComponent } from './phonebook/phonebook-list/phonebook-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'phonebook', pathMatch: 'full' }, 
  { path: 'phonebook', component: PhonebookListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
