import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CompetitionService} from "../../service/competition.service";
import {Competition} from "../../../../core/models/Competition";

@Component({
  selector: 'app-add-edit-competition',
  templateUrl: './add-edit-competition.component.html',
  styleUrls: ['./add-edit-competition.component.css']
})
export class AddEditCompetitionComponent implements OnInit {
public competitionForm!: FormGroup;

  constructor(private fb: FormBuilder, private competitionService: CompetitionService) { }

  ngOnInit(): void {
    this.competitionForm = this.fb.group({
      code: this.fb.control(''),
      date: this.fb.control(''),
      startTime: this.fb.control(''),
      endTime: this.fb.control(''),
      numberOfParticipants: this.fb.control(''),
      location: this.fb.control(''),
      amount: this.fb.control(''),

    });
  }

  create(): void {
    let competition: Competition = this.competitionForm.value;
  this.competitionService.create(competition).subscribe({
    next: data => {
      alert(JSON.stringify(data));
    },
    error: err => {
      console.log(err);
    }
  });
}

}
