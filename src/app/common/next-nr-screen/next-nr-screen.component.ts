import { Vizsgalat } from './../../model/vizsgalat';
import { Sorszam } from './../../model/sorszam';
import { ExamService } from './../../services/exam.service';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { SorszamService } from 'src/app/services/sorszam.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-next-nr-screen',
  templateUrl: './next-nr-screen.component.html',
  styleUrls: ['./next-nr-screen.component.css'],
})
export class NextNrScreenComponent {
  exams$: Observable<Vizsgalat[]> = this.examService.getAll();

  exam: Vizsgalat = new Vizsgalat();

  sorszam: Sorszam = new Sorszam();

  constructor(
    private examService: ExamService,
    private sorszamService: SorszamService
  ) {}

  ngOninit(): void {}

  onButtonClick(exam: Vizsgalat): void {
    this.sorszamService.getSorszam(exam).subscribe((exam) => exam);
    console.log(exam);
  }
}
