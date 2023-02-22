import { Vizsgalat } from '../model/vizsgalat';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  apiURL: string = 'https://felveteli.tigra.hu/feladat/frontend1/';

  exam: string = 'vizsgalat';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Vizsgalat[]> {
    return this.http.get<Vizsgalat[]>(`${this.apiURL}${this.exam}`);
  }
}
