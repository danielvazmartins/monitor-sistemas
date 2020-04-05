import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HeaderModule } from '../shared/components/header/header.module';
import { BoxServiceComponent } from './box-service/box-service.component';

@NgModule({
    declarations: [
        HomeComponent,
        BoxServiceComponent
    ],
    imports: [
        CommonModule,
        HeaderModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {}