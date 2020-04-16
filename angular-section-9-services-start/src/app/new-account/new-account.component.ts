import { AccountsService } from './../accounts.service';
import { Component, EventEmitter, Output } from '@angular/core';

import { LoggingService } from '../logging.service'
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  constructor(private loggingService: LoggingService,
    private AccountsService: AccountsService) {
    this.AccountsService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    )
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.AccountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
