import { BrowserModule    } from '@angular/platform-browser';
import { NgModule         } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent         } from './app.component';
import { MonsterListComponent } from './monster-list/monster-list.component';

import { AppRoutingModule } from './/app-routing.module';

import { MonsterService } from './monster.service';

@NgModule({
    declarations: [
        AppComponent,
        MonsterListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        MonsterService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
