import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { SzobaController } from 'src/app/model/szoba-controller';
import { SzobaService } from 'src/app/services/szoba.service';

@Component({
  selector: 'app-next-nr-screen',
  templateUrl: './next-nr-screen.component.html',
  styleUrls: ['./next-nr-screen.component.css'],
})
export class NextNrScreenComponent implements OnInit {
  rooms$: Observable<SzobaController[]> = this.roomService.getAll();

  room: SzobaController[] = [];

  constructor(private roomService: SzobaService) {}

  ngOnInit(): void {
    this.rooms$.subscribe((room) => (this.room = room));
  }
}
