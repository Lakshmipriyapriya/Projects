import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import swal from 'sweetalert2';
import {DataTablesModule} from 'angular-datatables';


export interface Ticket {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  userData: object;
  temp: boolean;
  tickets: Ticket[] = [
    {value: 'Critical', viewValue: 'Critical'},
    {value: 'Medium', viewValue: 'Medium'},
    {value: 'Low', viewValue: 'Low'}
  ];
  editorValue = {
    issueDescription : ''
  };

  ticketData = {
    userName: '',
    emailId: '',
    ticketType: '',
    issueTitle: '',
    issueDescription: '',
    caseSeverity: ''
  };

  ideaData = {
    ideas: '',
  };

  ticketCreation(ticketData) {
    console.log('res ***', ticketData);
    this.api.postTicket(ticketData).subscribe((res: any) => {
      ticketData = res;
      console.log('response from posted ticket data is:', res);
      swal(
        'Done!!',
        'Ticket Creation successfull',
       'success'
      );
    });
  }


  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  feedback() {
    swal(
      'Done!!',
      'Thanks for your valuble feedback',
      'success'
    );
  }



  constructor(private api: ApiService , private router: Router) {
    this.temp = false;
   }



  ngOnInit() {
  }
}
