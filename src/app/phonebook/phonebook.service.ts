import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Phonebook } from '../models/phonebook';


@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  private apiUrl = environment.apiUrl + '/phonebook';
  constructor(private http: HttpClient) {}
  getPhonebook(): Observable<Phonebook[]> {
    return this.http.get<Phonebook[]>(this.apiUrl)
  }

  deleteContact(id: number): Observable<Phonebook[]> {
    return this.http.delete<Phonebook[]>(this.apiUrl + '/' + id)
  }
  

}
