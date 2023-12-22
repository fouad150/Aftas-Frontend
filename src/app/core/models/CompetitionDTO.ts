export class CompetitionDTO{
  code: string;
  date: Date;
  startTime: string;
  endTime: string;
  numberOfParticipants: number;
  location: string;
  amount: number;
  status:string;

  constructor() {
    this.code = '';
    this.date = new Date();
    this.startTime = '';
    this.endTime = '';
    this.numberOfParticipants = 0;
    this.location = '';
    this.amount = 0;
    this.status='';
  }
}
