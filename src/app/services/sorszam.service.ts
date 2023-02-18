import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SorszamController } from '../model/sorszam-controller';

@Injectable({
  providedIn: 'root',
})
export class SorszamService {
  apiURL: string = environment.apiUrl;

  sorszam: string = 'sorszam';

  constructor(private http: HttpClient) {}

  getSorszam(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}${this.sorszam}`);
  }

  post(sorszam: SorszamController): Observable<SorszamController> {
    return this.http.post<SorszamController>(
      `${this.apiURL}${this.sorszam}`,
      sorszam
    );
  }
}
