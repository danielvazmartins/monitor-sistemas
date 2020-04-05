import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		HttpClientJsonpModule,
		HomeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
