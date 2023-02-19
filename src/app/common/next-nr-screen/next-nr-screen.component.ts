import { SorszamService } from './../../services/sorszam.service';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { SzobaController } from 'src/app/model/szoba-controller';
import { SzobaService } from 'src/app/services/szoba.service';
import { SorszamController } from 'src/app/model/sorszam-controller';
import { Ticket } from 'src/app/model/ticket';

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

  sorszamData: any;

  constructor(
    private roomService: SzobaService,
    private sorszamService: SorszamService
  ) {}

  onButtonClick(room: SzobaController) {
    const sorszam = new SorszamController();

    sorszam.vizsgalatKod = room.szam.toString();

    this.sorszamService.post(sorszam).subscribe((result) => {
      console.log(result);
      this.sorszamData = result;
    });

    console.log(sorszam);
  }

  ngOnInit(): void {
    this.rooms$.subscribe((room) => (this.room = room));
  }
}
