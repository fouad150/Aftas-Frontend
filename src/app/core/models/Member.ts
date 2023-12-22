import {IdentityDocumentType} from "../enums/IdentityDocumentType";
import {Ranking} from "./Ranking";

export class  Member{
  id:number;
  number: number;
  firstName: string;
  lastName: string;
  accessionDate: Date;
  nationality: string;
  identityDocument: IdentityDocumentType;
  identityNumber: string;

  constructor() {
    this.id=0;
    this.number=0;
    this.firstName='';
    this.lastName='';
    this.accessionDate=new Date();
    this.nationality='';
    this.identityDocument=IdentityDocumentType.CIN;
    this.identityNumber='';
  }
/*
  rankings: Ranking[];
*/

}
