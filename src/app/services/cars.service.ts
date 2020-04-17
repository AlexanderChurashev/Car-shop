import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {IAppState} from '../redux/app.state';
import {Car} from '../car.model';
import {AddCar, DeleteCar, LoadCars, UpdateCar} from '../redux/cars.action';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  static BASE_URL = 'http://localhost:3000/';

  constructor(
    private http: HttpClient,
    private store: Store<IAppState>
  ) {
  }

  preloadCars$(): Observable<Car[]> {
    return this.http.get(CarsService.BASE_URL + 'cars').pipe(
      map((cars: Car[]) => cars)
    );
  }

  loadCars(): void {
    this.preloadCars$().subscribe((cars: Car[]) => this.store.dispatch(new LoadCars(cars)));
  }

  addCar(car: Car) {
    this.http.post(CarsService.BASE_URL + 'cars', car)
      // tslint:disable-next-line:no-shadowed-variable
      .subscribe((car: Car) => this.store.dispatch(new AddCar(car)));
  }

  deleteCar(car: Car) {
    this.http.delete(CarsService.BASE_URL + 'cars/' + car.id)
      .subscribe(() => this.store.dispatch(new DeleteCar(car)));
  }

  updateCar(car: Car) {
    this.http.put(CarsService.BASE_URL + 'cars/' + car.id, car)
      // tslint:disable-next-line:no-shadowed-variable
      .subscribe((car: Car) => this.store.dispatch(new UpdateCar(car)));
  }
}
