import { Sorszam } from './../../model/sorszam';
import { ExamService } from './../../services/exam.service';
import { Vizsgalat } from 'src/app/model/vizsgalat';
import { SorszamService } from './../../services/sorszam.service';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Szobak } from 'src/app/model/szobak';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-next-nr-screen',
  templateUrl: './next-nr-screen.component.html',
  styleUrls: ['./next-nr-screen.component.css'],
})
export class NextNrScreenComponent {
  exams$: Observable<Vizsgalat[]> = this.examService.getAll();

  exam: Vizsgalat = new Vizsgalat();

  sorszam: Sorszam = new Sorszam();

  constructor(private examService: ExamService) {}

  onButtonClick(sorszam: Vizsgalat) {
    this.examService.post(sorszam).subscribe((sorszam) => {
      console.log(sorszam);
      this.sorszam = sorszam;
    });
  }
}
