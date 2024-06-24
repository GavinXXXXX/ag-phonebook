import { Component, OnInit } from '@angular/core';
import { PhonebookService } from '../phonebook.service';
import { Phonebook } from '../../models/phonebook';

@Component({
  selector: 'app-phonebook-list',
  templateUrl: './phonebook-list.component.html',
  styleUrl: './phonebook-list.component.css'
})
export class PhonebookListComponent implements OnInit {
  Phonebook: Phonebook[] = [];
  constructor(private PhonebookService: PhonebookService) { }

  ngOnInit(): void {
    this.PhonebookService.getPhonebook().subscribe(
      data => this.Phonebook = data
    );
  }

  deleteContact(id: number): void {
    this.PhonebookService.deleteContact(id).subscribe(
      data => this.Phonebook = data
    )
    
  }

}
