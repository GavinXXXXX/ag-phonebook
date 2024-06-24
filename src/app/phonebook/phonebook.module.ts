import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonebookListComponent } from './phonebook-list/phonebook-list.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    PhonebookListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PhonebookModule { }
