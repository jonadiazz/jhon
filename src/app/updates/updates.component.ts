import { Component, OnInit } from '@angular/core';
import { Update } from '../update';
import { UpdatesService } from '../updates.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {

  constructor(private updatesService: UpdatesService) { }

  updates: Update[];

  ngOnInit() {
    this.getUpdates();
  }

  getUpdates(): void {
    this.updates = this.updatesService.getUpdates();
  }
}
