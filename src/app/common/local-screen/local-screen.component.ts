import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Behivas } from 'src/app/model/behivas';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-local-screen',
  templateUrl: './local-screen.component.html',
  styleUrls: ['./local-screen.component.css'],
})
export class LocalScreenComponent implements OnInit {
  constructor(private http: HttpClient) {}

  behivasList$: Observable<Behivas[]> = this.getData();

  behivas: Behivas[] = [];

  behivas$: Behivas[0];

  getData(): Observable<Behivas[]> {
    return this.http.get<Behivas[]>(
      'https://felveteli.tigra.hu/feladat/frontend1/behivas/'
    );
  }

  // x = szoba száma;

  ngOnInit(): void {
    setInterval(() => {
      this.behivasList$.subscribe((behivas) => (this.behivas = behivas));
    }, 3000);
  }

  // when API works, present values of Behivas object into the DOM with using interpolation.
}
