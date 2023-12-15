import {IdentityDocumentType} from "../enums/IdentityDocumentType";
import {Ranking} from "./Ranking";

export  interface Member{
  num: number;
  name: string;
  familyName: string;
  accessionDate: Date;
  nationality: string;
  identityDocumentType: IdentityDocumentType;
  identityNumber: string;
  rankings: Ranking[];

}
