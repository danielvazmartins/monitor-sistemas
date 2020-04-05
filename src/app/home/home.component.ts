import { Component, OnInit } from "@angular/core";

import { Observable } from 'rxjs';

import { MonitorService } from '../shared/services/monitor.service';
import { System } from '../shared/interfaces/system.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    systems$: Observable<System[]>

    constructor(
        private monitorService: MonitorService
    ) {}

    ngOnInit() {
        this.getSystems()
    }

    getSystems() {
        this.systems$ = this.monitorService.getSystems()
    }
}