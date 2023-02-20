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
export class NextNrScreenComponent {
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

    sorszam.vizsgalatKod = room.szam.toString();

    this.sorszamService.post(sorszam).subscribe((result) => {
      console.log(result);
      this.sorszam = result;
    });

    console.log(sorszam);
  }
}
