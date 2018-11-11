import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ticket-management';
}
export interface Ticket {
  userName: String;
  emailId: String;
  ticketType: String;
  issueTitle: String;
  issueDescription: String;
  caseSeverity: String;
}
