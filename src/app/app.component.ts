import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
   
  Person: PersonRecord;
  PersonList: PersonRecord[] = [];
  index: any;


  constructor() {
    this.Init();
  }

  Init() {
    this.title = 'CRUD';
    this.index = 0;
    this.Person = {
      Name: '',
      Email: '',
      Mobile: 0
    }
  }

  SaveRecord() {
    console.log(this.Person);
    if(this.index !=0) {
      this.index = 0;

    } else {
      this.PersonList.push(this.Person);
    }
    
    this.Init();
  }
  EditRecord(i: any) {
    this.index = 1;
    this.Person = this.PersonList[i];
  }
  DeleteRecord(i: any) {
    this.PersonList.splice(i, 1);
  }

}

interface PersonRecord {
  Name: string;
  Email: string;
  Mobile: number;
}
