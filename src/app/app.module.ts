import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { SharedModule } from './shared/shared.module';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { StationsComponent } from './main/stations/stations.component';
import { WeatherComponent } from './main/weather/weather.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import { StationSelectorComponent } from './shared/weather/station-selector/station-selector.component';
import { AuthorizeComponent } from './shared/weather/authorize/authorize.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StationsComponent,
    WeatherComponent,
    StationSelectorComponent,
    AuthorizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
    Ng2GoogleChartsModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
