import { Component, Input, OnInit } from "@angular/core";

import { System } from 'src/app/shared/interfaces/system.interface';
import { MonitorService } from 'src/app/shared/services/monitor.service';

@Component({
    selector: 'app-box-service',
    templateUrl: './box-service.component.html',
    styleUrls: ['./box-service.component.scss']
})
export class BoxServiceComponent implements OnInit {
    @Input() system: System
    status: string

    constructor(
        private monitorService: MonitorService
    ) {}

    ngOnInit() {
        this.checkServices()
    }

    checkServices(){
        this.system.services.forEach(service => {
            this.monitorService.checService(service.url)
            .subscribe(response => this.status = response)
        })
    }
}