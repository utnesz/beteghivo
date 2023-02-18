import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SzobaController } from '../model/szoba-controller';
import { SorszamController } from '../model/sorszam-controller';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SzobaService {
  apiURL: string = environment.apiUrl;

  rooms: string = 'szobak';

  sorszam: string = 'sorszam';

  constructor(private http: HttpClient) {}

  getAll(): Observable<SzobaController[]> {
    return this.http.get<SzobaController[]>(`${this.apiURL}${this.rooms}`);
  }

  getSorszam(): Observable<SorszamController[]> {
    return this.http.get<SorszamController[]>(`${this.apiURL}${this.sorszam}`);
  }

  post(sorszam: SorszamController): Observable<SorszamController> {
    return this.http.post<SorszamController>(
      `${this.apiURL}${this.sorszam}`,
      sorszam
    );
  }
}
