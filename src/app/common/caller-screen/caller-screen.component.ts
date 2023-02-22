import { Behivas } from './../../model/behivas';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-caller-screen',
  templateUrl: './caller-screen.component.html',
  styleUrls: ['./caller-screen.component.css'],
})
export class CallerScreenComponent implements OnInit {
  constructor(private http: HttpClient) {}

  behivasList$: Observable<Behivas[]> = this.getData();

  behivas: Behivas[] = [];

  getData(): Observable<Behivas[]> {
    return this.http.get<Behivas[]>(
      'https://felveteli.tigra.hu/feladat/frontend1/behivas/'
    );
  }

  ngOnInit(): void {
    setInterval(() => {
      this.behivasList$.subscribe((behivas) =>
        (this.behivas = behivas).slice(-5).reverse()
      );
    }, 3000);
  }

  // when API works, make the list into the DOM with using *ngFor and interpolation.
}
