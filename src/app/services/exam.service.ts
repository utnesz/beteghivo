import { Sorszam } from './../model/sorszam';
import { Vizsgalat } from '../model/vizsgalat';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  apiURL: string = 'https://felveteli.tigra.hu/feladat/frontend1/';

  exam: string = 'vizsgalat';
  sorszam: string = 'sorszam';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Vizsgalat[]> {
    return this.http.get<Vizsgalat[]>(`${this.apiURL}${this.exam}`);
  }

  post(sorszam: Sorszam): Observable<Sorszam> {
    return this.http.post<Sorszam>(`${this.apiURL}${this.sorszam}`, sorszam);
  }
}
