import {Component} from '@angular/core';
import {Car} from '../car.model';
import {CarsService} from '../services/cars.service';
import * as moment from 'moment';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent {
  carName = '';
  carModel = '';

  constructor(private carService: CarsService) { }

  onAdd() {
    if (this.carName === '' || this.carModel === '') { return; }
    const date = moment().format('DD.MM.YY');
    const car = new Car(
      this.carName,
      date,
      this.carModel,
    );
    this.carService.addCar(car);
    this.carModel = '';
    this.carName = '';
  }

  onLoad() {
    this.carService.loadCars();
  }
}
