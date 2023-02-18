import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { SzobaController } from 'src/app/model/szoba-controller';
import { SzobaService } from 'src/app/services/szoba.service';
import { SorszamController } from 'src/app/model/sorszam-controller';

@Component({
  selector: 'app-next-nr-screen',
  templateUrl: './next-nr-screen.component.html',
  styleUrls: ['./next-nr-screen.component.css'],
})
export class NextNrScreenComponent implements OnInit {
  rooms$: Observable<SzobaController[]> = this.roomService.getAll();

  patients$: Observable<SorszamController[]> = this.roomService.getSorszam();

  room: SzobaController[] = [];

  nextNr: SorszamController[] = [];

  constructor(private roomService: SzobaService) {}

  onButtonClick(room: SzobaController) {
    const sorszam = new SorszamController();

    sorszam.vizsgalatKod = room.szam.toString();

    this.nextNr = [sorszam];

    console.log(sorszam);

    this.roomService
      .post(sorszam)
      .subscribe(() => (this.patients$ = this.roomService.getSorszam()));
  }

  ngOnInit(): void {
    this.rooms$.subscribe((room) => (this.room = room));
  }
}
