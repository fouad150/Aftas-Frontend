import {IdentityDocumentType} from "../enums/IdentityDocumentType";

export class  MemberDTO{
  number: number;
  firstName: string;
  lastName: string;
  accessionDate: Date;
  nationality: string;
  identityDocument: string;
  identityNumber: string;

  constructor(
    number?: number,
    name?: string,
    familyName?: string,
    accessionDate?: Date,
    nationality?: string,
    identityDocument?: string,
    identityNumber?: string
  ) {
    this.number = number || 0;
    this.firstName = name || '';
    this.lastName = familyName || '';
    this.accessionDate = accessionDate || new Date();
    this.nationality = nationality || '';
    this.identityDocument = identityDocument || "CIN";
    this.identityNumber = identityNumber || '';
  }
  /*
    rankings: Ranking[];
  */

}
