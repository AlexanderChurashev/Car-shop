import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';

import { AppComponent } from './app.component';
import { CarsFormComponent } from './cars-form/cars-form.component';
import { CarComponent } from './car/car.component';
import {carsReducer} from './redux/cars.reducer';
import {CarsEffects} from './redux/cars.effects';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CarsFormComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([CarsEffects]),
    StoreModule.forRoot(
      {carPage: carsReducer},
      {
        runtimeChecks: {
          strictStateImmutability: false,
          strictActionImmutability: false,
        }
      }
    ),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
