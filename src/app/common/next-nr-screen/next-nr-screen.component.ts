import { SorszamController } from './../../model/sorszam-controller';
import { SorszamService } from './../../services/sorszam.service';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { SzobaController } from 'src/app/model/szoba-controller';
import { SzobaService } from 'src/app/services/szoba.service';
import { Ticket } from 'src/app/model/ticket';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-next-nr-screen',
  templateUrl: './next-nr-screen.component.html',
  styleUrls: ['./next-nr-screen.component.css'],
})
export class NextNrScreenComponent implements OnInit {
  rooms$: Observable<SzobaController[]> = this.roomService.getAll();

  ticket$: Observable<SorszamController[]> = this.sorszamService.getSorszam();

  room: SzobaController[] = [];

  @Input() ticket: Ticket[] = [];

  sorszam: SorszamController = new SorszamController();

  constructor(
    private roomService: SzobaService,
    private sorszamService: SorszamService,
    private http: HttpClient
  ) {}

  onButtonClick(room: SzobaController) {
    const sorszam = new SorszamController();

    const url = 'https://felveteli.tigra.hu/feladat/frontend1/sorszam';
    const body = { sorszam };
    const headers = { 'Content-Type': 'application/json' };

    sorszam.vizsgalatKod = room.szam.toString();

    this.http.post<SorszamController>(url, body, { headers }).subscribe(
      (response) => {
        this.sorszam = response;
        console.log('Response:', response);
      },
      (error) => console.log('Error:', error)
    );
    console.log(sorszam);
  }

  ngOnInit(): void {
    this.rooms$.subscribe((room) => (this.room = room));
  }
}
