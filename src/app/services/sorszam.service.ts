import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vizsgalat } from '../model/vizsgalat';

@Injectable({
  providedIn: 'root',
})
export class SorszamService {
  apiURL: string = environment.apiUrl;

  sorszam: string = 'sorszam';

  constructor(private http: HttpClient) {}

  getSorszam(exam: Vizsgalat): Observable<Vizsgalat> {
    return this.http.post<Vizsgalat>(`${this.apiURL}${this.sorszam}`, exam);
  }
}
