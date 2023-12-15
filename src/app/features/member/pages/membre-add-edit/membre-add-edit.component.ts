import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Member} from "../../../../core/models/Member";
import {MembreService} from "../../service/membre.service";

@Component({
  selector: 'app-membre-add-edit',
  templateUrl: './membre-add-edit.component.html',
  styleUrls: ['./membre-add-edit.component.css']
})
export class MembreAddEditComponent implements OnInit{
  public memberForm!:FormGroup;
  constructor( private fb: FormBuilder, private memberService: MembreService) {
  }

  ngOnInit(): void {
    this.memberForm=this.fb.group({
      num : this.fb.control(''),
      name : this.fb.control(''),
      familyName : this.fb.control(''),
      accessionDate : this.fb.control(''),
      nationality : this.fb.control(''),
      identityDocumentType : this.fb.control(''),
      identityNumber: this.fb.control(''),
    })
  }
  create(){
    let  member:Member=this.memberForm.value;
    this.memberService.create(member).subscribe({
      next: data => {
        alert(JSON.stringify(data));
      }, error : err=>{
        console.log(err);
      }
    })
  }

}
