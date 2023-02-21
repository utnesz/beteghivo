import { Sorszam } from './../model/sorszam';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SorszamService {
  apiURL: string = environment.apiUrl;

  sorszam: string = 'sorszam';

  constructor(private http: HttpClient) {}

  getSorszam(sorszam: Sorszam): Observable<Sorszam> {
    return this.http.post<Sorszam>(`${this.apiURL}${this.sorszam}`, sorszam);
  }
}
